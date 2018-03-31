(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("prop-types")) : factory(root["react"], root["prop-types"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_16__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _githubCalendar = __webpack_require__(3);

var _githubCalendar2 = _interopRequireDefault(_githubCalendar);

var _propTypes = __webpack_require__(16);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactGithubCalendar = function (_Component) {
  _inherits(ReactGithubCalendar, _Component);

  function ReactGithubCalendar() {
    _classCallCheck(this, ReactGithubCalendar);

    return _possibleConstructorReturn(this, (ReactGithubCalendar.__proto__ || Object.getPrototypeOf(ReactGithubCalendar)).apply(this, arguments));
  }

  _createClass(ReactGithubCalendar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _githubCalendar2.default)(this.refs.container, this.props.name);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', _extends({
        className: 'calendar' + (this.props.className ? ' ' + this.props.className : '')
      }, this.props, {
        ref: 'container'
      }));
    }
  }]);

  return ReactGithubCalendar;
}(_react.Component);

ReactGithubCalendar.propTypes = {
  name: _propTypes2.default.string.isRequired
};
exports.default = ReactGithubCalendar;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parse = __webpack_require__(4),
    $ = __webpack_require__(6),
    addSubtractDate = __webpack_require__(9),
    formatoid = __webpack_require__(10);

var DATE_FORMAT1 = "MMM D, YYYY",
    DATE_FORMAT2 = "MMMM D";

/**
 * GitHubCalendar
 * Brings the contributions calendar from GitHub (provided username) into your page.
 *
 * @name GitHubCalendar
 * @function
 * @param {String|HTMLElement} container The calendar container (query selector or the element itself).
 * @param {String} username The GitHub username.
 * @param {Object} options An object containing the following fields:
 *
 *  - `summary_text` (String): The text that appears under the calendar (defaults to: `"Summary of
 *    pull requests, issues opened, and commits made by <username>"`).
 *  - `proxy` (Function): A function that receives as argument an url (string) and should return the proxied url.
 *    The default is using [@izuzak](https://github.com/izuzak)'s [`urlreq`](https://github.com/izuzak/urlreq).
 *  - `global_stats` (Boolean): If `false`, the global stats (total, longest and current streaks) will not be calculated and displayed. By default this is enabled.
 *  - `responsive` (Boolean): If `true`, the graph is changed to scale with the container. Custom CSS should be applied to the element to scale it appropriately. By default this is disabled.
 *
 * @return {Promise} A promise returned by the `fetch()` call.
 */
