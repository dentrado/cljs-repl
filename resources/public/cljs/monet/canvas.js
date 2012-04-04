goog.provide('monet.canvas');
goog.require('cljs.core');
goog.require('monet.core');
monet.canvas.get_context = (function get_context(canvas,type){
return canvas.getContext(cljs.core.name.call(null,type));
});
monet.canvas.begin_path = (function begin_path(ctx){
ctx.beginPath();
return ctx;
});
monet.canvas.close_path = (function close_path(ctx){
ctx.closePath();
return ctx;
});
monet.canvas.fill = (function fill(ctx){
ctx.fill();
return ctx;
});
monet.canvas.stroke = (function stroke(ctx){
ctx.stroke();
return ctx;
});
monet.canvas.clear_rect = (function clear_rect(ctx,p__24843){
var map__24844__24845 = p__24843;
var map__24844__24846 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__24844__24845))?cljs.core.apply.call(null,cljs.core.hash_map,map__24844__24845):map__24844__24845);
var h__24847 = cljs.core.get.call(null,map__24844__24846,"﷐'h");
var w__24848 = cljs.core.get.call(null,map__24844__24846,"﷐'w");
var y__24849 = cljs.core.get.call(null,map__24844__24846,"﷐'y");
var x__24850 = cljs.core.get.call(null,map__24844__24846,"﷐'x");

ctx.clearRect(x__24850,y__24849,w__24848,h__24847);
return ctx;
});
monet.canvas.rect = (function rect(ctx,p__24851){
var map__24852__24853 = p__24851;
var map__24852__24854 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__24852__24853))?cljs.core.apply.call(null,cljs.core.hash_map,map__24852__24853):map__24852__24853);
var h__24855 = cljs.core.get.call(null,map__24852__24854,"﷐'h");
var w__24856 = cljs.core.get.call(null,map__24852__24854,"﷐'w");
var y__24857 = cljs.core.get.call(null,map__24852__24854,"﷐'y");
var x__24858 = cljs.core.get.call(null,map__24852__24854,"﷐'x");

monet.canvas.begin_path.call(null,ctx);
ctx.rect(x__24858,y__24857,w__24856,h__24855);
monet.canvas.close_path.call(null,ctx);
monet.canvas.fill.call(null,ctx);
return ctx;
});
monet.canvas.circle = (function circle(ctx,p__24859){
var map__24860__24861 = p__24859;
var map__24860__24862 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__24860__24861))?cljs.core.apply.call(null,cljs.core.hash_map,map__24860__24861):map__24860__24861);
var r__24863 = cljs.core.get.call(null,map__24860__24862,"﷐'r");
var y__24864 = cljs.core.get.call(null,map__24860__24862,"﷐'y");
var x__24865 = cljs.core.get.call(null,map__24860__24862,"﷐'x");

monet.canvas.begin_path.call(null,ctx);
ctx.arc(x__24865,y__24864,r__24863,0,(Math.PI * 2),true);
monet.canvas.close_path.call(null,ctx);
monet.canvas.fill.call(null,ctx);
return ctx;
});
monet.canvas.text = (function text(ctx,p__24866){
var map__24867__24868 = p__24866;
var map__24867__24869 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__24867__24868))?cljs.core.apply.call(null,cljs.core.hash_map,map__24867__24868):map__24867__24868);
var y__24870 = cljs.core.get.call(null,map__24867__24869,"﷐'y");
var x__24871 = cljs.core.get.call(null,map__24867__24869,"﷐'x");
var text__24872 = cljs.core.get.call(null,map__24867__24869,"﷐'text");

