(this.webpackJsonplifecylce_methods_practice=this.webpackJsonplifecylce_methods_practice||[]).push([[0],{16:function(n,e,t){n.exports=t(25)},21:function(n,e,t){},24:function(n,e,t){},25:function(n,e,t){"use strict";t.r(e);var o=t(0),a=t.n(o),r=t(6),c=t.n(r),i=(t(21),t(7)),u=t(8),s=t(13),l=t(9),p=t(14),m=t(1),f=t(2);function h(){var n=Object(m.a)(['\n    font-family: "pokemon-font", monospace;\n    font-size: 18px;\n']);return h=function(){return n},n}function d(){var n=Object(m.a)(["\n    cursor: pointer;\n    width: 100px;\n    height: 100px;\n"]);return d=function(){return n},n}function g(){var n=Object(m.a)(["\n    width: 150px;\n    height: 150px;\n    border-radius: 20px;\n    margin: 5px 10px 5px 10px;\n    background-color: #A9A9A9;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n"]);return g=function(){return n},n}var v=f.a.div(g()),k=f.a.img(d()),b=f.a.h2(h()),w=function(n){return a.a.createElement(v,null,a.a.createElement(k,{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(n.id,".png"),alt:"pkm-icon",onClick:function(){window.open("https://bulbapedia.bulbagarden.net/wiki/".concat(n.name,"_(Pok%C3%A9mon)"))}}),a.a.createElement(b,null,n.name))};t(24);function x(){var n=Object(m.a)(["\n  width: 90%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 20px;\n\n"]);return x=function(){return n},n}function j(){var n=Object(m.a)(['\n  font-family: "pokemon-font", monospace;\n  font-size: 42px;\n']);return j=function(){return n},n}var y=f.a.h1(j()),E=f.a.div(x()),O=function(n){function e(n){var t;return Object(i.a)(this,e),(t=Object(s.a)(this,Object(l.a)(e).call(this,n))).searchInputHandler=function(n){t.setState({searchInput:n.target.value})},t.state={pokemon:[],searchInput:""},console.log("[App.js] Logged in constructor()"),t}return Object(p.a)(e,n),Object(u.a)(e,[{key:"componentDidMount",value:function(){var n=this;console.log("[App.js] Logged in componentDidMount()"),fetch("https://pokeapi.co/api/v2/pokemon/?limit=151").then((function(n){return n.json()})).then((function(e){n.setState({pokemon:e.results})}))}},{key:"render",value:function(){var n=this;console.log("[App.js] Logged in render()");var e=this.state.pokemon.filter((function(e){return e.name.includes(n.state.searchInput.toLowerCase())}));return console.log(e),a.a.createElement("div",{className:"App"},a.a.createElement(y,null,"Kanto Pokedex"),a.a.createElement("input",{placeholder:"Name",onChange:this.searchInputHandler}),a.a.createElement(E,null,e.length>0?e.map((function(e){var t=n.state.pokemon.indexOf(e)+1;return a.a.createElement(w,{name:e.name,id:t,key:t})})):a.a.createElement("p",null,"No Results :(")))}}]),e}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.95a1690a.chunk.js.map