module.exports = function GitHubCalendar(container, username, options) {

    container = $(container);

    options = options || {};
    options.summary_text = options.summary_text || "Summary of pull requests, issues opened, and commits made by <a href=\"https://github.com/" + username + "\" target=\"blank\">@" + username + "</a>";

    if (options.global_stats === false) {
        container.style.minHeight = "175px";
    }

    // We need a proxy for CORS
    // Thanks, @izuzak (https://github.com/izuzak/urlreq)
    options.proxy = options.proxy || function (url) {
        return "https://urlreq.appspot.com/req?method=GET&url=" + url;
    };

    var fetchCalendar = function fetchCalendar() {
        return fetch(options.proxy("https://github.com/" + username)).then(function (response) {
            return response.text();
        }).then(function (body) {
            var div = document.createElement("div");
            div.innerHTML = body;
            var cal = div.querySelector(".js-contribution-graph");
            cal.querySelector(".float-left.text-gray").innerHTML = options.summary_text;

            // If 'include-fragment' with spinner img loads instead of the svg, fetchCalendar again
            if (cal.querySelector("include-fragment")) {
                setTimeout(fetchCalendar, 500);
            } else {
                // If options includes responsive, SVG element has to be manipulated to be made responsive
                if (options.responsive === true) {
                    var svg = cal.querySelector("svg.js-calendar-graph-svg");
                    // Get the width/height properties and use them to create the viewBox
                    var width = svg.getAttribute("width");
                    var height = svg.getAttribute("height");
                    // Remove height property entirely
                    svg.removeAttribute("height");
                    // Width property should be set to 100% to fill entire container
                    svg.setAttribute("width", "100%");
                    // Add a viewBox property based on the former width/height
                    svg.setAttribute("viewBox", "0 0 " + width + " " + height);
                }

                if (options.global_stats !== false) {
                    var parsed = parse($("svg", cal).outerHTML),
                        currentStreakInfo = parsed.current_streak ? formatoid(parsed.current_streak_range[0], DATE_FORMAT2) + " \u2013 " + formatoid(parsed.current_streak_range[1], DATE_FORMAT2) : parsed.last_contributed ? "Last contributed in " + formatoid(parsed.last_contributed, DATE_FORMAT2) + "." : "Rock - Hard Place",
                        longestStreakInfo = parsed.longest_streak ? formatoid(parsed.longest_streak_range[0], DATE_FORMAT2) + " \u2013 " + formatoid(parsed.longest_streak_range[1], DATE_FORMAT2) : parsed.last_contributed ? "Last contributed in " + formatoid(parsed.last_contributed, DATE_FORMAT2) + "." : "Rock - Hard Place",
                        firstCol = $("<div>", {
                        "class": "contrib-column contrib-column-first table-column",
                        html: "<span class=\"text-muted\">Contributions in the last year</span>\n                               <span class=\"contrib-number\">" + parsed.last_year + " total</span>\n                               <span class=\"text-muted\">" + formatoid(addSubtractDate.subtract(new Date(), 1, "year"), DATE_FORMAT1) + " \u2013 " + formatoid(new Date(), DATE_FORMAT1) + "</span>"
                    }),
                        secondCol = $("<div>", {
                        "class": "contrib-column table-column",
                        html: "<span class=\"text-muted\">Longest streak</span>\n                               <span class=\"contrib-number\">" + parsed.longest_streak + " days</span>\n                               <span class=\"text-muted\">" + longestStreakInfo + "</span>"
                    }),
                        thirdCol = $("<div>", {
                        "class": "contrib-column table-column",
                        html: "<span class=\"text-muted\">Current streak</span>\n                               <span class=\"contrib-number\">" + parsed.current_streak + " days</span>\n                               <span class=\"text-muted\">" + currentStreakInfo + "</span>"
                    });

                    cal.appendChild(firstCol);
                    cal.appendChild(secondCol);
                    cal.appendChild(thirdCol);
                }

                container.innerHTML = cal.innerHTML;
            }
        }).catch(function (e) {
            return console.error(e);
        });
    };

    return fetchCalendar();
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var githubCalendarLegend = __webpack_require__(5);

/**
 * parseGitHubCalendarSvg
 * Parses the SVG input (as string).
 *
 * @name parseGitHubCalendarSvg
 * @function
 * @param {String} input The SVG code of the contributions calendar.
 * @return {Object} An object containing:
 *
 *  - `last_year` (Number): The total contributions in the last year.
 *  - `longest_streak` (Number): The longest streak.
 *  - `longest_streak_range` (Array): An array of two date objects representing the date range.
 *  - `current_streak` (Number): The current streak.
 *  - `current_streak_range` (Array): An array of two date objects representing the date range.
 *  - `days` (Array): An array of day objects:
 *       - `fill` (String): The hex color.
 *       - `date` (Date): The day date.
 *       - `count` (Number): The number of commits.
 *       - `level` (Number): A number between 0 and 4 (inclusive) representing the contribution level (more commits, higher value).
 *  - `weeks` (Array): The day objects grouped by weeks (arrays).
 *  - `last_contributed` (Date): The last contribution date.
 */
module.exports = function parseGitHubCalendarSvg(input) {

    var data = {
        last_year: 0,
        longest_streak: -1,
        longest_streak_range: [],
        current_streak: 0,
        current_streak_range: [],
        weeks: [],
        days: [],
        last_contributed: null
    },
        lastWeek = [],
        updateLongestStreak = function updateLongestStreak() {
        if (data.current_streak > data.longest_streak) {
            data.longest_streak = data.current_streak;
            data.longest_streak_range[0] = data.current_streak_range[0];
            data.longest_streak_range[1] = data.current_streak_range[1];
        }
    };

    input.split("\n").slice(2).map(function (c) {
        return c.trim();
    }).forEach(function (c) {
        if (c.startsWith("<g transform")) {
            return lastWeek.length && data.weeks.push(lastWeek) && (lastWeek = []);
        }

        var fill = c.match(/fill="(#[a-z0-9]+)"/),
            date = c.match(/data-date="([0-9\-]+)"/),
            count = c.match(/data-count="([0-9]+)"/),
            level = null;

        fill = fill && fill[1];
        date = date && date[1];
        count = count && +count[1];

        if (!fill) {
            return;
        }

        var obj = {
            fill: fill,
            date: new Date(date),
            count: count,
            level: githubCalendarLegend.indexOf(fill)
        };

        if (data.current_streak === 0) {
            data.current_streak_range[0] = obj.date;
        }

        if (obj.count) {
            ++data.current_streak;
            data.last_year += obj.count;
            data.last_contributed = obj.date;
            data.current_streak_range[1] = obj.date;
        } else {
            updateLongestStreak();
            data.current_streak = 0;
        }

        lastWeek.push(obj);
        data.days.push(obj);
    });

    updateLongestStreak();

    return data;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = ["#eee", "#d6e685", "#8cc665", "#44a340", "#1e6823"];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var iterateObj = __webpack_require__(7),
    sliced = __webpack_require__(8);

/**
 * elly
 * Selects the DOM elements based on the provided selector. If there is no
 * commonjs/module environment, the `$` global variable will be created.
 *
 * @name elly
 * @function
 * @param {String|HTMLElement} input The element selector (e.g.
 * `'#my-id > .my-class'`), the element tag you want to create
 * (e.g. `'<ul>'`) or the HTML element (will be returned by the function).
 * @param {Object|HTMLElement} contextOrAttributes
 * @returns {HTMLElement} The HTMLElement that was provided or selected.
 */
function $(input, contextOrAttributes) {
    if (typeof input === "string") {
        if (input.charAt(0) === "<") {
            input = document.createElement(input.slice(1, -1));
            iterateObj(contextOrAttributes || {}, function (value, name) {

                switch (name) {
                    case "text":
                        input.textContent = value;
                        return;
                    case "html":
                        input.innerHTML = value;
                        return;
                }

                input.setAttribute(name, value);
            });
            return input;
        } else {
            contextOrAttributes = contextOrAttributes || document;
            return contextOrAttributes.querySelector(input);
        }
    }
    return input;
};

/**
 * elly.$$
 * Selects multiple elements. Note that if there is no commonjs/module environment, you will access this function using `$.$$`.
 *
 * @name elly.$$
 * @function
 * @param {String} selector The DOM query selector.
 * @param {HTMLElement} context The element context/container. Defaults to `document`.
 * @returns {Array} The array of elements.
 */
$.$$ = function (selector, context) {
    if (typeof selector === "string") {
        context = context || document;
        return sliced(context.querySelectorAll(selector));
    }
    return [selector];
};

module.exports = $;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

/**
 * iterateObject
 * Iterates an object. Note the object field order may differ.
 *
 * @name iterateObject
 * @function
 * @param {Object} obj The input object.
 * @param {Function} fn A function that will be called with the current value, field name and provided object.
 * @return {Function} The `iterateObject` function.
 */
function iterateObject(obj, fn) {
    var i = 0
      , keys = []
      ;

    if (Array.isArray(obj)) {
        for (; i < obj.length; ++i) {
            if (fn(obj[i], i, obj) === false) {
                break;
            }
        }
    } else if (typeof obj === "object" && obj !== null) {
        keys = Object.keys(obj);
        for (; i < keys.length; ++i) {
            if (fn(obj[keys[i]], keys[i], obj) === false) {
                break;
            }
        }
    }
}

module.exports = iterateObject;


/***/ }),
/* 8 */
/***/ (function(module, exports) {


/**
 * An Array.prototype.slice.call(arguments) alternative
 *
 * @param {Object} args something with a length
 * @param {Number} slice
 * @param {Number} sliceEnd
 * @api public
 */

module.exports = function (args, slice, sliceEnd) {
  var ret = [];
  var len = args.length;

  if (0 === len) return ret;

  var start = slice < 0
    ? Math.max(0, slice + len)
    : slice || 0;

  if (sliceEnd !== undefined) {
    len = sliceEnd < 0
      ? sliceEnd + len
      : sliceEnd
  }

  while (len-- > start) {
    ret[len - start] = args[len];
  }

  return ret;
}



/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function gen(add) {
    return function _(d, count, what) {
        count = add * count;
        switch (what) {
            case "years":
            case "year":
                d.setFullYear(d.getFullYear() + count);
                break;
            case "months":
            case "month":
                d.setMonth(d.getMonth() + count);
                break;
            case "weeks":
            case "week":
                return _(d, count * 7, "days");
                break;
            case "days":
            case "day":
                d.setDate(d.getDate() + count);
                break;
            case "hours":
            case "hour":
                d.setHours(d.getHours() + count);
                break;
            case "minutes":
            case "minute":
                d.setMinutes(d.getMinutes() + count);
                break;
            case "seconds":
            case "second":
                d.setSeconds(d.getSeconds() + count);
                break;
            case "milliseconds":
            case "millisecond":
                d.setMilliseconds(d.getMilliseconds() + count);
                break;
            default:
                throw new Error("Invalid range: " + what);
        }
        return d;
    };
}

module.exports = {
    add: gen(1),
    subtract: gen(-1)
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var months = __webpack_require__(11),
    days = __webpack_require__(12),
    fillo = __webpack_require__(13),
    ParseIt = __webpack_require__(14).Parser;

var rules = {
    // Years
    /// 2015
    YYYY: function YYYY(i, utc) {
        if (utc) {
            return i.getUTCFullYear();
        }
        return i.getFullYear();
    }

    // 15
    ,
    YY: function YY(i, utc) {
        return rules.YYYY(i, utc) % 100;
    }

    // Months
    // January
    ,
    MMMM: function MMMM(i, utc) {
        if (utc) {
            return months[i.getUTCMonth()];
        }
        return months[i.getMonth()];
    }

    // Jan
    ,
    MMM: function MMM(i, utc) {
        if (utc) {
            return months.abbr[i.getUTCMonth()];
        }
        return months.abbr[i.getMonth()];
    }

    // 01
    ,
    MM: function MM(i, utc) {
        if (utc) {
            return fillo(i.getUTCMonth() + 1);
        }
        return fillo(i.getMonth() + 1);
    }

    // 1
    ,
    M: function M(i, utc) {
        if (utc) {
            return i.getUTCMonth() + 1;
        }
        return i.getMonth() + 1;
    }

    // Days
    // Sunday
    ,
    dddd: function dddd(i, utc) {
        return days[rules.d(i, utc)];
    }

    // Sun
    ,
    ddd: function ddd(i, utc) {
        return days.abbr[rules.d(i, utc)];
    }

    // Su
    ,
    dd: function dd(i, utc) {
        return days.short[rules.d(i, utc)];
    }

    // 0
    ,
    d: function d(i, utc) {
        if (utc) {
            return i.getUTCDay();
        }
        return i.getDay();
    }

    // Dates
    // 06  Day in month
    ,
    DD: function DD(i, utc) {
        return fillo(rules.D(i, utc));
    }

    // 6   Day in month
    ,
    D: function D(i, utc) {
        if (utc) {
            return i.getUTCDate();
        }
        return i.getDate();
    }

    // AM/PM
    // AM/PM
    ,
    A: function A(i, utc) {
        return rules.a(i, utc).toUpperCase();
    }

    // am/pm
    ,
    a: function a(i, utc) {
        return rules.H(i, utc) >= 12 ? "pm" : "am";
    }

    // Hours
    // 08 Hour
    ,
    hh: function hh(i, utc) {
        return fillo(rules.h(i, utc));
    }

    // 8 Hour
    ,
    h: function h(i, utc) {
        return rules.H(i, utc) % 12 || 12;
    }

    // (alias)
    ,
    HH: function HH(i, utc) {
        return fillo(rules.H(i, utc));
    }

    // (alias)
    ,
    H: function H(i, utc) {
        if (utc) {
            return i.getUTCHours();
        }
        return i.getHours();
    }

    // Minutes
    // 09 Minute
    ,
    mm: function mm(i, utc) {
        return fillo(rules.m(i, utc));
    }

    // 9  Minute
    ,
    m: function m(i, utc) {
        if (utc) {
            return i.getUTCMinutes();
        }
        return i.getMinutes();
    }

    // Seconds
    // 09 Seconds
    ,
    ss: function ss(i, utc) {
        return fillo(rules.s(i, utc));
    }

    // 9  Seconds
    ,
    s: function s(i, utc) {
        if (utc) {
            return i.getUTCSeconds();
        }
        return i.getSeconds();
    }

    // Fractional seconds
    // 0 1 ... 8 9
    ,
    S: function S(i, utc) {
        return Math.round(rules.s(i, utc) / 60 * 10);
    },
    SS: function SS(i, utc) {
        return fillo(rules.s(i, utc) / 60 * 100);
    },
    SSS: function SSS(i, utc) {
        return fillo(rules.s(i, utc) / 60 * 1000, 3);
    }

    // Timezones
    ,
    Z: function Z(i) {
        var offset = -i.getTimezoneOffset();
        return (offset >= 0 ? "+" : "-") + fillo(parseInt(offset / 60)) + ":" + fillo(offset % 60);
    },
    ZZ: function ZZ(i) {
        var offset = -i.getTimezoneOffset();
        return (offset >= 0 ? "+" : "-") + fillo(parseInt(offset / 60)) + fillo(offset % 60);
    }
};

var parser = new ParseIt(rules);

/**
 * formatoid
 * Formats the date into a given format.
 *
 * Usable format fields:
 *
 *  - **Years**
 *      - `YYYY` (e.g. `"2015"`)
 *      - `YY` (e.g. `"15"`)
 *  - **Months**
 *      - `MMMM` (e.g. `"January"`)
 *      - `MMM` (e.g. `"Jan"`)
 *      - `MM` (e.g. `"01"`)
 *      - `M` (e.g. `"1"`)
 *  - **Days**
 *      - `dddd` (e.g. `"Sunday"`)
 *      - `ddd` (e.g. `"Sun"`)
 *      - `dd` (e.g. `"Su"`)
 *      - `d` (e.g. `"Su"`)
 *  - **Dates**
 *      - `DD` (e.g. `"07"`)
 *      - `D` (e.g. `"7"`)
 *  - **AM/PM**
 *      - `A` (e.g. `"AM"`)
 *      - `a` (e.g. `"pm"`)
 *  - **Hours**
 *      - `hh` (e.g. `"07"`)–12 hour format
 *      - `h` (e.g. `"7"`)
 *      - `HH` (e.g. `"07"`)–24 hour format
 *      - `H` (e.g. `"7"`)
 *  - **Minutes**
 *      - `mm` (e.g. `"07"`)
 *      - `m` (e.g. `"7"`)
 *  - **Seconds**
 *      - `ss` (e.g. `"07"`)
 *      - `s` (e.g. `"7"`)
 *  - **Fractional seconds**
 *      - `S` (e.g. `0 1 2 3 ... 9`)
 *      - `SS` (e.g. `00 01 02 ... 98 99`)
 *      - `SS` (e.g. `000 001 002 ... 998 999`)
 *  - **Timezones**
 *      - `Z` (e.g. `-07:00 -06:00 ... +06:00 +07:00`)
 *      - `ZZ` (e.g. `-0700 -0600 ... +0600 +0700`)
 *
 * @name formatoid
 * @function
 * @param {Date} i The date object.
 * @param {String} f The date format.
 * @return {String} The formatted date (as string).
 */
module.exports = function formatoid(i, f) {
    return parser.run(f, [i, i._useUTC]);
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

/*!
 * months <https://github.com/jonschlinkert/months>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

module.exports = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

module.exports.abbr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


/***/ }),
/* 12 */
/***/ (function(module, exports) {

/*!
 * days <https://github.com/jonschlinkert/days>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

// English
module.exports.en = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
module.exports.en.abbr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
module.exports.en.short = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

// French translation
module.exports.fr = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
module.exports.fr.abbr = ['dim', 'lun', 'mar', 'mer', 'jeu', 'ven', 'sam'];
module.exports.fr.short = ['di', 'lu', 'ma', 'me', 'je', 've', 'sa'];

// In order not to break compatibility
module.exports = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
module.exports.abbr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
module.exports.short = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * fillo
 * Fill additional characters at the beginning of the string.
 *
 * @name fillo
 * @function
 * @param {String|Number} what The input snippet (number, string or anything that can be stringified).
 * @param {Number} size The width of the final string (default: `2`).
 * @param {String} ch The character to repeat (default: `"0"`).
 * @return {String} The input value with filled characters.
 */
module.exports = function fillo(what, size, ch) {
  size = size || 2;
  ch = ch || "0";
  what = what.toString();
  var howMany = size - what.length;
  return (howMany <= 0 ? "" : ch.repeat(howMany)) + what;
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var regexEscape = __webpack_require__(15);

var ParseIt = function () {
    /**
     * ParseIt
     * The `ParseIt` class. It can be used to use the same data object but with different formats/arguments.
     *
     * @name ParseIt
     * @function
     * @param {Object} obj An object containing the fields to replace.
     */
    function ParseIt(obj) {
        _classCallCheck(this, ParseIt);

        this.obj = obj || {};
        this.re = new RegExp("^(" + Object.keys(obj).map(regexEscape).join("|") + ")");
    }

    /**
     * run
     * Replaces the fields in the format string with data coming from the data object.
     *
     *
     * @name parseIt
     * @function
     * @param {String} format The format input.
     * @param {Array} args An array of arguments to be passed to the replace function (stored in the `obj` object).
     * @return {String} The result as string.
     */


    _createClass(ParseIt, [{
        key: "run",
        value: function run(format, args) {
            var result = "";
            args = args || [];
            do {
                var arr = format.match(this.re),
                    field = arr && arr[1],
                    c = field || format.charAt(0);

                if (field) {
                    var value = this.obj[field];
                    if (typeof value === "function") {
                        value = value.apply(this, args);
                    }
                    result += value;
                } else {
                    result += c;
                }
                format = format.substring(c.length);
            } while (format);
            return result;
        }
    }]);

    return ParseIt;
}();

/**
 * parseIt
 * A wrapper around the `ParseIt` class. The `ParseIt` constructor is accessible using `parseIt.Parser`.
 *
 * @name parseIt
 * @function
 * @param {String} format The format input.
 * @param {Object} obj An object containing the fields to replace.
 * @param {Array} args An array of arguments to be passed to the replace function (stored in the `obj` object).
 * @return {String} The result as string.
 */


function parseIt(format, obj, args) {
    return new ParseIt(obj).run(format, args);
}

parseIt.Parser = ParseIt;

module.exports = parseIt;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * RegexEscape
 * Escapes a string for using it in a regular expression.
 *
 * @name RegexEscape
 * @function
 * @param {String} input The string that must be escaped.
 * @return {String} The escaped string.
 */
function RegexEscape(input) {
  return input.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

/**
 * proto
 * Adds the `RegexEscape` function to `RegExp` class.
 *
 * @name proto
 * @function
 * @return {Function} The `RegexEscape` function.
 */
RegexEscape.proto = function () {
  RegExp.escape = RegexEscape;
  return RegexEscape;
};

module.exports = RegexEscape;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(18);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(20)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports
exports.i(__webpack_require__(19), "");

// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, ".calendar {\n    width: 750px;\n    font-family: Helvetica, arial;\n    border: 1px solid #DDDDDD;\n    border-radius: 3px;\n    min-height: 243px;\n    text-align: center;\n    margin: 0 auto;\n}\n\n.calendar-graph text.wday,\n.calendar-graph text.month {\n    font-size: 10px;\n    fill: #aaa;\n}\n\n.contrib-legend {\n    text-align: right;\n    padding: 0 14px 10px 0;\n    display: inline-block;\n    float: right;\n}\n\n.contrib-legend .legend {\n    display: inline-block;\n    list-style: none;\n    margin: 0 5px;\n    position: relative;\n    bottom: -1px;\n    padding: 0;\n}\n\n.contrib-legend .legend li {\n    display: inline-block;\n    width: 10px;\n    height: 10px;\n}\n\n.text-small {\n    font-size: 12px;\n    color: #767676;\n}\n\n.calendar-graph {\n    padding: 5px 0 0;\n    height: 126px;\n    text-align: center;\n}\n\n.contrib-column {\n    padding: 15px 0;\n    text-align: center;\n    border-left: 1px solid #ddd;\n    border-top: 1px solid #ddd;\n    font-size: 11px;\n}\n\n.contrib-column-first {\n    border-left: 0;\n}\n\n.table-column {\n    display: table-cell;\n    width: 1%;\n    padding-right: 10px;\n    padding-left: 10px;\n    vertical-align: top;\n}\n\n.contrib-number {\n    font-weight: 300;\n    line-height: 1.3em;\n    font-size: 24px;\n    display: block;\n    color: #333;\n}\n\n.calendar img.spinner {\n    width: 70px;\n    margin-top: 50px;\n    min-height: 70px;\n}\n\n.monospace {\n    text-align: center;\n    color: #000;\n    font-family: monospace;\n}\n\n.monospace a {\n    color: #1D75AB;\n    text-decoration: none;\n}\n\n.contrib-footer {\n    font-size: 11px;\n    padding: 0 10px 12px;\n    text-align: left;\n    width: 100%;\n    box-sizing: border-box;\n    height: 26px;\n}\n\n.left.text-muted {\n    float: left;\n    margin-left: 9px;\n    color: #767676;\n}\n.left.text-muted a {\n    color: #4078c0;\n    text-decoration: none;\n}\n.left.text-muted a:hover,\n.monospace a:hover {\n    text-decoration: underline;\n}\n\nh2.f4.text-normal.mb-3 {\n    display: none;\n}\n\n.float-left.text-gray {\n    float: left;\n}", ""]);

// exports


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(21);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 21 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);
});