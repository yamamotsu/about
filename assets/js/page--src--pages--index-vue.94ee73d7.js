(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{GsK5:function(t,a,s){},aK7f:function(t,a,s){},eP9c:function(t,a,s){"use strict";s("GsK5")},gEGz:function(t,a,s){"use strict";s("aK7f")},iyQ6:function(t,a,s){"use strict";s.r(a);var c=s("Kw5r"),n={props:["card"],computed:{postPath:function(){return"/posts/"+this.card.id}}},i=(s("eP9c"),s("KHd+")),e=Object(i.a)(n,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("g-link",{staticClass:"card-container link",attrs:{to:t.card.path,"active-class":"","exact-active-class":""}},[s("div",{staticClass:"card-thumbnail-container"},[s("g-image",{staticClass:"card-thumbnail",attrs:{src:t.card.thumbnail,position:"center"}})],1),s("div",{staticClass:"card-info-container"},[s("h2",[t._v(t._s(t.card.title))]),s("div",{staticClass:"works-info"},[s("p",[t._v(t._s(t.card.year))]),s("p",[t._v(t._s(t.card.period))]),s("p",[t._v(t._s(t.card.role))])]),s("div",{staticClass:"tags"},t._l(t.card.tags,(function(a){return s("p",{key:a.id},[t._v("#"+t._s(a))])})),0)])])}),[],!1,null,"7e3a8fee",null).exports;c.a.component("card",e);var r={metaInfo:{title:"Hello, world!"}},o=(s("gEGz"),null),l=Object(i.a)(r,(function(){var t=this.$createElement,a=this._self._c||t;return a("Layout",[a("div",{staticClass:"cards-grid"},this._l(this.$page.posts.edges,(function(t){return a("card",{key:t.node.id,staticClass:"card",attrs:{card:t.node}})})),1)])}),[],!1,null,null,null);"function"==typeof o&&o(l);a.default=l.exports}}]);