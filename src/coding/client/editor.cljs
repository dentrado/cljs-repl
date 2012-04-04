(ns coding.client.editor
  (:refer-clojure :exclude [val])
  (:require [waltz.state :as state])
  (:use-macros [waltz.macros :only [defstate deftrans in out]])
  (:use [coding.client.core :only [app]]
        [waltz.state :only [transition]]
        [jayq.core :only [$ append queue text val bind trigger 
                          slide-up slide-down attr xhr]]
        [coding.client.util :only [log]]
        [jayq.util :only [map->js]]))


;;*********************************************************
;; Events
;;*********************************************************

(defn do-submit []
  (trigger ($ :form) :submit))

;;*********************************************************
;; Creating
;;*********************************************************

(def key-bindings {"Cmd-Enter" do-submit
                   "Ctrl-Enter" do-submit}) 

(defn ->editor [elem opts]
  (js/CodeMirror.fromTextArea (.getElementById js/document elem)
                              (map->js opts)))

(defn make-editor [& [mode]]
  (let [e (->editor "codes" {:mode (or mode "text/x-clojure")
                             :lineNumbers false
                             :matchBrackets true
                             :extraKeys (map->js key-bindings)})]
    e))

;;*********************************************************
;; elems
;;*********************************************************

(def $errors ($ "#errors"))
(def error-lines (atom []))
(def state (state/machine :editor))
(def editor (make-editor))

(def clj-submit-url "/submit")

;;*********************************************************
;; Errors
;;*********************************************************

(defn error-line [l klass]
  (.setLineClass editor l (name klass)))

;;*********************************************************
;; Submitting
;;*********************************************************

(defn submit-code []
  (let [codes (->val editor)
        loc (attr ($ :form) :action)]
    (xhr [:post loc] {:codes codes} 
         (fn [v]
           (let [{:keys [moves result out exception]} (js->clj v :keywordize-keys true)]
             (when exception
               (log "Exception")
               (transition state :error exception))
             (log (pr-str moves))
             (transition app :executing v))))))

;;*********************************************************
;; Params
;;*********************************************************

(defn ->val []
  (. editor (getValue)))

(defn set-val [v]
  (. editor (setValue v)))

(defn- set-mode [m]
  (.setOption editor "mode" m))

(defn- set-submit-url [u]
  (attr ($ :form) :action u))

(defn- focus []
  (.focus editor))

(defn refresh []
  (.refresh editor))

;;*********************************************************
;; States
;;
;;*********************************************************

(defstate state :error
  (in (fn [{:keys [message stack]}]
        (reset! error-lines (map (comp dec :line) (filter :line stack)))
        (when-let [lines (seq @error-lines)]
          (error-line (first lines) :error-source)
          (doseq [l (rest lines)]
            (error-line l :error-stack)))
        (text $errors message)
        (slide-down $errors)))
  (out (fn []
         (slide-up $errors "fast" (fn []
                                    (hide $errors)))
         (doseq [l @error-lines]
           (.setLineClass editor l nil))
         (reset! error-lines []))))

(defstate state :clojure
  (in (fn []
        (set-mode "text/x-clojure")
        (set-submit-url clj-submit-url)
        (set-val ";; Press Ctrl-Enter or Cmd-Enter to evaluate an expression")
        (submit-code))))

(deftrans state :clean []
  (state/unset state :error))

(deftrans state :set-language [lang]
  (transition state :clean)
  (state/set state lang))

(deftrans state :submit []
  (state/unset state :error)
  (submit-code))

(deftrans state :error [ex]
  (state/set state :error ex))

(transition state :set-language :clojure)

(comment
  (.setOption editor "onChange"
              (fn [ed delta]
                (submit-code)))) 
