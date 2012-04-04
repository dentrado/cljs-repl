(ns coding.client.main
  (:refer-clojure :exclude [val])
  (:require [coding.client.editor :as editor]
            [waltz.state :as state]
            [waltz.transition :as trans]
            [monet.canvas :as canvas]
            [monet.geometry :as geo])
  (:use-macros [waltz.macros :only [defstate deftrans in out]]
               [cljs.core :only [this-as]])
  (:use [coding.client.core :only [app]]
        [coding.client.util :only [log]]
        [waltz.state :only [transition]]
        [jayq.core :only [$ append remove text bind]]
        [jayq.util :only [map->js]]))

(def $body ($ :body))
(def $repl-out ($ :#repl-out))

(def app (state/machine :app))

(deftrans app :submitting [] 
  (state/set app :submitting)
  (transition editor/state :submit))

(deftrans app :executing [v]
  (let [output (js/eval v)
        $div ($ "<div class=\"output\"></div>")]
    (if (or (instance? js/jQuery output)
            (instance? js/HTMLElement output))
      (append $div output)
      (text $div (pr-str output)))
    (append $repl-out $div)))

(bind ($ "form") :submit
      (fn [e]
        (.preventDefault e)
        (transition app :submitting)))

(defn clear-repl []
  (remove ($ :.output))
  nil)
