"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=i(function(g,t){
var c=require('@stdlib/blas-ext-base-dapxsumkbn/dist');function y(e,r,a,u){return c(e,r,a,u)}t.exports=y
});var d=i(function(h,v){
var f=require('@stdlib/blas-ext-base-dapxsumkbn/dist').ndarray;function j(e,r,a,u,o){return f(e,r,a,u,o)}v.exports=j
});var x=i(function(w,q){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=n(),k=d();b(p,"ndarray",k);q.exports=p
});var l=require("path").join,R=require('@stdlib/utils-try-require/dist'),_=require('@stdlib/assert-is-error/dist'),E=x(),s,m=R(l(__dirname,"./native.js"));_(m)?s=E:s=m;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
