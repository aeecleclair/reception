(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{6099:function(e,r,t){Promise.resolve().then(t.bind(t,5153))},5153:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return y}});var a=t(7437),n=t(1729),s=t(9733),i=t(8185),l=t(9888),o=t(8087),d=t(6463),c=t(2265),u=t(9099),f=t(9291);let m=(0,u.Ue)()((0,f.mW)((0,f.tJ)(e=>({codeVerifier:void 0,setCodeVerifier:r=>{e({codeVerifier:r,isLoading:!0})},resetCodeVerifier:()=>{e({codeVerifier:void 0,isLoading:!1})},isLoading:!1}),{name:"raid-code-verifier-storage"})));var p=t(7061),h=t(6535),x=t(4032),g=()=>{let e=(0,d.useRouter)(),[r,t]=(0,c.useState)(!1),{setCodeVerifier:n,codeVerifier:s}=m(),i=(0,d.useSearchParams)().get("code"),l=new URL("https://hyperion.dev.eclair.ec-lyon.fr/"),{token:o,setToken:u,setRefreshToken:f}=(0,p.u)();async function g(){return h.FC(l,{algorithm:"oauth2"}).then(e=>h.hS(l,e))}let y="https://rentree.myecl.fr/login",v={client_id:"Siarnaq",token_endpoint_auth_method:"none"};async function N(e){var r;t(!0);let a=await g(),n=h.S7(a,v,e,h.ey);if(h.BR(n))throw Error();let i=await h.Oy(a,v,n,y,null!=s?s:""),l=await h.yc(a,v,i);if(h.BR(l))throw t(!1),Error();u(l.access_token),f(null!==(r=l.refresh_token)&&void 0!==r?r:null),t(!1)}async function j(){var r;let t=await g(),a=h.g();n(a);let s=await h.Di(a),i=new URL(t.authorization_endpoint);if(i.searchParams.set("client_id",v.client_id),i.searchParams.set("redirect_uri",y),i.searchParams.set("response_type","code"),i.searchParams.set("scope","API"),i.searchParams.set("code_challenge",s),i.searchParams.set("code_challenge_method","S256"),(null===(r=t.code_challenge_methods_supported)||void 0===r?void 0:r.includes("S256"))!==!0){let e=h.VA();i.searchParams.set("state",e)}e.push(i.href)}return i&&!r&&s&&(N(new URL(window.location.href)),e.push("/login")),null!==o&&e.push("/"),(0,a.jsx)(x.f,{isLoading:r,onClick:e=>{e.preventDefault(),j()},children:"Se connecter avec MyECL"})},y=()=>{let e=(0,o.useTranslations)("Login"),r=(0,d.useRouter)(),t=new Date().getFullYear(),u=Array.from({length:5}).map((e,r)=>(t-r).toString()),[f,m]=(0,c.useState)(void 0);return(0,a.jsx)("div",{className:"flex [&>div]:w-full h-screen",children:(0,a.jsxs)(i.Zb,{className:"rounded-xl border bg-card text-card-foreground shadow max-w-[700px] m-auto text-zinc-700",children:[(0,a.jsxs)(i.Ol,{children:[(0,a.jsx)(i.ll,{children:e("title",{year:t})}),(0,a.jsx)(i.SZ,{className:"flex flex-col gap-2",children:(0,a.jsx)("span",{children:e("description")})})]}),(0,a.jsxs)(i.aY,{className:"flex flex-col gap-4",children:[(0,a.jsx)("span",{className:"m-auto",children:e("alreadyHaveMyECLAccount")}),(0,a.jsx)("form",{children:(0,a.jsx)("div",{className:"grid w-full items-center gap-4",children:(0,a.jsx)(g,{})})}),(0,a.jsx)(n.S,{text:e("or")}),(0,a.jsx)("span",{className:"m-auto",children:e("selectPromotion")}),(0,a.jsx)("div",{className:"h-full gap-4 flex flex-col",children:(0,a.jsxs)(l.Ph,{value:f,onValueChange:m,children:[(0,a.jsx)(l.i4,{className:"w-full m-auto",children:(0,a.jsx)(l.ki,{})}),(0,a.jsx)(l.Bw,{children:(0,a.jsx)(l.DI,{children:u.map(r=>(0,a.jsx)(l.Ql,{value:r,children:e("promotion",{year:t})},r))})})]})},"curriculum"),f&&(0,a.jsx)(s.z,{variant:"outline",size:"lg",className:"w-full m-auto",onClick:()=>{let e="https://hyperion.dev.eclair.ec-lyon.fr//calypsso/register";f===u[0]&&(e+="?external=true"),r.push(e)},children:e("register")})]})]})})}},4032:function(e,r,t){"use strict";t.d(r,{f:function(){return i}});var a=t(7437),n=t(9733),s=t(4867);let i=e=>{let{isLoading:r,type:t,onClick:i,children:l,className:o,disabled:d,variant:c="default",size:u="default"}=e;return(0,a.jsx)(n.z,{variant:c,type:t,onClick:i,className:o,disabled:r||d,size:u,children:r?(0,a.jsx)(s.BGW,{className:"h-4 w-4 animate-spin"}):l})}},1729:function(e,r,t){"use strict";t.d(r,{S:function(){return n}});var a=t(7437);t(2265);let n=e=>{let{text:r}=e;return(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("div",{className:"absolute inset-0 flex items-center",children:(0,a.jsx)("span",{className:"w-full border-t"})}),(0,a.jsx)("div",{className:"relative flex justify-center text-xs uppercase",children:(0,a.jsx)("span",{className:"bg-background px-2 text-muted-foreground",children:r})})]})};n.displayName="TextSeparator"},9733:function(e,r,t){"use strict";t.d(r,{d:function(){return o},z:function(){return d}});var a=t(7437),n=t(2265),s=t(1538),i=t(2218),l=t(9354);let o=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=n.forwardRef((e,r)=>{let{className:t,variant:n,size:i,asChild:d=!1,...c}=e,u=d?s.g7:"button";return(0,a.jsx)(u,{className:(0,l.cn)(o({variant:n,size:i,className:t})),ref:r,...c})});d.displayName="Button"},8185:function(e,r,t){"use strict";t.d(r,{Ol:function(){return l},SZ:function(){return d},Zb:function(){return i},aY:function(){return c},eW:function(){return u},ll:function(){return o}});var a=t(7437),n=t(2265),s=t(9354);let i=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("div",{ref:r,className:(0,s.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",t),...n})});i.displayName="Card";let l=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("div",{ref:r,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",t),...n})});l.displayName="CardHeader";let o=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("h3",{ref:r,className:(0,s.cn)("text-2xl font-semibold leading-none tracking-tight",t),...n})});o.displayName="CardTitle";let d=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("p",{ref:r,className:(0,s.cn)("text-sm text-muted-foreground",t),...n})});d.displayName="CardDescription";let c=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("div",{ref:r,className:(0,s.cn)("p-6 pt-0",t),...n})});c.displayName="CardContent";let u=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("div",{ref:r,className:(0,s.cn)("flex items-center p-6 pt-0",t),...n})});u.displayName="CardFooter"},9888:function(e,r,t){"use strict";t.d(r,{Bw:function(){return x},DI:function(){return u},Ph:function(){return c},Ql:function(){return g},i4:function(){return m},ki:function(){return f}});var a=t(7437),n=t(2265),s=t(8297),i=t(2421),l=t(4392),o=t(2468),d=t(9354);let c=s.fC,u=s.ZA,f=s.B4,m=n.forwardRef((e,r)=>{let{className:t,children:n,...l}=e;return(0,a.jsxs)(s.xz,{ref:r,className:(0,d.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",t),...l,children:[n,(0,a.jsx)(s.JO,{asChild:!0,children:(0,a.jsx)(i.Z,{className:"h-4 w-4 opacity-50"})})]})});m.displayName=s.xz.displayName;let p=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)(s.u_,{ref:r,className:(0,d.cn)("flex cursor-default items-center justify-center py-1",t),...n,children:(0,a.jsx)(l.Z,{className:"h-4 w-4"})})});p.displayName=s.u_.displayName;let h=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)(s.$G,{ref:r,className:(0,d.cn)("flex cursor-default items-center justify-center py-1",t),...n,children:(0,a.jsx)(i.Z,{className:"h-4 w-4"})})});h.displayName=s.$G.displayName;let x=n.forwardRef((e,r)=>{let{className:t,children:n,position:i="popper",...l}=e;return(0,a.jsx)(s.h_,{children:(0,a.jsxs)(s.VY,{ref:r,className:(0,d.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===i&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",t),position:i,...l,children:[(0,a.jsx)(p,{}),(0,a.jsx)(s.l_,{className:(0,d.cn)("p-1","popper"===i&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:n}),(0,a.jsx)(h,{})]})})});x.displayName=s.VY.displayName,n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)(s.__,{ref:r,className:(0,d.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold",t),...n})}).displayName=s.__.displayName;let g=n.forwardRef((e,r)=>{let{className:t,children:n,...i}=e;return(0,a.jsxs)(s.ck,{ref:r,className:(0,d.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),...i,children:[(0,a.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,a.jsx)(s.wU,{children:(0,a.jsx)(o.Z,{className:"h-4 w-4"})})}),(0,a.jsx)(s.eT,{children:n})]})});g.displayName=s.ck.displayName,n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)(s.Z0,{ref:r,className:(0,d.cn)("-mx-1 my-1 h-px bg-muted",t),...n})}).displayName=s.Z0.displayName},9354:function(e,r,t){"use strict";t.d(r,{cn:function(){return s}});var a=t(4839),n=t(6164);function s(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,n.m6)((0,a.W)(r))}},7061:function(e,r,t){"use strict";t.d(r,{u:function(){return s}});var a=t(9099),n=t(9291);let s=(0,a.Ue)()((0,n.mW)((0,n.tJ)(e=>({token:null,refreshToken:null,userId:null,setToken:r=>{let t=r?JSON.parse(atob(r.split(".")[1])).sub:null;e({token:r,userId:t})},setRefreshToken:r=>{e({refreshToken:r})}}),{name:"token-storage"})))}},function(e){e.O(0,[310,8,622,971,23,744],function(){return e(e.s=6099)}),_N_E=e.O()}]);