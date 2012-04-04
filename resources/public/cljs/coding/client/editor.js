goog.provide('coding.client.editor');
goog.require('cljs.core');
goog.require('waltz.state');
goog.require('coding.client.util');
goog.require('jayq.util');
goog.require('coding.client.core');
goog.require('jayq.core');
goog.require('waltz.state');
coding.client.editor.do_submit = (function do_submit(){
return jayq.core.trigger.call(null,jayq.core.$.call(null,"﷐'form"),"﷐'submit");
});
coding.client.editor.key_bindings = cljs.core.ObjMap.fromObject(["Cmd-Enter","Ctrl-Enter"],{"Cmd-Enter":coding.client.editor.do_submit,"Ctrl-Enter":coding.client.editor.do_submit});
coding.client.editor.__GT_editor = (function __GT_editor(elem,opts){
return CodeMirror['fromTextArea'].call(null,document.getElementById(elem),jayq.util.map__GT_js.call(null,opts));
});
/**
* @param {...*} var_args
*/
coding.client.editor.make_editor = (function() { 
var make_editor__delegate = function (p__22792){
var vec__22793__22794 = p__22792;
var mode__22795 = cljs.core.nth.call(null,vec__22793__22794,0,null);

var e__22797 = coding.client.editor.__GT_editor.call(null,"codes",cljs.core.ObjMap.fromObject(["﷐'mode","﷐'lineNumbers","﷐'matchBrackets","﷐'extraKeys"],{"﷐'mode":(function (){var or__3548__auto____22796 = mode__22795;

if(cljs.core.truth_(or__3548__auto____22796))
{return or__3548__auto____22796;
} else
{return "text/x-clojure";
}
})(),"﷐'lineNumbers":false,"﷐'matchBrackets":true,"﷐'extraKeys":jayq.util.map__GT_js.call(null,coding.client.editor.key_bindings)}));

return e__22797;
};
var make_editor = function (var_args){
var p__22792 = null;
if (goog.isDef(var_args)) {
  p__22792 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return make_editor__delegate.call(this, p__22792);
};
make_editor.cljs$lang$maxFixedArity = 0;
make_editor.cljs$lang$applyTo = (function (arglist__22798){
var p__22792 = cljs.core.seq( arglist__22798 );;
return make_editor__delegate.call(this, p__22792);
});
return make_editor;
})()
;
coding.client.editor.$errors = jayq.core.$.call(null,"#errors");
coding.client.editor.error_lines = cljs.core.atom.call(null,cljs.core.Vector.fromArray([]));
coding.client.editor.state = waltz.state.machine.call(null,"﷐'editor");
coding.client.editor.editor = coding.client.editor.make_editor.call(null);
coding.client.editor.clj_submit_url = "/submit";
coding.client.editor.error_line = (function error_line(l,klass){
return coding.client.editor.editor.setLineClass(l,cljs.core.name.call(null,klass));
});
coding.client.editor.submit_code = (function submit_code(){
var codes__22799 = coding.client.editor.__GT_val.call(null,coding.client.editor.editor);
var loc__22800 = jayq.core.attr.call(null,jayq.core.$.call(null,"﷐'form"),"﷐'action");

return jayq.core.xhr.call(null,cljs.core.Vector.fromArray(["﷐'post",loc__22800]),cljs.core.ObjMap.fromObject(["﷐'codes"],{"﷐'codes":codes__22799}),(function (v){
var map__22801__22802 = cljs.core.js__GT_clj.call(null,v,"﷐'keywordize-keys",true);
var map__22801__22803 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__22801__22802))?cljs.core.apply.call(null,cljs.core.hash_map,map__22801__22802):map__22801__22802);
var exception__22804 = cljs.core.get.call(null,map__22801__22803,"﷐'exception");
var out__22805 = cljs.core.get.call(null,map__22801__22803,"﷐'out");
var result__22806 = cljs.core.get.call(null,map__22801__22803,"﷐'result");
var moves__22807 = cljs.core.get.call(null,map__22801__22803,"﷐'moves");

if(cljs.core.truth_(exception__22804))
{coding.client.util.log.call(null,"Exception");
waltz.state.transition.call(null,coding.client.editor.state,"﷐'error",exception__22804);
} else
{}
coding.client.util.log.call(null,cljs.core.pr_str.call(null,moves__22807));
return waltz.state.transition.call(null,coding.client.core.app,"﷐'executing",v);
}));
});
coding.client.editor.__GT_val = (function __GT_val(){
return coding.client.editor.editor.getValue();
});
coding.client.editor.set_val = (function set_val(v){
return coding.client.editor.editor.setValue(v);
});
coding.client.editor.set_mode = (function set_mode(m){
return coding.client.editor.editor.setOption("mode",m);
});
coding.client.editor.set_submit_url = (function set_submit_url(u){
return jayq.core.attr.call(null,jayq.core.$.call(null,"﷐'form"),"﷐'action",u);
});
coding.client.editor.focus = (function focus(){
return coding.client.editor.editor.focus();
});
coding.client.editor.refresh = (function refresh(){
return coding.client.editor.editor.refresh();
});
var s__3001__auto____22828 = waltz.state.out_STAR_.call(null,waltz.state.in_STAR_.call(null,waltz.state.state_STAR_.call(null),(function (p__22808){
var map__22809__22810 = p__22808;
var map__22809__22811 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__22809__22810))?cljs.core.apply.call(null,cljs.core.hash_map,map__22809__22810):map__22809__22810);
var stack__22812 = cljs.core.get.call(null,map__22809__22811,"﷐'stack");
var message__22813 = cljs.core.get.call(null,map__22809__22811,"﷐'message");

cljs.core.reset_BANG_.call(null,coding.client.editor.error_lines,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.dec,"﷐'line"),cljs.core.filter.call(null,"﷐'line",stack__22812)));
var temp__3698__auto____22814 = cljs.core.seq.call(null,cljs.core.deref.call(null,coding.client.editor.error_lines));

