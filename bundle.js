/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;0,800;1,400;1,700;1,800&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Custom Properties & Global Rules */
:root {
  --color-purple: hsl(259, 100%, 65%);
  --color-light-red: hsl(0, 100%, 67%);
  --color-white: hsl(0, 0%, 100%);
  --color-off-white: hsl(0, 0%, 94%);
  --color-light-grey: hsl(0, 0%, 86%);
  --color-smokey-grey: hsl(0, 1%, 44%);
  --color-off-black: hsl(0, 0%, 8%);

  --width-mobile: 375px;
  --width-desktop: 1440px;

  --font-large: 32px;
  --font-small: 11px;
}

* {
  font-family: "Poppins", sans-serif;
  font-size: var(--font-large);
}

/* Class bases rules */
.age {
  font-weight: 800;
  font-style: italic;
  font-size: 1.2rem;
}

.age span {
  margin-right: 0.2rem;
  font-size: 1.4rem;
  color: var(--color-purple);
}

.attribution {
  font-size: 11px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 1rem;
}

.attribution a {
  color: var(--color-purple);
  font-size: var(--font-small);
}

.button-group {
  position: relative;
}

.button-group::before {
  content: "";
  height: 2px;
  display: block;
  background-color: var(--color-light-grey);
  width: 2.8rem;
  position: absolute;
  left: 0;
  top: 50%;
}

.button-group::after {
  content: "";
  height: 2px;
  display: block;
  background-color: var(--color-light-grey);
  width: 2.8rem;
  position: absolute;
  right: 0;
  top: 50%;
}

.fieldset {
  justify-content: space-between;
}

.form-group {
  width: 30%;
  gap: 0.2rem;
}

.form-group label {
  font-size: 0.4rem;
  letter-spacing: 0.1rem;
  font-weight: 700;
  color: var(--color-smokey-grey);
}

.form-group input {
  border: solid 1px var(--color-light-grey);
  border-radius: 0.2rem;
  padding: 0.5rem;
  font-weight: 700;
  font-size: 0.5rem;
}

.form-group input:active,
.form-group input:focus {
  outline: 1px solid var(--color-purple);
}

.form-button {
  height: 2rem;
  width: 2rem;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  background-color: var(--color-purple);
  border: 1px solid var(--color-purple);
  margin: auto;
}

.form-button:hover,
.form-button:focus {
  background-color: var(--color-off-black);
  border: 1px solid var(--color-off-black);
}

/* Element rules */
body {
  background-color: var(--color-off-white);
  height: 100dvh;
  padding: 0;
}

form {
  gap: 0.2rem;
  padding-bottom: 0.6rem;
}

main {
  background-color: var(--color-white);
  width: 80%;
  margin: auto;
  padding: 0.7rem;
  border-radius: 1rem;
  border-bottom-right-radius: 3rem;
}

/* Utility Classes */
.flex-column {
  display: flex;
  flex-direction: column;
}

