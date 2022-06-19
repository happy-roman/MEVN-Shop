(function(){"use strict";var t={5825:function(t,s,a){a(6992),a(8674),a(9601),a(7727);var e=a(8935),r=(a(1539),a(1703),a(4665)),i=a(3019),n=(a(9826),a(8862),a(2222),a(561),{namespaced:!0,state:function(){return{userCart:[]}},getters:{userCart:function(t){return t.userCart}},mutations:{getCart:function(t,s){t.userCart=s},addToCart:function(t){return t.userCart},removeFromCart:function(t){return t.userCart}},actions:{getCart:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://mevn-shop.vercel.app/api/cart";t.rootState.getFetch(s).then((function(s){t.commit("getCart",s.content)}))},addToCart:function(t,s){var a=t.state.userCart.find((function(t){return t.id_product===s.id_product})),e="",r={},n=function(){},o="https://mevn-shop.vercel.app/api/cart";a?(e="PUT",r={quantity:s.quantity||1},n=function(){a.quantity+=s.quantity||1},o+="/".concat(a.id_product)):(e="POST",r=(0,i.Z)({quantity:1},s),n=function(){t.state.userCart.push(r)}),t.rootState.getFetch(o,{method:e,headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then((function(t){1===t.result&&n()})),t.commit("addToCart")},removeFromCart:function(t,s){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"https://mevn-shop.vercel.app/api/cart",e=t.state.userCart.find((function(t){return t.id_product===s.id_product}));e.quantity>1?t.rootState.getFetch("".concat(a,"/").concat(e.id_product),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({quantity:-1})}).then((function(t){1===t.result&&(e.quantity-=1)})):t.rootState.getFetch("".concat(a,"/").concat(s.id_product),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(a){1===a.result&&t.state.userCart.splice(t.state.userCart.indexOf(s),1)})),t.commit("removeFromCart")}}}),o=n,c=(a(4747),{namespaced:!0,state:function(){return{products:[]}},getters:{products:function(t){return t.products}},mutations:{getProducts:function(t,s){s.forEach((function(s){t.products.push(s)}))}},actions:{getProducts:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://mevn-shop.vercel.app/api/products";t.rootState.getFetch(s).then((function(s){t.commit("getProducts",s)}))}}}),l=c;e.Z.use(r.ZP);var u=new r.ZP.Store({modules:{products:l,cart:o},state:function(){return{userAuth:!1,isAdmin:!1,getFetch:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return fetch(t,s).then((function(t){if(!t.ok)throw Error(t.statusText);return t.json()})).catch((function(t){throw Error(t||"Поймали ошибку")}))}}},mutations:{userAuth:function(t){t.userAuth=!t.userAuth}},actions:{toggleAuth:function(t){t.commit("userAuth")}},getters:{getUserAuth:function(t){return t.userAuth}}});u.dispatch("products/getProducts"),u.dispatch("cart/getCart");var v,d,_=u,f=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("header-block"),a("navigation"),a("router-view"),a("subscribe"),a("footer-block")],1)},p=[],h=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("header",{staticClass:"header-block"},[a("div",{staticClass:"container header-block__flex"},[a("div",{staticClass:"header-block__left"},[a("router-link",{staticClass:"logo",attrs:{to:"/"}},[a("img",{staticClass:"logo__img",attrs:{src:"/img/logo.png",alt:"logo"}}),a("p",[t._v("BRAN"),a("span",{staticClass:"pink"},[t._v("D")])])]),t._m(0),t._m(1)],1),a("div",{staticClass:"header-block__right"},[a("HeaderCart"),a("details",[a("summary",[t._v("My Account")]),a("div",{staticClass:"brows-account-menu"},[t.$store.state.userAuth?a("div",[a("div",[a("router-link",{staticClass:"account-menu-link",attrs:{to:t.adminPageLink}},[t._v("Admin page")])],1),a("div",[a("router-link",{staticClass:"account-menu-link",attrs:{to:t.adminUsersLink}},[t._v("Users")])],1),a("div",[a("router-link",{staticClass:"account-menu-link",attrs:{to:t.adminProdLink}},[t._v("Products")])],1),a("button",{staticClass:"brows-account-menu-btn",on:{click:t.accountShow}},[t._v("Log Out")])]):a("div",[a("div",[a("button",{staticClass:"brows-account-menu-btn",on:{click:t.accountShow}},[t._v("Log in")])]),t._m(2)])])])],1)])])},m=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("details",[a("summary",[t._v("Browse")]),a("div",{staticClass:"browse-menu"},[a("div",[a("p",[t._v("women")]),a("hr"),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Jackets/Coats")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Blazers")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Denim")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Leggings/Pants")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Skirts/Shorts")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Accessories ")])])])]),a("div",[a("p",[t._v("men")]),a("hr"),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Tees/Tank tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Shirts/Polos")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweatshirts/Hoodies")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Blazers")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Jackets/vests")])])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("form",{staticClass:"form",attrs:{action:"#"}},[a("label",{attrs:{for:"haeder"}}),a("input",{attrs:{id:"haeder",type:"text",placeholder:"Search for Item..."}}),a("div",[a("i",{staticClass:"fas fa-search"})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("button",{staticClass:"brows-account-menu-btn"},[t._v("Register")])])}],C=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"cart-block"},[t._m(0),a("div",{staticClass:"cart-open"},[0===this.userCart.length||void 0===this.userCart.length?a("div",[a("p",{staticClass:"cart-open__empty"},[t._v("Your cart is empty")])]):a("div",[a("div",{staticClass:"cart-block"},[a("div",{staticClass:"cart-product"},[t._l(this.userCart,(function(s){return a("cartItems",{key:s.id_product,staticClass:"cart-item",attrs:{"cart-item":s,img:s.img||t.imgCart}})})),a("div",[a("p",[t._v("total")]),a("p",[t._v("$ "+t._s(t.total))])])],2)]),t._m(1)])])])},g=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{attrs:{href:"#"}},[a("img",{staticClass:"cart",attrs:{src:"/img/cart.svg",alt:"cart"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"cart-btn"},[a("a",{attrs:{href:"checkout.html"}},[t._v("Checkout")]),a("a",{attrs:{href:"shopping-cart.html"}},[t._v("Go to cart")])])}],k=(a(6977),function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("a",{attrs:{href:"#"}},[a("img",{staticClass:"cart-img-small",attrs:{src:t.img,alt:"img"}})]),a("div",[a("a",{attrs:{href:"#"}},[t._v(t._s(t.cartItem.product_name))]),t._m(0),a("p",{staticClass:"pink"},[t._v(t._s(t.cartItem.quantity)+" x $ "+t._s(t.cartItem.price))])]),a("button",{staticClass:"cart-cancel",on:{click:t.remove}},[a("i",{staticClass:"fas fa-times-circle"})])])}),b=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("i",{staticClass:"fas fa-star"}),a("i",{staticClass:"fas fa-star"}),a("i",{staticClass:"fas fa-star"}),a("i",{staticClass:"fas fa-star"}),a("i",{staticClass:"fas fa-star-half-alt"})])}],y={name:"cartItems",props:["cartItem","img"],methods:{remove:function(){this.$store.dispatch("cart/removeFromCart",this.cartItem)}}},w=y,S=a(1001),E=(0,S.Z)(w,k,b,!1,null,null,null),x=E.exports,T={name:"header-cart",components:{cartItems:x},data:function(){return{imgCart:"https://placehold.it/72x85",showCart:!1}},computed:(0,i.Z)((0,i.Z)({},(0,r.Se)("cart",["userCart"])),{},{total:function(){var t=0;return this.userCart.forEach((function(s){t+=+s.price*s.quantity})),t.toFixed(2)}})},A=T,P=(0,S.Z)(A,C,g,!1,null,null,null),$=P.exports,D={name:"HeaderBlock",components:{HeaderCart:$},data:function(){return{auth:this.$store.getters.getUserAuth}},computed:{adminPageLink:function(){return{name:"admin"}},adminProdLink:function(){return{name:"adminProducts"}},adminUsersLink:function(){return{name:"adminUsers"}}},methods:{accountShow:function(){this.$store.dispatch("toggleAuth")}}},O=D,L=(0,S.Z)(O,h,m,!1,null,null,null),Z=L.exports,B=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},W=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"nav-top"},[a("div",{staticClass:"container"},[a("ul",{staticClass:"menu"},[a("li",{staticClass:"menu__list"},[a("a",{staticClass:"menu__link",attrs:{href:"#"}},[t._v("Home")])]),a("li",{staticClass:"menu__list"},[a("a",{staticClass:"menu__link",attrs:{href:"#"}},[t._v("Man")]),a("div",{staticClass:"hide-nav hide-nav-man"},[a("div",[a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Jackets/Coats")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Blazers")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Denim")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Leggings/Pants")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Skirts/Shorts")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Accessories ")])])])]),a("div",[a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Jackets/Coats")])])]),a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])])])]),a("div",[a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Jackets/Coats")])])]),a("img",{attrs:{src:"/img/Layer_42.png",alt:"img"}})])])]),a("li",{staticClass:"menu__list"},[a("a",{staticClass:"menu__link",attrs:{href:"#"}},[t._v("Women")]),a("div",{staticClass:"hide-nav hide-nav-women"},[a("div",[a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Jackets/Coats")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Blazers")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Denim")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Leggings/Pants")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Skirts/Shorts")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Accessories ")])])])]),a("div",[a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Jackets/Coats")])])]),a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])])])]),a("div",[a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Jackets/Coats")])])]),a("img",{attrs:{src:"img/Layer_42.png",alt:"img"}})])])]),a("li",{staticClass:"menu__list"},[a("a",{staticClass:"menu__link",attrs:{href:"#"}},[t._v("Kids")]),a("div",{staticClass:"hide-nav hide-nav-kids"},[a("div",[a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Jackets/Coats")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Blazers")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Denim")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Leggings/Pants")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Skirts/Shorts")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Accessories ")])])])]),a("div",[a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Jackets/Coats")])])]),a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])])])]),a("div",[a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Jackets/Coats")])])]),a("img",{attrs:{src:"img/Layer_42.png",alt:"img"}})])])]),a("li",{staticClass:"menu__list"},[a("a",{staticClass:"menu__link",attrs:{href:"#"}},[t._v("Accoseriese")]),a("div",{staticClass:"hide-nav hide-nav-accoriese"},[a("div",[a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Jackets/Coats")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Blazers")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Denim")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Leggings/Pants")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Skirts/Shorts")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Accessories ")])])])]),a("div",[a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Jackets/Coats")])])]),a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])])])]),a("div",[a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Jackets/Coats")])])]),a("img",{attrs:{src:"img/Layer_42.png",alt:"img"}})])])]),a("li",{staticClass:"menu__list"},[a("a",{staticClass:"menu__link",attrs:{href:"#"}},[t._v("Featured")]),a("div",{staticClass:"hide-nav hide-nav-featured"},[a("div",[a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Jackets/Coats")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Blazers")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Denim")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Leggings/Pants")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Skirts/Shorts")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Accessories ")])])])]),a("div",[a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Jackets/Coats")])])]),a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])])])]),a("div",[a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Jackets/Coats")])])]),a("img",{attrs:{src:"img/Layer_42.png",alt:"img"}})])])]),a("li",{staticClass:"menu__list"},[a("a",{staticClass:"menu__link",attrs:{href:"#"}},[t._v("Hot Deals")]),a("div",{staticClass:"hide-nav hide-nav-hot"},[a("div",[a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Jackets/Coats")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Blazers")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Denim")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Leggings/Pants")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Skirts/Shorts")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Accessories ")])])])]),a("div",[a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Jackets/Coats")])])]),a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])])])]),a("div",[a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Jackets/Coats")])])]),a("img",{attrs:{src:"img/Layer_42.png",alt:"img"}})])])])])])])}],q={name:"NavigationBlock"},K=q,F=(0,S.Z)(K,B,W,!1,null,null,null),I=F.exports,J=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"subscribe"},[a("article",{staticClass:"subscribe-slider"},[a("div",{staticClass:"slider-text"},[a("div",[a("img",{staticClass:"foto",attrs:{src:"/img/foto-1.jpg",alt:""}})]),a("div",[a("p",[t._v("“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”")]),a("p",{staticClass:"pink"},[t._v("Bin Burhan")]),a("p",[t._v("Dhaka, Bd")])])])]),a("article",{staticClass:"subscribe-right"},[a("div",{staticClass:"subscribe-info"},[a("p",[t._v("Subscribe")]),a("p",[t._v("FOR OUR NEWLETTER AND PROMOTION")])]),a("form",{attrs:{action:"#"}},[a("label",{attrs:{for:"subscribe"}}),a("input",{attrs:{id:"subscribe",type:"text",placeholder:"Enter Your Email"}}),a("button",{attrs:{type:"submit"}},[t._v("Subscribe")])])])])}],U={name:"SubscribeBlock"},R=U,H=(0,S.Z)(R,J,N,!1,null,null,null),z=H.exports,j=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"footer-top container"},[a("div",{staticClass:"brend-text"},[a("a",{staticClass:"logo footer-logo",attrs:{href:"#"}},[a("img",{staticClass:"logo__img",attrs:{src:"/img/logo.png",alt:"logo"}}),a("p",[t._v("BRAN"),a("span",{staticClass:"pink"},[t._v("D")])])]),a("p",{staticClass:"text-footer"},[t._v("Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded array of processes and cross-unit partnerships. "),a("br"),a("br"),t._v("Efficiently plagiarize 24/365 action items and focused infomediaries. Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.")])]),a("div",{staticClass:"footer-top__right"},[a("div",{staticClass:"company-footer"},[a("p",{staticClass:"pink"},[t._v("company")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Home ")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Shop")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("About")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("How It Works")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Contact")])])])]),a("div",{staticClass:"informaion-footer"},[a("p",{staticClass:"pink"},[t._v("information")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Tearms & Condition")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Privacy Policy")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("How to Buy")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("How to Sell")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Promotion")])])])]),a("div",{staticClass:"category-footer"},[a("p",{staticClass:"pink"},[t._v("shop category")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Men")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Women")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Child")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Apparel")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Brows All")])])])])])]),a("div",{staticClass:"footer-end "},[a("div",{staticClass:"container"},[a("p",[t._v("© 2017 Brand All Rights Reserved.")]),a("div",{staticClass:"social-footer"},[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fab fa-facebook-f"})]),a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fab fa-twitter"})]),a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fab fa-linkedin-in"})]),a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fab fa-pinterest-p"})]),a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fab fa-google-plus-g"})])])])])])}],Y={name:"FooterBlock"},Q=Y,G=(0,S.Z)(Q,j,M,!1,null,"19a56c57",null),V=G.exports,X={components:{HeaderBlock:Z,Navigation:I,Subscribe:z,FooterBlock:V}},tt=X,st=(0,S.Z)(tt,f,p,!1,null,null,null),at=st.exports,et=a(2809),rt=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"home"},[a("promo"),a("category"),a("product-block")],1)},it=[],nt=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},ot=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"promo"},[a("article",{staticClass:"container promo__flex"},[a("div",{staticClass:"promo__content"},[a("h2",{staticClass:"promo__text promo__text_big"},[t._v("THE BRAND")]),a("p",{staticClass:"promo__text"},[t._v("OF LUXERIOUS "),a("span",{staticClass:"pink"},[t._v("FASHION")])])])])])}],ct={name:"PromoBlock"},lt=ct,ut=(0,S.Z)(lt,nt,ot,!1,null,null,null),vt=ut.exports,dt=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"product-block container"},[a("h3",[t._v("Fetured Items")]),a("p",[t._v("Shop for items based on what we featured in this week")]),a("products"),a("button",{staticClass:"browse-all"},[t._v("Browse All Product >")]),t._m(0)],1)},_t=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"feature"},[a("div",{staticClass:"feature-banner"},[a("div",{staticClass:"feature-banner-text"},[a("p",[t._v("30% "),a("span",{staticClass:"pink"},[t._v("OFFER ")])]),a("p",[t._v("for women")])])]),a("div",{staticClass:"feature-box"},[a("div",{staticClass:"delivery"},[a("img",{attrs:{src:"img/car.svg",alt:"car"}}),a("div",{staticClass:"feature-box-text"},[a("ul",[a("li",[t._v("Free Delivery")]),a("li",[t._v("Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.")])])])]),a("div",{staticClass:"sales"},[a("img",{attrs:{src:"img/procent.svg",alt:"procent"}}),a("div",{staticClass:"feature-box-text"},[a("ul",[a("li",[t._v("Sales & discounts")]),a("li",[t._v("Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.")])])])]),a("div",{staticClass:"quality"},[a("img",{attrs:{src:"img/qween.svg",alt:"qween"}}),a("div",{staticClass:"feature-box-text"},[a("ul",[a("li",[t._v("Quality assurance")]),a("li",[t._v("Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.")])])])])])])}],ft=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",{staticClass:"products product-pic"},t._l(this.products,(function(t){return a("product",{key:t.id_product,attrs:{product:t}})})),1)},pt=[],ht=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",{staticClass:"product-list"},[a("div",{staticClass:"product-pic-price"},[a("div",{staticClass:"mask"},[a("button",{staticClass:"shake-top buy-btn",on:{click:t.add}},[a("img",{attrs:{src:"img/Form_1_copy.svg",alt:"cart"}}),t._v(" Add to Cart ")])]),a("router-link",{attrs:{to:t.getProductLink()}},[a("img",{staticClass:"product-img",attrs:{src:t.product.img,alt:"prodImg"}})]),a("div",{staticClass:"product-price"},[a("p",{staticClass:"product-name"},[t._v(t._s(t.product.product_name))]),a("p",{staticClass:"pink price"},[t._v("$"),a("span",[t._v(t._s(t.product.price))])])])],1)])},mt=[],Ct={name:"ProductBlock",props:["product"],data:function(){return{}},methods:{getProductLink:function(){return{name:"goods",params:{id:this.product.id_product}}},add:function(){this.$store.dispatch("cart/addToCart",this.product)}}},gt=Ct,kt=(0,S.Z)(gt,ht,mt,!1,null,"22f95aa5",null),bt=kt.exports,yt={name:"ProductsBlock",components:{product:bt},data:function(){return{imgCatalog:"https://placehold.it/260x280"}},computed:(0,i.Z)({},(0,r.Se)("products",["products"]))},wt=yt,St=(0,S.Z)(wt,ft,pt,!1,null,"28272b4e",null),Et=St.exports,xt={name:"ProductBlock",components:{products:Et}},Tt=xt,At=(0,S.Z)(Tt,dt,_t,!1,null,"13990ead",null),Pt=At.exports,$t=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},Dt=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"category container"},[a("article",{staticClass:"baner baner-1"},[a("div",{staticClass:"badge"},[a("p",{staticClass:"textbadge"},[t._v("hOT dEAL")]),a("span",{staticClass:"pink pink-badge"},[t._v("FOR MEN")])])]),a("article",{staticClass:"baner baner-2"},[a("div",{staticClass:"badge"},[a("p",{staticClass:"textbadge"},[t._v("LUXIROUS & trendy ")]),a("span",{staticClass:"pink pink-badge"},[t._v("ACCESORIES")])])]),a("article",{staticClass:"baner baner-3"},[a("div",{staticClass:"badge"},[a("p",{staticClass:"textbadge"},[t._v("30% offer ")]),a("span",{staticClass:"pink pink-badge"},[t._v("women")])])]),a("article",{staticClass:"baner baner-4"},[a("div",{staticClass:"badge"},[a("p",{staticClass:"textbadge"},[t._v("new arrivals")]),a("span",{staticClass:"pink pink-badge"},[t._v("FOR kids")])])])])}],Ot={name:"categoryBlock"},Lt=Ot,Zt=(0,S.Z)(Lt,$t,Dt,!1,null,"000c97ea",null),Bt=Zt.exports,Wt={name:"HomePage",components:{Category:Bt,ProductBlock:Pt,Promo:vt}},qt=Wt,Kt=(0,S.Z)(qt,rt,it,!1,null,null,null),Ft=Kt.exports,It=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div")},Jt=[],Nt={name:"CartPage"},Ut=Nt,Rt=(0,S.Z)(Ut,It,Jt,!1,null,"76d52c2e",null),Ht=Rt.exports,zt=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[t.product?a("div",[a("section",{staticClass:"single-page-slider"},[t._m(0),a("img",{attrs:{src:t.product.img,alt:"img"}}),t._m(1)]),a("section",{staticClass:"description-product container"},[a("div",{staticClass:"decripsion"},[a("p",{staticClass:"pink"},[t._v(t._s(t.product.category_name)+" COLLECTION")]),a("p",[t._v(t._s(t.product.product_name))]),a("p",[t._v("Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals. ")]),a("div",{staticClass:"specifications"},[a("div",[a("p",[t._v("MATERIAL: "),a("span",[t._v(t._s(t.product.material))])])]),a("div",[a("p",[t._v("DESIGNER: "),a("span",[t._v(t._s(t.product.designer))])])])]),a("p",{staticClass:"pink price-product price"},[t._v("$ "+t._s(t.product.price))]),a("div",{staticClass:"select-product"},[a("div",[a("p",[t._v("CHOOSE COLOR")]),a("select",{staticClass:"selector-product",attrs:{id:"color"}},t._l(t.product.colors,(function(s){return a("option",{key:s},[t._v(t._s(s))])})),0)]),a("div",[a("p",[t._v("CHooSE SIZE")]),a("select",{staticClass:"selector-product",attrs:{id:"size"}},t._l(t.product.sizes,(function(s){return a("option",{key:s},[t._v(t._s(s))])})),0)]),a("div",[a("p",[t._v("QUANTITY")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],staticClass:"selector-product",attrs:{id:"quantity",name:"quantity"},on:{change:function(s){var a=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){var s="_value"in t?t._value:t.value;return s}));t.quantity=s.target.multiple?a:a[0]}}},t._l(10,(function(s){return a("option",{key:s},[t._v(t._s(s))])})),0)])]),a("button",{staticClass:"pink",attrs:{name:"add-to-cart"},on:{click:t.add}},[a("img",{attrs:{src:"/img/pink-cart.svg",alt:"img"}}),t._v(" Add to cart ")])])])]):a("div",{staticClass:"product-not-found"},[a("h3",[t._v("Product not found")]),a("router-link",{staticClass:"product-not-found-link",attrs:{to:"/"}},[t._v("You can back to main page")])],1)])},jt=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("button",{staticClass:"slider-nav"},[a("i",{staticClass:"fas fa-chevron-left"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("button",{staticClass:"slider-nav"},[a("i",{staticClass:"fas fa-chevron-right"})])}],Mt=(a(9653),{name:"product-page",data:function(){return{product:"",quantity:""}},methods:(0,i.Z)((0,i.Z)({},(0,r.nv)("cart",["addToCart"])),{},{add:function(){if(!this.quantity)throw Error("enter quantity");this.product.quantity=parseInt(this.quantity,10),this.addToCart(this.product)}}),computed:(0,i.Z)({},(0,r.Se)("products",["products"])),mounted:function(){var t=this,s=this.products.find((function(s){return s.id_product===Number(t.$route.params.id)}));s?this.product=s:fetch("http://localhost:5000/api/products/".concat(this.$route.params.id)).then((function(t){return t.json()})).then((function(s){t.product=s})).catch((function(t){throw Error(t||"Поймали ошибку")}))},watch:{$route:function(){(isNaN(this.$route.params.id)||"string"===typeof this.$route.params.id)&&this.$router.push("/")}}}),Yt=Mt,Qt=(0,S.Z)(Yt,zt,jt,!1,null,null,null),Gt=Qt.exports,Vt={},Xt=(0,S.Z)(Vt,v,d,!1,null,null,null),ts=Xt.exports,ss=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"admin-page"},[a("div",{staticClass:"admin-links"},[a("router-link",{staticClass:"admin-link",attrs:{to:t.adminUsersLink}},[t._v("Users")]),a("router-link",{staticClass:"admin-link",attrs:{to:t.adminProdLink}},[t._v("Products")])],1),t._m(0),a("router-view")],1)},as=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"admin-info"},[a("h3",[t._v("Admin info")]),a("p",{staticClass:"admin-text"},[t._v("On this page admin can look users and add products")]),a("hr")])}],es={name:"AdminPage",computed:{adminProdLink:function(){return{name:"adminProducts"}},adminUsersLink:function(){return{name:"adminUsers"}}}},rs=es,is=(0,S.Z)(rs,ss,as,!1,null,"08d31ef3",null),ns=is.exports,os=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[t._v("Users")])},cs=[],ls={name:"AdminUsers"},us=ls,vs=(0,S.Z)(us,os,cs,!1,null,"420f94f6",null),ds=vs.exports,_s=[{path:"/",name:"home",component:Ft,alias:"/home"},{path:"/user-cart",name:"user-cart",component:Ht},{path:"/goods/:id",name:"goods",component:Gt,props:!0},{path:"/admin",name:"admin",component:ns,children:[{path:"users",component:ds,name:"adminUsers"},{path:"products",component:ts,name:"adminProducts"}]},{path:"/:catchAll(.*)",redirect:"/home"}],fs=_s;e.Z.use(et.Z);var ps=new et.Z({mode:{NODE_ENV:"production",BASE_URL:"/"}.IS_ELECTRON?"hash":"history",base:"/",routes:fs}),hs=ps;e.Z.config.productionTip=!1,new e.Z({router:hs,store:_,render:function(t){return t(at)}}).$mount("#app")}},s={};function a(e){var r=s[e];if(void 0!==r)return r.exports;var i=s[e]={exports:{}};return t[e](i,i.exports,a),i.exports}a.m=t,function(){var t=[];a.O=function(s,e,r,i){if(!e){var n=1/0;for(u=0;u<t.length;u++){e=t[u][0],r=t[u][1],i=t[u][2];for(var o=!0,c=0;c<e.length;c++)(!1&i||n>=i)&&Object.keys(a.O).every((function(t){return a.O[t](e[c])}))?e.splice(c--,1):(o=!1,i<n&&(n=i));if(o){t.splice(u--,1);var l=r();void 0!==l&&(s=l)}}return s}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[e,r,i]}}(),function(){a.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(s,{a:s}),s}}(),function(){a.d=function(t,s){for(var e in s)a.o(s,e)&&!a.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:s[e]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){var t={143:0};a.O.j=function(s){return 0===t[s]};var s=function(s,e){var r,i,n=e[0],o=e[1],c=e[2],l=0;if(n.some((function(s){return 0!==t[s]}))){for(r in o)a.o(o,r)&&(a.m[r]=o[r]);if(c)var u=c(a)}for(s&&s(e);l<n.length;l++)i=n[l],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(u)},e=self["webpackChunkmevn_shop"]=self["webpackChunkmevn_shop"]||[];e.forEach(s.bind(null,0)),e.push=s.bind(null,e.push.bind(e))}();var e=a.O(void 0,[998],(function(){return a(5825)}));e=a.O(e)})();
//# sourceMappingURL=app-legacy.647ed711.js.map