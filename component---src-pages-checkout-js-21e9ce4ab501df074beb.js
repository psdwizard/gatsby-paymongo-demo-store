(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{197:function(e,t,a){"use strict";a.r(t);a(33),a(41),a(215),a(70),a(12),a(23),a(55);var l=a(0),n=a.n(l),c=a(221),r=a(272),s=a.n(r),i=a(286),m=a.n(i),o=a(205),u=a.n(o),d=a(210);t.default=function(){var e,t,a=[],r=0,i=Object(l.useState)({name:"Marianne",email:"marianne@fullstack.ph",city:"Malolos",country:"Philippines",line1:"Test line 1",line2:"Test line 2",postal_code:"3000",state:"Bulacan",number:"",expiry:"",cvc:"",paymentAmount:null,decimal:"",currency:"PHP",description:"FIRST EVER FE TEST",statement_descriptor:"This is only a test"}),o=i[0],N=i[1],p=Object(l.useState)(!1),E=p[0],g=p[1],b=Object(l.useState)({error:"",data:{type:"",code:""}}),f=(b[0],b[1]),S=function(e){var t,a=e.target.name,l=e.target.value;N(Object.assign({},o,((t={})[a]=l.replace(/\s/g,""),t))),console.log(o)};return"undefined"!=typeof window&&null!==(a=JSON.parse(localStorage.getItem("cartList")))&&(r=(e=a,t="totalPrice",e.reduce(function(e,a){return"string"==typeof a[t]?e+Number(a[t]):e+a[t]},0)).toFixed(2),localStorage.setItem("total",JSON.stringify(r))),Object(l.useEffect)(function(){if("undefined"!=typeof window){var e=localStorage.getItem("total").split(".");N(Object.assign({},o,{paymentAmount:parseFloat(e[0].substring(1)),decimal:e[1].substring(0,e[1].length-1)}))}},[]),n.a.createElement("div",{className:"sass-ready"},n.a.createElement(c.Helmet,null,n.a.createElement("title",null,"Fullstack HQ | Checkout"),n.a.createElement("meta",{name:"description",content:""})),n.a.createElement(d.a,{checkout:!0}),n.a.createElement("main",{className:"checkout-page"},n.a.createElement("div",{className:"container checkout-container"},n.a.createElement("div",{className:"customer-details"},n.a.createElement("div",{className:"detail-block"},n.a.createElement("div",{className:"segment-title"},n.a.createElement("div",{className:"round-badge"},"1"),n.a.createElement("p",{className:"title"},"SHIPPING ADDRESS")),n.a.createElement("div",{className:"segment-details"},n.a.createElement("ul",{className:"details-list"},n.a.createElement("li",{className:"detail-title"},"Jane Doe"),n.a.createElement("li",null,"DD..."),n.a.createElement("li",null,"DD..."),n.a.createElement("li",null,"AS, 11000"),n.a.createElement("li",null,"Tanzania"),n.a.createElement("li",null,"test@test.test")))),n.a.createElement("div",{className:"detail-block"},n.a.createElement("div",{className:"segment-title"},n.a.createElement("div",{className:"round-badge"},"2"),n.a.createElement("p",{className:"title"},"SHIPPING METHOD")),n.a.createElement("div",{className:"segment-details"},n.a.createElement("ul",{className:"details-list"},n.a.createElement("li",{className:"detail-title"},"Hermes' Courrier | Free")))),n.a.createElement("div",{className:"detail-block"},n.a.createElement("div",{className:"segment-title"},n.a.createElement("div",{className:"round-badge"},"3"),n.a.createElement("p",{className:"title"},"BILLING ADDRESS")),n.a.createElement("div",{className:"segment-details"},n.a.createElement("ul",{className:"details-list"},n.a.createElement("li",{className:"detail-title"},"Jane Doe"),n.a.createElement("li",null,"DD..."),n.a.createElement("li",null,"DD..."),n.a.createElement("li",null,"AS, 11000"),n.a.createElement("li",null,"Tanzania"),n.a.createElement("li",null,"test@test.test")))),n.a.createElement("div",{className:"detail-block"},n.a.createElement("div",{className:"segment-title"},n.a.createElement("div",{className:"round-badge selected"},"4"),n.a.createElement("p",{className:"title"},"PAYMENT METHOD")),n.a.createElement("div",{className:"segment-details checkout-form"},n.a.createElement("form",{className:"form-wrapper",onSubmit:function(e){e.preventDefault(),g(!0),"undefined"!=typeof window&&null!==o.paymentAmount&&m.a.post("https://paymongo-api.onrender.com/api/payment",o).then(function(e){var t=e.data;g(!1),f(t),!1===t.error?window.location.assign("/gatsby-paymongo-demo-store/success-payment"):window.location.assign("/gatsby-paymongo-demo-store/failed-payment")})}},n.a.createElement("div",{className:"card-info-wrapper mt-3"},n.a.createElement(s.a,{onError:function(e){e.inputName;var t=e.err;return console.log("credit card input error: "+t)},cardCVCInputProps:{name:"cvc",onBlur:function(e){return console.log("cvc blur",e)},onChange:S},cardExpiryInputProps:{name:"expiry",onBlur:function(e){return console.log("expiry blur",e)},onChange:S},cardNumberInputProps:{name:"number",onBlur:function(e){return console.log("number blur",e)},onChange:S}})),n.a.createElement("button",{type:"submit",className:u()("w-100 mt-3 btn-swipe-black hover-swipe-right btn-submit",{disabled:""===o.number||""===o.expiry||""===o.cvc||!0===E})},E?"LOADING...":"PROCEED AND PAY"))))),n.a.createElement("div",{className:"cart-details"},n.a.createElement("p",{className:"cart-detail-title border-bottom-black"},"CART SUMMARY"),n.a.createElement("span",null,a?a.map(function(e,t){return n.a.createElement("div",{key:t,className:"cart-product-item border-bottom-black"},n.a.createElement("div",{className:"image-wrapper"},n.a.createElement("div",{className:"thumbnail-holder"},n.a.createElement("img",{src:e.image1024,className:"product-image",alt:e.productName}))),n.a.createElement("div",{className:"text-wrapper"},n.a.createElement("h4",{className:"product-name"},e.productName),n.a.createElement("p",{className:"computation"},e.qtty," x PHP ",e.price," = PHP ",e.totalPrice.toFixed(2))))}):""),n.a.createElement("div",{className:"cart-prices border-bottom-black d-flex justify-content-between py-2 px-2"},n.a.createElement("p",null,"Subtotal"),n.a.createElement("p",null,"Php ",r)),n.a.createElement("div",{className:"cart-prices border-bottom-black d-flex justify-content-between py-2 px-2"},n.a.createElement("p",null,"Delivery"),n.a.createElement("p",null,"FREE")),n.a.createElement("div",{className:"cart-prices border-bottom-black d-flex justify-content-between py-2 px-2"},n.a.createElement("p",{className:"font-weight-bold"},"GRAND TOTAL"),n.a.createElement("p",null,"Php ",r))))))}},203:function(e,t,a){"use strict";var l=a(0),n=a.n(l),c=a(69),r=a.n(c);a.d(t,"a",function(){return r.a});a(204),a(9).default.enqueue,n.a.createContext({})},204:function(e,t,a){var l;e.exports=(l=a(209))&&l.default||l},206:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAAAmCAMAAACGRDV/AAAAwFBMVEUAAAASku0Sku0Sku0jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4Sku0Sku0jNz4Sku0Sku0iO0cjNz4jNz4jNz4Sku0jNz4jNz4jNz4jNz4Sku0Sku0jNz4Sku0jNz4jNz4hPk0jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4Sku0jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4Sku0Sku0Sku0Sku0Sku0jNz4Sku1llcFHAAAAPnRSTlMA6PhAMGDwkHBQQOAP7NAgrATAgCDwV0kQNeS+oTD7OwfmZyi39nqJ0pd0JBoM8tbOxavrzNyEFa6kZX9wWEOx3tIAAAP/SURBVFjD7Zhre5owFICPLd6wdYtogNUJiHdF531X+///1ZITJIZrN/thdn0/mHCeEPKS5IRH6JSK+AY3Rum5iI9wYzCluzxuUunu5302X25T6R6yeVf6J/jflfyGyhjilHnYhHqTUYcrmDUZC4hDGxwcS5PjY5TUu7vGbmrHlD58TPAtrqSdVLoQp8bDdSjzogxJY4YJL6HKe2in9M+RY9GwujqPx1WU7u+e45ReXYmHW6+tZC+jAQ3Im1By9yfJKKbUeVJhMj+enr4rSuqY/gUlEep5WAyPqlLpAfJJKo2r1aoBjHqVMU9RssyaYfQdwqqBxcNri8EuiUZnhjGjGkQQuzxibd1LJVpljEm20gTXiwX+CqfpaqUKu25Eb1VPKC26vRNSqQI0RVW0pL1zvRFOp2t4IrCcBpGSg8362bO0wNfElee86eSvlFb1EL1Qyd9GEpWYUi22A2AxkQHtrBQ0xJ7NVjJ5QYGz4VVLVfr8QSWppNAsVMJRDieTYbrStlERG2EBQHbhFClKXXyHQUzp0r3PCx84+FRHUbp7VOk8XKmkib0D4NIdU7J1vEtnWNAflBfAYs1wYfXRrRaA1fciJYqvRIMcpRm/jQDHxofnJ/Frlep4VrjigM/IeLhwDICJ3DPH7jzsbyn6yVMy2K8HiB9X6sTIVPKqIbMiJV0k1sFMS0virnnYrBtDVBK7fEvUJL4XG6lQqXcxPFMqPXxW+a6ki8KMd0hTcr1TiDciMSVihIe+UHJwQkFVQuZJpTbDDJVGIidwcFHYUinO/Z8pGWlKYOIcIF9jSl/PmVAo6TghaUrd3KM2zAnyHus1lLxsJfC70VyYipKJC83QLV0o2WmztOrheHOVsJwCA9fEHl5DqUeylDiufljjbQdFaSoaAoRKFs6YqyrZ2GpC8pTI9vy+qkJOKrkfVH69SGkf9hcM0pToOAAOJuhxqOTJY9GWSrCLzlxot/wwiR9xWc7ylGAq1rXRwtKGy4z3qPL8EiXsZ7jZ4KMTSn2WFjSAdvd8wlfQTbNrcxxI90j0CSqhNmPqtO3DUh612N9yka2E30ESr15wLhUrjWRvSaVwACJFNPiiGkQtqbxLKJGWvJRKZMXLTZ4SHraS/YXS46c4j8VKVvgRN1xnKyGeDQynd1Yi67C2C5XAGqQogSlSS54SjC+VxlKJPCSBuFKFM1BCK0xV81GF4UCfFyZQXlA4HvYnZDu2ANGFydAGayO+wh3eVOwh2hLGqxmBMQ8zJdjwyo6AgDY58f8e9IFcfHOhdBU2rbchk6NDqekTGQg03W7jddukNgGFwKFlcwF/jutrmq7rjjYHofS2eFe6Bd6VboF3pVvgDSp1Sp03pvQbFxPHO+Flvh4AAAAASUVORK5CYII="},209:function(e,t,a){"use strict";a.r(t);a(23);var l=a(0),n=a.n(l),c=a(97);t.default=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null}},210:function(e,t,a){"use strict";a(33),a(215),a(70),a(213);var l=a(0),n=a.n(l),c=a(203),r=a(207),s=a(219),i=a(323),m=a(320),o=a(321),u=a(322);t.a=function(e){var t=e.className,d=e.checkout,N=n.a.useState()[1],p=Object(l.useCallback)(function(){return N({})},[]),E=Object(l.useState)(!1),g=E[0],b=E[1],f=function(){return b(!g)},S=[],j=0,A=0,v=function(e,t){return e.reduce(function(e,a){return"string"==typeof a[t]?e+Number(a[t]):e+a[t]},0)};return"undefined"!=typeof window&&null!==(S=JSON.parse(localStorage.getItem("cartList")))&&(j=v(S,"totalPrice").toFixed(2),A=v(S,"qtty"),localStorage.setItem("total",JSON.stringify(j))),n.a.createElement("header",{className:"header"},n.a.createElement("div",{className:"container"},n.a.createElement("nav",null,n.a.createElement("ul",{className:"link-listing"},n.a.createElement("li",{className:"link-item"},d?n.a.createElement(c.a,{to:"/products",className:"link"},"RETURN TO SHOPPING"):n.a.createElement(c.a,{to:"/products",className:"link"},"Products"))),n.a.createElement("div",{className:"brand-icon-holder"},n.a.createElement(c.a,{to:"/"},n.a.createElement("img",{className:"brand-icon",src:a(206),alt:"fullstackhq-logo"}))),d?"":n.a.createElement("ul",{className:"icon-listing"},n.a.createElement("li",{className:"icon-item",onClick:f},n.a.createElement("div",{className:"icon-link"},n.a.createElement(r.a,{icon:s.b,className:"icon icon-shopping-bag"}),S?n.a.createElement("span",{className:"cart-quantity"},A):""))))),n.a.createElement(i.a,{isOpen:g,toggle:f,className:t},n.a.createElement(m.a,{toggle:f},"Your Cart"),n.a.createElement(o.a,null,n.a.createElement("ul",{className:"cart-product-listing"},S?S.map(function(e,t){return n.a.createElement("li",{key:t,className:"cart-product-item"},n.a.createElement("div",{className:"image-wrapper"},n.a.createElement("div",{className:"thumbnail-holder"},n.a.createElement("img",{src:e.image1024,className:"product-image",alt:e.productName})),n.a.createElement(u.a,{color:"link",onClick:function(){return function(e){var t=S.findIndex(function(t){return t.setID===e.setID});t>-1&&(S.splice(t,1),localStorage.setItem("cartList",JSON.stringify(S))),p()}(e)}},"Remove")),n.a.createElement("div",{className:"text-wrapper"},n.a.createElement("h4",{className:"product-name"},e.productName),n.a.createElement("p",{className:"computation"},e.qtty," x PHP ",e.price," = PHP ",e.totalPrice.toFixed(2))))}):"Your cart is empty")),S?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"total-holder"},n.a.createElement("h3",{className:"total"},"Total: ","PHP "," ",j)),n.a.createElement("div",{className:"btn-holder"},n.a.createElement(c.a,{to:"/checkout",className:"btn-swipe-black hover-swipe-right btn-checkout"},"Checkout"),n.a.createElement(c.a,{to:"/products",className:"btn-swipe-black hover-swipe-right"},"Continue Shopping"))):""))}}}]);
//# sourceMappingURL=component---src-pages-checkout-js-21e9ce4ab501df074beb.js.map