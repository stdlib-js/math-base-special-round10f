"use strict";var o=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var s=o(function(m,t){
var q=require('@stdlib/math-base-assert-is-nanf/dist'),c=require('@stdlib/math-base-assert-is-infinitef/dist'),p=require('@stdlib/math-base-special-floorf/dist'),n=require('@stdlib/math-base-special-pow/dist'),l=require('@stdlib/math-base-special-absf/dist'),y=require('@stdlib/math-base-special-log10f/dist'),i=require('@stdlib/number-float64-base-to-float32/dist');function b(r){var e,a,f,u,v;return r=i(r),q(r)||c(r)||r===0?r:(e=l(r),a=p(y(e)),f=i(a+1),u=i(n(10,a)),v=i(n(10,f)),e-u<v-e?r<0?i(-u):u:r<0?i(-v):v)}t.exports=b
});var d=s();module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
