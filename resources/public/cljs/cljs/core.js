goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3548__auto____22834 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____22834))
{return or__3548__auto____22834;
} else
{var or__3548__auto____22835 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____22835))
{return or__3548__auto____22835;
} else
{return false;
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x).constructor.prototype === x;
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return (array[i]);
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__22899 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____22836 = this$;

if(cljs.core.truth_(and__3546__auto____22836))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____22836;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____22837 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____22837))
{return or__3548__auto____22837;
} else
{var or__3548__auto____22838 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____22838))
{return or__3548__auto____22838;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__22900 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____22839 = this$;

if(cljs.core.truth_(and__3546__auto____22839))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____22839;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____22840 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____22840))
{return or__3548__auto____22840;
} else
{var or__3548__auto____22841 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____22841))
{return or__3548__auto____22841;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__22901 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____22842 = this$;

if(cljs.core.truth_(and__3546__auto____22842))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____22842;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____22843 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____22843))
{return or__3548__auto____22843;
} else
{var or__3548__auto____22844 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____22844))
{return or__3548__auto____22844;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__22902 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____22845 = this$;

if(cljs.core.truth_(and__3546__auto____22845))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____22845;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____22846 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____22846))
{return or__3548__auto____22846;
} else
{var or__3548__auto____22847 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____22847))
{return or__3548__auto____22847;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__22903 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____22848 = this$;

if(cljs.core.truth_(and__3546__auto____22848))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____22848;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____22849 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____22849))
{return or__3548__auto____22849;
} else
{var or__3548__auto____22850 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____22850))
{return or__3548__auto____22850;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__22904 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____22851 = this$;

if(cljs.core.truth_(and__3546__auto____22851))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____22851;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____22852 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____22852))
{return or__3548__auto____22852;
} else
{var or__3548__auto____22853 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____22853))
{return or__3548__auto____22853;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__22905 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____22854 = this$;

if(cljs.core.truth_(and__3546__auto____22854))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____22854;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____22855 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____22855))
{return or__3548__auto____22855;
} else
{var or__3548__auto____22856 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____22856))
{return or__3548__auto____22856;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__22906 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____22857 = this$;

if(cljs.core.truth_(and__3546__auto____22857))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____22857;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____22858 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____22858))
{return or__3548__auto____22858;
} else
{var or__3548__auto____22859 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____22859))
{return or__3548__auto____22859;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__22907 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____22860 = this$;

if(cljs.core.truth_(and__3546__auto____22860))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____22860;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____22861 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____22861))
{return or__3548__auto____22861;
} else
{var or__3548__auto____22862 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____22862))
{return or__3548__auto____22862;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__22908 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____22863 = this$;

if(cljs.core.truth_(and__3546__auto____22863))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____22863;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____22864 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____22864))
{return or__3548__auto____22864;
} else
{var or__3548__auto____22865 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____22865))
{return or__3548__auto____22865;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__22909 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____22866 = this$;

if(cljs.core.truth_(and__3546__auto____22866))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____22866;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____22867 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____22867))
{return or__3548__auto____22867;
} else
{var or__3548__auto____22868 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____22868))
{return or__3548__auto____22868;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__22910 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____22869 = this$;

if(cljs.core.truth_(and__3546__auto____22869))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____22869;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____22870 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____22870))
{return or__3548__auto____22870;
} else
{var or__3548__auto____22871 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____22871))
{return or__3548__auto____22871;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__22911 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____22872 = this$;

if(cljs.core.truth_(and__3546__auto____22872))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____22872;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____22873 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____22873))
{return or__3548__auto____22873;
} else
{var or__3548__auto____22874 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____22874))
{return or__3548__auto____22874;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__22912 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____22875 = this$;

if(cljs.core.truth_(and__3546__auto____22875))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____22875;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____22876 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____22876))
{return or__3548__auto____22876;
} else
{var or__3548__auto____22877 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____22877))
{return or__3548__auto____22877;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__22913 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____22878 = this$;

if(cljs.core.truth_(and__3546__auto____22878))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____22878;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____22879 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____22879))
{return or__3548__auto____22879;
} else
{var or__3548__auto____22880 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____22880))
{return or__3548__auto____22880;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__22914 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____22881 = this$;

if(cljs.core.truth_(and__3546__auto____22881))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____22881;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____22882 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____22882))
{return or__3548__auto____22882;
} else
{var or__3548__auto____22883 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____22883))
{return or__3548__auto____22883;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__22915 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____22884 = this$;

if(cljs.core.truth_(and__3546__auto____22884))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____22884;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____22885 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____22885))
{return or__3548__auto____22885;
} else
{var or__3548__auto____22886 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____22886))
{return or__3548__auto____22886;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__22916 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____22887 = this$;

if(cljs.core.truth_(and__3546__auto____22887))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____22887;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____22888 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____22888))
{return or__3548__auto____22888;
} else
{var or__3548__auto____22889 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____22889))
{return or__3548__auto____22889;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__22917 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____22890 = this$;

if(cljs.core.truth_(and__3546__auto____22890))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____22890;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____22891 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____22891))
{return or__3548__auto____22891;
} else
{var or__3548__auto____22892 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____22892))
{return or__3548__auto____22892;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__22918 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____22893 = this$;

if(cljs.core.truth_(and__3546__auto____22893))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____22893;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____22894 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____22894))
{return or__3548__auto____22894;
} else
{var or__3548__auto____22895 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____22895))
{return or__3548__auto____22895;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__22919 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____22896 = this$;

if(cljs.core.truth_(and__3546__auto____22896))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____22896;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____22897 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____22897))
{return or__3548__auto____22897;
} else
{var or__3548__auto____22898 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____22898))
{return or__3548__auto____22898;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case  1 :
return _invoke__22899.call(this,this$);
case  2 :
return _invoke__22900.call(this,this$,a);
case  3 :
return _invoke__22901.call(this,this$,a,b);
case  4 :
return _invoke__22902.call(this,this$,a,b,c);
case  5 :
return _invoke__22903.call(this,this$,a,b,c,d);
case  6 :
return _invoke__22904.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__22905.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__22906.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__22907.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__22908.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__22909.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__22910.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__22911.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__22912.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__22913.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__22914.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__22915.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__22916.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__22917.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__22918.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__22919.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____22921 = coll;

if(cljs.core.truth_(and__3546__auto____22921))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____22921;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____22922 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____22922))
{return or__3548__auto____22922;
} else
{var or__3548__auto____22923 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____22923))
{return or__3548__auto____22923;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____22924 = coll;

if(cljs.core.truth_(and__3546__auto____22924))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____22924;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____22925 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____22925))
{return or__3548__auto____22925;
} else
{var or__3548__auto____22926 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____22926))
{return or__3548__auto____22926;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____22927 = coll;

if(cljs.core.truth_(and__3546__auto____22927))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____22927;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____22928 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____22928))
{return or__3548__auto____22928;
} else
{var or__3548__auto____22929 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____22929))
{return or__3548__auto____22929;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__22936 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____22930 = coll;

if(cljs.core.truth_(and__3546__auto____22930))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____22930;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____22931 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____22931))
{return or__3548__auto____22931;
} else
{var or__3548__auto____22932 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____22932))
{return or__3548__auto____22932;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__22937 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____22933 = coll;

if(cljs.core.truth_(and__3546__auto____22933))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____22933;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____22934 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____22934))
{return or__3548__auto____22934;
} else
{var or__3548__auto____22935 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____22935))
{return or__3548__auto____22935;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__22936.call(this,coll,n);
case  3 :
return _nth__22937.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____22939 = coll;

if(cljs.core.truth_(and__3546__auto____22939))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____22939;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____22940 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____22940))
{return or__3548__auto____22940;
} else
{var or__3548__auto____22941 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____22941))
{return or__3548__auto____22941;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____22942 = coll;

if(cljs.core.truth_(and__3546__auto____22942))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____22942;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____22943 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____22943))
{return or__3548__auto____22943;
} else
{var or__3548__auto____22944 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____22944))
{return or__3548__auto____22944;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__22951 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____22945 = o;

if(cljs.core.truth_(and__3546__auto____22945))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____22945;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____22946 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____22946))
{return or__3548__auto____22946;
} else
{var or__3548__auto____22947 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____22947))
{return or__3548__auto____22947;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__22952 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____22948 = o;

if(cljs.core.truth_(and__3546__auto____22948))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____22948;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____22949 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____22949))
{return or__3548__auto____22949;
} else
{var or__3548__auto____22950 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____22950))
{return or__3548__auto____22950;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__22951.call(this,o,k);
case  3 :
return _lookup__22952.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____22954 = coll;

if(cljs.core.truth_(and__3546__auto____22954))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____22954;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____22955 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____22955))
{return or__3548__auto____22955;
} else
{var or__3548__auto____22956 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____22956))
{return or__3548__auto____22956;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____22957 = coll;

if(cljs.core.truth_(and__3546__auto____22957))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____22957;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____22958 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____22958))
{return or__3548__auto____22958;
} else
{var or__3548__auto____22959 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____22959))
{return or__3548__auto____22959;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____22960 = coll;

if(cljs.core.truth_(and__3546__auto____22960))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____22960;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____22961 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____22961))
{return or__3548__auto____22961;
} else
{var or__3548__auto____22962 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____22962))
{return or__3548__auto____22962;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____22963 = coll;

if(cljs.core.truth_(and__3546__auto____22963))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____22963;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____22964 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____22964))
{return or__3548__auto____22964;
} else
{var or__3548__auto____22965 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____22965))
{return or__3548__auto____22965;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____22966 = coll;

if(cljs.core.truth_(and__3546__auto____22966))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____22966;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____22967 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____22967))
{return or__3548__auto____22967;
} else
{var or__3548__auto____22968 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____22968))
{return or__3548__auto____22968;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____22969 = coll;

if(cljs.core.truth_(and__3546__auto____22969))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____22969;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____22970 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____22970))
{return or__3548__auto____22970;
} else
{var or__3548__auto____22971 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____22971))
{return or__3548__auto____22971;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____22972 = coll;

if(cljs.core.truth_(and__3546__auto____22972))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____22972;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____22973 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____22973))
{return or__3548__auto____22973;
} else
{var or__3548__auto____22974 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____22974))
{return or__3548__auto____22974;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____22975 = o;

if(cljs.core.truth_(and__3546__auto____22975))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____22975;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____22976 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____22976))
{return or__3548__auto____22976;
} else
{var or__3548__auto____22977 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____22977))
{return or__3548__auto____22977;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____22978 = o;

if(cljs.core.truth_(and__3546__auto____22978))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____22978;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____22979 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____22979))
{return or__3548__auto____22979;
} else
{var or__3548__auto____22980 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____22980))
{return or__3548__auto____22980;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____22981 = o;

if(cljs.core.truth_(and__3546__auto____22981))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____22981;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____22982 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____22982))
{return or__3548__auto____22982;
} else
{var or__3548__auto____22983 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____22983))
{return or__3548__auto____22983;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____22984 = o;

if(cljs.core.truth_(and__3546__auto____22984))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____22984;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____22985 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____22985))
{return or__3548__auto____22985;
} else
{var or__3548__auto____22986 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____22986))
{return or__3548__auto____22986;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__22993 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____22987 = coll;

if(cljs.core.truth_(and__3546__auto____22987))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____22987;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____22988 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____22988))
{return or__3548__auto____22988;
} else
{var or__3548__auto____22989 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____22989))
{return or__3548__auto____22989;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__22994 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____22990 = coll;

if(cljs.core.truth_(and__3546__auto____22990))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____22990;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____22991 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____22991))
{return or__3548__auto____22991;
} else
{var or__3548__auto____22992 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____22992))
{return or__3548__auto____22992;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__22993.call(this,coll,f);
case  3 :
return _reduce__22994.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____22996 = o;

if(cljs.core.truth_(and__3546__auto____22996))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____22996;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____22997 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____22997))
{return or__3548__auto____22997;
} else
{var or__3548__auto____22998 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____22998))
{return or__3548__auto____22998;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____22999 = o;

if(cljs.core.truth_(and__3546__auto____22999))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____22999;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____23000 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____23000))
{return or__3548__auto____23000;
} else
{var or__3548__auto____23001 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____23001))
{return or__3548__auto____23001;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____23002 = o;

if(cljs.core.truth_(and__3546__auto____23002))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____23002;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____23003 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____23003))
{return or__3548__auto____23003;
} else
{var or__3548__auto____23004 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____23004))
{return or__3548__auto____23004;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3546__auto____23005 = o;

if(cljs.core.truth_(and__3546__auto____23005))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____23005;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____23006 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____23006))
{return or__3548__auto____23006;
} else
{var or__3548__auto____23007 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____23007))
{return or__3548__auto____23007;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____23008 = d;

if(cljs.core.truth_(and__3546__auto____23008))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____23008;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____23009 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____23009))
{return or__3548__auto____23009;
} else
{var or__3548__auto____23010 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____23010))
{return or__3548__auto____23010;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____23011 = this$;

if(cljs.core.truth_(and__3546__auto____23011))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____23011;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____23012 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____23012))
{return or__3548__auto____23012;
} else
{var or__3548__auto____23013 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____23013))
{return or__3548__auto____23013;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____23014 = this$;

if(cljs.core.truth_(and__3546__auto____23014))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____23014;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____23015 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____23015))
{return or__3548__auto____23015;
} else
{var or__3548__auto____23016 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____23016))
{return or__3548__auto____23016;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____23017 = this$;

if(cljs.core.truth_(and__3546__auto____23017))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____23017;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____23018 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____23018))
{return or__3548__auto____23018;
} else
{var or__3548__auto____23019 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____23019))
{return or__3548__auto____23019;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
*/
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x === null);
});
cljs.core.type = (function type(x){
return (x).constructor;
});
Function.prototype.cljs$core$IPrintable$ = true;
Function.prototype.cljs$core$IPrintable$_pr_seq = (function (this$){
return cljs.core.list.call(null,"#<",cljs.core.str.call(null,this$),">");
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__23020 = null;
var G__23020__23021 = (function (o,k){
return null;
});
var G__23020__23022 = (function (o,k,not_found){
return not_found;
});
G__23020 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__23020__23021.call(this,o,k);
case  3 :
return G__23020__23022.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__23020;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__23024 = null;
var G__23024__23025 = (function (_,f){
return f.call(null);
});
var G__23024__23026 = (function (_,f,start){
return start;
});
G__23024 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__23024__23025.call(this,_,f);
case  3 :
return G__23024__23026.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__23024;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return cljs.core.nil_QMARK_.call(null,o);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__23028 = null;
var G__23028__23029 = (function (_,n){
return null;
});
var G__23028__23030 = (function (_,n,not_found){
return not_found;
});
G__23028 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__23028__23029.call(this,_,n);
case  3 :
return G__23028__23030.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__23028;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return (o.toString() === other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
return ((o === true) ? 1 : 0);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__23038 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__23032 = cljs.core._nth.call(null,cicoll,0);
var n__23033 = 1;

while(true){
if(cljs.core.truth_((n__23033 < cljs.core._count.call(null,cicoll))))
{{
var G__23042 = f.call(null,val__23032,cljs.core._nth.call(null,cicoll,n__23033));
var G__23043 = (n__23033 + 1);
val__23032 = G__23042;
n__23033 = G__23043;
continue;
}
} else
{return val__23032;
}
break;
}
}
});
var ci_reduce__23039 = (function (cicoll,f,val){
var val__23034 = val;
var n__23035 = 0;

while(true){
if(cljs.core.truth_((n__23035 < cljs.core._count.call(null,cicoll))))
{{
var G__23044 = f.call(null,val__23034,cljs.core._nth.call(null,cicoll,n__23035));
var G__23045 = (n__23035 + 1);
val__23034 = G__23044;
n__23035 = G__23045;
continue;
}
} else
{return val__23034;
}
break;
}
});
var ci_reduce__23040 = (function (cicoll,f,val,idx){
var val__23036 = val;
var n__23037 = idx;

while(true){
if(cljs.core.truth_((n__23037 < cljs.core._count.call(null,cicoll))))
{{
var G__23046 = f.call(null,val__23036,cljs.core._nth.call(null,cicoll,n__23037));
var G__23047 = (n__23037 + 1);
val__23036 = G__23046;
n__23037 = G__23047;
continue;
}
} else
{return val__23036;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__23038.call(this,cicoll,f);
case  3 :
return ci_reduce__23039.call(this,cicoll,f,val);
case  4 :
return ci_reduce__23040.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__23048 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__23061 = null;
var G__23061__23062 = (function (_,f){
var this__23049 = this;
return cljs.core.ci_reduce.call(null,this__23049.a,f,(this__23049.a[this__23049.i]),(this__23049.i + 1));
});
var G__23061__23063 = (function (_,f,start){
var this__23050 = this;
return cljs.core.ci_reduce.call(null,this__23050.a,f,start,this__23050.i);
});
G__23061 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__23061__23062.call(this,_,f);
case  3 :
return G__23061__23063.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__23061;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__23051 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__23052 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__23065 = null;
var G__23065__23066 = (function (coll,n){
var this__23053 = this;
var i__23054 = (n + this__23053.i);

if(cljs.core.truth_((i__23054 < this__23053.a.length)))
{return (this__23053.a[i__23054]);
} else
{return null;
}
});
var G__23065__23067 = (function (coll,n,not_found){
var this__23055 = this;
var i__23056 = (n + this__23055.i);

if(cljs.core.truth_((i__23056 < this__23055.a.length)))
{return (this__23055.a[i__23056]);
} else
{return not_found;
}
});
G__23065 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__23065__23066.call(this,coll,n);
case  3 :
return G__23065__23067.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__23065;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__23057 = this;
return (this__23057.a.length - this__23057.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__23058 = this;
return (this__23058.a[this__23058.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__23059 = this;
if(cljs.core.truth_(((this__23059.i + 1) < this__23059.a.length)))
{return (new cljs.core.IndexedSeq(this__23059.a,(this__23059.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__23060 = this;
return this$;
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__23069 = null;
var G__23069__23070 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__23069__23071 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__23069 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__23069__23070.call(this,array,f);
case  3 :
return G__23069__23071.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__23069;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__23073 = null;
var G__23073__23074 = (function (array,k){
return (array[k]);
});
var G__23073__23075 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__23073 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__23073__23074.call(this,array,k);
case  3 :
return G__23073__23075.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__23073;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__23077 = null;
var G__23077__23078 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__23077__23079 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__23077 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__23077__23078.call(this,array,n);
case  3 :
return G__23077__23079.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__23077;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3698__auto____23081 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____23081))
{var s__23082 = temp__3698__auto____23081;

return cljs.core._first.call(null,s__23082);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__23083 = cljs.core.next.call(null,s);
s = G__23083;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__23084 = cljs.core.seq.call(null,x);
var n__23085 = 0;

while(true){
if(cljs.core.truth_(s__23084))
{{
var G__23086 = cljs.core.next.call(null,s__23084);
var G__23087 = (n__23085 + 1);
s__23084 = G__23086;
n__23085 = G__23087;
continue;
}
} else
{return n__23085;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__23088 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__23089 = (function() { 
var G__23091__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__23092 = conj.call(null,coll,x);
var G__23093 = cljs.core.first.call(null,xs);
var G__23094 = cljs.core.next.call(null,xs);
coll = G__23092;
x = G__23093;
xs = G__23094;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__23091 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__23091__delegate.call(this, coll, x, xs);
};
G__23091.cljs$lang$maxFixedArity = 2;
G__23091.cljs$lang$applyTo = (function (arglist__23095){
var coll = cljs.core.first(arglist__23095);
var x = cljs.core.first(cljs.core.next(arglist__23095));
var xs = cljs.core.rest(cljs.core.next(arglist__23095));
return G__23091__delegate.call(this, coll, x, xs);
});
return G__23091;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__23088.call(this,coll,x);
default:
return conj__23089.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__23089.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__23096 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__23097 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__23096.call(this,coll,n);
case  3 :
return nth__23097.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__23099 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__23100 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__23099.call(this,o,k);
case  3 :
return get__23100.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__23103 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__23104 = (function() { 
var G__23106__delegate = function (coll,k,v,kvs){
while(true){
var ret__23102 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__23107 = ret__23102;
var G__23108 = cljs.core.first.call(null,kvs);
var G__23109 = cljs.core.second.call(null,kvs);
var G__23110 = cljs.core.nnext.call(null,kvs);
coll = G__23107;
k = G__23108;
v = G__23109;
kvs = G__23110;
continue;
}
} else
{return ret__23102;
}
break;
}
};
var G__23106 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__23106__delegate.call(this, coll, k, v, kvs);
};
G__23106.cljs$lang$maxFixedArity = 3;
G__23106.cljs$lang$applyTo = (function (arglist__23111){
var coll = cljs.core.first(arglist__23111);
var k = cljs.core.first(cljs.core.next(arglist__23111));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__23111)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__23111)));
return G__23106__delegate.call(this, coll, k, v, kvs);
});
return G__23106;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__23103.call(this,coll,k,v);
default:
return assoc__23104.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__23104.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__23113 = (function (coll){
return coll;
});
var dissoc__23114 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__23115 = (function() { 
var G__23117__delegate = function (coll,k,ks){
while(true){
var ret__23112 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__23118 = ret__23112;
var G__23119 = cljs.core.first.call(null,ks);
var G__23120 = cljs.core.next.call(null,ks);
coll = G__23118;
k = G__23119;
ks = G__23120;
continue;
}
} else
{return ret__23112;
}
break;
}
};
var G__23117 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__23117__delegate.call(this, coll, k, ks);
};
G__23117.cljs$lang$maxFixedArity = 2;
G__23117.cljs$lang$applyTo = (function (arglist__23121){
var coll = cljs.core.first(arglist__23121);
var k = cljs.core.first(cljs.core.next(arglist__23121));
var ks = cljs.core.rest(cljs.core.next(arglist__23121));
return G__23117__delegate.call(this, coll, k, ks);
});
return G__23117;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__23113.call(this,coll);
case  2 :
return dissoc__23114.call(this,coll,k);
default:
return dissoc__23115.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__23115.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__445__auto____23122 = o;

if(cljs.core.truth_((function (){var and__3546__auto____23123 = x__445__auto____23122;

if(cljs.core.truth_(and__3546__auto____23123))
{var and__3546__auto____23124 = x__445__auto____23122.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____23124))
{return cljs.core.not.call(null,x__445__auto____23122.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____23124;
}
} else
{return and__3546__auto____23123;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____23122);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__23126 = (function (coll){
return coll;
});
var disj__23127 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__23128 = (function() { 
var G__23130__delegate = function (coll,k,ks){
while(true){
var ret__23125 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__23131 = ret__23125;
var G__23132 = cljs.core.first.call(null,ks);
var G__23133 = cljs.core.next.call(null,ks);
coll = G__23131;
k = G__23132;
ks = G__23133;
continue;
}
} else
{return ret__23125;
}
break;
}
};
var G__23130 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__23130__delegate.call(this, coll, k, ks);
};
G__23130.cljs$lang$maxFixedArity = 2;
G__23130.cljs$lang$applyTo = (function (arglist__23134){
var coll = cljs.core.first(arglist__23134);
var k = cljs.core.first(cljs.core.next(arglist__23134));
var ks = cljs.core.rest(cljs.core.next(arglist__23134));
return G__23130__delegate.call(this, coll, k, ks);
});
return G__23130;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__23126.call(this,coll);
case  2 :
return disj__23127.call(this,coll,k);
default:
return disj__23128.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__23128.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____23135 = x;

if(cljs.core.truth_((function (){var and__3546__auto____23136 = x__445__auto____23135;

if(cljs.core.truth_(and__3546__auto____23136))
{var and__3546__auto____23137 = x__445__auto____23135.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____23137))
{return cljs.core.not.call(null,x__445__auto____23135.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____23137;
}
} else
{return and__3546__auto____23136;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____23135);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____23138 = x;

if(cljs.core.truth_((function (){var and__3546__auto____23139 = x__445__auto____23138;

if(cljs.core.truth_(and__3546__auto____23139))
{var and__3546__auto____23140 = x__445__auto____23138.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____23140))
{return cljs.core.not.call(null,x__445__auto____23138.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____23140;
}
} else
{return and__3546__auto____23139;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____23138);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____23141 = x;

if(cljs.core.truth_((function (){var and__3546__auto____23142 = x__445__auto____23141;

if(cljs.core.truth_(and__3546__auto____23142))
{var and__3546__auto____23143 = x__445__auto____23141.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____23143))
{return cljs.core.not.call(null,x__445__auto____23141.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____23143;
}
} else
{return and__3546__auto____23142;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____23141);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____23144 = x;

if(cljs.core.truth_((function (){var and__3546__auto____23145 = x__445__auto____23144;

if(cljs.core.truth_(and__3546__auto____23145))
{var and__3546__auto____23146 = x__445__auto____23144.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____23146))
{return cljs.core.not.call(null,x__445__auto____23144.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____23146;
}
} else
{return and__3546__auto____23145;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____23144);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____23147 = x;

if(cljs.core.truth_((function (){var and__3546__auto____23148 = x__445__auto____23147;

if(cljs.core.truth_(and__3546__auto____23148))
{var and__3546__auto____23149 = x__445__auto____23147.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____23149))
{return cljs.core.not.call(null,x__445__auto____23147.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____23149;
}
} else
{return and__3546__auto____23148;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____23147);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____23150 = x;

if(cljs.core.truth_((function (){var and__3546__auto____23151 = x__445__auto____23150;

if(cljs.core.truth_(and__3546__auto____23151))
{var and__3546__auto____23152 = x__445__auto____23150.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____23152))
{return cljs.core.not.call(null,x__445__auto____23150.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____23152;
}
} else
{return and__3546__auto____23151;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____23150);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____23153 = x;

if(cljs.core.truth_((function (){var and__3546__auto____23154 = x__445__auto____23153;

if(cljs.core.truth_(and__3546__auto____23154))
{var and__3546__auto____23155 = x__445__auto____23153.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____23155))
{return cljs.core.not.call(null,x__445__auto____23153.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____23155;
}
} else
{return and__3546__auto____23154;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____23153);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__23156 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__23156.push(key);
}));
return keys__23156;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o != null && (o instanceof t || o.constructor === t || t === Object));
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,s)))
{return false;
} else
{var x__445__auto____23157 = s;

if(cljs.core.truth_((function (){var and__3546__auto____23158 = x__445__auto____23157;

if(cljs.core.truth_(and__3546__auto____23158))
{var and__3546__auto____23159 = x__445__auto____23157.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____23159))
{return cljs.core.not.call(null,x__445__auto____23157.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____23159;
}
} else
{return and__3546__auto____23158;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____23157);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3546__auto____23160 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____23160))
{return cljs.core.not.call(null,(function (){var or__3548__auto____23161 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____23161))
{return or__3548__auto____23161;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____23160;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____23162 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____23162))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____23162;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____23163 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____23163))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____23163;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____23164 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____23164))
{return (n == n.toFixed());
} else
{return and__3546__auto____23164;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____23165 = coll;

if(cljs.core.truth_(and__3546__auto____23165))
{var and__3546__auto____23166 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____23166))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____23166;
}
} else
{return and__3546__auto____23165;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___23171 = (function (x){
return true;
});
var distinct_QMARK___23172 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___23173 = (function() { 
var G__23175__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__23167 = cljs.core.set([y,x]);
var xs__23168 = more;

while(true){
var x__23169 = cljs.core.first.call(null,xs__23168);
var etc__23170 = cljs.core.next.call(null,xs__23168);

if(cljs.core.truth_(xs__23168))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__23167,x__23169)))
{return false;
} else
{{
var G__23176 = cljs.core.conj.call(null,s__23167,x__23169);
var G__23177 = etc__23170;
s__23167 = G__23176;
xs__23168 = G__23177;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__23175 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__23175__delegate.call(this, x, y, more);
};
G__23175.cljs$lang$maxFixedArity = 2;
G__23175.cljs$lang$applyTo = (function (arglist__23178){
var x = cljs.core.first(arglist__23178);
var y = cljs.core.first(cljs.core.next(arglist__23178));
var more = cljs.core.rest(cljs.core.next(arglist__23178));
return G__23175__delegate.call(this, x, y, more);
});
return G__23175;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___23171.call(this,x);
case  2 :
return distinct_QMARK___23172.call(this,x,y);
default:
return distinct_QMARK___23173.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___23173.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__23179 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__23179)))
{return r__23179;
} else
{if(cljs.core.truth_(r__23179))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__23181 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__23182 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__23180 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__23180,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__23180);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__23181.call(this,comp);
case  2 :
return sort__23182.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__23184 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__23185 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__23184.call(this,keyfn,comp);
case  3 :
return sort_by__23185.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__23187 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__23188 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__23187.call(this,f,val);
case  3 :
return reduce__23188.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__23194 = (function (f,coll){
var temp__3695__auto____23190 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____23190))
{var s__23191 = temp__3695__auto____23190;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__23191),cljs.core.next.call(null,s__23191));
} else
{return f.call(null);
}
});
var seq_reduce__23195 = (function (f,val,coll){
var val__23192 = val;
var coll__23193 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__23193))
{{
var G__23197 = f.call(null,val__23192,cljs.core.first.call(null,coll__23193));
var G__23198 = cljs.core.next.call(null,coll__23193);
val__23192 = G__23197;
coll__23193 = G__23198;
continue;
}
} else
{return val__23192;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__23194.call(this,f,val);
case  3 :
return seq_reduce__23195.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__23199 = null;
var G__23199__23200 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__23199__23201 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__23199 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__23199__23200.call(this,coll,f);
case  3 :
return G__23199__23201.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__23199;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___23203 = (function (){
return 0;
});
var _PLUS___23204 = (function (x){
return x;
});
var _PLUS___23205 = (function (x,y){
return (x + y);
});
var _PLUS___23206 = (function() { 
var G__23208__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__23208 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__23208__delegate.call(this, x, y, more);
};
G__23208.cljs$lang$maxFixedArity = 2;
G__23208.cljs$lang$applyTo = (function (arglist__23209){
var x = cljs.core.first(arglist__23209);
var y = cljs.core.first(cljs.core.next(arglist__23209));
var more = cljs.core.rest(cljs.core.next(arglist__23209));
return G__23208__delegate.call(this, x, y, more);
});
return G__23208;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___23203.call(this);
case  1 :
return _PLUS___23204.call(this,x);
case  2 :
return _PLUS___23205.call(this,x,y);
default:
return _PLUS___23206.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___23206.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___23210 = (function (x){
return (- x);
});
var ___23211 = (function (x,y){
return (x - y);
});
var ___23212 = (function() { 
var G__23214__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__23214 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__23214__delegate.call(this, x, y, more);
};
G__23214.cljs$lang$maxFixedArity = 2;
G__23214.cljs$lang$applyTo = (function (arglist__23215){
var x = cljs.core.first(arglist__23215);
var y = cljs.core.first(cljs.core.next(arglist__23215));
var more = cljs.core.rest(cljs.core.next(arglist__23215));
return G__23214__delegate.call(this, x, y, more);
});
return G__23214;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___23210.call(this,x);
case  2 :
return ___23211.call(this,x,y);
default:
return ___23212.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___23212.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___23216 = (function (){
return 1;
});
var _STAR___23217 = (function (x){
return x;
});
var _STAR___23218 = (function (x,y){
return (x * y);
});
var _STAR___23219 = (function() { 
var G__23221__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__23221 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__23221__delegate.call(this, x, y, more);
};
G__23221.cljs$lang$maxFixedArity = 2;
G__23221.cljs$lang$applyTo = (function (arglist__23222){
var x = cljs.core.first(arglist__23222);
var y = cljs.core.first(cljs.core.next(arglist__23222));
var more = cljs.core.rest(cljs.core.next(arglist__23222));
return G__23221__delegate.call(this, x, y, more);
});
return G__23221;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___23216.call(this);
case  1 :
return _STAR___23217.call(this,x);
case  2 :
return _STAR___23218.call(this,x,y);
default:
return _STAR___23219.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___23219.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___23223 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___23224 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___23225 = (function() { 
var G__23227__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__23227 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__23227__delegate.call(this, x, y, more);
};
G__23227.cljs$lang$maxFixedArity = 2;
G__23227.cljs$lang$applyTo = (function (arglist__23228){
var x = cljs.core.first(arglist__23228);
var y = cljs.core.first(cljs.core.next(arglist__23228));
var more = cljs.core.rest(cljs.core.next(arglist__23228));
return G__23227__delegate.call(this, x, y, more);
});
return G__23227;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___23223.call(this,x);
case  2 :
return _SLASH___23224.call(this,x,y);
default:
return _SLASH___23225.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___23225.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___23229 = (function (x){
return true;
});
var _LT___23230 = (function (x,y){
return (x < y);
});
var _LT___23231 = (function() { 
var G__23233__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__23234 = y;
var G__23235 = cljs.core.first.call(null,more);
var G__23236 = cljs.core.next.call(null,more);
x = G__23234;
y = G__23235;
more = G__23236;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__23233 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__23233__delegate.call(this, x, y, more);
};
G__23233.cljs$lang$maxFixedArity = 2;
G__23233.cljs$lang$applyTo = (function (arglist__23237){
var x = cljs.core.first(arglist__23237);
var y = cljs.core.first(cljs.core.next(arglist__23237));
var more = cljs.core.rest(cljs.core.next(arglist__23237));
return G__23233__delegate.call(this, x, y, more);
});
return G__23233;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___23229.call(this,x);
case  2 :
return _LT___23230.call(this,x,y);
default:
return _LT___23231.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___23231.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___23238 = (function (x){
return true;
});
var _LT__EQ___23239 = (function (x,y){
return (x <= y);
});
var _LT__EQ___23240 = (function() { 
var G__23242__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__23243 = y;
var G__23244 = cljs.core.first.call(null,more);
var G__23245 = cljs.core.next.call(null,more);
x = G__23243;
y = G__23244;
more = G__23245;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__23242 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__23242__delegate.call(this, x, y, more);
};
G__23242.cljs$lang$maxFixedArity = 2;
G__23242.cljs$lang$applyTo = (function (arglist__23246){
var x = cljs.core.first(arglist__23246);
var y = cljs.core.first(cljs.core.next(arglist__23246));
var more = cljs.core.rest(cljs.core.next(arglist__23246));
return G__23242__delegate.call(this, x, y, more);
});
return G__23242;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___23238.call(this,x);
case  2 :
return _LT__EQ___23239.call(this,x,y);
default:
return _LT__EQ___23240.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___23240.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___23247 = (function (x){
return true;
});
var _GT___23248 = (function (x,y){
return (x > y);
});
var _GT___23249 = (function() { 
var G__23251__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__23252 = y;
var G__23253 = cljs.core.first.call(null,more);
var G__23254 = cljs.core.next.call(null,more);
x = G__23252;
y = G__23253;
more = G__23254;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__23251 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__23251__delegate.call(this, x, y, more);
};
G__23251.cljs$lang$maxFixedArity = 2;
G__23251.cljs$lang$applyTo = (function (arglist__23255){
var x = cljs.core.first(arglist__23255);
var y = cljs.core.first(cljs.core.next(arglist__23255));
var more = cljs.core.rest(cljs.core.next(arglist__23255));
return G__23251__delegate.call(this, x, y, more);
});
return G__23251;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___23247.call(this,x);
case  2 :
return _GT___23248.call(this,x,y);
default:
return _GT___23249.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___23249.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___23256 = (function (x){
return true;
});
var _GT__EQ___23257 = (function (x,y){
return (x >= y);
});
var _GT__EQ___23258 = (function() { 
var G__23260__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__23261 = y;
var G__23262 = cljs.core.first.call(null,more);
var G__23263 = cljs.core.next.call(null,more);
x = G__23261;
y = G__23262;
more = G__23263;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__23260 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__23260__delegate.call(this, x, y, more);
};
G__23260.cljs$lang$maxFixedArity = 2;
G__23260.cljs$lang$applyTo = (function (arglist__23264){
var x = cljs.core.first(arglist__23264);
var y = cljs.core.first(cljs.core.next(arglist__23264));
var more = cljs.core.rest(cljs.core.next(arglist__23264));
return G__23260__delegate.call(this, x, y, more);
});
return G__23260;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___23256.call(this,x);
case  2 :
return _GT__EQ___23257.call(this,x,y);
default:
return _GT__EQ___23258.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___23258.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__23265 = (function (x){
return x;
});
var max__23266 = (function (x,y){
return ((x > y) ? x : y);
});
var max__23267 = (function() { 
var G__23269__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__23269 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__23269__delegate.call(this, x, y, more);
};
G__23269.cljs$lang$maxFixedArity = 2;
G__23269.cljs$lang$applyTo = (function (arglist__23270){
var x = cljs.core.first(arglist__23270);
var y = cljs.core.first(cljs.core.next(arglist__23270));
var more = cljs.core.rest(cljs.core.next(arglist__23270));
return G__23269__delegate.call(this, x, y, more);
});
return G__23269;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__23265.call(this,x);
case  2 :
return max__23266.call(this,x,y);
default:
return max__23267.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__23267.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__23271 = (function (x){
return x;
});
var min__23272 = (function (x,y){
return ((x < y) ? x : y);
});
var min__23273 = (function() { 
var G__23275__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__23275 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__23275__delegate.call(this, x, y, more);
};
G__23275.cljs$lang$maxFixedArity = 2;
G__23275.cljs$lang$applyTo = (function (arglist__23276){
var x = cljs.core.first(arglist__23276);
var y = cljs.core.first(cljs.core.next(arglist__23276));
var more = cljs.core.rest(cljs.core.next(arglist__23276));
return G__23275__delegate.call(this, x, y, more);
});
return G__23275;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__23271.call(this,x);
case  2 :
return min__23272.call(this,x,y);
default:
return min__23273.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__23273.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_((q >= 0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__23277 = (n % d);

return cljs.core.fix.call(null,((n - rem__23277) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__23278 = cljs.core.quot.call(null,n,d);

return (n - (d * q__23278));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__23279 = (function (){
return Math.random.call(null);
});
var rand__23280 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__23279.call(this);
case  1 :
return rand__23280.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___23282 = (function (x){
return true;
});
var _EQ__EQ___23283 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___23284 = (function() { 
var G__23286__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__23287 = y;
var G__23288 = cljs.core.first.call(null,more);
var G__23289 = cljs.core.next.call(null,more);
x = G__23287;
y = G__23288;
more = G__23289;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__23286 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__23286__delegate.call(this, x, y, more);
};
G__23286.cljs$lang$maxFixedArity = 2;
G__23286.cljs$lang$applyTo = (function (arglist__23290){
var x = cljs.core.first(arglist__23290);
var y = cljs.core.first(cljs.core.next(arglist__23290));
var more = cljs.core.rest(cljs.core.next(arglist__23290));
return G__23286__delegate.call(this, x, y, more);
});
return G__23286;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___23282.call(this,x);
case  2 :
return _EQ__EQ___23283.call(this,x,y);
default:
return _EQ__EQ___23284.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___23284.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__23291 = n;
var xs__23292 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____23293 = xs__23292;

if(cljs.core.truth_(and__3546__auto____23293))
{return (n__23291 > 0);
} else
{return and__3546__auto____23293;
}
})()))
{{
var G__23294 = (n__23291 - 1);
var G__23295 = cljs.core.next.call(null,xs__23292);
n__23291 = G__23294;
xs__23292 = G__23295;
continue;
}
} else
{return xs__23292;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__23300 = null;
var G__23300__23301 = (function (coll,n){
var temp__3695__auto____23296 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____23296))
{var xs__23297 = temp__3695__auto____23296;

return cljs.core.first.call(null,xs__23297);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__23300__23302 = (function (coll,n,not_found){
var temp__3695__auto____23298 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____23298))
{var xs__23299 = temp__3695__auto____23298;

return cljs.core.first.call(null,xs__23299);
} else
{return not_found;
}
});
G__23300 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__23300__23301.call(this,coll,n);
case  3 :
return G__23300__23302.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__23300;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___23304 = (function (){
return "";
});
var str_STAR___23305 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___23306 = (function() { 
var G__23308__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__23309 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__23310 = cljs.core.next.call(null,more);
sb = G__23309;
more = G__23310;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__23308 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__23308__delegate.call(this, x, ys);
};
G__23308.cljs$lang$maxFixedArity = 1;
G__23308.cljs$lang$applyTo = (function (arglist__23311){
var x = cljs.core.first(arglist__23311);
var ys = cljs.core.rest(arglist__23311);
return G__23308__delegate.call(this, x, ys);
});
return G__23308;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___23304.call(this);
case  1 :
return str_STAR___23305.call(this,x);
default:
return str_STAR___23306.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___23306.cljs$lang$applyTo;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__23312 = (function (){
return "";
});
var str__23313 = (function (x){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,x)))
{return x.substring(2,x.length);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__23314 = (function() { 
var G__23316__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__23316 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__23316__delegate.call(this, x, ys);
};
G__23316.cljs$lang$maxFixedArity = 1;
G__23316.cljs$lang$applyTo = (function (arglist__23317){
var x = cljs.core.first(arglist__23317);
var ys = cljs.core.rest(arglist__23317);
return G__23316__delegate.call(this, x, ys);
});
return G__23316;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__23312.call(this);
case  1 :
return str__23313.call(this,x);
default:
return str__23314.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__23314.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__23318 = (function (s,start){
return s.substring(start);
});
var subs__23319 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__23318.call(this,s,start);
case  3 :
return subs__23319.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__23321 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{cljs.core.str_STAR_.call(null,"﷑","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"﷑","'",name);
});
var symbol__23322 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__23321.call(this,ns);
case  2 :
return symbol__23322.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__23324 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str_STAR_.call(null,"﷐","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str_STAR_.call(null,"﷐","'",name);
} else
{return null;
}
}
}
});
var keyword__23325 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__23324.call(this,ns);
case  2 :
return keyword__23325.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__23327 = cljs.core.seq.call(null,x);
var ys__23328 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__23327)))
{return cljs.core.nil_QMARK_.call(null,ys__23328);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__23328)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__23327),cljs.core.first.call(null,ys__23328))))
{{
var G__23329 = cljs.core.next.call(null,xs__23327);
var G__23330 = cljs.core.next.call(null,ys__23328);
xs__23327 = G__23329;
ys__23328 = G__23330;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__23331_SHARP_,p2__23332_SHARP_){
return cljs.core.hash_combine.call(null,p1__23331_SHARP_,cljs.core.hash.call(null,p2__23332_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__23333__23334 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__23333__23334))
{var G__23336__23338 = cljs.core.first.call(null,G__23333__23334);
var vec__23337__23339 = G__23336__23338;
var key_name__23340 = cljs.core.nth.call(null,vec__23337__23339,0,null);
var f__23341 = cljs.core.nth.call(null,vec__23337__23339,1,null);
var G__23333__23342 = G__23333__23334;

var G__23336__23343 = G__23336__23338;
var G__23333__23344 = G__23333__23342;

while(true){
var vec__23345__23346 = G__23336__23343;
var key_name__23347 = cljs.core.nth.call(null,vec__23345__23346,0,null);
var f__23348 = cljs.core.nth.call(null,vec__23345__23346,1,null);
var G__23333__23349 = G__23333__23344;

var str_name__23350 = cljs.core.name.call(null,key_name__23347);

obj[str_name__23350] = f__23348;
var temp__3698__auto____23351 = cljs.core.next.call(null,G__23333__23349);

if(cljs.core.truth_(temp__3698__auto____23351))
{var G__23333__23352 = temp__3698__auto____23351;

{
var G__23353 = cljs.core.first.call(null,G__23333__23352);
var G__23354 = G__23333__23352;
G__23336__23343 = G__23353;
G__23333__23344 = G__23354;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.List");
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__23355 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__23356 = this;
return (new cljs.core.List(this__23356.meta,o,coll,(this__23356.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__23357 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__23358 = this;
return this__23358.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__23359 = this;
return this__23359.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__23360 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__23361 = this;
return this__23361.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__23362 = this;
return this__23362.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__23363 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__23364 = this;
return (new cljs.core.List(meta,this__23364.first,this__23364.rest,this__23364.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__23365 = this;
return this__23365.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__23366 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__23367 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__23368 = this;
return (new cljs.core.List(this__23368.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__23369 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__23370 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__23371 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__23372 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__23373 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__23374 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__23375 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__23376 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__23377 = this;
return this__23377.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__23378 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__23379){
var items = cljs.core.seq( arglist__23379 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Cons");
});
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__23380 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__23381 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__23382 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__23383 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__23383.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__23384 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__23385 = this;
return this__23385.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__23386 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__23386.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__23386.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__23387 = this;
return this__23387.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__23388 = this;
return (new cljs.core.Cons(meta,this__23388.first,this__23388.rest));
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__23389 = null;
var G__23389__23390 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__23389__23391 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__23389 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__23389__23390.call(this,string,f);
case  3 :
return G__23389__23391.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__23389;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__23393 = null;
var G__23393__23394 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__23393__23395 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__23393 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__23393__23394.call(this,string,k);
case  3 :
return G__23393__23395.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__23393;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__23397 = null;
var G__23397__23398 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__23397__23399 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__23397 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__23397__23398.call(this,string,n);
case  3 :
return G__23397__23399.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__23397;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__23401 = null;
var G__23401__23402 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__23401__23403 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__23401 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__23401__23402.call(this,this$,coll);
case  3 :
return G__23401__23403.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__23401;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_((cljs.core.count.call(null,args) < 2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__23405 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__23405;
} else
{lazy_seq.x = x__23405.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__23406 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__23407 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__23408 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__23409 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__23409.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__23410 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__23411 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__23412 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__23413 = this;
return this__23413.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__23414 = this;
return (new cljs.core.LazySeq(meta,this__23414.realized,this__23414.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__23415 = cljs.core.array.call(null);

var s__23416 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__23416)))
{ary__23415.push(cljs.core.first.call(null,s__23416));
{
var G__23417 = cljs.core.next.call(null,s__23416);
s__23416 = G__23417;
continue;
}
} else
{return ary__23415;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__23418 = s;
var i__23419 = n;
var sum__23420 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____23421 = (i__23419 > 0);

if(cljs.core.truth_(and__3546__auto____23421))
{return cljs.core.seq.call(null,s__23418);
} else
{return and__3546__auto____23421;
}
})()))
{{
var G__23422 = cljs.core.next.call(null,s__23418);
var G__23423 = (i__23419 - 1);
var G__23424 = (sum__23420 + 1);
s__23418 = G__23422;
i__23419 = G__23423;
sum__23420 = G__23424;
continue;
}
} else
{return sum__23420;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,arglist)))
{return null;
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.next.call(null,arglist))))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__23428 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__23429 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__23430 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__23425 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__23425))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__23425),concat.call(null,cljs.core.rest.call(null,s__23425),y));
} else
{return y;
}
})));
});
var concat__23431 = (function() { 
var G__23433__delegate = function (x,y,zs){
var cat__23427 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__23426 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__23426))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__23426),cat.call(null,cljs.core.rest.call(null,xys__23426),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__23427.call(null,concat.call(null,x,y),zs);
};
var G__23433 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__23433__delegate.call(this, x, y, zs);
};
G__23433.cljs$lang$maxFixedArity = 2;
G__23433.cljs$lang$applyTo = (function (arglist__23434){
var x = cljs.core.first(arglist__23434);
var y = cljs.core.first(cljs.core.next(arglist__23434));
var zs = cljs.core.rest(cljs.core.next(arglist__23434));
return G__23433__delegate.call(this, x, y, zs);
});
return G__23433;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__23428.call(this);
case  1 :
return concat__23429.call(this,x);
case  2 :
return concat__23430.call(this,x,y);
default:
return concat__23431.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__23431.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___23435 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___23436 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___23437 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___23438 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___23439 = (function() { 
var G__23441__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__23441 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__23441__delegate.call(this, a, b, c, d, more);
};
G__23441.cljs$lang$maxFixedArity = 4;
G__23441.cljs$lang$applyTo = (function (arglist__23442){
var a = cljs.core.first(arglist__23442);
var b = cljs.core.first(cljs.core.next(arglist__23442));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__23442)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__23442))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__23442))));
return G__23441__delegate.call(this, a, b, c, d, more);
});
return G__23441;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___23435.call(this,a);
case  2 :
return list_STAR___23436.call(this,a,b);
case  3 :
return list_STAR___23437.call(this,a,b,c);
case  4 :
return list_STAR___23438.call(this,a,b,c,d);
default:
return list_STAR___23439.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___23439.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__23452 = (function (f,args){
var fixed_arity__23443 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__23443 + 1)) <= fixed_arity__23443)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__23453 = (function (f,x,args){
var arglist__23444 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__23445 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__23444,fixed_arity__23445) <= fixed_arity__23445)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__23444));
} else
{return f.cljs$lang$applyTo(arglist__23444);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__23444));
}
});
var apply__23454 = (function (f,x,y,args){
var arglist__23446 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__23447 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__23446,fixed_arity__23447) <= fixed_arity__23447)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__23446));
} else
{return f.cljs$lang$applyTo(arglist__23446);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__23446));
}
});
var apply__23455 = (function (f,x,y,z,args){
var arglist__23448 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__23449 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__23448,fixed_arity__23449) <= fixed_arity__23449)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__23448));
} else
{return f.cljs$lang$applyTo(arglist__23448);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__23448));
}
});
var apply__23456 = (function() { 
var G__23458__delegate = function (f,a,b,c,d,args){
var arglist__23450 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__23451 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__23450,fixed_arity__23451) <= fixed_arity__23451)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__23450));
} else
{return f.cljs$lang$applyTo(arglist__23450);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__23450));
}
};
var G__23458 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__23458__delegate.call(this, f, a, b, c, d, args);
};
G__23458.cljs$lang$maxFixedArity = 5;
G__23458.cljs$lang$applyTo = (function (arglist__23459){
var f = cljs.core.first(arglist__23459);
var a = cljs.core.first(cljs.core.next(arglist__23459));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__23459)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__23459))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__23459)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__23459)))));
return G__23458__delegate.call(this, f, a, b, c, d, args);
});
return G__23458;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__23452.call(this,f,a);
case  3 :
return apply__23453.call(this,f,a,b);
case  4 :
return apply__23454.call(this,f,a,b,c);
case  5 :
return apply__23455.call(this,f,a,b,c,d);
default:
return apply__23456.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__23456.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__23460){
var obj = cljs.core.first(arglist__23460);
var f = cljs.core.first(cljs.core.next(arglist__23460));
var args = cljs.core.rest(cljs.core.next(arglist__23460));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___23461 = (function (x){
return false;
});
var not_EQ___23462 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___23463 = (function() { 
var G__23465__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__23465 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__23465__delegate.call(this, x, y, more);
};
G__23465.cljs$lang$maxFixedArity = 2;
G__23465.cljs$lang$applyTo = (function (arglist__23466){
var x = cljs.core.first(arglist__23466);
var y = cljs.core.first(cljs.core.next(arglist__23466));
var more = cljs.core.rest(cljs.core.next(arglist__23466));
return G__23465__delegate.call(this, x, y, more);
});
return G__23465;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___23461.call(this,x);
case  2 :
return not_EQ___23462.call(this,x,y);
default:
return not_EQ___23463.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___23463.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.seq.call(null,coll))))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__23467 = pred;
var G__23468 = cljs.core.next.call(null,coll);
pred = G__23467;
coll = G__23468;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____23469 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____23469))
{return or__3548__auto____23469;
} else
{{
var G__23470 = pred;
var G__23471 = cljs.core.next.call(null,coll);
pred = G__23470;
coll = G__23471;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return ((n & 1) === 0);
} else
{throw (new Error(cljs.core.str.call(null,"Argument must be an integer: ",n)));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__23472 = null;
var G__23472__23473 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__23472__23474 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__23472__23475 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__23472__23476 = (function() { 
var G__23478__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__23478 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__23478__delegate.call(this, x, y, zs);
};
G__23478.cljs$lang$maxFixedArity = 2;
G__23478.cljs$lang$applyTo = (function (arglist__23479){
var x = cljs.core.first(arglist__23479);
var y = cljs.core.first(cljs.core.next(arglist__23479));
var zs = cljs.core.rest(cljs.core.next(arglist__23479));
return G__23478__delegate.call(this, x, y, zs);
});
return G__23478;
})()
;
G__23472 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__23472__23473.call(this);
case  1 :
return G__23472__23474.call(this,x);
case  2 :
return G__23472__23475.call(this,x,y);
default:
return G__23472__23476.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__23472.cljs$lang$maxFixedArity = 2;
G__23472.cljs$lang$applyTo = G__23472__23476.cljs$lang$applyTo;
return G__23472;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__23480__delegate = function (args){
return x;
};
var G__23480 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__23480__delegate.call(this, args);
};
G__23480.cljs$lang$maxFixedArity = 0;
G__23480.cljs$lang$applyTo = (function (arglist__23481){
var args = cljs.core.seq( arglist__23481 );;
return G__23480__delegate.call(this, args);
});
return G__23480;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__23485 = (function (){
return cljs.core.identity;
});
var comp__23486 = (function (f){
return f;
});
var comp__23487 = (function (f,g){
return (function() {
var G__23491 = null;
var G__23491__23492 = (function (){
return f.call(null,g.call(null));
});
var G__23491__23493 = (function (x){
return f.call(null,g.call(null,x));
});
var G__23491__23494 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__23491__23495 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__23491__23496 = (function() { 
var G__23498__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__23498 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__23498__delegate.call(this, x, y, z, args);
};
G__23498.cljs$lang$maxFixedArity = 3;
G__23498.cljs$lang$applyTo = (function (arglist__23499){
var x = cljs.core.first(arglist__23499);
var y = cljs.core.first(cljs.core.next(arglist__23499));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__23499)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__23499)));
return G__23498__delegate.call(this, x, y, z, args);
});
return G__23498;
})()
;
G__23491 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__23491__23492.call(this);
case  1 :
return G__23491__23493.call(this,x);
case  2 :
return G__23491__23494.call(this,x,y);
case  3 :
return G__23491__23495.call(this,x,y,z);
default:
return G__23491__23496.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__23491.cljs$lang$maxFixedArity = 3;
G__23491.cljs$lang$applyTo = G__23491__23496.cljs$lang$applyTo;
return G__23491;
})()
});
var comp__23488 = (function (f,g,h){
return (function() {
var G__23500 = null;
var G__23500__23501 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__23500__23502 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__23500__23503 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__23500__23504 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__23500__23505 = (function() { 
var G__23507__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__23507 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__23507__delegate.call(this, x, y, z, args);
};
G__23507.cljs$lang$maxFixedArity = 3;
G__23507.cljs$lang$applyTo = (function (arglist__23508){
var x = cljs.core.first(arglist__23508);
var y = cljs.core.first(cljs.core.next(arglist__23508));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__23508)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__23508)));
return G__23507__delegate.call(this, x, y, z, args);
});
return G__23507;
})()
;
G__23500 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__23500__23501.call(this);
case  1 :
return G__23500__23502.call(this,x);
case  2 :
return G__23500__23503.call(this,x,y);
case  3 :
return G__23500__23504.call(this,x,y,z);
default:
return G__23500__23505.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__23500.cljs$lang$maxFixedArity = 3;
G__23500.cljs$lang$applyTo = G__23500__23505.cljs$lang$applyTo;
return G__23500;
})()
});
var comp__23489 = (function() { 
var G__23509__delegate = function (f1,f2,f3,fs){
var fs__23482 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__23510__delegate = function (args){
var ret__23483 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__23482),args);
var fs__23484 = cljs.core.next.call(null,fs__23482);

while(true){
if(cljs.core.truth_(fs__23484))
{{
var G__23511 = cljs.core.first.call(null,fs__23484).call(null,ret__23483);
var G__23512 = cljs.core.next.call(null,fs__23484);
ret__23483 = G__23511;
fs__23484 = G__23512;
continue;
}
} else
{return ret__23483;
}
break;
}
};
var G__23510 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__23510__delegate.call(this, args);
};
G__23510.cljs$lang$maxFixedArity = 0;
G__23510.cljs$lang$applyTo = (function (arglist__23513){
var args = cljs.core.seq( arglist__23513 );;
return G__23510__delegate.call(this, args);
});
return G__23510;
})()
;
};
var G__23509 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__23509__delegate.call(this, f1, f2, f3, fs);
};
G__23509.cljs$lang$maxFixedArity = 3;
G__23509.cljs$lang$applyTo = (function (arglist__23514){
var f1 = cljs.core.first(arglist__23514);
var f2 = cljs.core.first(cljs.core.next(arglist__23514));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__23514)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__23514)));
return G__23509__delegate.call(this, f1, f2, f3, fs);
});
return G__23509;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__23485.call(this);
case  1 :
return comp__23486.call(this,f1);
case  2 :
return comp__23487.call(this,f1,f2);
case  3 :
return comp__23488.call(this,f1,f2,f3);
default:
return comp__23489.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__23489.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__23515 = (function (f,arg1){
return (function() { 
var G__23520__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__23520 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__23520__delegate.call(this, args);
};
G__23520.cljs$lang$maxFixedArity = 0;
G__23520.cljs$lang$applyTo = (function (arglist__23521){
var args = cljs.core.seq( arglist__23521 );;
return G__23520__delegate.call(this, args);
});
return G__23520;
})()
;
});
var partial__23516 = (function (f,arg1,arg2){
return (function() { 
var G__23522__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__23522 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__23522__delegate.call(this, args);
};
G__23522.cljs$lang$maxFixedArity = 0;
G__23522.cljs$lang$applyTo = (function (arglist__23523){
var args = cljs.core.seq( arglist__23523 );;
return G__23522__delegate.call(this, args);
});
return G__23522;
})()
;
});
var partial__23517 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__23524__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__23524 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__23524__delegate.call(this, args);
};
G__23524.cljs$lang$maxFixedArity = 0;
G__23524.cljs$lang$applyTo = (function (arglist__23525){
var args = cljs.core.seq( arglist__23525 );;
return G__23524__delegate.call(this, args);
});
return G__23524;
})()
;
});
var partial__23518 = (function() { 
var G__23526__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__23527__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__23527 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__23527__delegate.call(this, args);
};
G__23527.cljs$lang$maxFixedArity = 0;
G__23527.cljs$lang$applyTo = (function (arglist__23528){
var args = cljs.core.seq( arglist__23528 );;
return G__23527__delegate.call(this, args);
});
return G__23527;
})()
;
};
var G__23526 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__23526__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__23526.cljs$lang$maxFixedArity = 4;
G__23526.cljs$lang$applyTo = (function (arglist__23529){
var f = cljs.core.first(arglist__23529);
var arg1 = cljs.core.first(cljs.core.next(arglist__23529));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__23529)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__23529))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__23529))));
return G__23526__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__23526;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__23515.call(this,f,arg1);
case  3 :
return partial__23516.call(this,f,arg1,arg2);
case  4 :
return partial__23517.call(this,f,arg1,arg2,arg3);
default:
return partial__23518.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__23518.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__23530 = (function (f,x){
return (function() {
var G__23534 = null;
var G__23534__23535 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__23534__23536 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__23534__23537 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__23534__23538 = (function() { 
var G__23540__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__23540 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__23540__delegate.call(this, a, b, c, ds);
};
G__23540.cljs$lang$maxFixedArity = 3;
G__23540.cljs$lang$applyTo = (function (arglist__23541){
var a = cljs.core.first(arglist__23541);
var b = cljs.core.first(cljs.core.next(arglist__23541));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__23541)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__23541)));
return G__23540__delegate.call(this, a, b, c, ds);
});
return G__23540;
})()
;
G__23534 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__23534__23535.call(this,a);
case  2 :
return G__23534__23536.call(this,a,b);
case  3 :
return G__23534__23537.call(this,a,b,c);
default:
return G__23534__23538.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__23534.cljs$lang$maxFixedArity = 3;
G__23534.cljs$lang$applyTo = G__23534__23538.cljs$lang$applyTo;
return G__23534;
})()
});
var fnil__23531 = (function (f,x,y){
return (function() {
var G__23542 = null;
var G__23542__23543 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__23542__23544 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__23542__23545 = (function() { 
var G__23547__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__23547 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__23547__delegate.call(this, a, b, c, ds);
};
G__23547.cljs$lang$maxFixedArity = 3;
G__23547.cljs$lang$applyTo = (function (arglist__23548){
var a = cljs.core.first(arglist__23548);
var b = cljs.core.first(cljs.core.next(arglist__23548));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__23548)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__23548)));
return G__23547__delegate.call(this, a, b, c, ds);
});
return G__23547;
})()
;
G__23542 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__23542__23543.call(this,a,b);
case  3 :
return G__23542__23544.call(this,a,b,c);
default:
return G__23542__23545.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__23542.cljs$lang$maxFixedArity = 3;
G__23542.cljs$lang$applyTo = G__23542__23545.cljs$lang$applyTo;
return G__23542;
})()
});
var fnil__23532 = (function (f,x,y,z){
return (function() {
var G__23549 = null;
var G__23549__23550 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__23549__23551 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__23549__23552 = (function() { 
var G__23554__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__23554 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__23554__delegate.call(this, a, b, c, ds);
};
G__23554.cljs$lang$maxFixedArity = 3;
G__23554.cljs$lang$applyTo = (function (arglist__23555){
var a = cljs.core.first(arglist__23555);
var b = cljs.core.first(cljs.core.next(arglist__23555));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__23555)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__23555)));
return G__23554__delegate.call(this, a, b, c, ds);
});
return G__23554;
})()
;
G__23549 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__23549__23550.call(this,a,b);
case  3 :
return G__23549__23551.call(this,a,b,c);
default:
return G__23549__23552.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__23549.cljs$lang$maxFixedArity = 3;
G__23549.cljs$lang$applyTo = G__23549__23552.cljs$lang$applyTo;
return G__23549;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__23530.call(this,f,x);
case  3 :
return fnil__23531.call(this,f,x,y);
case  4 :
return fnil__23532.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__23558 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____23556 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____23556))
{var s__23557 = temp__3698__auto____23556;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__23557)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__23557)));
} else
{return null;
}
})));
});

