(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,n,a){e.exports=a(22)},,,,,,function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),c=a(2),l=a.n(c),o=(a(14),a(3)),s=a(4),i=a(6),m=a(5),u=a(7),h=(a(15),function(e){var n=e.searchChange;return r.a.createElement("div",{className:"nes-field search-bar"},r.a.createElement("input",{className:"nes-input",type:"search",name:"search",placeholder:"Search pokemon...",onChange:n}))}),d=(a(16),function(e){var n=e.searchChange;return r.a.createElement("header",null,r.a.createElement("div",null,r.a.createElement("i",{className:"nes-pokeball is-small"}),r.a.createElement("h1",null,"Pokedex")),r.a.createElement(h,{searchChange:n}))}),p=(a(17),function(){return r.a.createElement("div",{className:"loading"},r.a.createElement("h1",{className:"tc"},"Loading..."),r.a.createElement("i",{class:"nes-ash"}),r.a.createElement("i",{class:"nes-pokeball"}),r.a.createElement("i",{class:"nes-bulbasaur"}),r.a.createElement("i",{class:"nes-charmander"}),r.a.createElement("i",{class:"nes-squirtle"}))}),f=(a(18),function(e){var n=e.name,a=e.picture;return r.a.createElement("div",{className:"nes-container is-rounded card"},r.a.createElement("img",{src:a,alt:"The Pokemon: ".concat(n)}),r.a.createElement("div",null,r.a.createElement("h2",null,n)))}),E=(a(19),function(e){var n=e.pokemon;return r.a.createElement("div",{className:"card-list"},n.map(function(e,a){return r.a.createElement(f,{key:n[a].id,id:n[a].id,name:n[a].name,picture:n[a].picture})}))}),v=(a(20),function(e){return r.a.createElement("div",{className:"scroll-container",style:{overflowY:"scroll",maxHeight:"750px"}},e.children)}),k=(a(21),function(e){function n(){var e;return Object(o.a)(this,n),(e=Object(i.a)(this,Object(m.a)(n).call(this))).onSearchChange=function(n){e.setState({searchfield:n.target.value})},e.state={pokemon:[],searchfield:""},e}return Object(u.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://ironhack-pokeapi.herokuapp.com/pokemon").then(function(e){return e.json()}).then(function(n){return e.setState({pokemon:n})})}},{key:"render",value:function(){var e=this.state,n=e.pokemon,a=e.searchfield,t=n.filter(function(e){return e.name.toLowerCase().includes(a.toLowerCase())});return n.length?r.a.createElement("div",{className:"app-container"},r.a.createElement("div",{className:"flex-container"},r.a.createElement(d,{searchChange:this.onSearchChange}),r.a.createElement(v,{className:"Scroll"},r.a.createElement(E,{pokemon:t})),r.a.createElement("footer",{className:"nes-container is-rounded"},r.a.createElement("label",null,r.a.createElement("input",{type:"radio",class:"nes-radio",name:"answer",checked:!0}),r.a.createElement("span",{className:"footer-text"},"Ash Ketchum ",r.a.createElement("span",null,r.a.createElement("span",{id:"footer-kerning"},"\xa9 "),"1996")))))):r.a.createElement(p,null)}}]),n}(t.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.5cc67eda.chunk.js.map