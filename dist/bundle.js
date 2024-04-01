/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tabswitch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabswitch */ \"./src/tabswitch.js\");\n\n\n(0,_tabswitch__WEBPACK_IMPORTED_MODULE_0__.setupTabSwitch)();\n\n(0,_tabswitch__WEBPACK_IMPORTED_MODULE_0__.setHomePage)();\n\n\n\n//# sourceURL=webpack://resturant/./src/main.js?");

/***/ }),

/***/ "./src/tabswitch.js":
/*!**************************!*\
  !*** ./src/tabswitch.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setHomePage: () => (/* binding */ setHomePage),\n/* harmony export */   setMenuPage: () => (/* binding */ setMenuPage),\n/* harmony export */   setupTabSwitch: () => (/* binding */ setupTabSwitch)\n/* harmony export */ });\n\n\nconst context = document.querySelector('#content');\n\nconst homePage = `\n<div>\n    <h3>LOGO</h3>\n    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit obcaecati et vero, veritatis harum modi iure, deleniti, omnis nihil adipisci quis? Eum placeat error sed odio a pariatur quidem repudiandae!</p>\n    <img src=\"/src/images/drinks.jpg\" alt=\"Image of drinks\" width=\"400px\">\n</div>\n`\n\nconst menuPage = `\n<div>\n    <h3>Item1</h3>\n    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus aperiam distinctio ratione eaque voluptate sapiente.</p>\n\n    <h3>Item2</h3>\n    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, reprehenderit.</p>\n\n    <h3>Item3</h3>\n    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, cupiditate ratione!</p>\n</div>\n`\n\n/**\n * Converts strings to html\n * @param {String} html \n * @returns html code\n */\nfunction HTMLConverter(html) {\n    const templete = document.createElement(\"template\");\n    templete.innerHTML = html.trim();\n    return templete.content.firstElementChild;\n}\n\nfunction setHomePage(){\n    context.textContent = '';\n    const html = HTMLConverter(homePage);\n    context.appendChild(html);\n}\n\nfunction setMenuPage(){\n    context.textContent = '';\n    const html = HTMLConverter(menuPage);\n    context.appendChild(html);\n}\n\nconst home = document.querySelector('#home');\nconst menu = document.querySelector('#menu');\n/**\n * The function will set up the eventlisteners to reduce code in the main.js file\n */\nfunction setupTabSwitch(){\n    home.addEventListener('click',setHomePage);\n    menu.addEventListener('click',setMenuPage);\n}\n\n//# sourceURL=webpack://resturant/./src/tabswitch.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;