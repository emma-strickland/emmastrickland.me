(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(3),s=n.n(i),a=(n(9),n(4)),l=(n(10),{API_BASE_URL:"https://website-emma.herokuapp.com",NAME:"Emma Strickland",EMAIL_ADDRESS:"emlstrick@gmail.com",LINKEDIN_URL:"https://www.linkedin.com/in/emmalstrickland/",GITHUB_URL:"https://github.com/emma-strickland",SPOTIFY_PROFILE_URL:"https://open.spotify.com/user/1242322676?si=865f2ec92d6a4a14"}),o=n(0);var j=function(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){fetch("".concat(l.API_BASE_URL,"/recentlyPlayed")).then((function(e){return e.json()})).then((function(e){r(e)})).catch((function(e){console.log("error: ",e)}))}),[]),Object(o.jsx)("div",{className:"App",children:n&&Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("div",{className:"title",children:l.NAME}),Object(o.jsxs)("div",{className:"subtext",children:["Software Engineer based in Brooklyn, NY",Object(o.jsx)("hr",{}),Object(o.jsx)("div",{className:"link",children:Object(o.jsx)("a",{href:"mailto:".concat(l.EMAIL_ADDRESS),target:"_blank",rel:"noopener noreferrer",children:"Email"})}),Object(o.jsx)("div",{className:"link",children:Object(o.jsx)("a",{href:l.LINKEDIN_URL,target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"})}),Object(o.jsx)("div",{className:"link",children:Object(o.jsx)("a",{href:l.GITHUB_URL,target:"_blank",rel:"noopener noreferrer",children:"Github"})}),Object(o.jsx)("hr",{}),Object(o.jsx)("div",{className:"current",children:"Currently listening to:"}),Object(o.jsxs)("div",{className:"music-text",children:[Object(o.jsx)("img",{src:n.image,alt:"album-art",className:"album-art",onClick:function(){window.open(l.SPOTIFY_PROFILE_URL,"_blank")}}),Object(o.jsxs)("div",{className:"music-subtitle",children:['"',n.track,'" \u2013 ',n.artist]})]})]})]})})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),d()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.7c0d5344.chunk.js.map