.flex-column-reverse {
  display: flex;
  flex-direction: column-reverse;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.centered {
  justify-content: center;
}

.form-group input.invalid {
  border-color: var(--color-light-red);
  outline-color: var(--color-light-red);
}

label:has(+ input.invalid) {
  color: var(--color-light-red);
}

.error {
  color: var(--color-light-red);
  font-size: var(--font-small);
  font-style: italic;
  height: 1rem;
}
`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAEA,qCAAqC;AACrC;EACE,mCAAmC;EACnC,oCAAoC;EACpC,+BAA+B;EAC/B,kCAAkC;EAClC,mCAAmC;EACnC,oCAAoC;EACpC,iCAAiC;;EAEjC,qBAAqB;EACrB,uBAAuB;;EAEvB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,kCAAkC;EAClC,4BAA4B;AAC9B;;AAEA,sBAAsB;AACtB;EACE,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,oBAAoB;EACpB,iBAAiB;EACjB,0BAA0B;AAC5B;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,eAAe;EACf,SAAS;EACT,WAAW;EACX,YAAY;AACd;;AAEA;EACE,0BAA0B;EAC1B,4BAA4B;AAC9B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,WAAW;EACX,cAAc;EACd,yCAAyC;EACzC,aAAa;EACb,kBAAkB;EAClB,OAAO;EACP,QAAQ;AACV;;AAEA;EACE,WAAW;EACX,WAAW;EACX,cAAc;EACd,yCAAyC;EACzC,aAAa;EACb,kBAAkB;EAClB,QAAQ;EACR,QAAQ;AACV;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,UAAU;EACV,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,sBAAsB;EACtB,gBAAgB;EAChB,+BAA+B;AACjC;;AAEA;EACE,yCAAyC;EACzC,qBAAqB;EACrB,eAAe;EACf,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;;EAEE,sCAAsC;AACxC;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;EACnB,qCAAqC;EACrC,qCAAqC;EACrC,YAAY;AACd;;AAEA;;EAEE,wCAAwC;EACxC,wCAAwC;AAC1C;;AAEA,kBAAkB;AAClB;EACE,wCAAwC;EACxC,cAAc;EACd,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,sBAAsB;AACxB;;AAEA;EACE,oCAAoC;EACpC,UAAU;EACV,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,gCAAgC;AAClC;;AAEA,oBAAoB;AACpB;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,oCAAoC;EACpC,qCAAqC;AACvC;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,6BAA6B;EAC7B,4BAA4B;EAC5B,kBAAkB;EAClB,YAAY;AACd","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;0,800;1,400;1,700;1,800&display=swap\");\n\n/* Custom Properties & Global Rules */\n:root {\n  --color-purple: hsl(259, 100%, 65%);\n  --color-light-red: hsl(0, 100%, 67%);\n  --color-white: hsl(0, 0%, 100%);\n  --color-off-white: hsl(0, 0%, 94%);\n  --color-light-grey: hsl(0, 0%, 86%);\n  --color-smokey-grey: hsl(0, 1%, 44%);\n  --color-off-black: hsl(0, 0%, 8%);\n\n  --width-mobile: 375px;\n  --width-desktop: 1440px;\n\n  --font-large: 32px;\n  --font-small: 11px;\n}\n\n* {\n  font-family: \"Poppins\", sans-serif;\n  font-size: var(--font-large);\n}\n\n/* Class bases rules */\n.age {\n  font-weight: 800;\n  font-style: italic;\n  font-size: 1.2rem;\n}\n\n.age span {\n  margin-right: 0.2rem;\n  font-size: 1.4rem;\n  color: var(--color-purple);\n}\n\n.attribution {\n  font-size: 11px;\n  text-align: center;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 1rem;\n}\n\n.attribution a {\n  color: var(--color-purple);\n  font-size: var(--font-small);\n}\n\n.button-group {\n  position: relative;\n}\n\n.button-group::before {\n  content: \"\";\n  height: 2px;\n  display: block;\n  background-color: var(--color-light-grey);\n  width: 2.8rem;\n  position: absolute;\n  left: 0;\n  top: 50%;\n}\n\n.button-group::after {\n  content: \"\";\n  height: 2px;\n  display: block;\n  background-color: var(--color-light-grey);\n  width: 2.8rem;\n  position: absolute;\n  right: 0;\n  top: 50%;\n}\n\n.fieldset {\n  justify-content: space-between;\n}\n\n.form-group {\n  width: 30%;\n  gap: 0.2rem;\n}\n\n.form-group label {\n  font-size: 0.4rem;\n  letter-spacing: 0.1rem;\n  font-weight: 700;\n  color: var(--color-smokey-grey);\n}\n\n.form-group input {\n  border: solid 1px var(--color-light-grey);\n  border-radius: 0.2rem;\n  padding: 0.5rem;\n  font-weight: 700;\n  font-size: 0.5rem;\n}\n\n.form-group input:active,\n.form-group input:focus {\n  outline: 1px solid var(--color-purple);\n}\n\n.form-button {\n  height: 2rem;\n  width: 2rem;\n  justify-content: center;\n  align-items: center;\n  border-radius: 2rem;\n  background-color: var(--color-purple);\n  border: 1px solid var(--color-purple);\n  margin: auto;\n}\n\n.form-button:hover,\n.form-button:focus {\n  background-color: var(--color-off-black);\n  border: 1px solid var(--color-off-black);\n}\n\n/* Element rules */\nbody {\n  background-color: var(--color-off-white);\n  height: 100dvh;\n  padding: 0;\n}\n\nform {\n  gap: 0.2rem;\n  padding-bottom: 0.6rem;\n}\n\nmain {\n  background-color: var(--color-white);\n  width: 80%;\n  margin: auto;\n  padding: 0.7rem;\n  border-radius: 1rem;\n  border-bottom-right-radius: 3rem;\n}\n\n/* Utility Classes */\n.flex-column {\n  display: flex;\n  flex-direction: column;\n}\n\n.flex-column-reverse {\n  display: flex;\n  flex-direction: column-reverse;\n}\n\n.flex-row {\n  display: flex;\n  flex-direction: row;\n}\n\n.centered {\n  justify-content: center;\n}\n\n.form-group input.invalid {\n  border-color: var(--color-light-red);\n  outline-color: var(--color-light-red);\n}\n\nlabel:has(+ input.invalid) {\n  color: var(--color-light-red);\n}\n\n.error {\n  color: var(--color-light-red);\n  font-size: var(--font-small);\n  font-style: italic;\n  height: 1rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* CSS Reset */
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol,
ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

/* Remove arrows from input[type=number] */
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
`, "",{"version":3,"sources":["webpack://./src/styles/reset.css"],"names":[],"mappings":"AAAA,cAAc;AACd;EACE,sBAAsB;AACxB;;AAEA;;;EAGE,mBAAmB;AACrB;;AAEA;;;;;;;;;;EAUE,SAAS;EACT,UAAU;EACV,mBAAmB;AACrB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA,0CAA0C;AAC1C,gCAAgC;AAChC;;EAEE,wBAAwB;EACxB,SAAS;AACX;;AAEA,YAAY;AACZ;EACE,0BAA0B;AAC5B","sourcesContent":["/* CSS Reset */\nhtml {\n  box-sizing: border-box;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nol,\nul {\n  margin: 0;\n  padding: 0;\n  font-weight: normal;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Remove arrows from input[type=number] */\n/* Chrome, Safari, Edge, Opera */\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n/* Firefox */\ninput[type=\"number\"] {\n  -moz-appearance: textfield;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/validate.js":
/*!****************************!*\
  !*** ./src/js/validate.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const validation = (() => {
  const validateField = (field) => {
    const validity = field.validity;

    // valueMissing
    if (validity.valueMissing) {
      field.setCustomValidity("Required");
      return false;
    }

    // rangeUnderflow and rangeOverflow
    if (validity.rangeUnderflow || validity.rangeOverflow) {
      if (field.name === "day") field.setCustomValidity("Must be a valid day");

      if (field.name === "month")
        field.setCustomValidity("Must be a valid month");

      return false;
    }

    // badInput
    if (validity.badInput) {
      field.setCustomValidity("Must be a number");
      return false;
    }

    // patternMismatch
    if (validity.patternMismatch) {
      field.setCustomValidity("Must be a valid year");
      return false;
    }

    // future date
    // todo: Get current year programatically.
    if (field.name === "year" && field.value > 2024) {
      field.setCustomValidity("Cannot be future year");
      return false;
    }

    // todo: test for month date mismatch

    // no error
    field.setCustomValidity("");
    return true;
  };

  const validateForm = (form) => {
    // todo: add validity check to see if month and day match
    // check form validity
    if (form.checkValidity()) {
      return true;
    } else {
      return false;
    }
  };

  return { validateField, validateForm };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);


/***/ }),

/***/ "./src/js/view.js":
/*!************************!*\
  !*** ./src/js/view.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const view = (() => {
  const styleValidation = (field, isValid) => {
    if (field.tagName !== "INPUT") return;

    // Set field class if invalid or valid
    if (!isValid) {
      field.classList.add("invalid");
    } else {
      field.classList.remove("invalid");
    }

    // Set ui error message
    const error = field.nextElementSibling;
    error.textContent = field.validationMessage;
  };

  return { styleValidation };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (view);


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/reset.css */ "./src/styles/reset.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _js_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/validate */ "./src/js/validate.js");
/* harmony import */ var _js_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/view */ "./src/js/view.js");
// Style & Asset Imports



