"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=u(function(h,n){
var c=require('@stdlib/blas-ext-base-dapxsumkbn/dist').ndarray;function y(e,r,i,a,m){return c(e,r,i,a,m)}n.exports=y
});var d=u(function(w,v){
var f=require('@stdlib/strided-base-stride2offset/dist'),j=s();function l(e,r,i,a){return j(e,r,i,a,f(e,a))}v.exports=l
});var p=u(function(z,o){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=d(),_=s();R(q,"ndarray",_);o.exports=q
});var b=require("path").join,k=require('@stdlib/utils-try-require/dist'),E=require('@stdlib/assert-is-error/dist'),O=p(),t,x=k(b(__dirname,"./native.js"));E(x)?t=O:t=x;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
