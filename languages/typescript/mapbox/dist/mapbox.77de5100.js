// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/lodash-es/_freeGlobal.js":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
var _default = freeGlobal;
exports.default = _default;
},{}],"node_modules/lodash-es/_root.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _freeGlobal = _interopRequireDefault(require("./_freeGlobal.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = _freeGlobal.default || freeSelf || Function('return this')();
var _default = root;
exports.default = _default;
},{"./_freeGlobal.js":"node_modules/lodash-es/_freeGlobal.js"}],"node_modules/lodash-es/_Symbol.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _root = _interopRequireDefault(require("./_root.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Built-in value references. */
var Symbol = _root.default.Symbol;
var _default = Symbol;
exports.default = _default;
},{"./_root.js":"node_modules/lodash-es/_root.js"}],"node_modules/lodash-es/_getRawTag.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Symbol = _interopRequireDefault(require("./_Symbol.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/** Built-in value references. */

var symToStringTag = _Symbol.default ? _Symbol.default.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}

var _default = getRawTag;
exports.default = _default;
},{"./_Symbol.js":"node_modules/lodash-es/_Symbol.js"}],"node_modules/lodash-es/_objectToString.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */

function objectToString(value) {
  return nativeObjectToString.call(value);
}

var _default = objectToString;
exports.default = _default;
},{}],"node_modules/lodash-es/_baseGetTag.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Symbol = _interopRequireDefault(require("./_Symbol.js"));

var _getRawTag = _interopRequireDefault(require("./_getRawTag.js"));

var _objectToString = _interopRequireDefault(require("./_objectToString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag = _Symbol.default ? _Symbol.default.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag && symToStringTag in Object(value) ? (0, _getRawTag.default)(value) : (0, _objectToString.default)(value);
}

var _default = baseGetTag;
exports.default = _default;
},{"./_Symbol.js":"node_modules/lodash-es/_Symbol.js","./_getRawTag.js":"node_modules/lodash-es/_getRawTag.js","./_objectToString.js":"node_modules/lodash-es/_objectToString.js"}],"node_modules/lodash-es/_overArg.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

var _default = overArg;
exports.default = _default;
},{}],"node_modules/lodash-es/_getPrototype.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _overArg = _interopRequireDefault(require("./_overArg.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Built-in value references. */
var getPrototype = (0, _overArg.default)(Object.getPrototypeOf, Object);
var _default = getPrototype;
exports.default = _default;
},{"./_overArg.js":"node_modules/lodash-es/_overArg.js"}],"node_modules/lodash-es/isObjectLike.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var _default = isObjectLike;
exports.default = _default;
},{}],"node_modules/lodash-es/isPlainObject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseGetTag = _interopRequireDefault(require("./_baseGetTag.js"));

var _getPrototype = _interopRequireDefault(require("./_getPrototype.js"));

var _isObjectLike = _interopRequireDefault(require("./isObjectLike.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var objectTag = '[object Object]';
/** Used for built-in method references. */

var funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to infer the `Object` constructor. */

var objectCtorString = funcToString.call(Object);
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */

function isPlainObject(value) {
  if (!(0, _isObjectLike.default)(value) || (0, _baseGetTag.default)(value) != objectTag) {
    return false;
  }

  var proto = (0, _getPrototype.default)(value);

  if (proto === null) {
    return true;
  }

  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

var _default = isPlainObject;
exports.default = _default;
},{"./_baseGetTag.js":"node_modules/lodash-es/_baseGetTag.js","./_getPrototype.js":"node_modules/lodash-es/_getPrototype.js","./isObjectLike.js":"node_modules/lodash-es/isObjectLike.js"}],"node_modules/symbol-observable/es/ponyfill.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = symbolObservablePonyfill;

function symbolObservablePonyfill(root) {
  var result;
  var Symbol = root.Symbol;

  if (typeof Symbol === 'function') {
    if (Symbol.observable) {
      result = Symbol.observable;
    } else {
      result = Symbol('observable');
      Symbol.observable = result;
    }
  } else {
    result = '@@observable';
  }

  return result;
}

;
},{}],"node_modules/symbol-observable/es/index.js":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ponyfill = _interopRequireDefault(require("./ponyfill.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global window */
var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (typeof module !== 'undefined') {
  root = module;
} else {
  root = Function('return this')();
}

var result = (0, _ponyfill.default)(root);
var _default = result;
exports.default = _default;
},{"./ponyfill.js":"node_modules/symbol-observable/es/ponyfill.js"}],"node_modules/redux/es/createStore.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createStore;
exports.ActionTypes = void 0;

var _isPlainObject = _interopRequireDefault(require("lodash-es/isPlainObject"));

var _symbolObservable = _interopRequireDefault(require("symbol-observable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT'
  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */

};
exports.ActionTypes = ActionTypes;

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!(0, _isPlainObject.default)(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({
      type: ActionTypes.INIT
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[_symbolObservable.default] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[_symbolObservable.default] = observable, _ref2;
}
},{"lodash-es/isPlainObject":"node_modules/lodash-es/isPlainObject.js","symbol-observable":"node_modules/symbol-observable/es/index.js"}],"node_modules/redux/es/utils/warning.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = warning;

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

}
},{}],"node_modules/redux/es/combineReducers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = combineReducers;

var _createStore = require("./createStore");

var _isPlainObject = _interopRequireDefault(require("lodash-es/isPlainObject"));

var _warning = _interopRequireDefault(require("./utils/warning"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';
  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!(0, _isPlainObject.default)(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: _createStore.ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');

    if (typeof reducer(undefined, {
      type: type
    }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if ("development" !== 'production') {
      if (typeof reducers[key] === 'undefined') {
        (0, _warning.default)('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers);
  var unexpectedKeyCache = void 0;

  if ("development" !== 'production') {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError = void 0;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if ("development" !== 'production') {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        (0, _warning.default)(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    return hasChanged ? nextState : state;
  };
}
},{"./createStore":"node_modules/redux/es/createStore.js","lodash-es/isPlainObject":"node_modules/lodash-es/isPlainObject.js","./utils/warning":"node_modules/redux/es/utils/warning.js"}],"node_modules/redux/es/bindActionCreators.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bindActionCreators;

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}
},{}],"node_modules/redux/es/compose.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compose;

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}
},{}],"node_modules/redux/es/applyMiddleware.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = applyMiddleware;

var _compose = _interopRequireDefault(require("./compose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];
      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = _compose.default.apply(undefined, chain)(store.dispatch);
      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}
},{"./compose":"node_modules/redux/es/compose.js"}],"node_modules/redux/es/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createStore", {
  enumerable: true,
  get: function () {
    return _createStore.default;
  }
});
Object.defineProperty(exports, "combineReducers", {
  enumerable: true,
  get: function () {
    return _combineReducers.default;
  }
});
Object.defineProperty(exports, "bindActionCreators", {
  enumerable: true,
  get: function () {
    return _bindActionCreators.default;
  }
});
Object.defineProperty(exports, "applyMiddleware", {
  enumerable: true,
  get: function () {
    return _applyMiddleware.default;
  }
});
Object.defineProperty(exports, "compose", {
  enumerable: true,
  get: function () {
    return _compose.default;
  }
});

var _createStore = _interopRequireDefault(require("./createStore"));

var _combineReducers = _interopRequireDefault(require("./combineReducers"));

var _bindActionCreators = _interopRequireDefault(require("./bindActionCreators"));

var _applyMiddleware = _interopRequireDefault(require("./applyMiddleware"));

var _compose = _interopRequireDefault(require("./compose"));

var _warning = _interopRequireDefault(require("./utils/warning"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if ("development" !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  (0, _warning.default)('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}
},{"./createStore":"node_modules/redux/es/createStore.js","./combineReducers":"node_modules/redux/es/combineReducers.js","./bindActionCreators":"node_modules/redux/es/bindActionCreators.js","./applyMiddleware":"node_modules/redux/es/applyMiddleware.js","./compose":"node_modules/redux/es/compose.js","./utils/warning":"node_modules/redux/es/utils/warning.js"}],"node_modules/redux-thunk/es/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;
var _default = thunk;
exports.default = _default;
},{}],"node_modules/@mapbox/polyline/src/polyline.js":[function(require,module,exports) {
'use strict';

/**
 * Based off of [the offical Google document](https://developers.google.com/maps/documentation/utilities/polylinealgorithm)
 *
 * Some parts from [this implementation](http://facstaff.unca.edu/mcmcclur/GoogleMaps/EncodePolyline/PolylineEncoder.js)
 * by [Mark McClure](http://facstaff.unca.edu/mcmcclur/)
 *
 * @module polyline
 */

var polyline = {};

function py2_round(value) {
    // Google's polyline algorithm uses the same rounding strategy as Python 2, which is different from JS for negative values
    return Math.floor(Math.abs(value) + 0.5) * (value >= 0 ? 1 : -1);
}

function encode(current, previous, factor) {
    current = py2_round(current * factor);
    previous = py2_round(previous * factor);
    var coordinate = current - previous;
    coordinate <<= 1;
    if (current - previous < 0) {
        coordinate = ~coordinate;
    }
    var output = '';
    while (coordinate >= 0x20) {
        output += String.fromCharCode((0x20 | (coordinate & 0x1f)) + 63);
        coordinate >>= 5;
    }
    output += String.fromCharCode(coordinate + 63);
    return output;
}

/**
 * Decodes to a [latitude, longitude] coordinates array.
 *
 * This is adapted from the implementation in Project-OSRM.
 *
 * @param {String} str
 * @param {Number} precision
 * @returns {Array}
 *
 * @see https://github.com/Project-OSRM/osrm-frontend/blob/master/WebContent/routing/OSRM.RoutingGeometry.js
 */
polyline.decode = function(str, precision) {
    var index = 0,
        lat = 0,
        lng = 0,
        coordinates = [],
        shift = 0,
        result = 0,
        byte = null,
        latitude_change,
        longitude_change,
        factor = Math.pow(10, Number.isInteger(precision) ? precision : 5);

    // Coordinates have variable length when encoded, so just keep
    // track of whether we've hit the end of the string. In each
    // loop iteration, a single coordinate is decoded.
    while (index < str.length) {

        // Reset shift, result, and byte
        byte = null;
        shift = 0;
        result = 0;

        do {
            byte = str.charCodeAt(index++) - 63;
            result |= (byte & 0x1f) << shift;
            shift += 5;
        } while (byte >= 0x20);

        latitude_change = ((result & 1) ? ~(result >> 1) : (result >> 1));

        shift = result = 0;

        do {
            byte = str.charCodeAt(index++) - 63;
            result |= (byte & 0x1f) << shift;
            shift += 5;
        } while (byte >= 0x20);

        longitude_change = ((result & 1) ? ~(result >> 1) : (result >> 1));

        lat += latitude_change;
        lng += longitude_change;

        coordinates.push([lat / factor, lng / factor]);
    }

    return coordinates;
};

/**
 * Encodes the given [latitude, longitude] coordinates array.
 *
 * @param {Array.<Array.<Number>>} coordinates
 * @param {Number} precision
 * @returns {String}
 */
polyline.encode = function(coordinates, precision) {
    if (!coordinates.length) { return ''; }

    var factor = Math.pow(10, Number.isInteger(precision) ? precision : 5),
        output = encode(coordinates[0][0], 0, factor) + encode(coordinates[0][1], 0, factor);

    for (var i = 1; i < coordinates.length; i++) {
        var a = coordinates[i], b = coordinates[i - 1];
        output += encode(a[0], b[0], factor);
        output += encode(a[1], b[1], factor);
    }

    return output;
};

function flipped(coords) {
    var flipped = [];
    for (var i = 0; i < coords.length; i++) {
        var coord = coords[i].slice();
        flipped.push([coord[1], coord[0]]);
    }
    return flipped;
}

/**
 * Encodes a GeoJSON LineString feature/geometry.
 *
 * @param {Object} geojson
 * @param {Number} precision
 * @returns {String}
 */
polyline.fromGeoJSON = function(geojson, precision) {
    if (geojson && geojson.type === 'Feature') {
        geojson = geojson.geometry;
    }
    if (!geojson || geojson.type !== 'LineString') {
        throw new Error('Input must be a GeoJSON LineString');
    }
    return polyline.encode(flipped(geojson.coordinates), precision);
};

/**
 * Decodes to a GeoJSON LineString geometry.
 *
 * @param {String} str
 * @param {Number} precision
 * @returns {Object}
 */
polyline.toGeoJSON = function(str, precision) {
    var coords = polyline.decode(str, precision);
    return {
        type: 'LineString',
        coordinates: flipped(coords)
    };
};

if (typeof module === 'object' && module.exports) {
    module.exports = polyline;
}

},{}],"node_modules/@mapbox/mapbox-gl-directions/src/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function validCoords(coords) {
  return coords[0] >= -180 && coords[0] <= 180 && coords[1] >= -90 && coords[1] <= 90;
}

function coordinateMatch(a, b) {
  a = a.geometry.coordinates;
  b = b.geometry.coordinates;
  return a.join() === b.join() || a[0].toFixed(3) === b[0].toFixed(3) && a[1].toFixed(3) === b[1].toFixed(3);
}

function wrap(n) {
  var d = 180 - -180;
  var w = ((n - -180) % d + d) % d + -180;
  return w === -180 ? 180 : w;
}

function roundWithOriginalPrecision(input, original) {
  var precision = 0;

  if (Math.floor(original) !== original) {
    precision = original.toString().split('.')[1].length;
  }

  return input.toFixed(Math.min(precision, 5));
}

function createPoint(coordinates, properties) {
  return {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: coordinates
    },
    properties: properties ? properties : {}
  };
}

var format = {
  duration: function duration(s) {
    var m = Math.floor(s / 60),
        h = Math.floor(m / 60);
    s %= 60;
    m %= 60;
    if (h === 0 && m === 0) return s + 's';
    if (h === 0) return m + 'min';
    return h + 'h ' + m + 'min';
  },
  imperial: function imperial(m) {
    var mi = m / 1609.344;
    if (mi >= 100) return mi.toFixed(0) + 'mi';
    if (mi >= 10) return mi.toFixed(1) + 'mi';
    if (mi >= 0.1) return mi.toFixed(2) + 'mi';
    return (mi * 5280).toFixed(0) + 'ft';
  },
  metric: function metric(m) {
    if (m >= 100000) return (m / 1000).toFixed(0) + 'km';
    if (m >= 10000) return (m / 1000).toFixed(1) + 'km';
    if (m >= 100) return (m / 1000).toFixed(2) + 'km';
    return m.toFixed(0) + 'm';
  }
};
var _default = {
  format: format,
  coordinateMatch: coordinateMatch,
  createPoint: createPoint,
  validCoords: validCoords,
  wrap: wrap,
  roundWithOriginalPrecision: roundWithOriginalPrecision
};
exports.default = _default;
},{}],"node_modules/@mapbox/mapbox-gl-directions/src/constants/action_types.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WAYPOINTS = exports.SET_OPTIONS = exports.ROUTE_INDEX = exports.ORIGIN_FROM_COORDINATES = exports.ORIGIN_QUERY = exports.ORIGIN_CLEAR = exports.ORIGIN = exports.HOVER_MARKER = exports.ERROR = exports.EVENTS = exports.DIRECTIONS_PROFILE = exports.DIRECTIONS = exports.DESTINATION_FROM_COORDINATES = exports.DESTINATION_QUERY = exports.DESTINATION_CLEAR = exports.DESTINATION = void 0;
var DESTINATION = 'DESTINATION';
exports.DESTINATION = DESTINATION;
var DESTINATION_CLEAR = 'DESTINATION_CLEAR';
exports.DESTINATION_CLEAR = DESTINATION_CLEAR;
var DESTINATION_QUERY = 'DESTINATION_QUERY';
exports.DESTINATION_QUERY = DESTINATION_QUERY;
var DESTINATION_FROM_COORDINATES = 'DESTINATION_FROM_COORDINATES';
exports.DESTINATION_FROM_COORDINATES = DESTINATION_FROM_COORDINATES;
var DIRECTIONS = 'DIRECTIONS';
exports.DIRECTIONS = DIRECTIONS;
var DIRECTIONS_PROFILE = 'DIRECTIONS_PROFILE';
exports.DIRECTIONS_PROFILE = DIRECTIONS_PROFILE;
var EVENTS = 'EVENTS';
exports.EVENTS = EVENTS;
var ERROR = 'ERROR';
exports.ERROR = ERROR;
var HOVER_MARKER = 'HOVER_MARKER';
exports.HOVER_MARKER = HOVER_MARKER;
var ORIGIN = 'ORIGIN';
exports.ORIGIN = ORIGIN;
var ORIGIN_CLEAR = 'ORIGIN_CLEAR';
exports.ORIGIN_CLEAR = ORIGIN_CLEAR;
var ORIGIN_QUERY = 'ORIGIN_QUERY';
exports.ORIGIN_QUERY = ORIGIN_QUERY;
var ORIGIN_FROM_COORDINATES = 'ORIGIN_FROM_COORDINATES';
exports.ORIGIN_FROM_COORDINATES = ORIGIN_FROM_COORDINATES;
var ROUTE_INDEX = 'ROUTE_INDEX';
exports.ROUTE_INDEX = ROUTE_INDEX;
var SET_OPTIONS = 'SET_OPTIONS';
exports.SET_OPTIONS = SET_OPTIONS;
var WAYPOINTS = 'WAYPOINTS';
exports.WAYPOINTS = WAYPOINTS;
},{}],"node_modules/deep-assign/node_modules/is-obj/index.js":[function(require,module,exports) {
'use strict';

module.exports = function (x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
};
},{}],"node_modules/deep-assign/index.js":[function(require,module,exports) {
'use strict';

var isObj = require('is-obj');

var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Sources cannot be null or undefined');
  }

  return Object(val);
}

function assignKey(to, from, key) {
  var val = from[key];

  if (val === undefined || val === null) {
    return;
  }

  if (hasOwnProperty.call(to, key)) {
    if (to[key] === undefined || to[key] === null) {
      throw new TypeError('Cannot convert undefined or null to object (' + key + ')');
    }
  }

  if (!hasOwnProperty.call(to, key) || !isObj(val)) {
    to[key] = val;
  } else {
    to[key] = assign(Object(to[key]), from[key]);
  }
}

function assign(to, from) {
  if (to === from) {
    return to;
  }

  from = Object(from);

  for (var key in from) {
    if (hasOwnProperty.call(from, key)) {
      assignKey(to, from, key);
    }
  }

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(from);

    for (var i = 0; i < symbols.length; i++) {
      if (propIsEnumerable.call(from, symbols[i])) {
        assignKey(to, from, symbols[i]);
      }
    }
  }

  return to;
}

module.exports = function deepAssign(target) {
  target = toObject(target);

  for (var s = 1; s < arguments.length; s++) {
    assign(target, arguments[s]);
  }

  return target;
};
},{"is-obj":"node_modules/deep-assign/node_modules/is-obj/index.js"}],"node_modules/@mapbox/mapbox-gl-directions/src/reducers/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var types = _interopRequireWildcard(require("../constants/action_types.js"));

var _deepAssign = _interopRequireDefault(require("deep-assign"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var initialState = {
  // Options set on initialization
  api: 'https://api.mapbox.com/directions/v5/',
  profile: 'mapbox/driving-traffic',
  alternatives: false,
  congestion: false,
  unit: 'imperial',
  flyTo: true,
  placeholderOrigin: 'Choose a starting place',
  placeholderDestination: 'Choose destination',
  zoom: 16,
  language: 'en',
  compile: null,
  proximity: false,
  styles: [],
  // UI controls
  controls: {
    profileSwitcher: true,
    inputs: true,
    instructions: true
  },
  // Optional setting to pass options available to mapbox-gl-geocoder
  geocoder: {},
  interactive: true,
  // Container for client registered events
  events: {},
  // Marker feature drawn on the map at any point.
  origin: {},
  destination: {},
  hoverMarker: {},
  waypoints: [],
  // User input strings or result returned from geocoder
  originQuery: null,
  destinationQuery: null,
  originQueryCoordinates: null,
  destinationQueryCoordinates: null,
  // Directions data
  directions: [],
  routeIndex: 0,
  routePadding: 80
};

function data() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.SET_OPTIONS:
      return (0, _deepAssign.default)({}, state, action.options);

    case types.DIRECTIONS_PROFILE:
      return Object.assign({}, state, {
        profile: action.profile
      });

    case types.ORIGIN:
      return Object.assign({}, state, {
        origin: action.origin,
        hoverMarker: {}
      });

    case types.DESTINATION:
      return Object.assign({}, state, {
        destination: action.destination,
        hoverMarker: {}
      });

    case types.HOVER_MARKER:
      return Object.assign({}, state, {
        hoverMarker: action.hoverMarker
      });

    case types.WAYPOINTS:
      return Object.assign({}, state, {
        waypoints: action.waypoints
      });

    case types.ORIGIN_QUERY:
      return Object.assign({}, state, {
        originQuery: action.query
      });

    case types.DESTINATION_QUERY:
      return Object.assign({}, state, {
        destinationQuery: action.query
      });

    case types.ORIGIN_FROM_COORDINATES:
      return Object.assign({}, state, {
        originQueryCoordinates: action.coordinates
      });

    case types.DESTINATION_FROM_COORDINATES:
      return Object.assign({}, state, {
        destinationQueryCoordinates: action.coordinates
      });

    case types.ORIGIN_CLEAR:
      return Object.assign({}, state, {
        origin: {},
        originQuery: '',
        waypoints: [],
        directions: []
      });

    case types.DESTINATION_CLEAR:
      return Object.assign({}, state, {
        destination: {},
        destinationQuery: '',
        waypoints: [],
        directions: []
      });

    case types.DIRECTIONS:
      return Object.assign({}, state, {
        directions: action.directions
      });

    case types.ROUTE_INDEX:
      return Object.assign({}, state, {
        routeIndex: action.routeIndex
      });

    case types.ERROR:
      return Object.assign({}, state, {
        error: action.error
      });

    default:
      return state;
  }
}

