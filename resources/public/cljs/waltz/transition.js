goog.provide('waltz.transition');
goog.require('cljs.core');
goog.require('waltz.state');
goog.require('waltz.history');
goog.require('waltz.state');
waltz.transition.exclude = (function exclude(sm,name,to_set,to_unset){
return waltz.state.add_transition.call(null,sm,name,(function() { 
var G__24767__delegate = function (args){
waltz.state.unset.call(null,sm,to_unset);
return cljs.core.apply.call(null,waltz.state.set,sm,to_set,args);
};
var G__24767 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__24767__delegate.call(this, args);
};
G__24767.cljs$lang$maxFixedArity = 0;
G__24767.cljs$lang$applyTo = (function (arglist__24768){
var args = cljs.core.seq( arglist__24768 );;
return G__24767__delegate.call(this, args);
});
return G__24767;
})()
);
});
waltz.transition.by_url = (function by_url(sm){
var url__24769 = window.location.pathname;

return waltz.state.transition.call(null,sm,cljs.core.Vector.fromArray(["﷐'url",url__24769]));
});
waltz.transition.by_hash = (function by_hash(sm){
return waltz.history.listen.call(null,(function (e){
var token__24770 = e.token;
var token__24771 = (cljs.core.truth_(cljs.core._EQ_.call(null,"",token__24770))?"index":token__24770);
var type__24772 = e.type;
var navigation_QMARK___24773 = e.isNavigation;
var kw__24774 = cljs.core.keyword.call(null,cljs.core.str.call(null,"hash:",token__24771));

waltz.state.debug_log.call(null,sm,"hash keyword: ",kw__24774);
waltz.state.debug_log.call(null,sm,"hash changed: ",token__24771," :: navigation? ",navigation_QMARK___24773," :: type ",type__24772);
if(cljs.core.truth_(navigation_QMARK___24773))
{return waltz.state.transition.call(null,sm,kw__24774);
} else
{return null;
}
}));
});
