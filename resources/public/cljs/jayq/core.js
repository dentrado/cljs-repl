goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('jayq.util');
goog.require('clojure.string');
jayq.core.crate_meta = (function crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function __GT_selector(sel){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,sel)))
{return sel;
} else
{if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,sel)))
{return cljs.core.str.call(null,"[crateGroup=",jayq.core.crate_meta.call(null,sel),"]");
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,sel)))
{return cljs.core.name.call(null,sel);
} else
{if(cljs.core.truth_("﷐'else"))
{return sel;
} else
{return null;
}
}
}
}
});
/**
* @param {...*} var_args
*/
jayq.core.$ = (function() { 
var $__delegate = function (sel,p__24576){
var vec__24577__24578 = p__24576;
var context__24579 = cljs.core.nth.call(null,vec__24577__24578,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__24579)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__24579);
}
};
var $ = function (sel,var_args){
var p__24576 = null;
if (goog.isDef(var_args)) {
  p__24576 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__24576);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__24580){
var sel = cljs.core.first(arglist__24580);
var p__24576 = cljs.core.rest(arglist__24580);
return $__delegate.call(this, sel, p__24576);
});
return $;
})()
;
jQuery.prototype.cljs$core$IReduce$ = true;
jQuery.prototype.cljs$core$IReduce$_reduce = (function (this$,f){
return cljs.core.ci_reduce.call(null,jayq.core.coll,f,cljs.core.first.call(null,this$),cljs.core.count.call(null,this$));
});
jQuery.prototype.cljs$core$IReduce$_reduce = (function (this$,f,start){
return cljs.core.ci_reduce.call(null,jayq.core.coll,f,start,jayq.core.i);
});
jQuery.prototype.cljs$core$ILookup$ = true;
jQuery.prototype.cljs$core$ILookup$_lookup = (function() {
var G__24582 = null;
var G__24582__24583 = (function (this$,k){
var or__3548__auto____24581 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____24581))
{return or__3548__auto____24581;
} else
{return null;
}
});
var G__24582__24584 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__24582 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__24582__24583.call(this,this$,k);
case  3 :
return G__24582__24584.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__24582;
})()
;
jQuery.prototype.cljs$core$ISequential$ = true;
jQuery.prototype.cljs$core$IIndexed$ = true;
jQuery.prototype.cljs$core$IIndexed$_nth = (function (this$,n){
if(cljs.core.truth_((n < cljs.core.count.call(null,this$))))
{return this$.slice(n,(n + 1));
} else
{return null;
}
});
jQuery.prototype.cljs$core$IIndexed$_nth = (function (this$,n,not_found){
if(cljs.core.truth_((n < cljs.core.count.call(null,this$))))
{return this$.slice(n,(n + 1));
} else
{if(cljs.core.truth_((void 0 === not_found)))
{return null;
} else
{return not_found;
}
}
});
jQuery.prototype.cljs$core$ICounted$ = true;
jQuery.prototype.cljs$core$ICounted$_count = (function (this$){
return this$.size();
});
jQuery.prototype.cljs$core$ISeq$ = true;
jQuery.prototype.cljs$core$ISeq$_first = (function (this$){
return this$.slice(0,1);
});
jQuery.prototype.cljs$core$ISeq$_rest = (function (this$){
if(cljs.core.truth_((cljs.core.count.call(null,this$) > 1)))
{return this$.slice(1);
} else
{return cljs.core.list.call(null);
}
});
jQuery.prototype.cljs$core$ISeqable$ = true;
jQuery.prototype.cljs$core$ISeqable$_seq = (function (this$){
if(cljs.core.truth_(this$.get(0)))
{return this$;
} else
{return null;
}
});
jQuery.prototype.call = (function() {
var G__24586 = null;
var G__24586__24587 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__24586__24588 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__24586 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__24586__24587.call(this,_,k);
case  3 :
return G__24586__24588.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__24586;
})()
;
jayq.core.anim = (function anim(elem,props,dur){
return elem.animate(jayq.util.map__GT_js.call(null,props),dur);
});
jayq.core.text = (function text($elem,txt){
return $elem.text(txt);
});
jayq.core.css = (function css($elem,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,opts)))
{return $elem.css(cljs.core.name.call(null,opts));
} else
{return $elem.css(jayq.util.map__GT_js.call(null,opts));
}
});
/**
* @param {...*} var_args
*/
jayq.core.attr = (function() { 
var attr__delegate = function ($elem,a,p__24590){
var vec__24591__24592 = p__24590;
var v__24593 = cljs.core.nth.call(null,vec__24591__24592,0,null);

var a__24594 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__24593)))
{return $elem.attr(a__24594);
} else
{return $elem.attr(a__24594,v__24593);
}
};
var attr = function ($elem,a,var_args){
var p__24590 = null;
if (goog.isDef(var_args)) {
  p__24590 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__24590);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__24595){
var $elem = cljs.core.first(arglist__24595);
var a = cljs.core.first(cljs.core.next(arglist__24595));
var p__24590 = cljs.core.rest(cljs.core.next(arglist__24595));
return attr__delegate.call(this, $elem, a, p__24590);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__24596){
var vec__24597__24598 = p__24596;
var v__24599 = cljs.core.nth.call(null,vec__24597__24598,0,null);

var k__24600 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__24599)))
{return $elem.data(k__24600);
} else
{return $elem.data(k__24600,v__24599);
}
};
var data = function ($elem,k,var_args){
var p__24596 = null;
if (goog.isDef(var_args)) {
  p__24596 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__24596);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__24601){
var $elem = cljs.core.first(arglist__24601);
var k = cljs.core.first(cljs.core.next(arglist__24601));
var p__24596 = cljs.core.rest(cljs.core.next(arglist__24601));
return data__delegate.call(this, $elem, k, p__24596);
});
return data;
})()
;
jayq.core.add_class = (function add_class($elem,cl){
var cl__24602 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__24602);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__24603 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__24603);
});
jayq.core.append = (function append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.remove = (function remove($elem){
return $elem.remove();
});
/**
* @param {...*} var_args
*/
jayq.core.hide = (function() { 
var hide__delegate = function ($elem,p__24604){
var vec__24605__24606 = p__24604;
var speed__24607 = cljs.core.nth.call(null,vec__24605__24606,0,null);
var on_finish__24608 = cljs.core.nth.call(null,vec__24605__24606,1,null);

return $elem.hide(speed__24607,on_finish__24608);
};
var hide = function ($elem,var_args){
var p__24604 = null;
if (goog.isDef(var_args)) {
  p__24604 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__24604);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__24609){
var $elem = cljs.core.first(arglist__24609);
var p__24604 = cljs.core.rest(arglist__24609);
return hide__delegate.call(this, $elem, p__24604);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__24610){
var vec__24611__24612 = p__24610;
var speed__24613 = cljs.core.nth.call(null,vec__24611__24612,0,null);
var on_finish__24614 = cljs.core.nth.call(null,vec__24611__24612,1,null);

return $elem.show(speed__24613,on_finish__24614);
};
var show = function ($elem,var_args){
var p__24610 = null;
if (goog.isDef(var_args)) {
  p__24610 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__24610);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__24615){
var $elem = cljs.core.first(arglist__24615);
var p__24610 = cljs.core.rest(arglist__24615);
return show__delegate.call(this, $elem, p__24610);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__24616){
var vec__24617__24618 = p__24616;
var speed__24619 = cljs.core.nth.call(null,vec__24617__24618,0,null);
var on_finish__24620 = cljs.core.nth.call(null,vec__24617__24618,1,null);

return $elem.fadeOut(speed__24619,on_finish__24620);
};
var fade_out = function ($elem,var_args){
var p__24616 = null;
if (goog.isDef(var_args)) {
  p__24616 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__24616);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__24621){
var $elem = cljs.core.first(arglist__24621);
var p__24616 = cljs.core.rest(arglist__24621);
return fade_out__delegate.call(this, $elem, p__24616);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__24622){
var vec__24623__24624 = p__24622;
var speed__24625 = cljs.core.nth.call(null,vec__24623__24624,0,null);
var on_finish__24626 = cljs.core.nth.call(null,vec__24623__24624,1,null);

return $elem.fadeIn(speed__24625,on_finish__24626);
};
var fade_in = function ($elem,var_args){
var p__24622 = null;
if (goog.isDef(var_args)) {
  p__24622 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__24622);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__24627){
var $elem = cljs.core.first(arglist__24627);
var p__24622 = cljs.core.rest(arglist__24627);
return fade_in__delegate.call(this, $elem, p__24622);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__24628){
var vec__24629__24630 = p__24628;
var speed__24631 = cljs.core.nth.call(null,vec__24629__24630,0,null);
var on_finish__24632 = cljs.core.nth.call(null,vec__24629__24630,1,null);

return $elem.slideUp(speed__24631,on_finish__24632);
};
var slide_up = function ($elem,var_args){
var p__24628 = null;
if (goog.isDef(var_args)) {
  p__24628 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__24628);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__24633){
var $elem = cljs.core.first(arglist__24633);
var p__24628 = cljs.core.rest(arglist__24633);
return slide_up__delegate.call(this, $elem, p__24628);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__24634){
var vec__24635__24636 = p__24634;
var speed__24637 = cljs.core.nth.call(null,vec__24635__24636,0,null);
var on_finish__24638 = cljs.core.nth.call(null,vec__24635__24636,1,null);

return $elem.slideDown(speed__24637,on_finish__24638);
};
var slide_down = function ($elem,var_args){
var p__24634 = null;
if (goog.isDef(var_args)) {
  p__24634 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__24634);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__24639){
var $elem = cljs.core.first(arglist__24639);
var p__24634 = cljs.core.rest(arglist__24639);
return slide_down__delegate.call(this, $elem, p__24634);
});
return slide_down;
})()
;
jayq.core.bind = (function bind($elem,ev,func){
return $elem.bind(cljs.core.name.call(null,ev),func);
});
jayq.core.find = (function find($elem,selector){
return $elem.find(cljs.core.name.call(null,selector));
});
jayq.core.trigger = (function trigger($elem,ev){
return $elem.trigger(cljs.core.name.call(null,ev));
});
jayq.core.delegate = (function delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector.call(null,sel),cljs.core.name.call(null,ev),func);
});
jayq.core.inner = (function inner($elem,v){
return $elem.html(v);
});
jayq.core.empty = (function empty($elem){
return $elem.empty();
});
/**
* @param {...*} var_args
*/
jayq.core.val = (function() { 
var val__delegate = function ($elem,p__24640){
var vec__24641__24642 = p__24640;
var v__24643 = cljs.core.nth.call(null,vec__24641__24642,0,null);

if(cljs.core.truth_(v__24643))
{return $elem.val(v__24643);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__24640 = null;
if (goog.isDef(var_args)) {
  p__24640 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__24640);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__24644){
var $elem = cljs.core.first(arglist__24644);
var p__24640 = cljs.core.rest(arglist__24644);
return val__delegate.call(this, $elem, p__24640);
});
return val;
})()
;
jayq.core.queue = (function queue($elem,callback){
return $elem.queue(callback);
});
jayq.core.dequeue = (function dequeue(elem){
return jayq.core.$.call(null,elem).dequeue();
});
jayq.core.xhr = (function xhr(p__24645,content,callback){
var vec__24646__24647 = p__24645;
var method__24648 = cljs.core.nth.call(null,vec__24646__24647,0,null);
var uri__24649 = cljs.core.nth.call(null,vec__24646__24647,1,null);

var params__24650 = jayq.util.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["﷐'type","﷐'data","﷐'success"],{"﷐'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__24648)),"﷐'data":jayq.util.map__GT_js.call(null,content),"﷐'success":callback}));

return jQuery.ajax(uri__24649,params__24650);
});