// Module Imports



document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.setAttribute("novalidate", true);

  // Validate and handle validation when user leave a field
  form.addEventListener("focusout", (event) => {
    const field = event.target;
    const isValid = _js_validate__WEBPACK_IMPORTED_MODULE_2__["default"].validateField(field);
    _js_view__WEBPACK_IMPORTED_MODULE_3__["default"].styleValidation(field, isValid);
  });

  // Valiate and handle validation when user submits the form
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;

    const isValid = _js_validate__WEBPACK_IMPORTED_MODULE_2__["default"].validateForm(form);

    if (isValid) {
      // todo: process the form data
      console.log("valid form");
    } else {
      // Validate field and handle invalid fields
      for (let i in form.elements) {
        const field = form[i];

        if (field.tagName !== "INPUT") return;

        const isValid = _js_validate__WEBPACK_IMPORTED_MODULE_2__["default"].validateField(field);

        _js_view__WEBPACK_IMPORTED_MODULE_3__["default"].styleValidation(field, isValid);
      }
    }
  });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFlLElBQUksRUFBQzs7Ozs7OztVQ25CcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQzRCO0FBQ0Q7O0FBRTNCO0FBQ3VDO0FBQ1Y7O0FBRTdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0RBQVU7QUFDOUIsSUFBSSxnREFBSTtBQUNSLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQixvREFBVTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx3QkFBd0Isb0RBQVU7O0FBRWxDLFFBQVEsZ0RBQUk7QUFDWjtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlLy4vc3JjL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlLy4vc3JjL3N0eWxlcy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvLi9zcmMvc3R5bGVzL21haW4uY3NzP2U4MGEiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzPzRjZmIiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlLy4vc3JjL2pzL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvLi9zcmMvanMvdmlldy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlLy4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDQwMDswLDcwMDswLDgwMDsxLDQwMDsxLDcwMDsxLDgwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIEN1c3RvbSBQcm9wZXJ0aWVzICYgR2xvYmFsIFJ1bGVzICovXG46cm9vdCB7XG4gIC0tY29sb3ItcHVycGxlOiBoc2woMjU5LCAxMDAlLCA2NSUpO1xuICAtLWNvbG9yLWxpZ2h0LXJlZDogaHNsKDAsIDEwMCUsIDY3JSk7XG4gIC0tY29sb3Itd2hpdGU6IGhzbCgwLCAwJSwgMTAwJSk7XG4gIC0tY29sb3Itb2ZmLXdoaXRlOiBoc2woMCwgMCUsIDk0JSk7XG4gIC0tY29sb3ItbGlnaHQtZ3JleTogaHNsKDAsIDAlLCA4NiUpO1xuICAtLWNvbG9yLXNtb2tleS1ncmV5OiBoc2woMCwgMSUsIDQ0JSk7XG4gIC0tY29sb3Itb2ZmLWJsYWNrOiBoc2woMCwgMCUsIDglKTtcblxuICAtLXdpZHRoLW1vYmlsZTogMzc1cHg7XG4gIC0td2lkdGgtZGVza3RvcDogMTQ0MHB4O1xuXG4gIC0tZm9udC1sYXJnZTogMzJweDtcbiAgLS1mb250LXNtYWxsOiAxMXB4O1xufVxuXG4qIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtbGFyZ2UpO1xufVxuXG4vKiBDbGFzcyBiYXNlcyBydWxlcyAqL1xuLmFnZSB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5hZ2Ugc3BhbiB7XG4gIG1hcmdpbi1yaWdodDogMC4ycmVtO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXB1cnBsZSk7XG59XG5cbi5hdHRyaWJ1dGlvbiB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXJlbTtcbn1cblxuLmF0dHJpYnV0aW9uIGEge1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHVycGxlKTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsKTtcbn1cblxuLmJ1dHRvbi1ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJ1dHRvbi1ncm91cDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAycHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1saWdodC1ncmV5KTtcbiAgd2lkdGg6IDIuOHJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDUwJTtcbn1cblxuLmJ1dHRvbi1ncm91cDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDJweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0LWdyZXkpO1xuICB3aWR0aDogMi44cmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbn1cblxuLmZpZWxkc2V0IHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIHdpZHRoOiAzMCU7XG4gIGdhcDogMC4ycmVtO1xufVxuXG4uZm9ybS1ncm91cCBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC40cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tY29sb3Itc21va2V5LWdyZXkpO1xufVxuXG4uZm9ybS1ncm91cCBpbnB1dCB7XG4gIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWNvbG9yLWxpZ2h0LWdyZXkpO1xuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAwLjVyZW07XG59XG5cbi5mb3JtLWdyb3VwIGlucHV0OmFjdGl2ZSxcbi5mb3JtLWdyb3VwIGlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXB1cnBsZSk7XG59XG5cbi5mb3JtLWJ1dHRvbiB7XG4gIGhlaWdodDogMnJlbTtcbiAgd2lkdGg6IDJyZW07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wdXJwbGUpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1wdXJwbGUpO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5mb3JtLWJ1dHRvbjpob3Zlcixcbi5mb3JtLWJ1dHRvbjpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW9mZi1ibGFjayk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLW9mZi1ibGFjayk7XG59XG5cbi8qIEVsZW1lbnQgcnVsZXMgKi9cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1vZmYtd2hpdGUpO1xuICBoZWlnaHQ6IDEwMGR2aDtcbiAgcGFkZGluZzogMDtcbn1cblxuZm9ybSB7XG4gIGdhcDogMC4ycmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC42cmVtO1xufVxuXG5tYWluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDAuN3JlbTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNyZW07XG59XG5cbi8qIFV0aWxpdHkgQ2xhc3NlcyAqL1xuLmZsZXgtY29sdW1uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmZsZXgtY29sdW1uLXJldmVyc2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG59XG5cbi5mbGV4LXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5jZW50ZXJlZCB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZm9ybS1ncm91cCBpbnB1dC5pbnZhbGlkIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1saWdodC1yZWQpO1xuICBvdXRsaW5lLWNvbG9yOiB2YXIoLS1jb2xvci1saWdodC1yZWQpO1xufVxuXG5sYWJlbDpoYXMoKyBpbnB1dC5pbnZhbGlkKSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1saWdodC1yZWQpO1xufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogdmFyKC0tY29sb3ItbGlnaHQtcmVkKTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsKTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBoZWlnaHQ6IDFyZW07XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUEscUNBQXFDO0FBQ3JDO0VBQ0UsbUNBQW1DO0VBQ25DLG9DQUFvQztFQUNwQywrQkFBK0I7RUFDL0Isa0NBQWtDO0VBQ2xDLG1DQUFtQztFQUNuQyxvQ0FBb0M7RUFDcEMsaUNBQWlDOztFQUVqQyxxQkFBcUI7RUFDckIsdUJBQXVCOztFQUV2QixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLDRCQUE0QjtBQUM5Qjs7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxjQUFjO0VBQ2QseUNBQXlDO0VBQ3pDLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztFQUNkLHlDQUF5QztFQUN6QyxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHFDQUFxQztFQUNyQyxxQ0FBcUM7RUFDckMsWUFBWTtBQUNkOztBQUVBOztFQUVFLHdDQUF3QztFQUN4Qyx3Q0FBd0M7QUFDMUM7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0Usd0NBQXdDO0VBQ3hDLGNBQWM7RUFDZCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLFVBQVU7RUFDVixZQUFZO0VBQ1osZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQ0FBZ0M7QUFDbEM7O0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDQwMDswLDcwMDswLDgwMDsxLDQwMDsxLDcwMDsxLDgwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4vKiBDdXN0b20gUHJvcGVydGllcyAmIEdsb2JhbCBSdWxlcyAqL1xcbjpyb290IHtcXG4gIC0tY29sb3ItcHVycGxlOiBoc2woMjU5LCAxMDAlLCA2NSUpO1xcbiAgLS1jb2xvci1saWdodC1yZWQ6IGhzbCgwLCAxMDAlLCA2NyUpO1xcbiAgLS1jb2xvci13aGl0ZTogaHNsKDAsIDAlLCAxMDAlKTtcXG4gIC0tY29sb3Itb2ZmLXdoaXRlOiBoc2woMCwgMCUsIDk0JSk7XFxuICAtLWNvbG9yLWxpZ2h0LWdyZXk6IGhzbCgwLCAwJSwgODYlKTtcXG4gIC0tY29sb3Itc21va2V5LWdyZXk6IGhzbCgwLCAxJSwgNDQlKTtcXG4gIC0tY29sb3Itb2ZmLWJsYWNrOiBoc2woMCwgMCUsIDglKTtcXG5cXG4gIC0td2lkdGgtbW9iaWxlOiAzNzVweDtcXG4gIC0td2lkdGgtZGVza3RvcDogMTQ0MHB4O1xcblxcbiAgLS1mb250LWxhcmdlOiAzMnB4O1xcbiAgLS1mb250LXNtYWxsOiAxMXB4O1xcbn1cXG5cXG4qIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtbGFyZ2UpO1xcbn1cXG5cXG4vKiBDbGFzcyBiYXNlcyBydWxlcyAqL1xcbi5hZ2Uge1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uYWdlIHNwYW4ge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjJyZW07XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wdXJwbGUpO1xcbn1cXG5cXG4uYXR0cmlidXRpb24ge1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDFyZW07XFxufVxcblxcbi5hdHRyaWJ1dGlvbiBhIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wdXJwbGUpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsKTtcXG59XFxuXFxuLmJ1dHRvbi1ncm91cCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5idXR0b24tZ3JvdXA6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogMnB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1saWdodC1ncmV5KTtcXG4gIHdpZHRoOiAyLjhyZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiA1MCU7XFxufVxcblxcbi5idXR0b24tZ3JvdXA6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0LWdyZXkpO1xcbiAgd2lkdGg6IDIuOHJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiA1MCU7XFxufVxcblxcbi5maWVsZHNldCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5mb3JtLWdyb3VwIHtcXG4gIHdpZHRoOiAzMCU7XFxuICBnYXA6IDAuMnJlbTtcXG59XFxuXFxuLmZvcm0tZ3JvdXAgbGFiZWwge1xcbiAgZm9udC1zaXplOiAwLjRyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zbW9rZXktZ3JleSk7XFxufVxcblxcbi5mb3JtLWdyb3VwIGlucHV0IHtcXG4gIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWNvbG9yLWxpZ2h0LWdyZXkpO1xcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMC41cmVtO1xcbn1cXG5cXG4uZm9ybS1ncm91cCBpbnB1dDphY3RpdmUsXFxuLmZvcm0tZ3JvdXAgaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXB1cnBsZSk7XFxufVxcblxcbi5mb3JtLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMnJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wdXJwbGUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItcHVycGxlKTtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmZvcm0tYnV0dG9uOmhvdmVyLFxcbi5mb3JtLWJ1dHRvbjpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1vZmYtYmxhY2spO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3Itb2ZmLWJsYWNrKTtcXG59XFxuXFxuLyogRWxlbWVudCBydWxlcyAqL1xcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itb2ZmLXdoaXRlKTtcXG4gIGhlaWdodDogMTAwZHZoO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuZm9ybSB7XFxuICBnYXA6IDAuMnJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjZyZW07XFxufVxcblxcbm1haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDAuN3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3JlbTtcXG59XFxuXFxuLyogVXRpbGl0eSBDbGFzc2VzICovXFxuLmZsZXgtY29sdW1uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZmxleC1jb2x1bW4tcmV2ZXJzZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbn1cXG5cXG4uZmxleC1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5jZW50ZXJlZCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmZvcm0tZ3JvdXAgaW5wdXQuaW52YWxpZCB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0LXJlZCk7XFxuICBvdXRsaW5lLWNvbG9yOiB2YXIoLS1jb2xvci1saWdodC1yZWQpO1xcbn1cXG5cXG5sYWJlbDpoYXMoKyBpbnB1dC5pbnZhbGlkKSB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItbGlnaHQtcmVkKTtcXG59XFxuXFxuLmVycm9yIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1saWdodC1yZWQpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsKTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGhlaWdodDogMXJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBDU1MgUmVzZXQgKi9cbmh0bWwge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qLFxuKjpiZWZvcmUsXG4qOmFmdGVyIHtcbiAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxuYm9keSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnAsXG5vbCxcbnVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG5vbCxcbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qIFJlbW92ZSBhcnJvd3MgZnJvbSBpbnB1dFt0eXBlPW51bWJlcl0gKi9cbi8qIENocm9tZSwgU2FmYXJpLCBFZGdlLCBPcGVyYSAqL1xuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKiBGaXJlZm94ICovXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdIHtcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGNBQWM7QUFDZDtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTs7O0VBR0UsbUJBQW1CO0FBQ3JCOztBQUVBOzs7Ozs7Ozs7O0VBVUUsU0FBUztFQUNULFVBQVU7RUFDVixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQSwwQ0FBMEM7QUFDMUMsZ0NBQWdDO0FBQ2hDOztFQUVFLHdCQUF3QjtFQUN4QixTQUFTO0FBQ1g7O0FBRUEsWUFBWTtBQUNaO0VBQ0UsMEJBQTBCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIENTUyBSZXNldCAqL1xcbmh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKixcXG4qOmJlZm9yZSxcXG4qOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmJvZHksXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5vbCxcXG51bCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuaW1nIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyogUmVtb3ZlIGFycm93cyBmcm9tIGlucHV0W3R5cGU9bnVtYmVyXSAqL1xcbi8qIENocm9tZSwgU2FmYXJpLCBFZGdlLCBPcGVyYSAqL1xcbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxcbmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyogRmlyZWZveCAqL1xcbmlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdIHtcXG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHZhbGlkYXRpb24gPSAoKCkgPT4ge1xuICBjb25zdCB2YWxpZGF0ZUZpZWxkID0gKGZpZWxkKSA9PiB7XG4gICAgY29uc3QgdmFsaWRpdHkgPSBmaWVsZC52YWxpZGl0eTtcblxuICAgIC8vIHZhbHVlTWlzc2luZ1xuICAgIGlmICh2YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAgIGZpZWxkLnNldEN1c3RvbVZhbGlkaXR5KFwiUmVxdWlyZWRcIik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gcmFuZ2VVbmRlcmZsb3cgYW5kIHJhbmdlT3ZlcmZsb3dcbiAgICBpZiAodmFsaWRpdHkucmFuZ2VVbmRlcmZsb3cgfHwgdmFsaWRpdHkucmFuZ2VPdmVyZmxvdykge1xuICAgICAgaWYgKGZpZWxkLm5hbWUgPT09IFwiZGF5XCIpIGZpZWxkLnNldEN1c3RvbVZhbGlkaXR5KFwiTXVzdCBiZSBhIHZhbGlkIGRheVwiKTtcblxuICAgICAgaWYgKGZpZWxkLm5hbWUgPT09IFwibW9udGhcIilcbiAgICAgICAgZmllbGQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJNdXN0IGJlIGEgdmFsaWQgbW9udGhcIik7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBiYWRJbnB1dFxuICAgIGlmICh2YWxpZGl0eS5iYWRJbnB1dCkge1xuICAgICAgZmllbGQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJNdXN0IGJlIGEgbnVtYmVyXCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIHBhdHRlcm5NaXNtYXRjaFxuICAgIGlmICh2YWxpZGl0eS5wYXR0ZXJuTWlzbWF0Y2gpIHtcbiAgICAgIGZpZWxkLnNldEN1c3RvbVZhbGlkaXR5KFwiTXVzdCBiZSBhIHZhbGlkIHllYXJcIik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gZnV0dXJlIGRhdGVcbiAgICAvLyB0b2RvOiBHZXQgY3VycmVudCB5ZWFyIHByb2dyYW1hdGljYWxseS5cbiAgICBpZiAoZmllbGQubmFtZSA9PT0gXCJ5ZWFyXCIgJiYgZmllbGQudmFsdWUgPiAyMDI0KSB7XG4gICAgICBmaWVsZC5zZXRDdXN0b21WYWxpZGl0eShcIkNhbm5vdCBiZSBmdXR1cmUgeWVhclwiKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyB0b2RvOiB0ZXN0IGZvciBtb250aCBkYXRlIG1pc21hdGNoXG5cbiAgICAvLyBubyBlcnJvclxuICAgIGZpZWxkLnNldEN1c3RvbVZhbGlkaXR5KFwiXCIpO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IHZhbGlkYXRlRm9ybSA9IChmb3JtKSA9PiB7XG4gICAgLy8gdG9kbzogYWRkIHZhbGlkaXR5IGNoZWNrIHRvIHNlZSBpZiBtb250aCBhbmQgZGF5IG1hdGNoXG4gICAgLy8gY2hlY2sgZm9ybSB2YWxpZGl0eVxuICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgdmFsaWRhdGVGaWVsZCwgdmFsaWRhdGVGb3JtIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0aW9uO1xuIiwiY29uc3QgdmlldyA9ICgoKSA9PiB7XG4gIGNvbnN0IHN0eWxlVmFsaWRhdGlvbiA9IChmaWVsZCwgaXNWYWxpZCkgPT4ge1xuICAgIGlmIChmaWVsZC50YWdOYW1lICE9PSBcIklOUFVUXCIpIHJldHVybjtcblxuICAgIC8vIFNldCBmaWVsZCBjbGFzcyBpZiBpbnZhbGlkIG9yIHZhbGlkXG4gICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICBmaWVsZC5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmllbGQuY2xhc3NMaXN0LnJlbW92ZShcImludmFsaWRcIik7XG4gICAgfVxuXG4gICAgLy8gU2V0IHVpIGVycm9yIG1lc3NhZ2VcbiAgICBjb25zdCBlcnJvciA9IGZpZWxkLm5leHRFbGVtZW50U2libGluZztcbiAgICBlcnJvci50ZXh0Q29udGVudCA9IGZpZWxkLnZhbGlkYXRpb25NZXNzYWdlO1xuICB9O1xuXG4gIHJldHVybiB7IHN0eWxlVmFsaWRhdGlvbiB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgdmlldztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIFN0eWxlICYgQXNzZXQgSW1wb3J0c1xuaW1wb3J0IFwiLi9zdHlsZXMvcmVzZXQuY3NzXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9tYWluLmNzc1wiO1xuXG4vLyBNb2R1bGUgSW1wb3J0c1xuaW1wb3J0IHZhbGlkYXRpb24gZnJvbSBcIi4vanMvdmFsaWRhdGVcIjtcbmltcG9ydCB2aWV3IGZyb20gXCIuL2pzL3ZpZXdcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG4gIGZvcm0uc2V0QXR0cmlidXRlKFwibm92YWxpZGF0ZVwiLCB0cnVlKTtcblxuICAvLyBWYWxpZGF0ZSBhbmQgaGFuZGxlIHZhbGlkYXRpb24gd2hlbiB1c2VyIGxlYXZlIGEgZmllbGRcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgZmllbGQgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgaXNWYWxpZCA9IHZhbGlkYXRpb24udmFsaWRhdGVGaWVsZChmaWVsZCk7XG4gICAgdmlldy5zdHlsZVZhbGlkYXRpb24oZmllbGQsIGlzVmFsaWQpO1xuICB9KTtcblxuICAvLyBWYWxpYXRlIGFuZCBoYW5kbGUgdmFsaWRhdGlvbiB3aGVuIHVzZXIgc3VibWl0cyB0aGUgZm9ybVxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGZvcm0gPSBldmVudC50YXJnZXQ7XG5cbiAgICBjb25zdCBpc1ZhbGlkID0gdmFsaWRhdGlvbi52YWxpZGF0ZUZvcm0oZm9ybSk7XG5cbiAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgLy8gdG9kbzogcHJvY2VzcyB0aGUgZm9ybSBkYXRhXG4gICAgICBjb25zb2xlLmxvZyhcInZhbGlkIGZvcm1cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFZhbGlkYXRlIGZpZWxkIGFuZCBoYW5kbGUgaW52YWxpZCBmaWVsZHNcbiAgICAgIGZvciAobGV0IGkgaW4gZm9ybS5lbGVtZW50cykge1xuICAgICAgICBjb25zdCBmaWVsZCA9IGZvcm1baV07XG5cbiAgICAgICAgaWYgKGZpZWxkLnRhZ05hbWUgIT09IFwiSU5QVVRcIikgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGlzVmFsaWQgPSB2YWxpZGF0aW9uLnZhbGlkYXRlRmllbGQoZmllbGQpO1xuXG4gICAgICAgIHZpZXcuc3R5bGVWYWxpZGF0aW9uKGZpZWxkLCBpc1ZhbGlkKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=