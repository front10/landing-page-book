webpackJsonp([98334752301208],{1034:function(e,t){e.exports={description:"",displayName:"GithubButton",methods:[{name:"onChange",docblock:null,modifiers:[],params:[{name:"prevProps",type:null}],returns:null},{name:"getRepositoryStats",docblock:null,modifiers:[],params:[{name:"username",type:null},{name:"repository",type:null},{name:"btnType",type:null}],returns:null},{name:"getUserFallowers",docblock:null,modifiers:[],params:[{name:"username",type:null}],returns:null},{name:"openUrl",docblock:null,modifiers:[],params:[],returns:null}],props:{showCounter:{type:{name:"bool"},required:!1,description:"Shows the total next to the button.",defaultValue:{value:"true",computed:!1}},showBtnText:{type:{name:"bool"},required:!1,description:"Shows the text inside the button.",defaultValue:{value:"true",computed:!1}},showGithubIcon:{type:{name:"bool"},required:!1,description:"Shows github icon on the button.",defaultValue:{value:"false",computed:!1}},disabled:{type:{name:"bool"},required:!1,description:"Shows github button disabled.",defaultValue:{value:"false",computed:!1}},loadingClass:{type:{name:"string"},required:!1,description:"Class to loading indicator.",defaultValue:{value:"'fa fa-circle-o-notch fa-spin'",computed:!1}},username:{type:{name:"string"},required:!1,description:"Github username.",defaultValue:{value:"'front10'",computed:!1}},repository:{type:{name:"string"},required:!1,description:"Github repository.",defaultValue:{value:"'landing-page-book'",computed:!1}},type:{type:{name:"string"},required:!1,description:"What button show. Can be: <code>fork</code>,<code>follow</code>,<code>star</code>,<code>download</code>,<code>watch</code>,<code>issue</code>`",defaultValue:{value:"'fork'",computed:!1}},text:{type:{name:"string"},required:!1,description:"text to show inside the button",defaultValue:{value:"'Fork'",computed:!1}},color:{type:{name:"string"},required:!1,description:"Color of button.",defaultValue:{value:"'light'",computed:!1}},className:{type:{name:"string"},required:!1,description:"CSS class name selector to customs styles",defaultValue:{value:"''",computed:!1}},rounded:{defaultValue:{value:"true",computed:!1},required:!1}},filename:"/components/GithubButton/GithubButton.jsx"}},427:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=o(1),l=n(s),i=o(5),d=n(i),c=o(6),p=n(c),m=o(482),f=n(m),h=o(1034),y=n(h),b=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){return l.default.createElement(d.default,{pagePushedFunction:this.handlepushedPageLayout},f.default&&l.default.createElement(p.default,{name:f.default.name,linkGithub:"https://github.com/front10/landing-page-book/tree/master/src/components/GithubButton",description:f.default.summary,stories:f.default.stories,importCode:f.default.import,withStyles:f.default.withStyles,extractProps:f.default.extractProps,propsDescription:y.default.props}))},t}(l.default.Component);t.default=b,e.exports=t.default},482:function(e,t){"use strict";t.__esModule=!0,t.default={name:"GithubButton",summary:"Showcase the success of any GitHub repo or user with these simple, static buttons with dynamic counts.",import:"",extractProps:["button","counter"],stories:[{name:"Basic",summary:"",code:'<GithubButton\n    username="front10"\n    repository="landing-page-book"\n    color="secondary"\n/>',tabsActive:["code"]},{name:"All",summary:"",code:'<>\n    <div className="mb-3">\n        <GithubButton className="mr-3" username="front10" repository="landing-page-book" type="fork" text="Fork" color="secondary" />\n        <GithubButton className="mr-3" username="front10" repository="landing-page-book" type="follow" text="Follow" color="secondary" />\n        <GithubButton className="mr-3" username="front10" repository="landing-page-book" type="star" text="Stars" color="secondary"/>\n    </div>\n    <div>\n        <GithubButton className="mr-3" username="front10" repository="landing-page-book" type="watch" text="Watch" color="secondary" />\n        <GithubButton className="mr-3" username="front10" repository="landing-page-book" type="issue" text="Issues" color="secondary" />\n        <GithubButton className="mr-3" username="front10" repository="landing-page-book" type="download" text="Download" showCounter={false} color="secondary" />\n    </div>\n</>',tabsActive:[]}]},e.exports=t.default}});
//# sourceMappingURL=component---src-pages-components-githubbutton-js-0e3fc25f1cf9a98bcb9c.js.map