"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[797],{5797:function(e,r,o){o.d(r,{aJ:function(){return k},d2:function(){return z},$_:function(){return x},OL:function(){return w},wp:function(){return g},T3:function(){return l},tl:function(){return v},yB:function(){return K},ze:function(){return y}});var n=o(5893),a=o(7294),s=o(9008),t="Home",i="Investigative journalism &amp; creative commentary",c="https://raw.githubusercontent.com/RektHQ/Assets/main/images/banner-1200-675.png",l=function(e){var r=e.children,o=e.className,a=e.title,l=void 0===a?t:a,m=e.description,d=void 0===m?i:m,u=e.banner,p=void 0===u?c:u;return(0,n.jsxs)("div",{className:o,children:[(0,n.jsxs)(s.default,{children:[(0,n.jsxs)("title",{children:["Rekt - ",l]}),(0,n.jsx)("meta",{name:"description",content:"DeFi / Crypto - ".concat(d)}),(0,n.jsx)("meta",{charSet:"utf-8"}),(0,n.jsx)("link",{rel:"icon",href:"https://raw.githubusercontent.com/RektHQ/Assets/main/images/favicon.png",type:"image/png"}),(0,n.jsx)("link",{rel:"canonical",href:"https://www.rekt.news/"}),(0,n.jsx)("meta",{name:"HandheldFriendly",content:"True"}),(0,n.jsx)("meta",{name:"MobileOptimized",content:"320"}),(0,n.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,n.jsx)("meta",{name:"og:title",content:"Rekt - ".concat(l)}),(0,n.jsx)("meta",{property:"og:description",content:"DeFi / Crypto - ".concat(d)}),(0,n.jsx)("meta",{property:"og:image",content:p}),(0,n.jsx)("meta",{property:"og:url",content:"https://www.rekt.news/"}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:site_name",content:"rekt"}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:title",content:"Rekt - ".concat(l)}),(0,n.jsx)("meta",{name:"twitter:description",content:"DeFi / Crypto - ".concat(d)}),(0,n.jsx)("meta",{name:"twitter:image",content:p}),(0,n.jsx)("meta",{name:"twitter:url",content:"https://www.rekt.news/"}),(0,n.jsx)("meta",{name:"twitter:site",content:"@RektHQ"}),(0,n.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),(0,n.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap",rel:"stylesheet"}),(0,n.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-5T3NB49M5Z"}),(0,n.jsx)("script",{async:!0,dangerouslySetInnerHTML:{__html:'function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","G-5T3NB49M5Z");'}})]}),(0,n.jsx)(g,{}),(0,n.jsx)("main",{className:"content",role:"main",children:r}),(0,n.jsx)(x,{})]})},m=o(1163),d=o(2062),u=o(5239);function p(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function h(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{},n=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),n.forEach((function(r){p(e,r,o[r])}))}return e}var b=(0,a.memo)((function(){var e=(0,d.F)(),r=e.theme,o=e.themes,a=e.setTheme;return(0,n.jsx)("span",{className:"theme-picker nav-item",onClick:function(){return a("dark"==r?"light":"dark")},children:o[r]?(0,u.tr)("common.".concat(o[r])):(0,u.tr)("common.dark")})})),f=function(){var e,r=(0,a.useState)(!1),o=r[0],s=r[1],t=(0,m.useRouter)();return(0,n.jsxs)("div",{className:"lang-picker",children:[(0,n.jsxs)("span",{className:"lang-picker-selected",onClick:function(){return s(!o)},children:[t.locale,(0,n.jsx)("span",{className:"lang-picker-arrow",children:"\u25bc"})]}),(0,n.jsx)("div",{className:"lang-picker-options",onClick:function(){return s(!1)},children:o&&(null===t||void 0===t||null===(e=t.locales)||void 0===e?void 0:e.map((function(e){return(0,n.jsx)(y,{className:"lang-picker-option",prefetch:!1,href:"/",locale:e,children:e},e)})))})]})},g=function(){return(0,n.jsx)("header",{className:"site-head",children:(0,n.jsxs)("div",{className:"site-head-content inner",children:[(0,n.jsx)(y,{href:"/",children:(0,n.jsx)("img",{className:"site-logo inv-asset",src:"https://raw.githubusercontent.com/rekthq/assets/main/images/logo.svg",alt:"logo"})}),(0,n.jsxs)("nav",{children:[(0,n.jsx)(w,{href:"/termAndConditions",children:(0,u.tr)("navbar.termAndConditions")||"T&C"}),(0,n.jsx)("span",{className:"divider"}),(0,n.jsx)(w,{href:"/leaderboard",children:(0,u.tr)("navbar.leaderboard")}),(0,n.jsx)("span",{className:"divider"}),(0,n.jsx)(b,{}),(0,n.jsx)("span",{className:"divider"}),(0,n.jsx)(f,{})]})]})})},v=function(e){var r=e.page,o=e.pages,a=(0,m.useRouter)().query,s=parseInt(r)||0,t=s>0,i=s!==(parseInt(o)||0);return(0,n.jsxs)("nav",{className:"pagination",children:[t&&(0,n.jsx)(y,{className:"newer-posts inv-asset",href:{query:h({},a,{page:s-1})}}),(0,n.jsxs)("span",{className:"page-number",children:[(0,u.tr)("common.page")," ",r," ",(0,u.tr)("common.of")," ",o]}),i&&(0,n.jsx)(y,{className:"older-posts inv-asset",href:{query:h({},a,{page:s+1})}})]})},x=function(){return(0,n.jsx)("footer",{className:"site-footer",children:(0,n.jsxs)("div",{className:"inner",children:[(0,n.jsx)("a",{className:"subscribe",href:"http://eepurl.com/hd4HkP",target:"_blank",children:(0,u.tr)("common.subscribe").toUpperCase()}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("section",{className:"copyright ",children:[(0,u.tr)("common.copyright")," ",(0,n.jsx)("a",{href:"/",children:"rekt"})," \xa9 ",(new Date).getFullYear()," \u2022 ",(0,u.tr)("common.reserved"),"."]}),(0,n.jsxs)("section",{className:"poweredby",children:[(0,u.tr)("common.donate")," (ETH/ERC20):",(0,n.jsx)(k,{href:"https://etherscan.io/address/0x3C5c2F4bCeC51a36494682f91Dbc6cA7c63B514C",children:"0x3C5c2F4bCeC51a36494682f91Dbc6cA7c63B514C"})]}),(0,n.jsxs)("section",{className:"poweredby",children:[(0,u.tr)("footer.run_by")," ",(0,n.jsx)("a",{href:"https://twitter.com/RektHQ",children:"RektHQ"}),". ",(0,u.tr)("footer.founded_by")," ",(0,n.jsx)(k,{href:"https://twitter.com/bneiluj",children:"Julien Bouteloup"})]})]})]})})},j=o(1664),y=function(e){var r=e.href,o=e.children,a=e.className,s=e.locale,t=e.prefetch;return(0,n.jsx)(j.default,{prefetch:t,href:r,locale:s,children:(0,n.jsx)("a",{className:a,children:o})})},k=function(e){var r=e.href,o=e.children,a=e.className;return(0,n.jsx)(j.default,{href:r,children:(0,n.jsx)("a",{className:a,target:"_blank",rel:"noopener noreferrer",children:o})})},w=function(e){var r=e.href,o=e.children,a=(0,m.useRouter)().pathname===r?"nav-item-active":"";return(0,n.jsx)(j.default,{href:r,children:(0,n.jsx)("a",{className:"nav-item ".concat(a),children:o})})},N=o(43),_=o.n(N),R=o(724),E=o.n(R),T=o(9583),C={image:function(e){var r=e.src,o=e.alt;return(0,n.jsx)("figure",{children:(0,n.jsx)("img",{src:r,alt:o})})}},z=function(e){var r=e.title,o=e.date,a=e.tags,s=e.content,t=e.slug,i=e.recommended,c=e.supported,l=(0,m.useRouter)();return(0,n.jsxs)("article",{className:"post",children:[(0,n.jsxs)("header",{className:"post-header",children:[(0,n.jsx)("h1",{className:"post-title",children:r}),(0,n.jsx)("hr",{}),(0,n.jsxs)("span",{className:"post-meta",children:[(0,n.jsx)("time",{children:o}),(0,n.jsx)("p",{children:null===a||void 0===a?void 0:a.map((function(e,r){return(0,n.jsxs)("span",{children:[r?" - ":"",(0,n.jsx)(y,{locale:l.locale,href:{query:{tag:e},pathname:"/"},children:e})]},e)}))})]}),(0,n.jsx)("hr",{}),(0,n.jsxs)("span",{className:"post-meta",children:[(0,u.tr)("article.read_also"),":",(0,n.jsx)("p",{children:null===c||void 0===c?void 0:c.map((function(e,r){return(0,n.jsxs)("span",{children:[r?" - ":"",(0,n.jsx)(y,{prefetch:!1,locale:e,href:"/".concat(t),children:e})]},e)}))})]})]}),(0,n.jsxs)("section",{className:"post-content",children:[(0,n.jsx)(E(),{plugins:[_()],renderers:C,children:s}),(0,n.jsx)(S,{}),(0,n.jsx)(A,{title:r}),(0,n.jsx)(q,{})]}),!!(null===i||void 0===i?void 0:i.count)&&(0,n.jsxs)("div",{className:"recommended-template",children:[(0,n.jsxs)("p",{className:"recommended-title",children:[(0,u.tr)("article.suggestion"),"..."]}),(0,n.jsx)("div",{className:"recommended-posts",children:null===i||void 0===i?void 0:i.posts.map((function(e){return(0,n.jsx)(K,{className:"recommended-post",title:e.title,slug:e.slug,tags:e.tags,excerpt:e.excerpt,date:e.date},e.slug)}))})]})]})},K=function(e){var r=e.title,o=e.date,a=e.tags,s=e.excerpt,t=e.slug,i=e.featured,c=e.className;return(0,n.jsxs)("article",{className:"post ".concat(c||""),children:[(0,n.jsxs)("header",{className:"post-header",children:[(0,n.jsx)("h5",{className:"post-title".concat(i?" featured":""),children:(0,n.jsxs)(y,{href:"/".concat(t),children:[" ",r]})}),(0,n.jsx)("hr",{}),(0,n.jsxs)("span",{className:"post-meta",children:[(0,n.jsx)("time",{children:o}),(0,n.jsx)("p",{children:null===a||void 0===a?void 0:a.map((function(e,r){return(0,n.jsxs)("span",{children:[r?" - ":"",(0,n.jsx)(y,{href:{query:{tag:e}},children:e})]},e)}))})]}),(0,n.jsx)("hr",{})]}),(0,n.jsxs)("section",{className:"post-excerpt",children:[(0,n.jsx)("p",{children:s}),(0,n.jsx)("p",{className:"post-excerpt-more",children:(0,n.jsx)(y,{href:"/".concat(t),children:(0,u.tr)("common.more").toUpperCase()})})]})]})},A=function(e){var r=e.title,o=window.location.href;return(0,n.jsxs)("footer",{className:"post-footer",children:[(0,n.jsx)("p",{children:(0,u.tr)("article.share")}),(0,n.jsxs)("section",{children:[(0,n.jsx)(k,{href:"https://twitter.com/share?text=".concat(r,"&url=").concat(o),children:(0,n.jsx)(T.fWC,{})}),(0,n.jsx)(k,{href:"https://www.facebook.com/sharer/sharer.php?u=".concat(o),children:(0,n.jsx)(T.tBk,{})}),(0,n.jsx)(k,{href:"https://t.me/share/url?url=".concat(o),children:(0,n.jsx)(T.AGi,{})})]})]})},q=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{children:(0,u.tr)("article.responsibility")}),(0,n.jsx)("p",{children:(0,n.jsxs)("strong",{children:[(0,u.tr)("common.donate")," (ETH / ERC20):"," ",(0,n.jsx)("a",{href:"https://etherscan.io/address/0x3C5c2F4bCeC51a36494682f91Dbc6cA7c63B514C",children:"0x3C5c2F4bCeC51a36494682f91Dbc6cA7c63B514C"})]})}),(0,n.jsxs)("p",{children:[(0,u.tr)("common.disclaimer"),": "]}),(0,n.jsx)("p",{children:(0,u.tr)("article.disclaimer")})]})},S=function(){return(0,n.jsxs)("div",{id:"mc_embed_signup",children:[(0,n.jsx)("hr",{}),(0,n.jsx)("form",{action:"https://doshbot.us8.list-manage.com/subscribe/post?u=4db8948c1d40f1c0e7af494fd&id=798585766e",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",className:"validate",target:"_blank",noValidate:!0,children:(0,n.jsxs)("div",{id:"mc_embed_signup_scroll",className:"newsletter-form",children:[(0,n.jsxs)("h2",{className:"newsletter-header",children:[(0,u.tr)("common.subscribe").toUpperCase()," ",(0,u.tr)("common.now").toUpperCase()]}),(0,n.jsxs)("div",{className:"newsletter-group",children:[(0,n.jsxs)("div",{className:"newsletter-input-group",children:[(0,n.jsxs)("label",{children:[(0,u.tr)("common.email_address")," ",(0,n.jsx)("span",{className:"asterisk",children:"*"})]}),(0,n.jsx)("input",{placeholder:"anon@rekt.news",type:"email",defaultValue:"",name:"EMAIL",className:"required email newsletter-input",id:"mce-EMAIL"})]}),(0,n.jsx)("div",{className:"newsletter-submit",children:(0,n.jsx)("input",{type:"submit",value:(0,u.tr)("common.subscribe"),name:"subscribe",id:"mc-embedded-subscribe",className:"button"})})]}),(0,n.jsx)("div",{style:{position:"absolute",left:"-5000px"},"aria-hidden":"true",children:(0,n.jsx)("input",{type:"text",name:"b_4db8948c1d40f1c0e7af494fd_798585766e",defaultValue:""})})]})})]})}},5239:function(e,r,o){o.d(r,{tr:function(){return s}});var n=JSON.parse('{"en":{"article.disclaimer":"REKT is not responsible or liable in any manner for any Content posted on our Website or in connection with our Services, whether posted or caused by ANON Author of our Website, or by REKT. Although we provide rules for Anon Author conduct and postings, we do not control and are not responsible for what Anon Author post, transmit or share on our Website or Services, and are not responsible for any offensive, inappropriate, obscene, unlawful or otherwise objectionable content you may encounter on our Website or Services. REKT is not responsible for the conduct, whether online or offline, of any user of our Website or Services.","article.responsibility":"REKT serves as a public platform for anonymous authors, we take no responsibility for the views or content hosted on REKT.","article.suggestion":"you might also like","article.share":"share this article","article.read_also":"read this article also in","common.disclaimer":"disclaimer","common.email_address":"email address","common.page":"page","common.of":"of","common.more":"more","common.dark":"dark","common.light":"light","common.subscribe":"subscribe","common.now":"now","common.donate":"donate","common.copyright":"all content copyright","common.reserved":"all rights reserved","leaderboard.outro":"here lie the names of some of the defi protocols that have fallen victim to attack, exploit or arbitrage. this list is not complete and it never will be. these protocols are listed with respect; we appreciate and understand the work that lies behind each name.","navbar.feed":"feed","navbar.leaderboard":"leaderboard","navbar.merch":"merch","navbar.hopium":"hopium","footer.run_by":"run by","footer.founded_by":"founded by"},"zh":{"article.disclaimer":"REKT\u5bf9\u6211\u4eec\u7f51\u7ad9\u4e0a\u53d1\u5e03\u7684\u6216\u4e0e\u6211\u4eec\u7684\u670d\u52a1\u76f8\u5173\u7684\u4efb\u4f55\u5185\u5bb9\u4e0d\u627f\u62c5\u4efb\u4f55\u8d23\u4efb\uff0c\u65e0\u8bba\u662f\u7531\u6211\u4eec\u7f51\u7ad9\u7684\u533f\u540d\u4f5c\u8005\uff0c\u8fd8\u662f\u7531 REKT\u53d1\u5e03\u6216\u5f15\u8d77\u7684\u3002\u867d\u7136\u6211\u4eec\u4e3a\u533f\u540d\u4f5c\u8005\u7684\u884c\u4e3a\u548c\u53d1\u6587\u8bbe\u7f6e\u89c4\u5219\uff0c\u6211\u4eec\u4e0d\u63a7\u5236\u4e5f\u4e0d\u5bf9\u533f\u540d\u4f5c\u8005\u5728\u6211\u4eec\u7684\u7f51\u7ad9\u6216\u670d\u52a1\u4e0a\u53d1\u5e03\u3001\u4f20\u8f93\u6216\u5206\u4eab\u7684\u5185\u5bb9\u8d1f\u8d23\uff0c\u4e5f\u4e0d\u5bf9\u60a8\u5728\u6211\u4eec\u7684\u7f51\u7ad9\u6216\u670d\u52a1\u4e0a\u53ef\u80fd\u9047\u5230\u7684\u4efb\u4f55\u5192\u72af\u6027\u3001\u4e0d\u9002\u5f53\u3001\u6deb\u79fd\u3001\u975e\u6cd5\u6216\u5176\u4ed6\u4ee4\u4eba\u53cd\u611f\u7684\u5185\u5bb9\u8d1f\u8d23\u3002REKT\u4e0d\u5bf9\u6211\u4eec\u7f51\u7ad9\u6216\u670d\u52a1\u7684\u4efb\u4f55\u7528\u6237\u7684\u7ebf\u4e0a\u6216\u7ebf\u4e0b\u884c\u4e3a\u8d1f\u8d23\u3002","article.responsibility":"REKT\u4f5c\u4e3a\u533f\u540d\u4f5c\u8005\u7684\u516c\u5171\u5e73\u53f0\uff0c\u6211\u4eec\u5bf9REKT\u4e0a\u6258\u7ba1\u7684\u89c2\u70b9\u6216\u5185\u5bb9\u4e0d\u627f\u62c5\u4efb\u4f55\u8d23\u4efb\u3002","article.suggestion":"\u60a8\u53ef\u80fd\u4e5f\u559c\u6b22","article.share":"\u5206\u4eab\u672c\u6587","article.read_also":"\u8fd8\u53ef\u4ee5\u7528\u4e0b\u5217\u8bed\u8a00\u9605\u8bfb\u672c\u6587","common.disclaimer":"\u58f0\u660e","common.email_address":"\u90ae\u7bb1","common.page":"\u9875","common.of":"\u7684","common.more":"\u66f4\u591a","common.dark":"\u6697\u9ed1","common.light":"\u5149\u4eae","common.subscribe":"\u8ba2\u9605","common.now":"\u5373\u523b","common.donate":"\u6350\u8d60","common.copyright":"\u6240\u6709\u5185\u5bb9\u7248\u6743","common.reserved":"\u4fdd\u7559\u6240\u6709\u6743\u5229","leaderboard.outro":"\u8fd9\u91cc\u662f\u5df2\u6210\u4e3a\u653b\u51fb\u3001\u63a0\u593a\u6216\u5957\u5229\u53d7\u5bb3\u8005\u7684\u90e8\u5206defi\u534f\u8bae\u7684\u540d\u5355\u3002\u8fd9\u4efd\u540d\u5355\u5e76\u4e0d\u5b8c\u6574\uff0c\u800c\u4e14\u6c38\u8fdc\u4e0d\u4f1a\u5b8c\u6574\u3002\u6000\u7740\u656c\u610f\u5217\u51fa\u8fd9\u4e9b\u534f\u8bae\uff1b\u6211\u4eec\u6b23\u8d4f\u5e76\u7406\u89e3\u6bcf\u4e2a\u540d\u5b57\u80cc\u540e\u7684\u5de5\u4f5c\u3002","navbar.feed":"\u53cd\u9988","navbar.leaderboard":"\u6392\u884c\u699c","navbar.merch":"\u5546\u54c1","navbar.hopium":"\u970d\u666e\u5170","footer.run_by":"\u8fd0\u8425\u65b9","footer.founded_by":"\u521b\u59cb\u4eba"},"es":{"article.disclaimer":"REKT no es responsable ni culpable de ninguna manera por cualquier Contenido publicado en nuestro Sitio Web o en conexi\xf3n con nuestros Servicios, sin importar si fueron publicados o causados por Autores AN\xd3N de nuestro Sitio Web, o por REKT. Aunque determinamos reglas para la conducta y publicaciones de los Autores AN\xd3N, no controlamos y no somos responsables por cualquier contenido ofensivo, inapropiado, obsceno, ilegal o de cualquier forma objetable, que se pudiera encontrar en nuestro Sitio Web o Servicios. REKT no es responsable por la conducta, en l\xednea o fuera de l\xednea, de cualquier usuario de nuestro Sitio Web o Servicios.","article.responsibility":"REKT sirve como plataforma p\xfablica para autores an\xf3nimos, nos deslindamos de la responsabilidad por las opiniones y contenidos alojados en REKT.","article.suggestion":"te podr\xeda gustar","article.share":"compartir art\xedculo","article.read_also":"lee este art\xedculo en","common.disclaimer":"aviso legal","common.email_address":"correo electr\xf3nico","common.page":"p\xe1gina","common.of":"de","common.more":"m\xe1s","common.dark":"oscuro","common.light":"blanco","common.subscribe":"suscr\xedbete","common.now":"ya","common.donate":"dona","common.copyright":"todo el contenido Copyright","common.reserved":"todos los derechos reservados","leaderboard.outro":"Aqu\xed yacen los nombres de algunos de los protocolos defi que han ca\xeddo v\xedctimas de ataque, exploit o arbitraje. Esta lista no est\xe1 completa ni lo estar\xe1 nunca. Estos protocolos han sido enlistados con respeto; apreciamos y entendemos el trabajo que respalda cada uno de estos nombres.","navbar.feed":"feed","navbar.leaderboard":"leaderboard","navbar.merch":"merch","navbar.hopium":"hopium","footer.run_by":"administrado por","footer.founded_by":"fundado por"},"fr":{"article.disclaimer":"REKT n\'est responsable en aucune mani\xe8re du contenu publi\xe9 sur notre site Web ou en lien avec nos Services, qu\'il soit publi\xe9 ou occasionn\xe9 par l\'Auteur Anon de notre site Web, ou par REKT. Bien que nous fournissions des r\xe8gles pour la conduite et les publications de l\'Auteur Anon, nous ne contr\xf4lons pas et ne sommes pas responsables de ce que l\'Auteur Anon publie, transmet ou partage sur notre site Web ou nos Services, et ne sommes pas responsables de tout contenu offensant, inappropri\xe9, obsc\xe8ne, ill\xe9gal ou autrement r\xe9pr\xe9hensible que vous pourriez rencontrer sur notre site Web ou nos Services. REKT ne saurait \xeatre tenu responsable de la conduite, en ligne ou hors ligne, de tout utilisateur de notre site Web ou de nos services.","article.responsibility":"REKT sert de plateforme publique pour des auteurs anonymes, nous d\xe9clinons toute responsabilit\xe9 quant aux opinions ou contenus h\xe9berg\xe9s sur REKT.","article.suggestion":"vous pourriez aussi aimer","article.share":"partager cet article","article.read_also":"lire aussi cet article en","common.disclaimer":"avertissement","common.email_address":"adresse e-mail","common.page":"page","common.of":"sur","common.more":"plus","common.dark":"nuit","common.light":"jour","common.subscribe":"abonnez-vous","common.now":"maintenant","common.donate":"faites un don","common.copyright":"tous les contenus sont soumis au droit d\'auteur","common.reserved":" tous droits r\xe9serv\xe9s ","leaderboard.outro":"ci-g\xeet le nom de certains des protocoles DeFi qui ont \xe9t\xe9 victimes d\'attaques, d\'exploits ou d\'arbitrages. Cette liste n\'est pas exhaustive et ne le sera jamais. Ces protocoles sont r\xe9f\xe9renc\xe9s avec respect : nous appr\xe9cions et avons conscience du travail qui se cache derri\xe8re chacun de ces noms.","navbar.feed":"flux","navbar.leaderboard":"classement","navbar.merch":"boutique","navbar.hopium":"hopium","footer.run_by":"g\xe9r\xe9 par","footer.founded_by":"fond\xe9 par"},"ru":{"article.disclaimer":"REKT \u043d\u0435 \u043d\u0435\u0441\u0435\u0442 \u043d\u0438\u043a\u0430\u043a\u043e\u0439 \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0437\u0430 \u043b\u044e\u0431\u043e\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435, \u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u043d\u043e\u0435 \u043d\u0430 \u043d\u0430\u0448\u0435\u043c \u0412\u0435\u0431-\u0441\u0430\u0439\u0442\u0435 \u0438\u043b\u0438 \u0438\u043c\u0435\u044e\u0449\u0435\u0435 \u043a\u0430\u043a\u043e\u0435-\u043b\u0438\u0431\u043e \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0435 \u043a \u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c\u044b\u043c \u043d\u0430\u043c\u0438 \u0423\u0441\u043b\u0443\u0433\u0430\u043c, \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e \u043e\u0442 \u0442\u043e\u0433\u043e, \u0431\u044b\u043b\u043e \u043b\u0438 \u043e\u043d\u043e \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043e \u0438\u043b\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u043e \u0410\u043d\u043e\u043d\u0438\u043c\u043d\u044b\u043c \u0410\u0432\u0442\u043e\u0440\u043e\u043c \u043d\u0430\u0448\u0435\u0433\u043e \u0412\u0435\u0431-\u0441\u0430\u0439\u0442\u0430 \u0438\u043b\u0438 REKT. \u041d\u0435 \u0441\u043c\u043e\u0442\u0440\u044f \u043d\u0430 \u0442\u043e, \u0447\u0442\u043e \u043c\u044b \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u043c \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0438 \u043d\u043e\u0440\u043c\u044b \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0439 \u0434\u043b\u044f \u0410\u043d\u043e\u043d\u0438\u043c\u043d\u044b\u0445 \u0410\u0432\u0442\u043e\u0440\u043e\u0432, \u043c\u044b \u043d\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u043c \u0438 \u043d\u0435 \u043d\u0435\u0441\u0435\u043c \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0437\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0439 \u0410\u043d\u043e\u043d\u0438\u043c\u043d\u044b\u0445 \u0410\u0432\u0442\u043e\u0440\u043e\u0432, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0437\u0430 \u0442\u043e, \u0447\u0435\u043c \u0434\u0435\u043b\u044f\u0442\u0441\u044f \u0438 \u0447\u0442\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u044e\u0442 \u0410\u0432\u0442\u043e\u0440\u044b \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043d\u0430\u0448\u0435\u0433\u043e \u0421\u0430\u0439\u0442\u0430 \u0438 \u043d\u0430\u0448\u0438\u0445 \u0421\u0435\u0440\u0432\u0438\u0441\u043e\u0432, \u0438 \u043d\u0435 \u043d\u0435\u0441\u0435\u043c \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0437\u0430 \u043b\u044e\u0431\u043e\u0435 \u043e\u0441\u043a\u043e\u0440\u0431\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435, \u043d\u0435\u0443\u043c\u0435\u0441\u0442\u043d\u043e\u0435, \u043d\u0435\u043f\u0440\u0438\u0441\u0442\u043e\u0439\u043d\u043e\u0435, \u043d\u0435\u0437\u0430\u043a\u043e\u043d\u043d\u043e\u0435 \u0438\u043b\u0438 \u0441\u043f\u043e\u0440\u043d\u043e\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435, \u0441 \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u0442\u043e\u043b\u043a\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u043d\u0430\u0448\u0435\u043c \u0412\u0435\u0431-\u0441\u0430\u0439\u0442\u0435 \u0438 \u043d\u0430 \u043d\u0430\u0448\u0438\u0445 \u0421\u0435\u0440\u0432\u0438\u0441\u0430\u0445. REKT \u043d\u0435 \u043d\u0435\u0441\u0435\u0442 \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0437\u0430 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435, \u0431\u0443\u0434\u044c \u0442\u043e \u043e\u043d\u043b\u0430\u0439\u043d \u0438\u043b\u0438 \u043e\u0444\u043b\u0430\u0439\u043d, \u043b\u044e\u0431\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0430\u0448\u0435\u0433\u043e \u0412\u0435\u0431-\u0441\u0430\u0439\u0442\u0430 \u0438\u043b\u0438 \u043d\u0430\u0448\u0438\u0445 \u0421\u0435\u0440\u0432\u0438\u0441\u043e\u0432.","article.responsibility":"REKT \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u0443\u044e \u043f\u043b\u043e\u0449\u0430\u0434\u043a\u0443 \u0434\u043b\u044f \u0430\u043d\u043e\u043d\u0438\u043c\u043d\u044b\u0445 \u0430\u0432\u0442\u043e\u0440\u043e\u0432. \u041c\u044b \u043d\u0435 \u043d\u0435\u0441\u0451\u043c \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0437\u0430 \u0432\u044b\u0440\u0430\u0436\u0430\u0435\u043c\u044b\u0435 \u0442\u043e\u0447\u043a\u0438 \u0437\u0440\u0435\u043d\u0438\u044f \u0438\u043b\u0438 \u043a\u043e\u043d\u0442\u0435\u043d\u0442 \u043d\u0430 \u044d\u0442\u043e\u043c \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0435.","article.suggestion":"\u0412\u0430\u043c \u0442\u0430\u043a\u0436\u0435 \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f","article.share":"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f","article.read_also":"\u0422\u0430\u043a\u0436\u0435 \u0447\u0438\u0442\u0430\u0442\u044c \u044d\u0442\u0443 \u0441\u0442\u0430\u0442\u044c\u044e \u043d\u0430","common.disclaimer":"\u0414\u0438\u0441\u043a\u043b\u0435\u0439\u043c\u0435\u0440","common.email_address":"\u0410\u0434\u0440\u0435\u0441 \u044d\u043b. \u043f\u043e\u0447\u0442\u044b","common.page":"\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430","common.of":"\u0438\u0437","common.more":"\u0435\u0449\u0435","common.dark":"\u043d\u0443\u0430\u0440","common.light":"\u043a\u043b\u0430\u0441\u0441\u0438\u043a","common.subscribe":"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f","common.now":"\u0421\u0435\u0439\u0447\u0430\u0441","common.donate":"\u041f\u043e\u0436\u0435\u0440\u0442\u0432\u043e\u0432\u0430\u043d\u0438\u0435","common.copyright":"\u0412\u0435\u0441\u044c \u043a\u043e\u043d\u0442\u0435\u043d\u0442 \u0437\u0430\u0449\u0438\u0449\u0435\u043d \u0430\u0432\u0442\u043e\u0440\u0441\u043a\u0438\u043c \u043f\u0440\u0430\u0432\u043e\u043c","common.reserved":"\u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b","leaderboard.outro":"\u0417\u0434\u0435\u0441\u044c \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0438\u043c\u0435\u043d\u0430 defi-\u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u043e\u0432, \u0441\u0442\u0430\u0432\u0448\u0438\u0445 \u0436\u0435\u0440\u0442\u0432\u0430\u043c\u0438 \u0430\u0442\u0430\u043a, \u044d\u043a\u0441\u043f\u043b\u043e\u0439\u0442\u043e\u0432 \u0438\u043b\u0438 \u0430\u0440\u0431\u0438\u0442\u0440\u0430\u0436\u0430. \u044d\u0442\u043e\u0442 \u0441\u043f\u0438\u0441\u043e\u043a \u043d\u0435 \u043f\u043e\u043b\u043e\u043d \u0438 \u043d\u0438\u043a\u043e\u0433\u0434\u0430 \u0442\u0430\u043a\u043e\u0432\u044b\u043c \u043d\u0435 \u0431\u0443\u0434\u0435\u0442. \u0438\u043c\u0435\u043d\u0430 \u044d\u0442\u0438\u0445 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u043e\u0432 \u0446\u0438\u0442\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u0441 \u0443\u0432\u0430\u0436\u0435\u043d\u0438\u0435\u043c; \u043c\u044b \u0437\u043d\u0430\u0435\u043c, \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0431\u043e\u0442\u044b \u043b\u0435\u0436\u0438\u0442 \u0437\u0430 \u043a\u0430\u0436\u0434\u044b\u043c \u0438\u043c\u0435\u043d\u0435\u043c \u0438 \u0446\u0435\u043d\u0438\u043c \u0435\u0451.","navbar.feed":"\u043b\u0435\u043d\u0442\u0430","navbar.leaderboard":"\u0440\u0435\u0439\u0442\u0438\u043d\u0433","navbar.merch":"\u043c\u0435\u0440\u0447","navbar.hopium":"hopium","footer.run_by":"\u041f\u043e\u0434 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c","footer.founded_by":"\u041e\u0441\u043d\u043e\u0432\u0430\u043d"},"ko":{"article.disclaimer":"REKT\ub294 \ub2f9\uc0ac \uc6f9 \uc0ac\uc774\ud2b8\uc758 \uc775\uba85\uc758 \uc791\uc131\uc790 \ub610\ub294 REKT\uc5d0 \uc758\ud574 \uac8c\uc2dc\ub418\uac70\ub098 \uad00\ub828\ub41c \uc11c\ube44\uc2a4\uc5d0\uc11c \uac8c\uc2dc\ub418\ub294 \ucf58\ud150\uce20\uc5d0 \ub300\ud574 \uc5b4\ub5a0\ud55c \ucc45\uc784\ub3c4 \uc9c0\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub2f9\uc0ac\ub294 \uc775\uba85 \uc791\uc131\uc790\ub4e4\uc758 \ud589\ub3d9 \ubc0f \uac8c\uc2dc\ubb3c\uc5d0 \ub300\ud55c \uaddc\uce59\uc744 \uc81c\uacf5\ud558\uc9c0\ub9cc, \uc775\uba85\uc758 \uc791\uc131\uc790\uac00 \uc6f9 \uc0ac\uc774\ud2b8 \ub610\ub294 \uc11c\ube44\uc2a4\uc5d0 \uac8c\uc2dc, \uc804\uc1a1 \ud639\uc740 \uacf5\uc720\ud55c \ub0b4\uc6a9\uc744 \ud1b5\uc81c\ud558\uac70\ub098 \ucc45\uc784\uc9c0\uc9c0 \uc54a\uc73c\uba70, \uadc0\ud558\uac00 \uc6f9 \uc0ac\uc774\ud2b8 \ub610\ub294 \uc11c\ube44\uc2a4\uc5d0\uc11c \uc9c1\uba74\ud560 \uc218 \uc788\ub294 \ubd88\ucf8c\ud568, \ubd80\uc801\uc808\ud568, \uc74c\ub780\ud568, \ubd88\ubc95 \ub610\ub294 \uae30\ud0c0 \ud574\ub85c\uc6b4 \ucf58\ud150\uce20\uc5d0 \ub300\ud574\uc11c\ub3c4 \ucc45\uc784\uc744 \uc9c0\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. REKT\ub294 \ub2f9\uc0ac \uc6f9 \uc0ac\uc774\ud2b8 \ub610\ub294 \uc11c\ube44\uc2a4 \uc0ac\uc6a9\uc790\uc758 \uc628\ub77c\uc778 \ub610\ub294 \uc624\ud504\ub77c\uc778 \ud589\uc704\uc5d0 \ub300\ud55c \ucc45\uc784\uc744 \uc9c0\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.","article.responsibility":"REKT\ub294 \uc775\uba85 \uc791\uc131\uc790\ub4e4\uc5d0 \uc758\ud55c \uacf5\uacf5 \ud50c\ub7ab\ud3fc\uc774\uba70, REKT\uc5d0 \uc791\uc131\ub41c \uad00\uc810\uc774\ub098 \ub0b4\uc6a9\uc5d0 \ub300\ud574\uc11c \uadf8 \uc5b4\ub5a4 \ucc45\uc784\ub3c4 \uc9c0\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.","article.suggestion":"\ucd94\ucc9c \uae30\uc0ac\ub4e4...","article.share":"\uae30\uc0ac \uacf5\uc720\ud558\uae30","article.read_also":"\uc5ec\uae30\uc5d0\uc11c\ub3c4 \ud574\ub2f9 \uae30\uc0ac\ub97c \uc77d\uc5b4\ubcf4\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4","common.disclaimer":"disclaimer","common.email_address":"\uc774\uba54\uc77c \uc8fc\uc18c","common.page":"\ud398\uc774\uc9c0","common.of":"\uc911","common.more":"\ub354\ubcf4\uae30","common.dark":"\ub2e4\ud06c \ubaa8\ub4dc","common.light":"\ub370\uc774 \ubaa8\ub4dc","common.subscribe":"\uad6c\ub3c5\ud558\uae30","common.now":"\uc9c0\uae08","common.donate":"\uae30\ubd80","common.copyright":"all content copyright","common.reserved":"all rights reserved","leaderboard.outro":"\uc774\uacf3\uc740 \uacf5\uaca9, \ud574\ud0b9 \ud639\uc740 \uc7ac\uc815 \uac70\ub798\uc5d0 \uc4f0\ub7ec\uc9c4 defi \ud504\ub85c\ud1a0\ucf5c\ub4e4\uc758 \uc774\ub984\uc774 \uc62c\ub77c\uac00 \uc788\ub294 \uacf3\uc785\ub2c8\ub2e4. \uc774 \ub9ac\uc2a4\ud2b8\ub294 \uc644\uc131\ub41c \uac8c \uc544\ub2c8\uba70 \uc808\ub300\ub85c \uc644\uc131\ub418\uc9c0 \uc54a\uc744 \uac83\uc785\ub2c8\ub2e4. \uc774 \ud504\ub85c\ud1a0\ucf5c\ub4e4\uc740 \uc815\uc911\ud788 \ub9ac\uc2a4\ud2b8\uc5d0 \uc62c\ub77c\uac00 \uc788\uc2b5\ub2c8\ub2e4; \uc800\ud76c\ub294 \uac01 \uc774\ub984 \ub4a4\uc5d0\uc11c \uc5f4\uc2ec\ud788 \uc77c\ud558\uace0 \uc788\ub294 \ubd84\ub4e4\uc744 \uc774\ud574\ud558\uba70 \ud56d\uc0c1 \uac10\uc0ac\ud558\uac8c \uc0dd\uac01\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.","navbar.feed":"\ud53c\ub4dc","navbar.leaderboard":"\ub9ac\ub354\ubcf4\ub4dc","footer.run_by":"run by","footer.founded_by":"founded by"},"tr":{"article.disclaimer":"REKT, Web Sitemizde veya hizmetlerimizle ba\u011flant\u0131l\u0131 olarak web sitemizin ANON yazar\u0131 veya REKT taraf\u0131ndan g\xf6nderilen, yay\u0131nlanan veya neden olunan  hi\xe7bir i\xe7erikten hi\xe7bir \u015fekilde sorumlu veya y\xfck\xfcml\xfc de\u011fildir. Anon yazar\u0131n davran\u0131\u015flar\u0131 ve g\xf6nderileri i\xe7in kurallar sa\u011flamam\u0131za ra\u011fmen, onun web sitemizde veya hizmetlerimizde yay\u0131nlad\u0131\u011f\u0131, iletti\u011fi veya payla\u015ft\u0131\u011f\u0131 \u015feylerden sorumlu de\u011filiz veya web sitemizde ve hizmetlerimizde kar\u015f\u0131la\u015fabilece\u011finiz herhangi bir sald\u0131rgan, uygunsuz, m\xfcstehcen, yasa d\u0131\u015f\u0131 veya ba\u015fka \u015fekilde sak\u0131ncal\u0131 olan i\xe7erikten sorumlu de\u011filiz. REKT, Web Sitemizin veya Hizmetlerimizin herhangi bir kullan\u0131c\u0131s\u0131n\u0131n \xe7evrimi\xe7i veya \xe7evrimd\u0131\u015f\u0131 davran\u0131\u015flar\u0131ndan sorumlu de\u011fildir.","article.responsibility":"REKT, anonim yazarlar i\xe7in halka a\xe7\u0131k bir platform olarak hizmet eder, REKT\'te bulunan g\xf6r\xfc\u015fler veya i\xe7erik i\xe7in hi\xe7bir sorumluluk kabul etmiyoruz.","article.suggestion":"bunu da be\u011fenebilirsin","article.share":"bu makaleyi payla\u015f","article.read_also":"bu makaleyi \u015fu dillerde okuyabilirsin","common.disclaimer":"sorumluluk reddi","common.email_address":"e-posta adresi","common.page":"sayfa","common.of":"toplam","common.more":"daha fazla","common.dark":"gece","common.light":"g\xfcnd\xfcz","common.subscribe":"abone ol","common.now":"\u015f\u0130md\u0130","common.donate":"ba\u011f\u0131\u015f yap","common.copyright":"t\xfcm i\xe7eri\u011fin telif hakk\u0131","common.reserved":"t\xfcm haklar\u0131 sakl\u0131d\u0131r","leaderboard.outro":"burada sald\u0131r\u0131, istismar veya arbitraj\u0131n kurban\u0131 olan baz\u0131 defi protokollerinin isimleri listelenmi\u015ftir. bu liste bitmi\u015f de\u011fil ve asla bitmi\u015f olmayacak. bu protokoller sayg\u0131  \xe7er\xe7evesinde listelenmi\u015ftir; her ismin arkas\u0131nda yatan i\u015fi takdir ediyor ve anl\u0131yoruz.","navbar.feed":"ak\u0131\u015f","navbar.leaderboard":"lider tahtas\u0131","navbar.merch":"ma\u011faza","navbar.hopium":"hopium","footer.run_by":"i\u015fleten","footer.founded_by":"kurucu"}}'),a=o(1163),s=function(e){try{var r,o=null!==(r=(0,a.useRouter)().locale)&&void 0!==r?r:"en";return n[o][e]||n.en[e]}catch(s){return n.en[e]}}}}]);