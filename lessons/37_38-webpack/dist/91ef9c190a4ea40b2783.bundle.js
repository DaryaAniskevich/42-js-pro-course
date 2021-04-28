/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_Content)
});

// EXTERNAL MODULE: ./src/utils/components.js
var components = __webpack_require__(735);
;// CONCATENATED MODULE: ./src/components/Content/cat.jpeg
/* harmony default export */ const cat = (__webpack_require__.p + "2cf85f48c9278d3d9439376c80e4d065.jpeg");
;// CONCATENATED MODULE: ./src/components/Content/Content.js




var Content = function Content() {
  return (0,components/* createComponent */.L)("\n  <main class=\"content\">\n    <h1>My app</h1>\n    <p>Some text with custom font</p>\n    <img src=\"".concat(cat, "\" />\n  </main>\n"));
};

/* harmony default export */ const Content_Content = (Content);
;// CONCATENATED MODULE: ./src/components/Content/index.js

/* harmony default export */ const components_Content = (Content_Content);

/***/ }),

/***/ 735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ createComponent)
/* harmony export */ });
/* unused harmony export notUsedFunction */
var createComponent = function createComponent(stringHtml) {
  console.log('createComponent', stringHtml);
  return new DOMParser().parseFromString(stringHtml, 'text/html').querySelector('body').firstChild;
};
var notUsedFunction = function notUsedFunction() {
  console.log('notUsedFunction');
};

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXTERNAL MODULE: ./src/utils/components.js
var components = __webpack_require__(735);
;// CONCATENATED MODULE: ./src/components/Header/logo.png
/* harmony default export */ const logo = (__webpack_require__.p + "8e3dd0d1ec344c0d687b9a0d24c43f06.png");
;// CONCATENATED MODULE: ./src/components/Header/Header.js




var Header = function Header() {
  return (0,components/* createComponent */.L)("\n  <header class=\"header\">\n    <img src=\"".concat(logo, "\" width=\"200\" alt=\"\" />\n    <a href=\"/home\">Home</a>\n    <a href=\"/contacts\">Contacts</a>\n  </header>\n"));
};

/* harmony default export */ const Header_Header = (Header);
;// CONCATENATED MODULE: ./src/components/Header/index.js

/* harmony default export */ const components_Header = (Header_Header);
// EXTERNAL MODULE: ./src/components/Content/index.js + 2 modules
var Content = __webpack_require__(556);
;// CONCATENATED MODULE: ./src/components/Contacts/cat-computer.jpeg
/* harmony default export */ const cat_computer = (__webpack_require__.p + "9a222994fd50c9e188de89408ccc1547.jpeg");
;// CONCATENATED MODULE: ./src/components/Contacts/Contacts.js




var Contacts = function Contacts() {
  return (0,components/* createComponent */.L)("\n  <main class=\"contacts\">\n    <h1>Contacts</h1>\n    <p>Some info about site</p>\n    <img src=\"".concat(cat_computer, "\" />\n  </main>\n"));
};

/* harmony default export */ const Contacts_Contacts = (Contacts);
;// CONCATENATED MODULE: ./src/components/Contacts/index.js

/* harmony default export */ const components_Contacts = (Contacts_Contacts);
;// CONCATENATED MODULE: ./src/main.js





var render = function render() {
  var root = document.querySelector("#app");
  root.innerHTML = "";
  root.appendChild(components_Header());

  if (window.location.pathname === "/home" || window.location.pathname === "/") {
    root.appendChild((0,Content.default)());
  }

  if (window.location.pathname === "/contacts") {
    Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 556)).then(function (_ref) {
      var contentModule = _ref.default;
      console.log(contentModule);
      root.appendChild(contentModule());
    });
    root.appendChild(components_Contacts());
  }
};

if (false) {}

render();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXByYWN0aWNlLy4vc3JjL2NvbXBvbmVudHMvQ29udGVudC9jYXQuanBlZyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByYWN0aWNlLy4vc3JjL2NvbXBvbmVudHMvQ29udGVudC9Db250ZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stcHJhY3RpY2UvLi9zcmMvY29tcG9uZW50cy9Db250ZW50L2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stcHJhY3RpY2UvLi9zcmMvdXRpbHMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByYWN0aWNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stcHJhY3RpY2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stcHJhY3RpY2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByYWN0aWNlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcmFjdGljZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stcHJhY3RpY2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcmFjdGljZS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9sb2dvLnBuZyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByYWN0aWNlLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByYWN0aWNlLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stcHJhY3RpY2UvLi9zcmMvY29tcG9uZW50cy9Db250YWN0cy9jYXQtY29tcHV0ZXIuanBlZyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByYWN0aWNlLy4vc3JjL2NvbXBvbmVudHMvQ29udGFjdHMvQ29udGFjdHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcmFjdGljZS8uL3NyYy9jb21wb25lbnRzL0NvbnRhY3RzL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stcHJhY3RpY2UvLi9zcmMvbWFpbi5qcyJdLCJuYW1lcyI6WyJDb250ZW50IiwiY3JlYXRlQ29tcG9uZW50IiwiY2F0VXJsIiwic3RyaW5nSHRtbCIsImNvbnNvbGUiLCJsb2ciLCJET01QYXJzZXIiLCJwYXJzZUZyb21TdHJpbmciLCJxdWVyeVNlbGVjdG9yIiwiZmlyc3RDaGlsZCIsIm5vdFVzZWRGdW5jdGlvbiIsIkhlYWRlciIsImxvZ29VcmwiLCJDb250YWN0cyIsImNhdENvbXB1dGVyVXJsIiwicmVuZGVyIiwicm9vdCIsImRvY3VtZW50IiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwidGhlbiIsImNvbnRlbnRNb2R1bGUiLCJkZWZhdWx0IiwibW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBZSxxQkFBdUIsMENBQTBDLEU7O0FDQWhGO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFNBQU1DLHFDQUFlLG9IQUlyQkMsR0FKcUIsd0JBQXJCO0FBQUEsQ0FBaEI7O0FBUUEsc0RBQWVGLE9BQWYsRTs7QUNaQTtBQUVBLHlEQUFlQSxlQUFmLEU7Ozs7Ozs7Ozs7O0FDRk8sSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDRSxVQUFELEVBQWdCO0FBQzdDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixFQUErQkYsVUFBL0I7QUFDQSxTQUFPLElBQUlHLFNBQUosR0FBZ0JDLGVBQWhCLENBQWdDSixVQUFoQyxFQUE2QyxXQUE3QyxFQUEwREssYUFBMUQsQ0FBd0UsTUFBeEUsRUFBZ0ZDLFVBQXZGO0FBQ0QsQ0FITTtBQUtBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUNuQ04sU0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVo7QUFDRCxDQUZNLEM7Ozs7OztVQ0xQO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtDOzs7Ozs7Ozs7OztBQ2ZBLDJDQUFlLHFCQUF1Qix5Q0FBeUMsRTs7QUNBL0U7QUFDQTtBQUNBOztBQUVBLElBQU1NLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsU0FBTVYscUNBQWUseURBRXBCVyxJQUZvQix5SEFBckI7QUFBQSxDQUFmOztBQVFBLG9EQUFlRCxNQUFmLEU7O0FDWkE7QUFFQSx3REFBZUEsYUFBZixFOzs7O0FDRkEsbURBQWUscUJBQXVCLDBDQUEwQyxFOztBQ0FoRjtBQUNBO0FBQ0E7O0FBRUEsSUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxTQUFNWixxQ0FBZSxpSEFJdEJhLFlBSnNCLHdCQUFyQjtBQUFBLENBQWpCOztBQVFBLHdEQUFlRCxRQUFmLEU7O0FDWkE7QUFFQSwwREFBZUEsaUJBQWYsRTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNRSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ25CLE1BQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDVCxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQVEsTUFBSSxDQUFDRSxTQUFMLEdBQWlCLEVBQWpCO0FBRUFGLE1BQUksQ0FBQ0csV0FBTCxDQUFpQlIsaUJBQU0sRUFBdkI7O0FBQ0EsTUFDRVMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxRQUFoQixLQUE2QixPQUE3QixJQUNBRixNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLFFBQWhCLEtBQTZCLEdBRi9CLEVBR0U7QUFDQU4sUUFBSSxDQUFDRyxXQUFMLENBQWlCbkIsbUJBQU8sRUFBeEI7QUFDRDs7QUFFRCxNQUFJb0IsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxRQUFoQixLQUE2QixXQUFqQyxFQUE4QztBQUM1Qyw2RkFBK0JDLElBQS9CLENBQW9DLGdCQUFnQztBQUFBLFVBQXBCQyxhQUFvQixRQUE3QkMsT0FBNkI7QUFDbEVyQixhQUFPLENBQUNDLEdBQVIsQ0FBWW1CLGFBQVo7QUFDQVIsVUFBSSxDQUFDRyxXQUFMLENBQWlCSyxhQUFhLEVBQTlCO0FBQ0QsS0FIRDtBQUlBUixRQUFJLENBQUNHLFdBQUwsQ0FBaUJOLG1CQUFRLEVBQXpCO0FBQ0Q7QUFDRixDQW5CRDs7QUFxQkEsSUFBSWEsS0FBSixFQUFnQixFQUtmOztBQUVEWCxNQUFNLEciLCJmaWxlIjoiOTFlZjljMTkwYTRlYTQwYjI3ODMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjJjZjg1ZjQ4YzkyNzhkM2Q5NDM5Mzc2YzgwZTRkMDY1LmpwZWdcIjsiLCJpbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICd1dGlscy9jb21wb25lbnRzJ1xyXG5pbXBvcnQgJy4vQ29udGVudC5jc3MnXHJcbmltcG9ydCBjYXRVcmwgZnJvbSAnLi9jYXQuanBlZydcclxuXHJcbmNvbnN0IENvbnRlbnQgPSAoKSA9PiBjcmVhdGVDb21wb25lbnQoYFxyXG4gIDxtYWluIGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgPGgxPk15IGFwcDwvaDE+XHJcbiAgICA8cD5Tb21lIHRleHQgd2l0aCBjdXN0b20gZm9udDwvcD5cclxuICAgIDxpbWcgc3JjPVwiJHtjYXRVcmx9XCIgLz5cclxuICA8L21haW4+XHJcbmApXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50XHJcbiIsImltcG9ydCBDb250ZW50IGZyb20gJy4vQ29udGVudCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRcclxuIiwiZXhwb3J0IGNvbnN0IGNyZWF0ZUNvbXBvbmVudCA9IChzdHJpbmdIdG1sKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ2NyZWF0ZUNvbXBvbmVudCcsIHN0cmluZ0h0bWwpXHJcbiAgcmV0dXJuIG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoc3RyaW5nSHRtbCwgICd0ZXh0L2h0bWwnKS5xdWVyeVNlbGVjdG9yKCdib2R5JykuZmlyc3RDaGlsZFxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgbm90VXNlZEZ1bmN0aW9uID0gKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdub3RVc2VkRnVuY3Rpb24nKVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4ZTNkZDBkMWVjMzQ0YzBkNjg3YjlhMGQyNGM0M2YwNi5wbmdcIjsiLCJpbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICd1dGlscy9jb21wb25lbnRzJ1xyXG5pbXBvcnQgbG9nb1VybCBmcm9tICcuL2xvZ28ucG5nJ1xyXG5pbXBvcnQgJy4vSGVhZGVyLmNzcydcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IGNyZWF0ZUNvbXBvbmVudChgXHJcbiAgPGhlYWRlciBjbGFzcz1cImhlYWRlclwiPlxyXG4gICAgPGltZyBzcmM9XCIke2xvZ29Vcmx9XCIgd2lkdGg9XCIyMDBcIiBhbHQ9XCJcIiAvPlxyXG4gICAgPGEgaHJlZj1cIi9ob21lXCI+SG9tZTwvYT5cclxuICAgIDxhIGhyZWY9XCIvY29udGFjdHNcIj5Db250YWN0czwvYT5cclxuICA8L2hlYWRlcj5cclxuYClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxyXG4iLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXHJcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5YTIyMjk5NGZkNTBjOWUxODhkZTg5NDA4Y2NjMTU0Ny5qcGVnXCI7IiwiaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAndXRpbHMvY29tcG9uZW50cydcclxuaW1wb3J0ICcuL0NvbnRhY3RzLmNzcydcclxuaW1wb3J0IGNhdENvbXB1dGVyVXJsIGZyb20gJy4vY2F0LWNvbXB1dGVyLmpwZWcnXHJcblxyXG5jb25zdCBDb250YWN0cyA9ICgpID0+IGNyZWF0ZUNvbXBvbmVudChgXHJcbiAgPG1haW4gY2xhc3M9XCJjb250YWN0c1wiPlxyXG4gICAgPGgxPkNvbnRhY3RzPC9oMT5cclxuICAgIDxwPlNvbWUgaW5mbyBhYm91dCBzaXRlPC9wPlxyXG4gICAgPGltZyBzcmM9XCIke2NhdENvbXB1dGVyVXJsfVwiIC8+XHJcbiAgPC9tYWluPlxyXG5gKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdHNcclxuIiwiaW1wb3J0IENvbnRhY3RzIGZyb20gJy4vQ29udGFjdHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0c1xyXG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5jc3NcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgQ29udGVudCBmcm9tIFwiLi9jb21wb25lbnRzL0NvbnRlbnRcIjtcclxuaW1wb3J0IENvbnRhY3RzIGZyb20gXCIuL2NvbXBvbmVudHMvQ29udGFjdHNcIjtcclxuXHJcbmNvbnN0IHJlbmRlciA9ICgpID0+IHtcclxuICBjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhcHBcIik7XHJcbiAgcm9vdC5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICByb290LmFwcGVuZENoaWxkKEhlYWRlcigpKTtcclxuICBpZiAoXHJcbiAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL2hvbWVcIiB8fFxyXG4gICAgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9cIlxyXG4gICkge1xyXG4gICAgcm9vdC5hcHBlbmRDaGlsZChDb250ZW50KCkpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvY29udGFjdHNcIikge1xyXG4gICAgaW1wb3J0KFwiLi9jb21wb25lbnRzL0NvbnRlbnRcIikudGhlbigoeyBkZWZhdWx0OiBjb250ZW50TW9kdWxlIH0pID0+IHtcclxuICAgICAgY29uc29sZS5sb2coY29udGVudE1vZHVsZSk7XHJcbiAgICAgIHJvb3QuYXBwZW5kQ2hpbGQoY29udGVudE1vZHVsZSgpKTtcclxuICAgIH0pO1xyXG4gICAgcm9vdC5hcHBlbmRDaGlsZChDb250YWN0cygpKTtcclxuICB9XHJcbn07XHJcblxyXG5pZiAobW9kdWxlLmhvdCkge1xyXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9jb21wb25lbnRzL0hlYWRlclwiLCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkFjY2VwdGluZyB0aGUgdXBkYXRlZCBwcmludE1lIG1vZHVsZSFcIik7XHJcbiAgICByZW5kZXIoKTtcclxuICB9KTtcclxufVxyXG5cclxucmVuZGVyKCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=