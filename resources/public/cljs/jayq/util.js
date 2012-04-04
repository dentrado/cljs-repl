goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__24552 = cljs.core.js_obj.call(null);

var G__24553__24554 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__24553__24554))
{var G__24556__24558 = cljs.core.first.call(null,G__24553__24554);
var vec__24557__24559 = G__24556__24558;
var k__24560 = cljs.core.nth.call(null,vec__24557__24559,0,null);
var v__24561 = cljs.core.nth.call(null,vec__24557__24559,1,null);
var G__24553__24562 = G__24553__24554;

var G__24556__24563 = G__24556__24558;
var G__24553__24564 = G__24553__24562;

while(true){
var vec__24565__24566 = G__24556__24563;
var k__24567 = cljs.core.nth.call(null,vec__24565__24566,0,null);
var v__24568 = cljs.core.nth.call(null,vec__24565__24566,1,null);
var G__24553__24569 = G__24553__24564;

(out__24552[cljs.core.name.call(null,k__24567)] = v__24568);
var temp__3698__auto____24570 = cljs.core.next.call(null,G__24553__24569);

if(cljs.core.truth_(temp__3698__auto____24570))
{var G__24553__24571 = temp__3698__auto____24570;

{
var G__24572 = cljs.core.first.call(null,G__24553__24571);
var G__24573 = G__24553__24571;
G__24556__24563 = G__24572;
G__24553__24564 = G__24573;
continue;
}
} else
{}
break;
}
} else
{}
return out__24552;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__24574 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__24574);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__24575){
var v = cljs.core.first(arglist__24575);
var text = cljs.core.rest(arglist__24575);
return log__delegate.call(this, v, text);
});
return log;
})()
;