var _default = data;
exports.default = _default;
},{"../constants/action_types.js":"node_modules/@mapbox/mapbox-gl-directions/src/constants/action_types.js","deep-assign":"node_modules/deep-assign/index.js"}],"node_modules/@mapbox/mapbox-gl-directions/src/actions/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryOrigin = queryOrigin;
exports.queryDestination = queryDestination;
exports.queryOriginCoordinates = queryOriginCoordinates;
exports.queryDestinationCoordinates = queryDestinationCoordinates;
exports.clearOrigin = clearOrigin;
exports.clearDestination = clearDestination;
exports.setOptions = setOptions;
exports.hoverMarker = hoverMarker;
exports.setRouteIndex = setRouteIndex;
exports.createOrigin = createOrigin;
exports.createDestination = createDestination;
exports.setProfile = setProfile;
exports.reverse = reverse;
exports.setOriginFromCoordinates = setOriginFromCoordinates;
exports.setDestinationFromCoordinates = setDestinationFromCoordinates;
exports.addWaypoint = addWaypoint;
exports.setWaypoint = setWaypoint;
exports.removeWaypoint = removeWaypoint;
exports.eventSubscribe = eventSubscribe;
exports.eventEmit = eventEmit;

var types = _interopRequireWildcard(require("../constants/action_types"));

var _utils = _interopRequireDefault(require("../utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var request = new XMLHttpRequest();

function originPoint(coordinates) {
  return function (dispatch) {
    var origin = _utils.default.createPoint(coordinates, {
      id: 'origin',
      'marker-symbol': 'A'
    });

    dispatch({
      type: types.ORIGIN,
      origin: origin
    });
    dispatch(eventEmit('origin', {
      feature: origin
    }));
  };
}

function destinationPoint(coordinates) {
  return function (dispatch) {
    var destination = _utils.default.createPoint(coordinates, {
      id: 'destination',
      'marker-symbol': 'B'
    });

    dispatch({
      type: types.DESTINATION,
      destination: destination
    });
    dispatch(eventEmit('destination', {
      feature: destination
    }));
  };
}

function setDirections(directions) {
  return function (dispatch) {
    dispatch({
      type: types.DIRECTIONS,
      directions: directions
    });
    dispatch(eventEmit('route', {
      route: directions
    }));
  };
}

function updateWaypoints(waypoints) {
  return {
    type: types.WAYPOINTS,
    waypoints: waypoints
  };
}

function setHoverMarker(feature) {
  return {
    type: types.HOVER_MARKER,
    hoverMarker: feature
  };
}

function fetchDirections() {
  return function (dispatch, getState) {
    var _getState = getState(),
        api = _getState.api,
        accessToken = _getState.accessToken,
        routeIndex = _getState.routeIndex,
        profile = _getState.profile,
        alternatives = _getState.alternatives,
        congestion = _getState.congestion,
        destination = _getState.destination,
        language = _getState.language,
        exclude = _getState.exclude; // if there is no destination set, do not make request because it will fail


    if (!(destination && destination.geometry)) return;
    var query = buildDirectionsQuery(getState); // Request params

    var options = [];
    options.push('geometries=polyline');
    if (alternatives) options.push('alternatives=true');
    if (congestion) options.push('annotations=congestion');
    options.push('steps=true');
    options.push('overview=full');
    if (language) options.push('language=' + language);
    if (exclude) options.push('exclude=' + exclude);
    if (accessToken) options.push('access_token=' + accessToken);
    request.abort();
    request.open('GET', "".concat(api).concat(profile, "/").concat(query, ".json?").concat(options.join('&')), true);

    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(request.responseText);

        if (data.error) {
          dispatch(setDirections([]));
          return dispatch(setError(data.error));
        }

        dispatch(setError(null));
        if (!data.routes[routeIndex]) dispatch(setRouteIndex(0));
        dispatch(setDirections(data.routes)); // Revise origin / destination points

        dispatch(originPoint(data.waypoints[0].location));
        dispatch(destinationPoint(data.waypoints[data.waypoints.length - 1].location));
      } else {
        dispatch(setDirections([]));
        return dispatch(setError(JSON.parse(request.responseText).message));
      }
    };

    request.onerror = function () {
      dispatch(setDirections([]));
      return dispatch(setError(JSON.parse(request.responseText).message));
    };

    request.send();
  };
}
/*
 * Build query used to fetch directions
 *
 * @param {Function} state
 */


function buildDirectionsQuery(state) {
  var _state = state(),
      origin = _state.origin,
      destination = _state.destination,
      waypoints = _state.waypoints;

  var query = [];
  query.push(origin.geometry.coordinates.join(','));
  query.push(';'); // Add any waypoints.

  if (waypoints.length) {
    waypoints.forEach(function (waypoint) {
      query.push(waypoint.geometry.coordinates.join(','));
      query.push(';');
    });
  }

  query.push(destination.geometry.coordinates.join(','));
  return encodeURIComponent(query.join(''));
}

function normalizeWaypoint(waypoint) {
  var properties = {
    id: 'waypoint'
  };
  return Object.assign(waypoint, {
    properties: waypoint.properties ? Object.assign(waypoint.properties, properties) : properties
  });
}

function setError(error) {
  return function (dispatch) {
    dispatch({
      type: 'ERROR',
      error: error
    });
    if (error) dispatch(eventEmit('error', {
      error: error
    }));
  };
}

function queryOrigin(query) {
  return {
    type: types.ORIGIN_QUERY,
    query: query
  };
}

function queryDestination(query) {
  return {
    type: types.DESTINATION_QUERY,
    query: query
  };
}

function queryOriginCoordinates(coords) {
  return {
    type: types.ORIGIN_FROM_COORDINATES,
    coordinates: coords
  };
}

function queryDestinationCoordinates(coords) {
  return {
    type: types.DESTINATION_FROM_COORDINATES,
    coordinates: coords
  };
}

function clearOrigin() {
  return function (dispatch) {
    dispatch({
      type: types.ORIGIN_CLEAR
    });
    dispatch(eventEmit('clear', {
      type: 'origin'
    }));
    dispatch(setError(null));
  };
}

function clearDestination() {
  return function (dispatch) {
    dispatch({
      type: types.DESTINATION_CLEAR
    });
    dispatch(eventEmit('clear', {
      type: 'destination'
    }));
    dispatch(setError(null));
  };
}

function setOptions(options) {
  return {
    type: types.SET_OPTIONS,
    options: options
  };
}

function hoverMarker(coordinates) {
  return function (dispatch) {
    var feature = coordinates ? _utils.default.createPoint(coordinates, {
      id: 'hover'
    }) : {};
    dispatch(setHoverMarker(feature));
  };
}

function setRouteIndex(routeIndex) {
  return {
    type: types.ROUTE_INDEX,
    routeIndex: routeIndex
  };
}

function createOrigin(coordinates) {
  return function (dispatch, getState) {
    var _getState2 = getState(),
        destination = _getState2.destination;

    dispatch(originPoint(coordinates));
    if (destination.geometry) dispatch(fetchDirections());
  };
}

function createDestination(coordinates) {
  return function (dispatch, getState) {
    var _getState3 = getState(),
        origin = _getState3.origin;

    dispatch(destinationPoint(coordinates));
    if (origin.geometry) dispatch(fetchDirections());
  };
}

function setProfile(profile) {
  return function (dispatch, getState) {
    var _getState4 = getState(),
        origin = _getState4.origin,
        destination = _getState4.destination;

    dispatch({
      type: types.DIRECTIONS_PROFILE,
      profile: profile
    });
    dispatch(eventEmit('profile', {
      profile: profile
    }));
    if (origin.geometry && destination.geometry) dispatch(fetchDirections());
  };
}

function reverse() {
  return function (dispatch, getState) {
    var state = getState();
    if (state.destination.geometry) dispatch(originPoint(state.destination.geometry.coordinates));
    if (state.origin.geometry) dispatch(destinationPoint(state.origin.geometry.coordinates));
    if (state.origin.geometry && state.destination.geometry) dispatch(fetchDirections());
    var suggestions = document.getElementsByClassName('suggestions');

    for (var i = 0; i < suggestions.length; i++) {
      suggestions[i].style.visibility = 'hidden';
    }

    ;
  };
}
/*
 * Set origin from coordinates
 *
 * @param {Array<number>} coordinates [lng, lat] array.
 */


function setOriginFromCoordinates(coords) {
  return function (dispatch) {
    if (!_utils.default.validCoords(coords)) coords = [_utils.default.wrap(coords[0]), _utils.default.wrap(coords[1])];
    if (isNaN(coords[0]) && isNaN(coords[1])) return dispatch(setError(new Error('Coordinates are not valid')));
    dispatch(queryOriginCoordinates(coords));
    dispatch(createOrigin(coords));
  };
}
/*
 * Set destination from coordinates
 *
 * @param {Array<number>} coords [lng, lat] array.
 */


function setDestinationFromCoordinates(coords) {
  return function (dispatch) {
    if (!_utils.default.validCoords(coords)) coords = [_utils.default.wrap(coords[0]), _utils.default.wrap(coords[1])];
    if (isNaN(coords[0]) && isNaN(coords[1])) return dispatch(setError(new Error('Coordinates are not valid')));
    dispatch(createDestination(coords));
    dispatch(queryDestinationCoordinates(coords));
  };
}

function addWaypoint(index, waypoint) {
  return function (dispatch, getState) {
    var _getState5 = getState(),
        destination = _getState5.destination,
        waypoints = _getState5.waypoints;

    waypoints.splice(index, 0, normalizeWaypoint(waypoint));
    dispatch(updateWaypoints(waypoints));
    if (destination.geometry) dispatch(fetchDirections());
  };
}

function setWaypoint(index, waypoint) {
  return function (dispatch, getState) {
    var _getState6 = getState(),
        destination = _getState6.destination,
        waypoints = _getState6.waypoints;

    waypoints[index] = normalizeWaypoint(waypoint);
    dispatch(updateWaypoints(waypoints));
    if (destination.geometry) dispatch(fetchDirections());
  };
}

function removeWaypoint(waypoint) {
  return function (dispatch, getState) {
    var _getState7 = getState(),
        destination = _getState7.destination,
        waypoints = _getState7.waypoints;

    waypoints = waypoints.filter(function (way) {
      return !_utils.default.coordinateMatch(way, waypoint);
    });
    dispatch(updateWaypoints(waypoints));
    if (destination.geometry) dispatch(fetchDirections());
  };
}

function eventSubscribe(type, fn) {
  return function (dispatch, getState) {
    var _getState8 = getState(),
        events = _getState8.events;

    events[type] = events[type] || [];
    events[type].push(fn);
    return {
      type: types.EVENTS,
      events: events
    };
  };
}

function eventEmit(type, data) {
  var _this = this;

  return function (dispatch, getState) {
    var _getState9 = getState(),
        events = _getState9.events;

    if (!events[type]) {
      return {
        type: types.EVENTS,
        events: events
      };
    }

    var listeners = events[type].slice();

    for (var i = 0; i < listeners.length; i++) {
      listeners[i].call(_this, data);
    }
  };
}
},{"../constants/action_types":"node_modules/@mapbox/mapbox-gl-directions/src/constants/action_types.js","../utils":"node_modules/@mapbox/mapbox-gl-directions/src/utils.js"}],"node_modules/@mapbox/mapbox-gl-directions/src/directions_style.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var style = [{
  'id': 'directions-route-line-alt',
  'type': 'line',
  'source': 'directions',
  'layout': {
    'line-cap': 'round',
    'line-join': 'round'
  },
  'paint': {
    'line-color': '#bbb',
    'line-width': 4
  },
  'filter': ['all', ['in', '$type', 'LineString'], ['in', 'route', 'alternate']]
}, {
  'id': 'directions-route-line-casing',
  'type': 'line',
  'source': 'directions',
  'layout': {
    'line-cap': 'round',
    'line-join': 'round'
  },
  'paint': {
    'line-color': '#2d5f99',
    'line-width': 12
  },
  'filter': ['all', ['in', '$type', 'LineString'], ['in', 'route', 'selected']]
}, {
  'id': 'directions-route-line',
  'type': 'line',
  'source': 'directions',
  'layout': {
    'line-cap': 'butt',
    'line-join': 'round'
  },
  'paint': {
    'line-color': {
      'property': 'congestion',
      'type': 'categorical',
      'default': '#4882c5',
      'stops': [['unknown', '#4882c5'], ['low', '#4882c5'], ['moderate', '#f09a46'], ['heavy', '#e34341'], ['severe', '#8b2342']]
    },
    'line-width': 7
  },
  'filter': ['all', ['in', '$type', 'LineString'], ['in', 'route', 'selected']]
}, {
  'id': 'directions-hover-point-casing',
  'type': 'circle',
  'source': 'directions',
  'paint': {
    'circle-radius': 8,
    'circle-color': '#fff'
  },
  'filter': ['all', ['in', '$type', 'Point'], ['in', 'id', 'hover']]
}, {
  'id': 'directions-hover-point',
  'type': 'circle',
  'source': 'directions',
  'paint': {
    'circle-radius': 6,
    'circle-color': '#3bb2d0'
  },
  'filter': ['all', ['in', '$type', 'Point'], ['in', 'id', 'hover']]
}, {
  'id': 'directions-waypoint-point-casing',
  'type': 'circle',
  'source': 'directions',
  'paint': {
    'circle-radius': 8,
    'circle-color': '#fff'
  },
  'filter': ['all', ['in', '$type', 'Point'], ['in', 'id', 'waypoint']]
}, {
  'id': 'directions-waypoint-point',
  'type': 'circle',
  'source': 'directions',
  'paint': {
    'circle-radius': 6,
    'circle-color': '#8a8bc9'
  },
  'filter': ['all', ['in', '$type', 'Point'], ['in', 'id', 'waypoint']]
}, {
  'id': 'directions-origin-point',
  'type': 'circle',
  'source': 'directions',
  'paint': {
    'circle-radius': 18,
    'circle-color': '#3bb2d0'
  },
  'filter': ['all', ['in', '$type', 'Point'], ['in', 'marker-symbol', 'A']]
}, {
  'id': 'directions-origin-label',
  'type': 'symbol',
  'source': 'directions',
  'layout': {
    'text-field': 'A',
    'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
    'text-size': 12
  },
  'paint': {
    'text-color': '#fff'
  },
  'filter': ['all', ['in', '$type', 'Point'], ['in', 'marker-symbol', 'A']]
}, {
  'id': 'directions-destination-point',
  'type': 'circle',
  'source': 'directions',
  'paint': {
    'circle-radius': 18,
    'circle-color': '#8a8bc9'
  },
  'filter': ['all', ['in', '$type', 'Point'], ['in', 'marker-symbol', 'B']]
}, {
  'id': 'directions-destination-label',
  'type': 'symbol',
  'source': 'directions',
  'layout': {
    'text-field': 'B',
    'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
    'text-size': 12
  },
  'paint': {
    'text-color': '#fff'
  },
  'filter': ['all', ['in', '$type', 'Point'], ['in', 'marker-symbol', 'B']]
}];
var _default = style;
exports.default = _default;
},{}],"node_modules/xtend/immutable.js":[function(require,module,exports) {
module.exports = extend;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
  var target = {};

  for (var i = 0; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
}
},{}],"node_modules/fuzzy/lib/fuzzy.js":[function(require,module,exports) {
/*
 * Fuzzy
 * https://github.com/myork/fuzzy
 *
 * Copyright (c) 2012 Matt York
 * Licensed under the MIT license.
 */
(function () {
  var root = this;
  var fuzzy = {}; // Use in node or in browser

  if (typeof exports !== 'undefined') {
    module.exports = fuzzy;
  } else {
    root.fuzzy = fuzzy;
  } // Return all elements of `array` that have a fuzzy
  // match against `pattern`.


  fuzzy.simpleFilter = function (pattern, array) {
    return array.filter(function (str) {
      return fuzzy.test(pattern, str);
    });
  }; // Does `pattern` fuzzy match `str`?


  fuzzy.test = function (pattern, str) {
    return fuzzy.match(pattern, str) !== null;
  }; // If `pattern` matches `str`, wrap each matching character
  // in `opts.pre` and `opts.post`. If no match, return null


  fuzzy.match = function (pattern, str, opts) {
    opts = opts || {};
    var patternIdx = 0,
        result = [],
        len = str.length,
        totalScore = 0,
        currScore = 0 // prefix
    ,
        pre = opts.pre || '' // suffix
    ,
        post = opts.post || '' // String to compare against. This might be a lowercase version of the
    // raw string
    ,
        compareString = opts.caseSensitive && str || str.toLowerCase(),
        ch;
    pattern = opts.caseSensitive && pattern || pattern.toLowerCase(); // For each character in the string, either add it to the result
    // or wrap in template if it's the next string in the pattern

    for (var idx = 0; idx < len; idx++) {
      ch = str[idx];

      if (compareString[idx] === pattern[patternIdx]) {
        ch = pre + ch + post;
        patternIdx += 1; // consecutive characters should increase the score more than linearly

        currScore += 1 + currScore;
      } else {
        currScore = 0;
      }

      totalScore += currScore;
      result[result.length] = ch;
    } // return rendered string if we have a match for every char


    if (patternIdx === pattern.length) {
      // if the string is an exact match with pattern, totalScore should be maxed
      totalScore = compareString === pattern ? Infinity : totalScore;
      return {
        rendered: result.join(''),
        score: totalScore
      };
    }

    return null;
  }; // The normal entry point. Filters `arr` for matches against `pattern`.
  // It returns an array with matching values of the type:
  //
  //     [{
  //         string:   '<b>lah' // The rendered string
  //       , index:    2        // The index of the element in `arr`
  //       , original: 'blah'   // The original element in `arr`
  //     }]
  //
  // `opts` is an optional argument bag. Details:
  //
  //    opts = {
  //        // string to put before a matching character
  //        pre:     '<b>'
  //
  //        // string to put after matching character
  //      , post:    '</b>'
  //
  //        // Optional function. Input is an entry in the given arr`,
  //        // output should be the string to test `pattern` against.
  //        // In this example, if `arr = [{crying: 'koala'}]` we would return
  //        // 'koala'.
  //      , extract: function(arg) { return arg.crying; }
  //    }


  fuzzy.filter = function (pattern, arr, opts) {
    if (!arr || arr.length === 0) {
      return [];
    }

    if (typeof pattern !== 'string') {
      return arr;
    }

    opts = opts || {};
    return arr.reduce(function (prev, element, idx, arr) {
      var str = element;

      if (opts.extract) {
        str = opts.extract(element);
      }

      var rendered = fuzzy.match(pattern, str, opts);

      if (rendered != null) {
        prev[prev.length] = {
          string: rendered.rendered,
          score: rendered.score,
          index: idx,
          original: element
        };
      }

      return prev;
    }, []) // Sort by score. Browsers are inconsistent wrt stable/unstable
    // sorting, so force stable by using the index in the case of tie.
    // See http://ofb.net/~sethml/is-sort-stable.html
    .sort(function (a, b) {
      var compare = b.score - a.score;
      if (compare) return compare;
      return a.index - b.index;
    });
  };
})();
},{}],"node_modules/suggestions/src/list.js":[function(require,module,exports) {
'Use strict';

var List = function(component) {
  this.component = component;
  this.items = [];
  this.active = 0;
  this.element = document.createElement('ul');
  this.element.className = 'suggestions';

  // selectingListItem is set to true in the time between the mousedown and mouseup when clicking an item in the list
  // mousedown on a list item will cause the input to blur which normally hides the list, so this flag is used to keep
  // the list open until the mouseup
  this.selectingListItem = false;

  component.el.parentNode.insertBefore(this.element, component.el.nextSibling);
  return this;
};

List.prototype.show = function() {
  this.element.style.display = 'block';
};

List.prototype.hide = function() {
  this.element.style.display = 'none';
};

List.prototype.add = function(item) {
  this.items.push(item);
};

List.prototype.clear = function() {
  this.items = [];
  this.active = 0;
};

List.prototype.isEmpty = function() {
  return !this.items.length;
};

List.prototype.draw = function() {
  this.element.innerHTML = '';

  if (this.items.length === 0) {
    this.hide();
    return;
  }

  for (var i = 0; i < this.items.length; i++) {
    this.drawItem(this.items[i], this.active === i);
  }

  this.show();
};

List.prototype.drawItem = function(item, active) {
  var li = document.createElement('li'),
    a = document.createElement('a');

  if (active) li.className += ' active';

  a.innerHTML = item.string;

  li.appendChild(a);
  this.element.appendChild(li);

  li.addEventListener('mousedown', function() {
    this.selectingListItem = true;
  }.bind(this));

  li.addEventListener('mouseup', function() {
    this.handleMouseUp.call(this, item);
  }.bind(this));
};

List.prototype.handleMouseUp = function(item) {
  this.selectingListItem = false;
  this.component.value(item.original);
  this.clear();
  this.draw();
};

List.prototype.move = function(index) {
  this.active = index;
  this.draw();
};

List.prototype.previous = function() {
  this.move(this.active === 0 ? this.items.length - 1 : this.active - 1);
};

List.prototype.next = function() {
  this.move(this.active === this.items.length - 1 ? 0 : this.active + 1);
};

module.exports = List;

},{}],"node_modules/suggestions/src/suggestions.js":[function(require,module,exports) {
'use strict';

var extend = require('xtend');
var fuzzy = require('fuzzy');
var List = require('./list');

var Suggestions = function(el, data, options) {
  options = options || {};

  this.options = extend({
    minLength: 2,
    limit: 5,
    filter: true
  }, options);

  this.el = el;
  this.data = data || [];
  this.list = new List(this);

  this.query = '';
  this.selected = null;

  this.list.draw();

  this.el.addEventListener('keyup', function(e) {
    this.handleKeyUp(e.keyCode);
  }.bind(this), false);

  this.el.addEventListener('keydown', function(e) {
    this.handleKeyDown(e);
  }.bind(this));

  this.el.addEventListener('focus', function() {
    this.handleFocus();
  }.bind(this));

  this.el.addEventListener('blur', function() {
    this.handleBlur();
  }.bind(this));

  this.el.addEventListener('paste', function(e) {
    this.handlePaste(e);
  }.bind(this));

  return this;
};

Suggestions.prototype.handleKeyUp = function(keyCode) {
  // 40 - DOWN
  // 38 - UP
  // 27 - ESC
  // 13 - ENTER
  // 9 - TAB

  if (keyCode === 40 ||
      keyCode === 38 ||
      keyCode === 27 ||
      keyCode === 13 ||
      keyCode === 9) return;

  this.handleInputChange(this.el.value);
};

Suggestions.prototype.handleKeyDown = function(e) {
  switch (e.keyCode) {
    case 13: // ENTER
    case 9:  // TAB
      e.preventDefault();
      if (!this.list.isEmpty()) {
        this.value(this.list.items[this.list.active].original);
        this.list.hide();
      }
    break;
    case 27: // ESC
      if (!this.list.isEmpty()) this.list.hide();
    break;
    case 38: // UP
      this.list.previous();
    break;
    case 40: // DOWN
      this.list.next();
    break;
  }
};

Suggestions.prototype.handleBlur = function() {
  if (!this.list.selectingListItem) {
    this.list.hide();
  }
};

Suggestions.prototype.handlePaste = function(e) {
  if (e.clipboardData) {
    this.handleInputChange(e.clipboardData.getData('Text'));
  } else {
    var self = this;
    setTimeout(function () {
      self.handleInputChange(e.target.value);
    }, 100);
  }
};

Suggestions.prototype.handleInputChange = function(query) {
  this.query = this.normalize(query);

  this.list.clear();

  if (this.query.length < this.options.minLength) {
    this.list.draw();
    return;
  }

  this.getCandidates(function(data) {
    for (var i = 0; i < data.length; i++) {
      this.list.add(data[i]);
      if (i === (this.options.limit - 1)) break;
    }
    this.list.draw();
  }.bind(this));
};

Suggestions.prototype.handleFocus = function() {
  if (!this.list.isEmpty()) this.list.show();
  this.list.selectingListItem = false;
};

/**
 * Update data previously passed
 *
 * @param {Array} revisedData
 */
Suggestions.prototype.update = function(revisedData) {
  this.data = revisedData;
  this.handleKeyUp();
};

/**
 * Clears data
 */
Suggestions.prototype.clear = function() {
  this.data = [];
  this.list.clear();
};

/**
 * Normalize the results list and input value for matching
 *
 * @param {String} value
 * @return {String}
 */
Suggestions.prototype.normalize = function(value) {
  value = value.toLowerCase();
  return value;
};

/**
 * Evaluates whether an array item qualifies as a match with the current query
 *
 * @param {String} candidate a possible item from the array passed
 * @param {String} query the current query
 * @return {Boolean}
 */
Suggestions.prototype.match = function(candidate, query) {
  return candidate.indexOf(query) > -1;
};

Suggestions.prototype.value = function(value) {
  this.selected = value;
  this.el.value = this.getItemValue(value);

  if (document.createEvent) {
    var e = document.createEvent('HTMLEvents');
    e.initEvent('change', true, false);
    this.el.dispatchEvent(e);
  } else {
    this.el.fireEvent('onchange');
  }
};

Suggestions.prototype.getCandidates = function(callback) {
  var options = {
    pre: '<strong>',
    post: '</strong>',
    extract: function(d) { return this.getItemValue(d); }.bind(this)
  };

  var results = this.options.filter ?
    fuzzy.filter(this.query, this.data, options) :
    this.data.map(function(d) {
      var boldString = this.getItemValue(d);
      var indexString = this.normalize(boldString);
      var indexOfQuery = indexString.lastIndexOf(this.query);
      while(indexOfQuery > -1) {
        var endIndexOfQuery = indexOfQuery + this.query.length;
        boldString = boldString.slice(0, indexOfQuery) + '<strong>' + boldString.slice(indexOfQuery, endIndexOfQuery) + '</strong>' + boldString.slice(endIndexOfQuery);
        indexOfQuery = indexString.slice(0, indexOfQuery).lastIndexOf(this.query);
      }
      return {
        original: d,
        string: boldString
      };
    }.bind(this));

  callback(results);
};

/**
 * For a given item in the data array, return what should be used as the candidate string
 *
 * @param {Object|String} item an item from the data array
 * @return {String} item
 */
Suggestions.prototype.getItemValue = function(item) {
  return item;
};

module.exports = Suggestions;

},{"xtend":"node_modules/xtend/immutable.js","fuzzy":"node_modules/fuzzy/lib/fuzzy.js","./list":"node_modules/suggestions/src/list.js"}],"node_modules/suggestions/index.js":[function(require,module,exports) {
'use strict';

/**
 * A typeahead component for inputs
 * @class Suggestions
 *
 * @param {HTMLInputElement} el A valid HTML input element
 * @param {Array} data An array of data used for results
 * @param {Object} options
 * @param {Number} [options.limit=5] Max number of results to display in the auto suggest list.
 * @param {Number} [options.minLength=2] Number of characters typed into an input to trigger suggestions.
 * @return {Suggestions} `this`
 * @example
 * // in the browser
 * var input = document.querySelector('input');
 * var data = [
 *   'Roy Eldridge',
 *   'Roy Hargrove',
 *   'Rex Stewart'
 * ];
 *
 * new Suggestions(input, data);
 *
 * // with options
 * var input = document.querySelector('input');
 * var data = [{
 *   name: 'Roy Eldridge',
 *   year: 1911
 * }, {
 *   name: 'Roy Hargrove',
 *   year: 1969
 * }, {
 *   name: 'Rex Stewart',
 *   year: 1907
 * }];
 *
 * var typeahead = new Suggestions(input, data, {
 *   filter: false, // Disable filtering
 *   minLength: 3, // Number of characters typed into an input to trigger suggestions.
 *   limit: 3 //  Max number of results to display.
 * });
 *
 * // As we're passing an object of an arrays as data, override
 * // `getItemValue` by specifying the specific property to search on.
 * typeahead.getItemValue = function(item) { return item.name };
 *
 * input.addEventListener('change', function() {
 *   console.log(typeahead.selected); // Current selected item.
 * });
 *
 * // With browserify
 * var Suggestions = require('suggestions');
 *
 * new Suggestions(input, data);
 */
var Suggestions = require('./src/suggestions');
window.Suggestions = module.exports = Suggestions;

},{"./src/suggestions":"node_modules/suggestions/src/suggestions.js"}],"node_modules/lodash.debounce/index.js":[function(require,module,exports) {
var global = arguments[3];
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

},{}],"node_modules/events/events.js":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';

