"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/isows@1.0.7_ws@8.18.3";
exports.ids = ["vendor-chunks/isows@1.0.7_ws@8.18.3"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/isows@1.0.7_ws@8.18.3/node_modules/isows/_esm/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/.pnpm/isows@1.0.7_ws@8.18.3/node_modules/isows/_esm/index.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WebSocket: () => (/* binding */ WebSocket)\n/* harmony export */ });\n/* harmony import */ var ws__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ws */ \"(ssr)/./node_modules/.pnpm/ws@8.18.3/node_modules/ws/wrapper.mjs\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"(ssr)/./node_modules/.pnpm/isows@1.0.7_ws@8.18.3/node_modules/isows/_esm/utils.js\");\n\n\nconst WebSocket = (()=>{\n    try {\n        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getNativeWebSocket)();\n    } catch  {\n        if (ws__WEBPACK_IMPORTED_MODULE_0__.WebSocket) return ws__WEBPACK_IMPORTED_MODULE_0__.WebSocket;\n        return ws__WEBPACK_IMPORTED_MODULE_0__;\n    }\n})(); //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vaXNvd3NAMS4wLjdfd3NAOC4xOC4zL25vZGVfbW9kdWxlcy9pc293cy9fZXNtL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFpQztBQUNlO0FBQ3pDLE1BQU1FLFlBQVksQ0FBQztJQUN0QixJQUFJO1FBQ0EsT0FBT0QsNkRBQWtCQTtJQUM3QixFQUNBLE9BQU07UUFDRixJQUFJRCx5Q0FBb0IsRUFDcEIsT0FBT0EseUNBQW9CO1FBQy9CLE9BQU9BLCtCQUFVQTtJQUNyQjtBQUNKLEtBQUssQ0FDTCxpQ0FBaUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iZWF0cml4LW9uZS1tZWRpYS1odWIvLi9ub2RlX21vZHVsZXMvLnBucG0vaXNvd3NAMS4wLjdfd3NAOC4xOC4zL25vZGVfbW9kdWxlcy9pc293cy9fZXNtL2luZGV4LmpzPzZiZjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgV2ViU29ja2V0XyBmcm9tIFwid3NcIjtcbmltcG9ydCB7IGdldE5hdGl2ZVdlYlNvY2tldCB9IGZyb20gXCIuL3V0aWxzLmpzXCI7XG5leHBvcnQgY29uc3QgV2ViU29ja2V0ID0gKCgpID0+IHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZ2V0TmF0aXZlV2ViU29ja2V0KCk7XG4gICAgfVxuICAgIGNhdGNoIHtcbiAgICAgICAgaWYgKFdlYlNvY2tldF8uV2ViU29ja2V0KVxuICAgICAgICAgICAgcmV0dXJuIFdlYlNvY2tldF8uV2ViU29ja2V0O1xuICAgICAgICByZXR1cm4gV2ViU29ja2V0XztcbiAgICB9XG59KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sIm5hbWVzIjpbIldlYlNvY2tldF8iLCJnZXROYXRpdmVXZWJTb2NrZXQiLCJXZWJTb2NrZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/isows@1.0.7_ws@8.18.3/node_modules/isows/_esm/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/isows@1.0.7_ws@8.18.3/node_modules/isows/_esm/utils.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/.pnpm/isows@1.0.7_ws@8.18.3/node_modules/isows/_esm/utils.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getNativeWebSocket: () => (/* binding */ getNativeWebSocket)\n/* harmony export */ });\nfunction getNativeWebSocket() {\n    if (typeof WebSocket !== \"undefined\") return WebSocket;\n    if (typeof global.WebSocket !== \"undefined\") return global.WebSocket;\n    if (typeof window.WebSocket !== \"undefined\") return window.WebSocket;\n    if (typeof self.WebSocket !== \"undefined\") return self.WebSocket;\n    throw new Error(\"`WebSocket` is not supported in this environment\");\n} //# sourceMappingURL=utils.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vaXNvd3NAMS4wLjdfd3NAOC4xOC4zL25vZGVfbW9kdWxlcy9pc293cy9fZXNtL3V0aWxzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxTQUFTQTtJQUNaLElBQUksT0FBT0MsY0FBYyxhQUNyQixPQUFPQTtJQUNYLElBQUksT0FBT0MsT0FBT0QsU0FBUyxLQUFLLGFBQzVCLE9BQU9DLE9BQU9ELFNBQVM7SUFDM0IsSUFBSSxPQUFPRSxPQUFPRixTQUFTLEtBQUssYUFDNUIsT0FBT0UsT0FBT0YsU0FBUztJQUMzQixJQUFJLE9BQU9HLEtBQUtILFNBQVMsS0FBSyxhQUMxQixPQUFPRyxLQUFLSCxTQUFTO0lBQ3pCLE1BQU0sSUFBSUksTUFBTTtBQUNwQixFQUNBLGlDQUFpQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JlYXRyaXgtb25lLW1lZGlhLWh1Yi8uL25vZGVfbW9kdWxlcy8ucG5wbS9pc293c0AxLjAuN193c0A4LjE4LjMvbm9kZV9tb2R1bGVzL2lzb3dzL19lc20vdXRpbHMuanM/YjdhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZ2V0TmF0aXZlV2ViU29ja2V0KCkge1xuICAgIGlmICh0eXBlb2YgV2ViU29ja2V0ICE9PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICByZXR1cm4gV2ViU29ja2V0O1xuICAgIGlmICh0eXBlb2YgZ2xvYmFsLldlYlNvY2tldCAhPT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgcmV0dXJuIGdsb2JhbC5XZWJTb2NrZXQ7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuV2ViU29ja2V0ICE9PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICByZXR1cm4gd2luZG93LldlYlNvY2tldDtcbiAgICBpZiAodHlwZW9mIHNlbGYuV2ViU29ja2V0ICE9PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICByZXR1cm4gc2VsZi5XZWJTb2NrZXQ7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiYFdlYlNvY2tldGAgaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGVudmlyb25tZW50XCIpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbHMuanMubWFwIl0sIm5hbWVzIjpbImdldE5hdGl2ZVdlYlNvY2tldCIsIldlYlNvY2tldCIsImdsb2JhbCIsIndpbmRvdyIsInNlbGYiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/isows@1.0.7_ws@8.18.3/node_modules/isows/_esm/utils.js\n");

/***/ })

};
;