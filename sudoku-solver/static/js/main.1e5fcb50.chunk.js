(this["webpackJsonpsudoku-solver"]=this["webpackJsonpsudoku-solver"]||[]).push([[0],{14:function(e,n,t){},15:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t(1),u=t.n(r),c=t(6),a=t.n(c),i=(t(14),t(8)),l=(t(15),t(3)),s=t(7),f=t.n(s);var v=function(e){var n=e.sudoku,t=e.setCell,r=500,u=500,c=null;return Object(o.jsx)(f.a,{setup:function(e,n){e.createCanvas(r,u).parent(n)},draw:function(e){if(e.background(255),null!==c){e.fill(150,150,255);var t=c[0]*r/9,o=c[1]*u/9;e.rect(o,t,r/9,u/9)}e.fill(0);for(var a=0;a<=9;a++){var i=497/9*a+1.5;a%3===0?e.strokeWeight(3):e.strokeWeight(1),e.line(0,i,r,i),e.line(i,0,i,u)}e.textSize(32),e.strokeWeight(1);for(var l=0;l<9;l++)for(var s=0;s<9;s++){var f=n[s][l];0!==f&&e.text(f,(l+.4)*r/9,(s+.7)*u/9)}},mouseClicked:function(e){var n=Math.floor(e.mouseX/r*9),t=Math.floor(e.mouseY/u*9);c=[t,n]},keyTyped:function(e){null!==c&&(e.keyCode>=48&&e.keyCode<=57?t.apply(void 0,Object(l.a)(c).concat([e.keyCode-48])):e.keyCode>=96&&e.keyCode<=105&&t.apply(void 0,Object(l.a)(c).concat([e.keyCode-96])))}})};function d(e,n,t,o){for(var r=0;r<9;r++)if(e[n][r]===o)return!1;for(var u=0;u<9;u++)if(e[u][t]===o)return!1;for(var c=3*Math.floor(n/3),a=3*Math.floor(t/3),i=0;i<3;i++)for(var l=0;l<3;l++)if(e[c+i][a+l]===o)return!1;return!0}var h=function(e){var n=[];return function e(t){for(var o=!0,r=0;r<9;r++)for(var u=0;u<9;u++)if(0===t[r][u]){o=!1;for(var c=1;c<=9;c++)d(t,r,u,c)&&(t[r][u]=c,e(t),t[r][u]=0);return}if(o){var a=t.map((function(e){return Object(l.a)(e)}));n.push(a)}}(e),console.log(n),n};var j=function(){var e=Object(r.useState)([[0,0,4,3,0,0,0,0,1],[0,0,7,0,9,1,2,4,0],[1,9,0,0,4,0,8,0,0],[7,0,9,2,0,0,5,0,6],[0,0,2,0,5,0,0,3,0],[0,0,0,0,7,6,9,1,2],[4,0,5,0,8,0,0,0,0],[2,7,0,0,0,0,1,5,8],[0,0,0,6,2,5,3,7,0]]),n=Object(i.a)(e,2),t=n[0],u=n[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:"Sudoku solver"}),Object(o.jsx)(v,{sudoku:t,setCell:function(e,n,o){t[e][n]=o,u(t)}}),Object(o.jsx)("button",{onClick:function(){return function(){var e=h(t);0!=e.length?(e.length>1&&console.log("Many solutions"),u(h(t)[0])):console.log("No solutions")}()},children:"solve"}),Object(o.jsx)("button",{onClick:function(){return function(){var e=t.map((function(e){return e.map((function(e){return 0}))}));u(e)}()},children:"clear"})]})},k=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(n){var t=n.getCLS,o=n.getFID,r=n.getFCP,u=n.getLCP,c=n.getTTFB;t(e),o(e),r(e),u(e),c(e)}))};a.a.render(Object(o.jsx)(u.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),k()}},[[16,1,2]]]);
//# sourceMappingURL=main.1e5fcb50.chunk.js.map