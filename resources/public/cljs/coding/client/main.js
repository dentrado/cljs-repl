goog.provide('coding.client.main');
goog.require('cljs.core');
goog.require('waltz.state');
goog.require('coding.client.util');
goog.require('jayq.util');
goog.require('jayq.core');
goog.require('coding.client.core');
goog.require('coding.client.editor');
goog.require('waltz.state');
goog.require('waltz.transition');
goog.require('monet.canvas');
goog.require('monet.geometry');
goog.require('c2.scale');
coding.client.main.$body = jayq.core.$.call(null,"﷐'body");
coding.client.main.$repl_out = jayq.core.$.call(null,"﷐'#repl-out");
coding.client.main.app = waltz.state.machine.call(null,"﷐'app");
waltz.state.add_transition.call(null,coding.client.core.app,"﷐'submitting",(function (){
waltz.state.set.call(null,coding.client.core.app,"﷐'submitting");
return waltz.state.transition.call(null,coding.client.editor.state,"﷐'submit");
}));
waltz.state.add_transition.call(null,coding.client.core.app,"﷐'executing",(function (v){
var output__22789 = eval.call(null,v);
var $div__22790 = jayq.core.$.call(null,"<div class=\"output\"></div>");

if(cljs.core.truth_((function (){var or__3548__auto____22791 = cljs.core.instance_QMARK_.call(null,jQuery,output__22789);

if(cljs.core.truth_(or__3548__auto____22791))
{return or__3548__auto____22791;
} else
{return cljs.core.instance_QMARK_.call(null,HTMLElement,output__22789);
}
})()))
{jayq.core.append.call(null,$div__22790,output__22789);
} else
{jayq.core.text.call(null,$div__22790,cljs.core.pr_str.call(null,output__22789));
}
return jayq.core.append.call(null,coding.client.main.$repl_out,$div__22790);
}));
jayq.core.bind.call(null,jayq.core.$.call(null,"form"),"﷐'submit",(function (e){
e.preventDefault();
return waltz.state.transition.call(null,coding.client.core.app,"﷐'submitting");
}));
coding.client.main.clear_repl = (function clear_repl(){
jayq.core.remove.call(null,jayq.core.$.call(null,"﷐'.output"));
return null;
});
