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

/***/ "./src/Apple.js":
/*!**********************!*\
  !*** ./src/Apple.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Apple { \r\n\r\n    constructor(position){\r\n        this.position = position\r\n    }\r\n\r\n    SetNewPosition(widthInBlocks,heightInBlocks) {\r\n        var newX = Math.round(Math.random() * (widthInBlocks - 1))\r\n        var newY = Math.round(Math.random() * (heightInBlocks - 1))\r\n        this.position = [newX, newY]\r\n    }\r\n    \r\n    isOnSnake(snakeToCheck) {\r\n        var isOnSnake = false \r\n        for (var i = 0; i < snakeToCheck.body.length; i++){\r\n            if (this.position[0] === snakeToCheck.body[i][0] && this.position[1] === snakeToCheck.body[i][1]) {\r\n                isOnSnake = true \r\n            }\r\n        }\r\n        return isOnSnake\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Apple); \n\n//# sourceURL=webpack:///./src/Apple.js?");

/***/ }),

/***/ "./src/Drawing.js":
/*!************************!*\
  !*** ./src/Drawing.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nclass Drawing {\r\n\r\n    static drawSnake(ctx , blockSize , snake){\r\n         ctx.save()\r\n         ctx.fillStyle = \"orange\";\r\n         for (var i = 0; i < snake.body.length; i++) {\r\n             var x = snake.body[i][0] * blockSize\r\n             var y = snake.body[i][1] * blockSize\r\n             ctx.fillRect(x , y , blockSize , blockSize)\r\n         }\r\n         ctx.restore()\r\n     }\r\n \r\n     static drawApple(ctx , blockSize, apple){\r\n         ctx.save()\r\n         ctx.fillStyle = \"#33cc23\"\r\n         ctx.beginPath()\r\n         var radius = blockSize / 2\r\n         var x = apple.position[0] * blockSize + radius\r\n         var y = apple.position[1] * blockSize + radius\r\n         ctx.arc(x, y, radius, 0, Math.PI * 2, true)\r\n         ctx.fill()\r\n         ctx.restore()\r\n     }\r\n \r\n     static drawScore(ctx , canvasWidth , canvasHeight , score){\r\n         ctx.save()\r\n         ctx.font = \"bold 200px sans-serif\"\r\n         ctx.fillStyle = \"gray\"\r\n         ctx.textAlign = \"center\"\r\n         ctx.textBaseline = \"middle\"\r\n         var centreX = canvasWidth / 2\r\n         var centreY = canvasHeight / 2\r\n         ctx.fillText(score, centreX, centreY)\r\n         ctx.restore()\r\n     }\r\n \r\n     static gameOver(ctx , canvasWidth , canvasHeight) {\r\n         ctx.save()\r\n         ctx.font = \"bold 70px sans-serif\"\r\n         ctx.fillStyle = \"#000\"\r\n         ctx.textAlign = \"center\"\r\n         ctx.textBaseline = \"middle\"\r\n         ctx.strokeStyle = \"white\"\r\n         ctx.lineWidth = 5\r\n         var centreX = canvasWidth / 2\r\n         var centreY = canvasHeight / 2\r\n         ctx.strokeText('Game Over', centreX, centreY - 180)\r\n         ctx.fillText('Game Over', centreX, centreY - 180)\r\n         ctx.font = \"bold 30px sans-serif\"\r\n         ctx.strokeText('Appuyer sur la touche espace pour rejouer', centreX, centreY - 120)\r\n         ctx.fillText('Appuyer sur la touche espace pour rejouer',centreX, centreY - 120)\r\n         ctx.restore()\r\n     }\r\n \r\n }\r\n \r\n /* harmony default export */ __webpack_exports__[\"default\"] = (Drawing);\n\n//# sourceURL=webpack:///./src/Drawing.js?");

/***/ }),

/***/ "./src/Snake.js":
/*!**********************!*\
  !*** ./src/Snake.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Snake {\r\n    \r\n    constructor(body, direction){\r\n        this.body = body;\r\n        this.direction = direction;\r\n        this.ateApple = false\r\n    }\r\n\r\n    advance(){\r\n        var nextPosition = this.body[0].slice()\r\n\r\n        switch (this.direction) {\r\n            case \"left\":\r\n                nextPosition[0] -= 1;\r\n                break;\r\n            case \"right\":\r\n                nextPosition[0] += 1;\r\n                break;\r\n            case \"down\":\r\n                nextPosition[1] += 1;\r\n                break;\r\n            case \"up\":\r\n                nextPosition[1] -= 1;\r\n                break;\r\n            default:\r\n                throw(\"Direction non valide\")\r\n        }\r\n        this.body.unshift(nextPosition)\r\n        if (!this.ateApple) {\r\n            this.body.pop()\r\n        } else {\r\n            this.ateApple = false \r\n        }\r\n        // console.log(nextPosition)\r\n        \r\n    };\r\n\r\n    setDirection(newDirection){\r\n        var allowedDirection \r\n        switch (this.direction) {\r\n            case \"left\":\r\n            case \"right\":\r\n                allowedDirection = [\"up\", \"down\"]\r\n                break;\r\n            case \"down\":\r\n            case \"up\":\r\n                allowedDirection = [\"left\", \"right\"]\r\n                break;\r\n             default:\r\n               throw(\"Direction non valide\")\r\n        }\r\n        if (allowedDirection.indexOf(newDirection) > -1) {\r\n            this.direction = newDirection\r\n        }\r\n    }\r\n\r\n    isEatingApple(appleToEat){\r\n        var head = this.body[0]\r\n        if (head[0] === appleToEat.position[0] && head[1] === appleToEat.position[1]) {\r\n            return true \r\n        } else {\r\n            return false \r\n        }\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Snake); \n\n//# sourceURL=webpack:///./src/Snake.js?");

/***/ }),