return mapi__23558.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____23559 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____23559))
{var s__23560 = temp__3698__auto____23559;

var x__23561 = f.call(null,cljs.core.first.call(null,s__23560));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__23561)))
{return keep.call(null,f,cljs.core.rest.call(null,s__23560));
} else
{return cljs.core.cons.call(null,x__23561,keep.call(null,f,cljs.core.rest.call(null,s__23560)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__23571 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____23568 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____23568))
{var s__23569 = temp__3698__auto____23568;

var x__23570 = f.call(null,idx,cljs.core.first.call(null,s__23569));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__23570)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__23569));
} else
{return cljs.core.cons.call(null,x__23570,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__23569)));
}
} else
{return null;
}
})));
});

return keepi__23571.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__23616 = (function (p){
return (function() {
var ep1 = null;
var ep1__23621 = (function (){
return true;
});
var ep1__23622 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__23623 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____23578 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____23578))
{return p.call(null,y);
} else
{return and__3546__auto____23578;
}
})());
});
var ep1__23624 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____23579 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____23579))
{var and__3546__auto____23580 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____23580))
{return p.call(null,z);
} else
{return and__3546__auto____23580;
}
} else
{return and__3546__auto____23579;
}
})());
});
var ep1__23625 = (function() { 
var G__23627__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____23581 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____23581))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____23581;
}
})());
};
var G__23627 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__23627__delegate.call(this, x, y, z, args);
};
G__23627.cljs$lang$maxFixedArity = 3;
G__23627.cljs$lang$applyTo = (function (arglist__23628){
var x = cljs.core.first(arglist__23628);
var y = cljs.core.first(cljs.core.next(arglist__23628));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__23628)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__23628)));
return G__23627__delegate.call(this, x, y, z, args);
});
return G__23627;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__23621.call(this);
case  1 :
return ep1__23622.call(this,x);
case  2 :
return ep1__23623.call(this,x,y);
case  3 :
return ep1__23624.call(this,x,y,z);
default:
return ep1__23625.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__23625.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__23617 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__23629 = (function (){
return true;
});
var ep2__23630 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____23582 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____23582))
{return p2.call(null,x);
} else
{return and__3546__auto____23582;
}
})());
});
var ep2__23631 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____23583 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____23583))
{var and__3546__auto____23584 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____23584))
{var and__3546__auto____23585 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____23585))
{return p2.call(null,y);
} else
{return and__3546__auto____23585;
}
} else
{return and__3546__auto____23584;
}
} else
{return and__3546__auto____23583;
}
})());
});
var ep2__23632 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____23586 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____23586))
{var and__3546__auto____23587 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____23587))
{var and__3546__auto____23588 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____23588))
{var and__3546__auto____23589 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____23589))
{var and__3546__auto____23590 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____23590))
{return p2.call(null,z);
} else
{return and__3546__auto____23590;
}
} else
{return and__3546__auto____23589;
}
} else
{return and__3546__auto____23588;
}
} else
{return and__3546__auto____23587;
}
} else
{return and__3546__auto____23586;
}
})());
});
var ep2__23633 = (function() { 
var G__23635__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____23591 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____23591))
{return cljs.core.every_QMARK_.call(null,(function (p1__23562_SHARP_){
var and__3546__auto____23592 = p1.call(null,p1__23562_SHARP_);

if(cljs.core.truth_(and__3546__auto____23592))
{return p2.call(null,p1__23562_SHARP_);
} else
{return and__3546__auto____23592;
}
}),args);
} else
{return and__3546__auto____23591;
}
})());
};
var G__23635 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__23635__delegate.call(this, x, y, z, args);
};
G__23635.cljs$lang$maxFixedArity = 3;
G__23635.cljs$lang$applyTo = (function (arglist__23636){
var x = cljs.core.first(arglist__23636);
var y = cljs.core.first(cljs.core.next(arglist__23636));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__23636)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__23636)));
return G__23635__delegate.call(this, x, y, z, args);
});
return G__23635;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__23629.call(this);
case  1 :
return ep2__23630.call(this,x);
case  2 :
return ep2__23631.call(this,x,y);
case  3 :
return ep2__23632.call(this,x,y,z);
default:
return ep2__23633.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__23633.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__23618 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__23637 = (function (){
return true;
});
var ep3__23638 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____23593 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____23593))
{var and__3546__auto____23594 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____23594))
{return p3.call(null,x);
} else
{return and__3546__auto____23594;
}
} else
{return and__3546__auto____23593;
}
})());
});
var ep3__23639 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____23595 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____23595))
{var and__3546__auto____23596 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____23596))
{var and__3546__auto____23597 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____23597))
{var and__3546__auto____23598 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____23598))
{var and__3546__auto____23599 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____23599))
{return p3.call(null,y);
} else
{return and__3546__auto____23599;
}
} else
{return and__3546__auto____23598;
}
} else
{return and__3546__auto____23597;
}
} else
{return and__3546__auto____23596;
}
} else
{return and__3546__auto____23595;
}
})());
});
var ep3__23640 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____23600 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____23600))
{var and__3546__auto____23601 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____23601))
{var and__3546__auto____23602 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____23602))
{var and__3546__auto____23603 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____23603))
{var and__3546__auto____23604 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____23604))
{var and__3546__auto____23605 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____23605))
{var and__3546__auto____23606 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____23606))
{var and__3546__auto____23607 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____23607))
{return p3.call(null,z);
} else
{return and__3546__auto____23607;
}
} else
{return and__3546__auto____23606;
}
} else
{return and__3546__auto____23605;
}
} else
{return and__3546__auto____23604;
}
} else
{return and__3546__auto____23603;
}
} else
{return and__3546__auto____23602;
}
} else
{return and__3546__auto____23601;
}
} else
{return and__3546__auto____23600;
}
})());
});
var ep3__23641 = (function() { 
var G__23643__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____23608 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____23608))
{return cljs.core.every_QMARK_.call(null,(function (p1__23563_SHARP_){
var and__3546__auto____23609 = p1.call(null,p1__23563_SHARP_);

if(cljs.core.truth_(and__3546__auto____23609))
{var and__3546__auto____23610 = p2.call(null,p1__23563_SHARP_);

if(cljs.core.truth_(and__3546__auto____23610))
{return p3.call(null,p1__23563_SHARP_);
} else
{return and__3546__auto____23610;
}
} else
{return and__3546__auto____23609;
}
}),args);
} else
{return and__3546__auto____23608;
}
})());
};
var G__23643 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__23643__delegate.call(this, x, y, z, args);
};
G__23643.cljs$lang$maxFixedArity = 3;
G__23643.cljs$lang$applyTo = (function (arglist__23644){
var x = cljs.core.first(arglist__23644);
var y = cljs.core.first(cljs.core.next(arglist__23644));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__23644)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__23644)));
return G__23643__delegate.call(this, x, y, z, args);
});
return G__23643;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__23637.call(this);
case  1 :
return ep3__23638.call(this,x);
case  2 :
return ep3__23639.call(this,x,y);
case  3 :
return ep3__23640.call(this,x,y,z);
default:
return ep3__23641.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__23641.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__23619 = (function() { 
var G__23645__delegate = function (p1,p2,p3,ps){
var ps__23611 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__23646 = (function (){
return true;
});
var epn__23647 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__23564_SHARP_){
return p1__23564_SHARP_.call(null,x);
}),ps__23611);
});
var epn__23648 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__23565_SHARP_){
var and__3546__auto____23612 = p1__23565_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____23612))
{return p1__23565_SHARP_.call(null,y);
} else
{return and__3546__auto____23612;
}
}),ps__23611);
});
var epn__23649 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__23566_SHARP_){
var and__3546__auto____23613 = p1__23566_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____23613))
{var and__3546__auto____23614 = p1__23566_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____23614))
{return p1__23566_SHARP_.call(null,z);
} else
{return and__3546__auto____23614;
}
} else
{return and__3546__auto____23613;
}
}),ps__23611);
});
var epn__23650 = (function() { 
var G__23652__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____23615 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____23615))
{return cljs.core.every_QMARK_.call(null,(function (p1__23567_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__23567_SHARP_,args);
}),ps__23611);
} else
{return and__3546__auto____23615;
}
})());
};
var G__23652 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__23652__delegate.call(this, x, y, z, args);
};
G__23652.cljs$lang$maxFixedArity = 3;
G__23652.cljs$lang$applyTo = (function (arglist__23653){
var x = cljs.core.first(arglist__23653);
var y = cljs.core.first(cljs.core.next(arglist__23653));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__23653)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__23653)));
return G__23652__delegate.call(this, x, y, z, args);
});
return G__23652;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__23646.call(this);
case  1 :
return epn__23647.call(this,x);
case  2 :
return epn__23648.call(this,x,y);
case  3 :
return epn__23649.call(this,x,y,z);
default:
return epn__23650.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__23650.cljs$lang$applyTo;
return epn;
})()
};
var G__23645 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__23645__delegate.call(this, p1, p2, p3, ps);
};
G__23645.cljs$lang$maxFixedArity = 3;
G__23645.cljs$lang$applyTo = (function (arglist__23654){
var p1 = cljs.core.first(arglist__23654);
var p2 = cljs.core.first(cljs.core.next(arglist__23654));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__23654)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__23654)));
return G__23645__delegate.call(this, p1, p2, p3, ps);
});
return G__23645;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__23616.call(this,p1);
case  2 :
return every_pred__23617.call(this,p1,p2);
case  3 :
return every_pred__23618.call(this,p1,p2,p3);
default:
return every_pred__23619.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__23619.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__23694 = (function (p){
return (function() {
var sp1 = null;
var sp1__23699 = (function (){
return null;
});
var sp1__23700 = (function (x){
return p.call(null,x);
});
var sp1__23701 = (function (x,y){
var or__3548__auto____23656 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____23656))
{return or__3548__auto____23656;
} else
{return p.call(null,y);
}
});
var sp1__23702 = (function (x,y,z){
var or__3548__auto____23657 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____23657))
{return or__3548__auto____23657;
} else
{var or__3548__auto____23658 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____23658))
{return or__3548__auto____23658;
} else
{return p.call(null,z);
}
}
});
var sp1__23703 = (function() { 
var G__23705__delegate = function (x,y,z,args){
var or__3548__auto____23659 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____23659))
{return or__3548__auto____23659;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__23705 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__23705__delegate.call(this, x, y, z, args);
};
G__23705.cljs$lang$maxFixedArity = 3;
G__23705.cljs$lang$applyTo = (function (arglist__23706){
var x = cljs.core.first(arglist__23706);
var y = cljs.core.first(cljs.core.next(arglist__23706));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__23706)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__23706)));
return G__23705__delegate.call(this, x, y, z, args);
});
return G__23705;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__23699.call(this);
case  1 :
return sp1__23700.call(this,x);
case  2 :
return sp1__23701.call(this,x,y);
case  3 :
return sp1__23702.call(this,x,y,z);
default:
return sp1__23703.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__23703.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__23695 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__23707 = (function (){
return null;
});
var sp2__23708 = (function (x){
var or__3548__auto____23660 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____23660))
{return or__3548__auto____23660;
} else
{return p2.call(null,x);
}
});
var sp2__23709 = (function (x,y){
var or__3548__auto____23661 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____23661))
{return or__3548__auto____23661;
} else
{var or__3548__auto____23662 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____23662))
{return or__3548__auto____23662;
} else
{var or__3548__auto____23663 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____23663))
{return or__3548__auto____23663;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__23710 = (function (x,y,z){
var or__3548__auto____23664 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____23664))
{return or__3548__auto____23664;
} else
{var or__3548__auto____23665 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____23665))
{return or__3548__auto____23665;
} else
{var or__3548__auto____23666 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____23666))
{return or__3548__auto____23666;
} else
{var or__3548__auto____23667 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____23667))
{return or__3548__auto____23667;
} else
{var or__3548__auto____23668 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____23668))
{return or__3548__auto____23668;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__23711 = (function() { 
var G__23713__delegate = function (x,y,z,args){
var or__3548__auto____23669 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____23669))
{return or__3548__auto____23669;
} else
{return cljs.core.some.call(null,(function (p1__23572_SHARP_){
var or__3548__auto____23670 = p1.call(null,p1__23572_SHARP_);

if(cljs.core.truth_(or__3548__auto____23670))
{return or__3548__auto____23670;
} else
{return p2.call(null,p1__23572_SHARP_);
}
}),args);
}
};
var G__23713 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__23713__delegate.call(this, x, y, z, args);
};
G__23713.cljs$lang$maxFixedArity = 3;
G__23713.cljs$lang$applyTo = (function (arglist__23714){
var x = cljs.core.first(arglist__23714);
var y = cljs.core.first(cljs.core.next(arglist__23714));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__23714)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__23714)));
return G__23713__delegate.call(this, x, y, z, args);
});
return G__23713;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__23707.call(this);
case  1 :
return sp2__23708.call(this,x);
case  2 :
return sp2__23709.call(this,x,y);
case  3 :
return sp2__23710.call(this,x,y,z);
default:
return sp2__23711.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__23711.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__23696 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__23715 = (function (){
return null;
});
var sp3__23716 = (function (x){
var or__3548__auto____23671 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____23671))
{return or__3548__auto____23671;
} else
{var or__3548__auto____23672 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____23672))
{return or__3548__auto____23672;
} else
{return p3.call(null,x);
}
}
});
var sp3__23717 = (function (x,y){
var or__3548__auto____23673 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____23673))
{return or__3548__auto____23673;
} else
{var or__3548__auto____23674 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____23674))
{return or__3548__auto____23674;
} else
{var or__3548__auto____23675 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____23675))
{return or__3548__auto____23675;
} else
{var or__3548__auto____23676 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____23676))
{return or__3548__auto____23676;
} else
{var or__3548__auto____23677 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____23677))
{return or__3548__auto____23677;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__23718 = (function (x,y,z){
var or__3548__auto____23678 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____23678))
{return or__3548__auto____23678;
} else
{var or__3548__auto____23679 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____23679))
{return or__3548__auto____23679;
} else
{var or__3548__auto____23680 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____23680))
{return or__3548__auto____23680;
} else
{var or__3548__auto____23681 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____23681))
{return or__3548__auto____23681;
} else
{var or__3548__auto____23682 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____23682))
{return or__3548__auto____23682;
} else
{var or__3548__auto____23683 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____23683))
{return or__3548__auto____23683;
} else
{var or__3548__auto____23684 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____23684))
{return or__3548__auto____23684;
} else
{var or__3548__auto____23685 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____23685))
{return or__3548__auto____23685;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__23719 = (function() { 
var G__23721__delegate = function (x,y,z,args){
var or__3548__auto____23686 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____23686))
{return or__3548__auto____23686;
} else
{return cljs.core.some.call(null,(function (p1__23573_SHARP_){
var or__3548__auto____23687 = p1.call(null,p1__23573_SHARP_);

if(cljs.core.truth_(or__3548__auto____23687))
{return or__3548__auto____23687;
} else
{var or__3548__auto____23688 = p2.call(null,p1__23573_SHARP_);

if(cljs.core.truth_(or__3548__auto____23688))
{return or__3548__auto____23688;
} else
{return p3.call(null,p1__23573_SHARP_);
}
}
}),args);
}
};
var G__23721 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__23721__delegate.call(this, x, y, z, args);
};
G__23721.cljs$lang$maxFixedArity = 3;
G__23721.cljs$lang$applyTo = (function (arglist__23722){
var x = cljs.core.first(arglist__23722);
var y = cljs.core.first(cljs.core.next(arglist__23722));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__23722)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__23722)));
return G__23721__delegate.call(this, x, y, z, args);
});
return G__23721;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__23715.call(this);
case  1 :
return sp3__23716.call(this,x);
case  2 :
return sp3__23717.call(this,x,y);
case  3 :
return sp3__23718.call(this,x,y,z);
default:
return sp3__23719.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__23719.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__23697 = (function() { 
var G__23723__delegate = function (p1,p2,p3,ps){
var ps__23689 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__23724 = (function (){
return null;
});
var spn__23725 = (function (x){
return cljs.core.some.call(null,(function (p1__23574_SHARP_){
return p1__23574_SHARP_.call(null,x);
}),ps__23689);
});
var spn__23726 = (function (x,y){
return cljs.core.some.call(null,(function (p1__23575_SHARP_){
var or__3548__auto____23690 = p1__23575_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____23690))
{return or__3548__auto____23690;
} else
{return p1__23575_SHARP_.call(null,y);
}
}),ps__23689);
});
var spn__23727 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__23576_SHARP_){
var or__3548__auto____23691 = p1__23576_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____23691))
{return or__3548__auto____23691;
} else
{var or__3548__auto____23692 = p1__23576_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____23692))
{return or__3548__auto____23692;
} else
{return p1__23576_SHARP_.call(null,z);
}
}
}),ps__23689);
});
var spn__23728 = (function() { 
var G__23730__delegate = function (x,y,z,args){
var or__3548__auto____23693 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____23693))
{return or__3548__auto____23693;
} else
{return cljs.core.some.call(null,(function (p1__23577_SHARP_){
return cljs.core.some.call(null,p1__23577_SHARP_,args);
}),ps__23689);
}
};
var G__23730 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__23730__delegate.call(this, x, y, z, args);
};
G__23730.cljs$lang$maxFixedArity = 3;
G__23730.cljs$lang$applyTo = (function (arglist__23731){
var x = cljs.core.first(arglist__23731);
var y = cljs.core.first(cljs.core.next(arglist__23731));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__23731)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__23731)));
return G__23730__delegate.call(this, x, y, z, args);
});
return G__23730;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__23724.call(this);
case  1 :
return spn__23725.call(this,x);
case  2 :
return spn__23726.call(this,x,y);
case  3 :
return spn__23727.call(this,x,y,z);
default:
return spn__23728.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__23728.cljs$lang$applyTo;
return spn;
})()
};
var G__23723 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__23723__delegate.call(this, p1, p2, p3, ps);
};
G__23723.cljs$lang$maxFixedArity = 3;
G__23723.cljs$lang$applyTo = (function (arglist__23732){
var p1 = cljs.core.first(arglist__23732);
var p2 = cljs.core.first(cljs.core.next(arglist__23732));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__23732)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__23732)));
return G__23723__delegate.call(this, p1, p2, p3, ps);
});
return G__23723;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__23694.call(this,p1);
case  2 :
return some_fn__23695.call(this,p1,p2);
case  3 :
return some_fn__23696.call(this,p1,p2,p3);
default:
return some_fn__23697.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__23697.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__23745 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____23733 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____23733))
{var s__23734 = temp__3698__auto____23733;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__23734)),map.call(null,f,cljs.core.rest.call(null,s__23734)));
} else
{return null;
}
})));
});
var map__23746 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__23735 = cljs.core.seq.call(null,c1);
var s2__23736 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____23737 = s1__23735;

