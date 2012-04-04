goog.provide('monet.core');
goog.require('cljs.core');
monet.core.animation_frame = (function (){var or__3548__auto____24919 = window.requestAnimationFrame;

if(cljs.core.truth_(or__3548__auto____24919))
{return or__3548__auto____24919;
} else
{var or__3548__auto____24920 = window.webkitRequestAnimationFrame;

if(cljs.core.truth_(or__3548__auto____24920))
{return or__3548__auto____24920;
} else
{var or__3548__auto____24921 = window.mozRequestAnimationFrame;

if(cljs.core.truth_(or__3548__auto____24921))
{return or__3548__auto____24921;
} else
{var or__3548__auto____24922 = window.oRequestAnimationFrame;

if(cljs.core.truth_(or__3548__auto____24922))
{return or__3548__auto____24922;
} else
{var or__3548__auto____24923 = window.msRequestAnimationFrame;

if(cljs.core.truth_(or__3548__auto____24923))
{return or__3548__auto____24923;
} else
{return (function (callback){
return setTimeout.call(null,callback,17);
});
}
}
}
}
}
})();
