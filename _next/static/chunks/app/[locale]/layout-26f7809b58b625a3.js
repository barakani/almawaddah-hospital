(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[203],{7715:function(e,a,r){var t={"./ar.json":[1340,340],"./en.json":[759,759]};function s(e){if(!r.o(t,e))return Promise.resolve().then(function(){var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a});var a=t[e],s=a[0];return r.e(a[1]).then(function(){return r.t(s,19)})}s.keys=function(){return Object.keys(t)},s.id=7715,e.exports=s},9334:function(e,a,r){Promise.resolve().then(r.bind(r,2268)),Promise.resolve().then(r.bind(r,4436)),Promise.resolve().then(r.t.bind(r,1082,23)),Promise.resolve().then(r.t.bind(r,3048,23)),Promise.resolve().then(r.t.bind(r,141,23)),Promise.resolve().then(r.t.bind(r,1565,23)),Promise.resolve().then(r.bind(r,1004)),Promise.resolve().then(r.bind(r,5559)),Promise.resolve().then(r.bind(r,8609)),Promise.resolve().then(r.bind(r,3036)),Promise.resolve().then(r.bind(r,9637))},1004:function(e,a,r){"use strict";r.d(a,{default:function(){return l}});var t=r(5960),s=r(8993);function l(e){let{messages:a,locale:r,children:l,now:n,timeZone:i}=e;return(0,t.jsx)(s.NextIntlClientProvider,{locale:r,messages:a,now:n,timeZone:i,children:l})}},5559:function(e,a,r){"use strict";r.d(a,{ThemeProvider:function(){return l}});var t=r(5960);r(609);var s=r(7053);function l(e){let{children:a,...r}=e;return(0,t.jsx)(s.f,{...r,children:a})}},3036:function(e,a,r){"use strict";r.d(a,{default:function(){return T}});var t=r(5960),s=r(609),l=r(4698),n=r(9175),i=r(3667),d=r(876),o=r(1334),c=r(1703);(0,r(9590).cF)(async e=>{let{locale:a}=e;return{messages:(await r(7715)("./".concat(a,".json"))).default,timeZone:"Asia/Aden"}});let m=["en","ar"],h={en:"English",ar:"العربية"};var x=r(3576),u=r(8993);function p(){let e=(0,u.useLocale)(),a=(0,c.tv)(),r=(0,c.jD)(),s=(0,x.useParams)();return(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"lang"}),(0,t.jsx)("select",{id:"lang",value:e,onChange:e=>{a.replace({pathname:r,params:s},{locale:e.target.value})},className:"form-select rounded-full bg-transparent border-0 border-transparent",children:m.map(e=>(0,t.jsx)("option",{id:e,value:e,children:h[e]},e))})]})}var g=r(3396),f=r(8544),v=r(7053);let j=()=>{let[e,a]=(0,s.useState)(!1),{theme:r,setTheme:l}=(0,v.F)();return((0,s.useEffect)(()=>{a(!0)},[]),e)?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("button",{id:"alb","aria-label":"labeldiv","aria-labelledby":"labeldiv",name:"labeldiv",className:"w-fit  rounded-md hover:scale-110 active:scale-100  ",onClick:()=>l("dark"===r?"light":"dark"),children:"light"===r?(0,t.jsx)(w,{}):(0,t.jsx)(b,{})})}):null};function w(){return(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"h-5 fill-black",children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z",clipRule:"evenodd"})})}function b(e){return(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:" h-5 fill-white",children:(0,t.jsx)("path",{d:"M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"})})}var y=r(2879),N=r(8181),k=r(1083),C=r(7480);function P(){let e=(0,u.useTranslations)("Mawada");return(0,t.jsx)(y.J,{className:"dark:hover:text-primaryLight relative uppercase transition hover:text-mawada md:px-4",children:()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(y.J.Button,{children:(0,t.jsx)("span",{className:"uppercase",children:e("departments")})}),(0,t.jsx)(y.J.Overlay,{className:"fixed inset-0 opacity-30"}),(0,t.jsx)(N.u,{as:s.Fragment,enter:"transition ease-out duration-200",enterFrom:"opacity-0 translate-y-1",enterTo:"opacity-100 translate-y-0",leave:"transition ease-in duration-150",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-1",children:(0,t.jsx)(y.J.Panel,{className:"absolute z-10 mt-3 w-screen max-w-sm  -translate-x-1/2  transform bg-white/80 px-4 shadow-gray-600/5 backdrop-blur ltr:left-1/2 rtl:left-1/2 dark:bg-gray-800/80 dark:text-white sm:px-0 lg:max-w-5xl",children:(0,t.jsx)("div",{className:"overflow-hidden rounded-lg  shadow-lg ring-1 ring-black/5",children:(0,t.jsx)("div",{className:"relative grid gap-8  p-7 lg:grid-cols-3",children:g.x.map(a=>(0,t.jsx)(c.rU,{href:{pathname:"/departments/[slug]",params:{slug:a.slug}},children:(0,t.jsxs)(y.J.Button,{as:"div",className:"-m-3 flex items-center rounded-lg border-2 border-transparent p-2 text-gray-900 transition duration-150 ease-in-out hover:border-2  hover:border-mawada hover:text-mawada focus:outline-none focus-visible:ring focus-visible:ring-teal-500/50 dark:hover:border-white dark:hover:text-white",children:[(0,t.jsx)("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12",children:(0,t.jsx)(a.icon,{"aria-hidden":"true",fill:a.color,bg:"#f8fafc"})}),(0,t.jsxs)("div",{className:"ms-4",children:[(0,t.jsx)("p",{className:"text-sm font-medium dark:text-white   ",children:e(a.name)}),(0,t.jsx)("p",{className:"text-sm text-gray-500 hidden",children:a.info})]})]})},a.name))})})})})]})})}let M=[{name:"إحجز موعد الان",href:"#",icon:k.Z},{name:"مزيد من المعلومات",href:"/opd",icon:C.Z}];function z(){let e=(0,u.useTranslations)("Mawada");return(0,t.jsx)(y.J,{className:"dark:hover:text-primaryLight relative  uppercase transition hover:text-mawada md:px-4",children:a=>{let{open:r}=a;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(y.J.Button,{className:"\n                ".concat(r?"text-mawada/90":""),children:(0,t.jsx)("span",{className:"uppercase",children:e("opd")})}),(0,t.jsx)(y.J.Overlay,{className:"fixed inset-0 opacity-30"}),(0,t.jsx)(N.u,{as:s.Fragment,enter:"transition ease-out duration-200",enterFrom:"opacity-0 translate-y-1",enterTo:"opacity-100 translate-y-0",leave:"transition ease-in duration-150",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-1",children:(0,t.jsx)(y.J.Panel,{static:!0,focus:!0,className:"absolute z-10 mt-3 w-screen max-w-sm  -translate-x-1/2  transform bg-white px-4 shadow-gray-600/5 backdrop-blur ltr:left-1/2 rtl:left-1/2 dark:bg-gray-800/80 dark:text-white sm:px-0 lg:max-w-5xl",children:(0,t.jsxs)("div",{className:"overflow-hidden rounded-lg  shadow-lg ring-1 ring-black/5",children:[" ",(0,t.jsx)("div",{className:"relative grid gap-8  p-7 lg:grid-cols-3",children:f.Z.map(a=>(0,t.jsx)(c.rU,{href:{pathname:"/opd/[slug]",params:{slug:a.slug}},children:(0,t.jsxs)(y.J.Button,{as:"div",className:"-m-3 flex items-center rounded-lg border-2 border-transparent p-2 text-gray-900 transition duration-150 ease-in-out hover:border-2  hover:border-mawada hover:text-mawada focus:outline-none focus-visible:ring focus-visible:ring-teal-500/50 dark:hover:border-white dark:hover:text-white",children:[(0,t.jsx)("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12",children:(0,t.jsx)(a.icon,{"aria-hidden":"true",fill:a.color,bg:"#f8fafc"})}),(0,t.jsxs)("div",{className:"ms-4",children:[(0,t.jsx)("p",{className:"text-sm font-medium dark:text-white   ",children:e(a.name)}),(0,t.jsx)("p",{className:"text-sm text-gray-500 hidden",children:a.info})]})]})},a.name))}),(0,t.jsx)("div",{className:"grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50",children:M.map(e=>(0,t.jsxs)(c.rU,{href:{pathname:"/"},className:"flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100",children:[(0,t.jsx)(e.icon,{className:"h-5 w-5 flex-none text-gray-400","aria-hidden":"true"}),e.name]},e.name))})]})})})]})}})}let Z=[{name:"home",href:"/"},{name:"departments",href:"/departments"},{name:"opd",href:"/opd"},{name:"equipments",href:"/equipments"},{name:"partners",href:"/partners"}];var F=function(){let e=(0,u.useTranslations)("Mawada");return(0,t.jsxs)("div",{className:"mb-16 hidden w-full  flex-wrap items-center justify-between space-y-8 rounded-3xl border border-gray-100 bg-white p-6 shadow-2xl shadow-gray-300/20 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none md:flex-nowrap lg:m-0 lg:flex lg:w-9/12 lg:space-y-0 lg:border-0 lg:p-0 lg:shadow-none",children:[(0,t.jsx)("div",{className:"py-2 text-black dark:text-gray-200 lg:pr-4",children:(0,t.jsx)("ul",{className:"text-sm  tracking-wide lg:flex lg:space-y-0 xl:text-base",children:Z.map(a=>"departments"==a.name?(0,t.jsx)("li",{children:(0,t.jsx)(P,{})},a.name):"opd"==a.name?(0,t.jsx)("li",{children:(0,t.jsx)(z,{})},a.name):(0,t.jsx)("li",{children:(0,t.jsx)(c.rU,{href:a.href,className:"hover:text-primary dark:hover:text-primaryLight block uppercase transition md:px-4",children:(0,t.jsx)("span",{children:e(a.name)})})},a.name))})}),(0,t.jsxs)("div",{className:"me-5 flex",children:[(0,t.jsx)("div",{className:" ml-0 hidden w-full  flex-col space-y-2 p-1   px-1 text-black   dark:bg-gray-800  dark:text-white sm:flex-row md:w-max lg:flex lg:space-y-0 ",children:(0,t.jsx)(p,{})}),(0,t.jsx)("div",{className:" hidden   flex-col  space-y-2  rounded-lg px-2  dark:bg-gray-800 sm:flex-row md:w-max lg:flex lg:space-y-0 ",children:(0,t.jsx)(j,{})})]})]})},E=r(9637);function B(){for(var e=arguments.length,a=Array(e),r=0;r<e;r++)a[r]=arguments[r];return a.filter(Boolean).join(" ")}var T=function(e){let[a,r]=(0,s.useState)(!1);function m(){r(!1)}let h=(0,u.useTranslations)("Mawada");return(0,t.jsx)("div",{className:" lg:bg-white/99 lg:sticky left-0 right-0 top-0  z-50 w-full bg-white bg-blend-screen  shadow-lg backdrop-blur  dark:bg-gray-900/80  ",children:(0,t.jsx)("div",{className:"   m-auto px-3 xl:container md:px-0",children:(0,t.jsxs)("div",{className:"top-auto flex flex-wrap items-center justify-between gap-6  md:gap-0 lg:py-2",children:[(0,t.jsxs)("div",{className:"flex w-full items-center justify-between lg:w-auto",children:[(0,t.jsxs)(c.rU,{className:"relative z-10 flex flex-wrap items-center px-2 align-middle ",href:{pathname:"/"},children:[(0,t.jsx)(o.default,{className:"h-16 w-auto",src:E.default,priority:!0,alt:"Logo"}),(0,t.jsxs)("div",{className:"grid grid-flow-row grid-rows-2 gap-0 ps-2 pt-1 text-xs lg:text-sm ",children:[(0,t.jsxs)("span",{className:"relative text-lg font-black text-mawada dark:text-mawada-400 lg:text-xl",children:["مسـتـشـفـى ",(0,t.jsxs)("span",{className:"font-Bold relative text-lg text-mawada dark:text-mawada-400 lg:text-xl",children:[" الـمـودة"," "]})]}),(0,t.jsxs)("span",{className:"font-bold relative text-red-600 dark:text-mawada-red-400 ",children:["Al-Mawaddah ",(0,t.jsxs)("span",{className:"font-bold relative  text-red-600 dark:text-mawada-red-400",children:["Hospital"," "]})]})]})]}),(0,t.jsx)("label",{className:"peer-checked:hamburger relative z-20 -mr-6 block cursor-pointer p-6 lg:hidden",children:(0,t.jsxs)("button",{"data-drawer-target":"default-sidebar","data-drawer-toggle":"default-sidebar","aria-controls":"default-sidebar",type:"button",onClick:()=>r(!0),children:[(0,t.jsx)("div",{"aria-hidden":"true",className:"m-auto h-0.5 w-5 rounded bg-gray-900 transition duration-300 dark:bg-gray-300"}),(0,t.jsx)("div",{"aria-hidden":"true",className:"m-auto mt-2 h-0.5 w-5 rounded bg-gray-900 transition duration-300 dark:bg-gray-300"})]})})]}),(0,t.jsx)(l.V,{as:"div",className:"lg:hidden",open:a,onClose:m,children:(0,t.jsxs)(l.V.Panel,{className:"fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-gray-800 dark:text-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsxs)(c.rU,{href:{pathname:"/"},onClick:m,className:"-m-1.5 ",children:[(0,t.jsx)("span",{className:"sr-only",children:"Your Company"}),(0,t.jsx)(o.default,{className:"h-16 w-auto",src:E.default,priority:!0,alt:"Logo"})]}),(0,t.jsxs)("button",{type:"button",className:"-m-2.5 rounded-md p-2.5 text-gray-700",onClick:()=>r(!1),children:[(0,t.jsx)("span",{className:"sr-only",children:"Close menu"}),(0,t.jsx)(i.Z,{className:"h-6 w-6","aria-hidden":"true"})]})]}),(0,t.jsx)("div",{className:"mt-6 flow-root",children:(0,t.jsxs)("div",{className:"-my-6 divide-y divide-gray-500/10",children:[(0,t.jsx)("div",{className:"space-y-2 py-6",children:Z.map(e=>"departments"==e.name?(0,t.jsx)(n.p,{as:"div",className:"-mx-3",children:e=>{let{open:a}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p.Button,{className:"flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7   hover:bg-mawada hover:text-white",children:[h("departments"),(0,t.jsx)(d.Z,{className:B(a?"rotate-180":"","h-5 w-5 flex-none"),"aria-hidden":"true"})]}),(0,t.jsx)(n.p.Panel,{className:"mt-2 space-y-2",children:[...g.x].map(e=>(0,t.jsx)(c.rU,{href:{pathname:"/departments/[slug]",params:{slug:e.slug}},onClick:m,className:"block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7   hover:bg-mawada hover:text-white",children:(0,t.jsx)("span",{className:" ",children:h(e.name)})},e.name))})]})}},e.name):"opd"==e.name?(0,t.jsx)(n.p,{as:"div",className:"-mx-3",children:e=>{let{open:a}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p.Button,{className:"flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7   hover:bg-mawada hover:text-white",children:[h("opd"),(0,t.jsx)(d.Z,{className:B(a?"rotate-180":"","h-5 w-5 flex-none"),"aria-hidden":"true"})]}),(0,t.jsx)(n.p.Panel,{className:"mt-2 space-y-2",children:[...f.Z].map(e=>(0,t.jsx)("button",{type:"button",onClick:m,className:"block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7   hover:bg-mawada hover:text-white",children:(0,t.jsx)(c.rU,{href:{pathname:"/opd/[slug]",params:{slug:e.slug}},children:(0,t.jsx)("span",{className:"",children:h(e.name)})})},e.name))})]})}},e.name):(0,t.jsx)(c.rU,{onClick:m,href:{pathname:e.href},className:"-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7   hover:bg-mawada hover:text-white",children:(0,t.jsx)("span",{children:h(e.name)})},e.name))}),(0,t.jsx)("div",{className:"py-6",children:(0,t.jsx)("a",{href:"#",className:"-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7   hover:bg-gray-50",children:(0,t.jsx)(p,{})})})]})})]})}),(0,t.jsx)(F,{})]})})})}},8609:function(e,a,r){"use strict";var t=r(5960),s=r(409),l=r(298),n=r(609),i=r(1073);let d={hidden:{translateY:50,opacity:0},show:{translateY:0,opacity:1,transition:{staggerChildren:.1,delayChildren:.3}}},o={hidden:{translateY:25,opacity:0},show:{translateY:0,opacity:1}},c={hidden:{translateY:25,opacity:0},show:{translateY:0,opacity:1}},m={hidden:{translateY:25,opacity:0},show:{translateY:0,opacity:1}};a.default=()=>{let[e,a]=(0,n.useState)(!0),r=(0,n.useCallback)(()=>{a(e=>!e)},[]);return(0,t.jsxs)("div",{className:"bg-primary h-16 w-16 rounded-full p-0.5 rounded-br-md fixed bottom-5 end-5 flex items-center justify-center shadow-primary shadow-sm hover:shadow-md hover:shadow-primary cursor-pointer active:scale-95 transition-all ease-in",children:[(0,t.jsx)("div",{onClick:r,className:"select-none secondaryBorderThick rounded-full w-full h-full flex items-center justify-center transition-transform ease-in ".concat(e?"rotate-[315deg]":""),children:(0,t.jsx)(i.QZ,{})}),(0,t.jsx)(s.M,{children:e&&(0,t.jsxs)(l.E.ul,{variants:d,initial:"hidden",animate:"show",exit:"hidden",className:"absolute bottom-20 flex justify-between flex-col items-center gap-2",children:[(0,t.jsx)(l.E.li,{variants:o,children:(0,t.jsx)(i.QZ,{url:"https://x.com/almawadahhospital"})}),(0,t.jsx)(l.E.li,{variants:c,children:(0,t.jsx)(i.QZ,{url:"https://facebook.com/almawadahhospital"})}),(0,t.jsx)(l.E.li,{variants:m,children:(0,t.jsx)(i.QZ,{url:"http://instagram.com/almawadahhospital"})}),(0,t.jsx)(l.E.li,{variants:m,children:(0,t.jsx)(i.QZ,{url:"https://linkedin.com/almawadahhospital"})}),(0,t.jsx)(l.E.li,{variants:m,children:(0,t.jsx)(i.QZ,{url:"https://whatsapp.com"})}),(0,t.jsx)(l.E.li,{variants:m,children:(0,t.jsx)(i.QZ,{url:"https://youtube.com/almawadahhospital"})})]})})]})}},141:function(){},9637:function(e,a,r){"use strict";r.r(a),a.default={src:"/_next/static/media/logo.36ec8ab0.svg",height:400,width:400,blurWidth:0,blurHeight:0}}},function(e){e.O(0,[842,716,63,25,704,490,544,139,511,744],function(){return e(e.s=9334)}),_N_E=e.O()}]);