let page = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>FreeOrgans.Shop</title>
    <script type="module">
(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();let V=q;const v=1,T=2,D={owned:null,cleanups:null,context:null,owner:null};var d=null;let I=null,g=null,h=null,x=null,L=0;function Q(e,n){const t=g,s=d,i=e.length===0,l=n===void 0?s:n,o=i?D:{owned:null,cleanups:null,context:l?l.context:null,owner:l},r=i?e:()=>e(()=>_(()=>R(o)));d=o,g=null;try{return O(r,!0)}finally{g=t,d=s}}function z(e,n,t){const s=J(e,n,!1,v);M(s)}function _(e){if(g===null)return e();const n=g;g=null;try{return e()}finally{g=n}}function W(e,n,t){let s=e.value;return(!e.comparator||!e.comparator(s,n))&&(e.value=n,e.observers&&e.observers.length&&O(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i],o=I&&I.running;o&&I.disposed.has(l),(o?!l.tState:!l.state)&&(l.pure?h.push(l):x.push(l),l.observers&&H(l)),o||(l.state=v)}if(h.length>1e6)throw h=[],new Error},!1)),n}function M(e){if(!e.fn)return;R(e);const n=d,t=g,s=L;g=d=e,X(e,e.value,s),g=t,d=n}function X(e,n,t){let s;try{s=e.fn(n)}catch(i){return e.pure&&(e.state=v,e.owned&&e.owned.forEach(R),e.owned=null),e.updatedAt=t+1,K(i)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?W(e,s):e.value=s,e.updatedAt=t)}function J(e,n,t,s=v,i){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:d,context:d?d.context:null,pure:t};return d===null||d!==D&&(d.owned?d.owned.push(l):d.owned=[l]),l}function F(e){if(e.state===0)return;if(e.state===T)return N(e);if(e.suspense&&_(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<L);)e.state&&n.push(e);for(let t=n.length-1;t>=0;t--)if(e=n[t],e.state===v)M(e);else if(e.state===T){const s=h;h=null,O(()=>N(e,n[0]),!1),h=s}}function O(e,n){if(h)return e();let t=!1;n||(h=[]),x?t=!0:x=[],L++;try{const s=e();return Z(t),s}catch(s){t||(x=null),h=null,K(s)}}function Z(e){if(h&&(q(h),h=null),e)return;const n=x;x=null,n.length&&O(()=>V(n),!1)}function q(e){for(let n=0;n<e.length;n++)F(e[n])}function N(e,n){e.state=0;for(let t=0;t<e.sources.length;t+=1){const s=e.sources[t];if(s.sources){const i=s.state;i===v?s!==n&&(!s.updatedAt||s.updatedAt<L)&&F(s):i===T&&N(s,n)}}}function H(e){for(let n=0;n<e.observers.length;n+=1){const t=e.observers[n];t.state||(t.state=T,t.pure?h.push(t):x.push(t),t.observers&&H(t))}}function R(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),s=e.sourceSlots.pop(),i=t.observers;if(i&&i.length){const l=i.pop(),o=t.observerSlots.pop();s<i.length&&(l.sourceSlots[o]=s,i[s]=l,t.observerSlots[s]=o)}}if(e.owned){for(n=e.owned.length-1;n>=0;n--)R(e.owned[n]);e.owned=null}if(e.cleanups){for(n=e.cleanups.length-1;n>=0;n--)e.cleanups[n]();e.cleanups=null}e.state=0}function ee(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function K(e,n=d){throw ee(e)}function a(e,n){return _(()=>e(n||{}))}function te(e,n,t){let s=t.length,i=n.length,l=s,o=0,r=0,c=n[i-1].nextSibling,p=null;for(;o<i||r<l;){if(n[o]===t[r]){o++,r++;continue}for(;n[i-1]===t[l-1];)i--,l--;if(i===o){const f=l<s?r?t[r-1].nextSibling:t[l-r]:c;for(;r<l;)e.insertBefore(t[r++],f)}else if(l===r)for(;o<i;)(!p||!p.has(n[o]))&&n[o].remove(),o++;else if(n[o]===t[l-1]&&t[r]===n[i-1]){const f=n[--i].nextSibling;e.insertBefore(t[r++],n[o++].nextSibling),e.insertBefore(t[--l],f),n[i]=t[l]}else{if(!p){p=new Map;let y=r;for(;y<l;)p.set(t[y],y++)}const f=p.get(n[o]);if(f!=null)if(r<f&&f<l){let y=o,A=1,C;for(;++y<i&&y<l&&!((C=p.get(n[y]))==null||C!==f+A);)A++;if(A>f-r){const E=n[o];for(;r<f;)e.insertBefore(t[r++],E)}else e.replaceChild(t[r++],n[o++])}else o++;else n[o++].remove()}}}const U="_$DX_DELEGATE";function ne(e,n,t,s={}){let i;return Q(l=>{i=l,n===document?e():u(n,e(),n.firstChild?null:void 0,t)},s.owner),()=>{i(),n.textContent=""}}function w(e,n,t){let s;const i=()=>{const o=document.createElement("template");return o.innerHTML=e,t?o.content.firstChild.firstChild:o.content.firstChild},l=n?()=>_(()=>document.importNode(s||(s=i()),!0)):()=>(s||(s=i())).cloneNode(!0);return l.cloneNode=l,l}function se(e,n=window.document){const t=n[U]||(n[U]=new Set);for(let s=0,i=e.length;s<i;s++){const l=e[s];t.has(l)||(t.add(l),n.addEventListener(l,ie))}}function B(e,n,t){return _(()=>e(n,t))}function u(e,n,t,s){if(t!==void 0&&!s&&(s=[]),typeof n!="function")return P(e,n,s,t);z(i=>P(e,n(),i,t),s)}function ie(e){const n=\`$$\${e.type}\`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}});t;){const s=t[n];if(s&&!t.disabled){const i=t[\`\${n}Data\`];if(i!==void 0?s.call(t,i,e):s.call(t,e),e.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function P(e,n,t,s,i){for(;typeof t=="function";)t=t();if(n===t)return t;const l=typeof n,o=s!==void 0;if(e=o&&t[0]&&t[0].parentNode||e,l==="string"||l==="number")if(l==="number"&&(n=n.toString()),o){let r=t[0];r&&r.nodeType===3?r.data=n:r=document.createTextNode(n),t=S(e,t,s,r)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n;else if(n==null||l==="boolean")t=S(e,t,s);else{if(l==="function")return z(()=>{let r=n();for(;typeof r=="function";)r=r();t=P(e,r,t,s)}),()=>t;if(Array.isArray(n)){const r=[],c=t&&Array.isArray(t);if(k(r,n,t,i))return z(()=>t=P(e,r,t,s,!0)),()=>t;if(r.length===0){if(t=S(e,t,s),o)return t}else c?t.length===0?j(e,r,s):te(e,t,r):(t&&S(e),j(e,r));t=r}else if(n.nodeType){if(Array.isArray(t)){if(o)return t=S(e,t,s,n);S(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function k(e,n,t,s){let i=!1;for(let l=0,o=n.length;l<o;l++){let r=n[l],c=t&&t[l],p;if(!(r==null||r===!0||r===!1))if((p=typeof r)=="object"&&r.nodeType)e.push(r);else if(Array.isArray(r))i=k(e,r,c)||i;else if(p==="function")if(s){for(;typeof r=="function";)r=r();i=k(e,Array.isArray(r)?r:[r],Array.isArray(c)?c:[c])||i}else e.push(r),i=!0;else{const f=String(r);c&&c.nodeType===3&&c.data===f?e.push(c):e.push(document.createTextNode(f))}}return i}function j(e,n,t=null){for(let s=0,i=n.length;s<i;s++)e.insertBefore(n[s],t)}function S(e,n,t,s){if(t===void 0)return e.textContent="";const i=s||document.createTextNode("");if(n.length){let l=!1;for(let o=n.length-1;o>=0;o--){const r=n[o];if(i!==r){const c=r.parentNode===e;!l&&!o?c?e.replaceChild(i,r):e.insertBefore(i,t):c&&r.remove()}else l=!0}}else e.insertBefore(i,t);return[i]}const le=w("<div class=banner><div class=banner-container>FreeOrgans.Shop");function re(){return le()}const oe=w(\`<div class=sidebar><input placeholder=SEARCH class=searchbar><a href=#retailers><h1>Retailers</h1></a><p>This is a joke website, we don't actually sell organs, its just a funny little url shortener that I made when I was bored.</p><a href=#cart><h1>Cart</h1></a><a href=#faq><h1>Faq</h1></a><input type=text placeholder="Enter URL"><br>Redirect on client: <input type=checkbox><br><button>Create URL</button><p></p><p>Designed by EMRALDSCOUT. Run by <a href=https://phazed.xyz>_phaz</a>.<br>I can design nicer looking websites, Sometimes...\`);function ae(){let e,n,t;return(()=>{const s=oe(),i=s.firstChild,l=i.nextSibling,o=l.nextSibling,r=o.nextSibling,c=r.nextSibling,p=c.nextSibling,f=p.nextSibling,y=f.nextSibling,A=y.nextSibling,C=A.nextSibling,E=C.nextSibling,G=E.nextSibling;return i.$$input=()=>{document.write(\`ui is load, please stay and wait...<div><img src="yononhonohyoyono">Loading InDICATOR</div><div style="width: 100%; height: 150px; display: flex; justify-content: center; align-items: center;"><div style="background: #efe4b2; width: 80%; height: 50%; display: flex; justify-content: center; align-items: center; border: 15px solid #000; border-radius: 20px; font-size: 70px; font-family: 'Comic Sans MS', sans-serif; rotate: -187deg;">FreeOrgans.Shop</div></div>\`),setTimeout(()=>{document.write(\`<h1 style="height: 100%; display: flex; justify-content: center; align-items: center; font-size: 200px;">418<br />I'm a teapot</h1>\`)},Math.random()*1e4+5e3)},B($=>e=$,p),B($=>n=$,A),E.$$click=async()=>{let Y=await(await fetch("/api/v1/link",{method:"PUT",headers:{url:e.value,client:n.checked?"yes":"no"}})).json();t.innerText="https://freeorgans.shop"+Y.url},B($=>t=$,G),s})()}se(["input","click"]);const ue=w("<div class=footer>LOREM IPSUM<br>THIS IS TOTALLYYY REAL ORGANS BRO TRUST ME");function ce(){return ue()}const fe=w("<div class=listing><div class=listing-image></div><div class=listing-details><h1></h1><p>Price: ֏0<br><button>Details");function m(e){return(()=>{const n=fe(),t=n.firstChild,s=t.nextSibling,i=s.firstChild;return t.style.setProperty("background-size","cover"),t.style.setProperty("background-position","center"),u(i,()=>e.name),z(()=>"url("+e.image+")"!=null?t.style.setProperty("background-image","url("+e.image+")"):t.style.removeProperty("background-image")),n})()}const de=w("<div class=orders><div class=order-content><h1>TOp Sellers");function pe(){return(()=>{const e=de(),n=e.firstChild;return n.firstChild,u(n,a(m,{image:"https://cdn.phazed.xyz/Assets/heart.png",name:"Heart"}),null),u(n,a(m,{image:"https://cdn.phazed.xyz/Assets/kidney.png",name:"Kidney"}),null),u(n,a(m,{image:"https://cdn.phazed.xyz/Assets/brain.png",name:"Brain"}),null),u(n,a(m,{image:"https://cdn.phazed.xyz/Assets/stomach.png",name:"Stomach"}),null),u(n,a(m,{image:"https://cdn.phazed.xyz/Assets/liver.png",name:"Liver"}),null),u(n,a(m,{image:"https://cdn.phazed.xyz/Assets/lungs.png",name:"Lungs"}),null),u(n,a(m,{image:"https://cdn.phazed.xyz/Assets/skin.png",name:"Skin"}),null),u(n,a(m,{image:"https://cdn.phazed.xyz/Assets/blood.png",name:"Blood"}),null),u(n,a(m,{image:"https://cdn.phazed.xyz/Assets/piss.png",name:"Piss"}),null),e})()}const he=w("<div class=small-listing><div class=small-listing-image></div><div class=small-listing-details><br>Price: ֏0");function b(e){return(()=>{const n=he(),t=n.firstChild,s=t.nextSibling,i=s.firstChild;return t.style.setProperty("background-size","cover"),t.style.setProperty("background-position","center"),u(s,()=>e.name,i),z(()=>"url("+e.image+")"!=null?t.style.setProperty("background-image","url("+e.image+")"):t.style.removeProperty("background-image")),n})()}const ge=w("<div class=recent><h2>Recently Purchased");function ye(){return(()=>{const e=ge();return e.firstChild,u(e,a(b,{image:"https://cdn.phazed.xyz/Assets/heart.png",name:"Heart"}),null),u(e,a(b,{image:"https://cdn.phazed.xyz/Assets/kidney.png",name:"Kidney"}),null),u(e,a(b,{image:"https://cdn.phazed.xyz/Assets/stomach.png",name:"Stomach"}),null),u(e,a(b,{image:"https://cdn.phazed.xyz/Assets/kidney.png",name:"Kidney"}),null),u(e,a(b,{image:"https://cdn.phazed.xyz/Assets/piss.png",name:"Piss"}),null),u(e,a(b,{image:"https://cdn.phazed.xyz/Assets/blood.png",name:"Blood"}),null),u(e,a(b,{image:"https://cdn.phazed.xyz/Assets/liver.png",name:"Liver"}),null),u(e,a(b,{image:"https://cdn.phazed.xyz/Assets/brain.png",name:"Brain"}),null),e})()}const me=w("<div class=main>");function be(){return[(()=>{const e=me();return u(e,a(re,{}),null),u(e,a(pe,{}),null),u(e,a(ce,{}),null),e})(),a(ae,{}),a(ye,{})]}const we=document.getElementById("root");ne(()=>a(be,{}),we);
		</script>
		<style>
body{background:#efe4b2}h1,h2,h3,h4,h5,h6{font-family:Comic Sans MS,sans-serif;text-align:center}.banner{width:100%;height:150px;display:flex;justify-content:center;align-items:center}.banner-container{background:#efe4b2;width:80%;height:50%;display:flex;justify-content:center;align-items:center;border:15px solid #000;border-radius:20px;font-size:70px;font-family:Comic Sans MS,sans-serif;rotate:1deg}.sidebar{position:fixed;top:50%;left:-15px;transform:translateY(-50%);border:15px solid #000;width:200px;height:600px;text-align:center}.searchbar{margin:10px;background:none;border:10px solid #000;outline:none}.footer{position:fixed;bottom:-5px;width:80%;left:-12.4px}.main{background:#b8795a;position:fixed;top:0;left:50%;transform:translate(-50%);height:100%;width:900px}.orders{margin:auto;width:80%;height:75%;overflow:auto;background:linear-gradient(to bottom,#efe4b2 97%,#b8795a 97%)}.listing{width:90%;height:150px;margin:10px auto;display:flex}.listing-image{width:130px;height:130px;border:10px solid #000}.listing-details{width:calc(100% - 130px);font-family:Comic Sans MS,sans-serif;text-align:center}.recent{position:fixed;top:50%;right:-15px;transform:translateY(-50%);border:15px solid #000;width:200px;height:600px;text-align:center}.small-listing{width:90%;height:50px;margin:10px auto;display:flex}.small-listing-image{width:40px;height:40px;border:1px solid #000}.small-listing-details{width:calc(100% - 40px);font-family:Comic Sans MS,sans-serif;display:flex;justify-content:center;align-items:center}
		</style>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
`

export default page;