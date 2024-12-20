/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/isMobile.tsx":
/*!**************************!*\
  !*** ./lib/isMobile.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isMobile: () => (/* binding */ isMobile)\n/* harmony export */ });\nconst isMobile = ()=>{\n    if (true) return false;\n    // Check for mobile devices\n    const mobileCheck = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);\n    // Also check screen width for tablets and smaller devices\n    const screenCheck = window.innerWidth <= 768;\n    return mobileCheck || screenCheck;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvaXNNb2JpbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxXQUFXO0lBQ3RCLElBQUksSUFBNkIsRUFBRSxPQUFPO0lBRTFDLDJCQUEyQjtJQUMzQixNQUFNQyxjQUFjLGlFQUFpRUMsSUFBSSxDQUN2RkMsVUFBVUMsU0FBUztJQUdyQiwwREFBMEQ7SUFDMUQsTUFBTUMsY0FBY0MsT0FBT0MsVUFBVSxJQUFJO0lBRXpDLE9BQU9OLGVBQWVJO0FBQ3hCLEVBQUUiLCJzb3VyY2VzIjpbIkM6XFxTQ1JPTExcXE5leHRKU1xcd2ViYXBwdmVyY2VsXFxsaWJcXGlzTW9iaWxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaXNNb2JpbGUgPSAoKSA9PiB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIGZhbHNlO1xuICBcbiAgLy8gQ2hlY2sgZm9yIG1vYmlsZSBkZXZpY2VzXG4gIGNvbnN0IG1vYmlsZUNoZWNrID0gL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KFxuICAgIG5hdmlnYXRvci51c2VyQWdlbnRcbiAgKTtcbiAgXG4gIC8vIEFsc28gY2hlY2sgc2NyZWVuIHdpZHRoIGZvciB0YWJsZXRzIGFuZCBzbWFsbGVyIGRldmljZXNcbiAgY29uc3Qgc2NyZWVuQ2hlY2sgPSB3aW5kb3cuaW5uZXJXaWR0aCA8PSA3Njg7XG4gIFxuICByZXR1cm4gbW9iaWxlQ2hlY2sgfHwgc2NyZWVuQ2hlY2s7XG59OyJdLCJuYW1lcyI6WyJpc01vYmlsZSIsIm1vYmlsZUNoZWNrIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInNjcmVlbkNoZWNrIiwid2luZG93IiwiaW5uZXJXaWR0aCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/isMobile.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_mobile_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/mobile.css */ \"./styles/mobile.css\");\n/* harmony import */ var _styles_mobile_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_mobile_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_test_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/test.css */ \"./styles/test.css\");\n/* harmony import */ var _styles_test_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_test_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _lib_isMobile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/isMobile */ \"./lib/isMobile.tsx\");\n\n\n\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)({\n        \"App.useEffect\": ()=>{\n            if ((0,_lib_isMobile__WEBPACK_IMPORTED_MODULE_7__.isMobile)() && !router.pathname.startsWith('/m')) {\n                router.push(`/m${router.pathname}`);\n            }\n        }\n    }[\"App.useEffect\"], [\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            next_head__WEBPACK_IMPORTED_MODULE_4___default()({\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"viewport\",\n                            content: \"width=device-width, initial-scale=1\"\n                        }, \"viewport\", false, {\n                            fileName: \"C:\\\\SCROLL\\\\NextJS\\\\webappvercel\\\\pages\\\\_app.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                            type: \"application/ld+json\",\n                            dangerouslySetInnerHTML: {\n                                __html: JSON.stringify({\n                                    \"@context\": \"http://schema.org\",\n                                    \"@type\": \"WebApplication\",\n                                    name: \"OpenScroll\",\n                                    url: \"https://www.openscroll.me/\",\n                                    description: \"Unveil knowledge and ideas with ease.\",\n                                    creator: {\n                                        \"@type\": \"Person\",\n                                        name: \"The Scroll\"\n                                    },\n                                    datePublished: \"2024-01-01\",\n                                    applicationCategory: \"SocialNetworkingApplication\"\n                                })\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\SCROLL\\\\NextJS\\\\webappvercel\\\\pages\\\\_app.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true)\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\SCROLL\\\\NextJS\\\\webappvercel\\\\pages\\\\_app.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNEO0FBQ0Y7QUFFQztBQUNLO0FBQ007QUFDa0I7QUFFM0MsU0FBU0ssSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWTtJQUM1RCxNQUFNQyxTQUFTTixzREFBU0E7SUFFeEJELGdEQUFTQTt5QkFBQztZQUNSLElBQUlHLHVEQUFXQSxNQUFNLENBQUNJLE9BQU9DLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDLE9BQU87Z0JBQ3RERixPQUFPRyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUVILE9BQU9DLFFBQVEsRUFBRTtZQUNwQztRQUNGO3dCQUFHO1FBQUNEO0tBQU87SUFFWCxxQkFDRTs7WUFDR1IsZ0RBQUlBLENBQUM7Z0JBQ0pZLHdCQUNFOztzQ0FDRSw4REFBQ0M7NEJBQUtDLE1BQUs7NEJBQVdDLFNBQVE7MkJBQTBDOzs7OztzQ0FDeEUsOERBQUNDOzRCQUNDQyxNQUFLOzRCQUNMQyx5QkFBeUI7Z0NBQ3ZCQyxRQUFRQyxLQUFLQyxTQUFTLENBQUM7b0NBQ3JCLFlBQVk7b0NBQ1osU0FBUztvQ0FDVFAsTUFBTTtvQ0FDTlEsS0FBSztvQ0FDTEMsYUFBYTtvQ0FDYkMsU0FBUzt3Q0FDUCxTQUFTO3dDQUNUVixNQUFNO29DQUNSO29DQUNBVyxlQUFlO29DQUNmQyxxQkFBcUI7Z0NBQ3ZCOzRCQUNGOzs7Ozs7OztZQUlSOzBCQUNBLDhEQUFDcEI7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7QUFHOUIiLCJzb3VyY2VzIjpbIkM6XFxTQ1JPTExcXE5leHRKU1xcd2ViYXBwdmVyY2VsXFxwYWdlc1xcX2FwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvbW9iaWxlLmNzc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL3Rlc3QuY3NzXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgaXNNb2JpbGUgYXMgY2hlY2tNb2JpbGUgfSBmcm9tIFwiLi4vbGliL2lzTW9iaWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNoZWNrTW9iaWxlKCkgJiYgIXJvdXRlci5wYXRobmFtZS5zdGFydHNXaXRoKCcvbScpKSB7XG4gICAgICByb3V0ZXIucHVzaChgL20ke3JvdXRlci5wYXRobmFtZX1gKTtcbiAgICB9XG4gIH0sIFtyb3V0ZXJdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7SGVhZCh7XG4gICAgICAgIGNoaWxkcmVuOiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIGtleT1cInZpZXdwb3J0XCIgLz5cbiAgICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgICAgdHlwZT1cImFwcGxpY2F0aW9uL2xkK2pzb25cIlxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgIF9faHRtbDogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgXCJAY29udGV4dFwiOiBcImh0dHA6Ly9zY2hlbWEub3JnXCIsXG4gICAgICAgICAgICAgICAgICBcIkB0eXBlXCI6IFwiV2ViQXBwbGljYXRpb25cIixcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiT3BlblNjcm9sbFwiLFxuICAgICAgICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vd3d3Lm9wZW5zY3JvbGwubWUvXCIsXG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJVbnZlaWwga25vd2xlZGdlIGFuZCBpZGVhcyB3aXRoIGVhc2UuXCIsXG4gICAgICAgICAgICAgICAgICBjcmVhdG9yOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiQHR5cGVcIjogXCJQZXJzb25cIixcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJUaGUgU2Nyb2xsXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZGF0ZVB1Ymxpc2hlZDogXCIyMDI0LTAxLTAxXCIsXG4gICAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbkNhdGVnb3J5OiBcIlNvY2lhbE5ldHdvcmtpbmdBcHBsaWNhdGlvblwiLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgICAgfSl9XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImlzTW9iaWxlIiwiY2hlY2tNb2JpbGUiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJwYXRobmFtZSIsInN0YXJ0c1dpdGgiLCJwdXNoIiwiY2hpbGRyZW4iLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJzY3JpcHQiLCJ0eXBlIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJKU09OIiwic3RyaW5naWZ5IiwidXJsIiwiZGVzY3JpcHRpb24iLCJjcmVhdG9yIiwiZGF0ZVB1Ymxpc2hlZCIsImFwcGxpY2F0aW9uQ2F0ZWdvcnkiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/mobile.css":
/*!***************************!*\
  !*** ./styles/mobile.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./styles/test.css":
/*!*************************!*\
  !*** ./styles/test.css ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();