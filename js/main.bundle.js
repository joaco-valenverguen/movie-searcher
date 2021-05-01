"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

var title = document.querySelector("#title");
var genre = document.querySelector("#genre");
var director = document.querySelector("#director");
var actors = document.querySelector("#actors");
var runtime = document.querySelector("#runtime");
var poster = document.querySelector("#poster");
var input = document.querySelector("#searcher");
var a = document.querySelector("#x");
var x = "avengers";
a.addEventListener("submit", function (e) {
  x = input.value;
  console.log(x);
  e.preventDefault();
  get();
  return x;
});
console.log(x);

var get = /*#__PURE__*/ (function () {
  var _ref = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
      var res, data, Poster;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              _context.next = 2;
              return fetch(
                /*"http://www.omdbapi.com/?t=avengers&apikey=b6b117d4"*/
                "http://www.omdbapi.com/?t=".concat(x, "&apikey=b6b117d4")
              );

            case 2:
              res = _context.sent;
              _context.next = 5;
              return res.json();

            case 5:
              data = _context.sent;
              title.innerHTML = data.Title;
              genre.innerHTML = data.Genre;
              director.innerHTML = data.Director;
              actors.innerHTML = data.Actors;
              runtime.innerHTML = data.Runtime;
              console.log(data);
              Poster = new Image();
              Poster.src = data.Poster;
              console.log(Poster);
              poster.src = Poster.src;

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })
  );

  return function get() {
    return _ref.apply(this, arguments);
  };
})();