if(cljs.core.truth_(and__3546__auto____23737))
{return s2__23736;
} else
{return and__3546__auto____23737;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__23735),cljs.core.first.call(null,s2__23736)),map.call(null,f,cljs.core.rest.call(null,s1__23735),cljs.core.rest.call(null,s2__23736)));
} else
{return null;
}
})));
});
var map__23747 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__23738 = cljs.core.seq.call(null,c1);
var s2__23739 = cljs.core.seq.call(null,c2);
var s3__23740 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____23741 = s1__23738;

if(cljs.core.truth_(and__3546__auto____23741))
{var and__3546__auto____23742 = s2__23739;

if(cljs.core.truth_(and__3546__auto____23742))
{return s3__23740;
} else
{return and__3546__auto____23742;
}
} else
{return and__3546__auto____23741;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__23738),cljs.core.first.call(null,s2__23739),cljs.core.first.call(null,s3__23740)),map.call(null,f,cljs.core.rest.call(null,s1__23738),cljs.core.rest.call(null,s2__23739),cljs.core.rest.call(null,s3__23740)));
} else
{return null;
}
})));
});
var map__23748 = (function() { 
var G__23750__delegate = function (f,c1,c2,c3,colls){
var step__23744 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__23743 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__23743)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__23743),step.call(null,map.call(null,cljs.core.rest,ss__23743)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__23655_SHARP_){
return cljs.core.apply.call(null,f,p1__23655_SHARP_);
}),step__23744.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__23750 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__23750__delegate.call(this, f, c1, c2, c3, colls);
};
G__23750.cljs$lang$maxFixedArity = 4;
G__23750.cljs$lang$applyTo = (function (arglist__23751){
var f = cljs.core.first(arglist__23751);
var c1 = cljs.core.first(cljs.core.next(arglist__23751));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__23751)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__23751))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__23751))));
return G__23750__delegate.call(this, f, c1, c2, c3, colls);
});
return G__23750;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__23745.call(this,f,c1);
case  3 :
return map__23746.call(this,f,c1,c2);
case  4 :
return map__23747.call(this,f,c1,c2,c3);
default:
return map__23748.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__23748.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((n > 0)))
{var temp__3698__auto____23752 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____23752))
{var s__23753 = temp__3698__auto____23752;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__23753),take.call(null,(n - 1),cljs.core.rest.call(null,s__23753)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__23756 = (function (n,coll){
while(true){
var s__23754 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____23755 = (n > 0);

if(cljs.core.truth_(and__3546__auto____23755))
{return s__23754;
} else
{return and__3546__auto____23755;
}
})()))
{{
var G__23757 = (n - 1);
var G__23758 = cljs.core.rest.call(null,s__23754);
n = G__23757;
coll = G__23758;
continue;
}
} else
{return s__23754;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__23756.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__23759 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__23760 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__23759.call(this,n);
case  2 :
return drop_last__23760.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__23762 = cljs.core.seq.call(null,coll);
var lead__23763 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__23763))
{{
var G__23764 = cljs.core.next.call(null,s__23762);
var G__23765 = cljs.core.next.call(null,lead__23763);
s__23762 = G__23764;
lead__23763 = G__23765;
continue;
}
} else
{return s__23762;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__23768 = (function (pred,coll){
while(true){
var s__23766 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____23767 = s__23766;

if(cljs.core.truth_(and__3546__auto____23767))
{return pred.call(null,cljs.core.first.call(null,s__23766));
} else
{return and__3546__auto____23767;
}
})()))
{{
var G__23769 = pred;
var G__23770 = cljs.core.rest.call(null,s__23766);
pred = G__23769;
coll = G__23770;
continue;
}
} else
{return s__23766;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__23768.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____23771 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____23771))
{var s__23772 = temp__3698__auto____23771;

return cljs.core.concat.call(null,s__23772,cycle.call(null,s__23772));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__23773 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__23774 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__23773.call(this,n);
case  2 :
return repeat__23774.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__23776 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__23777 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__23776.call(this,n);
case  2 :
return repeatedly__23777.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__23783 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__23779 = cljs.core.seq.call(null,c1);
var s2__23780 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____23781 = s1__23779;

if(cljs.core.truth_(and__3546__auto____23781))
{return s2__23780;
} else
{return and__3546__auto____23781;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__23779),cljs.core.cons.call(null,cljs.core.first.call(null,s2__23780),interleave.call(null,cljs.core.rest.call(null,s1__23779),cljs.core.rest.call(null,s2__23780))));
} else
{return null;
}
})));
});
var interleave__23784 = (function() { 
var G__23786__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__23782 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__23782)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__23782),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__23782)));
} else
{return null;
}
})));
};
var G__23786 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__23786__delegate.call(this, c1, c2, colls);
};
G__23786.cljs$lang$maxFixedArity = 2;
G__23786.cljs$lang$applyTo = (function (arglist__23787){
var c1 = cljs.core.first(arglist__23787);
var c2 = cljs.core.first(cljs.core.next(arglist__23787));
var colls = cljs.core.rest(cljs.core.next(arglist__23787));
return G__23786__delegate.call(this, c1, c2, colls);
});
return G__23786;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__23783.call(this,c1,c2);
default:
return interleave__23784.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__23784.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__23790 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____23788 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____23788))
{var coll__23789 = temp__3695__auto____23788;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__23789),cat.call(null,cljs.core.rest.call(null,coll__23789),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__23790.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__23791 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__23792 = (function() { 
var G__23794__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__23794 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__23794__delegate.call(this, f, coll, colls);
};
G__23794.cljs$lang$maxFixedArity = 2;
G__23794.cljs$lang$applyTo = (function (arglist__23795){
var f = cljs.core.first(arglist__23795);
var coll = cljs.core.first(cljs.core.next(arglist__23795));
var colls = cljs.core.rest(cljs.core.next(arglist__23795));
return G__23794__delegate.call(this, f, coll, colls);
});
return G__23794;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__23791.call(this,f,coll);
default:
return mapcat__23792.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__23792.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____23796 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____23796))
{var s__23797 = temp__3698__auto____23796;

var f__23798 = cljs.core.first.call(null,s__23797);
var r__23799 = cljs.core.rest.call(null,s__23797);

if(cljs.core.truth_(pred.call(null,f__23798)))
{return cljs.core.cons.call(null,f__23798,filter.call(null,pred,r__23799));
} else
{return filter.call(null,pred,r__23799);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__23801 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__23801.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__23800_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__23800_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__23808 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__23809 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____23802 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____23802))
{var s__23803 = temp__3698__auto____23802;

var p__23804 = cljs.core.take.call(null,n,s__23803);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__23804))))
{return cljs.core.cons.call(null,p__23804,partition.call(null,n,step,cljs.core.drop.call(null,step,s__23803)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__23810 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____23805 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____23805))
{var s__23806 = temp__3698__auto____23805;

var p__23807 = cljs.core.take.call(null,n,s__23806);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__23807))))
{return cljs.core.cons.call(null,p__23807,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__23806)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__23807,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__23808.call(this,n,step);
case  3 :
return partition__23809.call(this,n,step,pad);
case  4 :
return partition__23810.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__23816 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__23817 = (function (m,ks,not_found){
var sentinel__23812 = cljs.core.lookup_sentinel;
var m__23813 = m;
var ks__23814 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__23814))
{var m__23815 = cljs.core.get.call(null,m__23813,cljs.core.first.call(null,ks__23814),sentinel__23812);

if(cljs.core.truth_((sentinel__23812 === m__23815)))
{return not_found;
} else
{{
var G__23819 = sentinel__23812;
var G__23820 = m__23815;
var G__23821 = cljs.core.next.call(null,ks__23814);
sentinel__23812 = G__23819;
m__23813 = G__23820;
ks__23814 = G__23821;
continue;
}
}
} else
{return m__23813;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__23816.call(this,m,ks);
case  3 :
return get_in__23817.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__23822,v){
var vec__23823__23824 = p__23822;
var k__23825 = cljs.core.nth.call(null,vec__23823__23824,0,null);
var ks__23826 = cljs.core.nthnext.call(null,vec__23823__23824,1);

if(cljs.core.truth_(ks__23826))
{return cljs.core.assoc.call(null,m,k__23825,assoc_in.call(null,cljs.core.get.call(null,m,k__23825),ks__23826,v));
} else
{return cljs.core.assoc.call(null,m,k__23825,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__23827,f,args){
var vec__23828__23829 = p__23827;
var k__23830 = cljs.core.nth.call(null,vec__23828__23829,0,null);
var ks__23831 = cljs.core.nthnext.call(null,vec__23828__23829,1);

if(cljs.core.truth_(ks__23831))
{return cljs.core.assoc.call(null,m,k__23830,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__23830),ks__23831,f,args));
} else
{return cljs.core.assoc.call(null,m,k__23830,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__23830),args));
}
};
var update_in = function (m,p__23827,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__23827, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__23832){
var m = cljs.core.first(arglist__23832);
var p__23827 = cljs.core.first(cljs.core.next(arglist__23832));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__23832)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__23832)));
return update_in__delegate.call(this, m, p__23827, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__23833 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__23860 = null;
var G__23860__23861 = (function (coll,k){
var this__23834 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__23860__23862 = (function (coll,k,not_found){
var this__23835 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__23860 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__23860__23861.call(this,coll,k);
case  3 :
return G__23860__23862.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__23860;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__23836 = this;
var new_array__23837 = cljs.core.aclone.call(null,this__23836.array);

(new_array__23837[k] = v);
return (new cljs.core.Vector(this__23836.meta,new_array__23837));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__23864 = null;
var G__23864__23865 = (function (coll,k){
var this__23838 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__23864__23866 = (function (coll,k,not_found){
var this__23839 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__23864 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__23864__23865.call(this,coll,k);
case  3 :
return G__23864__23866.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__23864;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__23840 = this;
var new_array__23841 = cljs.core.aclone.call(null,this__23840.array);

new_array__23841.push(o);
return (new cljs.core.Vector(this__23840.meta,new_array__23841));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__23868 = null;
var G__23868__23869 = (function (v,f){
var this__23842 = this;
return cljs.core.ci_reduce.call(null,this__23842.array,f);
});
var G__23868__23870 = (function (v,f,start){
var this__23843 = this;
return cljs.core.ci_reduce.call(null,this__23843.array,f,start);
});
G__23868 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__23868__23869.call(this,v,f);
case  3 :
return G__23868__23870.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__23868;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__23844 = this;
if(cljs.core.truth_((this__23844.array.length > 0)))
{var vector_seq__23845 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__23844.array.length)))
{return cljs.core.cons.call(null,(this__23844.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__23845.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__23846 = this;
return this__23846.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__23847 = this;
var count__23848 = this__23847.array.length;

if(cljs.core.truth_((count__23848 > 0)))
{return (this__23847.array[(count__23848 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__23849 = this;
if(cljs.core.truth_((this__23849.array.length > 0)))
{var new_array__23850 = cljs.core.aclone.call(null,this__23849.array);

new_array__23850.pop();
return (new cljs.core.Vector(this__23849.meta,new_array__23850));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__23851 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__23852 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__23853 = this;
return (new cljs.core.Vector(meta,this__23853.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__23854 = this;
return this__23854.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__23872 = null;
var G__23872__23873 = (function (coll,n){
var this__23855 = this;
if(cljs.core.truth_((function (){var and__3546__auto____23856 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____23856))
{return (n < this__23855.array.length);
} else
{return and__3546__auto____23856;
}
})()))
{return (this__23855.array[n]);
} else
{return null;
}
});
var G__23872__23874 = (function (coll,n,not_found){
var this__23857 = this;
if(cljs.core.truth_((function (){var and__3546__auto____23858 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____23858))
{return (n < this__23857.array.length);
} else
{return and__3546__auto____23858;
}
})()))
{return (this__23857.array[n]);
} else
{return not_found;
}
});
G__23872 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__23872__23873.call(this,coll,n);
case  3 :
return G__23872__23874.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__23872;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__23859 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__23859.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__23876){
var args = cljs.core.seq( arglist__23876 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.Subvec.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = (function (coll){
var this__23877 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__23899 = null;
var G__23899__23900 = (function (coll,k){
var this__23878 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__23899__23901 = (function (coll,k,not_found){
var this__23879 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__23899 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__23899__23900.call(this,coll,k);
case  3 :
return G__23899__23901.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__23899;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__23880 = this;
var v_pos__23881 = (this__23880.start + key);

return (new cljs.core.Subvec(this__23880.meta,cljs.core._assoc.call(null,this__23880.v,v_pos__23881,val),this__23880.start,((this__23880.end > (v_pos__23881 + 1)) ? this__23880.end : (v_pos__23881 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__23903 = null;
var G__23903__23904 = (function (coll,k){
var this__23882 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__23903__23905 = (function (coll,k,not_found){
var this__23883 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__23903 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__23903__23904.call(this,coll,k);
case  3 :
return G__23903__23905.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__23903;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__23884 = this;
return (new cljs.core.Subvec(this__23884.meta,cljs.core._assoc_n.call(null,this__23884.v,this__23884.end,o),this__23884.start,(this__23884.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__23907 = null;
var G__23907__23908 = (function (coll,f){
var this__23885 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__23907__23909 = (function (coll,f,start){
var this__23886 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__23907 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__23907__23908.call(this,coll,f);
case  3 :
return G__23907__23909.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__23907;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__23887 = this;
var subvec_seq__23888 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__23887.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__23887.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__23888.call(null,this__23887.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__23889 = this;
return (this__23889.end - this__23889.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__23890 = this;
return cljs.core._nth.call(null,this__23890.v,(this__23890.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__23891 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__23891.start,this__23891.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__23891.meta,this__23891.v,this__23891.start,(this__23891.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__23892 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__23893 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__23894 = this;
return (new cljs.core.Subvec(meta,this__23894.v,this__23894.start,this__23894.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__23895 = this;
return this__23895.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__23911 = null;
var G__23911__23912 = (function (coll,n){
var this__23896 = this;
return cljs.core._nth.call(null,this__23896.v,(this__23896.start + n));
});
var G__23911__23913 = (function (coll,n,not_found){
var this__23897 = this;
return cljs.core._nth.call(null,this__23897.v,(this__23897.start + n),not_found);
});
G__23911 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__23911__23912.call(this,coll,n);
case  3 :
return G__23911__23913.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__23911;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__23898 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__23898.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__23915 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__23916 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__23915.call(this,v,start);
case  3 :
return subvec__23916.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subvec;
})()
;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear){
this.meta = meta;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueueSeq.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__23918 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__23919 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__23920 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__23921 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__23921.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__23922 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__23923 = this;
return cljs.core._first.call(null,this__23923.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__23924 = this;
var temp__3695__auto____23925 = cljs.core.next.call(null,this__23924.front);

if(cljs.core.truth_(temp__3695__auto____23925))
{var f1__23926 = temp__3695__auto____23925;

return (new cljs.core.PersistentQueueSeq(this__23924.meta,f1__23926,this__23924.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__23924.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__23924.meta,this__23924.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__23927 = this;
return this__23927.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__23928 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__23928.front,this__23928.rear));
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueue.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash = (function (coll){
var this__23929 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__23930 = this;
if(cljs.core.truth_(this__23930.front))
{return (new cljs.core.PersistentQueue(this__23930.meta,(this__23930.count + 1),this__23930.front,cljs.core.conj.call(null,(function (){var or__3548__auto____23931 = this__23930.rear;

if(cljs.core.truth_(or__3548__auto____23931))
{return or__3548__auto____23931;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__23930.meta,(this__23930.count + 1),cljs.core.conj.call(null,this__23930.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__23932 = this;
var rear__23933 = cljs.core.seq.call(null,this__23932.rear);

if(cljs.core.truth_((function (){var or__3548__auto____23934 = this__23932.front;

if(cljs.core.truth_(or__3548__auto____23934))
{return or__3548__auto____23934;
} else
{return rear__23933;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__23932.front,cljs.core.seq.call(null,rear__23933)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__23935 = this;
return this__23935.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__23936 = this;
return cljs.core._first.call(null,this__23936.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__23937 = this;
if(cljs.core.truth_(this__23937.front))
{var temp__3695__auto____23938 = cljs.core.next.call(null,this__23937.front);

if(cljs.core.truth_(temp__3695__auto____23938))
{var f1__23939 = temp__3695__auto____23938;

return (new cljs.core.PersistentQueue(this__23937.meta,(this__23937.count - 1),f1__23939,this__23937.rear));
} else
{return (new cljs.core.PersistentQueue(this__23937.meta,(this__23937.count - 1),cljs.core.seq.call(null,this__23937.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__23940 = this;
return cljs.core.first.call(null,this__23940.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__23941 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__23942 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__23943 = this;
return (new cljs.core.PersistentQueue(meta,this__23943.count,this__23943.front,this__23943.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__23944 = this;
return this__23944.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__23945 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.Vector.fromArray([])));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__23946 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__23947 = array.length;

var i__23948 = 0;

while(true){
if(cljs.core.truth_((i__23948 < len__23947)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__23948]))))
{return i__23948;
} else
{{
var G__23949 = (i__23948 + incr);
i__23948 = G__23949;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___23951 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___23952 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____23950 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____23950))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____23950;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___23951.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___23952.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__23955 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__23976 = null;
var G__23976__23977 = (function (coll,k){
var this__23956 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__23976__23978 = (function (coll,k,not_found){
var this__23957 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__23957.strobj,(this__23957.strobj[k]),not_found);
});
G__23976 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__23976__23977.call(this,coll,k);
case  3 :
return G__23976__23978.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__23976;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__23958 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__23959 = goog.object.clone.call(null,this__23958.strobj);
var overwrite_QMARK___23960 = new_strobj__23959.hasOwnProperty(k);

(new_strobj__23959[k] = v);
if(cljs.core.truth_(overwrite_QMARK___23960))
{return (new cljs.core.ObjMap(this__23958.meta,this__23958.keys,new_strobj__23959));
} else
{var new_keys__23961 = cljs.core.aclone.call(null,this__23958.keys);

new_keys__23961.push(k);
return (new cljs.core.ObjMap(this__23958.meta,new_keys__23961,new_strobj__23959));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__23958.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__23962 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__23962.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__23980 = null;
var G__23980__23981 = (function (coll,k){
var this__23963 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__23980__23982 = (function (coll,k,not_found){
var this__23964 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__23980 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__23980__23981.call(this,coll,k);
case  3 :
return G__23980__23982.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__23980;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__23965 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__23966 = this;
if(cljs.core.truth_((this__23966.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__23954_SHARP_){
return cljs.core.vector.call(null,p1__23954_SHARP_,(this__23966.strobj[p1__23954_SHARP_]));
}),this__23966.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__23967 = this;
return this__23967.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__23968 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__23969 = this;
return (new cljs.core.ObjMap(meta,this__23969.keys,this__23969.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__23970 = this;
return this__23970.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__23971 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__23971.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__23972 = this;
if(cljs.core.truth_((function (){var and__3546__auto____23973 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____23973))
{return this__23972.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____23973;
}
})()))
{var new_keys__23974 = cljs.core.aclone.call(null,this__23972.keys);
var new_strobj__23975 = goog.object.clone.call(null,this__23972.strobj);

new_keys__23974.splice(cljs.core.scan_array.call(null,1,k,new_keys__23974),1);
cljs.core.js_delete.call(null,new_strobj__23975,k);
return (new cljs.core.ObjMap(this__23972.meta,new_keys__23974,new_strobj__23975));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__23985 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__24017 = null;
var G__24017__24018 = (function (coll,k){
var this__23986 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__24017__24019 = (function (coll,k,not_found){
var this__23987 = this;
var bucket__23988 = (this__23987.hashobj[cljs.core.hash.call(null,k)]);
var i__23989 = (cljs.core.truth_(bucket__23988)?cljs.core.scan_array.call(null,2,k,bucket__23988):null);

if(cljs.core.truth_(i__23989))
{return (bucket__23988[(i__23989 + 1)]);
} else
{return not_found;
}
});
G__24017 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__24017__24018.call(this,coll,k);
case  3 :
return G__24017__24019.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__24017;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__23990 = this;
var h__23991 = cljs.core.hash.call(null,k);
var bucket__23992 = (this__23990.hashobj[h__23991]);

if(cljs.core.truth_(bucket__23992))
{var new_bucket__23993 = cljs.core.aclone.call(null,bucket__23992);
var new_hashobj__23994 = goog.object.clone.call(null,this__23990.hashobj);

(new_hashobj__23994[h__23991] = new_bucket__23993);
var temp__3695__auto____23995 = cljs.core.scan_array.call(null,2,k,new_bucket__23993);

if(cljs.core.truth_(temp__3695__auto____23995))
{var i__23996 = temp__3695__auto____23995;

(new_bucket__23993[(i__23996 + 1)] = v);
return (new cljs.core.HashMap(this__23990.meta,this__23990.count,new_hashobj__23994));
} else
{new_bucket__23993.push(k,v);
return (new cljs.core.HashMap(this__23990.meta,(this__23990.count + 1),new_hashobj__23994));
}
} else
{var new_hashobj__23997 = goog.object.clone.call(null,this__23990.hashobj);

(new_hashobj__23997[h__23991] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__23990.meta,(this__23990.count + 1),new_hashobj__23997));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__23998 = this;
var bucket__23999 = (this__23998.hashobj[cljs.core.hash.call(null,k)]);
var i__24000 = (cljs.core.truth_(bucket__23999)?cljs.core.scan_array.call(null,2,k,bucket__23999):null);

if(cljs.core.truth_(i__24000))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__24021 = null;
var G__24021__24022 = (function (coll,k){
var this__24001 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__24021__24023 = (function (coll,k,not_found){
var this__24002 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__24021 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__24021__24022.call(this,coll,k);
case  3 :
return G__24021__24023.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__24021;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__24003 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__24004 = this;
if(cljs.core.truth_((this__24004.count > 0)))
{var hashes__24005 = cljs.core.js_keys.call(null,this__24004.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__23984_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__24004.hashobj[p1__23984_SHARP_])));
}),hashes__24005);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__24006 = this;
return this__24006.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__24007 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__24008 = this;
return (new cljs.core.HashMap(meta,this__24008.count,this__24008.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__24009 = this;
return this__24009.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__24010 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__24010.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__24011 = this;
var h__24012 = cljs.core.hash.call(null,k);
var bucket__24013 = (this__24011.hashobj[h__24012]);
var i__24014 = (cljs.core.truth_(bucket__24013)?cljs.core.scan_array.call(null,2,k,bucket__24013):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__24014)))
{return coll;
} else
{var new_hashobj__24015 = goog.object.clone.call(null,this__24011.hashobj);

if(cljs.core.truth_((3 > bucket__24013.length)))
{cljs.core.js_delete.call(null,new_hashobj__24015,h__24012);
} else
{var new_bucket__24016 = cljs.core.aclone.call(null,bucket__24013);

new_bucket__24016.splice(i__24014,2);
(new_hashobj__24015[h__24012] = new_bucket__24016);
}
return (new cljs.core.HashMap(this__24011.meta,(this__24011.count - 1),new_hashobj__24015));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__24025 = ks.length;

var i__24026 = 0;
var out__24027 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__24026 < len__24025)))
{{
var G__24028 = (i__24026 + 1);
var G__24029 = cljs.core.assoc.call(null,out__24027,(ks[i__24026]),(vs[i__24026]));
i__24026 = G__24028;
out__24027 = G__24029;
continue;
}
} else
{return out__24027;
}
break;
}
});
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__24030 = cljs.core.seq.call(null,keyvals);
var out__24031 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__24030))
{{
var G__24032 = cljs.core.nnext.call(null,in$__24030);
var G__24033 = cljs.core.assoc.call(null,out__24031,cljs.core.first.call(null,in$__24030),cljs.core.second.call(null,in$__24030));
in$__24030 = G__24032;
out__24031 = G__24033;
continue;
}
} else
{return out__24031;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__24034){
var keyvals = cljs.core.seq( arglist__24034 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__24035_SHARP_,p2__24036_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____24037 = p1__24035_SHARP_;

if(cljs.core.truth_(or__3548__auto____24037))
{return or__3548__auto____24037;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__24036_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__24038){
var maps = cljs.core.seq( arglist__24038 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__24041 = (function (m,e){
var k__24039 = cljs.core.first.call(null,e);
var v__24040 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__24039)))
{return cljs.core.assoc.call(null,m,k__24039,f.call(null,cljs.core.get.call(null,m,k__24039),v__24040));
} else
{return cljs.core.assoc.call(null,m,k__24039,v__24040);
}
});
var merge2__24043 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__24041,(function (){var or__3548__auto____24042 = m1;

if(cljs.core.truth_(or__3548__auto____24042))
{return or__3548__auto____24042;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__24043,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__24044){
var f = cljs.core.first(arglist__24044);
var maps = cljs.core.rest(arglist__24044);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__24046 = cljs.core.ObjMap.fromObject([],{});
var keys__24047 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__24047))
{var key__24048 = cljs.core.first.call(null,keys__24047);
var entry__24049 = cljs.core.get.call(null,map,key__24048,"﷐'user/not-found");

{
var G__24050 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__24049,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__24046,key__24048,entry__24049):ret__24046);
var G__24051 = cljs.core.next.call(null,keys__24047);
ret__24046 = G__24050;
keys__24047 = G__24051;
continue;
}
} else
{return ret__24046;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Set");
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__24052 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__24067 = null;
var G__24067__24068 = (function (coll,v){
var this__24053 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__24067__24069 = (function (coll,v,not_found){
var this__24054 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__24054.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__24067 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__24067__24068.call(this,coll,v);
case  3 :
return G__24067__24069.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__24067;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__24071 = null;
var G__24071__24072 = (function (coll,k){
var this__24055 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__24071__24073 = (function (coll,k,not_found){
var this__24056 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__24071 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__24071__24072.call(this,coll,k);
case  3 :
return G__24071__24073.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__24071;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__24057 = this;
return (new cljs.core.Set(this__24057.meta,cljs.core.assoc.call(null,this__24057.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__24058 = this;
return cljs.core.keys.call(null,this__24058.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__24059 = this;
return (new cljs.core.Set(this__24059.meta,cljs.core.dissoc.call(null,this__24059.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__24060 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__24061 = this;
var and__3546__auto____24062 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____24062))
{var and__3546__auto____24063 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____24063))
{return cljs.core.every_QMARK_.call(null,(function (p1__24045_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__24045_SHARP_);
}),other);
} else
{return and__3546__auto____24063;
}
} else
{return and__3546__auto____24062;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__24064 = this;
return (new cljs.core.Set(meta,this__24064.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__24065 = this;
return this__24065.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__24066 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__24066.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__24076 = cljs.core.seq.call(null,coll);
var out__24077 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__24076))))
{{
var G__24078 = cljs.core.rest.call(null,in$__24076);
var G__24079 = cljs.core.conj.call(null,out__24077,cljs.core.first.call(null,in$__24076));
in$__24076 = G__24078;
out__24077 = G__24079;
continue;
}
} else
{return out__24077;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__24080 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____24081 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____24081))
{var e__24082 = temp__3695__auto____24081;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__24082));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__24080,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__24075_SHARP_){
var temp__3695__auto____24083 = cljs.core.find.call(null,smap,p1__24075_SHARP_);

if(cljs.core.truth_(temp__3695__auto____24083))
{var e__24084 = temp__3695__auto____24083;

return cljs.core.second.call(null,e__24084);
} else
{return p1__24075_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__24092 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__24085,seen){
while(true){
var vec__24086__24087 = p__24085;
var f__24088 = cljs.core.nth.call(null,vec__24086__24087,0,null);
var xs__24089 = vec__24086__24087;

var temp__3698__auto____24090 = cljs.core.seq.call(null,xs__24089);

if(cljs.core.truth_(temp__3698__auto____24090))
{var s__24091 = temp__3698__auto____24090;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__24088)))
{{
var G__24093 = cljs.core.rest.call(null,s__24091);
var G__24094 = seen;
p__24085 = G__24093;
seen = G__24094;
continue;
}
} else
{return cljs.core.cons.call(null,f__24088,step.call(null,cljs.core.rest.call(null,s__24091),cljs.core.conj.call(null,seen,f__24088)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__24092.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__24095 = cljs.core.Vector.fromArray([]);
var s__24096 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__24096)))
{{
var G__24097 = cljs.core.conj.call(null,ret__24095,cljs.core.first.call(null,s__24096));
var G__24098 = cljs.core.next.call(null,s__24096);
ret__24095 = G__24097;
s__24096 = G__24098;
continue;
}
} else
{return cljs.core.seq.call(null,ret__24095);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____24099 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____24099))
{return or__3548__auto____24099;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__24100 = x.lastIndexOf("/");

if(cljs.core.truth_((i__24100 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__24100 + 1));
}
} else
{if(cljs.core.truth_("﷐'else"))
{throw (new Error(cljs.core.str.call(null,"Doesn't support name: ",x)));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3548__auto____24101 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____24101))
{return or__3548__auto____24101;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__24102 = x.lastIndexOf("/");

if(cljs.core.truth_((i__24102 > -1)))
{return cljs.core.subs.call(null,x,2,i__24102);
} else
{return null;
}
} else
{throw (new Error(cljs.core.str.call(null,"Doesn't support namespace: ",x)));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__24105 = cljs.core.ObjMap.fromObject([],{});
var ks__24106 = cljs.core.seq.call(null,keys);
var vs__24107 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____24108 = ks__24106;

if(cljs.core.truth_(and__3546__auto____24108))
{return vs__24107;
} else
{return and__3546__auto____24108;
}
})()))
{{
var G__24109 = cljs.core.assoc.call(null,map__24105,cljs.core.first.call(null,ks__24106),cljs.core.first.call(null,vs__24107));
var G__24110 = cljs.core.next.call(null,ks__24106);
var G__24111 = cljs.core.next.call(null,vs__24107);
map__24105 = G__24109;
ks__24106 = G__24110;
vs__24107 = G__24111;
continue;
}
} else
{return map__24105;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__24114 = (function (k,x){
return x;
});
var max_key__24115 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__24116 = (function() { 
var G__24118__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__24103_SHARP_,p2__24104_SHARP_){
return max_key.call(null,k,p1__24103_SHARP_,p2__24104_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__24118 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__24118__delegate.call(this, k, x, y, more);
};
G__24118.cljs$lang$maxFixedArity = 3;
G__24118.cljs$lang$applyTo = (function (arglist__24119){
var k = cljs.core.first(arglist__24119);
var x = cljs.core.first(cljs.core.next(arglist__24119));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__24119)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__24119)));
return G__24118__delegate.call(this, k, x, y, more);
});
return G__24118;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__24114.call(this,k,x);
case  3 :
return max_key__24115.call(this,k,x,y);
default:
return max_key__24116.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__24116.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__24120 = (function (k,x){
return x;
});
var min_key__24121 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__24122 = (function() { 
var G__24124__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__24112_SHARP_,p2__24113_SHARP_){
return min_key.call(null,k,p1__24112_SHARP_,p2__24113_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__24124 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__24124__delegate.call(this, k, x, y, more);
};
G__24124.cljs$lang$maxFixedArity = 3;
G__24124.cljs$lang$applyTo = (function (arglist__24125){
var k = cljs.core.first(arglist__24125);
var x = cljs.core.first(cljs.core.next(arglist__24125));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__24125)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__24125)));
return G__24124__delegate.call(this, k, x, y, more);
});
return G__24124;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__24120.call(this,k,x);
case  3 :
return min_key__24121.call(this,k,x,y);
default:
return min_key__24122.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__24122.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__24128 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__24129 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____24126 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____24126))
{var s__24127 = temp__3698__auto____24126;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__24127),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__24127)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__24128.call(this,n,step);
case  3 :
return partition_all__24129.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____24131 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____24131))
{var s__24132 = temp__3698__auto____24131;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__24132))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__24132),take_while.call(null,pred,cljs.core.rest.call(null,s__24132)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Range");
});
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__24133 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__24134 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__24150 = null;
var G__24150__24151 = (function (rng,f){
var this__24135 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__24150__24152 = (function (rng,f,s){
var this__24136 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__24150 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__24150__24151.call(this,rng,f);
case  3 :
return G__24150__24152.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__24150;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__24137 = this;
var comp__24138 = (cljs.core.truth_((this__24137.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__24138.call(null,this__24137.start,this__24137.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__24139 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__24139.end - this__24139.start) / this__24139.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__24140 = this;
return this__24140.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__24141 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__24141.meta,(this__24141.start + this__24141.step),this__24141.end,this__24141.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__24142 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__24143 = this;
return (new cljs.core.Range(meta,this__24143.start,this__24143.end,this__24143.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__24144 = this;
return this__24144.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__24154 = null;
var G__24154__24155 = (function (rng,n){
var this__24145 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__24145.start + (n * this__24145.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____24146 = (this__24145.start > this__24145.end);

if(cljs.core.truth_(and__3546__auto____24146))
{return cljs.core._EQ_.call(null,this__24145.step,0);
} else
{return and__3546__auto____24146;
}
})()))
{return this__24145.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__24154__24156 = (function (rng,n,not_found){
var this__24147 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__24147.start + (n * this__24147.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____24148 = (this__24147.start > this__24147.end);

if(cljs.core.truth_(and__3546__auto____24148))
{return cljs.core._EQ_.call(null,this__24147.step,0);
} else
{return and__3546__auto____24148;
}
})()))
{return this__24147.start;
} else
{return not_found;
}
}
});
G__24154 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__24154__24155.call(this,rng,n);
case  3 :
return G__24154__24156.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__24154;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__24149 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__24149.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__24158 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__24159 = (function (end){
return range.call(null,0,end,1);
});
var range__24160 = (function (start,end){
return range.call(null,start,end,1);
});
var range__24161 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__24158.call(this);
case  1 :
return range__24159.call(this,start);
case  2 :
return range__24160.call(this,start,end);
case  3 :
return range__24161.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____24163 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____24163))
{var s__24164 = temp__3698__auto____24163;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__24164),take_nth.call(null,n,cljs.core.drop.call(null,n,s__24164)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____24166 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____24166))
{var s__24167 = temp__3698__auto____24166;

var fst__24168 = cljs.core.first.call(null,s__24167);
var fv__24169 = f.call(null,fst__24168);
var run__24170 = cljs.core.cons.call(null,fst__24168,cljs.core.take_while.call(null,(function (p1__24165_SHARP_){
return cljs.core._EQ_.call(null,fv__24169,f.call(null,p1__24165_SHARP_));
}),cljs.core.next.call(null,s__24167)));

return cljs.core.cons.call(null,run__24170,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__24170),s__24167))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__24185 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____24181 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____24181))
{var s__24182 = temp__3695__auto____24181;

return reductions.call(null,f,cljs.core.first.call(null,s__24182),cljs.core.rest.call(null,s__24182));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__24186 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____24183 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____24183))
{var s__24184 = temp__3698__auto____24183;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__24184)),cljs.core.rest.call(null,s__24184));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__24185.call(this,f,init);
case  3 :
return reductions__24186.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__24189 = (function (f){
return (function() {
var G__24194 = null;
var G__24194__24195 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__24194__24196 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__24194__24197 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__24194__24198 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__24194__24199 = (function() { 
var G__24201__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__24201 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__24201__delegate.call(this, x, y, z, args);
};
G__24201.cljs$lang$maxFixedArity = 3;
G__24201.cljs$lang$applyTo = (function (arglist__24202){
var x = cljs.core.first(arglist__24202);
var y = cljs.core.first(cljs.core.next(arglist__24202));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__24202)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__24202)));
return G__24201__delegate.call(this, x, y, z, args);
});
return G__24201;
})()
;
G__24194 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__24194__24195.call(this);
case  1 :
return G__24194__24196.call(this,x);
case  2 :
return G__24194__24197.call(this,x,y);
case  3 :
return G__24194__24198.call(this,x,y,z);
default:
return G__24194__24199.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__24194.cljs$lang$maxFixedArity = 3;
G__24194.cljs$lang$applyTo = G__24194__24199.cljs$lang$applyTo;
return G__24194;
})()
});
var juxt__24190 = (function (f,g){
return (function() {
var G__24203 = null;
var G__24203__24204 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__24203__24205 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__24203__24206 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__24203__24207 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__24203__24208 = (function() { 
var G__24210__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__24210 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__24210__delegate.call(this, x, y, z, args);
};
G__24210.cljs$lang$maxFixedArity = 3;
G__24210.cljs$lang$applyTo = (function (arglist__24211){
var x = cljs.core.first(arglist__24211);
var y = cljs.core.first(cljs.core.next(arglist__24211));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__24211)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__24211)));
return G__24210__delegate.call(this, x, y, z, args);
});
return G__24210;
})()
;
G__24203 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__24203__24204.call(this);
case  1 :
return G__24203__24205.call(this,x);
case  2 :
return G__24203__24206.call(this,x,y);
case  3 :
return G__24203__24207.call(this,x,y,z);
default:
return G__24203__24208.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__24203.cljs$lang$maxFixedArity = 3;
G__24203.cljs$lang$applyTo = G__24203__24208.cljs$lang$applyTo;
return G__24203;
})()
});
var juxt__24191 = (function (f,g,h){
return (function() {
var G__24212 = null;
var G__24212__24213 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__24212__24214 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__24212__24215 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__24212__24216 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__24212__24217 = (function() { 
var G__24219__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__24219 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__24219__delegate.call(this, x, y, z, args);
};
G__24219.cljs$lang$maxFixedArity = 3;
G__24219.cljs$lang$applyTo = (function (arglist__24220){
var x = cljs.core.first(arglist__24220);
var y = cljs.core.first(cljs.core.next(arglist__24220));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__24220)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__24220)));
return G__24219__delegate.call(this, x, y, z, args);
});
return G__24219;
})()
;
G__24212 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__24212__24213.call(this);
case  1 :
return G__24212__24214.call(this,x);
case  2 :
return G__24212__24215.call(this,x,y);
case  3 :
return G__24212__24216.call(this,x,y,z);
default:
return G__24212__24217.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__24212.cljs$lang$maxFixedArity = 3;
G__24212.cljs$lang$applyTo = G__24212__24217.cljs$lang$applyTo;
return G__24212;
})()
});
var juxt__24192 = (function() { 
var G__24221__delegate = function (f,g,h,fs){
var fs__24188 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__24222 = null;
var G__24222__24223 = (function (){
return cljs.core.reduce.call(null,(function (p1__24171_SHARP_,p2__24172_SHARP_){
return cljs.core.conj.call(null,p1__24171_SHARP_,p2__24172_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__24188);
});
var G__24222__24224 = (function (x){
return cljs.core.reduce.call(null,(function (p1__24173_SHARP_,p2__24174_SHARP_){
return cljs.core.conj.call(null,p1__24173_SHARP_,p2__24174_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__24188);
});
var G__24222__24225 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__24175_SHARP_,p2__24176_SHARP_){
return cljs.core.conj.call(null,p1__24175_SHARP_,p2__24176_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__24188);
});
var G__24222__24226 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__24177_SHARP_,p2__24178_SHARP_){
return cljs.core.conj.call(null,p1__24177_SHARP_,p2__24178_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__24188);
});
var G__24222__24227 = (function() { 
var G__24229__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__24179_SHARP_,p2__24180_SHARP_){
return cljs.core.conj.call(null,p1__24179_SHARP_,cljs.core.apply.call(null,p2__24180_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__24188);
};
var G__24229 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__24229__delegate.call(this, x, y, z, args);
};
G__24229.cljs$lang$maxFixedArity = 3;
G__24229.cljs$lang$applyTo = (function (arglist__24230){
var x = cljs.core.first(arglist__24230);
var y = cljs.core.first(cljs.core.next(arglist__24230));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__24230)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__24230)));
return G__24229__delegate.call(this, x, y, z, args);
});
return G__24229;
})()
;
G__24222 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__24222__24223.call(this);
case  1 :
return G__24222__24224.call(this,x);
case  2 :
return G__24222__24225.call(this,x,y);
case  3 :
return G__24222__24226.call(this,x,y,z);
default:
return G__24222__24227.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__24222.cljs$lang$maxFixedArity = 3;
G__24222.cljs$lang$applyTo = G__24222__24227.cljs$lang$applyTo;
return G__24222;
})()
};
var G__24221 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__24221__delegate.call(this, f, g, h, fs);
};
G__24221.cljs$lang$maxFixedArity = 3;
G__24221.cljs$lang$applyTo = (function (arglist__24231){
var f = cljs.core.first(arglist__24231);
var g = cljs.core.first(cljs.core.next(arglist__24231));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__24231)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__24231)));
return G__24221__delegate.call(this, f, g, h, fs);
});
return G__24221;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__24189.call(this,f);
case  2 :
return juxt__24190.call(this,f,g);
case  3 :
return juxt__24191.call(this,f,g,h);
default:
return juxt__24192.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__24192.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__24233 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__24236 = cljs.core.next.call(null,coll);
coll = G__24236;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__24234 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____24232 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____24232))
{return (n > 0);
} else
{return and__3546__auto____24232;
}
})()))
{{
var G__24237 = (n - 1);
var G__24238 = cljs.core.next.call(null,coll);
n = G__24237;
coll = G__24238;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__24233.call(this,n);
case  2 :
return dorun__24234.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__24239 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__24240 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__24239.call(this,n);
case  2 :
return doall__24240.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__24242 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__24242),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__24242),1)))
{return cljs.core.first.call(null,matches__24242);
} else
{return cljs.core.vec.call(null,matches__24242);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__24243 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__24243)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__24243),1)))
{return cljs.core.first.call(null,matches__24243);
} else
{return cljs.core.vec.call(null,matches__24243);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__24244 = cljs.core.re_find.call(null,re,s);
var match_idx__24245 = s.search(re);
var match_str__24246 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__24244))?cljs.core.first.call(null,match_data__24244):match_data__24244);
var post_match__24247 = cljs.core.subs.call(null,s,(match_idx__24245 + cljs.core.count.call(null,match_str__24246)));

if(cljs.core.truth_(match_data__24244))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__24244,re_seq.call(null,re,post_match__24247));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
return (new RegExp(s));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__24248_SHARP_){
return print_one.call(null,p1__24248_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_((void 0 === obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____24249 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____24249))
{var and__3546__auto____24253 = (function (){var x__445__auto____24250 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____24251 = x__445__auto____24250;

if(cljs.core.truth_(and__3546__auto____24251))
{var and__3546__auto____24252 = x__445__auto____24250.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____24252))
{return cljs.core.not.call(null,x__445__auto____24250.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____24252;
}
} else
{return and__3546__auto____24251;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____24250);
}
})();

if(cljs.core.truth_(and__3546__auto____24253))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____24253;
}
} else
{return and__3546__auto____24249;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____24254 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____24255 = x__445__auto____24254;

if(cljs.core.truth_(and__3546__auto____24255))
{var and__3546__auto____24256 = x__445__auto____24254.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____24256))
{return cljs.core.not.call(null,x__445__auto____24254.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____24256;
}
} else
{return and__3546__auto____24255;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____24254);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__24257 = cljs.core.first.call(null,objs);
var sb__24258 = (new goog.string.StringBuffer());

var G__24259__24260 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__24259__24260))
{var obj__24261 = cljs.core.first.call(null,G__24259__24260);
var G__24259__24262 = G__24259__24260;

while(true){
if(cljs.core.truth_((obj__24261 === first_obj__24257)))
{} else
{sb__24258.append(" ");
}
var G__24263__24264 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__24261,opts));

if(cljs.core.truth_(G__24263__24264))
{var string__24265 = cljs.core.first.call(null,G__24263__24264);
var G__24263__24266 = G__24263__24264;

while(true){
sb__24258.append(string__24265);
var temp__3698__auto____24267 = cljs.core.next.call(null,G__24263__24266);

if(cljs.core.truth_(temp__3698__auto____24267))
{var G__24263__24268 = temp__3698__auto____24267;

{
var G__24271 = cljs.core.first.call(null,G__24263__24268);
var G__24272 = G__24263__24268;
string__24265 = G__24271;
G__24263__24266 = G__24272;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____24269 = cljs.core.next.call(null,G__24259__24262);

if(cljs.core.truth_(temp__3698__auto____24269))
{var G__24259__24270 = temp__3698__auto____24269;

{
var G__24273 = cljs.core.first.call(null,G__24259__24270);
var G__24274 = G__24259__24270;
obj__24261 = G__24273;
G__24259__24262 = G__24274;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__24258);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__24275 = cljs.core.first.call(null,objs);

var G__24276__24277 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__24276__24277))
{var obj__24278 = cljs.core.first.call(null,G__24276__24277);
var G__24276__24279 = G__24276__24277;

while(true){
if(cljs.core.truth_((obj__24278 === first_obj__24275)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__24280__24281 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__24278,opts));

if(cljs.core.truth_(G__24280__24281))
{var string__24282 = cljs.core.first.call(null,G__24280__24281);
var G__24280__24283 = G__24280__24281;

while(true){
cljs.core.string_print.call(null,string__24282);
var temp__3698__auto____24284 = cljs.core.next.call(null,G__24280__24283);

if(cljs.core.truth_(temp__3698__auto____24284))
{var G__24280__24285 = temp__3698__auto____24284;

{
var G__24288 = cljs.core.first.call(null,G__24280__24285);
var G__24289 = G__24280__24285;
string__24282 = G__24288;
G__24280__24283 = G__24289;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____24286 = cljs.core.next.call(null,G__24276__24279);

if(cljs.core.truth_(temp__3698__auto____24286))
{var G__24276__24287 = temp__3698__auto____24286;

{
var G__24290 = cljs.core.first.call(null,G__24276__24287);
var G__24291 = G__24276__24287;
obj__24278 = G__24290;
G__24276__24279 = G__24291;
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
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"﷐'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["﷐'flush-on-newline","﷐'readably","﷐'meta","﷐'dup"],{"﷐'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"﷐'readably":cljs.core._STAR_print_readably_STAR_,"﷐'meta":cljs.core._STAR_print_meta_STAR_,"﷐'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__24292){
var objs = cljs.core.seq( arglist__24292 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__24293){
var objs = cljs.core.seq( arglist__24293 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__24294){
var objs = cljs.core.seq( arglist__24294 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__24295){
var objs = cljs.core.seq( arglist__24295 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__24296){
var objs = cljs.core.seq( arglist__24296 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__24297 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__24297,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____24298 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____24298))
{var nspc__24299 = temp__3698__auto____24298;

return cljs.core.str.call(null,nspc__24299,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____24300 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____24300))
{var nspc__24301 = temp__3698__auto____24300;

return cljs.core.str.call(null,nspc__24301,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("﷐'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__24302 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__24302,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
})
cljs.core.Atom.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash = (function (this$){
var this__24303 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__24304 = this;
var G__24305__24306 = cljs.core.seq.call(null,this__24304.watches);

if(cljs.core.truth_(G__24305__24306))
{var G__24308__24310 = cljs.core.first.call(null,G__24305__24306);
var vec__24309__24311 = G__24308__24310;
var key__24312 = cljs.core.nth.call(null,vec__24309__24311,0,null);
var f__24313 = cljs.core.nth.call(null,vec__24309__24311,1,null);
var G__24305__24314 = G__24305__24306;

var G__24308__24315 = G__24308__24310;
var G__24305__24316 = G__24305__24314;

while(true){
var vec__24317__24318 = G__24308__24315;
var key__24319 = cljs.core.nth.call(null,vec__24317__24318,0,null);
var f__24320 = cljs.core.nth.call(null,vec__24317__24318,1,null);
var G__24305__24321 = G__24305__24316;

f__24320.call(null,key__24319,this$,oldval,newval);
var temp__3698__auto____24322 = cljs.core.next.call(null,G__24305__24321);

if(cljs.core.truth_(temp__3698__auto____24322))
{var G__24305__24323 = temp__3698__auto____24322;

{
var G__24330 = cljs.core.first.call(null,G__24305__24323);
var G__24331 = G__24305__24323;
G__24308__24315 = G__24330;
G__24305__24316 = G__24331;
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
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch = (function (this$,key,f){
var this__24324 = this;
return this$.watches = cljs.core.assoc.call(null,this__24324.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__24325 = this;
return this$.watches = cljs.core.dissoc.call(null,this__24325.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__24326 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__24326.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__24327 = this;
return this__24327.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__24328 = this;
return this__24328.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__24329 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__24338 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__24339 = (function() { 
var G__24341__delegate = function (x,p__24332){
var map__24333__24334 = p__24332;
var map__24333__24335 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__24333__24334))?cljs.core.apply.call(null,cljs.core.hash_map,map__24333__24334):map__24333__24334);
var validator__24336 = cljs.core.get.call(null,map__24333__24335,"﷐'validator");
var meta__24337 = cljs.core.get.call(null,map__24333__24335,"﷐'meta");

return (new cljs.core.Atom(x,meta__24337,validator__24336,null));
};
var G__24341 = function (x,var_args){
var p__24332 = null;
if (goog.isDef(var_args)) {
  p__24332 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__24341__delegate.call(this, x, p__24332);
};
G__24341.cljs$lang$maxFixedArity = 1;
G__24341.cljs$lang$applyTo = (function (arglist__24342){
var x = cljs.core.first(arglist__24342);
var p__24332 = cljs.core.rest(arglist__24342);
return G__24341__delegate.call(this, x, p__24332);
});
return G__24341;
})()
;
atom = function(x,var_args){
var p__24332 = var_args;
switch(arguments.length){
case  1 :
return atom__24338.call(this,x);
default:
return atom__24339.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__24339.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____24343 = a.validator;

if(cljs.core.truth_(temp__3698__auto____24343))
{var validate__24344 = temp__3698__auto____24343;

if(cljs.core.truth_(validate__24344.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__24345 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__24345,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___24346 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___24347 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___24348 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___24349 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___24350 = (function() { 
var G__24352__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__24352 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__24352__delegate.call(this, a, f, x, y, z, more);
};
G__24352.cljs$lang$maxFixedArity = 5;
G__24352.cljs$lang$applyTo = (function (arglist__24353){
var a = cljs.core.first(arglist__24353);
var f = cljs.core.first(cljs.core.next(arglist__24353));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__24353)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__24353))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__24353)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__24353)))));
return G__24352__delegate.call(this, a, f, x, y, z, more);
});
return G__24352;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___24346.call(this,a,f);
case  3 :
return swap_BANG___24347.call(this,a,f,x);
case  4 :
return swap_BANG___24348.call(this,a,f,x,y);
case  5 :
return swap_BANG___24349.call(this,a,f,x,y,z);
default:
return swap_BANG___24350.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___24350.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__24354){
var iref = cljs.core.first(arglist__24354);
var f = cljs.core.first(cljs.core.next(arglist__24354));
var args = cljs.core.rest(cljs.core.next(arglist__24354));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__24355 = (function (){
return gensym.call(null,"G__");
});
var gensym__24356 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__24355.call(this);
case  1 :
return gensym__24356.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__24358 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__24358.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__24359 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__24359.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__24359.state,this__24359.f);
}
return cljs.core.deref.call(null,this__24359.state);
});
cljs.core.Delay;
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__24360){
var body = cljs.core.seq( arglist__24360 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__24361__24362 = options;
var map__24361__24363 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__24361__24362))?cljs.core.apply.call(null,cljs.core.hash_map,map__24361__24362):map__24361__24362);
var keywordize_keys__24364 = cljs.core.get.call(null,map__24361__24363,"﷐'keywordize-keys");
var keyfn__24365 = (cljs.core.truth_(keywordize_keys__24364)?cljs.core.keyword:cljs.core.str);
var f__24371 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____24370 = (function iter__24366(s__24367){
return (new cljs.core.LazySeq(null,false,(function (){
var s__24367__24368 = s__24367;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__24367__24368)))
{var k__24369 = cljs.core.first.call(null,s__24367__24368);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__24365.call(null,k__24369),thisfn.call(null,(x[k__24369]))]),iter__24366.call(null,cljs.core.rest.call(null,s__24367__24368)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____24370.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__24371.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__24372){
var x = cljs.core.first(arglist__24372);
var options = cljs.core.rest(arglist__24372);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__24373 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__24377__delegate = function (args){
var temp__3695__auto____24374 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__24373),args);

if(cljs.core.truth_(temp__3695__auto____24374))
{var v__24375 = temp__3695__auto____24374;

return v__24375;
} else
{var ret__24376 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__24373,cljs.core.assoc,args,ret__24376);
return ret__24376;
}
};
var G__24377 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__24377__delegate.call(this, args);
};
G__24377.cljs$lang$maxFixedArity = 0;
G__24377.cljs$lang$applyTo = (function (arglist__24378){
var args = cljs.core.seq( arglist__24378 );;
return G__24377__delegate.call(this, args);
});
return G__24377;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__24380 = (function (f){
while(true){
var ret__24379 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__24379)))
{{
var G__24383 = ret__24379;
f = G__24383;
continue;
}
} else
{return ret__24379;
}
break;
}
});
var trampoline__24381 = (function() { 
var G__24384__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__24384 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__24384__delegate.call(this, f, args);
};
G__24384.cljs$lang$maxFixedArity = 1;
G__24384.cljs$lang$applyTo = (function (arglist__24385){
var f = cljs.core.first(arglist__24385);
var args = cljs.core.rest(arglist__24385);
return G__24384__delegate.call(this, f, args);
});
return G__24384;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__24380.call(this,f);
default:
return trampoline__24381.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__24381.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__24386 = (function (){
return rand.call(null,1);
});
var rand__24387 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__24386.call(this);
case  1 :
return rand__24387.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__24389 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__24389,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__24389,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'descendants","﷐'ancestors"],{"﷐'parents":cljs.core.ObjMap.fromObject([],{}),"﷐'descendants":cljs.core.ObjMap.fromObject([],{}),"﷐'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___24398 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___24399 = (function (h,child,parent){
var or__3548__auto____24390 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____24390))
{return or__3548__auto____24390;
} else
{var or__3548__auto____24391 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____24391))
{return or__3548__auto____24391;
} else
{var and__3546__auto____24392 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____24392))
{var and__3546__auto____24393 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____24393))
{var and__3546__auto____24394 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____24394))
{var ret__24395 = true;
var i__24396 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____24397 = cljs.core.not.call(null,ret__24395);

if(cljs.core.truth_(or__3548__auto____24397))
{return or__3548__auto____24397;
} else
{return cljs.core._EQ_.call(null,i__24396,cljs.core.count.call(null,parent));
}
})()))
{return ret__24395;
} else
{{
var G__24401 = isa_QMARK_.call(null,h,child.call(null,i__24396),parent.call(null,i__24396));
var G__24402 = (i__24396 + 1);
ret__24395 = G__24401;
i__24396 = G__24402;
continue;
}
}
break;
}
} else
{return and__3546__auto____24394;
}
} else
{return and__3546__auto____24393;
}
} else
{return and__3546__auto____24392;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___24398.call(this,h,child);
case  3 :
return isa_QMARK___24399.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__24403 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__24404 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__24403.call(this,h);
case  2 :
return parents__24404.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__24406 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__24407 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__24406.call(this,h);
case  2 :
return ancestors__24407.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__24409 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__24410 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__24409.call(this,h);
case  2 :
return descendants__24410.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__24420 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__24421 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__24415 = "﷐'parents".call(null,h);
var td__24416 = "﷐'descendants".call(null,h);
var ta__24417 = "﷐'ancestors".call(null,h);
var tf__24418 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____24419 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__24415.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__24417.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__24417.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__24415,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__24418.call(null,"﷐'ancestors".call(null,h),tag,td__24416,parent,ta__24417),"﷐'descendants":tf__24418.call(null,"﷐'descendants".call(null,h),parent,ta__24417,tag,td__24416)});
})());

if(cljs.core.truth_(or__3548__auto____24419))
{return or__3548__auto____24419;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__24420.call(this,h,tag);
case  3 :
return derive__24421.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__24427 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__24428 = (function (h,tag,parent){
var parentMap__24423 = "﷐'parents".call(null,h);
var childsParents__24424 = (cljs.core.truth_(parentMap__24423.call(null,tag))?cljs.core.disj.call(null,parentMap__24423.call(null,tag),parent):cljs.core.set([]));
var newParents__24425 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__24424))?cljs.core.assoc.call(null,parentMap__24423,tag,childsParents__24424):cljs.core.dissoc.call(null,parentMap__24423,tag));
var deriv_seq__24426 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__24412_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__24412_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__24412_SHARP_),cljs.core.second.call(null,p1__24412_SHARP_)));
}),cljs.core.seq.call(null,newParents__24425)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__24423.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__24413_SHARP_,p2__24414_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__24413_SHARP_,p2__24414_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__24426));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__24427.call(this,h,tag);
case  3 :
return underive__24428.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__24430 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____24432 = (cljs.core.truth_((function (){var and__3546__auto____24431 = xprefs__24430;

if(cljs.core.truth_(and__3546__auto____24431))
{return xprefs__24430.call(null,y);
} else
{return and__3546__auto____24431;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____24432))
{return or__3548__auto____24432;
} else
{var or__3548__auto____24434 = (function (){var ps__24433 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__24433) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__24433),prefer_table)))
{} else
{}
{
var G__24437 = cljs.core.rest.call(null,ps__24433);
ps__24433 = G__24437;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____24434))
{return or__3548__auto____24434;
} else
{var or__3548__auto____24436 = (function (){var ps__24435 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__24435) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__24435),y,prefer_table)))
{} else
{}
{
var G__24438 = cljs.core.rest.call(null,ps__24435);
ps__24435 = G__24438;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____24436))
{return or__3548__auto____24436;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____24439 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____24439))
{return or__3548__auto____24439;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__24448 = cljs.core.reduce.call(null,(function (be,p__24440){
var vec__24441__24442 = p__24440;
var k__24443 = cljs.core.nth.call(null,vec__24441__24442,0,null);
var ___24444 = cljs.core.nth.call(null,vec__24441__24442,1,null);
var e__24445 = vec__24441__24442;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__24443)))
{var be2__24447 = (cljs.core.truth_((function (){var or__3548__auto____24446 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____24446))
{return or__3548__auto____24446;
} else
{return cljs.core.dominates.call(null,k__24443,cljs.core.first.call(null,be),prefer_table);
}
})())?e__24445:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__24447),k__24443,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__24443," and ",cljs.core.first.call(null,be2__24447),", and neither is preferred")));
}
return be2__24447;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__24448))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__24448));
return cljs.core.second.call(null,best_entry__24448);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3546__auto____24449 = mf;

