"use strict";var u=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var s=u(function(h,n){
var c=require('@stdlib/blas-ext-base-dapxsumkbn/dist').ndarray;function y(e,r,a,i,m){return c(e,r,a,i,m)}n.exports=y
});var d=u(function(w,v){
var f=require('@stdlib/strided-base-stride2offset/dist'),j=s();function l(e,r,a,i){return j(e,r,a,i,f(e,i))}v.exports=l
});var p=u(function(z,o){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=d(),_=s();R(q,"ndarray",_);o.exports=q
});var b=require("path").join,k=require('@stdlib/utils-try-require/dist'),E=require('@stdlib/assert-is-error/dist'),O=p(),t,x=k(b(__dirname,"./native.js"));E(x)?t=O:t=x;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