ctx.fillText(text__24872,x__24871,y__24870);
return ctx;
});
monet.canvas.font_style = (function font_style(ctx,font){
ctx.font = font;
return ctx;
});
monet.canvas.fill_style = (function fill_style(ctx,color){
ctx.fillStyle = color;
return ctx;
});
monet.canvas.stroke_style = (function stroke_style(ctx,color){
ctx.strokeStyle = color;
return ctx;
});
monet.canvas.stroke_width = (function stroke_width(ctx,w){
ctx.lineWidth = w;
return ctx;
});
monet.canvas.move_to = (function move_to(ctx,x,y){
ctx.moveTo(x,y);
return ctx;
});
monet.canvas.line_to = (function line_to(ctx,x,y){
ctx.lineTo(x,y);
return ctx;
});
monet.canvas.alpha = (function alpha(ctx,a){
ctx.globalAlpha = a;
return ctx;
});
monet.canvas.save = (function save(ctx){
ctx.save();
return ctx;
});
monet.canvas.restore = (function restore(ctx){
ctx.restore();
return ctx;
});
monet.canvas.add_entity = (function add_entity(mc,k,ent){
return ("﷐'entities".call(null,mc)[k] = ent);
});
monet.canvas.remove_entity = (function remove_entity(mc,k){
return cljs.core.js_delete.call(null,"﷐'entities".call(null,mc),k);
});
monet.canvas.get_entity = (function get_entity(mc,k){
return "﷐'value".call(null,("﷐'entities".call(null,mc)[k]));
});
/**
* @param {...*} var_args
*/
monet.canvas.update_entity = (function() { 
var update_entity__delegate = function (mc,k,func,extra){
var cur__24873 = ("﷐'entities".call(null,mc)[k]);
var res__24874 = cljs.core.apply.call(null,func,cur__24873,extra);

return ("﷐'entities".call(null,mc)[k] = res__24874);
};
var update_entity = function (mc,k,func,var_args){
var extra = null;
if (goog.isDef(var_args)) {
  extra = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_entity__delegate.call(this, mc, k, func, extra);
};
update_entity.cljs$lang$maxFixedArity = 3;
update_entity.cljs$lang$applyTo = (function (arglist__24875){
var mc = cljs.core.first(arglist__24875);
var k = cljs.core.first(cljs.core.next(arglist__24875));
var func = cljs.core.first(cljs.core.next(cljs.core.next(arglist__24875)));
var extra = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__24875)));
return update_entity__delegate.call(this, mc, k, func, extra);
});
return update_entity;
})()
;
monet.canvas.clear_BANG_ = (function clear_BANG_(mc){
var ks__24876 = cljs.core.js_keys.call(null,"﷐'entities".call(null,mc));

var G__24877__24878 = cljs.core.seq.call(null,ks__24876);

if(cljs.core.truth_(G__24877__24878))
{var k__24879 = cljs.core.first.call(null,G__24877__24878);
var G__24877__24880 = G__24877__24878;

while(true){
monet.canvas.remove_entity.call(null,mc,k__24879);
var temp__3698__auto____24881 = cljs.core.next.call(null,G__24877__24880);

if(cljs.core.truth_(temp__3698__auto____24881))
{var G__24877__24882 = temp__3698__auto____24881;

{
var G__24883 = cljs.core.first.call(null,G__24877__24882);
var G__24884 = G__24877__24882;
k__24879 = G__24883;
G__24877__24880 = G__24884;
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
});
monet.canvas.entity = (function entity(v,update,draw){
return cljs.core.ObjMap.fromObject(["﷐'value","﷐'draw","﷐'update"],{"﷐'value":v,"﷐'draw":draw,"﷐'update":update});
});
monet.canvas.attr = (function attr(e,a){
return e.getAttribute(a);
});
monet.canvas.draw_loop = (function draw_loop(p__24885){
var mc__24886 = p__24885;
var mc__24887 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,mc__24886))?cljs.core.apply.call(null,cljs.core.hash_map,mc__24886):mc__24886);
var entities__24888 = cljs.core.get.call(null,mc__24887,"﷐'entities");
var active__24889 = cljs.core.get.call(null,mc__24887,"﷐'active");
var ctx__24890 = cljs.core.get.call(null,mc__24887,"﷐'ctx");
var updating_QMARK___24891 = cljs.core.get.call(null,mc__24887,"﷐'updating?");
var canvas__24892 = cljs.core.get.call(null,mc__24887,"﷐'canvas");

monet.canvas.clear_rect.call(null,ctx__24890,cljs.core.ObjMap.fromObject(["﷐'x","﷐'y","﷐'w","﷐'h"],{"﷐'x":0,"﷐'y":0,"﷐'w":monet.canvas.attr.call(null,canvas__24892,"width"),"﷐'h":monet.canvas.attr.call(null,canvas__24892,"height")}));
if(cljs.core.truth_(cljs.core.deref.call(null,active__24889)))
{var ks__24893 = cljs.core.js_keys.call(null,entities__24888);
var cnt__24894 = ks__24893.length;

var i__24895 = 0;

while(true){
if(cljs.core.truth_((i__24895 < cnt__24894)))
{var k__24896 = (ks__24893[i__24895]);
var ent__24897 = (entities__24888[k__24896]);
var ent__24898 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,ent__24897))?cljs.core.apply.call(null,cljs.core.hash_map,ent__24897):ent__24897);
var value__24899 = cljs.core.get.call(null,ent__24898,"﷐'value");
var update__24900 = cljs.core.get.call(null,ent__24898,"﷐'update");
var draw__24901 = cljs.core.get.call(null,ent__24898,"﷐'draw");

if(cljs.core.truth_((function (){var and__3546__auto____24902 = update__24900;

if(cljs.core.truth_(and__3546__auto____24902))
{return cljs.core.deref.call(null,updating_QMARK___24891);
} else
{return and__3546__auto____24902;
}
})()))
{var updated__24906 = (function (){var or__3548__auto____24905 = (function (){try{return update__24900.call(null,value__24899);
}catch (e24903){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Error,e24903)))
{var e__24904 = e24903;

console.log(e__24904);
return value__24899;
} else
{if(cljs.core.truth_("﷐'else"))
{throw e24903;
} else
{return null;
}
}
}})();

if(cljs.core.truth_(or__3548__auto____24905))
{return or__3548__auto____24905;
} else
{return value__24899;
}
})();

if(cljs.core.truth_((entities__24888[k__24896])))
{(entities__24888[k__24896] = cljs.core.assoc.call(null,ent__24898,"﷐'value",updated__24906));
} else
{}
} else
{}
if(cljs.core.truth_(draw__24901))
{try{draw__24901.call(null,ctx__24890,"﷐'value".call(null,(entities__24888[k__24896])));
}catch (e24907){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Error,e24907)))
{var e__24908 = e24907;

console.log(e__24908);
} else
{if(cljs.core.truth_("﷐'else"))
{throw e24907;
} else
{}
}
}} else
{}
{
var G__24909 = (i__24895 + 1);
i__24895 = G__24909;
continue;
}
} else
{}
break;
}
return monet.core.animation_frame.call(null,(function (){
return draw_loop.call(null,mc__24887);
}));
} else
{return null;
}
});
monet.canvas.monet_canvas = (function monet_canvas(elem,context_type){
var ct__24911 = (function (){var or__3548__auto____24910 = context_type;

if(cljs.core.truth_(or__3548__auto____24910))
{return or__3548__auto____24910;
} else
{return "2d";
}
})();
var ctx__24912 = monet.canvas.get_context.call(null,elem,ct__24911);

return cljs.core.ObjMap.fromObject(["﷐'canvas","﷐'ctx","﷐'entities","﷐'updating?","﷐'active"],{"﷐'canvas":elem,"﷐'ctx":ctx__24912,"﷐'entities":cljs.core.js_obj.call(null),"﷐'updating?":cljs.core.atom.call(null,true),"﷐'active":cljs.core.atom.call(null,true)});
});
/**
* @param {...*} var_args
*/
monet.canvas.init = (function() { 
var init__delegate = function (canvas,p__24913){
var vec__24914__24915 = p__24913;
var context_type__24916 = cljs.core.nth.call(null,vec__24914__24915,0,null);

var mc__24917 = monet.canvas.monet_canvas.call(null,canvas,context_type__24916);

monet.canvas.draw_loop.call(null,mc__24917);
return mc__24917;
};
var init = function (canvas,var_args){
var p__24913 = null;
if (goog.isDef(var_args)) {
  p__24913 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return init__delegate.call(this, canvas, p__24913);
};
init.cljs$lang$maxFixedArity = 1;
init.cljs$lang$applyTo = (function (arglist__24918){
var canvas = cljs.core.first(arglist__24918);
var p__24913 = cljs.core.rest(arglist__24918);
return init__delegate.call(this, canvas, p__24913);
});
return init;
})()
;
monet.canvas.stop = (function stop(mc){
return cljs.core.reset_BANG_.call(null,"﷐'active".call(null,mc),false);
});
monet.canvas.stop_updating = (function stop_updating(mc){
return cljs.core.reset_BANG_.call(null,"﷐'updating?".call(null,mc),false);
});
monet.canvas.start_updating = (function start_updating(mc){
return cljs.core.reset_BANG_.call(null,"﷐'updating?".call(null,mc),true);
});
monet.canvas.restart = (function restart(mc){
cljs.core.reset_BANG_.call(null,"﷐'active".call(null,mc),true);
monet.canvas.update_loop.call(null,mc);
return monet.canvas.draw_loop.call(null,mc);
});