var R = typeof Reflect === 'object' ? Reflect : null;
var ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {
  return Function.prototype.apply.call(target, receiver, args);
};
var ReflectOwnKeys;

if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys;
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
};

function EventEmitter() {
  EventEmitter.init.call(this);
}

module.exports = EventEmitter;
module.exports.once = once; // Backwards-compat with node 0.10.x

EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined; // By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.

var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function () {
    return defaultMaxListeners;
  },
  set: function (arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }

    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function () {
  if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
}; // Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.


EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }

  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];

  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);

  var doError = type === 'error';
  var events = this._events;
  if (events !== undefined) doError = doError && events.error === undefined;else if (!doError) return false; // If there is no 'error' event listener then throw.

  if (doError) {
    var er;
    if (args.length > 0) er = args[0];

    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    } // At least give some kind of context to the user


    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];
  if (handler === undefined) return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);

    for (var i = 0; i < len; ++i) ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;
  checkListener(listener);
  events = target._events;

  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type, listener.listener ? listener.listener : listener); // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object

      events = target._events;
    }

    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] = prepend ? [listener, existing] : [existing, listener]; // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    } // Check for listener leak


    m = _getMaxListeners(target);

    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true; // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax

      var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener = function prependListener(type, listener) {
  return _addListener(this, type, listener, true);
};

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0) return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = {
    fired: false,
    wrapFn: undefined,
    target: target,
    type: type,
    listener: listener
  };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
  checkListener(listener);
  this.prependListener(type, _onceWrap(this, type, listener));
  return this;
}; // Emits a 'removeListener' event if and only if the listener was removed.


EventEmitter.prototype.removeListener = function removeListener(type, listener) {
  var list, events, position, i, originalListener;
  checkListener(listener);
  events = this._events;
  if (events === undefined) return this;
  list = events[type];
  if (list === undefined) return this;

  if (list === listener || list.listener === listener) {
    if (--this._eventsCount === 0) this._events = Object.create(null);else {
      delete events[type];
      if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
    }
  } else if (typeof list !== 'function') {
    position = -1;

    for (i = list.length - 1; i >= 0; i--) {
      if (list[i] === listener || list[i].listener === listener) {
        originalListener = list[i].listener;
        position = i;
        break;
      }
    }

    if (position < 0) return this;
    if (position === 0) list.shift();else {
      spliceOne(list, position);
    }
    if (list.length === 1) events[type] = list[0];
    if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);
  }

  return this;
};

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
  var listeners, events, i;
  events = this._events;
  if (events === undefined) return this; // not listening for removeListener, no need to emit

  if (events.removeListener === undefined) {
    if (arguments.length === 0) {
      this._events = Object.create(null);
      this._eventsCount = 0;
    } else if (events[type] !== undefined) {
      if (--this._eventsCount === 0) this._events = Object.create(null);else delete events[type];
    }

    return this;
  } // emit removeListener for all listeners on all events


  if (arguments.length === 0) {
    var keys = Object.keys(events);
    var key;

    for (i = 0; i < keys.length; ++i) {
      key = keys[i];
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }

    this.removeAllListeners('removeListener');
    this._events = Object.create(null);
    this._eventsCount = 0;
    return this;
  }

  listeners = events[type];

  if (typeof listeners === 'function') {
    this.removeListener(type, listeners);
  } else if (listeners !== undefined) {
    // LIFO order
    for (i = listeners.length - 1; i >= 0; i--) {
      this.removeListener(type, listeners[i]);
    }
  }

  return this;
};

function _listeners(target, type, unwrap) {
  var events = target._events;
  if (events === undefined) return [];
  var evlistener = events[type];
  if (evlistener === undefined) return [];
  if (typeof evlistener === 'function') return unwrap ? [evlistener.listener || evlistener] : [evlistener];
  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function (emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;

function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);

  for (var i = 0; i < n; ++i) copy[i] = arr[i];

  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++) list[index] = list[index + 1];

  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);

  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }

  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function eventListener() {
      if (errorListener !== undefined) {
        emitter.removeListener('error', errorListener);
      }

      resolve([].slice.call(arguments));
    }

    ;
    var errorListener; // Adding an error listener is not optional because
    // if an error is thrown on an event emitter we cannot
    // guarantee that the actual event we are waiting will
    // be fired. The result could be a silent way to create
    // memory or file descriptor leaks, which is something
    // we should avoid.

    if (name !== 'error') {
      errorListener = function errorListener(err) {
        emitter.removeListener(name, eventListener);
        reject(err);
      };

      emitter.once('error', errorListener);
    }

    emitter.once(name, eventListener);
  });
}
},{}],"node_modules/@mapbox/mapbox-gl-directions/src/controls/geocoder.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _suggestions = _interopRequireDefault(require("suggestions"));

var _lodash = _interopRequireDefault(require("lodash.debounce"));

var _events = require("events");

