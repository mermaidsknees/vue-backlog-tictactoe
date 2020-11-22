(function(t){function e(e){for(var n,a,o=e[0],l=e[1],c=e[2],f=0,h=[];f<o.length;f++)a=o[f],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&h.push(i[a][0]),i[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(h.length)h.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],n=!0,o=1;o<s.length;o++){var l=s[o];0!==i[l]&&(n=!1)}n&&(r.splice(e--,1),t=a(a.s=s[0]))}return t}var n={},i={app:0},r=[];function a(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=n,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(s,n,function(e){return t[e]}.bind(null,n));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"028a":function(t,e,s){},"034f":function(t,e,s){"use strict";var n=s("85ec"),i=s.n(n);i.a},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Navbar"),s("div",{staticClass:"container"},[s("Board")],1)],1)},r=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"HelloWorld"},[s("div",{staticClass:"board-container"},[s("div",{staticClass:"board",attrs:{id:"board"}},t._l(t.cells,(function(e,n){return s("div",{key:n,staticClass:"cell",style:{"background-color":t.cellColor[n]?t.color:""},on:{click:function(e){return e.stopPropagation(),t.strike(n)}}},[t._v(" "+t._s(e)+" ")])})),0),s("Backlog",{attrs:{moves:t.moves}})],1),s("div",{staticClass:"winning-message-text",style:{visibility:t.isVisible?"visible":"hidden"}},[t._v(" "+t._s(t.endgameText)+" ")]),s("div",{staticClass:"winning-message",attrs:{id:"winningMessage"}},[s("div",{staticClass:"button"},[s("button",{on:{click:function(e){return t.reset()}}},[t._v("Restart")])])])])},o=[],l=(s("a623"),s("cb29"),s("c975"),s("b85c")),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"backlog"},t._l(t.moves,(function(e){return s("button",{key:e,staticClass:"backlog-button",on:{click:function(s){return s.preventDefault(),t.showBacklog(e)}}},[t._v(" Move #"+t._s(e)+" ")])})),0)},u=[],f={name:"Backlog",props:["moves","backlog"],methods:{showBacklog:function(t){t-=1,this.$store.state.cells=this.$store.state.backlog[t],this.$store.commit("restartMoves",t)}}},h=f,v=(s("8b1b"),s("2877")),d=Object(v["a"])(h,c,u,!1,null,"20d903fc",null),p=d.exports,b={components:{Backlog:p},data:function(){return{winConditions:[[1,2,3],[4,5,6],[2,5,8],[7,8,9],[1,4,7],[3,6,9],[1,5,9],[3,5,7]],activePlayer:"O",moves:this.$store.state.moves,matches:0,xValues:[],yValues:[],cellColor:[Array(9).fill(null)],color:"",gameWon:{status:!1,player:null},endgameText:"",isVisible:!1}},methods:{strike:function(t){""!=this.cells[t]||this.gameWon.status||(this.cells[t]=this.activePlayer,this.moves++,this.createBacklog(),this.changePlayer(),this.checkForWin(t),this.checkTie())},changePlayer:function(){this.activePlayer=this.nonActivePlayer},sortArrays:function(t){"O"==this.cells[t]?this.yValues.push(t):"X"==this.cells[t]&&this.xValues.push(t)},checkForWin:function(t){this.sortArrays(t);for(var e=JSON.parse(JSON.stringify(this.yValues)),s=JSON.parse(JSON.stringify(this.xValues)),n=JSON.parse(JSON.stringify(this.winConditions)),i=0;i<n.length;i++){if(n[i].every((function(t){return e.indexOf(""+t)>-1}))){this.gameWon={status:!0,player:this.nonActivePlayer};var r=n[i];this.gameOver(r);break}if(n[i].every((function(t){return s.indexOf(""+t)>-1}))){this.gameWon={status:!0,player:this.nonActivePlayer};r=n[i];this.gameOver(r);break}}},checkTie:function(){if(9==this.moves&&!this.gameWon.status){this.isVisible=!0,this.endgameText="Tie";for(var t=0;t<=9;t++)this.cellColor[t]=!0;this.color="#77dd77"}},gameOver:function(t){if(this.isVisible=!0,this.endgameText="".concat(this.nonActivePlayer," wins"),this.gameWon.player="O"){var e,s=Object(l["a"])(t);try{for(s.s();!(e=s.n()).done;){var n=e.value;this.cellColor[n]=!0,this.color="#ff6961"}}catch(o){s.e(o)}finally{s.f()}}else if(this.gameWon.player="X"){var i,r=Object(l["a"])(t);try{for(r.s();!(i=r.n()).done;){var a=i.value;this.cellColor[a]=!0,this.color="#aec6cf"}}catch(o){r.e(o)}finally{r.f()}}},createBacklog:function(){var t=this.moves,e=Object.assign(t,this.cells);this.$store.state.backlog.push(e)},reset:function(){var t={1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",9:""};this.$store.state.cells=t,this.gameWon={status:!1,player:null},this.yValues=[],this.xValues=[],this.moves=0,this.matches=0,this.color="",this.activePlayer="O",this.cellColor=[Array(9).fill(null)],this.endgameText=""}},computed:{cells:function(){return this.$store.state.cells},nonActivePlayer:function(){return"O"==this.activePlayer?"X":"X"==this.activePlayer?"O":void 0}}},y=b,g=(s("a3cb"),Object(v["a"])(y,a,o,!1,null,null,null)),m=g.exports,O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"navbar"},[s("div",{staticClass:"navbar-text"},[t._v("TicTacToe")])])}],_=(s("9d94"),{}),x=Object(v["a"])(_,O,k,!1,null,"132f3548",null),P=x.exports,w={name:"App",components:{Navbar:P,Board:m}},C=w,j=(s("034f"),Object(v["a"])(C,i,r,!1,null,null,null)),T=j.exports,$=s("2f62");n["a"].use($["a"]);var S=new $["a"].Store({store:{},state:{cells:{1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",9:""},activePlayer:"O",moves:0,backlog:[]},mutations:{restartMoves:function(t,e){t.moves=e}},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({store:S,render:function(t){return t(T)}}).$mount("#app")},"85ec":function(t,e,s){},8992:function(t,e,s){},"8b1b":function(t,e,s){"use strict";var n=s("028a"),i=s.n(n);i.a},"9d94":function(t,e,s){"use strict";var n=s("8992"),i=s.n(n);i.a},a3cb:function(t,e,s){"use strict";var n=s("b2af"),i=s.n(n);i.a},b2af:function(t,e,s){}});
//# sourceMappingURL=app.16bea779.js.map