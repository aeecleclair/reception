(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{2612:function(e,t,r){"use strict";function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}r.d(t,{default:function(){return a}});var s=r(2265),i=r(4480);function a(e){let{locale:t,...r}=e;if(!t)throw Error("Failed to determine locale in `NextIntlClientProvider`, please provide the `locale` prop explicitly.\n\nSee https://next-intl-docs.vercel.app/docs/configuration#locale");return s.createElement(i.IntlProvider,n({locale:t},r))}},4671:function(e){e.exports={style:{fontFamily:"'__Inter_36bd41', '__Inter_Fallback_36bd41'",fontStyle:"normal"},className:"__className_36bd41"}},4504:function(e,t,r){"use strict";r.d(t,{Dx:function(){return U},aU:function(){return z},dk:function(){return Y},fC:function(){return $},l_:function(){return X},x8:function(){return B},zt:function(){return G}});var n=r(2988),s=r(2265),i=r(4887),a=r(8149),o=r(1584),u=r(976),l=r(8324),c=r(3938),d=r(6935),h=r(1383),f=r(5171),p=r(3440),m=r(1715),y=r(1336),v=r(1725);let w="ToastProvider",[g,E,b]=(0,u.B)("Toast"),[C,T]=(0,l.b)("Toast",[b]),[P,x]=C(w),D=e=>{let{__scopeToast:t,label:r="Notification",duration:n=5e3,swipeDirection:i="right",swipeThreshold:a=50,children:o}=e,[u,l]=(0,s.useState)(null),[c,d]=(0,s.useState)(0),h=(0,s.useRef)(!1),f=(0,s.useRef)(!1);return(0,s.createElement)(g.Provider,{scope:t},(0,s.createElement)(P,{scope:t,label:r,duration:n,swipeDirection:i,swipeThreshold:a,toastCount:c,viewport:u,onViewportChange:l,onToastAdd:(0,s.useCallback)(()=>d(e=>e+1),[]),onToastRemove:(0,s.useCallback)(()=>d(e=>e-1),[]),isFocusedToastEscapeKeyDownRef:h,isClosePausedRef:f},o))};D.propTypes={label:e=>e.label&&"string"==typeof e.label&&!e.label.trim()?Error(`Invalid prop \`label\` supplied to \`${w}\`. Expected non-empty \`string\`.`):null};let R=["F8"],q="toast.viewportPause",M="toast.viewportResume",O=(0,s.forwardRef)((e,t)=>{let{__scopeToast:r,hotkey:i=R,label:a="Notifications ({hotkey})",...u}=e,l=x("ToastViewport",r),d=E(r),h=(0,s.useRef)(null),p=(0,s.useRef)(null),m=(0,s.useRef)(null),y=(0,s.useRef)(null),v=(0,o.e)(t,y,l.onViewportChange),w=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),b=l.toastCount>0;(0,s.useEffect)(()=>{let e=e=>{var t;i.every(t=>e[t]||e.code===t)&&(null===(t=y.current)||void 0===t||t.focus())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[i]),(0,s.useEffect)(()=>{let e=h.current,t=y.current;if(b&&e&&t){let r=()=>{if(!l.isClosePausedRef.current){let e=new CustomEvent(q);t.dispatchEvent(e),l.isClosePausedRef.current=!0}},n=()=>{if(l.isClosePausedRef.current){let e=new CustomEvent(M);t.dispatchEvent(e),l.isClosePausedRef.current=!1}},s=t=>{e.contains(t.relatedTarget)||n()},i=()=>{e.contains(document.activeElement)||n()};return e.addEventListener("focusin",r),e.addEventListener("focusout",s),e.addEventListener("pointermove",r),e.addEventListener("pointerleave",i),window.addEventListener("blur",r),window.addEventListener("focus",n),()=>{e.removeEventListener("focusin",r),e.removeEventListener("focusout",s),e.removeEventListener("pointermove",r),e.removeEventListener("pointerleave",i),window.removeEventListener("blur",r),window.removeEventListener("focus",n)}}},[b,l.isClosePausedRef]);let C=(0,s.useCallback)(({tabbingDirection:e})=>{let t=d().map(t=>{let r=t.ref.current,n=[r,...function(e){let t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t}(r)];return"forwards"===e?n:n.reverse()});return("forwards"===e?t.reverse():t).flat()},[d]);return(0,s.useEffect)(()=>{let e=y.current;if(e){let t=t=>{let r=t.altKey||t.ctrlKey||t.metaKey;if("Tab"===t.key&&!r){var n,s,i;let r=document.activeElement,a=t.shiftKey;if(t.target===e&&a){null===(n=p.current)||void 0===n||n.focus();return}let o=C({tabbingDirection:a?"backwards":"forwards"}),u=o.findIndex(e=>e===r);j(o.slice(u+1))?t.preventDefault():a?null===(s=p.current)||void 0===s||s.focus():null===(i=m.current)||void 0===i||i.focus()}};return e.addEventListener("keydown",t),()=>e.removeEventListener("keydown",t)}},[d,C]),(0,s.createElement)(c.I0,{ref:h,role:"region","aria-label":a.replace("{hotkey}",w),tabIndex:-1,style:{pointerEvents:b?void 0:"none"}},b&&(0,s.createElement)(_,{ref:p,onFocusFromOutsideViewport:()=>{j(C({tabbingDirection:"forwards"}))}}),(0,s.createElement)(g.Slot,{scope:r},(0,s.createElement)(f.WV.ol,(0,n.Z)({tabIndex:-1},u,{ref:v}))),b&&(0,s.createElement)(_,{ref:m,onFocusFromOutsideViewport:()=>{j(C({tabbingDirection:"backwards"}))}}))}),_=(0,s.forwardRef)((e,t)=>{let{__scopeToast:r,onFocusFromOutsideViewport:i,...a}=e,o=x("ToastFocusProxy",r);return(0,s.createElement)(v.T,(0,n.Z)({"aria-hidden":!0,tabIndex:0},a,{ref:t,style:{position:"fixed"},onFocus:e=>{var t;let r=e.relatedTarget;null!==(t=o.viewport)&&void 0!==t&&t.contains(r)||i()}}))}),F="Toast",S=(0,s.forwardRef)((e,t)=>{let{forceMount:r,open:i,defaultOpen:o,onOpenChange:u,...l}=e,[c=!0,d]=(0,m.T)({prop:i,defaultProp:o,onChange:u});return(0,s.createElement)(h.z,{present:r||c},(0,s.createElement)(k,(0,n.Z)({open:c},l,{ref:t,onClose:()=>d(!1),onPause:(0,p.W)(e.onPause),onResume:(0,p.W)(e.onResume),onSwipeStart:(0,a.M)(e.onSwipeStart,e=>{e.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:(0,a.M)(e.onSwipeMove,e=>{let{x:t,y:r}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","move"),e.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${t}px`),e.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${r}px`)}),onSwipeCancel:(0,a.M)(e.onSwipeCancel,e=>{e.currentTarget.setAttribute("data-swipe","cancel"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:(0,a.M)(e.onSwipeEnd,e=>{let{x:t,y:r}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","end"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${t}px`),e.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${r}px`),d(!1)})})))}),[A,Q]=C(F,{onClose(){}}),k=(0,s.forwardRef)((e,t)=>{let{__scopeToast:r,type:u="foreground",duration:l,open:d,onClose:h,onEscapeKeyDown:m,onPause:y,onResume:v,onSwipeStart:w,onSwipeMove:E,onSwipeCancel:b,onSwipeEnd:C,...T}=e,P=x(F,r),[D,R]=(0,s.useState)(null),O=(0,o.e)(t,e=>R(e)),_=(0,s.useRef)(null),S=(0,s.useRef)(null),Q=l||P.duration,k=(0,s.useRef)(0),K=(0,s.useRef)(Q),L=(0,s.useRef)(0),{onToastAdd:N,onToastRemove:V}=P,Z=(0,p.W)(()=>{var e;(null==D?void 0:D.contains(document.activeElement))&&(null===(e=P.viewport)||void 0===e||e.focus()),h()}),j=(0,s.useCallback)(e=>{e&&e!==1/0&&(window.clearTimeout(L.current),k.current=new Date().getTime(),L.current=window.setTimeout(Z,e))},[Z]);(0,s.useEffect)(()=>{let e=P.viewport;if(e){let t=()=>{j(K.current),null==v||v()},r=()=>{let e=new Date().getTime()-k.current;K.current=K.current-e,window.clearTimeout(L.current),null==y||y()};return e.addEventListener(q,r),e.addEventListener(M,t),()=>{e.removeEventListener(q,r),e.removeEventListener(M,t)}}},[P.viewport,Q,y,v,j]),(0,s.useEffect)(()=>{d&&!P.isClosePausedRef.current&&j(Q)},[d,Q,P.isClosePausedRef,j]),(0,s.useEffect)(()=>(N(),()=>V()),[N,V]);let G=(0,s.useMemo)(()=>D?function e(t){let r=[];return Array.from(t.childNodes).forEach(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent&&r.push(t.textContent),t.nodeType===t.ELEMENT_NODE){let n=t.ariaHidden||t.hidden||"none"===t.style.display,s=""===t.dataset.radixToastAnnounceExclude;if(!n){if(s){let e=t.dataset.radixToastAnnounceAlt;e&&r.push(e)}else r.push(...e(t))}}}),r}(D):null,[D]);return P.viewport?(0,s.createElement)(s.Fragment,null,G&&(0,s.createElement)(I,{__scopeToast:r,role:"status","aria-live":"foreground"===u?"assertive":"polite","aria-atomic":!0},G),(0,s.createElement)(A,{scope:r,onClose:Z},(0,i.createPortal)((0,s.createElement)(g.ItemSlot,{scope:r},(0,s.createElement)(c.fC,{asChild:!0,onEscapeKeyDown:(0,a.M)(m,()=>{P.isFocusedToastEscapeKeyDownRef.current||Z(),P.isFocusedToastEscapeKeyDownRef.current=!1})},(0,s.createElement)(f.WV.li,(0,n.Z)({role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":d?"open":"closed","data-swipe-direction":P.swipeDirection},T,{ref:O,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:(0,a.M)(e.onKeyDown,e=>{"Escape"!==e.key||(null==m||m(e.nativeEvent),e.nativeEvent.defaultPrevented||(P.isFocusedToastEscapeKeyDownRef.current=!0,Z()))}),onPointerDown:(0,a.M)(e.onPointerDown,e=>{0===e.button&&(_.current={x:e.clientX,y:e.clientY})}),onPointerMove:(0,a.M)(e.onPointerMove,e=>{if(!_.current)return;let t=e.clientX-_.current.x,r=e.clientY-_.current.y,n=!!S.current,s=["left","right"].includes(P.swipeDirection),i=["left","up"].includes(P.swipeDirection)?Math.min:Math.max,a=s?i(0,t):0,o=s?0:i(0,r),u="touch"===e.pointerType?10:2,l={x:a,y:o},c={originalEvent:e,delta:l};n?(S.current=l,H("toast.swipeMove",E,c,{discrete:!1})):W(l,P.swipeDirection,u)?(S.current=l,H("toast.swipeStart",w,c,{discrete:!1}),e.target.setPointerCapture(e.pointerId)):(Math.abs(t)>u||Math.abs(r)>u)&&(_.current=null)}),onPointerUp:(0,a.M)(e.onPointerUp,e=>{let t=S.current,r=e.target;if(r.hasPointerCapture(e.pointerId)&&r.releasePointerCapture(e.pointerId),S.current=null,_.current=null,t){let r=e.currentTarget,n={originalEvent:e,delta:t};W(t,P.swipeDirection,P.swipeThreshold)?H("toast.swipeEnd",C,n,{discrete:!0}):H("toast.swipeCancel",b,n,{discrete:!0}),r.addEventListener("click",e=>e.preventDefault(),{once:!0})}})})))),P.viewport))):null});k.propTypes={type:e=>e.type&&!["foreground","background"].includes(e.type)?Error(`Invalid prop \`type\` supplied to \`${F}\`. Expected \`foreground | background\`.`):null};let I=e=>{let{__scopeToast:t,children:r,...n}=e,i=x(F,t),[a,o]=(0,s.useState)(!1),[u,l]=(0,s.useState)(!1);return function(e=()=>{}){let t=(0,p.W)(e);(0,y.b)(()=>{let e=0,r=0;return e=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(e),window.cancelAnimationFrame(r)}},[t])}(()=>o(!0)),(0,s.useEffect)(()=>{let e=window.setTimeout(()=>l(!0),1e3);return()=>window.clearTimeout(e)},[]),u?null:(0,s.createElement)(d.h,{asChild:!0},(0,s.createElement)(v.T,n,a&&(0,s.createElement)(s.Fragment,null,i.label," ",r)))},K=(0,s.forwardRef)((e,t)=>{let{__scopeToast:r,...i}=e;return(0,s.createElement)(f.WV.div,(0,n.Z)({},i,{ref:t}))}),L=(0,s.forwardRef)((e,t)=>{let{__scopeToast:r,...i}=e;return(0,s.createElement)(f.WV.div,(0,n.Z)({},i,{ref:t}))}),N=(0,s.forwardRef)((e,t)=>{let{altText:r,...i}=e;return r?(0,s.createElement)(Z,{altText:r,asChild:!0},(0,s.createElement)(V,(0,n.Z)({},i,{ref:t}))):null});N.propTypes={altText:e=>e.altText?null:Error("Missing prop `altText` expected on `ToastAction`")};let V=(0,s.forwardRef)((e,t)=>{let{__scopeToast:r,...i}=e,o=Q("ToastClose",r);return(0,s.createElement)(Z,{asChild:!0},(0,s.createElement)(f.WV.button,(0,n.Z)({type:"button"},i,{ref:t,onClick:(0,a.M)(e.onClick,o.onClose)})))}),Z=(0,s.forwardRef)((e,t)=>{let{__scopeToast:r,altText:i,...a}=e;return(0,s.createElement)(f.WV.div,(0,n.Z)({"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":i||void 0},a,{ref:t}))});function H(e,t,r,{discrete:n}){let s=r.originalEvent.currentTarget,i=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:r});t&&s.addEventListener(e,t,{once:!0}),n?(0,f.jH)(s,i):s.dispatchEvent(i)}let W=(e,t,r=0)=>{let n=Math.abs(e.x),s=Math.abs(e.y),i=n>s;return"left"===t||"right"===t?i&&n>r:!i&&s>r};function j(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}let G=D,X=O,$=S,U=K,Y=L,z=N,B=V},8699:function(e,t,r){"use strict";r.d(t,{S:function(){return y}});var n=r(6298),s=r(2459),i=r(9948),a=r(9010),o=class extends a.l{constructor(e={}){super(),this.config=e,this.#e=new Map}#e;build(e,t,r){let i=t.queryKey,a=t.queryHash??(0,n.Rm)(i,t),o=this.get(a);return o||(o=new s.A({cache:this,queryKey:i,queryHash:a,options:e.defaultQueryOptions(t),state:r,defaultOptions:e.getQueryDefaults(i)}),this.add(o)),o}add(e){this.#e.has(e.queryHash)||(this.#e.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){let t=this.#e.get(e.queryHash);t&&(e.destroy(),t===e&&this.#e.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){i.V.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#e.get(e)}getAll(){return[...this.#e.values()]}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,n._x)(t,e))}findAll(e={}){let t=this.getAll();return Object.keys(e).length>0?t.filter(t=>(0,n._x)(e,t)):t}notify(e){i.V.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){i.V.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){i.V.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},u=r(3494),l=r(924),c=class extends u.F{#t;#r;#n;constructor(e){super(),this.mutationId=e.mutationId,this.#r=e.mutationCache,this.#t=[],this.state=e.state||{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0},this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){this.#t.includes(e)||(this.#t.push(e),this.clearGcTimeout(),this.#r.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.#t=this.#t.filter(t=>t!==e),this.scheduleGc(),this.#r.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.#t.length||("pending"===this.state.status?this.scheduleGc():this.#r.remove(this))}continue(){return this.#n?.continue()??this.execute(this.state.variables)}async execute(e){this.#n=(0,l.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(Error("No mutationFn found")),onFail:(e,t)=>{this.#s({type:"failed",failureCount:e,error:t})},onPause:()=>{this.#s({type:"pause"})},onContinue:()=>{this.#s({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#r.canRun(this)});let t="pending"===this.state.status,r=!this.#n.canStart();try{if(!t){this.#s({type:"pending",variables:e,isPaused:r}),await this.#r.config.onMutate?.(e,this);let t=await this.options.onMutate?.(e);t!==this.state.context&&this.#s({type:"pending",context:t,variables:e,isPaused:r})}let n=await this.#n.start();return await this.#r.config.onSuccess?.(n,e,this.state.context,this),await this.options.onSuccess?.(n,e,this.state.context),await this.#r.config.onSettled?.(n,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(n,null,e,this.state.context),this.#s({type:"success",data:n}),n}catch(t){try{throw await this.#r.config.onError?.(t,e,this.state.context,this),await this.options.onError?.(t,e,this.state.context),await this.#r.config.onSettled?.(void 0,t,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,t,e,this.state.context),t}finally{this.#s({type:"error",error:t})}}finally{this.#r.runNext(this)}}#s(e){this.state=(t=>{switch(e.type){case"failed":return{...t,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...t,isPaused:!0};case"continue":return{...t,isPaused:!1};case"pending":return{...t,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...t,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...t,data:void 0,error:e.error,failureCount:t.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}})(this.state),i.V.batch(()=>{this.#t.forEach(t=>{t.onMutationUpdate(e)}),this.#r.notify({mutation:this,type:"updated",action:e})})}},d=class extends a.l{constructor(e={}){super(),this.config=e,this.#i=new Map,this.#a=Date.now()}#i;#a;build(e,t,r){let n=new c({mutationCache:this,mutationId:++this.#a,options:e.defaultMutationOptions(t),state:r});return this.add(n),n}add(e){let t=h(e),r=this.#i.get(t)??[];r.push(e),this.#i.set(t,r),this.notify({type:"added",mutation:e})}remove(e){let t=h(e);if(this.#i.has(t)){let r=this.#i.get(t)?.filter(t=>t!==e);r&&(0===r.length?this.#i.delete(t):this.#i.set(t,r))}this.notify({type:"removed",mutation:e})}canRun(e){let t=this.#i.get(h(e))?.find(e=>"pending"===e.state.status);return!t||t===e}runNext(e){let t=this.#i.get(h(e))?.find(t=>t!==e&&t.state.isPaused);return t?.continue()??Promise.resolve()}clear(){i.V.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}getAll(){return[...this.#i.values()].flat()}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,n.X7)(t,e))}findAll(e={}){return this.getAll().filter(t=>(0,n.X7)(e,t))}notify(e){i.V.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){let e=this.getAll().filter(e=>e.state.isPaused);return i.V.batch(()=>Promise.all(e.map(e=>e.continue().catch(n.ZT))))}};function h(e){return e.options.scope?.id??String(e.mutationId)}var f=r(4939),p=r(9937);function m(e,{pages:t,pageParams:r}){let n=t.length-1;return e.getNextPageParam(t[n],t,r[n],r)}var y=class{#o;#r;#u;#l;#c;#d;#h;#f;constructor(e={}){this.#o=e.queryCache||new o,this.#r=e.mutationCache||new d,this.#u=e.defaultOptions||{},this.#l=new Map,this.#c=new Map,this.#d=0}mount(){this.#d++,1===this.#d&&(this.#h=f.j.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#o.onFocus())}),this.#f=p.N.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#o.onOnline())}))}unmount(){this.#d--,0===this.#d&&(this.#h?.(),this.#h=void 0,this.#f?.(),this.#f=void 0)}isFetching(e){return this.#o.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#r.findAll({...e,status:"pending"}).length}getQueryData(e){let t=this.defaultQueryOptions({queryKey:e});return this.#o.get(t.queryHash)?.state.data}ensureQueryData(e){let t=this.getQueryData(e.queryKey);if(void 0===t)return this.fetchQuery(e);{let r=this.defaultQueryOptions(e),s=this.#o.build(this,r);return e.revalidateIfStale&&s.isStaleByTime((0,n.KC)(r.staleTime,s))&&this.prefetchQuery(r),Promise.resolve(t)}}getQueriesData(e){return this.#o.findAll(e).map(({queryKey:e,state:t})=>[e,t.data])}setQueryData(e,t,r){let s=this.defaultQueryOptions({queryKey:e}),i=this.#o.get(s.queryHash),a=i?.state.data,o=(0,n.SE)(t,a);if(void 0!==o)return this.#o.build(this,s).setData(o,{...r,manual:!0})}setQueriesData(e,t,r){return i.V.batch(()=>this.#o.findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,r)]))}getQueryState(e){let t=this.defaultQueryOptions({queryKey:e});return this.#o.get(t.queryHash)?.state}removeQueries(e){let t=this.#o;i.V.batch(()=>{t.findAll(e).forEach(e=>{t.remove(e)})})}resetQueries(e,t){let r=this.#o,n={type:"active",...e};return i.V.batch(()=>(r.findAll(e).forEach(e=>{e.reset()}),this.refetchQueries(n,t)))}cancelQueries(e={},t={}){let r={revert:!0,...t};return Promise.all(i.V.batch(()=>this.#o.findAll(e).map(e=>e.cancel(r)))).then(n.ZT).catch(n.ZT)}invalidateQueries(e={},t={}){return i.V.batch(()=>{if(this.#o.findAll(e).forEach(e=>{e.invalidate()}),"none"===e.refetchType)return Promise.resolve();let r={...e,type:e.refetchType??e.type??"active"};return this.refetchQueries(r,t)})}refetchQueries(e={},t){let r={...t,cancelRefetch:t?.cancelRefetch??!0};return Promise.all(i.V.batch(()=>this.#o.findAll(e).filter(e=>!e.isDisabled()).map(e=>{let t=e.fetch(void 0,r);return r.throwOnError||(t=t.catch(n.ZT)),"paused"===e.state.fetchStatus?Promise.resolve():t}))).then(n.ZT)}fetchQuery(e){let t=this.defaultQueryOptions(e);void 0===t.retry&&(t.retry=!1);let r=this.#o.build(this,t);return r.isStaleByTime((0,n.KC)(t.staleTime,r))?r.fetch(t):Promise.resolve(r.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(n.ZT).catch(n.ZT)}fetchInfiniteQuery(e){var t;return e.behavior=(t=e.pages,{onFetch:(e,r)=>{let s=async()=>{let r;let s=e.options,i=e.fetchOptions?.meta?.fetchMore?.direction,a=e.state.data?.pages||[],o=e.state.data?.pageParams||[],u=!1,l=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(e.signal.aborted?u=!0:e.signal.addEventListener("abort",()=>{u=!0}),e.signal)})},c=(0,n.cG)(e.options,e.fetchOptions),d=async(t,r,s)=>{if(u)return Promise.reject();if(null==r&&t.pages.length)return Promise.resolve(t);let i={queryKey:e.queryKey,pageParam:r,direction:s?"backward":"forward",meta:e.options.meta};l(i);let a=await c(i),{maxPages:o}=e.options,d=s?n.Ht:n.VX;return{pages:d(t.pages,a,o),pageParams:d(t.pageParams,r,o)}};if(i&&a.length){let e="backward"===i,t={pages:a,pageParams:o},n=(e?function(e,{pages:t,pageParams:r}){return e.getPreviousPageParam?.(t[0],t,r[0],r)}:m)(s,t);r=await d(t,n,e)}else{r=await d({pages:[],pageParams:[]},o[0]??s.initialPageParam);let e=t??a.length;for(let t=1;t<e;t++){let e=m(s,r);r=await d(r,e)}}return r};e.options.persister?e.fetchFn=()=>e.options.persister?.(s,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},r):e.fetchFn=s}}),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(n.ZT).catch(n.ZT)}resumePausedMutations(){return p.N.isOnline()?this.#r.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#o}getMutationCache(){return this.#r}getDefaultOptions(){return this.#u}setDefaultOptions(e){this.#u=e}setQueryDefaults(e,t){this.#l.set((0,n.Ym)(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){let t=[...this.#l.values()],r={};return t.forEach(t=>{(0,n.to)(e,t.queryKey)&&(r={...r,...t.defaultOptions})}),r}setMutationDefaults(e,t){this.#c.set((0,n.Ym)(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){let t=[...this.#c.values()],r={};return t.forEach(t=>{(0,n.to)(e,t.mutationKey)&&(r={...r,...t.defaultOptions})}),r}defaultQueryOptions(e){if(e._defaulted)return e;let t={...this.#u.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=(0,n.Rm)(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.throwOnError&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),!0!==t.enabled&&t.queryFn===n.CN&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#u.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#o.clear(),this.#r.clear()}}}}]);