var _utils = _interopRequireDefault(require("../utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Geocoder - this slightly mimicks the mapboxl-gl-geocoder but isn't an exact replica.
// Once gl-js plugins can be added to custom divs, we should be able to require mapbox-gl-geocoder
// instead of including it here
var Geocoder = /*#__PURE__*/function () {
  function Geocoder(options) {
    _classCallCheck(this, Geocoder);

    this._ev = new _events.EventEmitter();
    this.options = options;
    this.api = options && options.api || 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
  }

  _createClass(Geocoder, [{
    key: "onAdd",
    value: function onAdd(map) {
      this._map = map;
      this.request = new XMLHttpRequest(); // Template

      var el = document.createElement('div');
      el.className = 'mapboxgl-ctrl-geocoder';
      var icon = document.createElement('span');
      icon.className = 'geocoder-icon geocoder-icon-search';
      var input = this._inputEl = document.createElement('input');
      input.type = 'text';
      input.placeholder = this.options.placeholder;
      input.addEventListener('keydown', (0, _lodash.default)(function (e) {
        if (!e.target.value) return this._clearEl.classList.remove('active'); // TAB, ESC, LEFT, RIGHT, ENTER, UP, DOWN

        if (e.metaKey || [9, 27, 37, 39, 13, 38, 40].indexOf(e.keyCode) !== -1) return;

        this._queryFromInput(e.target.value);
      }.bind(this)), 200);
      input.addEventListener('change', function (e) {
        if (e.target.value) this._clearEl.classList.add('active');
        var selected = this._typeahead.selected;

        if (selected) {
          if (this.options.flyTo) {
            if (selected.bbox && selected.context && selected.context.length <= 3 || selected.bbox && !selected.context) {
              var bbox = selected.bbox;
              map.fitBounds([[bbox[0], bbox[1]], [bbox[2], bbox[3]]]);
            } else {
              map.flyTo({
                center: selected.center,
                zoom: this.options.zoom
              });
            }
          }

          this._input = selected;
          this.fire('result', {
            result: selected
          });
        }
      }.bind(this));
      var actions = document.createElement('div');
      actions.classList.add('geocoder-pin-right');
      var clear = this._clearEl = document.createElement('button');
      clear.className = 'geocoder-icon geocoder-icon-close';
      clear.addEventListener('click', this._clear.bind(this));
      var loading = this._loadingEl = document.createElement('span');
      loading.className = 'geocoder-icon geocoder-icon-loading';
      actions.appendChild(clear);
      actions.appendChild(loading);
      el.appendChild(icon);
      el.appendChild(input);
      el.appendChild(actions); // Override the control being added to control containers

      if (this.options.container) this.options.position = false;
      this._typeahead = new _suggestions.default(input, [], {
        filter: false
      });

      this._typeahead.getItemValue = function (item) {
        return item.place_name;
      };

      return el;
    }
  }, {
    key: "_geocode",
    value: function _geocode(q, callback) {
      this._loadingEl.classList.add('active');

      this.fire('loading');
      var geocodingOptions = this.options;
      var exclude = ['placeholder', 'zoom', 'flyTo', 'accessToken'];
      var options = Object.keys(this.options).filter(function (key) {
        return exclude.indexOf(key) === -1;
      }).map(function (key) {
        return key + '=' + geocodingOptions[key];
      });
      var accessToken = this.options.accessToken ? this.options.accessToken : mapboxgl.accessToken;
      options.push('access_token=' + accessToken);
      this.request.abort();
      this.request.open('GET', this.api + encodeURIComponent(q.trim()) + '.json?' + options.join('&'), true);

      this.request.onload = function () {
        this._loadingEl.classList.remove('active');

        if (this.request.status >= 200 && this.request.status < 400) {
          var data = JSON.parse(this.request.responseText);

          if (data.features.length) {
            this._clearEl.classList.add('active');
          } else {
            this._clearEl.classList.remove('active');

            this._typeahead.selected = null;
          }

          this.fire('results', {
            results: data.features
          });

          this._typeahead.update(data.features);

          return callback(data.features);
        } else {
          this.fire('error', {
            error: JSON.parse(this.request.responseText).message
          });
        }
      }.bind(this);

      this.request.onerror = function () {
        this._loadingEl.classList.remove('active');

        this.fire('error', {
          error: JSON.parse(this.request.responseText).message
        });
      }.bind(this);

      this.request.send();
    }
  }, {
    key: "_queryFromInput",
    value: function _queryFromInput(q) {
      q = q.trim();
      if (!q) this._clear();

      if (q.length > 2) {
        this._geocode(q, function (results) {
          this._results = results;
        }.bind(this));
      }
    }
  }, {
    key: "_change",
    value: function _change() {
      var onChange = document.createEvent('HTMLEvents');
      onChange.initEvent('change', true, false);

      this._inputEl.dispatchEvent(onChange);
    }
  }, {
    key: "_query",
    value: function _query(input) {
      if (!input) return;

      if (_typeof(input) === 'object' && input.length) {
        input = [_utils.default.wrap(input[0]), _utils.default.wrap(input[1])].join();
      }

      this._geocode(input, function (results) {
        if (!results.length) return;
        var result = results[0];
        this._results = results;
        this._typeahead.selected = result;
        this._inputEl.value = result.place_name;

        this._change();
      }.bind(this));
    }
  }, {
    key: "_setInput",
    value: function _setInput(input) {
      if (!input) return;

      if (_typeof(input) === 'object' && input.length) {
        input = [_utils.default.roundWithOriginalPrecision(_utils.default.wrap(input[0]), input[0]), _utils.default.roundWithOriginalPrecision(_utils.default.wrap(input[1]), input[1])].join();
      } // Set input value to passed value and clear everything else.


      this._inputEl.value = input;
      this._input = null;
      this._typeahead.selected = null;

      this._typeahead.clear();

      this._change();
    }
  }, {
    key: "_clear",
    value: function _clear() {
      this._input = null;
      this._inputEl.value = '';
      this._typeahead.selected = null;

      this._typeahead.clear();

      this._change();

      this._inputEl.focus();

      this._clearEl.classList.remove('active');

      this.fire('clear');
    }
  }, {
    key: "getResult",
    value: function getResult() {
      return this._input;
    }
    /**
     * Set & query the input
     * @param {Array|String} query An array of coordinates [lng, lat] or location name as a string.
     * @returns {Geocoder} this
     */

  }, {
    key: "query",
    value: function query(_query2) {
      this._query(_query2);

      return this;
    }
    /**
     * Set input
     * @param {Array|String} value An array of coordinates [lng, lat] or location name as a string. Calling this function just sets the input and does not trigger an API request.
     * @returns {Geocoder} this
     */

  }, {
    key: "setInput",
    value: function setInput(value) {
      this._setInput(value);

      return this;
    }
    /**
     * Subscribe to events that happen within the plugin.
     * @param {String} type name of event. Available events and the data passed into their respective event objects are:
     *
     * - __clear__ `Emitted when the input is cleared`
     * - __loading__ `Emitted when the geocoder is looking up a query`
     * - __results__ `{ results } Fired when the geocoder returns a response`
     * - __result__ `{ result } Fired when input is set`
     * - __error__ `{ error } Error as string`
     * @param {Function} fn function that's called when the event is emitted.
     * @returns {Geocoder} this;
     */

  }, {
    key: "on",
    value: function on(type, fn) {
      this._ev.on(type, fn);

      this._ev.on('error', function (err) {
        console.log(err);
      });

      return this;
    }
    /**
     * Fire an event
     * @param {String} type event name.
     * @param {Object} data event data to pass to the function subscribed.
     * @returns {Geocoder} this
     */

  }, {
    key: "fire",
    value: function fire(type, data) {
      this._ev.emit(type, data);

      return this;
    }
    /**
     * Remove an event
     * @returns {Geocoder} this
     * @param {String} type Event name.
     * @param {Function} fn Function that should unsubscribe to the event emitted.
     */

  }, {
    key: "off",
    value: function off(type, fn) {
      this._ev.removeListener(type, fn);

      return this;
    }
  }]);

  return Geocoder;
}();

exports.default = Geocoder;
;
},{"suggestions":"node_modules/suggestions/index.js","lodash.debounce":"node_modules/lodash.debounce/index.js","events":"node_modules/events/events.js","../utils":"node_modules/@mapbox/mapbox-gl-directions/src/utils.js"}],"node_modules/lodash._reinterpolate/index.js":[function(require,module,exports) {
/**
 * lodash 3.0.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** Used to match template delimiters. */
var reInterpolate = /<%=([\s\S]+?)%>/g;

module.exports = reInterpolate;

},{}],"node_modules/lodash.templatesettings/index.js":[function(require,module,exports) {
var global = arguments[3];
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var reInterpolate = require('lodash._reinterpolate');

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    symbolTag = '[object Symbol]',
    undefinedTag = '[object Undefined]';

/** Used to match HTML entities and HTML characters. */
var reUnescapedHtml = /[&<>"']/g,
    reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

/** Used to match template delimiters. */
var reEscape = /<%-([\s\S]+?)%>/g,
    reEvaluate = /<%([\s\S]+?)%>/g;

/** Used to map characters to HTML entities. */
var htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Used by `_.escape` to convert characters to HTML entities.
 *
 * @private
 * @param {string} chr The matched character to escape.
 * @returns {string} Returns the escaped character.
 */
var escapeHtmlChar = basePropertyOf(htmlEscapes);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * By default, the template delimiters used by lodash are like those in
 * embedded Ruby (ERB) as well as ES2015 template strings. Change the
 * following template settings to use alternative delimiters.
 *
 * @static
 * @memberOf _
 * @type {Object}
 */
var templateSettings = {

  /**
   * Used to detect `data` property values to be HTML-escaped.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  'escape': reEscape,

  /**
   * Used to detect code to be evaluated.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  'evaluate': reEvaluate,

  /**
   * Used to detect `data` property values to inject.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  'interpolate': reInterpolate,

  /**
   * Used to reference the data object in the template text.
   *
   * @memberOf _.templateSettings
   * @type {string}
   */
  'variable': '',

  /**
   * Used to import variables into the compiled template.
   *
   * @memberOf _.templateSettings
   * @type {Object}
   */
  'imports': {

    /**
     * A reference to the `lodash` function.
     *
     * @memberOf _.templateSettings.imports
     * @type {Function}
     */
    '_': { 'escape': escape }
  }
};

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
 * corresponding HTML entities.
 *
 * **Note:** No other characters are escaped. To escape additional
 * characters use a third-party library like [_he_](https://mths.be/he).
 *
 * Though the ">" character is escaped for symmetry, characters like
 * ">" and "/" don't need escaping in HTML and have no special meaning
 * unless they're part of a tag or unquoted attribute value. See
 * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
 * (under "semi-related fun fact") for more details.
 *
 * When working with HTML you should always
 * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
 * XSS vectors.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escape('fred, barney, & pebbles');
 * // => 'fred, barney, &amp; pebbles'
 */
function escape(string) {
  string = toString(string);
  return (string && reHasUnescapedHtml.test(string))
    ? string.replace(reUnescapedHtml, escapeHtmlChar)
    : string;
}

module.exports = templateSettings;

},{"lodash._reinterpolate":"node_modules/lodash._reinterpolate/index.js"}],"node_modules/lodash.template/index.js":[function(require,module,exports) {
var global = arguments[3];

/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var reInterpolate = require('lodash._reinterpolate'),
    templateSettings = require('lodash.templatesettings');

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    domExcTag = '[object DOMException]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to match empty string literals in compiled template source. */
var reEmptyStringLeading = /\b__p \+= '';/g,
    reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
    reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/**
 * Used to match
 * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
 */
var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to ensure capturing order of template delimiters. */
var reNoMatch = /($^)/;

/** Used to match unescaped characters in compiled string literals. */
var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Used to escape characters for inclusion in compiled string literals. */
var stringEscapes = {
  '\\': '\\',
  "'": "'",
  '\n': 'n',
  '\r': 'r',
  '\u2028': 'u2028',
  '\u2029': 'u2029'
};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

/**
 * Used by `_.template` to escape characters for inclusion in compiled string literals.
 *
 * @private
 * @param {string} chr The matched character to escape.
 * @returns {string} Returns the escaped character.
 */
function escapeStringChar(chr) {
  return '\\' + stringEscapes[chr];
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object),
    nativeMax = Math.max,
    nativeNow = Date.now;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/**
 * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
 * of source objects to the destination object for all destination properties
 * that resolve to `undefined`.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to assign.
 * @param {Object} object The parent object of `objValue`.
 * @returns {*} Returns the value to assign.
 */
function customDefaultsAssignIn(objValue, srcValue, key, object) {
  if (objValue === undefined ||
      (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
    return srcValue;
  }
  return objValue;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
 * `SyntaxError`, `TypeError`, or `URIError` object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
 * @example
 *
 * _.isError(new Error);
 * // => true
 *
 * _.isError(Error);
 * // => false
 */
function isError(value) {
  if (!isObjectLike(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == errorTag || tag == domExcTag ||
    (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * This method is like `_.assignIn` except that it accepts `customizer`
 * which is invoked to produce the assigned values. If `customizer` returns
 * `undefined`, assignment is handled by the method instead. The `customizer`
 * is invoked with five arguments: (objValue, srcValue, key, object, source).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extendWith
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @see _.assignWith
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   return _.isUndefined(objValue) ? srcValue : objValue;
 * }
 *
 * var defaults = _.partialRight(_.assignInWith, customizer);
 *
 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
  copyObject(source, keysIn(source), object, customizer);
});

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

/**
 * Creates a compiled template function that can interpolate data properties
 * in "interpolate" delimiters, HTML-escape interpolated data properties in
 * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
 * properties may be accessed as free variables in the template. If a setting
 * object is given, it takes precedence over `_.templateSettings` values.
 *
 * **Note:** In the development build `_.template` utilizes
 * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
 * for easier debugging.
 *
 * For more information on precompiling templates see
 * [lodash's custom builds documentation](https://lodash.com/custom-builds).
 *
 * For more information on Chrome extension sandboxes see
 * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category String
 * @param {string} [string=''] The template string.
 * @param {Object} [options={}] The options object.
 * @param {RegExp} [options.escape=_.templateSettings.escape]
 *  The HTML "escape" delimiter.
 * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
 *  The "evaluate" delimiter.
 * @param {Object} [options.imports=_.templateSettings.imports]
 *  An object to import into the template as free variables.
 * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
 *  The "interpolate" delimiter.
 * @param {string} [options.sourceURL='templateSources[n]']
 *  The sourceURL of the compiled template.
 * @param {string} [options.variable='obj']
 *  The data object variable name.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Function} Returns the compiled template function.
 * @example
 *
 * // Use the "interpolate" delimiter to create a compiled template.
 * var compiled = _.template('hello <%= user %>!');
 * compiled({ 'user': 'fred' });
 * // => 'hello fred!'
 *
 * // Use the HTML "escape" delimiter to escape data property values.
 * var compiled = _.template('<b><%- value %></b>');
 * compiled({ 'value': '<script>' });
 * // => '<b>&lt;script&gt;</b>'
 *
 * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
 * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
 * compiled({ 'users': ['fred', 'barney'] });
 * // => '<li>fred</li><li>barney</li>'
 *
 * // Use the internal `print` function in "evaluate" delimiters.
 * var compiled = _.template('<% print("hello " + user); %>!');
 * compiled({ 'user': 'barney' });
 * // => 'hello barney!'
 *
 * // Use the ES template literal delimiter as an "interpolate" delimiter.
 * // Disable support by replacing the "interpolate" delimiter.
 * var compiled = _.template('hello ${ user }!');
 * compiled({ 'user': 'pebbles' });
 * // => 'hello pebbles!'
 *
 * // Use backslashes to treat delimiters as plain text.
 * var compiled = _.template('<%= "\\<%- value %\\>" %>');
 * compiled({ 'value': 'ignored' });
 * // => '<%- value %>'
 *
 * // Use the `imports` option to import `jQuery` as `jq`.
 * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
 * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
 * compiled({ 'users': ['fred', 'barney'] });
 * // => '<li>fred</li><li>barney</li>'
 *
 * // Use the `sourceURL` option to specify a custom sourceURL for the template.
 * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
 * compiled(data);
 * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
 *
 * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
 * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
 * compiled.source;
 * // => function(data) {
 * //   var __t, __p = '';
 * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
 * //   return __p;
 * // }
 *
 * // Use custom template delimiters.
 * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
 * var compiled = _.template('hello {{ user }}!');
 * compiled({ 'user': 'mustache' });
 * // => 'hello mustache!'
 *
 * // Use the `source` property to inline compiled templates for meaningful
 * // line numbers in error messages and stack traces.
 * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
 *   var JST = {\
 *     "main": ' + _.template(mainText).source + '\
 *   };\
 * ');
 */
function template(string, options, guard) {
  // Based on John Resig's `tmpl` implementation
  // (http://ejohn.org/blog/javascript-micro-templating/)
  // and Laura Doktorova's doT.js (https://github.com/olado/doT).
  var settings = templateSettings.imports._.templateSettings || templateSettings;

  if (guard && isIterateeCall(string, options, guard)) {
    options = undefined;
  }
  string = toString(string);
  options = assignInWith({}, options, settings, customDefaultsAssignIn);

  var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn),
      importsKeys = keys(imports),
      importsValues = baseValues(imports, importsKeys);

  var isEscaping,
      isEvaluating,
      index = 0,
      interpolate = options.interpolate || reNoMatch,
      source = "__p += '";

  // Compile the regexp to match each delimiter.
  var reDelimiters = RegExp(
    (options.escape || reNoMatch).source + '|' +
    interpolate.source + '|' +
    (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
    (options.evaluate || reNoMatch).source + '|$'
  , 'g');

  // Use a sourceURL for easier debugging.
  // The sourceURL gets injected into the source that's eval-ed, so be careful
  // with lookup (in case of e.g. prototype pollution), and strip newlines if any.
  // A newline wouldn't be a valid sourceURL anyway, and it'd enable code injection.
  var sourceURL = hasOwnProperty.call(options, 'sourceURL')
    ? ('//# sourceURL=' +
       (options.sourceURL + '').replace(/[\r\n]/g, ' ') +
       '\n')
    : '';

  string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
    interpolateValue || (interpolateValue = esTemplateValue);

    // Escape characters that can't be included in string literals.
    source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

    // Replace delimiters with snippets.
    if (escapeValue) {
      isEscaping = true;
      source += "' +\n__e(" + escapeValue + ") +\n'";
    }
    if (evaluateValue) {
      isEvaluating = true;
      source += "';\n" + evaluateValue + ";\n__p += '";
    }
    if (interpolateValue) {
      source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
    }
    index = offset + match.length;

    // The JS engine embedded in Adobe products needs `match` returned in
    // order to produce the correct `offset` value.
    return match;
  });

  source += "';\n";

  // If `variable` is not specified wrap a with-statement around the generated
  // code to add the data object to the top of the scope chain.
  // Like with sourceURL, we take care to not check the option's prototype,
  // as this configuration is a code injection vector.
  var variable = hasOwnProperty.call(options, 'variable') && options.variable;
  if (!variable) {
    source = 'with (obj) {\n' + source + '\n}\n';
  }
  // Cleanup code by stripping empty strings.
  source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
    .replace(reEmptyStringMiddle, '$1')
    .replace(reEmptyStringTrailing, '$1;');

  // Frame code as the function body.
  source = 'function(' + (variable || 'obj') + ') {\n' +
    (variable
      ? ''
      : 'obj || (obj = {});\n'
    ) +
    "var __t, __p = ''" +
    (isEscaping
       ? ', __e = _.escape'
       : ''
    ) +
    (isEvaluating
      ? ', __j = Array.prototype.join;\n' +
        "function print() { __p += __j.call(arguments, '') }\n"
      : ';\n'
    ) +
    source +
    'return __p\n}';

  var result = attempt(function() {
    return Function(importsKeys, sourceURL + 'return ' + source)
      .apply(undefined, importsValues);
  });

  // Provide the compiled function's source by its `toString` method or
  // the `source` property as a convenience for inlining compiled templates.
  result.source = source;
  if (isError(result)) {
    throw result;
  }
  return result;
}

/**
 * Attempts to invoke `func`, returning either the result or the caught error
 * object. Any additional arguments are provided to `func` when it's invoked.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Util
 * @param {Function} func The function to attempt.
 * @param {...*} [args] The arguments to invoke `func` with.
 * @returns {*} Returns the `func` result or error object.
 * @example
 *
 * // Avoid throwing errors for invalid selectors.
 * var elements = _.attempt(function(selector) {
 *   return document.querySelectorAll(selector);
 * }, '>_>');
 *
 * if (_.isError(elements)) {
 *   elements = [];
 * }
 */
var attempt = baseRest(function(func, args) {
  try {
    return apply(func, undefined, args);
  } catch (e) {
    return isError(e) ? e : new Error(e);
  }
});

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = template;

},{"lodash._reinterpolate":"node_modules/lodash._reinterpolate/index.js","lodash.templatesettings":"node_modules/lodash.templatesettings/index.js"}],"node_modules/lodash.isequal/index.js":[function(require,module,exports) {
var global = arguments[3];

/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = isEqual;

},{}],"node_modules/turf-meta/index.js":[function(require,module,exports) {
/**
 * Lazily iterate over coordinates in any GeoJSON object, similar to
 * Array.forEach.
 *
 * @param {Object} layer any GeoJSON object
 * @param {Function} callback a method that takes (value)
 * @param {boolean=} excludeWrapCoord whether or not to include
 * the final coordinate of LinearRings that wraps the ring in its iteration.
 * @example
 * var point = { type: 'Point', coordinates: [0, 0] };
 * coordEach(point, function(coords) {
 *   // coords is equal to [0, 0]
 * });
 */
function coordEach(layer, callback, excludeWrapCoord) {
  var i, j, k, g, geometry, stopG, coords,
    geometryMaybeCollection,
    wrapShrink = 0,
    isGeometryCollection,
    isFeatureCollection = layer.type === 'FeatureCollection',
    isFeature = layer.type === 'Feature',
    stop = isFeatureCollection ? layer.features.length : 1;

  // This logic may look a little weird. The reason why it is that way
  // is because it's trying to be fast. GeoJSON supports multiple kinds
  // of objects at its root: FeatureCollection, Features, Geometries.
  // This function has the responsibility of handling all of them, and that
  // means that some of the `for` loops you see below actually just don't apply
  // to certain inputs. For instance, if you give this just a
  // Point geometry, then both loops are short-circuited and all we do
  // is gradually rename the input until it's called 'geometry'.
  //
  // This also aims to allocate as few resources as possible: just a
  // few numbers and booleans, rather than any temporary arrays as would
  // be required with the normalization approach.
  for (i = 0; i < stop; i++) {

    geometryMaybeCollection = (isFeatureCollection ? layer.features[i].geometry :
        (isFeature ? layer.geometry : layer));
    isGeometryCollection = geometryMaybeCollection.type === 'GeometryCollection';
    stopG = isGeometryCollection ? geometryMaybeCollection.geometries.length : 1;

    for (g = 0; g < stopG; g++) {

      geometry = isGeometryCollection ?
          geometryMaybeCollection.geometries[g] : geometryMaybeCollection;
      coords = geometry.coordinates;

      wrapShrink = (excludeWrapCoord &&
        (geometry.type === 'Polygon' || geometry.type === 'MultiPolygon')) ?
        1 : 0;

      if (geometry.type === 'Point') {
        callback(coords);
      } else if (geometry.type === 'LineString' || geometry.type === 'MultiPoint') {
        for (j = 0; j < coords.length; j++) callback(coords[j]);
      } else if (geometry.type === 'Polygon' || geometry.type === 'MultiLineString') {
        for (j = 0; j < coords.length; j++)
          for (k = 0; k < coords[j].length - wrapShrink; k++)
            callback(coords[j][k]);
      } else if (geometry.type === 'MultiPolygon') {
        for (j = 0; j < coords.length; j++)
          for (k = 0; k < coords[j].length; k++)
            for (l = 0; l < coords[j][k].length - wrapShrink; l++)
              callback(coords[j][k][l]);
      } else {
        throw new Error('Unknown Geometry Type');
      }
    }
  }
}
module.exports.coordEach = coordEach;

/**
 * Lazily reduce coordinates in any GeoJSON object into a single value,
 * similar to how Array.reduce works. However, in this case we lazily run
 * the reduction, so an array of all coordinates is unnecessary.
 *
 * @param {Object} layer any GeoJSON object
 * @param {Function} callback a method that takes (memo, value) and returns
 * a new memo
 * @param {boolean=} excludeWrapCoord whether or not to include
 * the final coordinate of LinearRings that wraps the ring in its iteration.
 * @param {*} memo the starting value of memo: can be any type.
 */
function coordReduce(layer, callback, memo, excludeWrapCoord) {
  coordEach(layer, function(coord) {
    memo = callback(memo, coord);
  }, excludeWrapCoord);
  return memo;
}
module.exports.coordReduce = coordReduce;

/**
 * Lazily iterate over property objects in any GeoJSON object, similar to
 * Array.forEach.
 *
 * @param {Object} layer any GeoJSON object
 * @param {Function} callback a method that takes (value)
 * @example
 * var point = { type: 'Feature', geometry: null, properties: { foo: 1 } };
 * propEach(point, function(props) {
 *   // props is equal to { foo: 1}
 * });
 */
function propEach(layer, callback) {
  var i;
  switch (layer.type) {
      case 'FeatureCollection':
        features = layer.features;
        for (i = 0; i < layer.features.length; i++) {
            callback(layer.features[i].properties);
        }
        break;
      case 'Feature':
        callback(layer.properties);
        break;
  }
}
module.exports.propEach = propEach;

/**
 * Lazily reduce properties in any GeoJSON object into a single value,
 * similar to how Array.reduce works. However, in this case we lazily run
 * the reduction, so an array of all properties is unnecessary.
 *
 * @param {Object} layer any GeoJSON object
 * @param {Function} callback a method that takes (memo, coord) and returns
 * a new memo
 * @param {*} memo the starting value of memo: can be any type.
 */
function propReduce(layer, callback, memo) {
  propEach(layer, function(prop) {
    memo = callback(memo, prop);
  });
  return memo;
}
module.exports.propReduce = propReduce;

},{}],"node_modules/turf-extent/index.js":[function(require,module,exports) {
var each = require('turf-meta').coordEach;

/**
 * Takes any {@link GeoJSON} object, calculates the extent of all input features, and returns a bounding box.
 *
 * @module turf/extent
 * @category measurement
 * @param {GeoJSON} input any valid GeoJSON Object
 * @return {Array<number>} the bounding box of `input` given
 * as an array in WSEN order (west, south, east, north)
 * @example
 * var input = {
 *   "type": "FeatureCollection",
 *   "features": [
 *     {
 *       "type": "Feature",
 *       "properties": {},
 *       "geometry": {
 *         "type": "Point",
 *         "coordinates": [114.175329, 22.2524]
 *       }
 *     }, {
 *       "type": "Feature",
 *       "properties": {},
 *       "geometry": {
 *         "type": "Point",
 *         "coordinates": [114.170007, 22.267969]
 *       }
 *     }, {
 *       "type": "Feature",
 *       "properties": {},
 *       "geometry": {
 *         "type": "Point",
 *         "coordinates": [114.200649, 22.274641]
 *       }
 *     }, {
 *       "type": "Feature",
 *       "properties": {},
 *       "geometry": {
 *         "type": "Point",
 *         "coordinates": [114.186744, 22.265745]
 *       }
 *     }
 *   ]
 * };
 *
 * var bbox = turf.extent(input);
 *
 * var bboxPolygon = turf.bboxPolygon(bbox);
 *
 * var resultFeatures = input.features.concat(bboxPolygon);
 * var result = {
 *   "type": "FeatureCollection",
 *   "features": resultFeatures
 * };
 *
 * //=result
 */
module.exports = function(layer) {
    var extent = [Infinity, Infinity, -Infinity, -Infinity];
    each(layer, function(coord) {
      if (extent[0] > coord[0]) extent[0] = coord[0];
      if (extent[1] > coord[1]) extent[1] = coord[1];
      if (extent[2] < coord[0]) extent[2] = coord[0];
      if (extent[3] < coord[1]) extent[3] = coord[1];
    });
    return extent;
};

},{"turf-meta":"node_modules/turf-meta/index.js"}],"node_modules/parcel/src/builtins/_empty.js":[function(require,module,exports) {

},{}],"node_modules/@mapbox/mapbox-gl-directions/src/controls/inputs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _geocoder = _interopRequireDefault(require("./geocoder"));

var _lodash = _interopRequireDefault(require("lodash.template"));

var _lodash2 = _interopRequireDefault(require("lodash.isequal"));

var _turfExtent = _interopRequireDefault(require("turf-extent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var fs = require('fs'); // substack/brfs#39


var tmpl = (0, _lodash.default)("<div class='mapbox-directions-component mapbox-directions-inputs'>\n  <div class='mapbox-directions-component-keyline'>\n    <div class='mapbox-directions-origin'>\n      <label class='mapbox-form-label'>\n        <span class='directions-icon directions-icon-depart'></span>\n      </label>\n      <div id='mapbox-directions-origin-input'></div>\n    </div>\n\n    <button\n      class='directions-icon directions-icon-reverse directions-reverse js-reverse-inputs'\n      title='Reverse origin &amp; destination'>\n    </button>\n\n    <div class='mapbox-directions-destination'>\n      <label class='mapbox-form-label'>\n        <span class='directions-icon directions-icon-arrive'></span>\n      </label>\n      <div id='mapbox-directions-destination-input'></div>\n    </div>\n  </div>\n\n  <% if (controls.profileSwitcher) { %>\n  <div class='mapbox-directions-profile mapbox-directions-component-keyline mapbox-directions-clearfix'><input\n      id='mapbox-directions-profile-driving-traffic'\n      type='radio'\n      name='profile'\n      value='mapbox/driving-traffic'\n      <% if (profile === 'mapbox/driving-traffic') { %>checked<% } %>\n    />\n    <label for='mapbox-directions-profile-driving-traffic'>Traffic</label>\n    <input\n      id='mapbox-directions-profile-driving'\n      type='radio'\n      name='profile'\n      value='mapbox/driving'\n      <% if (profile === 'mapbox/driving') { %>checked<% } %>\n    />\n    <label for='mapbox-directions-profile-driving'>Driving</label>\n    <input\n      id='mapbox-directions-profile-walking'\n      type='radio'\n      name='profile'\n      value='mapbox/walking'\n      <% if (profile === 'mapbox/walking') { %>checked<% } %>\n    />\n    <label for='mapbox-directions-profile-walking'>Walking</label>\n    <input\n      id='mapbox-directions-profile-cycling'\n      type='radio'\n      name='profile'\n      value='mapbox/cycling'\n      <% if (profile === 'mapbox/cycling') { %>checked<% } %>\n    />\n    <label for='mapbox-directions-profile-cycling'>Cycling</label>\n  </div>\n  <% } %>\n</div>\n");
/**
 * Inputs controller
 *
 * @param {HTMLElement} el Summary parent container
 * @param {Object} store A redux store
 * @param {Object} actions Actions an element can dispatch
 * @param {Object} map The mapboxgl instance
 * @private
 */

var Inputs = /*#__PURE__*/function () {
  function Inputs(el, store, actions, map) {
    _classCallCheck(this, Inputs);

    var _store$getState = store.getState(),
        originQuery = _store$getState.originQuery,
        destinationQuery = _store$getState.destinationQuery,
        profile = _store$getState.profile,
        controls = _store$getState.controls;

    el.innerHTML = tmpl({
      originQuery: originQuery,
      destinationQuery: destinationQuery,
      profile: profile,
      controls: controls
    });
    this.container = el;
    this.actions = actions;
    this.store = store;
    this._map = map;
    this.onAdd();
    this.render();
  }

  _createClass(Inputs, [{
    key: "animateToCoordinates",
    value: function animateToCoordinates(mode, coords) {
      var _this$store$getState = this.store.getState(),
          origin = _this$store$getState.origin,
          destination = _this$store$getState.destination,
          routePadding = _this$store$getState.routePadding;

      if (origin.geometry && destination.geometry && !(0, _lodash2.default)(origin.geometry, destination.geometry)) {
        // Animate map to fit bounds.
        var bb = (0, _turfExtent.default)({
          type: 'FeatureCollection',
          features: [origin, destination]
        });

        this._map.fitBounds([[bb[0], bb[1]], [bb[2], bb[3]]], {
          padding: routePadding
        });
      } else {
        this._map.flyTo({
          center: coords
        });
      }
    }
  }, {
    key: "onAdd",
    value: function onAdd() {
      var _this = this;

      var _this$actions = this.actions,
          clearOrigin = _this$actions.clearOrigin,
          clearDestination = _this$actions.clearDestination,
          createOrigin = _this$actions.createOrigin,
          createDestination = _this$actions.createDestination,
          setProfile = _this$actions.setProfile,
          reverse = _this$actions.reverse;

      var _this$store$getState2 = this.store.getState(),
          geocoder = _this$store$getState2.geocoder,
          accessToken = _this$store$getState2.accessToken,
          flyTo = _this$store$getState2.flyTo,
          placeholderOrigin = _this$store$getState2.placeholderOrigin,
          placeholderDestination = _this$store$getState2.placeholderDestination,
          zoom = _this$store$getState2.zoom;

      this.originInput = new _geocoder.default(Object.assign({}, {
        accessToken: accessToken
      }, geocoder, {
        flyTo: flyTo,
        placeholder: placeholderOrigin,
        zoom: zoom
      }));
      var originEl = this.originInput.onAdd(this._map);
      var originContainerEl = this.container.querySelector('#mapbox-directions-origin-input');
      originContainerEl.appendChild(originEl);
      this.destinationInput = new _geocoder.default(Object.assign({}, {
        accessToken: accessToken
      }, geocoder, {
        flyTo: flyTo,
        placeholder: placeholderDestination,
        zoom: zoom
      }));
      var destinationEl = this.destinationInput.onAdd(this._map);
      this.container.querySelector('#mapbox-directions-destination-input').appendChild(destinationEl);
      this.originInput.on('result', function (e) {
        var coords = e.result.center;
        createOrigin(coords);

        _this.animateToCoordinates('origin', coords);
      });
      this.originInput.on('clear', clearOrigin);
      this.destinationInput.on('result', function (e) {
        var coords = e.result.center;
        createDestination(coords);

        _this.animateToCoordinates('destination', coords);
      });
      this.destinationInput.on('clear', clearDestination); // Driving / Walking / Cycling profiles

      var profiles = this.container.querySelectorAll('input[type="radio"]');
      Array.prototype.forEach.call(profiles, function (el) {
        el.addEventListener('change', function () {
          setProfile(el.value);
        });
      }); // Reversing Origin / Destination

      this.container.querySelector('.js-reverse-inputs').addEventListener('click', function () {
        var _this$store$getState3 = _this.store.getState(),
            origin = _this$store$getState3.origin,
            destination = _this$store$getState3.destination;

        if (origin) _this.actions.queryDestination(origin.geometry.coordinates);
        if (destination) _this.actions.queryOrigin(destination.geometry.coordinates);
        reverse();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      this.store.subscribe(function () {
        var _this2$store$getState = _this2.store.getState(),
            originQuery = _this2$store$getState.originQuery,
            destinationQuery = _this2$store$getState.destinationQuery,
            originQueryCoordinates = _this2$store$getState.originQueryCoordinates,
            destinationQueryCoordinates = _this2$store$getState.destinationQueryCoordinates;

        if (originQuery) {
          _this2.originInput.query(originQuery);

          _this2.actions.queryOrigin(null);
        }

        if (destinationQuery) {
          _this2.destinationInput.query(destinationQuery);

          _this2.actions.queryDestination(null);
        }

        if (originQueryCoordinates) {
          _this2.originInput.setInput(originQueryCoordinates);

          _this2.animateToCoordinates('origin', originQueryCoordinates);

          _this2.actions.queryOriginCoordinates(null);
        }

        if (destinationQueryCoordinates) {
          _this2.destinationInput.setInput(destinationQueryCoordinates);

          _this2.animateToCoordinates('destination', destinationQueryCoordinates);

          _this2.actions.queryDestinationCoordinates(null);
        }
      });
    }
  }]);

  return Inputs;
}();

exports.default = Inputs;
},{"./geocoder":"node_modules/@mapbox/mapbox-gl-directions/src/controls/geocoder.js","lodash.template":"node_modules/lodash.template/index.js","lodash.isequal":"node_modules/lodash.isequal/index.js","turf-extent":"node_modules/turf-extent/index.js","fs":"node_modules/parcel/src/builtins/_empty.js"}],"node_modules/@mapbox/mapbox-gl-directions/src/controls/instructions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = _interopRequireDefault(require("../utils"));

var _lodash = _interopRequireDefault(require("lodash.template"));

var _lodash2 = _interopRequireDefault(require("lodash.isequal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var fs = require('fs'); // substack/brfs#39


var instructionsTemplate = (0, _lodash.default)("<div class='directions-control directions-control-directions'>\n  <div class='mapbox-directions-component mapbox-directions-route-summary<% if (routes > 1) { %> mapbox-directions-multiple<% } %>'>\n    <% if (routes > 1) { %>\n    <div class='mapbox-directions-routes mapbox-directions-clearfix'>\n      <% for (var i = 0; i < routes; i++) { %>\n        <input type='radio' name='routes' id='<%= i %>' <% if (i === routeIndex) { %>checked<% } %>>\n        <label for='<%= i %>' class='mapbox-directions-route'><%= i + 1 %></label>\n      <% } %>\n    </div>\n    <% } %>\n    <h1><%- duration %></h1>\n    <span><%- distance %></span>\n  </div>\n\n  <div class='mapbox-directions-instructions'>\n    <div class='mapbox-directions-instructions-wrapper'>\n      <ol class='mapbox-directions-steps'>\n        <% steps.forEach(function(step) { %>\n          <%\n            var distance = step.distance ? format(step.distance) : false;\n            var icon = step.maneuver.modifier ? step.maneuver.modifier.replace(/\\s+/g, '-').toLowerCase() : step.maneuver.type.replace(/\\s+/g, '-').toLowerCase();\n\n            if (step.maneuver.type === 'arrive' || step.maneuver.type === 'depart') {\n              icon = step.maneuver.type;\n            }\n\n            if (step.maneuver.type === 'roundabout' || step.maneuver.type === 'rotary') {\n              icon= 'roundabout';\n            }\n\n            var lng = step.maneuver.location[0];\n            var lat = step.maneuver.location[1];\n          %>\n          <li\n            data-lat='<%= lat %>'\n            data-lng='<%= lng %>'\n            class='mapbox-directions-step'>\n            <span class='directions-icon directions-icon-<%= icon %>'></span>\n            <div class='mapbox-directions-step-maneuver'>\n              <%= step.maneuver.instruction %>\n            </div>\n            <% if (distance) { %>\n              <div class='mapbox-directions-step-distance'>\n                <%= distance %>\n              </div>\n            <% } %>\n          </li>\n        <% }); %>\n      </ol>\n    </div>\n  </div>\n</div>\n");
var errorTemplate = (0, _lodash.default)("<div class='directions-control directions-control-directions'>\n  <div class='mapbox-directions-error'>\n    <%= error %>\n  </div>\n</div>\n");
/**
 * Summary/Instructions controller
 *
 * @param {HTMLElement} el Summary parent container
 * @param {Object} store A redux store
 * @param {Object} actions Actions an element can dispatch
 * @param {Object} map The mapboxgl instance
 * @private
 */

var Instructions = /*#__PURE__*/function () {
  function Instructions(el, store, actions, map) {
    _classCallCheck(this, Instructions);

    this.container = el;
    this.actions = actions;
    this.store = store;
    this._map = map;
    this.directions = {};
    this.render();
  }

  _createClass(Instructions, [{
    key: "render",
    value: function render() {
      var _this = this;

      this.store.subscribe(function () {
        var _this$actions = _this.actions,
            hoverMarker = _this$actions.hoverMarker,
            setRouteIndex = _this$actions.setRouteIndex;

        var _this$store$getState = _this.store.getState(),
            routeIndex = _this$store$getState.routeIndex,
            unit = _this$store$getState.unit,
            directions = _this$store$getState.directions,
            error = _this$store$getState.error,
            compile = _this$store$getState.compile;

        var shouldRender = !(0, _lodash2.default)(directions[routeIndex], _this.directions);

        if (error) {
          _this.container.innerHTML = errorTemplate({
            error: error
          });
          return;
        }

        if (directions.length && shouldRender) {
          var direction = _this.directions = directions[routeIndex];

          if (compile) {
            direction.legs.forEach(function (leg) {
              leg.steps.forEach(function (step) {
                step.maneuver.instruction = compile('en', step);
              });
            });
          }

          _this.container.innerHTML = instructionsTemplate({
            routeIndex: routeIndex,
            routes: directions.length,
            steps: direction.legs[0].steps,
            // Todo: Respect all legs,
            format: _utils.default.format[unit],
            duration: _utils.default.format[unit](direction.distance),
            distance: _utils.default.format.duration(direction.duration)
          });

          var steps = _this.container.querySelectorAll('.mapbox-directions-step');

          Array.prototype.forEach.call(steps, function (el) {
            var lng = el.getAttribute('data-lng');
            var lat = el.getAttribute('data-lat');
            el.addEventListener('mouseover', function () {
              hoverMarker([lng, lat]);
            });
            el.addEventListener('mouseout', function () {
              hoverMarker(null);
            });
            el.addEventListener('click', function () {
              _this._map.flyTo({
                center: [lng, lat],
                zoom: 16
              });
            });
          });

          var routes = _this.container.querySelectorAll('input[type="radio"]');

          Array.prototype.forEach.call(routes, function (el) {
            el.addEventListener('change', function (e) {
              setRouteIndex(parseInt(e.target.id, 10));
            });
          });
        } else if (_this.container.innerHTML && shouldRender) {
          _this.container.innerHTML = '';
        }
      });
    }
  }]);

  return Instructions;
}();

exports.default = Instructions;
},{"../utils":"node_modules/@mapbox/mapbox-gl-directions/src/utils.js","lodash.template":"node_modules/lodash.template/index.js","lodash.isequal":"node_modules/lodash.isequal/index.js","fs":"node_modules/parcel/src/builtins/_empty.js"}],"node_modules/@mapbox/mapbox-gl-directions/src/directions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _polyline = require("@mapbox/polyline");

var _utils = _interopRequireDefault(require("./utils"));

var _reducers = _interopRequireDefault(require("./reducers"));

var actions = _interopRequireWildcard(require("./actions"));

var _directions_style = _interopRequireDefault(require("./directions_style"));

var _inputs = _interopRequireDefault(require("./controls/inputs"));

var _instructions = _interopRequireDefault(require("./controls/instructions"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var storeWithMiddleware = (0, _redux.applyMiddleware)(_reduxThunk.default)(_redux.createStore);
var store = storeWithMiddleware(_reducers.default); // State object management via redux

/**
 * The Directions control
 * @class MapboxDirections
 *
 * @param {Object} options
 * @param {Array} [options.styles] Override default layer properties of the [directions source](https://github.com/mapbox/mapbox-gl-directions/blob/master/src/directions_style.js). Documentation for each property are specified in the [Mapbox GL Style Reference](https://www.mapbox.com/mapbox-gl-style-spec/).
 * @param {String} [options.accessToken=null] Required unless `mapboxgl.accessToken` is set globally
 * @param {String} [options.api="https://api.mapbox.com/directions/v5/"] Override default routing endpoint url
 * @param {Boolean} [options.interactive=true] Enable/Disable mouse or touch interactivity from the plugin
 * @param {String} [options.profile="mapbox/driving-traffic"] Routing profile to use. Options: `mapbox/driving-traffic`, `mapbox/driving`, `mapbox/walking`, `mapbox/cycling`
 * @param {Boolean} [options.alternatives=false] Whether to enable alternatives.
 * @param {Boolean} [options.congestion=false] Whether to enable congestion along the route line.
 * @param {String} [options.unit="imperial"] Measurement system to be used in navigation instructions. Options: `imperial`, `metric`
 * @param {Function} [options.compile=null] Provide a custom function for generating instruction, compatible with osrm-text-instructions.
 * @param {Object} [options.geocoder] Accepts an object containing the query parameters as [documented here](https://www.mapbox.com/api-documentation/#search-for-places).
 * @param {Object} [options.controls]
 * @param {Boolean} [options.controls.inputs=true] Hide or display the inputs control.
 * @param {Boolean} [options.controls.instructions=true] Hide or display the instructions control.
 * @param {Boolean} [options.controls.profileSwitcher=true] Hide or display the default profile switch with options for traffic, driving, walking and cycling.
 * @param {Number} [options.zoom=16] If no bbox exists from the geocoder result, the zoom you set here will be used in the flyTo.
 * @param {String} [options.language="en"] The language of returned turn-by-turn text instructions. See supported languages : https://docs.mapbox.com/api/navigation/#instructions-languages
 * @param {String} [options.placeholderOrigin="Choose a starting place"] If set, this text will appear as the placeholder attribute for the origin input element.
 * @param {String} [options.placeholderDestination="Choose destination"] If set, this text will appear as the placeholder attribute for the destination input element.
 * @param {Boolean} [options.flyTo=true] If false, animating the map to a selected result is disabled.
 * @param {String} [options.exclude=null] Exclude certain road types from routing. The default is to not exclude anything. Search for `exclude` in `optional parameters`: https://docs.mapbox.com/api/navigation/#retrieve-directions
 * @param {number | PaddingOptions} [options.routePadding=80] Specify padding surrounding route. A single number of pixels or a [PaddingOptions](https://docs.mapbox.com/mapbox-gl-js/api/#paddingoptions) object.
 * @example
 * var MapboxDirections = require('../src/index');
 * var directions = new MapboxDirections({
 *   accessToken: 'YOUR-MAPBOX-ACCESS-TOKEN',
 *   unit: 'metric',
 *   profile: 'mapbox/cycling'
 * });
 * // add to your mapboxgl map
 * map.addControl(directions);
 *
 * @return {MapboxDirections} `this`
 */
var MapboxDirections = /*#__PURE__*/function () {
  function MapboxDirections(options) {
    _classCallCheck(this, MapboxDirections);

    this.actions = (0, _redux.bindActionCreators)(actions, store.dispatch);
    this.actions.setOptions(options || {});
    this.options = options || {};
    this.onDragDown = this._onDragDown.bind(this);
    this.onDragMove = this._onDragMove.bind(this);
    this.onDragUp = this._onDragUp.bind(this);
    this.move = this._move.bind(this);
    this.onClick = this._clickHandler().bind(this);
  }

  _createClass(MapboxDirections, [{
    key: "onAdd",
    value: function onAdd(map) {
      var _this = this;

      this._map = map;

      var _store$getState = store.getState(),
          controls = _store$getState.controls;

      var el = this.container = document.createElement('div');
      el.className = 'mapboxgl-ctrl-directions mapboxgl-ctrl'; // Add controls to the page

      var inputEl = document.createElement('div');
      inputEl.className = 'directions-control directions-control-inputs';
      new _inputs.default(inputEl, store, this.actions, this._map);
      var directionsEl = document.createElement('div');
      directionsEl.className = 'directions-control directions-control-instructions';
      new _instructions.default(directionsEl, store, {
        hoverMarker: this.actions.hoverMarker,
        setRouteIndex: this.actions.setRouteIndex
      }, this._map);
      if (controls.inputs) el.appendChild(inputEl);
      if (controls.instructions) el.appendChild(directionsEl);
      this.subscribedActions();
      if (this._map.loaded()) this.mapState();else this._map.on('load', function () {
        return _this.mapState();
      });
      return el;
    }
    /**
     * Removes the control from the map it has been added to. This is called by `map.removeControl`,
     * which is the recommended method to remove controls.
     *
     * @returns {Control} `this`
     */

  }, {
    key: "onRemove",
    value: function onRemove(map) {
      this.container.parentNode.removeChild(this.container);
      this.removeRoutes();
      map.off('mousedown', this.onDragDown);
      map.off('mousemove', this.move);
      map.off('touchstart', this.onDragDown);
      map.off('touchstart', this.move);
      map.off('click', this.onClick);

      if (this.storeUnsubscribe) {
        this.storeUnsubscribe();
        delete this.storeUnsubscribe;
      }

      _directions_style.default.forEach(function (layer) {
        if (map.getLayer(layer.id)) map.removeLayer(layer.id);
      });

      if (map.getSource('directions')) map.removeSource('directions');
      this._map = null;
      return this;
    }
  }, {
    key: "mapState",
    value: function mapState() {
      var _this2 = this;

      var _store$getState2 = store.getState(),
          profile = _store$getState2.profile,
          alternatives = _store$getState2.alternatives,
          congestion = _store$getState2.congestion,
          styles = _store$getState2.styles,
          interactive = _store$getState2.interactive,
          compile = _store$getState2.compile; // Emit any default or option set config


      this.actions.eventEmit('profile', {
        profile: profile
      });
      var geojson = {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: []
        }
      }; // Add and set data theme layer/style

      this._map.addSource('directions', geojson); // Add direction specific styles to the map


      if (styles && styles.length) styles.forEach(function (style) {
        return _this2._map.addLayer(style);
      });

      _directions_style.default.forEach(function (style) {
        // only add the default style layer if a custom layer wasn't provided
        if (!_this2._map.getLayer(style.id)) _this2._map.addLayer(style);
      });

      if (interactive) {
        this._map.on('mousedown', this.onDragDown);

        this._map.on('mousemove', this.move);

        this._map.on('click', this.onClick);

        this._map.on('touchstart', this.move);

        this._map.on('touchstart', this.onDragDown);
      }
    }
  }, {
    key: "subscribedActions",
    value: function subscribedActions() {
      var _this3 = this;

      this.storeUnsubscribe = store.subscribe(function () {
        var _store$getState3 = store.getState(),
            origin = _store$getState3.origin,
            destination = _store$getState3.destination,
            hoverMarker = _store$getState3.hoverMarker,
            directions = _store$getState3.directions,
            routeIndex = _store$getState3.routeIndex;

        var geojson = {
          type: 'FeatureCollection',
          features: [origin, destination, hoverMarker].filter(function (d) {
            return d.geometry;
          })
        };

        if (directions.length) {
          directions.forEach(function (feature, index) {
            var features = [];
            var decoded = (0, _polyline.decode)(feature.geometry, 5).map(function (c) {
              return c.reverse();
            });
            decoded.forEach(function (c, i) {
              var previous = features[features.length - 1];
              var congestion = feature.legs[0].annotation && feature.legs[0].annotation.congestion && feature.legs[0].annotation.congestion[i - 1];

              if (previous && (!congestion || previous.properties.congestion === congestion)) {
                previous.geometry.coordinates.push(c);
              } else {
                var segment = {
                  geometry: {
                    type: 'LineString',
                    coordinates: []
                  },
                  properties: {
                    'route-index': index,
                    route: index === routeIndex ? 'selected' : 'alternate'
                  }
                }; // New segment starts with previous segment's last coordinate.

                if (previous) segment.geometry.coordinates.push(previous.geometry.coordinates[previous.geometry.coordinates.length - 1]);
                segment.geometry.coordinates.push(c);

                if (congestion) {
                  segment.properties.congestion = feature.legs[0].annotation.congestion[i - 1];
                }

                features.push(segment);
              }
            });
            geojson.features = geojson.features.concat(features);

            if (index === routeIndex) {
              // Collect any possible waypoints from steps
              feature.legs[0].steps.forEach(function (d) {
                if (d.maneuver.type === 'waypoint') {
                  geojson.features.push({
                    type: 'Feature',
                    geometry: d.maneuver.location,
                    properties: {
                      id: 'waypoint'
                    }
                  });
                }
              });
            }
          });
        }

        if (_this3._map.style && _this3._map.getSource('directions')) {
          _this3._map.getSource('directions').setData(geojson);
        }
      });
    }
  }, {
    key: "_clickHandler",
    value: function _clickHandler() {
      var timer = null;
      var delay = 250;
      return function (event) {
        if (!timer) {
          var singleClickHandler = this._onSingleClick.bind(this);

          timer = setTimeout(function () {
            singleClickHandler(event);
            timer = null;
          }, delay);
        } else {
          clearTimeout(timer);
          timer = null;

          this._map.zoomIn();
        }
      };
    }
  }, {
    key: "_onSingleClick",
    value: function _onSingleClick(e) {
      var _this4 = this;

      var _store$getState4 = store.getState(),
          origin = _store$getState4.origin;

      var coords = [e.lngLat.lng, e.lngLat.lat];

      if (!origin.geometry) {
        this.actions.setOriginFromCoordinates(coords);
      } else {
        var features = this._map.queryRenderedFeatures(e.point, {
          layers: ['directions-origin-point', 'directions-destination-point', 'directions-waypoint-point', 'directions-route-line-alt']
        });

        if (features.length) {
          // Remove any waypoints
          features.forEach(function (f) {
            if (f.layer.id === 'directions-waypoint-point') {
              _this4.actions.removeWaypoint(f);
            }
          });

          if (features[0].properties.route === 'alternate') {
            var index = features[0].properties['route-index'];
            this.actions.setRouteIndex(index);
          }
        } else {
          this.actions.setDestinationFromCoordinates(coords);

          this._map.flyTo({
            center: coords
          });
        }
      }
    }
  }, {
    key: "_move",
    value: function _move(e) {
      var _this5 = this;

      var _store$getState5 = store.getState(),
          hoverMarker = _store$getState5.hoverMarker;

      var features = this._map.queryRenderedFeatures(e.point, {
        layers: ['directions-route-line-alt', 'directions-route-line', 'directions-origin-point', 'directions-destination-point', 'directions-hover-point']
      });

      this._map.getCanvas().style.cursor = features.length ? 'pointer' : '';

      if (features.length) {
        this.isCursorOverPoint = features[0];

        this._map.dragPan.disable(); // Add a possible waypoint marker when hovering over the active route line


        features.forEach(function (feature) {
          if (feature.layer.id === 'directions-route-line') {
            _this5.actions.hoverMarker([e.lngLat.lng, e.lngLat.lat]);
          } else if (hoverMarker.geometry) {
            _this5.actions.hoverMarker(null);
          }
        });
      } else if (this.isCursorOverPoint) {
        this.isCursorOverPoint = false;

        this._map.dragPan.enable();
      }
    }
  }, {
    key: "_onDragDown",
    value: function _onDragDown() {
      if (!this.isCursorOverPoint) return;
      this.isDragging = this.isCursorOverPoint;
      this._map.getCanvas().style.cursor = 'grab';

      this._map.on('mousemove', this.onDragMove);

      this._map.on('mouseup', this.onDragUp);

      this._map.on('touchmove', this.onDragMove);

      this._map.on('touchend', this.onDragUp);
    }
  }, {
    key: "_onDragMove",
    value: function _onDragMove(e) {
      if (!this.isDragging) return;
      var coords = [e.lngLat.lng, e.lngLat.lat];

      switch (this.isDragging.layer.id) {
        case 'directions-origin-point':
          this.actions.createOrigin(coords);
          break;

        case 'directions-destination-point':
          this.actions.createDestination(coords);
          break;

        case 'directions-hover-point':
          this.actions.hoverMarker(coords);
          break;
      }
    }
  }, {
    key: "_onDragUp",
    value: function _onDragUp() {
      if (!this.isDragging) return;

      var _store$getState6 = store.getState(),
          hoverMarker = _store$getState6.hoverMarker,
          origin = _store$getState6.origin,
          destination = _store$getState6.destination;

      switch (this.isDragging.layer.id) {
        case 'directions-origin-point':
          this.actions.setOriginFromCoordinates(origin.geometry.coordinates);
          break;

        case 'directions-destination-point':
          this.actions.setDestinationFromCoordinates(destination.geometry.coordinates);
          break;

        case 'directions-hover-point':
          // Add waypoint if a sufficent amount of dragging has occurred.
          if (hoverMarker.geometry && !_utils.default.coordinateMatch(this.isDragging, hoverMarker)) {
            this.actions.addWaypoint(0, hoverMarker);
          }

          break;
      }

      this.isDragging = false;
      this._map.getCanvas().style.cursor = '';

      this._map.off('touchmove', this.onDragMove);

      this._map.off('touchend', this.onDragUp);

      this._map.off('mousemove', this.onDragMove);

      this._map.off('mouseup', this.onDragUp);
    } // API Methods
    // ============================

    /**
     * Turn on or off interactivity
     * @param {Boolean} state sets interactivity based on a state of `true` or `false`.
     * @returns {MapboxDirections} this
     */

  }, {
    key: "interactive",
    value: function interactive(state) {
      if (state) {
        this._map.on('touchstart', this.move);

        this._map.on('touchstart', this.onDragDown);

        this._map.on('mousedown', this.onDragDown);

        this._map.on('mousemove', this.move);

        this._map.on('click', this.onClick);
      } else {
        this._map.off('touchstart', this.move);

        this._map.off('touchstart', this.onDragDown);

        this._map.off('mousedown', this.onDragDown);

        this._map.off('mousemove', this.move);

        this._map.off('click', this.onClick);
      }

      return this;
    }
    /**
     * Returns the origin of the current route.
     * @returns {Object} origin
     */

  }, {
    key: "getOrigin",
    value: function getOrigin() {
      return store.getState().origin;
    }
    /**
     * Sets origin. _Note:_ calling this method requires the [map load event](https://www.mapbox.com/mapbox-gl-js/api/#Map.load)
     * to have run.
     * @param {Array<number>|String} query An array of coordinates [lng, lat] or location name as a string.
     * @returns {MapboxDirections} this
     */

  }, {
    key: "setOrigin",
    value: function setOrigin(query) {
      if (typeof query === 'string') {
        this.actions.queryOrigin(query);
      } else {
        this.actions.setOriginFromCoordinates(query);
      }

      return this;
    }
    /**
     * Returns the destination of the current route.
     * @returns {Object} destination
     */

  }, {
    key: "getDestination",
    value: function getDestination() {
      return store.getState().destination;
    }
    /**
     * Sets destination. _Note:_ calling this method requires the [map load event](https://www.mapbox.com/mapbox-gl-js/api/#Map.load)
     * to have run.
     * @param {Array<number>|String} query An array of coordinates [lng, lat] or location name as a string.
     * @returns {MapboxDirections} this
     */

  }, {
    key: "setDestination",
    value: function setDestination(query) {
      if (typeof query === 'string') {
        this.actions.queryDestination(query);
      } else {
        this.actions.setDestinationFromCoordinates(query);
      }

      return this;
    }
    /**
     * Swap the origin and destination.
     * @returns {MapboxDirections} this
     */

  }, {
    key: "reverse",
    value: function reverse() {
      this.actions.reverse();
      return this;
    }
    /**
     * Add a waypoint to the route. _Note:_ calling this method requires the
     * [map load event](https://www.mapbox.com/mapbox-gl-js/api/#Map.load) to have run.
     * @param {Number} index position waypoint should be placed in the waypoint array
     * @param {Array<number>|Point} waypoint can be a GeoJSON Point Feature or [lng, lat] coordinates.
     * @returns {MapboxDirections} this;
     */

  }, {
    key: "addWaypoint",
    value: function addWaypoint(index, waypoint) {
      if (!waypoint.type) waypoint = _utils.default.createPoint(waypoint, {
        id: 'waypoint'
      });
      this.actions.addWaypoint(index, waypoint);
      return this;
    }
    /**
     * Change the waypoint at a given index in the route. _Note:_ calling this
     * method requires the [map load event](https://www.mapbox.com/mapbox-gl-js/api/#Map.load)
     * to have run.
     * @param {Number} index indexed position of the waypoint to update
     * @param {Array<number>|Point} waypoint can be a GeoJSON Point Feature or [lng, lat] coordinates.
     * @returns {MapboxDirections} this;
     */

  }, {
    key: "setWaypoint",
    value: function setWaypoint(index, waypoint) {
      if (!waypoint.type) waypoint = _utils.default.createPoint(waypoint, {
        id: 'waypoint'
      });
      this.actions.setWaypoint(index, waypoint);
      return this;
    }
    /**
     * Remove a waypoint from the route.
     * @param {Number} index position in the waypoints array.
     * @returns {MapboxDirections} this;
     */

  }, {
    key: "removeWaypoint",
    value: function removeWaypoint(index) {
      var _store$getState7 = store.getState(),
          waypoints = _store$getState7.waypoints;

      this.actions.removeWaypoint(waypoints[index]);
      return this;
    }
    /**
     * Fetch all current waypoints in a route.
     * @returns {Array} waypoints
     */

  }, {
    key: "getWaypoints",
    value: function getWaypoints() {
      return store.getState().waypoints;
    }
    /**
     * Removes all routes and waypoints from the map.
     *
     * @returns {MapboxDirections} this;
     */

  }, {
    key: "removeRoutes",
    value: function removeRoutes() {
      this.actions.clearOrigin();
      this.actions.clearDestination();
      return this;
    }
    /**
     * Subscribe to events that happen within the plugin.
     * @param {String} type name of event. Available events and the data passed into their respective event objects are:
     *
     * - __clear__ `{ type: } Type is one of 'origin' or 'destination'`
     * - __loading__ `{ type: } Type is one of 'origin' or 'destination'`
     * - __profile__ `{ profile } Profile is one of 'driving', 'walking', or 'cycling'`
     * - __origin__ `{ feature } Fired when origin is set`
     * - __destination__ `{ feature } Fired when destination is set`
     * - __route__ `{ route } Fired when a route is updated`
     * - __error__ `{ error } Error as string`
     * @param {Function} fn function that's called when the event is emitted.
     * @returns {MapboxDirections} this;
     */

  }, {
    key: "on",
    value: function on(type, fn) {
      this.actions.eventSubscribe(type, fn);
      return this;
    }
  }]);

  return MapboxDirections;
}();

exports.default = MapboxDirections;
},{"redux":"node_modules/redux/es/index.js","redux-thunk":"node_modules/redux-thunk/es/index.js","@mapbox/polyline":"node_modules/@mapbox/polyline/src/polyline.js","./utils":"node_modules/@mapbox/mapbox-gl-directions/src/utils.js","./reducers":"node_modules/@mapbox/mapbox-gl-directions/src/reducers/index.js","./actions":"node_modules/@mapbox/mapbox-gl-directions/src/actions/index.js","./directions_style":"node_modules/@mapbox/mapbox-gl-directions/src/directions_style.js","./controls/inputs":"node_modules/@mapbox/mapbox-gl-directions/src/controls/inputs.js","./controls/instructions":"node_modules/@mapbox/mapbox-gl-directions/src/controls/instructions.js"}],"node_modules/@mapbox/mapbox-gl-directions/src/index.js":[function(require,module,exports) {
"use strict";

var _directions = _interopRequireDefault(require("./directions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _directions.default;
},{"./directions":"node_modules/@mapbox/mapbox-gl-directions/src/directions.js"}],"Kiambu_county.js":[function(require,module,exports) {
var kiambu = {
  type: "FeatureCollection",
  name: "Kiambu_county",
  crs: {
    type: "name",
    properties: {
      name: "urn:ogc:def:crs:OGC:1.3:CRS84"
    }
  },
  features: [{
    type: "Feature",
    properties: {
      OBJECTID: 22.0,
      ID_: 4921.0,
      COUNTY_NAM: "KIAMBU",
      CONST_CODE: 112.0,
      CONSTITUEN: "GATUNDU NORTH",
      COUNTY_COD: 22.0,
      Shape_Leng: 3.0089218262199999,
      Shape_Area: 0.20655368085
    },
    geometry: {
      type: "Polygon",
      coordinates: [[[36.686770107483191, -0.764234238679253], [36.690495980483199, -0.768140394679224], [36.693913949483196, -0.770764906679235], [36.696111214483203, -0.77424391067922], [36.699101937483185, -0.777539808679253], [36.702703011483202, -0.782178480679252], [36.706914437483185, -0.784741957679219], [36.709905160483167, -0.788037855679252], [36.712102425483174, -0.791761000679233], [36.715093148483156, -0.795362074679249], [36.717534554483159, -0.798841078679234], [36.719487679483159, -0.802259047679231], [36.720891488483169, -0.805371839679256], [36.725713265483186, -0.809278089679256], [36.727727425483174, -0.811475355679252], [36.731694711483151, -0.812146742679263], [36.735539925483174, -0.81434400767927], [36.73914100048318, -0.817273695679264], [36.741887582483166, -0.818982679679268], [36.74414588248316, -0.82197340267925], [36.745732796483189, -0.824658949679249], [36.747685921483189, -0.828870375679233], [36.751897347483172, -0.833081800679227], [36.755742562483185, -0.832959730679252], [36.759099496483195, -0.833570082679219], [36.76453162548318, -0.83314283667926], [36.768743050483174, -0.83314283667926], [36.771916879483165, -0.833448011679254], [36.774907601483157, -0.834851820679264], [36.778935921483189, -0.837232191679223], [36.782720101483157, -0.841260511679254], [36.785527718483188, -0.841748793679246], [36.787724984483184, -0.843762953679234], [36.790898812483185, -0.845655043679246], [36.79492713248316, -0.84736402767925], [36.798345101483157, -0.850232679679268], [36.802495492483153, -0.852246839679256], [36.80469275748316, -0.854444105679252], [36.806340707483166, -0.857068617679263], [36.810491097483172, -0.858472425679227], [36.814519418483194, -0.860547621679248], [36.817693246483195, -0.862866957679219], [36.821904671483189, -0.864636976679267], [36.825688851483157, -0.86707838267927], [36.82813025748316, -0.870435316679223], [36.8342948084832, -0.874646742679263], [36.837102425483174, -0.875257093679241], [36.839543832483166, -0.877637464679256], [36.843694222483172, -0.878552992679263], [36.848088754483165, -0.881360609679237], [36.852544320483155, -0.883252699679249], [36.856511605483199, -0.883252699679249], [36.859929574483196, -0.884046156679235], [36.862309945483155, -0.88783033667926], [36.865300668483194, -0.890576918679246], [36.86914588248316, -0.891065199679249], [36.87250281648317, -0.891980726679267], [36.875493539483152, -0.893079359679237], [36.878545296483189, -0.893262464679256], [36.880925668483194, -0.89637525767927], [36.884343636483202, -0.897840101679267], [36.887700570483155, -0.896863539679262], [36.889897836483151, -0.89954908667926], [36.889897836483151, -0.903882582679219], [36.892339242483153, -0.908338148679266], [36.895085824483196, -0.911878187679238], [36.89929725048318, -0.912183363679221], [36.904119027483198, -0.913281996679248], [36.908330453483181, -0.915052015679239], [36.908940804483159, -0.918164808679253], [36.911931527483198, -0.922132093679241], [36.914311898483156, -0.927075941679223], [36.918340218483188, -0.930982191679223], [36.922307504483165, -0.933362562679238], [36.9241385584832, -0.936170179679268], [36.928288949483196, -0.936231214679256], [36.933293832483166, -0.941175062679238], [36.939092171483189, -0.94416578567922], [36.943303597483172, -0.946546156679235], [36.945500863483169, -0.950574476679267], [36.948918832483166, -0.952161390679239], [36.957097543483194, -0.958448011679254], [36.960088265483186, -0.965283949679249], [36.962529671483189, -0.967847425679227], [36.964116586483151, -0.971448500679233], [36.966496957483166, -0.974439222679225], [36.973332894483171, -0.976758558679253], [36.97852088248316, -0.977552015679239], [36.982488168483194, -0.979932386679254], [36.984502328483181, -0.983045179679268], [36.98773719148317, -0.98518141067922], [36.991521371483195, -0.989575941679223], [36.995488656483182, -0.992261488679221], [37.001103890483186, -0.996472914679262], [37.00531531648317, -0.999036390679239], [37.012944711483151, -1.005445082679219], [37.015325082483166, -1.007031996679248], [37.017522347483172, -1.009534437679238], [37.02094031648317, -1.01057203567922], [37.023931039483152, -1.012769300679227], [37.025517953483181, -1.016675550679227], [37.028142464483203, -1.018567640679239], [37.031133187483185, -1.024365980679252], [37.031743539483152, -1.02723463267927], [37.033696664483152, -1.029370863679221], [37.038091195483155, -1.031262953679234], [37.041142953483181, -1.032178480679252], [37.048345101483157, -1.033765394679224], [37.051518929483159, -1.034131605679252], [37.05469275748316, -1.032178480679252], [37.057744515483186, -1.029676039679262], [37.061345589483203, -1.02815016067922], [37.063115609483184, -1.023145277679251], [37.061101449483196, -1.016248304679268], [37.062688363483169, -1.013257582679219], [37.064885629483165, -1.016248304679268], [37.068913949483196, -1.018872816679223], [37.068730843483188, -1.022656996679248], [37.069097054483159, -1.026074964679256], [37.072087777483198, -1.026380140679239], [37.075322640483186, -1.027967054679268], [37.078740609483184, -1.030652601679267], [37.081914437483185, -1.030835707679219], [37.088689339483203, -1.033826429679268], [37.093694222483172, -1.033643324679249], [37.098699105483199, -1.036878187679238], [37.103337777483198, -1.034864027679251], [37.108098519483171, -1.036573011679254], [37.111516488483169, -1.039380629679274], [37.11609412548318, -1.041272718679241], [37.118291390483186, -1.043469984679237], [37.121709359483184, -1.050855238679221], [37.124944222483172, -1.053357679679268], [37.127324593483188, -1.051282484679237], [37.13031531648317, -1.050366957679219], [37.133916390483186, -1.048841078679234], [37.136296761483202, -1.050366957679219], [37.139714730483199, -1.050733168679247], [37.144109261483202, -1.04963453567922], [37.148137582483166, -1.05067213267927], [37.151494515483186, -1.052747328679234], [37.154912484483184, -1.053235609679237], [37.156926644483171, -1.050244886679254], [37.160893929483159, -1.04993971167926], [37.165105355483199, -1.048841078679234], [37.170293343483188, -1.045545179679268], [37.173528207483166, -1.044568617679263], [37.175908578483181, -1.042249281679235], [37.176518929483159, -1.037366468679241], [37.178105843483188, -1.034558851679267], [37.184331429483159, -1.038343031679235], [37.189336312483185, -1.040357191679223], [37.192327035483167, -1.04285963267927], [37.19531775748316, -1.041761000679233], [37.198308480483199, -1.040967543679247], [37.202336800483174, -1.037671644679224], [37.205693734483184, -1.035474379679274], [37.210088265483186, -1.034436781679235], [37.214543832483166, -1.034253675679227], [37.216924203483181, -1.030042250679233], [37.219487679483159, -1.027967054679268], [37.222295296483189, -1.026929457679219], [37.225286019483171, -1.027173597679225], [37.227117074483196, -1.024182875679233], [37.231938851483157, -1.018872816679223], [37.237493050483174, -1.022962172679231], [37.240300668483194, -1.024671156679235], [37.244695199483196, -1.025464613679221], [37.249333871483195, -1.023145277679251], [37.254338754483165, -1.020948011679254], [37.257329476483157, -1.019849379679274], [37.265691293483194, -1.018872816679223], [37.268498910483167, -1.022351820679264], [37.270696175483174, -1.025464613679221], [37.273931039483152, -1.027539808679253], [37.277532113483169, -1.031446058679253], [37.279729379483165, -1.034375746679248], [37.281133187483185, -1.037671644679224], [37.284307015483186, -1.039441664679262], [37.285710824483196, -1.042554457679219], [37.288945687483185, -1.044873793679247], [37.290532601483157, -1.047376234679237], [37.292729867483153, -1.049573500679233], [37.295537484483184, -1.051343519679224], [37.302312386483202, -1.05744703567922], [37.306523812483185, -1.061536390679239], [37.309331429483159, -1.064954359679237], [37.311711800483174, -1.067456800679227], [37.314702523483156, -1.065747816679223], [37.317693246483195, -1.067334730679252], [37.322698129483165, -1.074048597679225], [37.323918832483166, -1.077039320679264], [37.326726449483196, -1.078870375679233], [37.330510629483165, -1.078565199679249], [37.332524789483152, -1.080640394679224], [37.335515511483202, -1.082166273679266], [37.339726937483185, -1.081067640679239], [37.345342171483189, -1.087476332679219], [37.348088754483165, -1.091260511679254], [37.352910531483182, -1.093152601679267], [37.358342660483167, -1.092542250679233], [37.362493050483174, -1.095166761679254], [37.359319222483172, -1.100537855679252], [37.346501839483203, -1.115430433679253], [37.343144906483182, -1.118665297679231], [37.341313851483157, -1.116162855679252], [37.339726937483185, -1.113538343679241], [37.334111703483181, -1.107740004679274], [37.331731332483166, -1.10627516067922], [37.32953406648317, -1.103955824679249], [37.327519906483182, -1.100965101679267], [37.32312537548318, -1.097241957679219], [37.320134652483198, -1.095838148679266], [37.318303597483172, -1.093457777679251], [37.316289437483185, -1.091382582679219], [37.313725961483151, -1.08778150767927], [37.309331429483159, -1.083753187679238], [37.305913461483151, -1.081677992679263], [37.303533089483203, -1.078565199679249], [37.299321664483152, -1.074353773679266], [37.296514046483189, -1.07307203567922], [37.2913260584832, -1.072339613679221], [37.287724984483184, -1.071240980679252], [37.284123910483167, -1.069043714679256], [37.27930213248316, -1.067578871679248], [37.274541390483186, -1.068555433679253], [37.271306527483198, -1.068982679679268], [37.268132699483196, -1.068982679679268], [37.26453162548318, -1.069531996679248], [37.261113656483182, -1.071057875679233], [37.258733285483167, -1.072766859679237], [37.255742562483185, -1.07533033667926], [37.252324593483188, -1.077954847679225], [37.249944222483172, -1.079541761679254], [37.245122445483155, -1.079480726679267], [37.24109412548318, -1.078565199679249], [37.234136117483153, -1.07606275767927], [37.22852088248316, -1.076428968679241], [37.224309457483166, -1.07893141067922], [37.212712777483198, -1.080152113679221], [37.206120980483199, -1.085462172679231], [37.203496468483188, -1.088758070679264], [37.200139535483167, -1.091382582679219], [37.195928109483184, -1.093152601679267], [37.192937386483202, -1.095044691679223], [37.19031287548318, -1.099073011679254], [37.18890906648317, -1.105664808679253], [37.186528695483155, -1.107678968679241], [37.183110726483157, -1.108960707679219], [37.17969275748316, -1.111463148679266], [37.176335824483196, -1.115979750679233], [37.175115121483195, -1.119763929679268], [37.178105843483188, -1.123365004679274], [37.17969275748316, -1.12806471167926], [37.181890023483156, -1.130384047679231], [37.184514535483167, -1.13465650767927], [37.187322152483198, -1.138745863679221], [37.185735238483169, -1.141248304679268], [37.184331429483159, -1.144666273679266], [37.185735238483169, -1.149060804679268], [37.183721078483181, -1.15315016067922], [37.181706918483194, -1.156446058679253], [37.18250037548318, -1.161756117679263], [37.182927621483195, -1.165967543679247], [37.180913461483151, -1.168958265679239], [37.177312386483202, -1.171582777679251], [37.174504769483171, -1.174146254679274], [37.168340218483188, -1.185071547679231], [37.166692269483171, -1.188550550679227], [37.163945687483185, -1.191480238679221], [37.161138070483155, -1.193860609679237], [37.157292855483199, -1.194837172679231], [37.156499398483156, -1.199231703679234], [37.158086312483185, -1.20197828567922], [37.159734261483202, -1.205762464679256], [37.156316293483194, -1.206983168679247], [37.15430213248316, -1.209241468679241], [37.156316293483194, -1.212354261679254], [37.15570594148317, -1.216443617679263], [37.15570594148317, -1.219739515679239], [37.154546273483156, -1.22254713267927], [37.151311410483167, -1.225537855679252], [37.144902718483188, -1.225843031679235], [37.141728890483186, -1.22645338267927], [37.139714730483199, -1.229566175679227], [37.137334359483184, -1.232556898679266], [37.133916390483186, -1.233838636679254], [37.130132211483151, -1.233655531679235], [37.126531136483202, -1.233167250679233], [37.123540414483152, -1.234876234679237], [37.119512093483188, -1.239453871679248], [37.119512093483188, -1.246961195679264], [37.116887582483166, -1.248548109679237], [37.113896859483184, -1.247876722679225], [37.110112679483159, -1.248426039679262], [37.110295785483167, -1.258863050679227], [37.106511605483199, -1.260266859679237], [37.103093636483202, -1.260938246679248], [37.094304574483196, -1.255078871679248], [37.087529671483189, -1.248975355679252], [37.095525277483198, -1.244763929679268], [37.091496957483166, -1.237866957679219], [37.087712778483187, -1.234143812679238], [37.08093787548318, -1.237256605679252], [37.073491586483151, -1.22376783667926], [37.07031775748316, -1.217664320679264], [37.061711800483174, -1.206372816679223], [37.058110726483157, -1.208570082679219], [37.054936898483156, -1.206861097679225], [37.048100961483151, -1.209241468679241], [37.044133675483174, -1.210279066679223], [37.038091195483155, -1.213269789679262], [37.033940804483159, -1.216748793679247], [37.031743539483152, -1.219983656679235], [37.023931039483152, -1.223828871679248], [37.02094031648317, -1.226880629679274], [37.016545785483167, -1.228467543679247], [37.013738168483194, -1.23158033667926], [37.012700570483155, -1.235364515679239], [37.008306039483152, -1.236035902679251], [37.003728402483198, -1.236035902679251], [37.001103890483186, -1.234754164679262], [36.997685921483189, -1.233350355679252], [36.995305550483174, -1.231458265679239], [36.991887582483166, -1.225354750679233], [36.988713754483165, -1.224073011679254], [36.985295785483167, -1.22346266067922], [36.982305062483185, -1.224256117679263], [36.979131234483184, -1.224744398679266], [36.971501839483203, -1.228162367679263], [36.964543832483166, -1.228833754679274], [36.961308968483188, -1.227735121679248], [36.958501351483157, -1.228833754679274], [36.947515023483156, -1.225965101679267], [36.939092171483189, -1.222180922679231], [36.933110726483157, -1.221936781679235], [36.925115121483195, -1.218152601679267], [36.922124398483156, -1.217176039679262], [36.919499886483202, -1.214551527679251], [36.916509164483152, -1.212476332679219], [36.914128793483194, -1.208570082679219], [36.915898812483185, -1.204663832679219], [36.917912972483172, -1.20228346167926], [36.926518929483159, -1.192945082679219], [36.931890023483156, -1.187451918679247], [36.940740121483195, -1.177930433679253], [36.9417166834832, -1.174329359679237], [36.938298714483203, -1.171948988679221], [36.934331429483159, -1.170056898679266], [36.930730355483199, -1.168836195679264], [36.926946175483174, -1.168164808679253], [36.9241385584832, -1.165662367679263], [36.92133094148317, -1.164441664679262], [36.919499886483202, -1.162183363679221], [36.915898812483185, -1.161573011679254], [36.912297738483169, -1.161450941679223], [36.908086312483185, -1.161573011679254], [36.902104867483153, -1.160535414679262], [36.897710336483151, -1.161328871679248], [36.89453650748316, -1.168531019679224], [36.889104379483165, -1.174329359679237], [36.890691293483194, -1.176953871679248], [36.8928885584832, -1.18153150767927], [36.89594031648317, -1.18665846167926], [36.896916879483165, -1.191663343679241], [36.893743050483174, -1.193738539679262], [36.890691293483194, -1.193555433679253], [36.887334359483184, -1.195569593679241], [36.883733285483167, -1.196179945679264], [36.878545296483189, -1.196363050679227], [36.87390662548318, -1.195874769679224], [36.870122445483155, -1.19447096167926], [36.866338265483186, -1.192151625679233], [36.863896859483184, -1.190442640679239], [36.860112680483205, -1.201856214679256], [36.857121957483166, -1.201734144679224], [36.852727425483174, -1.202649672679231], [36.850713265483186, -1.208570082679219], [36.850102914483152, -1.213147718679241], [36.833318246483195, -1.209058363679221], [36.834722054483159, -1.214856703679234], [36.799321664483152, -1.195264418679247], [36.790898812483185, -1.191541273679266], [36.787724984483184, -1.198560316679223], [36.784917367483153, -1.202832777679251], [36.785344613483169, -1.206067640679239], [36.788945687483185, -1.207776625679233], [36.784490121483195, -1.215161879679274], [36.781743539483152, -1.221753675679227], [36.778935921483189, -1.226758558679253], [36.77234412548318, -1.22346266067922], [36.770513070483155, -1.226270277679251], [36.762334359483184, -1.221570570679264], [36.756536019483171, -1.220349867679263], [36.745915902483198, -1.23713453567922], [36.738530648483156, -1.236280043679247], [36.730901254483165, -1.234754164679262], [36.72852088248316, -1.241651136679254], [36.725896371483195, -1.248242933679253], [36.725530160483167, -1.251538832679219], [36.721745980483199, -1.258130629679274], [36.718694222483172, -1.262647230679252], [36.715337289483152, -1.260633070679264], [36.707097543483194, -1.259351332679219], [36.70453406648317, -1.258069593679241], [36.701543343483188, -1.261670668679247], [36.69672156648317, -1.260633070679264], [36.694097054483159, -1.263928968679241], [36.69672156648317, -1.267652113679221], [36.693120492483153, -1.267957289679262], [36.695134652483198, -1.270581800679227], [36.6917166834832, -1.271680433679253], [36.691899789483152, -1.275464613679221], [36.68890906648317, -1.275464613679221], [36.689702523483156, -1.279248793679247], [36.68890906648317, -1.282849867679263], [36.686345589483203, -1.286450941679223], [36.6839041834832, -1.293469984679237], [36.681706918483194, -1.298047621679248], [36.678533089483203, -1.301282484679237], [36.674321664483152, -1.307263929679268], [36.670903695483155, -1.306043226679267], [36.6663260584832, -1.313672621679248], [36.663945687483185, -1.31043775767927], [36.662908089483203, -1.305554945679264], [36.660893929483159, -1.303479750679233], [36.649114144483171, -1.300855238679221], [36.609746468483188, -1.293469984679237], [36.605535043483194, -1.291883070679264], [36.58594275748316, -1.28895338267927], [36.573918832483166, -1.286450941679223], [36.564336312483185, -1.284741957679219], [36.525945199483196, -1.277051527679251], [36.5003104334832, -1.272229750679233], [36.492314828483181, -1.269544203679234], [36.503118050483174, -1.255872328679234], [36.515141976483157, -1.242566664679262], [36.5178885584832, -1.225781996679248], [36.522527230483199, -1.209180433679253], [36.527104867483153, -1.194043714679256], [36.535527718483188, -1.164075453679234], [36.538945687483185, -1.150464613679221], [36.545720589483203, -1.126355726679267], [36.548711312483185, -1.12293775767927], [36.554936898483156, -1.116651136679254], [36.558537972483172, -1.111646254679274], [36.568913949483196, -1.101758558679253], [36.572331918483194, -1.099744398679266], [36.574101937483185, -1.096265394679224], [36.578923714483203, -1.087964613679221], [36.587102425483174, -1.072644789679262], [36.591741097483172, -1.068067152679251], [36.591924203483181, -1.061231214679256], [36.591313851483157, -1.052747328679234], [36.590520394483171, -1.048657972679225], [36.588689339483203, -1.043958265679239], [36.589116586483151, -1.038770277679251], [36.591741097483172, -1.033032972679225], [36.5921073084832, -1.025159437679238], [36.594304574483196, -1.015332777679251], [36.59570838248316, -1.011975843679241], [36.59570838248316, -1.007947523679266], [36.596929086483151, -1.001538832679219], [36.597295296483189, -0.997632582679219], [36.598332894483171, -0.993482191679223], [36.597295296483189, -0.985364515679239], [36.593694222483172, -0.985547621679248], [36.590886605483199, -0.983777601679267], [36.588689339483203, -0.979383070679264], [36.587529671483189, -0.97645338267927], [36.588506234483184, -0.965344984679237], [36.587102425483174, -0.962659437679238], [36.58594275748316, -0.959363539679262], [36.581304086483151, -0.949658949679249], [36.578496468483188, -0.946179945679264], [36.574346078483181, -0.944531996679248], [36.569707406483182, -0.945752699679249], [36.565129769483171, -0.942029554679268], [36.562322152483198, -0.939038832679219], [36.566106332483166, -0.93635328567922], [36.570500863483169, -0.933667738679221], [36.573308480483199, -0.932141859679237], [36.570500863483169, -0.929761488679221], [36.567510140483186, -0.928479750679233], [36.563725961483151, -0.928174574679249], [36.560491097483172, -0.927075941679223], [36.554936898483156, -0.926648695679264], [36.556706918483194, -0.919934828679234], [36.565923226483157, -0.914258558679253], [36.571111214483203, -0.910230238679221], [36.564885629483165, -0.90736158667926], [36.566106332483166, -0.903760511679254], [36.58148719148317, -0.892774183679253], [36.584538949483196, -0.89173658667926], [36.58734656648317, -0.889966566679223], [36.590337289483152, -0.88856275767927], [36.592290414483152, -0.885633070679264], [36.593511117483153, -0.882154066679223], [36.595342171483189, -0.877942640679239], [36.598699105483199, -0.871472914679262], [36.601689828483181, -0.863843519679224], [36.598943246483195, -0.858838636679254], [36.596135629483165, -0.854444105679252], [36.592900765483186, -0.850232679679268], [36.591496957483166, -0.844373304679268], [36.589543832483166, -0.82923658667926], [36.596745980483199, -0.82893141067922], [36.605107796483189, -0.82996900767927], [36.609319222483172, -0.830762464679256], [36.613896859483184, -0.830945570679264], [36.619512093483188, -0.831433851679267], [36.622930062483185, -0.831372816679223], [36.622685921483189, -0.828076918679246], [36.630498421483189, -0.820569593679241], [36.633489144483171, -0.81806715267925], [36.636907113483169, -0.814038832679219], [36.67133094148317, -0.78205641067922], [36.673528207483166, -0.77845533667926], [36.667912972483172, -0.776136000679233], [36.66351844148317, -0.774854261679254], [36.660893929483159, -0.773450453679234], [36.657720101483157, -0.77314527767925], [36.654546273483156, -0.773633558679253], [36.650517953483181, -0.77454908667926], [36.64648963248316, -0.773084242679263], [36.6507010584832, -0.768445570679264], [36.655522836483151, -0.765760023679266], [36.659490121483195, -0.768079359679237], [36.662908089483203, -0.767774183679253], [36.666509164483152, -0.763745863679221], [36.669499886483202, -0.761243422679231], [36.673345101483157, -0.759961683679253], [36.68250037548318, -0.762464125679233], [36.686770107483191, -0.764234238679253]]]
    }
  }]
};
},{}],"index.ts":[function(require,module,exports) {
var MapboxDirections = require("@mapbox/mapbox-gl-directions");

var kiambu = require("./Kiambu_county");

console.log(kiambu);
mapboxgl.accessToken = "pk.eyJ1IjoiYmVubnl0cm92YXRvIiwiYSI6ImNrZDcwdTVwbTE4amEyem8yZWdkNHN3ZmoifQ.r3Llqtnwfqqju2zfzE-fvA";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [36.777926, -1.058671],
  zoom: 11,
  pitch: 0,
  bearing: 21,
  antialias: true
});
var rootElement = document.createElement("div");
rootElement.classList.add("route-marker");
var positionMarker = new mapboxgl.Marker({
  element: rootElement
});
var geolocateControl = new mapboxgl.GeolocateControl({
  showAccuracyCircle: false
});
map.addControl(geolocateControl);
geolocateControl.on("geolocate", function (_a) {
  var coords = _a.coords;
  console.log(e);
  var _b = e.coords,
      latitude = _b.latitude,
      longitude = _b.longitude;
  console.log(latitude, longitude);
}); // Direction control

var directions = new MapboxDirections({
  accessToken: mapboxgl.accessToken,
  unit: "metric",
  profile: "mapbox/driving"
});
map.addControl(directions, "top-left");
map.on("load", function () {
  map.addSource("kiambu", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      name: "Kiambu_county",
      crs: {
        type: "name",
        properties: {
          name: "urn:ogc:def:crs:OGC:1.3:CRS84"
        }
      },
      features: [{
        type: "Feature",
        properties: {
          OBJECTID: 22.0,
          ID_: 4921.0,
          COUNTY_NAM: "KIAMBU",
          CONST_CODE: 112.0,
          CONSTITUEN: "GATUNDU NORTH",
          COUNTY_COD: 22.0,
          Shape_Leng: 3.0089218262199999,
          Shape_Area: 0.20655368085
        },
        geometry: {
          type: "Polygon",
          coordinates: [[[36.686770107483191, -0.764234238679253], [36.690495980483199, -0.768140394679224], [36.693913949483196, -0.770764906679235], [36.696111214483203, -0.77424391067922], [36.699101937483185, -0.777539808679253], [36.702703011483202, -0.782178480679252], [36.706914437483185, -0.784741957679219], [36.709905160483167, -0.788037855679252], [36.712102425483174, -0.791761000679233], [36.715093148483156, -0.795362074679249], [36.717534554483159, -0.798841078679234], [36.719487679483159, -0.802259047679231], [36.720891488483169, -0.805371839679256], [36.725713265483186, -0.809278089679256], [36.727727425483174, -0.811475355679252], [36.731694711483151, -0.812146742679263], [36.735539925483174, -0.81434400767927], [36.73914100048318, -0.817273695679264], [36.741887582483166, -0.818982679679268], [36.74414588248316, -0.82197340267925], [36.745732796483189, -0.824658949679249], [36.747685921483189, -0.828870375679233], [36.751897347483172, -0.833081800679227], [36.755742562483185, -0.832959730679252], [36.759099496483195, -0.833570082679219], [36.76453162548318, -0.83314283667926], [36.768743050483174, -0.83314283667926], [36.771916879483165, -0.833448011679254], [36.774907601483157, -0.834851820679264], [36.778935921483189, -0.837232191679223], [36.782720101483157, -0.841260511679254], [36.785527718483188, -0.841748793679246], [36.787724984483184, -0.843762953679234], [36.790898812483185, -0.845655043679246], [36.79492713248316, -0.84736402767925], [36.798345101483157, -0.850232679679268], [36.802495492483153, -0.852246839679256], [36.80469275748316, -0.854444105679252], [36.806340707483166, -0.857068617679263], [36.810491097483172, -0.858472425679227], [36.814519418483194, -0.860547621679248], [36.817693246483195, -0.862866957679219], [36.821904671483189, -0.864636976679267], [36.825688851483157, -0.86707838267927], [36.82813025748316, -0.870435316679223], [36.8342948084832, -0.874646742679263], [36.837102425483174, -0.875257093679241], [36.839543832483166, -0.877637464679256], [36.843694222483172, -0.878552992679263], [36.848088754483165, -0.881360609679237], [36.852544320483155, -0.883252699679249], [36.856511605483199, -0.883252699679249], [36.859929574483196, -0.884046156679235], [36.862309945483155, -0.88783033667926], [36.865300668483194, -0.890576918679246], [36.86914588248316, -0.891065199679249], [36.87250281648317, -0.891980726679267], [36.875493539483152, -0.893079359679237], [36.878545296483189, -0.893262464679256], [36.880925668483194, -0.89637525767927], [36.884343636483202, -0.897840101679267], [36.887700570483155, -0.896863539679262], [36.889897836483151, -0.89954908667926], [36.889897836483151, -0.903882582679219], [36.892339242483153, -0.908338148679266], [36.895085824483196, -0.911878187679238], [36.89929725048318, -0.912183363679221], [36.904119027483198, -0.913281996679248], [36.908330453483181, -0.915052015679239], [36.908940804483159, -0.918164808679253], [36.911931527483198, -0.922132093679241], [36.914311898483156, -0.927075941679223], [36.918340218483188, -0.930982191679223], [36.922307504483165, -0.933362562679238], [36.9241385584832, -0.936170179679268], [36.928288949483196, -0.936231214679256], [36.933293832483166, -0.941175062679238], [36.939092171483189, -0.94416578567922], [36.943303597483172, -0.946546156679235], [36.945500863483169, -0.950574476679267], [36.948918832483166, -0.952161390679239], [36.957097543483194, -0.958448011679254], [36.960088265483186, -0.965283949679249], [36.962529671483189, -0.967847425679227], [36.964116586483151, -0.971448500679233], [36.966496957483166, -0.974439222679225], [36.973332894483171, -0.976758558679253], [36.97852088248316, -0.977552015679239], [36.982488168483194, -0.979932386679254], [36.984502328483181, -0.983045179679268], [36.98773719148317, -0.98518141067922], [36.991521371483195, -0.989575941679223], [36.995488656483182, -0.992261488679221], [37.001103890483186, -0.996472914679262], [37.00531531648317, -0.999036390679239], [37.012944711483151, -1.005445082679219], [37.015325082483166, -1.007031996679248], [37.017522347483172, -1.009534437679238], [37.02094031648317, -1.01057203567922], [37.023931039483152, -1.012769300679227], [37.025517953483181, -1.016675550679227], [37.028142464483203, -1.018567640679239], [37.031133187483185, -1.024365980679252], [37.031743539483152, -1.02723463267927], [37.033696664483152, -1.029370863679221], [37.038091195483155, -1.031262953679234], [37.041142953483181, -1.032178480679252], [37.048345101483157, -1.033765394679224], [37.051518929483159, -1.034131605679252], [37.05469275748316, -1.032178480679252], [37.057744515483186, -1.029676039679262], [37.061345589483203, -1.02815016067922], [37.063115609483184, -1.023145277679251], [37.061101449483196, -1.016248304679268], [37.062688363483169, -1.013257582679219], [37.064885629483165, -1.016248304679268], [37.068913949483196, -1.018872816679223], [37.068730843483188, -1.022656996679248], [37.069097054483159, -1.026074964679256], [37.072087777483198, -1.026380140679239], [37.075322640483186, -1.027967054679268], [37.078740609483184, -1.030652601679267], [37.081914437483185, -1.030835707679219], [37.088689339483203, -1.033826429679268], [37.093694222483172, -1.033643324679249], [37.098699105483199, -1.036878187679238], [37.103337777483198, -1.034864027679251], [37.108098519483171, -1.036573011679254], [37.111516488483169, -1.039380629679274], [37.11609412548318, -1.041272718679241], [37.118291390483186, -1.043469984679237], [37.121709359483184, -1.050855238679221], [37.124944222483172, -1.053357679679268], [37.127324593483188, -1.051282484679237], [37.13031531648317, -1.050366957679219], [37.133916390483186, -1.048841078679234], [37.136296761483202, -1.050366957679219], [37.139714730483199, -1.050733168679247], [37.144109261483202, -1.04963453567922], [37.148137582483166, -1.05067213267927], [37.151494515483186, -1.052747328679234], [37.154912484483184, -1.053235609679237], [37.156926644483171, -1.050244886679254], [37.160893929483159, -1.04993971167926], [37.165105355483199, -1.048841078679234], [37.170293343483188, -1.045545179679268], [37.173528207483166, -1.044568617679263], [37.175908578483181, -1.042249281679235], [37.176518929483159, -1.037366468679241], [37.178105843483188, -1.034558851679267], [37.184331429483159, -1.038343031679235], [37.189336312483185, -1.040357191679223], [37.192327035483167, -1.04285963267927], [37.19531775748316, -1.041761000679233], [37.198308480483199, -1.040967543679247], [37.202336800483174, -1.037671644679224], [37.205693734483184, -1.035474379679274], [37.210088265483186, -1.034436781679235], [37.214543832483166, -1.034253675679227], [37.216924203483181, -1.030042250679233], [37.219487679483159, -1.027967054679268], [37.222295296483189, -1.026929457679219], [37.225286019483171, -1.027173597679225], [37.227117074483196, -1.024182875679233], [37.231938851483157, -1.018872816679223], [37.237493050483174, -1.022962172679231], [37.240300668483194, -1.024671156679235], [37.244695199483196, -1.025464613679221], [37.249333871483195, -1.023145277679251], [37.254338754483165, -1.020948011679254], [37.257329476483157, -1.019849379679274], [37.265691293483194, -1.018872816679223], [37.268498910483167, -1.022351820679264], [37.270696175483174, -1.025464613679221], [37.273931039483152, -1.027539808679253], [37.277532113483169, -1.031446058679253], [37.279729379483165, -1.034375746679248], [37.281133187483185, -1.037671644679224], [37.284307015483186, -1.039441664679262], [37.285710824483196, -1.042554457679219], [37.288945687483185, -1.044873793679247], [37.290532601483157, -1.047376234679237], [37.292729867483153, -1.049573500679233], [37.295537484483184, -1.051343519679224], [37.302312386483202, -1.05744703567922], [37.306523812483185, -1.061536390679239], [37.309331429483159, -1.064954359679237], [37.311711800483174, -1.067456800679227], [37.314702523483156, -1.065747816679223], [37.317693246483195, -1.067334730679252], [37.322698129483165, -1.074048597679225], [37.323918832483166, -1.077039320679264], [37.326726449483196, -1.078870375679233], [37.330510629483165, -1.078565199679249], [37.332524789483152, -1.080640394679224], [37.335515511483202, -1.082166273679266], [37.339726937483185, -1.081067640679239], [37.345342171483189, -1.087476332679219], [37.348088754483165, -1.091260511679254], [37.352910531483182, -1.093152601679267], [37.358342660483167, -1.092542250679233], [37.362493050483174, -1.095166761679254], [37.359319222483172, -1.100537855679252], [37.346501839483203, -1.115430433679253], [37.343144906483182, -1.118665297679231], [37.341313851483157, -1.116162855679252], [37.339726937483185, -1.113538343679241], [37.334111703483181, -1.107740004679274], [37.331731332483166, -1.10627516067922], [37.32953406648317, -1.103955824679249], [37.327519906483182, -1.100965101679267], [37.32312537548318, -1.097241957679219], [37.320134652483198, -1.095838148679266], [37.318303597483172, -1.093457777679251], [37.316289437483185, -1.091382582679219], [37.313725961483151, -1.08778150767927], [37.309331429483159, -1.083753187679238], [37.305913461483151, -1.081677992679263], [37.303533089483203, -1.078565199679249], [37.299321664483152, -1.074353773679266], [37.296514046483189, -1.07307203567922], [37.2913260584832, -1.072339613679221], [37.287724984483184, -1.071240980679252], [37.284123910483167, -1.069043714679256], [37.27930213248316, -1.067578871679248], [37.274541390483186, -1.068555433679253], [37.271306527483198, -1.068982679679268], [37.268132699483196, -1.068982679679268], [37.26453162548318, -1.069531996679248], [37.261113656483182, -1.071057875679233], [37.258733285483167, -1.072766859679237], [37.255742562483185, -1.07533033667926], [37.252324593483188, -1.077954847679225], [37.249944222483172, -1.079541761679254], [37.245122445483155, -1.079480726679267], [37.24109412548318, -1.078565199679249], [37.234136117483153, -1.07606275767927], [37.22852088248316, -1.076428968679241], [37.224309457483166, -1.07893141067922], [37.212712777483198, -1.080152113679221], [37.206120980483199, -1.085462172679231], [37.203496468483188, -1.088758070679264], [37.200139535483167, -1.091382582679219], [37.195928109483184, -1.093152601679267], [37.192937386483202, -1.095044691679223], [37.19031287548318, -1.099073011679254], [37.18890906648317, -1.105664808679253], [37.186528695483155, -1.107678968679241], [37.183110726483157, -1.108960707679219], [37.17969275748316, -1.111463148679266], [37.176335824483196, -1.115979750679233], [37.175115121483195, -1.119763929679268], [37.178105843483188, -1.123365004679274], [37.17969275748316, -1.12806471167926], [37.181890023483156, -1.130384047679231], [37.184514535483167, -1.13465650767927], [37.187322152483198, -1.138745863679221], [37.185735238483169, -1.141248304679268], [37.184331429483159, -1.144666273679266], [37.185735238483169, -1.149060804679268], [37.183721078483181, -1.15315016067922], [37.181706918483194, -1.156446058679253], [37.18250037548318, -1.161756117679263], [37.182927621483195, -1.165967543679247], [37.180913461483151, -1.168958265679239], [37.177312386483202, -1.171582777679251], [37.174504769483171, -1.174146254679274], [37.168340218483188, -1.185071547679231], [37.166692269483171, -1.188550550679227], [37.163945687483185, -1.191480238679221], [37.161138070483155, -1.193860609679237], [37.157292855483199, -1.194837172679231], [37.156499398483156, -1.199231703679234], [37.158086312483185, -1.20197828567922], [37.159734261483202, -1.205762464679256], [37.156316293483194, -1.206983168679247], [37.15430213248316, -1.209241468679241], [37.156316293483194, -1.212354261679254], [37.15570594148317, -1.216443617679263], [37.15570594148317, -1.219739515679239], [37.154546273483156, -1.22254713267927], [37.151311410483167, -1.225537855679252], [37.144902718483188, -1.225843031679235], [37.141728890483186, -1.22645338267927], [37.139714730483199, -1.229566175679227], [37.137334359483184, -1.232556898679266], [37.133916390483186, -1.233838636679254], [37.130132211483151, -1.233655531679235], [37.126531136483202, -1.233167250679233], [37.123540414483152, -1.234876234679237], [37.119512093483188, -1.239453871679248], [37.119512093483188, -1.246961195679264], [37.116887582483166, -1.248548109679237], [37.113896859483184, -1.247876722679225], [37.110112679483159, -1.248426039679262], [37.110295785483167, -1.258863050679227], [37.106511605483199, -1.260266859679237], [37.103093636483202, -1.260938246679248], [37.094304574483196, -1.255078871679248], [37.087529671483189, -1.248975355679252], [37.095525277483198, -1.244763929679268], [37.091496957483166, -1.237866957679219], [37.087712778483187, -1.234143812679238], [37.08093787548318, -1.237256605679252], [37.073491586483151, -1.22376783667926], [37.07031775748316, -1.217664320679264], [37.061711800483174, -1.206372816679223], [37.058110726483157, -1.208570082679219], [37.054936898483156, -1.206861097679225], [37.048100961483151, -1.209241468679241], [37.044133675483174, -1.210279066679223], [37.038091195483155, -1.213269789679262], [37.033940804483159, -1.216748793679247], [37.031743539483152, -1.219983656679235], [37.023931039483152, -1.223828871679248], [37.02094031648317, -1.226880629679274], [37.016545785483167, -1.228467543679247], [37.013738168483194, -1.23158033667926], [37.012700570483155, -1.235364515679239], [37.008306039483152, -1.236035902679251], [37.003728402483198, -1.236035902679251], [37.001103890483186, -1.234754164679262], [36.997685921483189, -1.233350355679252], [36.995305550483174, -1.231458265679239], [36.991887582483166, -1.225354750679233], [36.988713754483165, -1.224073011679254], [36.985295785483167, -1.22346266067922], [36.982305062483185, -1.224256117679263], [36.979131234483184, -1.224744398679266], [36.971501839483203, -1.228162367679263], [36.964543832483166, -1.228833754679274], [36.961308968483188, -1.227735121679248], [36.958501351483157, -1.228833754679274], [36.947515023483156, -1.225965101679267], [36.939092171483189, -1.222180922679231], [36.933110726483157, -1.221936781679235], [36.925115121483195, -1.218152601679267], [36.922124398483156, -1.217176039679262], [36.919499886483202, -1.214551527679251], [36.916509164483152, -1.212476332679219], [36.914128793483194, -1.208570082679219], [36.915898812483185, -1.204663832679219], [36.917912972483172, -1.20228346167926], [36.926518929483159, -1.192945082679219], [36.931890023483156, -1.187451918679247], [36.940740121483195, -1.177930433679253], [36.9417166834832, -1.174329359679237], [36.938298714483203, -1.171948988679221], [36.934331429483159, -1.170056898679266], [36.930730355483199, -1.168836195679264], [36.926946175483174, -1.168164808679253], [36.9241385584832, -1.165662367679263], [36.92133094148317, -1.164441664679262], [36.919499886483202, -1.162183363679221], [36.915898812483185, -1.161573011679254], [36.912297738483169, -1.161450941679223], [36.908086312483185, -1.161573011679254], [36.902104867483153, -1.160535414679262], [36.897710336483151, -1.161328871679248], [36.89453650748316, -1.168531019679224], [36.889104379483165, -1.174329359679237], [36.890691293483194, -1.176953871679248], [36.8928885584832, -1.18153150767927], [36.89594031648317, -1.18665846167926], [36.896916879483165, -1.191663343679241], [36.893743050483174, -1.193738539679262], [36.890691293483194, -1.193555433679253], [36.887334359483184, -1.195569593679241], [36.883733285483167, -1.196179945679264], [36.878545296483189, -1.196363050679227], [36.87390662548318, -1.195874769679224], [36.870122445483155, -1.19447096167926], [36.866338265483186, -1.192151625679233], [36.863896859483184, -1.190442640679239], [36.860112680483205, -1.201856214679256], [36.857121957483166, -1.201734144679224], [36.852727425483174, -1.202649672679231], [36.850713265483186, -1.208570082679219], [36.850102914483152, -1.213147718679241], [36.833318246483195, -1.209058363679221], [36.834722054483159, -1.214856703679234], [36.799321664483152, -1.195264418679247], [36.790898812483185, -1.191541273679266], [36.787724984483184, -1.198560316679223], [36.784917367483153, -1.202832777679251], [36.785344613483169, -1.206067640679239], [36.788945687483185, -1.207776625679233], [36.784490121483195, -1.215161879679274], [36.781743539483152, -1.221753675679227], [36.778935921483189, -1.226758558679253], [36.77234412548318, -1.22346266067922], [36.770513070483155, -1.226270277679251], [36.762334359483184, -1.221570570679264], [36.756536019483171, -1.220349867679263], [36.745915902483198, -1.23713453567922], [36.738530648483156, -1.236280043679247], [36.730901254483165, -1.234754164679262], [36.72852088248316, -1.241651136679254], [36.725896371483195, -1.248242933679253], [36.725530160483167, -1.251538832679219], [36.721745980483199, -1.258130629679274], [36.718694222483172, -1.262647230679252], [36.715337289483152, -1.260633070679264], [36.707097543483194, -1.259351332679219], [36.70453406648317, -1.258069593679241], [36.701543343483188, -1.261670668679247], [36.69672156648317, -1.260633070679264], [36.694097054483159, -1.263928968679241], [36.69672156648317, -1.267652113679221], [36.693120492483153, -1.267957289679262], [36.695134652483198, -1.270581800679227], [36.6917166834832, -1.271680433679253], [36.691899789483152, -1.275464613679221], [36.68890906648317, -1.275464613679221], [36.689702523483156, -1.279248793679247], [36.68890906648317, -1.282849867679263], [36.686345589483203, -1.286450941679223], [36.6839041834832, -1.293469984679237], [36.681706918483194, -1.298047621679248], [36.678533089483203, -1.301282484679237], [36.674321664483152, -1.307263929679268], [36.670903695483155, -1.306043226679267], [36.6663260584832, -1.313672621679248], [36.663945687483185, -1.31043775767927], [36.662908089483203, -1.305554945679264], [36.660893929483159, -1.303479750679233], [36.649114144483171, -1.300855238679221], [36.609746468483188, -1.293469984679237], [36.605535043483194, -1.291883070679264], [36.58594275748316, -1.28895338267927], [36.573918832483166, -1.286450941679223], [36.564336312483185, -1.284741957679219], [36.525945199483196, -1.277051527679251], [36.5003104334832, -1.272229750679233], [36.492314828483181, -1.269544203679234], [36.503118050483174, -1.255872328679234], [36.515141976483157, -1.242566664679262], [36.5178885584832, -1.225781996679248], [36.522527230483199, -1.209180433679253], [36.527104867483153, -1.194043714679256], [36.535527718483188, -1.164075453679234], [36.538945687483185, -1.150464613679221], [36.545720589483203, -1.126355726679267], [36.548711312483185, -1.12293775767927], [36.554936898483156, -1.116651136679254], [36.558537972483172, -1.111646254679274], [36.568913949483196, -1.101758558679253], [36.572331918483194, -1.099744398679266], [36.574101937483185, -1.096265394679224], [36.578923714483203, -1.087964613679221], [36.587102425483174, -1.072644789679262], [36.591741097483172, -1.068067152679251], [36.591924203483181, -1.061231214679256], [36.591313851483157, -1.052747328679234], [36.590520394483171, -1.048657972679225], [36.588689339483203, -1.043958265679239], [36.589116586483151, -1.038770277679251], [36.591741097483172, -1.033032972679225], [36.5921073084832, -1.025159437679238], [36.594304574483196, -1.015332777679251], [36.59570838248316, -1.011975843679241], [36.59570838248316, -1.007947523679266], [36.596929086483151, -1.001538832679219], [36.597295296483189, -0.997632582679219], [36.598332894483171, -0.993482191679223], [36.597295296483189, -0.985364515679239], [36.593694222483172, -0.985547621679248], [36.590886605483199, -0.983777601679267], [36.588689339483203, -0.979383070679264], [36.587529671483189, -0.97645338267927], [36.588506234483184, -0.965344984679237], [36.587102425483174, -0.962659437679238], [36.58594275748316, -0.959363539679262], [36.581304086483151, -0.949658949679249], [36.578496468483188, -0.946179945679264], [36.574346078483181, -0.944531996679248], [36.569707406483182, -0.945752699679249], [36.565129769483171, -0.942029554679268], [36.562322152483198, -0.939038832679219], [36.566106332483166, -0.93635328567922], [36.570500863483169, -0.933667738679221], [36.573308480483199, -0.932141859679237], [36.570500863483169, -0.929761488679221], [36.567510140483186, -0.928479750679233], [36.563725961483151, -0.928174574679249], [36.560491097483172, -0.927075941679223], [36.554936898483156, -0.926648695679264], [36.556706918483194, -0.919934828679234], [36.565923226483157, -0.914258558679253], [36.571111214483203, -0.910230238679221], [36.564885629483165, -0.90736158667926], [36.566106332483166, -0.903760511679254], [36.58148719148317, -0.892774183679253], [36.584538949483196, -0.89173658667926], [36.58734656648317, -0.889966566679223], [36.590337289483152, -0.88856275767927], [36.592290414483152, -0.885633070679264], [36.593511117483153, -0.882154066679223], [36.595342171483189, -0.877942640679239], [36.598699105483199, -0.871472914679262], [36.601689828483181, -0.863843519679224], [36.598943246483195, -0.858838636679254], [36.596135629483165, -0.854444105679252], [36.592900765483186, -0.850232679679268], [36.591496957483166, -0.844373304679268], [36.589543832483166, -0.82923658667926], [36.596745980483199, -0.82893141067922], [36.605107796483189, -0.82996900767927], [36.609319222483172, -0.830762464679256], [36.613896859483184, -0.830945570679264], [36.619512093483188, -0.831433851679267], [36.622930062483185, -0.831372816679223], [36.622685921483189, -0.828076918679246], [36.630498421483189, -0.820569593679241], [36.633489144483171, -0.81806715267925], [36.636907113483169, -0.814038832679219], [36.67133094148317, -0.78205641067922], [36.673528207483166, -0.77845533667926], [36.667912972483172, -0.776136000679233], [36.66351844148317, -0.774854261679254], [36.660893929483159, -0.773450453679234], [36.657720101483157, -0.77314527767925], [36.654546273483156, -0.773633558679253], [36.650517953483181, -0.77454908667926], [36.64648963248316, -0.773084242679263], [36.6507010584832, -0.768445570679264], [36.655522836483151, -0.765760023679266], [36.659490121483195, -0.768079359679237], [36.662908089483203, -0.767774183679253], [36.666509164483152, -0.763745863679221], [36.669499886483202, -0.761243422679231], [36.673345101483157, -0.759961683679253], [36.68250037548318, -0.762464125679233], [36.686770107483191, -0.764234238679253]]]
        }
      }]
    }
  });
  map.addLayer({
    id: "kiambu",
    type: "fill",
    source: "kiambu",
    layout: {},
    paint: {
      "fill-outline-color": "#FF0000",
      "fill-color": "#088",
      "fill-opacity": 0.2
    }
  });
}); // todo is load shape files for the tourist site

console.log(rootElement);
},{"@mapbox/mapbox-gl-directions":"node_modules/@mapbox/mapbox-gl-directions/src/index.js","./Kiambu_county":"Kiambu_county.js"}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "41253" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","index.ts"], null)
//# sourceMappingURL=/mapbox.77de5100.js.map