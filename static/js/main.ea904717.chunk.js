(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),i=c(19),r=c.n(i),n=(c(26),c(7)),l=c(8),o=(c(27),c.p,c.p+"static/media/recycle.3def1b12.jpg"),d=c(10),j=c(0),b=function(){return Object(j.jsx)("div",{className:"home",children:Object(j.jsxs)("div",{className:"home-desc",children:[Object(j.jsx)("h3",{children:'"Reducing Waste - By Bringing Life Back To Pre-Loved Textiles"'}),Object(j.jsx)(d.b,{className:"shop-now",to:"/products",exact:!0,children:"Shop Now"}),Object(j.jsx)("img",{src:o,alt:"recycle"})]})})},u=c.p+"static/media/search.9a296b2a.svg",h=function(e){return Object(j.jsx)("div",{className:"item-cards",children:e.items.map((function(t){return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"item-image",children:Object(j.jsx)("img",{src:t.image,alt:"first product"})}),Object(j.jsxs)("div",{className:"bottom-text",children:[Object(j.jsxs)("p",{children:[t.desc," ",Object(j.jsx)("br",{}),"\xa3",t.price]}),Object(j.jsx)("input",{id:t.id,disabled:!1,className:"add-cart-btn",type:"button",value:"Add to cart",onClick:function(t){return e.addToCart(t)}})]})]},t.id)}))})},m=function(e){return Object(j.jsx)("div",{className:"sidebar",children:Object(j.jsxs)("ul",{className:"cat-lst",children:[e.categories.map((function(t){return Object(j.jsx)("div",{className:"lst-div",children:Object(j.jsxs)("li",{children:[" ",Object(j.jsx)("input",{className:"input-cat",type:"button",value:t.category,onClick:function(t){return e.categoryClick(t)}})," "]})},t.id)})),Object(j.jsxs)("li",{children:[" ",Object(j.jsx)("input",{className:"input-cat-clear",type:"button",value:"Clear Filters",onClick:function(t){return e.categoryClick(t)}})," "]})]})})},O=function(e){return Object(j.jsxs)("div",{className:"cart-div",children:[Object(j.jsx)("span",{id:"close",onClick:function(){return e.close()},children:"x"}),Object(j.jsx)("div",{className:"item-cards-cart",children:e.items.map((function(t){return Object(j.jsxs)("div",{id:t.id,className:"card",children:[Object(j.jsx)("div",{className:"item-image",children:Object(j.jsx)("img",{src:t.image,alt:"first product"})}),Object(j.jsx)("div",{className:"bottom-text",children:Object(j.jsxs)("p",{children:[t.desc," ",Object(j.jsx)("br",{}),"\xa3",t.price," ",Object(j.jsx)("br",{}),Object(j.jsx)("span",{id:t.id,className:"minus",onClick:function(t){return e.remove(t)},children:" -"})," ",t.count,Object(j.jsx)("span",{id:t.id,className:"plus",onClick:function(t){return e.add(t)},children:" + "})]})})]},t.id)}))}),Object(j.jsx)("div",{className:"total",children:Object(j.jsxs)("p",{children:["Total \xa3",e.total]})})]})},x=function(e){var t;return e.searchActive?t=Object(j.jsxs)("form",{onSubmit:function(t){return e.onSearchSubmit(t)},children:[Object(j.jsx)("input",{className:"search-input",type:"search",placeholder:"Search Category",value:e.searchState||"",onChange:function(t){return e.onSearchChange(t)}}),Object(j.jsx)("button",{className:"search-sbmit",type:"submit"})]}):e.searchActive||(t=Object(j.jsx)("input",{className:"search-icon",type:"image",src:u,alt:"Search Categories",onClick:function(){return e.onSearchClick()}})),Object(j.jsxs)("div",{className:"products",children:[Object(j.jsx)("div",{className:"side-bar",children:Object(j.jsx)(m,{categories:e.categories,categoryClick:function(t){return e.categoryClick(t)}})}),Object(j.jsxs)("div",{className:"main-items",children:[Object(j.jsxs)("div",{className:"search-bar",children:[Object(j.jsx)("h3",{children:"Products"}),t]}),Object(j.jsx)("div",{className:"item-cards1",children:Object(j.jsx)(h,{items:e.items,addToCart:function(t){return e.addToCart(t)}})})]})]})},p=c.p+"static/media/facebook.8ab44a82.svg",f=c.p+"static/media/twitter.6c3a6b9a.svg",g=c.p+"static/media/linkedin.cfe4cd5b.svg",v=c.p+"static/media/insta.d034a7f8.svg",N=function(){return Object(j.jsxs)("div",{className:"contact",children:[Object(j.jsx)("a",{href:"https://www.youtube.com/watch?v=Xx7sxWI9FNI",target:"_blank",rel:"noreferrer",children:Object(j.jsx)("img",{src:v,alt:"insta",title:"Instagram"})}),Object(j.jsx)("a",{href:"https://www.youtube.com/watch?v=Xx7sxWI9FNI",target:"_blank",rel:"noreferrer",children:Object(j.jsx)("img",{src:f,alt:"twitter",title:"Twitter"})}),Object(j.jsx)("a",{href:"https://www.youtube.com/watch?v=Xx7sxWI9FNI",target:"_blank",rel:"noreferrer",children:Object(j.jsx)("img",{src:p,alt:"facebook",title:"Facebook"})}),Object(j.jsx)("a",{href:"https://www.youtube.com/watch?v=Xx7sxWI9FNI",target:"_blank",rel:"noreferrer",children:Object(j.jsx)("img",{src:g,alt:"linkedin",title:"LinkedIn"})})]})},k=c.p+"static/media/shopping-cart.f0432bbd.svg",y=function(e){return Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("div",{className:"shop-name",children:Object(j.jsx)(d.b,{className:"shop-name-link",to:"/",exact:!0,children:Object(j.jsx)("h1",{children:"Salvidged Apparel"})})}),Object(j.jsx)("div",{className:"navbar",children:Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{className:"home-item",children:[" ",Object(j.jsx)(d.b,{className:"nav-link",to:"/",exact:!0,activeStyle:{fontWeight:"bold",color:"#6BDEED"},children:"Home"})," "]}),Object(j.jsxs)("li",{className:"products-item",children:[" ",Object(j.jsx)(d.b,{className:"nav-link",to:"/products",exact:!0,activeStyle:{fontWeight:"bold",color:"#6BDEED"},children:"Products"})," "]}),Object(j.jsxs)("li",{className:"contact-item",children:[" ",Object(j.jsx)(d.b,{className:"nav-link",to:"/contact",exact:!0,activeStyle:{fontWeight:"bold",color:"#6BDEED"},children:"Contact"})," "]}),Object(j.jsxs)("li",{className:"cart-item",onClick:function(){return e.cartClick()},children:[Object(j.jsx)("div",{className:"item-count",children:e.itemsCount}),Object(j.jsxs)("div",{className:"cartDiv",children:[" ",Object(j.jsx)("input",{className:"cart-btn",type:"image",alt:"Shopping Cart",src:k})," "]})]})]})})]})},S=c(2),C=c(9),w=c.n(C),E=c.p+"static/media/buckethat1.76f266e5.jpg",A=c.p+"static/media/buckethat2.9581595e.jpg",F=c.p+"static/media/tshirt1.7b4b100c.jpg",T=c.p+"static/media/facemask1.6dd32c06.jpg",B=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)(!1),r=Object(l.a)(i,2),o=r[0],u=r[1],h=Object(a.useState)([]),m=Object(l.a)(h,2),p=m[0],f=m[1],g=Object(a.useState)([]),v=Object(l.a)(g,2),k=(v[0],v[1],Object(a.useState)(0)),C=Object(l.a)(k,2),B=C[0],I=C[1],W=Object(a.useState)(0),P=Object(l.a)(W,2),D=P[0],H=P[1],L=Object(a.useState)("All Products"),M=Object(l.a)(L,2),X=M[0],_=M[1],q=Object(a.useState)(""),J=Object(l.a)(q,2),R=J[0],U=J[1],G=Object(a.useState)([{image:E,desc:"Festival Essential bucket hat 2019",price:"19.99",id:w()(),category:"Bucket Hats",count:0},{image:A,desc:"Ellie Special",price:"14.99",id:w()(),category:"Bucket Hats",count:0},{image:F,desc:"Old Curtain T-Shirt",price:"24.99",id:w()(),category:"T-Shirts",count:0},{image:T,desc:"Trippy Green Red Yellow Face Mask",price:"5.99",id:w()(),category:"Face Masks",count:0}]),Y=Object(l.a)(G,2),z=Y[0],K=(Y[1],Object(a.useState)(Object(n.a)(z))),Q=Object(l.a)(K,2),V=Q[0],Z=Q[1],$=Object(a.useState)([{category:"Bucket Hats",id:w()()},{category:"T-Shirts",id:w()()},{category:"Bottoms",id:w()()},{category:"Shirts",id:w()()},{category:"Shorts",id:w()()},{category:"Face Masks",id:w()()}]),ee=Object(l.a)($,2),te=ee[0],ce=(ee[1],function(e){27===e.keyCode&&(s(!1),_("All Products"),U(""))});Object(a.useEffect)((function(){ae(),se(),document.querySelectorAll(".add-cart-btn").forEach((function(e){e.disabled=!1}))}),[p]),Object(a.useEffect)((function(){re(X)}),[X]),Object(a.useEffect)((function(){ie()}),[R]),Object(a.useEffect)((function(){return document.addEventListener("keydown",ce,!1),function(){U(""),document.addEventListener("keydown",ce,!1)}}),[c]);var ae=function(){for(var e=0,t=0;t<p.length;++t){e+=p[t].count*p[t].price}I(e.toFixed(2))},se=function(){for(var e=0,t=0;t<p.length;++t)e+=p[t].count;H(e)},ie=function(){var e="All Products",t=R;if(t!==e){for(var c=Object(n.a)(z),a=[],s=0;s<c.length;++s)c[s].category.toUpperCase().startsWith(t.toUpperCase())&&a.push(c[s]);Z([].concat(a))}else e.startsWith(t)&&Z(Object(n.a)(z))},re=function(e){if("All Products"!==e){for(var t=Object(n.a)(z),c=[],a=0;a<t.length;++a)t[a].category===e&&c.push(t[a]);Z([].concat(c))}else"All Products"===e&&Z(Object(n.a)(z))};return Object(j.jsxs)(d.a,{children:[Object(j.jsx)(y,{cartClick:function(){u(!0)},cartActive:o,itemsCount:D}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:o?"App-active":"App",children:Object(j.jsxs)(S.c,{children:[Object(j.jsx)(S.a,{exact:!0,path:"/",children:Object(j.jsx)(b,{})}),Object(j.jsx)(S.a,{exact:!0,path:"/products",children:Object(j.jsx)(x,{searchActive:c,onSearchClick:function(){s(!0)},items:V,categories:te,addToCart:function(e){document.querySelectorAll(".add-cart-btn").forEach((function(e){e.disabled=!1}));var t=e.target.id,c=z.filter((function(e){return e.id===t}))[0],a=Object(n.a)(p),s=a.map((function(e){return e.id})).indexOf(c.id);-1===s?(c.count=c.count+1,f([].concat(Object(n.a)(a),[c]))):-1!==s&&(c.count=c.count+1,a[s]=c,f(Object(n.a)(a)))},categoryClick:function(e){var t=e.target.value;"Clear Filters"!==t?(_(t),U(t)):"Clear Filters"===t&&(console.log("clear filter"),_("All Products"),U(""))},categoryHeader:X,searchState:R,onSearchChange:function(e){U(e.target.value)},onSearchSubmit:function(e){console.log(R),e.preventDefault()}})}),Object(j.jsx)(S.a,{exact:!0,path:"/contact",children:Object(j.jsx)(N,{})})]})}),Object(j.jsx)("div",{className:o?"cart-display-active":"cart-display",children:Object(j.jsx)(O,{close:function(){u(!1)},remove:function(e){for(var t=e.target.id,c=0;c<=p.length;++c){var a=p[c];if(p[c].id===t){if(a.count>0){a.count=a.count-1;var s=Object(n.a)(p);s[c]=a,f(Object(n.a)(s));break}break}}},add:function(e){for(var t=e.target.id,c=0;c<=p.length;++c){var a=p[c];if(p[c].id===t){a.count=a.count+1;var s=Object(n.a)(p);s[c]=a,f(Object(n.a)(s));break}}},items:p,total:B})})]})]})};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(B,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.ea904717.chunk.js.map