if(cljs.core.truth_(and__3546__auto____24449))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____24449;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____24450 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____24450))
{return or__3548__auto____24450;
} else
{var or__3548__auto____24451 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____24451))
{return or__3548__auto____24451;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____24452 = mf;

if(cljs.core.truth_(and__3546__auto____24452))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____24452;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____24453 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____24453))
{return or__3548__auto____24453;
} else
{var or__3548__auto____24454 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____24454))
{return or__3548__auto____24454;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____24455 = mf;

if(cljs.core.truth_(and__3546__auto____24455))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____24455;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____24456 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____24456))
{return or__3548__auto____24456;
} else
{var or__3548__auto____24457 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____24457))
{return or__3548__auto____24457;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____24458 = mf;

if(cljs.core.truth_(and__3546__auto____24458))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____24458;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____24459 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____24459))
{return or__3548__auto____24459;
} else
{var or__3548__auto____24460 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____24460))
{return or__3548__auto____24460;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____24461 = mf;

if(cljs.core.truth_(and__3546__auto____24461))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____24461;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____24462 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____24462))
{return or__3548__auto____24462;
} else
{var or__3548__auto____24463 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____24463))
{return or__3548__auto____24463;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____24464 = mf;

if(cljs.core.truth_(and__3546__auto____24464))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____24464;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____24465 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____24465))
{return or__3548__auto____24465;
} else
{var or__3548__auto____24466 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____24466))
{return or__3548__auto____24466;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____24467 = mf;

if(cljs.core.truth_(and__3546__auto____24467))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____24467;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____24468 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____24468))
{return or__3548__auto____24468;
} else
{var or__3548__auto____24469 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____24469))
{return or__3548__auto____24469;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____24470 = mf;

if(cljs.core.truth_(and__3546__auto____24470))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____24470;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____24471 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____24471))
{return or__3548__auto____24471;
} else
{var or__3548__auto____24472 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____24472))
{return or__3548__auto____24472;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__24473 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__24474 = cljs.core._get_method.call(null,mf,dispatch_val__24473);

if(cljs.core.truth_(target_fn__24474))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__24473)));
}
return cljs.core.apply.call(null,target_fn__24474,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash = (function (this$){
var this__24475 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__24476 = this;
cljs.core.swap_BANG_.call(null,this__24476.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__24476.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__24476.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__24476.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__24477 = this;
cljs.core.swap_BANG_.call(null,this__24477.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__24477.method_cache,this__24477.method_table,this__24477.cached_hierarchy,this__24477.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__24478 = this;
cljs.core.swap_BANG_.call(null,this__24478.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__24478.method_cache,this__24478.method_table,this__24478.cached_hierarchy,this__24478.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__24479 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__24479.cached_hierarchy),cljs.core.deref.call(null,this__24479.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__24479.method_cache,this__24479.method_table,this__24479.cached_hierarchy,this__24479.hierarchy);
}
var temp__3695__auto____24480 = cljs.core.deref.call(null,this__24479.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____24480))
{var target_fn__24481 = temp__3695__auto____24480;

return target_fn__24481;
} else
{var temp__3695__auto____24482 = cljs.core.find_and_cache_best_method.call(null,this__24479.name,dispatch_val,this__24479.hierarchy,this__24479.method_table,this__24479.prefer_table,this__24479.method_cache,this__24479.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____24482))
{var target_fn__24483 = temp__3695__auto____24482;

return target_fn__24483;
} else
{return cljs.core.deref.call(null,this__24479.method_table).call(null,this__24479.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__24484 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__24484.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__24484.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__24484.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__24484.method_cache,this__24484.method_table,this__24484.cached_hierarchy,this__24484.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__24485 = this;
return cljs.core.deref.call(null,this__24485.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__24486 = this;
return cljs.core.deref.call(null,this__24486.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__24487 = this;
return cljs.core.do_dispatch.call(null,mf,this__24487.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__24488__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__24488 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__24488__delegate.call(this, _, args);
};
G__24488.cljs$lang$maxFixedArity = 1;
G__24488.cljs$lang$applyTo = (function (arglist__24489){
var _ = cljs.core.first(arglist__24489);
var args = cljs.core.rest(arglist__24489);
return G__24488__delegate.call(this, _, args);
});
return G__24488;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
return cljs.core._dispatch.call(null,this,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