if(cljs.core.truth_(temp__3698__auto____22814))
{var lines__22815 = temp__3698__auto____22814;

coding.client.editor.error_line.call(null,cljs.core.first.call(null,lines__22815),"﷐'error-source");
var G__22816__22817 = cljs.core.seq.call(null,cljs.core.rest.call(null,lines__22815));

if(cljs.core.truth_(G__22816__22817))
{var l__22818 = cljs.core.first.call(null,G__22816__22817);
var G__22816__22819 = G__22816__22817;

while(true){
coding.client.editor.error_line.call(null,l__22818,"﷐'error-stack");
var temp__3698__auto____22820 = cljs.core.next.call(null,G__22816__22819);

if(cljs.core.truth_(temp__3698__auto____22820))
{var G__22816__22821 = temp__3698__auto____22820;

{
var G__22829 = cljs.core.first.call(null,G__22816__22821);
var G__22830 = G__22816__22821;
l__22818 = G__22829;
G__22816__22819 = G__22830;
continue;
}
} else
{}
break;
}
} else
{}
} else
{}
jayq.core.text.call(null,coding.client.editor.$errors,message__22813);
return jayq.core.slide_down.call(null,coding.client.editor.$errors);
})),(function (){
jayq.core.slide_up.call(null,coding.client.editor.$errors,"fast",(function (){
return coding.client.editor.hide.call(null,coding.client.editor.$errors);
}));
var G__22822__22823 = cljs.core.seq.call(null,cljs.core.deref.call(null,coding.client.editor.error_lines));

if(cljs.core.truth_(G__22822__22823))
{var l__22824 = cljs.core.first.call(null,G__22822__22823);
var G__22822__22825 = G__22822__22823;

while(true){
coding.client.editor.editor.setLineClass(l__22824,null);
var temp__3698__auto____22826 = cljs.core.next.call(null,G__22822__22825);

if(cljs.core.truth_(temp__3698__auto____22826))
{var G__22822__22827 = temp__3698__auto____22826;

{
var G__22831 = cljs.core.first.call(null,G__22822__22827);
var G__22832 = G__22822__22827;
l__22824 = G__22831;
G__22822__22825 = G__22832;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.reset_BANG_.call(null,coding.client.editor.error_lines,cljs.core.Vector.fromArray([]));
}));

waltz.state.add_state.call(null,coding.client.editor.state,"﷐'error",s__3001__auto____22828);
var s__3001__auto____22833 = waltz.state.in_STAR_.call(null,waltz.state.state_STAR_.call(null),(function (){
coding.client.editor.set_mode.call(null,"text/x-clojure");
coding.client.editor.set_submit_url.call(null,coding.client.editor.clj_submit_url);
coding.client.editor.set_val.call(null,";; Press Ctrl-Enter or Cmd-Enter to evaluate an expression");
return coding.client.editor.submit_code.call(null);
}));

waltz.state.add_state.call(null,coding.client.editor.state,"﷐'clojure",s__3001__auto____22833);
waltz.state.add_transition.call(null,coding.client.editor.state,"﷐'clean",(function (){
return waltz.state.unset.call(null,coding.client.editor.state,"﷐'error");
}));
waltz.state.add_transition.call(null,coding.client.editor.state,"﷐'set-language",(function (lang){
waltz.state.transition.call(null,coding.client.editor.state,"﷐'clean");
return waltz.state.set.call(null,coding.client.editor.state,lang);
}));
waltz.state.add_transition.call(null,coding.client.editor.state,"﷐'submit",(function (){
waltz.state.unset.call(null,coding.client.editor.state,"﷐'error");
return coding.client.editor.submit_code.call(null);
}));
waltz.state.add_transition.call(null,coding.client.editor.state,"﷐'error",(function (ex){
return waltz.state.set.call(null,coding.client.editor.state,"﷐'error",ex);
}));
waltz.state.transition.call(null,coding.client.editor.state,"﷐'set-language","﷐'clojure");
