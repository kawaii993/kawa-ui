const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox.Cpbqfjal.js","assets/chunks/framework.C2culRTN.js"])))=>i.map(i=>d[i]);
import{d as v,c as k,w as J,h as ra,o as r,a as L,b as y,n as fa,g as ma,u as m,m as O2,e as n6,i as j2,r as B,f as w,j as M,k as z,l as Q2,p as x,q as $,s as k2,t as k1,v as za,x as e3,y as u,z as a2,A as H,B as La,C as ua,D as o6,T as e1,_ as A,E as pa,F as Ma,G as da,H as D3,I as g2,J as q,K as G,L as _2,M as p3,N as S1,O as I3,P as t6,Q as Ca,R as ha,S as x2,U as I,V as X,W as i6,X as w1,Y as r6,Z as _1,$ as ga,a0 as M3,a1 as xa,a2 as f6,a3 as A1,a4 as va,a5 as ba,a6 as Na,a7 as m6,a8 as ya,a9 as ka,aa as Sa}from"./framework.C2culRTN.js";var z6=typeof global=="object"&&global&&global.Object===Object&&global,wa=typeof self=="object"&&self&&self.Object===Object&&self,c2=z6||wa||Function("return this")(),n2=c2.Symbol,L6=Object.prototype,_a=L6.hasOwnProperty,Aa=L6.toString,G2=n2?n2.toStringTag:void 0;function Pa(c){var l=_a.call(c,G2),s=c[G2];try{c[G2]=void 0;var e=!0}catch{}var a=Aa.call(c);return e&&(l?c[G2]=s:delete c[G2]),a}var Ta=Object.prototype,$a=Ta.toString;function Ba(c){return $a.call(c)}var Fa="[object Null]",Ha="[object Undefined]",s0=n2?n2.toStringTag:void 0;function $2(c){return c==null?c===void 0?Ha:Fa:s0&&s0 in Object(c)?Pa(c):Ba(c)}function B2(c){return c!=null&&typeof c=="object"}var Ea="[object Symbol]";function P1(c){return typeof c=="symbol"||B2(c)&&$2(c)==Ea}function u6(c,l){for(var s=-1,e=c==null?0:c.length,a=Array(e);++s<e;)a[s]=l(c[s],s,c);return a}var v2=Array.isArray,Oa=1/0,e0=n2?n2.prototype:void 0,a0=e0?e0.toString:void 0;function p6(c){if(typeof c=="string")return c;if(v2(c))return u6(c,p6)+"";if(P1(c))return a0?a0.call(c):"";var l=c+"";return l=="0"&&1/c==-Oa?"-0":l}var Da=/\s/;function Ia(c){for(var l=c.length;l--&&Da.test(c.charAt(l)););return l}var Va=/^\s+/;function Ra(c){return c&&c.slice(0,Ia(c)+1).replace(Va,"")}function M2(c){var l=typeof c;return c!=null&&(l=="object"||l=="function")}var n0=NaN,ja=/^[-+]0x[0-9a-f]+$/i,Ua=/^0b[01]+$/i,qa=/^0o[0-7]+$/i,Ga=parseInt;function o0(c){if(typeof c=="number")return c;if(P1(c))return n0;if(M2(c)){var l=typeof c.valueOf=="function"?c.valueOf():c;c=M2(l)?l+"":l}if(typeof c!="string")return c===0?c:+c;c=Ra(c);var s=Ua.test(c);return s||qa.test(c)?Ga(c.slice(2),s?2:8):ja.test(c)?n0:+c}function M6(c){return c}var Wa="[object AsyncFunction]",Xa="[object Function]",Ya="[object GeneratorFunction]",Ka="[object Proxy]";function d6(c){if(!M2(c))return!1;var l=$2(c);return l==Xa||l==Ya||l==Wa||l==Ka}var a3=c2["__core-js_shared__"],t0=function(){var c=/[^.]+$/.exec(a3&&a3.keys&&a3.keys.IE_PROTO||"");return c?"Symbol(src)_1."+c:""}();function Za(c){return!!t0&&t0 in c}var Qa=Function.prototype,Ja=Qa.toString;function F2(c){if(c!=null){try{return Ja.call(c)}catch{}try{return c+""}catch{}}return""}var cn=/[\\^$.*+?()[\]{}|]/g,ln=/^\[object .+?Constructor\]$/,sn=Function.prototype,en=Object.prototype,an=sn.toString,nn=en.hasOwnProperty,on=RegExp("^"+an.call(nn).replace(cn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function tn(c){if(!M2(c)||Za(c))return!1;var l=d6(c)?on:ln;return l.test(F2(c))}function rn(c,l){return c==null?void 0:c[l]}function H2(c,l){var s=rn(c,l);return tn(s)?s:void 0}var d3=H2(c2,"WeakMap");function fn(c,l,s){switch(s.length){case 0:return c.call(l);case 1:return c.call(l,s[0]);case 2:return c.call(l,s[0],s[1]);case 3:return c.call(l,s[0],s[1],s[2])}return c.apply(l,s)}var mn=800,zn=16,Ln=Date.now;function un(c){var l=0,s=0;return function(){var e=Ln(),a=zn-(e-s);if(s=e,a>0){if(++l>=mn)return arguments[0]}else l=0;return c.apply(void 0,arguments)}}function pn(c){return function(){return c}}var g1=function(){try{var c=H2(Object,"defineProperty");return c({},"",{}),c}catch{}}(),Mn=g1?function(c,l){return g1(c,"toString",{configurable:!0,enumerable:!1,value:pn(l),writable:!0})}:M6,dn=un(Mn);function C6(c,l){for(var s=-1,e=c==null?0:c.length;++s<e&&l(c[s],s,c)!==!1;);return c}var Cn=9007199254740991,hn=/^(?:0|[1-9]\d*)$/;function gn(c,l){var s=typeof c;return l=l??Cn,!!l&&(s=="number"||s!="symbol"&&hn.test(c))&&c>-1&&c%1==0&&c<l}function h6(c,l,s){l=="__proto__"&&g1?g1(c,l,{configurable:!0,enumerable:!0,value:s,writable:!0}):c[l]=s}function g6(c,l){return c===l||c!==c&&l!==l}var xn=Object.prototype,vn=xn.hasOwnProperty;function x6(c,l,s){var e=c[l];(!(vn.call(c,l)&&g6(e,s))||s===void 0&&!(l in c))&&h6(c,l,s)}function bn(c,l,s,e){var a=!s;s||(s={});for(var n=-1,o=l.length;++n<o;){var t=l[n],i=void 0;i===void 0&&(i=c[t]),a?h6(s,t,i):x6(s,t,i)}return s}var i0=Math.max;function Nn(c,l,s){return l=i0(l===void 0?c.length-1:l,0),function(){for(var e=arguments,a=-1,n=i0(e.length-l,0),o=Array(n);++a<n;)o[a]=e[l+a];a=-1;for(var t=Array(l+1);++a<l;)t[a]=e[a];return t[l]=s(o),fn(c,this,t)}}var yn=9007199254740991;function v6(c){return typeof c=="number"&&c>-1&&c%1==0&&c<=yn}function V3(c){return c!=null&&v6(c.length)&&!d6(c)}var kn=Object.prototype;function b6(c){var l=c&&c.constructor,s=typeof l=="function"&&l.prototype||kn;return c===s}function Sn(c,l){for(var s=-1,e=Array(c);++s<c;)e[s]=l(s);return e}var wn="[object Arguments]";function r0(c){return B2(c)&&$2(c)==wn}var N6=Object.prototype,_n=N6.hasOwnProperty,An=N6.propertyIsEnumerable,y6=r0(function(){return arguments}())?r0:function(c){return B2(c)&&_n.call(c,"callee")&&!An.call(c,"callee")};function Pn(){return!1}var k6=typeof exports=="object"&&exports&&!exports.nodeType&&exports,f0=k6&&typeof module=="object"&&module&&!module.nodeType&&module,Tn=f0&&f0.exports===k6,m0=Tn?c2.Buffer:void 0,$n=m0?m0.isBuffer:void 0,S6=$n||Pn,Bn="[object Arguments]",Fn="[object Array]",Hn="[object Boolean]",En="[object Date]",On="[object Error]",Dn="[object Function]",In="[object Map]",Vn="[object Number]",Rn="[object Object]",jn="[object RegExp]",Un="[object Set]",qn="[object String]",Gn="[object WeakMap]",Wn="[object ArrayBuffer]",Xn="[object DataView]",Yn="[object Float32Array]",Kn="[object Float64Array]",Zn="[object Int8Array]",Qn="[object Int16Array]",Jn="[object Int32Array]",co="[object Uint8Array]",lo="[object Uint8ClampedArray]",so="[object Uint16Array]",eo="[object Uint32Array]",O={};O[Yn]=O[Kn]=O[Zn]=O[Qn]=O[Jn]=O[co]=O[lo]=O[so]=O[eo]=!0;O[Bn]=O[Fn]=O[Wn]=O[Hn]=O[Xn]=O[En]=O[On]=O[Dn]=O[In]=O[Vn]=O[Rn]=O[jn]=O[Un]=O[qn]=O[Gn]=!1;function ao(c){return B2(c)&&v6(c.length)&&!!O[$2(c)]}function R3(c){return function(l){return c(l)}}var w6=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Y2=w6&&typeof module=="object"&&module&&!module.nodeType&&module,no=Y2&&Y2.exports===w6,n3=no&&z6.process,I2=function(){try{var c=Y2&&Y2.require&&Y2.require("util").types;return c||n3&&n3.binding&&n3.binding("util")}catch{}}(),z0=I2&&I2.isTypedArray,oo=z0?R3(z0):ao,to=Object.prototype,io=to.hasOwnProperty;function _6(c,l){var s=v2(c),e=!s&&y6(c),a=!s&&!e&&S6(c),n=!s&&!e&&!a&&oo(c),o=s||e||a||n,t=o?Sn(c.length,String):[],i=t.length;for(var f in c)(l||io.call(c,f))&&!(o&&(f=="length"||a&&(f=="offset"||f=="parent")||n&&(f=="buffer"||f=="byteLength"||f=="byteOffset")||gn(f,i)))&&t.push(f);return t}function A6(c,l){return function(s){return c(l(s))}}var ro=A6(Object.keys,Object),fo=Object.prototype,mo=fo.hasOwnProperty;function zo(c){if(!b6(c))return ro(c);var l=[];for(var s in Object(c))mo.call(c,s)&&s!="constructor"&&l.push(s);return l}function Lo(c){return V3(c)?_6(c):zo(c)}function uo(c){var l=[];if(c!=null)for(var s in Object(c))l.push(s);return l}var po=Object.prototype,Mo=po.hasOwnProperty;function Co(c){if(!M2(c))return uo(c);var l=b6(c),s=[];for(var e in c)e=="constructor"&&(l||!Mo.call(c,e))||s.push(e);return s}function ho(c){return V3(c)?_6(c,!0):Co(c)}var go=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,xo=/^\w*$/;function vo(c,l){if(v2(c))return!1;var s=typeof c;return s=="number"||s=="symbol"||s=="boolean"||c==null||P1(c)?!0:xo.test(c)||!go.test(c)||l!=null&&c in Object(l)}var J2=H2(Object,"create");function bo(){this.__data__=J2?J2(null):{},this.size=0}function No(c){var l=this.has(c)&&delete this.__data__[c];return this.size-=l?1:0,l}var yo="__lodash_hash_undefined__",ko=Object.prototype,So=ko.hasOwnProperty;function wo(c){var l=this.__data__;if(J2){var s=l[c];return s===yo?void 0:s}return So.call(l,c)?l[c]:void 0}var _o=Object.prototype,Ao=_o.hasOwnProperty;function Po(c){var l=this.__data__;return J2?l[c]!==void 0:Ao.call(l,c)}var To="__lodash_hash_undefined__";function $o(c,l){var s=this.__data__;return this.size+=this.has(c)?0:1,s[c]=J2&&l===void 0?To:l,this}function A2(c){var l=-1,s=c==null?0:c.length;for(this.clear();++l<s;){var e=c[l];this.set(e[0],e[1])}}A2.prototype.clear=bo;A2.prototype.delete=No;A2.prototype.get=wo;A2.prototype.has=Po;A2.prototype.set=$o;function Bo(){this.__data__=[],this.size=0}function T1(c,l){for(var s=c.length;s--;)if(g6(c[s][0],l))return s;return-1}var Fo=Array.prototype,Ho=Fo.splice;function Eo(c){var l=this.__data__,s=T1(l,c);if(s<0)return!1;var e=l.length-1;return s==e?l.pop():Ho.call(l,s,1),--this.size,!0}function Oo(c){var l=this.__data__,s=T1(l,c);return s<0?void 0:l[s][1]}function Do(c){return T1(this.__data__,c)>-1}function Io(c,l){var s=this.__data__,e=T1(s,c);return e<0?(++this.size,s.push([c,l])):s[e][1]=l,this}function m2(c){var l=-1,s=c==null?0:c.length;for(this.clear();++l<s;){var e=c[l];this.set(e[0],e[1])}}m2.prototype.clear=Bo;m2.prototype.delete=Eo;m2.prototype.get=Oo;m2.prototype.has=Do;m2.prototype.set=Io;var c1=H2(c2,"Map");function Vo(){this.size=0,this.__data__={hash:new A2,map:new(c1||m2),string:new A2}}function Ro(c){var l=typeof c;return l=="string"||l=="number"||l=="symbol"||l=="boolean"?c!=="__proto__":c===null}function $1(c,l){var s=c.__data__;return Ro(l)?s[typeof l=="string"?"string":"hash"]:s.map}function jo(c){var l=$1(this,c).delete(c);return this.size-=l?1:0,l}function Uo(c){return $1(this,c).get(c)}function qo(c){return $1(this,c).has(c)}function Go(c,l){var s=$1(this,c),e=s.size;return s.set(c,l),this.size+=s.size==e?0:1,this}function b2(c){var l=-1,s=c==null?0:c.length;for(this.clear();++l<s;){var e=c[l];this.set(e[0],e[1])}}b2.prototype.clear=Vo;b2.prototype.delete=jo;b2.prototype.get=Uo;b2.prototype.has=qo;b2.prototype.set=Go;var Wo="Expected a function";function j3(c,l){if(typeof c!="function"||l!=null&&typeof l!="function")throw new TypeError(Wo);var s=function(){var e=arguments,a=l?l.apply(this,e):e[0],n=s.cache;if(n.has(a))return n.get(a);var o=c.apply(this,e);return s.cache=n.set(a,o)||n,o};return s.cache=new(j3.Cache||b2),s}j3.Cache=b2;var Xo=500;function Yo(c){var l=j3(c,function(e){return s.size===Xo&&s.clear(),e}),s=l.cache;return l}var Ko=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Zo=/\\(\\)?/g,Qo=Yo(function(c){var l=[];return c.charCodeAt(0)===46&&l.push(""),c.replace(Ko,function(s,e,a,n){l.push(a?n.replace(Zo,"$1"):e||s)}),l});function Jo(c){return c==null?"":p6(c)}function U3(c,l){return v2(c)?c:vo(c,l)?[c]:Qo(Jo(c))}var ct=1/0;function P6(c){if(typeof c=="string"||P1(c))return c;var l=c+"";return l=="0"&&1/c==-ct?"-0":l}function lt(c,l){l=U3(l,c);for(var s=0,e=l.length;c!=null&&s<e;)c=c[P6(l[s++])];return s&&s==e?c:void 0}function q3(c,l){for(var s=-1,e=l.length,a=c.length;++s<e;)c[a+s]=l[s];return c}var L0=n2?n2.isConcatSpreadable:void 0;function st(c){return v2(c)||y6(c)||!!(L0&&c&&c[L0])}function et(c,l,s,e,a){var n=-1,o=c.length;for(s||(s=st),a||(a=[]);++n<o;){var t=c[n];s(t)?q3(a,t):a[a.length]=t}return a}function at(c){var l=c==null?0:c.length;return l?et(c):[]}function nt(c){return dn(Nn(c,void 0,at),c+"")}var T6=A6(Object.getPrototypeOf,Object),ot="[object Object]",tt=Function.prototype,it=Object.prototype,$6=tt.toString,rt=it.hasOwnProperty,ft=$6.call(Object);function mt(c){if(!B2(c)||$2(c)!=ot)return!1;var l=T6(c);if(l===null)return!0;var s=rt.call(l,"constructor")&&l.constructor;return typeof s=="function"&&s instanceof s&&$6.call(s)==ft}function zt(c,l,s){var e=-1,a=c.length;l<0&&(l=-l>a?0:a+l),s=s>a?a:s,s<0&&(s+=a),a=l>s?0:s-l>>>0,l>>>=0;for(var n=Array(a);++e<a;)n[e]=c[e+l];return n}function Lt(){this.__data__=new m2,this.size=0}function ut(c){var l=this.__data__,s=l.delete(c);return this.size=l.size,s}function pt(c){return this.__data__.get(c)}function Mt(c){return this.__data__.has(c)}var dt=200;function Ct(c,l){var s=this.__data__;if(s instanceof m2){var e=s.__data__;if(!c1||e.length<dt-1)return e.push([c,l]),this.size=++s.size,this;s=this.__data__=new b2(e)}return s.set(c,l),this.size=s.size,this}function U2(c){var l=this.__data__=new m2(c);this.size=l.size}U2.prototype.clear=Lt;U2.prototype.delete=ut;U2.prototype.get=pt;U2.prototype.has=Mt;U2.prototype.set=Ct;var B6=typeof exports=="object"&&exports&&!exports.nodeType&&exports,u0=B6&&typeof module=="object"&&module&&!module.nodeType&&module,ht=u0&&u0.exports===B6,p0=ht?c2.Buffer:void 0;p0&&p0.allocUnsafe;function gt(c,l){return c.slice()}function xt(c,l){for(var s=-1,e=c==null?0:c.length,a=0,n=[];++s<e;){var o=c[s];l(o,s,c)&&(n[a++]=o)}return n}function F6(){return[]}var vt=Object.prototype,bt=vt.propertyIsEnumerable,M0=Object.getOwnPropertySymbols,Nt=M0?function(c){return c==null?[]:(c=Object(c),xt(M0(c),function(l){return bt.call(c,l)}))}:F6,yt=Object.getOwnPropertySymbols,kt=yt?function(c){for(var l=[];c;)q3(l,Nt(c)),c=T6(c);return l}:F6;function St(c,l,s){var e=l(c);return v2(c)?e:q3(e,s(c))}function H6(c){return St(c,ho,kt)}var C3=H2(c2,"DataView"),h3=H2(c2,"Promise"),g3=H2(c2,"Set"),d0="[object Map]",wt="[object Object]",C0="[object Promise]",h0="[object Set]",g0="[object WeakMap]",x0="[object DataView]",_t=F2(C3),At=F2(c1),Pt=F2(h3),Tt=F2(g3),$t=F2(d3),t2=$2;(C3&&t2(new C3(new ArrayBuffer(1)))!=x0||c1&&t2(new c1)!=d0||h3&&t2(h3.resolve())!=C0||g3&&t2(new g3)!=h0||d3&&t2(new d3)!=g0)&&(t2=function(c){var l=$2(c),s=l==wt?c.constructor:void 0,e=s?F2(s):"";if(e)switch(e){case _t:return x0;case At:return d0;case Pt:return C0;case Tt:return h0;case $t:return g0}return l});var Bt=Object.prototype,Ft=Bt.hasOwnProperty;function Ht(c){var l=c.length,s=new c.constructor(l);return l&&typeof c[0]=="string"&&Ft.call(c,"index")&&(s.index=c.index,s.input=c.input),s}var v0=c2.Uint8Array;function G3(c){var l=new c.constructor(c.byteLength);return new v0(l).set(new v0(c)),l}function Et(c,l){var s=G3(c.buffer);return new c.constructor(s,c.byteOffset,c.byteLength)}var Ot=/\w*$/;function Dt(c){var l=new c.constructor(c.source,Ot.exec(c));return l.lastIndex=c.lastIndex,l}var b0=n2?n2.prototype:void 0,N0=b0?b0.valueOf:void 0;function It(c){return N0?Object(N0.call(c)):{}}function Vt(c,l){var s=G3(c.buffer);return new c.constructor(s,c.byteOffset,c.length)}var Rt="[object Boolean]",jt="[object Date]",Ut="[object Map]",qt="[object Number]",Gt="[object RegExp]",Wt="[object Set]",Xt="[object String]",Yt="[object Symbol]",Kt="[object ArrayBuffer]",Zt="[object DataView]",Qt="[object Float32Array]",Jt="[object Float64Array]",ci="[object Int8Array]",li="[object Int16Array]",si="[object Int32Array]",ei="[object Uint8Array]",ai="[object Uint8ClampedArray]",ni="[object Uint16Array]",oi="[object Uint32Array]";function ti(c,l,s){var e=c.constructor;switch(l){case Kt:return G3(c);case Rt:case jt:return new e(+c);case Zt:return Et(c);case Qt:case Jt:case ci:case li:case si:case ei:case ai:case ni:case oi:return Vt(c);case Ut:return new e;case qt:case Xt:return new e(c);case Gt:return Dt(c);case Wt:return new e;case Yt:return It(c)}}var ii="[object Map]";function ri(c){return B2(c)&&t2(c)==ii}var y0=I2&&I2.isMap,fi=y0?R3(y0):ri,mi="[object Set]";function zi(c){return B2(c)&&t2(c)==mi}var k0=I2&&I2.isSet,Li=k0?R3(k0):zi,ui=1,E6="[object Arguments]",pi="[object Array]",Mi="[object Boolean]",di="[object Date]",Ci="[object Error]",O6="[object Function]",hi="[object GeneratorFunction]",gi="[object Map]",xi="[object Number]",D6="[object Object]",vi="[object RegExp]",bi="[object Set]",Ni="[object String]",yi="[object Symbol]",ki="[object WeakMap]",Si="[object ArrayBuffer]",wi="[object DataView]",_i="[object Float32Array]",Ai="[object Float64Array]",Pi="[object Int8Array]",Ti="[object Int16Array]",$i="[object Int32Array]",Bi="[object Uint8Array]",Fi="[object Uint8ClampedArray]",Hi="[object Uint16Array]",Ei="[object Uint32Array]",E={};E[E6]=E[pi]=E[Si]=E[wi]=E[Mi]=E[di]=E[_i]=E[Ai]=E[Pi]=E[Ti]=E[$i]=E[gi]=E[xi]=E[D6]=E[vi]=E[bi]=E[Ni]=E[yi]=E[Bi]=E[Fi]=E[Hi]=E[Ei]=!0;E[Ci]=E[O6]=E[ki]=!1;function M1(c,l,s,e,a,n){var o,t=l&ui;if(s&&(o=a?s(c,e,a,n):s(c)),o!==void 0)return o;if(!M2(c))return c;var i=v2(c);if(i)o=Ht(c);else{var f=t2(c),p=f==O6||f==hi;if(S6(c))return gt(c);if(f==D6||f==E6||p&&!a)o={};else{if(!E[f])return a?c:{};o=ti(c,f)}}n||(n=new U2);var d=n.get(c);if(d)return d;n.set(c,o),Li(c)?c.forEach(function(g){o.add(M1(g,l,s,g,c,n))}):fi(c)&&c.forEach(function(g,P){o.set(P,M1(g,l,s,P,c,n))});var C=H6,S=i?void 0:C(c);return C6(S||c,function(g,P){S&&(P=g,g=c[P]),x6(o,P,M1(g,l,s,P,c,n))}),o}function Oi(c){return function(l,s,e){for(var a=-1,n=Object(l),o=e(l),t=o.length;t--;){var i=o[++a];if(s(n[i],i,n)===!1)break}return l}}var Di=Oi();function Ii(c,l){return c&&Di(c,l,Lo)}function Vi(c,l){return function(s,e){if(s==null)return s;if(!V3(s))return c(s,e);for(var a=s.length,n=-1,o=Object(s);++n<a&&e(o[n],n,o)!==!1;);return s}}var Ri=Vi(Ii),o3=function(){return c2.Date.now()},ji="Expected a function",Ui=Math.max,qi=Math.min;function Gi(c,l,s){var e,a,n,o,t,i,f=0,p=!1,d=!1,C=!0;if(typeof c!="function")throw new TypeError(ji);l=o0(l)||0,M2(s)&&(p=!!s.leading,d="maxWait"in s,n=d?Ui(o0(s.maxWait)||0,l):n,C="trailing"in s?!!s.trailing:C);function S(V){var W=e,N2=a;return e=a=void 0,f=V,o=c.apply(N2,W),o}function g(V){return f=V,t=setTimeout(h,l),p?S(V):o}function P(V){var W=V-i,N2=V-f,l0=l-W;return d?qi(l0,n-N2):l0}function _(V){var W=V-i,N2=V-f;return i===void 0||W>=l||W<0||d&&N2>=n}function h(){var V=o3();if(_(V))return N(V);t=setTimeout(h,P(V))}function N(V){return t=void 0,C&&e?S(V):(e=a=void 0,o)}function F(){t!==void 0&&clearTimeout(t),f=0,e=i=a=t=void 0}function j(){return t===void 0?o:N(o3())}function U(){var V=o3(),W=_(V);if(e=arguments,a=this,i=V,W){if(t===void 0)return g(i);if(d)return clearTimeout(t),t=setTimeout(h,l),S(i)}return t===void 0&&(t=setTimeout(h,l)),o}return U.cancel=F,U.flush=j,U}function Wi(c){var l=c==null?0:c.length;return l?c[l-1]:void 0}function Xi(c){return typeof c=="function"?c:M6}function I6(c,l){var s=v2(c)?C6:Ri;return s(c,Xi(l))}function Yi(c,l){return l.length<2?c:lt(c,zt(l,0,-1))}function Ki(c,l){return l=U3(l,c),c=Yi(c,l),c==null||delete c[P6(Wi(l))]}function Zi(c){return mt(c)?void 0:c}var Qi=1,Ji=2,cr=4,lr=nt(function(c,l){var s={};if(c==null)return s;var e=!1;l=u6(l,function(n){return n=U3(n,c),e||(e=n.length>1),n}),bn(c,H6(c),s),e&&(s=M1(s,Qi|Ji|cr,Zi));for(var a=l.length;a--;)Ki(s,l[a]);return s}),sr="Expected a function";function er(c,l,s){var e=!0,a=!0;if(typeof c!="function")throw new TypeError(sr);return M2(s)&&(e="leading"in s?!!s.leading:e,a="trailing"in s?!!s.trailing:a),Gi(c,l,{leading:e,maxWait:l,trailing:a})}function ar(c){return l=>I6(c,s=>l.use(s))}const a1=c=>(c.install=l=>{const s=c.name;l.component(s,c)},c),S0=()=>{};let W3={},V6={},R6=null,j6={mark:S0,measure:S0};try{typeof window<"u"&&(W3=window),typeof document<"u"&&(V6=document),typeof MutationObserver<"u"&&(R6=MutationObserver),typeof performance<"u"&&(j6=performance)}catch{}const{userAgent:w0=""}=W3.navigator||{},d2=W3,D=V6,_0=R6,L1=j6;d2.document;const z2=!!D.documentElement&&!!D.head&&typeof D.addEventListener=="function"&&typeof D.createElement=="function",U6=~w0.indexOf("MSIE")||~w0.indexOf("Trident/");var R="classic",q6="duotone",K="sharp",Z="sharp-duotone",nr=[R,q6,K,Z],or={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},A0={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},tr=["kit"],ir=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,rr=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,fr={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},mr={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},zr={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},Lr={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},ur={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},pr={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},G6={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},Mr=["solid","regular","light","thin","duotone","brands"],W6=[1,2,3,4,5,6,7,8,9,10],dr=W6.concat([11,12,13,14,15,16,17,18,19,20]),W2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Cr=[...Object.keys(Lr),...Mr,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",W2.GROUP,W2.SWAP_OPACITY,W2.PRIMARY,W2.SECONDARY].concat(W6.map(c=>"".concat(c,"x"))).concat(dr.map(c=>"w-".concat(c))),hr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},gr={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},xr={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},P0={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const r2="___FONT_AWESOME___",x3=16,X6="fa",Y6="svg-inline--fa",P2="data-fa-i2svg",v3="data-fa-pseudo-element",vr="data-fa-pseudo-element-pending",X3="data-prefix",Y3="data-icon",T0="fontawesome-i2svg",br="async",Nr=["HTML","HEAD","STYLE","SCRIPT"],K6=(()=>{try{return!0}catch{return!1}})(),Z6=[R,K,Z];function n1(c){return new Proxy(c,{get(l,s){return s in l?l[s]:l[R]}})}const Q6={...G6};Q6[R]={...G6[R],...A0.kit,...A0["kit-duotone"]};const S2=n1(Q6),b3={...pr};b3[R]={...b3[R],...P0.kit,...P0["kit-duotone"]};const l1=n1(b3),N3={...ur};N3[R]={...N3[R],...xr.kit};const w2=n1(N3),y3={...zr};y3[R]={...y3[R],...gr.kit};const yr=n1(y3),kr=ir,J6="fa-layers-text",Sr=rr,wr={...or};n1(wr);const _r=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],t3=W2,V2=new Set;Object.keys(l1[R]).map(V2.add.bind(V2));Object.keys(l1[K]).map(V2.add.bind(V2));Object.keys(l1[Z]).map(V2.add.bind(V2));const Ar=[...tr,...Cr],K2=d2.FontAwesomeConfig||{};function Pr(c){var l=D.querySelector("script["+c+"]");if(l)return l.getAttribute(c)}function Tr(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}D&&typeof D.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(l=>{let[s,e]=l;const a=Tr(Pr(s));a!=null&&(K2[e]=a)});const c8={styleDefault:"solid",familyDefault:"classic",cssPrefix:X6,replacementClass:Y6,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};K2.familyPrefix&&(K2.cssPrefix=K2.familyPrefix);const R2={...c8,...K2};R2.autoReplaceSvg||(R2.observeMutations=!1);const b={};Object.keys(c8).forEach(c=>{Object.defineProperty(b,c,{enumerable:!0,set:function(l){R2[c]=l,Z2.forEach(s=>s(b))},get:function(){return R2[c]}})});Object.defineProperty(b,"familyPrefix",{enumerable:!0,set:function(c){R2.cssPrefix=c,Z2.forEach(l=>l(b))},get:function(){return R2.cssPrefix}});d2.FontAwesomeConfig=b;const Z2=[];function $r(c){return Z2.push(c),()=>{Z2.splice(Z2.indexOf(c),1)}}const u2=x3,l2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Br(c){if(!c||!z2)return;const l=D.createElement("style");l.setAttribute("type","text/css"),l.innerHTML=c;const s=D.head.childNodes;let e=null;for(let a=s.length-1;a>-1;a--){const n=s[a],o=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(e=n)}return D.head.insertBefore(l,e),c}const Fr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function s1(){let c=12,l="";for(;c-- >0;)l+=Fr[Math.random()*62|0];return l}function q2(c){const l=[];for(let s=(c||[]).length>>>0;s--;)l[s]=c[s];return l}function K3(c){return c.classList?q2(c.classList):(c.getAttribute("class")||"").split(" ").filter(l=>l)}function l8(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Hr(c){return Object.keys(c||{}).reduce((l,s)=>l+"".concat(s,'="').concat(l8(c[s]),'" '),"").trim()}function B1(c){return Object.keys(c||{}).reduce((l,s)=>l+"".concat(s,": ").concat(c[s].trim(),";"),"")}function Z3(c){return c.size!==l2.size||c.x!==l2.x||c.y!==l2.y||c.rotate!==l2.rotate||c.flipX||c.flipY}function Er(c){let{transform:l,containerWidth:s,iconWidth:e}=c;const a={transform:"translate(".concat(s/2," 256)")},n="translate(".concat(l.x*32,", ").concat(l.y*32,") "),o="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),t="rotate(".concat(l.rotate," 0 0)"),i={transform:"".concat(n," ").concat(o," ").concat(t)},f={transform:"translate(".concat(e/2*-1," -256)")};return{outer:a,inner:i,path:f}}function Or(c){let{transform:l,width:s=x3,height:e=x3,startCentered:a=!1}=c,n="";return a&&U6?n+="translate(".concat(l.x/u2-s/2,"em, ").concat(l.y/u2-e/2,"em) "):a?n+="translate(calc(-50% + ".concat(l.x/u2,"em), calc(-50% + ").concat(l.y/u2,"em)) "):n+="translate(".concat(l.x/u2,"em, ").concat(l.y/u2,"em) "),n+="scale(".concat(l.size/u2*(l.flipX?-1:1),", ").concat(l.size/u2*(l.flipY?-1:1),") "),n+="rotate(".concat(l.rotate,"deg) "),n}var Dr=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function s8(){const c=X6,l=Y6,s=b.cssPrefix,e=b.replacementClass;let a=Dr;if(s!==c||e!==l){const n=new RegExp("\\.".concat(c,"\\-"),"g"),o=new RegExp("\\--".concat(c,"\\-"),"g"),t=new RegExp("\\.".concat(l),"g");a=a.replace(n,".".concat(s,"-")).replace(o,"--".concat(s,"-")).replace(t,".".concat(e))}return a}let $0=!1;function i3(){b.autoAddCss&&!$0&&(Br(s8()),$0=!0)}var Ir={mixout(){return{dom:{css:s8,insertCss:i3}}},hooks(){return{beforeDOMElementCreation(){i3()},beforeI2svg(){i3()}}}};const f2=d2||{};f2[r2]||(f2[r2]={});f2[r2].styles||(f2[r2].styles={});f2[r2].hooks||(f2[r2].hooks={});f2[r2].shims||(f2[r2].shims=[]);var s2=f2[r2];const e8=[],a8=function(){D.removeEventListener("DOMContentLoaded",a8),x1=1,e8.map(c=>c())};let x1=!1;z2&&(x1=(D.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(D.readyState),x1||D.addEventListener("DOMContentLoaded",a8));function Vr(c){z2&&(x1?setTimeout(c,0):e8.push(c))}function o1(c){const{tag:l,attributes:s={},children:e=[]}=c;return typeof c=="string"?l8(c):"<".concat(l," ").concat(Hr(s),">").concat(e.map(o1).join(""),"</").concat(l,">")}function B0(c,l,s){if(c&&c[l]&&c[l][s])return{prefix:l,iconName:s,icon:c[l][s]}}var r3=function(l,s,e,a){var n=Object.keys(l),o=n.length,t=s,i,f,p;for(e===void 0?(i=1,p=l[n[0]]):(i=0,p=e);i<o;i++)f=n[i],p=t(p,l[f],f,l);return p};function Rr(c){const l=[];let s=0;const e=c.length;for(;s<e;){const a=c.charCodeAt(s++);if(a>=55296&&a<=56319&&s<e){const n=c.charCodeAt(s++);(n&64512)==56320?l.push(((a&1023)<<10)+(n&1023)+65536):(l.push(a),s--)}else l.push(a)}return l}function k3(c){const l=Rr(c);return l.length===1?l[0].toString(16):null}function jr(c,l){const s=c.length;let e=c.charCodeAt(l),a;return e>=55296&&e<=56319&&s>l+1&&(a=c.charCodeAt(l+1),a>=56320&&a<=57343)?(e-55296)*1024+a-56320+65536:e}function F0(c){return Object.keys(c).reduce((l,s)=>{const e=c[s];return!!e.icon?l[e.iconName]=e.icon:l[s]=e,l},{})}function S3(c,l){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:e=!1}=s,a=F0(l);typeof s2.hooks.addPack=="function"&&!e?s2.hooks.addPack(c,F0(l)):s2.styles[c]={...s2.styles[c]||{},...a},c==="fas"&&S3("fa",l)}const{styles:y2,shims:Ur}=s2,qr={[R]:Object.values(w2[R]),[K]:Object.values(w2[K]),[Z]:Object.values(w2[Z])};let Q3=null,n8={},o8={},t8={},i8={},r8={};const Gr={[R]:Object.keys(S2[R]),[K]:Object.keys(S2[K]),[Z]:Object.keys(S2[Z])};function Wr(c){return~Ar.indexOf(c)}function Xr(c,l){const s=l.split("-"),e=s[0],a=s.slice(1).join("-");return e===c&&a!==""&&!Wr(a)?a:null}const f8=()=>{const c=e=>r3(y2,(a,n,o)=>(a[o]=r3(n,e,{}),a),{});n8=c((e,a,n)=>(a[3]&&(e[a[3]]=n),a[2]&&a[2].filter(t=>typeof t=="number").forEach(t=>{e[t.toString(16)]=n}),e)),o8=c((e,a,n)=>(e[n]=n,a[2]&&a[2].filter(t=>typeof t=="string").forEach(t=>{e[t]=n}),e)),r8=c((e,a,n)=>{const o=a[2];return e[n]=n,o.forEach(t=>{e[t]=n}),e});const l="far"in y2||b.autoFetchSvg,s=r3(Ur,(e,a)=>{const n=a[0];let o=a[1];const t=a[2];return o==="far"&&!l&&(o="fas"),typeof n=="string"&&(e.names[n]={prefix:o,iconName:t}),typeof n=="number"&&(e.unicodes[n.toString(16)]={prefix:o,iconName:t}),e},{names:{},unicodes:{}});t8=s.names,i8=s.unicodes,Q3=F1(b.styleDefault,{family:b.familyDefault})};$r(c=>{Q3=F1(c.styleDefault,{family:b.familyDefault})});f8();function J3(c,l){return(n8[c]||{})[l]}function Yr(c,l){return(o8[c]||{})[l]}function p2(c,l){return(r8[c]||{})[l]}function m8(c){return t8[c]||{prefix:null,iconName:null}}function Kr(c){const l=i8[c],s=J3("fas",c);return l||(s?{prefix:"fas",iconName:s}:null)||{prefix:null,iconName:null}}function C2(){return Q3}const c4=()=>({prefix:null,iconName:null,rest:[]});function F1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:s=R}=l,e=S2[s][c],a=l1[s][c]||l1[s][e],n=c in s2.styles?c:null;return a||n||null}const Zr={[R]:Object.keys(w2[R]),[K]:Object.keys(w2[K]),[Z]:Object.keys(w2[Z])};function H1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:s=!1}=l,e={[R]:"".concat(b.cssPrefix,"-").concat(R),[K]:"".concat(b.cssPrefix,"-").concat(K),[Z]:"".concat(b.cssPrefix,"-").concat(Z)};let a=null,n=R;const o=nr.filter(i=>i!==q6);o.forEach(i=>{(c.includes(e[i])||c.some(f=>Zr[i].includes(f)))&&(n=i)});const t=c.reduce((i,f)=>{const p=Xr(b.cssPrefix,f);if(y2[f]?(f=qr[n].includes(f)?yr[n][f]:f,a=f,i.prefix=f):Gr[n].indexOf(f)>-1?(a=f,i.prefix=F1(f,{family:n})):p?i.iconName=p:f!==b.replacementClass&&!o.some(d=>f===e[d])&&i.rest.push(f),!s&&i.prefix&&i.iconName){const d=a==="fa"?m8(i.iconName):{},C=p2(i.prefix,i.iconName);d.prefix&&(a=null),i.iconName=d.iconName||C||i.iconName,i.prefix=d.prefix||i.prefix,i.prefix==="far"&&!y2.far&&y2.fas&&!b.autoFetchSvg&&(i.prefix="fas")}return i},c4());return(c.includes("fa-brands")||c.includes("fab"))&&(t.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(t.prefix="fad"),!t.prefix&&n===K&&(y2.fass||b.autoFetchSvg)&&(t.prefix="fass",t.iconName=p2(t.prefix,t.iconName)||t.iconName),!t.prefix&&n===Z&&(y2.fasds||b.autoFetchSvg)&&(t.prefix="fasds",t.iconName=p2(t.prefix,t.iconName)||t.iconName),(t.prefix==="fa"||a==="fa")&&(t.prefix=C2()||"fas"),t}class Qr{constructor(){this.definitions={}}add(){for(var l=arguments.length,s=new Array(l),e=0;e<l;e++)s[e]=arguments[e];const a=s.reduce(this._pullDefinitions,{});Object.keys(a).forEach(n=>{this.definitions[n]={...this.definitions[n]||{},...a[n]},S3(n,a[n]);const o=w2[R][n];o&&S3(o,a[n]),f8()})}reset(){this.definitions={}}_pullDefinitions(l,s){const e=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(e).map(a=>{const{prefix:n,iconName:o,icon:t}=e[a],i=t[2];l[n]||(l[n]={}),i.length>0&&i.forEach(f=>{typeof f=="string"&&(l[n][f]=t)}),l[n][o]=t}),l}}let H0=[],E2={};const D2={},Jr=Object.keys(D2);function cf(c,l){let{mixoutsTo:s}=l;return H0=c,E2={},Object.keys(D2).forEach(e=>{Jr.indexOf(e)===-1&&delete D2[e]}),H0.forEach(e=>{const a=e.mixout?e.mixout():{};if(Object.keys(a).forEach(n=>{typeof a[n]=="function"&&(s[n]=a[n]),typeof a[n]=="object"&&Object.keys(a[n]).forEach(o=>{s[n]||(s[n]={}),s[n][o]=a[n][o]})}),e.hooks){const n=e.hooks();Object.keys(n).forEach(o=>{E2[o]||(E2[o]=[]),E2[o].push(n[o])})}e.provides&&e.provides(D2)}),s}function w3(c,l){for(var s=arguments.length,e=new Array(s>2?s-2:0),a=2;a<s;a++)e[a-2]=arguments[a];return(E2[c]||[]).forEach(o=>{l=o.apply(null,[l,...e])}),l}function T2(c){for(var l=arguments.length,s=new Array(l>1?l-1:0),e=1;e<l;e++)s[e-1]=arguments[e];(E2[c]||[]).forEach(n=>{n.apply(null,s)})}function h2(){const c=arguments[0],l=Array.prototype.slice.call(arguments,1);return D2[c]?D2[c].apply(null,l):void 0}function _3(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:l}=c;const s=c.prefix||C2();if(l)return l=p2(s,l)||l,B0(z8.definitions,s,l)||B0(s2.styles,s,l)}const z8=new Qr,lf=()=>{b.autoReplaceSvg=!1,b.observeMutations=!1,T2("noAuto")},sf={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return z2?(T2("beforeI2svg",c),h2("pseudoElements2svg",c),h2("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:l}=c;b.autoReplaceSvg===!1&&(b.autoReplaceSvg=!0),b.observeMutations=!0,Vr(()=>{af({autoReplaceSvgRoot:l}),T2("watch",c)})}},ef={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:p2(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){const l=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],s=F1(c[0]);return{prefix:s,iconName:p2(s,l)||l}}if(typeof c=="string"&&(c.indexOf("".concat(b.cssPrefix,"-"))>-1||c.match(kr))){const l=H1(c.split(" "),{skipLookups:!0});return{prefix:l.prefix||C2(),iconName:p2(l.prefix,l.iconName)||l.iconName}}if(typeof c=="string"){const l=C2();return{prefix:l,iconName:p2(l,c)||c}}}},Q={noAuto:lf,config:b,dom:sf,parse:ef,library:z8,findIconDefinition:_3,toHtml:o1},af=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:l=D}=c;(Object.keys(s2.styles).length>0||b.autoFetchSvg)&&z2&&b.autoReplaceSvg&&Q.dom.i2svg({node:l})};function E1(c,l){return Object.defineProperty(c,"abstract",{get:l}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(s=>o1(s))}}),Object.defineProperty(c,"node",{get:function(){if(!z2)return;const s=D.createElement("div");return s.innerHTML=c.html,s.children}}),c}function nf(c){let{children:l,main:s,mask:e,attributes:a,styles:n,transform:o}=c;if(Z3(o)&&s.found&&!e.found){const{width:t,height:i}=s,f={x:t/i/2,y:.5};a.style=B1({...n,"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")})}return[{tag:"svg",attributes:a,children:l}]}function of(c){let{prefix:l,iconName:s,children:e,attributes:a,symbol:n}=c;const o=n===!0?"".concat(l,"-").concat(b.cssPrefix,"-").concat(s):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...a,id:o},children:e}]}]}function l4(c){const{icons:{main:l,mask:s},prefix:e,iconName:a,transform:n,symbol:o,title:t,maskId:i,titleId:f,extra:p,watchable:d=!1}=c,{width:C,height:S}=s.found?s:l,g=e==="fak",P=[b.replacementClass,a?"".concat(b.cssPrefix,"-").concat(a):""].filter(U=>p.classes.indexOf(U)===-1).filter(U=>U!==""||!!U).concat(p.classes).join(" ");let _={children:[],attributes:{...p.attributes,"data-prefix":e,"data-icon":a,class:P,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat(S)}};const h=g&&!~p.classes.indexOf("fa-fw")?{width:"".concat(C/S*16*.0625,"em")}:{};d&&(_.attributes[P2]=""),t&&(_.children.push({tag:"title",attributes:{id:_.attributes["aria-labelledby"]||"title-".concat(f||s1())},children:[t]}),delete _.attributes.title);const N={..._,prefix:e,iconName:a,main:l,mask:s,maskId:i,transform:n,symbol:o,styles:{...h,...p.styles}},{children:F,attributes:j}=s.found&&l.found?h2("generateAbstractMask",N)||{children:[],attributes:{}}:h2("generateAbstractIcon",N)||{children:[],attributes:{}};return N.children=F,N.attributes=j,o?of(N):nf(N)}function E0(c){const{content:l,width:s,height:e,transform:a,title:n,extra:o,watchable:t=!1}=c,i={...o.attributes,...n?{title:n}:{},class:o.classes.join(" ")};t&&(i[P2]="");const f={...o.styles};Z3(a)&&(f.transform=Or({transform:a,startCentered:!0,width:s,height:e}),f["-webkit-transform"]=f.transform);const p=B1(f);p.length>0&&(i.style=p);const d=[];return d.push({tag:"span",attributes:i,children:[l]}),n&&d.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),d}function tf(c){const{content:l,title:s,extra:e}=c,a={...e.attributes,...s?{title:s}:{},class:e.classes.join(" ")},n=B1(e.styles);n.length>0&&(a.style=n);const o=[];return o.push({tag:"span",attributes:a,children:[l]}),s&&o.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),o}const{styles:f3}=s2;function A3(c){const l=c[0],s=c[1],[e]=c.slice(4);let a=null;return Array.isArray(e)?a={tag:"g",attributes:{class:"".concat(b.cssPrefix,"-").concat(t3.GROUP)},children:[{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(t3.SECONDARY),fill:"currentColor",d:e[0]}},{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(t3.PRIMARY),fill:"currentColor",d:e[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:e}},{found:!0,width:l,height:s,icon:a}}const rf={found:!1,width:512,height:512};function ff(c,l){!K6&&!b.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(l,'" is missing.'))}function P3(c,l){let s=l;return l==="fa"&&b.styleDefault!==null&&(l=C2()),new Promise((e,a)=>{if(s==="fa"){const n=m8(c)||{};c=n.iconName||c,l=n.prefix||l}if(c&&l&&f3[l]&&f3[l][c]){const n=f3[l][c];return e(A3(n))}ff(c,l),e({...rf,icon:b.showMissingIcons&&c?h2("missingIconAbstract")||{}:{}})})}const O0=()=>{},T3=b.measurePerformance&&L1&&L1.mark&&L1.measure?L1:{mark:O0,measure:O0},X2='FA "6.6.0"',mf=c=>(T3.mark("".concat(X2," ").concat(c," begins")),()=>L8(c)),L8=c=>{T3.mark("".concat(X2," ").concat(c," ends")),T3.measure("".concat(X2," ").concat(c),"".concat(X2," ").concat(c," begins"),"".concat(X2," ").concat(c," ends"))};var s4={begin:mf,end:L8};const d1=()=>{};function D0(c){return typeof(c.getAttribute?c.getAttribute(P2):null)=="string"}function zf(c){const l=c.getAttribute?c.getAttribute(X3):null,s=c.getAttribute?c.getAttribute(Y3):null;return l&&s}function Lf(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(b.replacementClass)}function uf(){return b.autoReplaceSvg===!0?C1.replace:C1[b.autoReplaceSvg]||C1.replace}function pf(c){return D.createElementNS("http://www.w3.org/2000/svg",c)}function Mf(c){return D.createElement(c)}function u8(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:s=c.tag==="svg"?pf:Mf}=l;if(typeof c=="string")return D.createTextNode(c);const e=s(c.tag);return Object.keys(c.attributes||[]).forEach(function(n){e.setAttribute(n,c.attributes[n])}),(c.children||[]).forEach(function(n){e.appendChild(u8(n,{ceFn:s}))}),e}function df(c){let l=" ".concat(c.outerHTML," ");return l="".concat(l,"Font Awesome fontawesome.com "),l}const C1={replace:function(c){const l=c[0];if(l.parentNode)if(c[1].forEach(s=>{l.parentNode.insertBefore(u8(s),l)}),l.getAttribute(P2)===null&&b.keepOriginalSource){let s=D.createComment(df(l));l.parentNode.replaceChild(s,l)}else l.remove()},nest:function(c){const l=c[0],s=c[1];if(~K3(l).indexOf(b.replacementClass))return C1.replace(c);const e=new RegExp("".concat(b.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){const n=s[0].attributes.class.split(" ").reduce((o,t)=>(t===b.replacementClass||t.match(e)?o.toSvg.push(t):o.toNode.push(t),o),{toNode:[],toSvg:[]});s[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?l.removeAttribute("class"):l.setAttribute("class",n.toNode.join(" "))}const a=s.map(n=>o1(n)).join(`
`);l.setAttribute(P2,""),l.innerHTML=a}};function I0(c){c()}function p8(c,l){const s=typeof l=="function"?l:d1;if(c.length===0)s();else{let e=I0;b.mutateApproach===br&&(e=d2.requestAnimationFrame||I0),e(()=>{const a=uf(),n=s4.begin("mutate");c.map(a),n(),s()})}}let e4=!1;function M8(){e4=!0}function $3(){e4=!1}let v1=null;function V0(c){if(!_0||!b.observeMutations)return;const{treeCallback:l=d1,nodeCallback:s=d1,pseudoElementsCallback:e=d1,observeMutationsRoot:a=D}=c;v1=new _0(n=>{if(e4)return;const o=C2();q2(n).forEach(t=>{if(t.type==="childList"&&t.addedNodes.length>0&&!D0(t.addedNodes[0])&&(b.searchPseudoElements&&e(t.target),l(t.target)),t.type==="attributes"&&t.target.parentNode&&b.searchPseudoElements&&e(t.target.parentNode),t.type==="attributes"&&D0(t.target)&&~_r.indexOf(t.attributeName))if(t.attributeName==="class"&&zf(t.target)){const{prefix:i,iconName:f}=H1(K3(t.target));t.target.setAttribute(X3,i||o),f&&t.target.setAttribute(Y3,f)}else Lf(t.target)&&s(t.target)})}),z2&&v1.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Cf(){v1&&v1.disconnect()}function hf(c){const l=c.getAttribute("style");let s=[];return l&&(s=l.split(";").reduce((e,a)=>{const n=a.split(":"),o=n[0],t=n.slice(1);return o&&t.length>0&&(e[o]=t.join(":").trim()),e},{})),s}function gf(c){const l=c.getAttribute("data-prefix"),s=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"";let a=H1(K3(c));return a.prefix||(a.prefix=C2()),l&&s&&(a.prefix=l,a.iconName=s),a.iconName&&a.prefix||(a.prefix&&e.length>0&&(a.iconName=Yr(a.prefix,c.innerText)||J3(a.prefix,k3(c.innerText))),!a.iconName&&b.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=c.firstChild.data)),a}function xf(c){const l=q2(c.attributes).reduce((a,n)=>(a.name!=="class"&&a.name!=="style"&&(a[n.name]=n.value),a),{}),s=c.getAttribute("title"),e=c.getAttribute("data-fa-title-id");return b.autoA11y&&(s?l["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(e||s1()):(l["aria-hidden"]="true",l.focusable="false")),l}function vf(){return{iconName:null,title:null,titleId:null,prefix:null,transform:l2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function R0(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:s,prefix:e,rest:a}=gf(c),n=xf(c),o=w3("parseNodeAttributes",{},c);let t=l.styleParser?hf(c):[];return{iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:e,transform:l2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t,attributes:n},...o}}const{styles:bf}=s2;function d8(c){const l=b.autoReplaceSvg==="nest"?R0(c,{styleParser:!1}):R0(c);return~l.extra.classes.indexOf(J6)?h2("generateLayersText",c,l):h2("generateSvgReplacementMutation",c,l)}let o2=new Set;Z6.map(c=>{o2.add("fa-".concat(c))});Object.keys(S2[R]).map(o2.add.bind(o2));Object.keys(S2[K]).map(o2.add.bind(o2));Object.keys(S2[Z]).map(o2.add.bind(o2));o2=[...o2];function j0(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!z2)return Promise.resolve();const s=D.documentElement.classList,e=p=>s.add("".concat(T0,"-").concat(p)),a=p=>s.remove("".concat(T0,"-").concat(p)),n=b.autoFetchSvg?o2:Z6.map(p=>"fa-".concat(p)).concat(Object.keys(bf));n.includes("fa")||n.push("fa");const o=[".".concat(J6,":not([").concat(P2,"])")].concat(n.map(p=>".".concat(p,":not([").concat(P2,"])"))).join(", ");if(o.length===0)return Promise.resolve();let t=[];try{t=q2(c.querySelectorAll(o))}catch{}if(t.length>0)e("pending"),a("complete");else return Promise.resolve();const i=s4.begin("onTree"),f=t.reduce((p,d)=>{try{const C=d8(d);C&&p.push(C)}catch(C){K6||C.name==="MissingIcon"&&console.error(C)}return p},[]);return new Promise((p,d)=>{Promise.all(f).then(C=>{p8(C,()=>{e("active"),e("complete"),a("pending"),typeof l=="function"&&l(),i(),p()})}).catch(C=>{i(),d(C)})})}function Nf(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;d8(c).then(s=>{s&&p8([s],l)})}function yf(c){return function(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const e=(l||{}).icon?l:_3(l||{});let{mask:a}=s;return a&&(a=(a||{}).icon?a:_3(a||{})),c(e,{...s,mask:a})}}const kf=function(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:s=l2,symbol:e=!1,mask:a=null,maskId:n=null,title:o=null,titleId:t=null,classes:i=[],attributes:f={},styles:p={}}=l;if(!c)return;const{prefix:d,iconName:C,icon:S}=c;return E1({type:"icon",...c},()=>(T2("beforeDOMElementCreation",{iconDefinition:c,params:l}),b.autoA11y&&(o?f["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(t||s1()):(f["aria-hidden"]="true",f.focusable="false")),l4({icons:{main:A3(S),mask:a?A3(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:C,transform:{...l2,...s},symbol:e,title:o,maskId:n,titleId:t,extra:{attributes:f,styles:p,classes:i}})))};var Sf={mixout(){return{icon:yf(kf)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=j0,c.nodeCallback=Nf,c}}},provides(c){c.i2svg=function(l){const{node:s=D,callback:e=()=>{}}=l;return j0(s,e)},c.generateSvgReplacementMutation=function(l,s){const{iconName:e,title:a,titleId:n,prefix:o,transform:t,symbol:i,mask:f,maskId:p,extra:d}=s;return new Promise((C,S)=>{Promise.all([P3(e,o),f.iconName?P3(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(g=>{let[P,_]=g;C([l,l4({icons:{main:P,mask:_},prefix:o,iconName:e,transform:t,symbol:i,maskId:p,title:a,titleId:n,extra:d,watchable:!0})])}).catch(S)})},c.generateAbstractIcon=function(l){let{children:s,attributes:e,main:a,transform:n,styles:o}=l;const t=B1(o);t.length>0&&(e.style=t);let i;return Z3(n)&&(i=h2("generateAbstractTransformGrouping",{main:a,transform:n,containerWidth:a.width,iconWidth:a.width})),s.push(i||a.icon),{children:s,attributes:e}}}},wf={mixout(){return{layer(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:s=[]}=l;return E1({type:"layer"},()=>{T2("beforeDOMElementCreation",{assembler:c,params:l});let e=[];return c(a=>{Array.isArray(a)?a.map(n=>{e=e.concat(n.abstract)}):e=e.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(b.cssPrefix,"-layers"),...s].join(" ")},children:e}]})}}}},_f={mixout(){return{counter(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:s=null,classes:e=[],attributes:a={},styles:n={}}=l;return E1({type:"counter",content:c},()=>(T2("beforeDOMElementCreation",{content:c,params:l}),tf({content:c.toString(),title:s,extra:{attributes:a,styles:n,classes:["".concat(b.cssPrefix,"-layers-counter"),...e]}})))}}}},Af={mixout(){return{text(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:s=l2,title:e=null,classes:a=[],attributes:n={},styles:o={}}=l;return E1({type:"text",content:c},()=>(T2("beforeDOMElementCreation",{content:c,params:l}),E0({content:c,transform:{...l2,...s},title:e,extra:{attributes:n,styles:o,classes:["".concat(b.cssPrefix,"-layers-text"),...a]}})))}}},provides(c){c.generateLayersText=function(l,s){const{title:e,transform:a,extra:n}=s;let o=null,t=null;if(U6){const i=parseInt(getComputedStyle(l).fontSize,10),f=l.getBoundingClientRect();o=f.width/i,t=f.height/i}return b.autoA11y&&!e&&(n.attributes["aria-hidden"]="true"),Promise.resolve([l,E0({content:l.innerHTML,width:o,height:t,transform:a,title:e,extra:n,watchable:!0})])}}};const Pf=new RegExp('"',"ug"),U0=[1105920,1112319],q0={FontAwesome:{normal:"fas",400:"fas"},...mr,...fr,...hr},B3=Object.keys(q0).reduce((c,l)=>(c[l.toLowerCase()]=q0[l],c),{}),Tf=Object.keys(B3).reduce((c,l)=>{const s=B3[l];return c[l]=s[900]||[...Object.entries(s)][0][1],c},{});function $f(c){const l=c.replace(Pf,""),s=jr(l,0),e=s>=U0[0]&&s<=U0[1],a=l.length===2?l[0]===l[1]:!1;return{value:k3(a?l[0]:l),isSecondary:e||a}}function Bf(c,l){const s=c.replace(/^['"]|['"]$/g,"").toLowerCase(),e=parseInt(l),a=isNaN(e)?"normal":e;return(B3[s]||{})[a]||Tf[s]}function G0(c,l){const s="".concat(vr).concat(l.replace(":","-"));return new Promise((e,a)=>{if(c.getAttribute(s)!==null)return e();const o=q2(c.children).filter(C=>C.getAttribute(v3)===l)[0],t=d2.getComputedStyle(c,l),i=t.getPropertyValue("font-family"),f=i.match(Sr),p=t.getPropertyValue("font-weight"),d=t.getPropertyValue("content");if(o&&!f)return c.removeChild(o),e();if(f&&d!=="none"&&d!==""){const C=t.getPropertyValue("content");let S=Bf(i,p);const{value:g,isSecondary:P}=$f(C),_=f[0].startsWith("FontAwesome");let h=J3(S,g),N=h;if(_){const F=Kr(g);F.iconName&&F.prefix&&(h=F.iconName,S=F.prefix)}if(h&&!P&&(!o||o.getAttribute(X3)!==S||o.getAttribute(Y3)!==N)){c.setAttribute(s,N),o&&c.removeChild(o);const F=vf(),{extra:j}=F;j.attributes[v3]=l,P3(h,S).then(U=>{const V=l4({...F,icons:{main:U,mask:c4()},prefix:S,iconName:N,extra:j,watchable:!0}),W=D.createElementNS("http://www.w3.org/2000/svg","svg");l==="::before"?c.insertBefore(W,c.firstChild):c.appendChild(W),W.outerHTML=V.map(N2=>o1(N2)).join(`