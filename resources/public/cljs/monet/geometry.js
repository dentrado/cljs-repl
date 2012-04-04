goog.provide('monet.geometry');
goog.require('cljs.core');
monet.geometry.distance = (function distance(origin,target){
var dx__24799 = ("﷐'x".call(null,target) - "﷐'x".call(null,origin));
var dy__24800 = ("﷐'y".call(null,target) - "﷐'y".call(null,origin));
var dir_x__24801 = (cljs.core.truth_(cljs.core._EQ_.call(null,0,dx__24799))?dx__24799:(dx__24799 / Math.abs.call(null,dx__24799)));
var dir_y__24802 = (cljs.core.truth_(cljs.core._EQ_.call(null,0,dy__24800))?dy__24800:(dy__24800 / Math.abs.call(null,dy__24800)));
var dist__24803 = Math.sqrt.call(null,(Math.pow.call(null,dx__24799,2) + Math.pow.call(null,dy__24800,2)));

return cljs.core.ObjMap.fromObject(["﷐'delta","﷐'dir","﷐'dist"],{"﷐'delta":cljs.core.ObjMap.fromObject(["﷐'x","﷐'y"],{"﷐'x":dx__24799,"﷐'y":dy__24800}),"﷐'dir":cljs.core.ObjMap.fromObject(["﷐'x","﷐'y"],{"﷐'x":dir_x__24801,"﷐'y":dir_y__24802}),"﷐'dist":dist__24803});
});
monet.geometry.bottom_right = (function bottom_right(p__24804){
var map__24805__24806 = p__24804;
var map__24805__24807 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__24805__24806))?cljs.core.apply.call(null,cljs.core.hash_map,map__24805__24806):map__24805__24806);
var r__24808 = cljs.core.get.call(null,map__24805__24807,"﷐'r");
var h__24809 = cljs.core.get.call(null,map__24805__24807,"﷐'h");
var w__24810 = cljs.core.get.call(null,map__24805__24807,"﷐'w");
var y__24811 = cljs.core.get.call(null,map__24805__24807,"﷐'y");
var x__24812 = cljs.core.get.call(null,map__24805__24807,"﷐'x");

if(cljs.core.truth_(r__24808))
{return cljs.core.ObjMap.fromObject(["﷐'x","﷐'y"],{"﷐'x":(x__24812 + r__24808),"﷐'y":(y__24811 + r__24808)});
} else
{return cljs.core.ObjMap.fromObject(["﷐'x","﷐'y"],{"﷐'x":(x__24812 + w__24810),"﷐'y":(y__24811 + h__24809)});
}
});
monet.geometry.top_left = (function top_left(p__24813){
var map__24814__24815 = p__24813;
var map__24814__24816 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__24814__24815))?cljs.core.apply.call(null,cljs.core.hash_map,map__24814__24815):map__24814__24815);
var r__24817 = cljs.core.get.call(null,map__24814__24816,"﷐'r");
var y__24818 = cljs.core.get.call(null,map__24814__24816,"﷐'y");
var x__24819 = cljs.core.get.call(null,map__24814__24816,"﷐'x");

if(cljs.core.truth_(r__24817))
{return cljs.core.ObjMap.fromObject(["﷐'x","﷐'y"],{"﷐'x":(x__24819 - r__24817),"﷐'y":(y__24818 - r__24817)});
} else
{return cljs.core.ObjMap.fromObject(["﷐'x","﷐'y"],{"﷐'x":x__24819,"﷐'y":y__24818});
}
});
monet.geometry.in_radius_QMARK_ = (function in_radius_QMARK_(origin,obj,radius){
var map__24820__24821 = monet.geometry.distance.call(null,origin,obj);
var map__24820__24822 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__24820__24821))?cljs.core.apply.call(null,cljs.core.hash_map,map__24820__24821):map__24820__24821);
var dist__24823 = cljs.core.get.call(null,map__24820__24822,"﷐'dist");

return (dist__24823 < radius);
});
monet.geometry.collision_QMARK_ = (function collision_QMARK_(obj,obj2){
var br__24824 = monet.geometry.bottom_right.call(null,obj);
var tl__24825 = monet.geometry.top_left.call(null,obj);
var br2__24826 = monet.geometry.bottom_right.call(null,obj2);
var tl2__24827 = monet.geometry.top_left.call(null,obj2);

var and__3546__auto____24829 = (function (){var and__3546__auto____24828 = ("﷐'y".call(null,tl__24825) < "﷐'y".call(null,br2__24826));

if(cljs.core.truth_(and__3546__auto____24828))
{return ("﷐'y".call(null,tl2__24827) < "﷐'y".call(null,br__24824));
} else
{return and__3546__auto____24828;
}
})();

if(cljs.core.truth_(and__3546__auto____24829))
{var and__3546__auto____24830 = ("﷐'x".call(null,tl__24825) < "﷐'x".call(null,br2__24826));

if(cljs.core.truth_(and__3546__auto____24830))
{return ("﷐'x".call(null,tl2__24827) < "﷐'x".call(null,br__24824));
} else
{return and__3546__auto____24830;
}
} else
{return and__3546__auto____24829;
}
});
monet.geometry.contained_QMARK_ = (function contained_QMARK_(container,obj){
var cbr__24831 = monet.geometry.bottom_right.call(null,container);
var ctl__24832 = monet.geometry.top_left.call(null,container);
var br__24833 = monet.geometry.bottom_right.call(null,obj);
var tl__24834 = monet.geometry.top_left.call(null,obj);

var and__3546__auto____24836 = (function (){var and__3546__auto____24835 = ("﷐'x".call(null,ctl__24832) < "﷐'x".call(null,tl__24834));

if(cljs.core.truth_(and__3546__auto____24835))
{return ("﷐'y".call(null,ctl__24832) < "﷐'y".call(null,tl__24834));
} else
{return and__3546__auto____24835;
}
})();

if(cljs.core.truth_(and__3546__auto____24836))
{var and__3546__auto____24837 = ("﷐'x".call(null,cbr__24831) > "﷐'x".call(null,br__24833));

if(cljs.core.truth_(and__3546__auto____24837))
{return ("﷐'y".call(null,cbr__24831) > "﷐'y".call(null,br__24833));
} else
{return and__3546__auto____24837;
}
} else
{return and__3546__auto____24836;
}
});
monet.geometry.in_bounds_QMARK_ = (function in_bounds_QMARK_(obj,x2,y2){
var br__24838 = monet.geometry.bottom_right.call(null,obj);
var tl__24839 = monet.geometry.top_left.call(null,obj);

var and__3546__auto____24841 = (function (){var and__3546__auto____24840 = ("﷐'x".call(null,tl__24839) < x2);

if(cljs.core.truth_(and__3546__auto____24840))
{return (x2 < "﷐'x".call(null,br__24838));
} else
{return and__3546__auto____24840;
}
})();

if(cljs.core.truth_(and__3546__auto____24841))
{var and__3546__auto____24842 = ("﷐'y".call(null,tl__24839) < y2);

if(cljs.core.truth_(and__3546__auto____24842))
{return (y2 < "﷐'y".call(null,br__24838));
} else
{return and__3546__auto____24842;
}
} else
{return and__3546__auto____24841;
}
});
