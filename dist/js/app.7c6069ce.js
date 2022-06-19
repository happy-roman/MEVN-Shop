(function(){"use strict";var t={5825:function(t,s,a){var e=a(8935),r=(a(1703),a(4665));const i={namespaced:!0,state(){return{userCart:[]}},getters:{userCart(t){return t.userCart}},mutations:{getCart(t,s){t.userCart=s},addToCart(t){return t.userCart},removeFromCart(t){return t.userCart}},actions:{getCart(t,s="https://mevn-shop.vercel.app/api/cart"){t.rootState.getFetch(s).then((s=>{t.commit("getCart",s.content)}))},addToCart(t,s){const a=t.state.userCart.find((t=>t.id_product===s.id_product));let e="",r={},i=()=>{},n="https://mevn-shop.vercel.app/api/cart";a?(e="PUT",r={quantity:s.quantity||1},i=()=>{a.quantity+=s.quantity||1},n+=`/${a.id_product}`):(e="POST",r={quantity:1,...s},i=()=>{t.state.userCart.push(r)}),t.rootState.getFetch(n,{method:e,headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then((t=>{1===t.result&&i()})),t.commit("addToCart")},removeFromCart(t,s,a="https://mevn-shop.vercel.app/api/cart"){const e=t.state.userCart.find((t=>t.id_product===s.id_product));e.quantity>1?t.rootState.getFetch(`${a}/${e.id_product}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({quantity:-1})}).then((t=>{1===t.result&&(e.quantity-=1)})):t.rootState.getFetch(`${a}/${s.id_product}`,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((a=>{1===a.result&&t.state.userCart.splice(t.state.userCart.indexOf(s),1)})),t.commit("removeFromCart")}}};var n=i;const o={namespaced:!0,state(){return{products:[]}},getters:{products(t){return t.products}},mutations:{getProducts(t,s){s.forEach((s=>{t.products.push(s)}))}},actions:{getProducts(t,s="https://mevn-shop.vercel.app/api/products"){t.rootState.getFetch(s).then((s=>{t.commit("getProducts",s)}))}}};var l=o;e.Z.use(r.ZP);const c=new r.ZP.Store({modules:{products:l,cart:n},state(){return{userAuth:!1,isAdmin:!1,getFetch(t,s=null){return fetch(t,s).then((t=>{if(!t.ok)throw Error(t.statusText);return t.json()})).catch((t=>{throw Error(t||"Поймали ошибку")}))}}},mutations:{userAuth(t){t.userAuth=!t.userAuth}},actions:{toggleAuth(t){t.commit("userAuth")}},getters:{getUserAuth(t){return t.userAuth}}});c.dispatch("products/getProducts"),c.dispatch("cart/getCart");var u,v,d=c,_=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("header-block"),a("navigation"),a("router-view"),a("subscribe"),a("footer-block")],1)},p=[],h=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("header",{staticClass:"header-block"},[a("div",{staticClass:"container header-block__flex"},[a("div",{staticClass:"header-block__left"},[a("router-link",{staticClass:"logo",attrs:{to:"/"}},[a("img",{staticClass:"logo__img",attrs:{src:"/img/logo.png",alt:"logo"}}),a("p",[t._v("BRAN"),a("span",{staticClass:"pink"},[t._v("D")])])]),t._m(0),t._m(1)],1),a("div",{staticClass:"header-block__right"},[a("HeaderCart"),a("details",[a("summary",[t._v("My Account")]),a("div",{staticClass:"brows-account-menu"},[t.$store.state.userAuth?a("div",[a("div",[a("router-link",{staticClass:"account-menu-link",attrs:{to:t.adminPageLink}},[t._v("Admin page")])],1),a("div",[a("router-link",{staticClass:"account-menu-link",attrs:{to:t.adminUsersLink}},[t._v("Users")])],1),a("div",[a("router-link",{staticClass:"account-menu-link",attrs:{to:t.adminProdLink}},[t._v("Products")])],1),a("button",{staticClass:"brows-account-menu-btn",on:{click:t.accountShow}},[t._v("Log Out")])]):a("div",[a("div",[a("button",{staticClass:"brows-account-menu-btn",on:{click:t.accountShow}},[t._v("Log in")])]),t._m(2)])])])],1)])])},f=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("details",[a("summary",[t._v("Browse")]),a("div",{staticClass:"browse-menu"},[a("div",[a("p",[t._v("women")]),a("hr"),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Jackets/Coats")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Blazers")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Denim")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Leggings/Pants")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Skirts/Shorts")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Accessories ")])])])]),a("div",[a("p",[t._v("men")]),a("hr"),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Tees/Tank tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Shirts/Polos")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweatshirts/Hoodies")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Blazers")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Jackets/vests")])])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("form",{staticClass:"form",attrs:{action:"#"}},[a("label",{attrs:{for:"haeder"}}),a("input",{attrs:{id:"haeder",type:"text",placeholder:"Search for Item..."}}),a("div",[a("i",{staticClass:"fas fa-search"})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("button",{staticClass:"brows-account-menu-btn"},[t._v("Register")])])}],m=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"cart-block"},[t._m(0),a("div",{staticClass:"cart-open"},[0===this.userCart.length||void 0===this.userCart.length?a("div",[a("p",{staticClass:"cart-open__empty"},[t._v("Your cart is empty")])]):a("div",[a("div",{staticClass:"cart-block"},[a("div",{staticClass:"cart-product"},[t._l(this.userCart,(function(s){return a("cartItems",{key:s.id_product,staticClass:"cart-item",attrs:{"cart-item":s,img:s.img||t.imgCart}})})),a("div",[a("p",[t._v("total")]),a("p",[t._v("$ "+t._s(t.total))])])],2)]),t._m(1)])])])},C=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{attrs:{href:"#"}},[a("img",{staticClass:"cart",attrs:{src:"/img/cart.svg",alt:"cart"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"cart-btn"},[a("a",{attrs:{href:"checkout.html"}},[t._v("Checkout")]),a("a",{attrs:{href:"shopping-cart.html"}},[t._v("Go to cart")])])}],g=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("a",{attrs:{href:"#"}},[a("img",{staticClass:"cart-img-small",attrs:{src:t.img,alt:"img"}})]),a("div",[a("a",{attrs:{href:"#"}},[t._v(t._s(t.cartItem.product_name))]),t._m(0),a("p",{staticClass:"pink"},[t._v(t._s(t.cartItem.quantity)+" x $ "+t._s(t.cartItem.price))])]),a("button",{staticClass:"cart-cancel",on:{click:t.remove}},[a("i",{staticClass:"fas fa-times-circle"})])])},k=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("i",{staticClass:"fas fa-star"}),a("i",{staticClass:"fas fa-star"}),a("i",{staticClass:"fas fa-star"}),a("i",{staticClass:"fas fa-star"}),a("i",{staticClass:"fas fa-star-half-alt"})])}],b={name:"cartItems",props:["cartItem","img"],methods:{remove(){this.$store.dispatch("cart/removeFromCart",this.cartItem)}}},y=b,w=a(1001),S=(0,w.Z)(y,g,k,!1,null,null,null),E=S.exports,x={name:"header-cart",components:{cartItems:E},data(){return{imgCart:"https://placehold.it/72x85",showCart:!1}},computed:{...(0,r.Se)("cart",["userCart"]),total(){let t=0;return this.userCart.forEach((s=>{t+=+s.price*s.quantity})),t.toFixed(2)}}},T=x,$=(0,w.Z)(T,m,C,!1,null,null,null),A=$.exports,P={name:"HeaderBlock",components:{HeaderCart:A},data(){return{auth:this.$store.getters.getUserAuth}},computed:{adminPageLink(){return{name:"admin"}},adminProdLink(){return{name:"adminProducts"}},adminUsersLink(){return{name:"adminUsers"}}},methods:{accountShow(){this.$store.dispatch("toggleAuth")}}},D=P,O=(0,w.Z)(D,h,f,!1,null,null,null),L=O.exports,B=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},W=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"nav-top"},[a("div",{staticClass:"container"},[a("ul",{staticClass:"menu"},[a("li",{staticClass:"menu__list"},[a("a",{staticClass:"menu__link",attrs:{href:"#"}},[t._v("Home")])]),a("li",{staticClass:"menu__list"},[a("a",{staticClass:"menu__link",attrs:{href:"#"}},[t._v("Man")]),a("div",{staticClass:"hide-nav hide-nav-man"},[a("div",[a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Jackets/Coats")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Blazers")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Denim")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Leggings/Pants")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Skirts/Shorts")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Accessories ")])])])]),a("div",[a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Jackets/Coats")])])]),a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])])])]),a("div",[a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Jackets/Coats")])])]),a("img",{attrs:{src:"/img/Layer_42.png",alt:"img"}})])])]),a("li",{staticClass:"menu__list"},[a("a",{staticClass:"menu__link",attrs:{href:"#"}},[t._v("Women")]),a("div",{staticClass:"hide-nav hide-nav-women"},[a("div",[a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Jackets/Coats")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Blazers")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Denim")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Leggings/Pants")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Skirts/Shorts")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Accessories ")])])])]),a("div",[a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Jackets/Coats")])])]),a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])])])]),a("div",[a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Jackets/Coats")])])]),a("img",{attrs:{src:"img/Layer_42.png",alt:"img"}})])])]),a("li",{staticClass:"menu__list"},[a("a",{staticClass:"menu__link",attrs:{href:"#"}},[t._v("Kids")]),a("div",{staticClass:"hide-nav hide-nav-kids"},[a("div",[a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Jackets/Coats")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Blazers")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Denim")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Leggings/Pants")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Skirts/Shorts")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Accessories ")])])])]),a("div",[a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Jackets/Coats")])])]),a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])])])]),a("div",[a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Jackets/Coats")])])]),a("img",{attrs:{src:"img/Layer_42.png",alt:"img"}})])])]),a("li",{staticClass:"menu__list"},[a("a",{staticClass:"menu__link",attrs:{href:"#"}},[t._v("Accoseriese")]),a("div",{staticClass:"hide-nav hide-nav-accoriese"},[a("div",[a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Jackets/Coats")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Blazers")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Denim")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Leggings/Pants")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Skirts/Shorts")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Accessories ")])])])]),a("div",[a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Jackets/Coats")])])]),a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])])])]),a("div",[a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Jackets/Coats")])])]),a("img",{attrs:{src:"img/Layer_42.png",alt:"img"}})])])]),a("li",{staticClass:"menu__list"},[a("a",{staticClass:"menu__link",attrs:{href:"#"}},[t._v("Featured")]),a("div",{staticClass:"hide-nav hide-nav-featured"},[a("div",[a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Jackets/Coats")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Blazers")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Denim")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Leggings/Pants")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Skirts/Shorts")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Accessories ")])])])]),a("div",[a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Jackets/Coats")])])]),a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])])])]),a("div",[a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Jackets/Coats")])])]),a("img",{attrs:{src:"img/Layer_42.png",alt:"img"}})])])]),a("li",{staticClass:"menu__list"},[a("a",{staticClass:"menu__link",attrs:{href:"#"}},[t._v("Hot Deals")]),a("div",{staticClass:"hide-nav hide-nav-hot"},[a("div",[a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Jackets/Coats")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Blazers")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Denim")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Leggings/Pants")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Skirts/Shorts")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Accessories ")])])])]),a("div",[a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Jackets/Coats")])])]),a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])])])]),a("div",[a("p",[t._v("Women")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Dresses")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tops")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sweaters/Knits")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Jackets/Coats")])])]),a("img",{attrs:{src:"img/Layer_42.png",alt:"img"}})])])])])])])}],q={name:"NavigationBlock"},Z=q,K=(0,w.Z)(Z,B,W,!1,null,null,null),F=K.exports,I=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},J=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"subscribe"},[a("article",{staticClass:"subscribe-slider"},[a("div",{staticClass:"slider-text"},[a("div",[a("img",{staticClass:"foto",attrs:{src:"/img/foto-1.jpg",alt:""}})]),a("div",[a("p",[t._v("“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”")]),a("p",{staticClass:"pink"},[t._v("Bin Burhan")]),a("p",[t._v("Dhaka, Bd")])])])]),a("article",{staticClass:"subscribe-right"},[a("div",{staticClass:"subscribe-info"},[a("p",[t._v("Subscribe")]),a("p",[t._v("FOR OUR NEWLETTER AND PROMOTION")])]),a("form",{attrs:{action:"#"}},[a("label",{attrs:{for:"subscribe"}}),a("input",{attrs:{id:"subscribe",type:"text",placeholder:"Enter Your Email"}}),a("button",{attrs:{type:"submit"}},[t._v("Subscribe")])])])])}],N={name:"SubscribeBlock"},U=N,R=(0,w.Z)(U,I,J,!1,null,null,null),H=R.exports,z=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"footer-top container"},[a("div",{staticClass:"brend-text"},[a("a",{staticClass:"logo footer-logo",attrs:{href:"#"}},[a("img",{staticClass:"logo__img",attrs:{src:"/img/logo.png",alt:"logo"}}),a("p",[t._v("BRAN"),a("span",{staticClass:"pink"},[t._v("D")])])]),a("p",{staticClass:"text-footer"},[t._v("Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded array of processes and cross-unit partnerships. "),a("br"),a("br"),t._v("Efficiently plagiarize 24/365 action items and focused infomediaries. Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.")])]),a("div",{staticClass:"footer-top__right"},[a("div",{staticClass:"company-footer"},[a("p",{staticClass:"pink"},[t._v("company")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Home ")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Shop")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("About")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("How It Works")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Contact")])])])]),a("div",{staticClass:"informaion-footer"},[a("p",{staticClass:"pink"},[t._v("information")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Tearms & Condition")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Privacy Policy")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("How to Buy")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("How to Sell")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Promotion")])])])]),a("div",{staticClass:"category-footer"},[a("p",{staticClass:"pink"},[t._v("shop category")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Men")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Women")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Child")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Apparel")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Brows All")])])])])])]),a("div",{staticClass:"footer-end "},[a("div",{staticClass:"container"},[a("p",[t._v("© 2017 Brand All Rights Reserved.")]),a("div",{staticClass:"social-footer"},[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fab fa-facebook-f"})]),a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fab fa-twitter"})]),a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fab fa-linkedin-in"})]),a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fab fa-pinterest-p"})]),a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fab fa-google-plus-g"})])])])])])}],M={name:"FooterBlock"},Y=M,Q=(0,w.Z)(Y,z,j,!1,null,"19a56c57",null),G=Q.exports,V={components:{HeaderBlock:L,Navigation:F,Subscribe:H,FooterBlock:G}},X=V,tt=(0,w.Z)(X,_,p,!1,null,null,null),st=tt.exports,at=a(2809),et=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"home"},[a("promo"),a("category"),a("product-block")],1)},rt=[],it=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},nt=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"promo"},[a("article",{staticClass:"container promo__flex"},[a("div",{staticClass:"promo__content"},[a("h2",{staticClass:"promo__text promo__text_big"},[t._v("THE BRAND")]),a("p",{staticClass:"promo__text"},[t._v("OF LUXERIOUS "),a("span",{staticClass:"pink"},[t._v("FASHION")])])])])])}],ot={name:"PromoBlock"},lt=ot,ct=(0,w.Z)(lt,it,nt,!1,null,null,null),ut=ct.exports,vt=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"product-block container"},[a("h3",[t._v("Fetured Items")]),a("p",[t._v("Shop for items based on what we featured in this week")]),a("products"),a("button",{staticClass:"browse-all"},[t._v("Browse All Product >")]),t._m(0)],1)},dt=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"feature"},[a("div",{staticClass:"feature-banner"},[a("div",{staticClass:"feature-banner-text"},[a("p",[t._v("30% "),a("span",{staticClass:"pink"},[t._v("OFFER ")])]),a("p",[t._v("for women")])])]),a("div",{staticClass:"feature-box"},[a("div",{staticClass:"delivery"},[a("img",{attrs:{src:"img/car.svg",alt:"car"}}),a("div",{staticClass:"feature-box-text"},[a("ul",[a("li",[t._v("Free Delivery")]),a("li",[t._v("Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.")])])])]),a("div",{staticClass:"sales"},[a("img",{attrs:{src:"img/procent.svg",alt:"procent"}}),a("div",{staticClass:"feature-box-text"},[a("ul",[a("li",[t._v("Sales & discounts")]),a("li",[t._v("Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.")])])])]),a("div",{staticClass:"quality"},[a("img",{attrs:{src:"img/qween.svg",alt:"qween"}}),a("div",{staticClass:"feature-box-text"},[a("ul",[a("li",[t._v("Quality assurance")]),a("li",[t._v("Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.")])])])])])])}],_t=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",{staticClass:"products product-pic"},t._l(this.products,(function(t){return a("product",{key:t.id_product,attrs:{product:t}})})),1)},pt=[],ht=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",{staticClass:"product-list"},[a("div",{staticClass:"product-pic-price"},[a("div",{staticClass:"mask"},[a("button",{staticClass:"shake-top buy-btn",on:{click:t.add}},[a("img",{attrs:{src:"img/Form_1_copy.svg",alt:"cart"}}),t._v(" Add to Cart ")])]),a("router-link",{attrs:{to:t.getProductLink()}},[a("img",{staticClass:"product-img",attrs:{src:t.product.img,alt:"prodImg"}})]),a("div",{staticClass:"product-price"},[a("p",{staticClass:"product-name"},[t._v(t._s(t.product.product_name))]),a("p",{staticClass:"pink price"},[t._v("$"),a("span",[t._v(t._s(t.product.price))])])])],1)])},ft=[],mt={name:"ProductBlock",props:["product"],data(){return{}},methods:{getProductLink(){return{name:"goods",params:{id:this.product.id_product}}},add(){this.$store.dispatch("cart/addToCart",this.product)}}},Ct=mt,gt=(0,w.Z)(Ct,ht,ft,!1,null,"22f95aa5",null),kt=gt.exports,bt={name:"ProductsBlock",components:{product:kt},data(){return{imgCatalog:"https://placehold.it/260x280"}},computed:{...(0,r.Se)("products",["products"])}},yt=bt,wt=(0,w.Z)(yt,_t,pt,!1,null,"28272b4e",null),St=wt.exports,Et={name:"ProductBlock",components:{products:St}},xt=Et,Tt=(0,w.Z)(xt,vt,dt,!1,null,"13990ead",null),$t=Tt.exports,At=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},Pt=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"category container"},[a("article",{staticClass:"baner baner-1"},[a("div",{staticClass:"badge"},[a("p",{staticClass:"textbadge"},[t._v("hOT dEAL")]),a("span",{staticClass:"pink pink-badge"},[t._v("FOR MEN")])])]),a("article",{staticClass:"baner baner-2"},[a("div",{staticClass:"badge"},[a("p",{staticClass:"textbadge"},[t._v("LUXIROUS & trendy ")]),a("span",{staticClass:"pink pink-badge"},[t._v("ACCESORIES")])])]),a("article",{staticClass:"baner baner-3"},[a("div",{staticClass:"badge"},[a("p",{staticClass:"textbadge"},[t._v("30% offer ")]),a("span",{staticClass:"pink pink-badge"},[t._v("women")])])]),a("article",{staticClass:"baner baner-4"},[a("div",{staticClass:"badge"},[a("p",{staticClass:"textbadge"},[t._v("new arrivals")]),a("span",{staticClass:"pink pink-badge"},[t._v("FOR kids")])])])])}],Dt={name:"categoryBlock"},Ot=Dt,Lt=(0,w.Z)(Ot,At,Pt,!1,null,"000c97ea",null),Bt=Lt.exports,Wt={name:"HomePage",components:{Category:Bt,ProductBlock:$t,Promo:ut}},qt=Wt,Zt=(0,w.Z)(qt,et,rt,!1,null,null,null),Kt=Zt.exports,Ft=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div")},It=[],Jt={name:"CartPage"},Nt=Jt,Ut=(0,w.Z)(Nt,Ft,It,!1,null,"76d52c2e",null),Rt=Ut.exports,Ht=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[t.product?a("div",[a("section",{staticClass:"single-page-slider"},[t._m(0),a("img",{attrs:{src:t.product.img,alt:"img"}}),t._m(1)]),a("section",{staticClass:"description-product container"},[a("div",{staticClass:"decripsion"},[a("p",{staticClass:"pink"},[t._v(t._s(t.product.category_name)+" COLLECTION")]),a("p",[t._v(t._s(t.product.product_name))]),a("p",[t._v("Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals. ")]),a("div",{staticClass:"specifications"},[a("div",[a("p",[t._v("MATERIAL: "),a("span",[t._v(t._s(t.product.material))])])]),a("div",[a("p",[t._v("DESIGNER: "),a("span",[t._v(t._s(t.product.designer))])])])]),a("p",{staticClass:"pink price-product price"},[t._v("$ "+t._s(t.product.price))]),a("div",{staticClass:"select-product"},[a("div",[a("p",[t._v("CHOOSE COLOR")]),a("select",{staticClass:"selector-product",attrs:{id:"color"}},t._l(t.product.colors,(function(s){return a("option",{key:s},[t._v(t._s(s))])})),0)]),a("div",[a("p",[t._v("CHooSE SIZE")]),a("select",{staticClass:"selector-product",attrs:{id:"size"}},t._l(t.product.sizes,(function(s){return a("option",{key:s},[t._v(t._s(s))])})),0)]),a("div",[a("p",[t._v("QUANTITY")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],staticClass:"selector-product",attrs:{id:"quantity",name:"quantity"},on:{change:function(s){var a=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){var s="_value"in t?t._value:t.value;return s}));t.quantity=s.target.multiple?a:a[0]}}},t._l(10,(function(s){return a("option",{key:s},[t._v(t._s(s))])})),0)])]),a("button",{staticClass:"pink",attrs:{name:"add-to-cart"},on:{click:t.add}},[a("img",{attrs:{src:"/img/pink-cart.svg",alt:"img"}}),t._v(" Add to cart ")])])])]):a("div",{staticClass:"product-not-found"},[a("h3",[t._v("Product not found")]),a("router-link",{staticClass:"product-not-found-link",attrs:{to:"/"}},[t._v("You can back to main page")])],1)])},zt=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("button",{staticClass:"slider-nav"},[a("i",{staticClass:"fas fa-chevron-left"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("button",{staticClass:"slider-nav"},[a("i",{staticClass:"fas fa-chevron-right"})])}],jt={name:"product-page",data(){return{product:"",quantity:""}},methods:{...(0,r.nv)("cart",["addToCart"]),add(){if(!this.quantity)throw Error("enter quantity");this.product.quantity=parseInt(this.quantity,10),this.addToCart(this.product)}},computed:{...(0,r.Se)("products",["products"])},mounted(){const t=this.products.find((t=>t.id_product===Number(this.$route.params.id)));t?this.product=t:fetch(`http://localhost:5000/api/products/${this.$route.params.id}`).then((t=>t.json())).then((t=>{this.product=t})).catch((t=>{throw Error(t||"Поймали ошибку")}))},watch:{$route(){(isNaN(this.$route.params.id)||"string"===typeof this.$route.params.id)&&this.$router.push("/")}}},Mt=jt,Yt=(0,w.Z)(Mt,Ht,zt,!1,null,null,null),Qt=Yt.exports,Gt={},Vt=(0,w.Z)(Gt,u,v,!1,null,null,null),Xt=Vt.exports,ts=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"admin-page"},[a("div",{staticClass:"admin-links"},[a("router-link",{staticClass:"admin-link",attrs:{to:t.adminUsersLink}},[t._v("Users")]),a("router-link",{staticClass:"admin-link",attrs:{to:t.adminProdLink}},[t._v("Products")])],1),t._m(0),a("router-view")],1)},ss=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"admin-info"},[a("h3",[t._v("Admin info")]),a("p",{staticClass:"admin-text"},[t._v("On this page admin can look users and add products")]),a("hr")])}],as={name:"AdminPage",computed:{adminProdLink(){return{name:"adminProducts"}},adminUsersLink(){return{name:"adminUsers"}}}},es=as,rs=(0,w.Z)(es,ts,ss,!1,null,"08d31ef3",null),is=rs.exports,ns=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[t._v("Users")])},os=[],ls={name:"AdminUsers"},cs=ls,us=(0,w.Z)(cs,ns,os,!1,null,"420f94f6",null),vs=us.exports;const ds=[{path:"/",name:"home",component:Kt,alias:"/home"},{path:"/user-cart",name:"user-cart",component:Rt},{path:"/goods/:id",name:"goods",component:Qt,props:!0},{path:"/admin",name:"admin",component:is,children:[{path:"users",component:vs,name:"adminUsers"},{path:"products",component:Xt,name:"adminProducts"}]},{path:"/:catchAll(.*)",redirect:"/home"}];var _s=ds;e.Z.use(at.Z);const ps=new at.Z({mode:{NODE_ENV:"production",BASE_URL:"/"}.IS_ELECTRON?"hash":"history",base:"/",routes:_s});var hs=ps;e.Z.config.productionTip=!1,new e.Z({router:hs,store:d,render:t=>t(st)}).$mount("#app")}},s={};function a(e){var r=s[e];if(void 0!==r)return r.exports;var i=s[e]={exports:{}};return t[e](i,i.exports,a),i.exports}a.m=t,function(){var t=[];a.O=function(s,e,r,i){if(!e){var n=1/0;for(u=0;u<t.length;u++){e=t[u][0],r=t[u][1],i=t[u][2];for(var o=!0,l=0;l<e.length;l++)(!1&i||n>=i)&&Object.keys(a.O).every((function(t){return a.O[t](e[l])}))?e.splice(l--,1):(o=!1,i<n&&(n=i));if(o){t.splice(u--,1);var c=r();void 0!==c&&(s=c)}}return s}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[e,r,i]}}(),function(){a.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(s,{a:s}),s}}(),function(){a.d=function(t,s){for(var e in s)a.o(s,e)&&!a.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:s[e]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){var t={143:0};a.O.j=function(s){return 0===t[s]};var s=function(s,e){var r,i,n=e[0],o=e[1],l=e[2],c=0;if(n.some((function(s){return 0!==t[s]}))){for(r in o)a.o(o,r)&&(a.m[r]=o[r]);if(l)var u=l(a)}for(s&&s(e);c<n.length;c++)i=n[c],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(u)},e=self["webpackChunkmevn_shop"]=self["webpackChunkmevn_shop"]||[];e.forEach(s.bind(null,0)),e.push=s.bind(null,e.push.bind(e))}();var e=a.O(void 0,[998],(function(){return a(5825)}));e=a.O(e)})();
//# sourceMappingURL=app.7c6069ce.js.map