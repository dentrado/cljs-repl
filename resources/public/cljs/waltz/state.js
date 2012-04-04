goog.provide('waltz.state');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
waltz.state.debug_log = (function() { 
var debug_log__delegate = function (sm,v,vs){
if(cljs.core.truth_((function (){var and__3546__auto____24490 = console;

if(cljs.core.truth_(and__3546__auto____24490))
{return cljs.core.deref.call(null,sm).call(null,"﷐'debug");
} else
{return and__3546__auto____24490;
}
})()))
{var s__24491 = cljs.core.apply.call(null,cljs.core.str,waltz.state.get_name.call(null,sm)," :: ",v,vs);

return console.log(s__24491);
} else
{return null;
}
};
var debug_log = function (sm,v,var_args){
var vs = null;
if (goog.isDef(var_args)) {
  vs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return debug_log__delegate.call(this, sm, v, vs);
};
debug_log.cljs$lang$maxFixedArity = 2;
debug_log.cljs$lang$applyTo = (function (arglist__24492){
var sm = cljs.core.first(arglist__24492);
var v = cljs.core.first(cljs.core.next(arglist__24492));
var vs = cljs.core.rest(cljs.core.next(arglist__24492));
return debug_log__delegate.call(this, sm, v, vs);
});
return debug_log;
})()
;
waltz.state.__GT_coll = (function __GT_coll(v){
if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,v)))
{return v;
} else
{return cljs.core.Vector.fromArray([v]);
}
});
waltz.state.state_STAR_ = (function state_STAR_(){
return cljs.core.ObjMap.fromObject(["﷐'in","﷐'out","﷐'constraints"],{"﷐'in":cljs.core.Vector.fromArray([]),"﷐'out":cljs.core.Vector.fromArray([]),"﷐'constraints":cljs.core.Vector.fromArray([])});
});
/**
* @param {...*} var_args
*/
waltz.state.machine = (function() { 
var machine__delegate = function (p__24493){
var vec__24494__24495 = p__24493;
var n__24496 = cljs.core.nth.call(null,vec__24494__24495,0,null);

return cljs.core.atom.call(null,cljs.core.ObjMap.fromObject(["﷐'debug","﷐'name","﷐'current","﷐'states","﷐'transitions"],{"﷐'debug":true,"﷐'name":cljs.core.name.call(null,n__24496),"﷐'current":cljs.core.set([]),"﷐'states":cljs.core.ObjMap.fromObject([],{}),"﷐'transitions":cljs.core.ObjMap.fromObject([],{})}));
};
var machine = function (var_args){
var p__24493 = null;
if (goog.isDef(var_args)) {
  p__24493 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return machine__delegate.call(this, p__24493);
};
machine.cljs$lang$maxFixedArity = 0;
machine.cljs$lang$applyTo = (function (arglist__24497){
var p__24493 = cljs.core.seq( arglist__24497 );;
return machine__delegate.call(this, p__24493);
});
return machine;
})()
;
waltz.state.get_name = (function get_name(sm){
return waltz.state.get_in_sm.call(null,sm,cljs.core.Vector.fromArray(["﷐'name"]));
});
waltz.state.get_in_sm = (function get_in_sm(sm,ks){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,sm),ks);
});
waltz.state.assoc_sm = (function assoc_sm(sm,ks,v){
return cljs.core.swap_BANG_.call(null,sm,(function (p1__24498_SHARP_){
return cljs.core.assoc_in.call(null,p1__24498_SHARP_,ks,v);
}));
});
/**
* @param {...*} var_args
*/
waltz.state.update_sm = (function() { 
var update_sm__delegate = function (sm,fntail){
return cljs.core.swap_BANG_.call(null,sm,(function (p1__24499_SHARP_){
return cljs.core.apply.call(null,cljs.core.update_in,p1__24499_SHARP_,fntail);
}));
};
var update_sm = function (sm,var_args){
var fntail = null;
if (goog.isDef(var_args)) {
  fntail = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return update_sm__delegate.call(this, sm, fntail);
};
update_sm.cljs$lang$maxFixedArity = 1;
update_sm.cljs$lang$applyTo = (function (arglist__24500){
var sm = cljs.core.first(arglist__24500);
var fntail = cljs.core.rest(arglist__24500);
return update_sm__delegate.call(this, sm, fntail);
});
return update_sm;
})()
;
waltz.state.current = (function current(sm){
return waltz.state.get_in_sm.call(null,sm,cljs.core.Vector.fromArray(["﷐'current"]));
});
waltz.state.in_QMARK_ = (function in_QMARK_(sm,state){
return waltz.state.current.call(null,sm).call(null,state);
});
waltz.state.has_state_QMARK_ = (function has_state_QMARK_(sm,state){
return waltz.state.get_in_sm.call(null,sm,cljs.core.Vector.fromArray(["﷐'states",state]));
});
waltz.state.has_transition_QMARK_ = (function has_transition_QMARK_(sm,trans){
return waltz.state.get_in_sm.call(null,sm,cljs.core.Vector.fromArray(["﷐'transitions",trans]));
});
waltz.state.add_state = (function add_state(sm,name,v){
return waltz.state.assoc_sm.call(null,sm,cljs.core.Vector.fromArray(["﷐'states",name]),v);
});
waltz.state.add_transition = (function add_transition(sm,name,v){
return waltz.state.assoc_sm.call(null,sm,cljs.core.Vector.fromArray(["﷐'transitions",name]),v);
});
waltz.state.in_STAR_ = (function in_STAR_(state,fn){
return cljs.core.update_in.call(null,state,cljs.core.Vector.fromArray(["﷐'in"]),cljs.core.conj,fn);
});
waltz.state.out_STAR_ = (function out_STAR_(state,fn){
return cljs.core.update_in.call(null,state,cljs.core.Vector.fromArray(["﷐'out"]),cljs.core.conj,fn);
});
waltz.state.constraint = (function constraint(state,fn){
return cljs.core.update_in.call(null,state,cljs.core.Vector.fromArray(["﷐'constraint"]),cljs.core.conj,fn);
});
waltz.state.can_transition_QMARK_ = (function can_transition_QMARK_(sm,state){
var trans__24502 = waltz.state.get_in_sm.call(null,sm,cljs.core.Vector.fromArray(["﷐'states",state,"﷐'constraints"]));

if(cljs.core.truth_(trans__24502))
{return cljs.core.every_QMARK_.call(null,(function (p1__24501_SHARP_){
return p1__24501_SHARP_.call(null,state);
}),trans__24502);
} else
{return true;
}
});
/**
* @param {...*} var_args
*/
waltz.state.set = (function() { 
var set__delegate = function (sm,states,context){
var G__24503__24504 = cljs.core.seq.call(null,waltz.state.__GT_coll.call(null,states));

if(cljs.core.truth_(G__24503__24504))
{var state__24505 = cljs.core.first.call(null,G__24503__24504);
var G__24503__24506 = G__24503__24504;

while(true){
if(cljs.core.truth_(waltz.state.can_transition_QMARK_.call(null,sm,state__24505)))
{var cur_in__24507 = waltz.state.get_in_sm.call(null,sm,cljs.core.Vector.fromArray(["﷐'states",state__24505,"﷐'in"]));

waltz.state.update_sm.call(null,sm,cljs.core.Vector.fromArray(["﷐'current"]),cljs.core.conj,state__24505);
waltz.state.debug_log.call(null,sm,"(set ",cljs.core.str.call(null,state__24505),") -> ",cljs.core.pr_str.call(null,waltz.state.current.call(null,sm)));
if(cljs.core.truth_(cljs.core.seq.call(null,cur_in__24507)))
{waltz.state.debug_log.call(null,sm,"(in ",cljs.core.str.call(null,state__24505),")");
var G__24508__24509 = cljs.core.seq.call(null,cur_in__24507);

if(cljs.core.truth_(G__24508__24509))
{var func__24510 = cljs.core.first.call(null,G__24508__24509);
var G__24508__24511 = G__24508__24509;

while(true){
cljs.core.apply.call(null,func__24510,context);
var temp__3698__auto____24512 = cljs.core.next.call(null,G__24508__24511);

if(cljs.core.truth_(temp__3698__auto____24512))
{var G__24508__24513 = temp__3698__auto____24512;

{
var G__24516 = cljs.core.first.call(null,G__24508__24513);
var G__24517 = G__24508__24513;
func__24510 = G__24516;
G__24508__24511 = G__24517;
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
} else
{}
var temp__3698__auto____24514 = cljs.core.next.call(null,G__24503__24506);

if(cljs.core.truth_(temp__3698__auto____24514))
{var G__24503__24515 = temp__3698__auto____24514;

{
var G__24518 = cljs.core.first.call(null,G__24503__24515);
var G__24519 = G__24503__24515;
state__24505 = G__24518;
G__24503__24506 = G__24519;
continue;
}
} else
{}
break;
}
} else
{}
return sm;
};
var set = function (sm,states,var_args){
var context = null;
if (goog.isDef(var_args)) {
  context = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set__delegate.call(this, sm, states, context);
};
set.cljs$lang$maxFixedArity = 2;
set.cljs$lang$applyTo = (function (arglist__24520){
var sm = cljs.core.first(arglist__24520);
var states = cljs.core.first(cljs.core.next(arglist__24520));
var context = cljs.core.rest(cljs.core.next(arglist__24520));
return set__delegate.call(this, sm, states, context);
});
return set;
})()
;
/**
* @param {...*} var_args
*/
waltz.state.unset = (function() { 
var unset__delegate = function (sm,states,context){
var G__24521__24522 = cljs.core.seq.call(null,waltz.state.__GT_coll.call(null,states));

if(cljs.core.truth_(G__24521__24522))
{var state__24523 = cljs.core.first.call(null,G__24521__24522);
var G__24521__24524 = G__24521__24522;

while(true){
if(cljs.core.truth_(waltz.state.in_QMARK_.call(null,sm,state__24523)))
{var cur_out__24525 = waltz.state.get_in_sm.call(null,sm,cljs.core.Vector.fromArray(["﷐'states",state__24523,"﷐'out"]));

waltz.state.update_sm.call(null,sm,cljs.core.Vector.fromArray(["﷐'current"]),cljs.core.disj,state__24523);
waltz.state.debug_log.call(null,sm,"(unset ",cljs.core.str.call(null,state__24523,")")," -> ",cljs.core.pr_str.call(null,waltz.state.current.call(null,sm)));
if(cljs.core.truth_(cljs.core.seq.call(null,cur_out__24525)))
{waltz.state.debug_log.call(null,sm,"(out ",cljs.core.str.call(null,state__24523),")");
var G__24526__24527 = cljs.core.seq.call(null,cur_out__24525);

if(cljs.core.truth_(G__24526__24527))
{var func__24528 = cljs.core.first.call(null,G__24526__24527);
var G__24526__24529 = G__24526__24527;

while(true){
cljs.core.apply.call(null,func__24528,context);
var temp__3698__auto____24530 = cljs.core.next.call(null,G__24526__24529);

if(cljs.core.truth_(temp__3698__auto____24530))
{var G__24526__24531 = temp__3698__auto____24530;

{
var G__24534 = cljs.core.first.call(null,G__24526__24531);
var G__24535 = G__24526__24531;
func__24528 = G__24534;
G__24526__24529 = G__24535;
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
} else
{}
var temp__3698__auto____24532 = cljs.core.next.call(null,G__24521__24524);

if(cljs.core.truth_(temp__3698__auto____24532))
{var G__24521__24533 = temp__3698__auto____24532;

{
var G__24536 = cljs.core.first.call(null,G__24521__24533);
var G__24537 = G__24521__24533;
state__24523 = G__24536;
G__24521__24524 = G__24537;
continue;
}
} else
{}
break;
}
} else
{}
return sm;
};
var unset = function (sm,states,var_args){
var context = null;
if (goog.isDef(var_args)) {
  context = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return unset__delegate.call(this, sm, states, context);
};
unset.cljs$lang$maxFixedArity = 2;
unset.cljs$lang$applyTo = (function (arglist__24538){
var sm = cljs.core.first(arglist__24538);
var states = cljs.core.first(cljs.core.next(arglist__24538));
var context = cljs.core.rest(cljs.core.next(arglist__24538));
return unset__delegate.call(this, sm, states, context);
});
return unset;
})()
;
/**
* @param {...*} var_args
*/
waltz.state.set_ex = (function() { 
var set_ex__delegate = function (sm,to_unset,to_set,context){
cljs.core.apply.call(null,waltz.state.unset,sm,to_unset,context);
return cljs.core.apply.call(null,waltz.state.set,sm,to_set,context);
};
var set_ex = function (sm,to_unset,to_set,var_args){
var context = null;
if (goog.isDef(var_args)) {
  context = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return set_ex__delegate.call(this, sm, to_unset, to_set, context);
};
set_ex.cljs$lang$maxFixedArity = 3;
set_ex.cljs$lang$applyTo = (function (arglist__24539){
var sm = cljs.core.first(arglist__24539);
var to_unset = cljs.core.first(cljs.core.next(arglist__24539));
var to_set = cljs.core.first(cljs.core.next(cljs.core.next(arglist__24539)));
var context = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__24539)));
return set_ex__delegate.call(this, sm, to_unset, to_set, context);
});
return set_ex;
})()
;
/**
* @param {...*} var_args
*/
waltz.state.transition = (function() { 
var transition__delegate = function (sm,ts,context){
var G__24540__24541 = cljs.core.seq.call(null,waltz.state.__GT_coll.call(null,ts));

if(cljs.core.truth_(G__24540__24541))
{var trans__24542 = cljs.core.first.call(null,G__24540__24541);
var G__24540__24543 = G__24540__24541;

while(true){
var temp__3698__auto____24544 = waltz.state.get_in_sm.call(null,sm,cljs.core.Vector.fromArray(["﷐'transitions",trans__24542]));

if(cljs.core.truth_(temp__3698__auto____24544))
{var t__24545 = temp__3698__auto____24544;

var res__24546 = cljs.core.apply.call(null,t__24545,context);

waltz.state.debug_log.call(null,sm,"(trans ",cljs.core.str.call(null,trans__24542),") -> ",cljs.core.boolean$.call(null,res__24546)," :: context ",cljs.core.pr_str.call(null,context));
} else
{}
var temp__3698__auto____24547 = cljs.core.next.call(null,G__24540__24543);

if(cljs.core.truth_(temp__3698__auto____24547))
{var G__24540__24548 = temp__3698__auto____24547;

{
var G__24549 = cljs.core.first.call(null,G__24540__24548);
var G__24550 = G__24540__24548;
trans__24542 = G__24549;
G__24540__24543 = G__24550;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
};
var transition = function (sm,ts,var_args){
var context = null;
if (goog.isDef(var_args)) {
  context = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return transition__delegate.call(this, sm, ts, context);
};
transition.cljs$lang$maxFixedArity = 2;
transition.cljs$lang$applyTo = (function (arglist__24551){
var sm = cljs.core.first(arglist__24551);
var ts = cljs.core.first(cljs.core.next(arglist__24551));
var context = cljs.core.rest(cljs.core.next(arglist__24551));
return transition__delegate.call(this, sm, ts, context);
});
return transition;
})()
;
waltz.state.set_debug = (function set_debug(sm,dbg){
return waltz.state.assoc_sm.call(null,sm,"﷐'debug",dbg);
});
