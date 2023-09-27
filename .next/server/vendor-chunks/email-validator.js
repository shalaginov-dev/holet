"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/email-validator";
exports.ids = ["vendor-chunks/email-validator"];
exports.modules = {

/***/ "(ssr)/./node_modules/email-validator/index.js":
/*!***********************************************!*\
  !*** ./node_modules/email-validator/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\n\r\nvar tester = /^[-!#$%&'*+\\/0-9=?A-Z^_a-z{|}~](\\.?[-!#$%&'*+\\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\\.?[a-zA-Z0-9])*\\.[a-zA-Z](-?[a-zA-Z0-9])+$/;\r\n// Thanks to:\r\n// http://fightingforalostcause.net/misc/2006/compare-email-regex.php\r\n// http://thedailywtf.com/Articles/Validating_Email_Addresses.aspx\r\n// http://stackoverflow.com/questions/201323/what-is-the-best-regular-expression-for-validating-email-addresses/201378#201378\r\nexports.validate = function(email)\r\n{\r\n\tif (!email)\r\n\t\treturn false;\r\n\t\t\r\n\tif(email.length>254)\r\n\t\treturn false;\r\n\r\n\tvar valid = tester.test(email);\r\n\tif(!valid)\r\n\t\treturn false;\r\n\r\n\t// Further checking of some things regex can't handle\r\n\tvar parts = email.split(\"@\");\r\n\tif(parts[0].length>64)\r\n\t\treturn false;\r\n\r\n\tvar domainParts = parts[1].split(\".\");\r\n\tif(domainParts.some(function(part) { return part.length>63; }))\r\n\t\treturn false;\r\n\r\n\treturn true;\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW1haWwtdmFsaWRhdG9yL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2I7QUFDQSx5Q0FBeUMsRUFBRSxpQ0FBaUMsRUFBRTtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHdCQUF3QjtBQUM5RDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3N1Ym1pdC1mb3JtLW5leHQvLi9ub2RlX21vZHVsZXMvZW1haWwtdmFsaWRhdG9yL2luZGV4LmpzP2Q5MzEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgdGVzdGVyID0gL15bLSEjJCUmJyorXFwvMC05PT9BLVpeX2Etent8fX5dKFxcLj9bLSEjJCUmJyorXFwvMC05PT9BLVpeX2EtemB7fH1+XSkqQFthLXpBLVowLTldKC0qXFwuP1thLXpBLVowLTldKSpcXC5bYS16QS1aXSgtP1thLXpBLVowLTldKSskLztcclxuLy8gVGhhbmtzIHRvOlxyXG4vLyBodHRwOi8vZmlnaHRpbmdmb3JhbG9zdGNhdXNlLm5ldC9taXNjLzIwMDYvY29tcGFyZS1lbWFpbC1yZWdleC5waHBcclxuLy8gaHR0cDovL3RoZWRhaWx5d3RmLmNvbS9BcnRpY2xlcy9WYWxpZGF0aW5nX0VtYWlsX0FkZHJlc3Nlcy5hc3B4XHJcbi8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjAxMzIzL3doYXQtaXMtdGhlLWJlc3QtcmVndWxhci1leHByZXNzaW9uLWZvci12YWxpZGF0aW5nLWVtYWlsLWFkZHJlc3Nlcy8yMDEzNzgjMjAxMzc4XHJcbmV4cG9ydHMudmFsaWRhdGUgPSBmdW5jdGlvbihlbWFpbClcclxue1xyXG5cdGlmICghZW1haWwpXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcclxuXHRpZihlbWFpbC5sZW5ndGg+MjU0KVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cclxuXHR2YXIgdmFsaWQgPSB0ZXN0ZXIudGVzdChlbWFpbCk7XHJcblx0aWYoIXZhbGlkKVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cclxuXHQvLyBGdXJ0aGVyIGNoZWNraW5nIG9mIHNvbWUgdGhpbmdzIHJlZ2V4IGNhbid0IGhhbmRsZVxyXG5cdHZhciBwYXJ0cyA9IGVtYWlsLnNwbGl0KFwiQFwiKTtcclxuXHRpZihwYXJ0c1swXS5sZW5ndGg+NjQpXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblxyXG5cdHZhciBkb21haW5QYXJ0cyA9IHBhcnRzWzFdLnNwbGl0KFwiLlwiKTtcclxuXHRpZihkb21haW5QYXJ0cy5zb21lKGZ1bmN0aW9uKHBhcnQpIHsgcmV0dXJuIHBhcnQubGVuZ3RoPjYzOyB9KSlcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHJcblx0cmV0dXJuIHRydWU7XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/email-validator/index.js\n");

/***/ })

};
;