/***/ "./src/SnakeGame.js":
/*!**************************!*\
  !*** ./src/SnakeGame.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Drawing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Drawing */ \"./src/Drawing.js\");\n\r\n\r\nclass SnakeGame {\r\n    \r\n    constructor(canvasWidth, canvasHeight, blockSize, delay){\r\n        this.canvas = document.createElement('canvas');\r\n        this.canvas.width = canvasWidth;\r\n        this.canvas.height = canvasHeight;\r\n        this.canvas.style.border = \"30px solid gray\";\r\n        this.canvas.style.margin = \"50px auto\";\r\n        this.canvas.style.display = \"block\";\r\n        this.canvas.style.backgroundColor = \"#ddd\";\r\n        document.body.appendChild(this.canvas);\r\n        this.ctx = this.canvas.getContext('2d')\r\n        this.blockSize = blockSize\r\n        this.delay = delay\r\n        this.widthInBlocks = canvasWidth / blockSize\r\n        this.heightInBlocks = canvasHeight / blockSize\r\n        this.score \r\n        this.timeout\r\n    }\r\n    \r\n\r\n    init(snake, apple) {\r\n        this.snake = snake\r\n        this.apple = apple\r\n        this.score = 0\r\n        clearTimeout(this.timeout)\r\n        this.refreshCanvas();\r\n    }\r\n\r\n    refreshCanvas() {\r\n        this.snake.advance() \r\n        if (this.checkCollision()) {\r\n            _Drawing__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameOver(this.ctx, this.canvas.width, this.canvas.height)\r\n        } else {\r\n            if (this.snake.isEatingApple(this.apple)){\r\n                this.score++\r\n                this.snake.ateApple = true \r\n                do {\r\n                    this.apple.SetNewPosition(this.widthInBlocks, this.heightInBlocks)\r\n                }while(this.apple.isOnSnake(this.snake))\r\n            }\r\n            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\r\n            _Drawing__WEBPACK_IMPORTED_MODULE_0__[\"default\"].drawScore(this.ctx, this.canvas.width, this.canvas.height, this.score)\r\n            _Drawing__WEBPACK_IMPORTED_MODULE_0__[\"default\"].drawSnake(this.ctx, this.blockSize, this.snake)\r\n            _Drawing__WEBPACK_IMPORTED_MODULE_0__[\"default\"].drawApple(this.ctx, this.blockSize , this.apple)\r\n            this.timeout = setTimeout(this.refreshCanvas.bind(this), this.delay)\r\n        }\r\n    }\r\n\r\n    checkCollision() {\r\n        var wallCollision = false \r\n        var snakeCollision = false \r\n        var head = this.snake.body[0] \r\n        var rest = this.snake.body.slice(1)\r\n        var snakeX = head[0]\r\n        var snakeY = head[1]\r\n        var minX = 0\r\n        var minY = 0\r\n        var maxX = this.widthInBlocks - 1\r\n        var maxY = this.heightInBlocks - 1\r\n        var isNotBetweenHorizontalWalls = snakeX < minX || snakeX > maxX\r\n        var isNotBetweenVerticalWalls = snakeY < minY || snakeY > maxY\r\n        \r\n        if (isNotBetweenHorizontalWalls || isNotBetweenVerticalWalls) {\r\n            wallCollision = true\r\n        }\r\n\r\n        for (var i = 0; i < rest.length; i++){\r\n            if (snakeX === rest[i][0] && snakeY === rest[i][1]) {\r\n                snakeCollision = true\r\n            }\r\n        }\r\n        return wallCollision || snakeCollision\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (SnakeGame);\n\n//# sourceURL=webpack:///./src/SnakeGame.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SnakeGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SnakeGame */ \"./src/SnakeGame.js\");\n/* harmony import */ var _Snake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Snake */ \"./src/Snake.js\");\n/* harmony import */ var _Apple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Apple */ \"./src/Apple.js\");\n\r\n\r\n\r\n// import Drawing from './Drawing'\r\n\r\n\r\n\r\nvar snake \r\nvar apple \r\nvar snakeGame \r\n\r\n\r\n    snakeGame = new _SnakeGame__WEBPACK_IMPORTED_MODULE_0__[\"default\"](900, 600, 30, 100)\r\n    snake = new _Snake__WEBPACK_IMPORTED_MODULE_1__[\"default\"]([[6, 4], [5, 4], [4, 4],[3,4],[2,4]], \"right\");\r\n    apple = new _Apple__WEBPACK_IMPORTED_MODULE_2__[\"default\"]([10, 10])\r\n    snakeGame.init(snake,apple)\r\n\r\n\r\ndocument.onkeydown = function handleKeyDown(e) {\r\n    var key = e.keyCode\r\n    var newDirection \r\n    \r\n    switch (key) {\r\n        case 37: //left\r\n            newDirection = \"left\"\r\n            break; \r\n        case 38: //up\r\n            newDirection = \"up\"\r\n            break;\r\n        case 39: //right\r\n            newDirection = \"right\"\r\n            break; \r\n        case 40: //down\r\n        newDirection = \"down\"\r\n            break; \r\n        case 32:\r\n            snake = new _Snake__WEBPACK_IMPORTED_MODULE_1__[\"default\"]([[6, 4], [5, 4], [4, 4],[3,4],[2,4]], \"right\");\r\n            apple = new _Apple__WEBPACK_IMPORTED_MODULE_2__[\"default\"]([10, 10])\r\n            snakeGame.init(snake,apple)\r\n            return; \r\n        default:\r\n            return;\r\n        \r\n    }\r\n    snakeGame.snake.setDirection(newDirection)\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });