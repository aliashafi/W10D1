/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const htmlGenerator = __webpack_require__(/*! ./warmup.js */ \"./src/warmup.js\");\nlet clockElement = document.getElementById('clock');\nclass Clock {\n  constructor() {\n    // 1. Create a Date object.\n    const currentTime = new Date();\n\n    // 2. Store the hour, minute, and second.\n    this.hours = currentTime.getHours();\n    this.minutes = currentTime.getMinutes();\n    this.seconds = currentTime.getSeconds();\n\n    // 3. Call printTime.\n    this.printTime();\n\n    // 4. Schedule the tick at 1 second intervals.\n    setInterval(this._tick.bind(this), 1000);\n  }\n\n  printTime() {\n    // Format the time in HH:MM:SS\n    const timeString = [this.hours, this.minutes, this.seconds].join(\":\");\n\n    // Use console.log to print it.\n    htmlGenerator(timeString, clockElement);\n    \n  }\n\n  _tick() {\n    // 1. Increment the time by one second.\n    this._incrementSeconds();\n\n    // 2. Call printTime.\n    this.printTime();\n  }\n\n  _incrementSeconds() {\n    // 1. Increment the time by one second.\n    this.seconds += 1;\n    if (this.seconds === 60) {\n      this.seconds = 0;\n      this._incrementMinutes();\n    }\n  }\n\n  _incrementMinutes() {\n    this.minutes += 1;\n    if (this.minutes === 60) {\n      this.minutes = 0;\n      this._incrementHours();\n    }\n  }\n\n  _incrementHours() {\n    this.hours = (this.hours + 1) % 24;\n  }\n}\n\nconst clock = new Clock();\nmodule.exports = Clock;\n\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nconst dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\nconst dogLinkCreator = function dogLinkCreator(){\n  let key = Object.keys(dogs);\n\n  let dogLinks = [];\n  for (let i = 0; i < key.length; i++) {\n    let liTag = document.createElement(\"li\");\n    let aTag = document.createElement(\"a\");\n    aTag.setAttribute(\"href\", dogs[key[i]]);\n    aTag.innerHTML = (key[i]);\n    liTag.setAttribute(\"class\", \"dog-link\");\n    liTag.appendChild(aTag);\n    dogLinks.push(liTag);\n  }\n  return dogLinks;\n};\n\nconst attachDogLinks = function attachDogLinks() {\n  let dogLinks = dogLinkCreator();\n  let dropDown = document.querySelector(\".drop-down-dog-list\");\n  dogLinks.forEach(el => {\n    dropDown.appendChild(el);\n  });\n\n};\n\n\n\nlet links = attachDogLinks();\n\nfunction handleEnter(ele){\n  ele.style.display = \"block\";\n}\n\nfunction handleLeave(ele){\n  ele.style.display = \"none\";\n}\n\nlet dropDownNav = document.querySelector(\".drop-down-dog-nav\");\n\ndropDownNav.addEventListener(\"mouseover\", function (event) {\n  let dropDown = document.querySelector(\".drop-down-dog-list\");\n  handleEnter(dropDown);\n});\n\ndropDownNav.addEventListener(\"mouseleave\", function (event) {\n  let dropDown = document.querySelector(\".drop-down-dog-list\");\n  handleLeave(dropDown);\n});\n\n\n\n\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_warmup__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _clock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock.js */ \"./src/clock.js\");\n/* harmony import */ var _clock_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_clock_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _drop_down_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down.js */ \"./src/drop_down.js\");\n/* harmony import */ var _drop_down_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_drop_down_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _todo_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo_list.js */ \"./src/todo_list.js\");\n/* harmony import */ var _todo_list_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_todo_list_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n// const htmlGenerator = require(\"./warmup.js\");\n// const Clock = require(\"./clock.js\");\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nlet todos = [];\nlet todoList = document.querySelector(\".todos\");\nif (localStorage.getItem(\"todos\")) {\n  todos = JSON.parse(localStorage.getItem(\"todos\"));\n  populateList();\n}\n\nlet todoForm = document.querySelector(\".add-todo-form\");\nlet submit = document.querySelector(\"#submit\");\n\n\ntodoForm.addEventListener(\"submit\", function(event){\n  event.preventDefault();\n  let input = document.getElementsByName(\"add-todo\");\n  let inputVal = input[0].value;\n  let todoObj = {};\n  todoObj[inputVal] = false;\n  todos.push(todoObj);\n  if (todos.length !== 1) {\n    addOneTodo(todoObj);\n  }else{\n    populateList();\n  }\n  this.reset();\n\n});\n\nfunction populateList() {\n  todos.forEach(ele => {\n    let label = document.createElement(\"label\");\n    label.innerHTML = (Object.keys(ele)[0]);\n    let li = document.createElement(\"li\");\n    let input = document.createElement(\"input\");\n    input.setAttribute(\"type\", \"radio\");\n    li.appendChild(input);\n    label.appendChild(li);\n    todoList.appendChild(label);\n  });\n  let json = JSON.stringify(todos);\n  localStorage.setItem(\"todos\", json);\n}\n\nfunction addOneTodo(latestTodo) {\n    let label = document.createElement(\"label\");\n    label.innerHTML = (Object.keys(latestTodo)[0]);\n    let li = document.createElement(\"li\");\n    let input = document.createElement(\"input\");\n    input.setAttribute(\"type\", \"radio\");\n    li.appendChild(input);\n    label.appendChild(li);\n    todoList.appendChild(label);\n    let json = JSON.stringify(todos);\n    localStorage.setItem(\"todos\", json);\n}\n\nlet checkBoxes = document.querySelector(\".todos\");\n\ncheckBoxes.addEventListener(\"click\", function(event){\n  event.target.setAttribute('data-checked','true');\n  let json = JSON.stringify(todos);\n  localStorage.setItem(\"todos\", json);\n});\n\n\n//# sourceURL=webpack:///./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nconst partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n  let tag = document.createElement(\"p\");\n  let text = document.createTextNode(string);\n  tag.appendChild(text);\n  if (htmlElement.hasChildNodes()){\n    htmlElement.removeChild(htmlElement.firstChild);\n  }\n  htmlElement.appendChild(tag);\n};\n\n// htmlGenerator('Party Time.', partyHeader);\n\nmodule.exports = htmlGenerator;\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ });