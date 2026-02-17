import {
  require_react_dom
} from "./chunk-35C4W5R3.js";
import {
  __commonJS,
  __export,
  __toESM,
  require_react
} from "./chunk-JRE55LYH.js";

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var React5 = require_react();
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE2 = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactSharedInternals = React5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE2 || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE2: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x2) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var assign = Object.assign;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix2;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix2 === void 0) {
              try {
                throw Error();
              } catch (x2) {
                var match = x2.stack.trim().match(/\n( *(at )?)/);
                prefix2 = match && match[1] || "";
              }
            }
            return "\n" + prefix2 + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x2) {
                  control = x2;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x2) {
                  control = x2;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x2) {
                control = x2;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s2 = sampleLines.length - 1;
              var c2 = controlLines.length - 1;
              while (s2 >= 1 && c2 >= 0 && sampleLines[s2] !== controlLines[c2]) {
                c2--;
              }
              for (; s2 >= 1 && c2 >= 0; s2--, c2--) {
                if (sampleLines[s2] !== controlLines[c2]) {
                  if (s2 !== 1 || c2 !== 1) {
                    do {
                      s2--;
                      c2--;
                      if (c2 < 0 || sampleLines[s2] !== controlLines[c2]) {
                        var _frame = "\n" + sampleLines[s2].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s2 >= 1 && c2 >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE2: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x2) {
                }
              }
            }
          }
          return "";
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location2, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location2 + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location2, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location2, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location2, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a2) {
          return isArrayImpl(a2);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e2) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config2) {
          {
            if (hasOwnProperty.call(config2, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config2, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config2.ref !== void 0;
        }
        function hasValidKey(config2) {
          {
            if (hasOwnProperty.call(config2, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config2, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config2.key !== void 0;
        }
        function warnIfStringRefCannotBeAutoConverted(config2, self2) {
          {
            if (typeof config2.ref === "string" && ReactCurrentOwner.current && self2 && ReactCurrentOwner.current.stateNode !== self2) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config2.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = function() {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = function() {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        var ReactElement = function(type, key, ref, self2, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self2
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function jsxDEV(type, config2, maybeKey, source, self2) {
          {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            if (maybeKey !== void 0) {
              {
                checkKeyStringCoercion(maybeKey);
              }
              key = "" + maybeKey;
            }
            if (hasValidKey(config2)) {
              {
                checkKeyStringCoercion(config2.key);
              }
              key = "" + config2.key;
            }
            if (hasValidRef(config2)) {
              ref = config2.ref;
              warnIfStringRefCannotBeAutoConverted(config2, self2);
            }
            for (propName in config2) {
              if (hasOwnProperty.call(config2, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config2[propName];
              }
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self2, source, ReactCurrentOwner.current, props);
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function isValidElement2(object) {
          {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i2 = 0; i2 < node.length; i2++) {
                var child = node[i2];
                if (isValidElement2(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement2(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement2(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i2 = 0; i2 < keys.length; i2++) {
              var key = keys[i2];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        var didWarnAboutKeySpread = {};
        function jsxWithValidation(type, props, key, isStaticChildren, source, self2) {
          {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum(source);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
            var element = jsxDEV(type, props, key, source, self2);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (isArray(children)) {
                    for (var i2 = 0; i2 < children.length; i2++) {
                      validateChildKeys(children[i2], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            {
              if (hasOwnProperty.call(props, "key")) {
                var componentName = getComponentNameFromType(type);
                var keys = Object.keys(props).filter(function(k2) {
                  return k2 !== "key";
                });
                var beforeExample = keys.length > 0 ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
                if (!didWarnAboutKeySpread[componentName + beforeExample]) {
                  var afterExample = keys.length > 0 ? "{" + keys.join(": ..., ") + ": ...}" : "{}";
                  error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);
                  didWarnAboutKeySpread[componentName + beforeExample] = true;
                }
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        }
        function jsxWithValidationStatic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, true);
          }
        }
        function jsxWithValidationDynamic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, false);
          }
        }
        var jsx5 = jsxWithValidationDynamic;
        var jsxs = jsxWithValidationStatic;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsx = jsx5;
        exports.jsxs = jsxs;
      })();
    }
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  }
});

// node_modules/lodash.merge/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.merge/index.js"(exports, module) {
    var LARGE_ARRAY_SIZE = 200;
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var HOT_COUNT = 800;
    var HOT_SPAN = 16;
    var MAX_SAFE_INTEGER = 9007199254740991;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var asyncTag = "[object AsyncFunction]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var nullTag = "[object Null]";
    var objectTag = "[object Object]";
    var proxyTag = "[object Proxy]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var undefinedTag = "[object Undefined]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = (function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e2) {
      }
    })();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    function baseTimes(n2, iteratee) {
      var index = -1, result = Array(n2);
      while (++index < n2) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    var arrayProto = Array.prototype;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var coreJsData = root["__core-js_shared__"];
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var maskSrcKey = (function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    })();
    var nativeObjectToString = objectProto.toString;
    var objectCtorString = funcToString.call(Object);
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    var Buffer = moduleExports ? root.Buffer : void 0;
    var Symbol2 = root.Symbol;
    var Uint8Array = root.Uint8Array;
    var allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    var objectCreate = Object.create;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var splice = arrayProto.splice;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    var defineProperty = (function() {
      try {
        var func = getNative(Object, "defineProperty");
        func({}, "", {});
        return func;
      } catch (e2) {
      }
    })();
    var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
    var nativeMax = Math.max;
    var nativeNow = Date.now;
    var Map2 = getNative(root, "Map");
    var nativeCreate = getNative(Object, "create");
    var baseCreate = /* @__PURE__ */ (function() {
      function object() {
      }
      return function(proto) {
        if (!isObject(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object();
        object.prototype = void 0;
        return result;
      };
    })();
    function Hash(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    function ListCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
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
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    function MapCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    function stackGet(key) {
      return this.__data__.get(key);
    }
    function stackHas(key) {
      return this.__data__.has(key);
    }
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
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
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
        (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
        isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    function assignMergeValue(object, key, value) {
      if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
        baseAssignValue(object, key, value);
      }
    }
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
        baseAssignValue(object, key, value);
      }
    }
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    function baseAssignValue(object, key, value) {
      if (key == "__proto__" && defineProperty) {
        defineProperty(object, key, {
          "configurable": true,
          "enumerable": true,
          "value": value,
          "writable": true
        });
      } else {
        object[key] = value;
      }
    }
    var baseFor = createBaseFor();
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object), result = [];
      for (var key in object) {
        if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }
    function baseMerge(object, source, srcIndex, customizer, stack) {
      if (object === source) {
        return;
      }
      baseFor(source, function(srcValue, key) {
        stack || (stack = new Stack());
        if (isObject(srcValue)) {
          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        } else {
          var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
          if (newValue === void 0) {
            newValue = srcValue;
          }
          assignMergeValue(object, key, newValue);
        }
      }, keysIn);
    }
    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
      var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
      if (stacked) {
        assignMergeValue(object, key, stacked);
        return;
      }
      var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
      var isCommon = newValue === void 0;
      if (isCommon) {
        var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
          if (isArray(objValue)) {
            newValue = objValue;
          } else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          } else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          } else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          } else {
            newValue = [];
          }
        } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;
          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          } else if (!isObject(objValue) || isFunction(objValue)) {
            newValue = initCloneObject(srcValue);
          }
        } else {
          isCommon = false;
        }
      }
      if (isCommon) {
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack["delete"](srcValue);
      }
      assignMergeValue(object, key, newValue);
    }
    function baseRest(func, start) {
      return setToString(overRest(func, start, identity), func + "");
    }
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, "toString", {
        "configurable": true,
        "enumerable": false,
        "value": constant(string),
        "writable": true
      });
    };
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
      buffer.copy(result);
      return result;
    }
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }
    function copyArray(source, array) {
      var index = -1, length = source.length;
      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});
      var index = -1, length = props.length;
      while (++index < length) {
        var key = props[index];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
        if (newValue === void 0) {
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
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
        customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? void 0 : customizer;
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
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e2) {
      }
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
    function initCloneObject(object) {
      return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
    }
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index;
      if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
        return eq(object[index], value);
      }
      return false;
    }
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    function overRest(func, start, transform) {
      start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
      return function() {
        var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
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
    function safeGet(object, key) {
      if (key === "constructor" && typeof object[key] === "function") {
        return;
      }
      if (key == "__proto__") {
        return;
      }
      return object[key];
    }
    var setToString = shortOut(baseSetToString);
    function shortOut(func) {
      var count = 0, lastCalled = 0;
      return function() {
        var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(void 0, arguments);
      };
    }
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e2) {
        }
        try {
          return func + "";
        } catch (e2) {
        }
      }
      return "";
    }
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    var isArguments = baseIsArguments(/* @__PURE__ */ (function() {
      return arguments;
    })()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    var isArray = Array.isArray;
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }
    var isBuffer = nativeIsBuffer || stubFalse;
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
      return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
    }
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    function toPlainObject(value) {
      return copyObject(value, keysIn(value));
    }
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }
    var merge2 = createAssigner(function(object, source, srcIndex) {
      baseMerge(object, source, srcIndex);
    });
    function constant(value) {
      return function() {
        return value;
      };
    }
    function identity(value) {
      return value;
    }
    function stubFalse() {
      return false;
    }
    module.exports = merge2;
  }
});

// node_modules/@mirohq/design-system-icons/dist/module.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var import_react33 = __toESM(require_react());

// node_modules/@mirohq/design-system-base-icon/dist/module.js
var styles = {
  size: {
    small: {
      square: "$icon-200"
    },
    medium: {
      square: "$icon-300"
    },
    large: {
      square: "$icon-400"
    }
  }
};
var iconSymbol = Symbol.for("icon");
var isIconComponent = (iconComponent) => {
  var _a, _b;
  return Boolean(
    (_b = iconComponent[iconSymbol]) != null ? _b : (
      // @ts-expect-error
      (_a = iconComponent == null ? void 0 : iconComponent.type) == null ? void 0 : _a[iconSymbol]
    )
  );
};

// node_modules/@mirohq/design-system-use-event-listener/dist/module.js
var import_react3 = __toESM(require_react());

// node_modules/@mirohq/design-system-use-layout-effect/dist/module.js
var import_react = __toESM(require_react());
var useLayoutEffect = typeof window !== "undefined" ? import_react.useLayoutEffect : import_react.useEffect;

// node_modules/@mirohq/design-system-use-listeners/dist/module.js
var import_react2 = __toESM(require_react());
var useListeners = () => {
  const globalListeners = (0, import_react2.useRef)(/* @__PURE__ */ new Map());
  const removeListener = (0, import_react2.useCallback)(
    (eventTarget, type, listener, options) => {
      var _a;
      const fnGlobalListener = (_a = globalListeners.current.get(listener)) == null ? void 0 : _a.fn;
      const fn = fnGlobalListener != null ? fnGlobalListener : listener;
      eventTarget.removeEventListener(type, fn, options);
      globalListeners.current.delete(listener);
    },
    []
  );
  const addListener = (0, import_react2.useCallback)(
    (eventTarget, type, listener, options) => {
      const fn = (typeof options === "object" ? options.once === true : false) ? (...args) => {
        listener(...args);
        removeListener(eventTarget, type, listener, options);
        globalListeners.current.delete(listener);
      } : listener;
      globalListeners.current.set(listener, {
        type,
        eventTarget,
        fn,
        options
      });
      eventTarget.addEventListener(type, fn, options);
    },
    [removeListener]
  );
  const removeAllListeners = (0, import_react2.useCallback)(() => {
    globalListeners.current.forEach((value, key) => {
      removeListener(value.eventTarget, value.type, key, value.options);
    });
  }, [removeListener]);
  (0, import_react2.useEffect)(() => removeAllListeners, [removeAllListeners]);
  return { addListener, removeListener, removeAllListeners };
};

// node_modules/@mirohq/design-system-use-event-listener/dist/module.js
var useEventListener = (eventName, handler, element, options) => {
  const savedHandler = (0, import_react3.useRef)(handler);
  const { addListener, removeListener } = useListeners();
  useLayoutEffect(() => {
    savedHandler.current = handler;
  }, [handler]);
  (0, import_react3.useEffect)(() => {
    var _a;
    const targetElement = (_a = element == null ? void 0 : element.current) != null ? _a : window;
    if ((targetElement == null ? void 0 : targetElement.addEventListener) == null) {
      return;
    }
    const eventListener = (event) => savedHandler.current(event);
    addListener(targetElement, eventName, eventListener, options);
    return () => {
      removeListener(targetElement, eventName, eventListener, options);
    };
  }, [eventName, element, options, addListener, removeListener]);
};

// node_modules/@mirohq/design-system-use-event/dist/module.js
var import_react4 = __toESM(require_react());
var useEvent = (fn) => {
  const ref = (0, import_react4.useRef)(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  useLayoutEffect(() => {
    ref.current = fn;
  }, [fn]);
  return (0, import_react4.useCallback)((...args) => ref.current(...args), [ref]);
};

// node_modules/@mirohq/design-system-use-local-storage/dist/module.js
var import_react5 = __toESM(require_react());
var KEY_PREFIX = "MIRO_DS";
function getLocalStorageValue(key, defaultValue) {
  if (typeof window === "undefined") {
    return defaultValue;
  }
  try {
    const stored = window.localStorage.getItem(key);
    return stored !== null ? JSON.parse(stored) : defaultValue;
  } catch (e2) {
    console.error(
      "[useLocalStorage] Error reading localStorage key “".concat(key, "”:"),
      e2
    );
    return defaultValue;
  }
}
function setLocalStorageValue(key, value) {
  if (typeof window === "undefined") {
    return;
  }
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e2) {
    console.error(
      "[useLocalStorage] Error setting localStorage key “".concat(key, "”:"),
      e2
    );
  }
}
function removeLocalStorageValue(key) {
  if (typeof window === "undefined") {
    return;
  }
  try {
    window.localStorage.removeItem(key);
  } catch (e2) {
    console.error(
      "[useLocalStorage] Error removing localStorage key “".concat(key, "”:"),
      e2
    );
  }
}
var configUseLocalStorage = ({ prefix: prefix2 }) => {
  if (prefix2 !== void 0)
    KEY_PREFIX = prefix2;
};
function useLocalStorage(key, defaultValue, { prefix: prefix2 } = {}) {
  const prefixedKey = (0, import_react5.useMemo)(
    () => "".concat(prefix2 != null ? prefix2 : KEY_PREFIX, "_").concat(key),
    [prefix2, key]
  );
  const [value, setStateValue] = (0, import_react5.useState)(
    () => getLocalStorageValue(prefixedKey, defaultValue)
  );
  const setValue = useEvent((newValue) => {
    const newValueParsed = typeof newValue === "function" ? newValue(value) : newValue;
    setLocalStorageValue(prefixedKey, newValueParsed);
    window.dispatchEvent(
      new CustomEvent(prefixedKey, { detail: newValueParsed })
    );
  });
  const removeValue = useEvent(() => {
    removeLocalStorageValue(prefixedKey);
    window.dispatchEvent(new CustomEvent(prefixedKey, { detail: void 0 }));
  });
  const onEventTrigger = (event) => {
    setStateValue(event.detail);
  };
  useEventListener(prefixedKey, onEventTrigger);
  const onStorage = (event) => {
    if (event.key === prefixedKey) {
      setStateValue(
        event.newValue !== null ? JSON.parse(event.newValue) : void 0
      );
    }
  };
  useEventListener("storage", onStorage);
  return [value, setValue, removeValue];
}

// node_modules/@mirohq/design-system-primitive/dist/module.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var import_react6 = __toESM(require_react());

// node_modules/@radix-ui/react-slot/dist/index.mjs
var React2 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var React = __toESM(require_react(), 1);
function setRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef(ref, node);
      if (!hasCleanup && typeof cleanup == "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i2 = 0; i2 < cleanups.length; i2++) {
          const cleanup = cleanups[i2];
          if (typeof cleanup == "function") {
            cleanup();
          } else {
            setRef(refs[i2], null);
          }
        }
      };
    }
  };
}
function useComposedRefs(...refs) {
  return React.useCallback(composeRefs(...refs), refs);
}

// node_modules/@radix-ui/react-slot/dist/index.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var REACT_LAZY_TYPE = Symbol.for("react.lazy");
var use = React2[" use ".trim().toString()];
function isPromiseLike(value) {
  return typeof value === "object" && value !== null && "then" in value;
}
function isLazyComponent(element) {
  return element != null && typeof element === "object" && "$$typeof" in element && element.$$typeof === REACT_LAZY_TYPE && "_payload" in element && isPromiseLike(element._payload);
}
function createSlot(ownerName) {
  const SlotClone = createSlotClone(ownerName);
  const Slot2 = React2.forwardRef((props, forwardedRef) => {
    let { children, ...slotProps } = props;
    if (isLazyComponent(children) && typeof use === "function") {
      children = use(children._payload);
    }
    const childrenArray = React2.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React2.Children.count(newElement) > 1) return React2.Children.only(null);
          return React2.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return (0, import_jsx_runtime.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: React2.isValidElement(newElement) ? React2.cloneElement(newElement, void 0, newChildren) : null });
    }
    return (0, import_jsx_runtime.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot2.displayName = `${ownerName}.Slot`;
  return Slot2;
}
var Slot = createSlot("Slot");
function createSlotClone(ownerName) {
  const SlotClone = React2.forwardRef((props, forwardedRef) => {
    let { children, ...slotProps } = props;
    if (isLazyComponent(children) && typeof use === "function") {
      children = use(children._payload);
    }
    if (React2.isValidElement(children)) {
      const childrenRef = getElementRef(children);
      const props2 = mergeProps(slotProps, children.props);
      if (children.type !== React2.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return React2.cloneElement(children, props2);
    }
    return React2.Children.count(children) > 1 ? React2.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
function createSlottable(ownerName) {
  const Slottable2 = ({ children }) => {
    return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
  };
  Slottable2.displayName = `${ownerName}.Slottable`;
  Slottable2.__radixId = SLOTTABLE_IDENTIFIER;
  return Slottable2;
}
var Slottable = createSlottable("Slottable");
function isSlottable(child) {
  return React2.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef(element) {
  var _a, _b;
  let getter = (_a = Object.getOwnPropertyDescriptor(element.props, "ref")) == null ? void 0 : _a.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = (_b = Object.getOwnPropertyDescriptor(element, "ref")) == null ? void 0 : _b.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/@mirohq/design-system-primitive/dist/module.js
var NODES = [
  // audio
  "audio",
  // container
  "address",
  "article",
  "aside",
  "canvas",
  "div",
  "footer",
  "header",
  "main",
  "nav",
  "nav",
  "section",
  "span",
  // form
  "button",
  "fieldset",
  "form",
  "input",
  "label",
  "option",
  "select",
  "textarea",
  // image
  "figcaption",
  "figure",
  "img",
  "svg",
  // link
  "a",
  // list
  "dd",
  "details",
  "dl",
  "dt",
  "li",
  "menu",
  "ol",
  "summary",
  "ul",
  // typography
  "abbr",
  "blockquote",
  "cite",
  "code",
  "em",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "kbd",
  "p",
  "pre",
  "small",
  "strong",
  "sub",
  "sup",
  "time",
  // table
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "tr",
  // video
  "video"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Node2 = import_react6.default.forwardRef(
    (props, forwardedRef) => {
      const { asChild = false, ...primitiveProps } = props;
      const Component = asChild ? Slot : node;
      return (0, import_jsx_runtime2.jsx)(Component, { ...primitiveProps, ref: forwardedRef });
    }
  );
  Node2.displayName = "Primitive.".concat(node);
  return { ...primitive, [node]: Node2 };
}, {});

// node_modules/@stitches/react/dist/index.mjs
var import_react7 = __toESM(require_react(), 1);
var e = "colors";
var t = "sizes";
var r = "space";
var n = { gap: r, gridGap: r, columnGap: r, gridColumnGap: r, rowGap: r, gridRowGap: r, inset: r, insetBlock: r, insetBlockEnd: r, insetBlockStart: r, insetInline: r, insetInlineEnd: r, insetInlineStart: r, margin: r, marginTop: r, marginRight: r, marginBottom: r, marginLeft: r, marginBlock: r, marginBlockEnd: r, marginBlockStart: r, marginInline: r, marginInlineEnd: r, marginInlineStart: r, padding: r, paddingTop: r, paddingRight: r, paddingBottom: r, paddingLeft: r, paddingBlock: r, paddingBlockEnd: r, paddingBlockStart: r, paddingInline: r, paddingInlineEnd: r, paddingInlineStart: r, top: r, right: r, bottom: r, left: r, scrollMargin: r, scrollMarginTop: r, scrollMarginRight: r, scrollMarginBottom: r, scrollMarginLeft: r, scrollMarginX: r, scrollMarginY: r, scrollMarginBlock: r, scrollMarginBlockEnd: r, scrollMarginBlockStart: r, scrollMarginInline: r, scrollMarginInlineEnd: r, scrollMarginInlineStart: r, scrollPadding: r, scrollPaddingTop: r, scrollPaddingRight: r, scrollPaddingBottom: r, scrollPaddingLeft: r, scrollPaddingX: r, scrollPaddingY: r, scrollPaddingBlock: r, scrollPaddingBlockEnd: r, scrollPaddingBlockStart: r, scrollPaddingInline: r, scrollPaddingInlineEnd: r, scrollPaddingInlineStart: r, fontSize: "fontSizes", background: e, backgroundColor: e, backgroundImage: e, borderImage: e, border: e, borderBlock: e, borderBlockEnd: e, borderBlockStart: e, borderBottom: e, borderBottomColor: e, borderColor: e, borderInline: e, borderInlineEnd: e, borderInlineStart: e, borderLeft: e, borderLeftColor: e, borderRight: e, borderRightColor: e, borderTop: e, borderTopColor: e, caretColor: e, color: e, columnRuleColor: e, fill: e, outline: e, outlineColor: e, stroke: e, textDecorationColor: e, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: t, minBlockSize: t, maxBlockSize: t, inlineSize: t, minInlineSize: t, maxInlineSize: t, width: t, minWidth: t, maxWidth: t, height: t, minHeight: t, maxHeight: t, flexBasis: t, gridTemplateColumns: t, gridTemplateRows: t, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" };
var i = (e2, t2) => "function" == typeof t2 ? { "()": Function.prototype.toString.call(t2) } : t2;
var o = () => {
  const e2 = /* @__PURE__ */ Object.create(null);
  return (t2, r3, ...n2) => {
    const o2 = ((e3) => JSON.stringify(e3, i))(t2);
    return o2 in e2 ? e2[o2] : e2[o2] = r3(t2, ...n2);
  };
};
var l = Symbol.for("sxs.internal");
var s = (e2, t2) => Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2));
var a = (e2) => {
  for (const t2 in e2) return true;
  return false;
};
var { hasOwnProperty: c } = Object.prototype;
var d = (e2) => e2.includes("-") ? e2 : e2.replace(/[A-Z]/g, ((e3) => "-" + e3.toLowerCase()));
var g = /\s+(?![^()]*\))/;
var p = (e2) => (t2) => e2(..."string" == typeof t2 ? String(t2).split(g) : [t2]);
var u = { appearance: (e2) => ({ WebkitAppearance: e2, appearance: e2 }), backfaceVisibility: (e2) => ({ WebkitBackfaceVisibility: e2, backfaceVisibility: e2 }), backdropFilter: (e2) => ({ WebkitBackdropFilter: e2, backdropFilter: e2 }), backgroundClip: (e2) => ({ WebkitBackgroundClip: e2, backgroundClip: e2 }), boxDecorationBreak: (e2) => ({ WebkitBoxDecorationBreak: e2, boxDecorationBreak: e2 }), clipPath: (e2) => ({ WebkitClipPath: e2, clipPath: e2 }), content: (e2) => ({ content: e2.includes('"') || e2.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e2) ? e2 : `"${e2}"` }), hyphens: (e2) => ({ WebkitHyphens: e2, hyphens: e2 }), maskImage: (e2) => ({ WebkitMaskImage: e2, maskImage: e2 }), maskSize: (e2) => ({ WebkitMaskSize: e2, maskSize: e2 }), tabSize: (e2) => ({ MozTabSize: e2, tabSize: e2 }), textSizeAdjust: (e2) => ({ WebkitTextSizeAdjust: e2, textSizeAdjust: e2 }), userSelect: (e2) => ({ WebkitUserSelect: e2, userSelect: e2 }), marginBlock: p(((e2, t2) => ({ marginBlockStart: e2, marginBlockEnd: t2 || e2 }))), marginInline: p(((e2, t2) => ({ marginInlineStart: e2, marginInlineEnd: t2 || e2 }))), maxSize: p(((e2, t2) => ({ maxBlockSize: e2, maxInlineSize: t2 || e2 }))), minSize: p(((e2, t2) => ({ minBlockSize: e2, minInlineSize: t2 || e2 }))), paddingBlock: p(((e2, t2) => ({ paddingBlockStart: e2, paddingBlockEnd: t2 || e2 }))), paddingInline: p(((e2, t2) => ({ paddingInlineStart: e2, paddingInlineEnd: t2 || e2 }))) };
var h = /([\d.]+)([^]*)/;
var f = (e2, t2) => e2.length ? e2.reduce(((e3, r3) => (e3.push(...t2.map(((e4) => e4.includes("&") ? e4.replace(/&/g, /[ +>|~]/.test(r3) && /&.*&/.test(e4) ? `:is(${r3})` : r3) : r3 + " " + e4))), e3)), []) : t2;
var m = (e2, t2) => e2 in b && "string" == typeof t2 ? t2.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, ((t3, r3, n2, i2) => r3 + ("stretch" === n2 ? `-moz-available${i2};${d(e2)}:${r3}-webkit-fill-available` : `-moz-fit-content${i2};${d(e2)}:${r3}fit-content`) + i2)) : String(t2);
var b = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 };
var S = (e2) => e2 ? e2 + "-" : "";
var k = (e2, t2, r3) => e2.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, ((e3, n2, i2, o2, l2) => "$" == o2 == !!i2 ? e3 : (n2 || "--" == o2 ? "calc(" : "") + "var(--" + ("$" === o2 ? S(t2) + (l2.includes("$") ? "" : S(r3)) + l2.replace(/\$/g, "-") : l2) + ")" + (n2 || "--" == o2 ? "*" + (n2 || "") + (i2 || "1") + ")" : "")));
var y = /\s*,\s*(?![^()]*\))/;
var B = Object.prototype.toString;
var $ = (e2, t2, r3, n2, i2) => {
  let o2, l2, s2;
  const a2 = (e3, t3, r4) => {
    let c2, g2;
    const p2 = (e4) => {
      for (c2 in e4) {
        const R2 = 64 === c2.charCodeAt(0), z2 = R2 && Array.isArray(e4[c2]) ? e4[c2] : [e4[c2]];
        for (g2 of z2) {
          const e5 = /[A-Z]/.test($2 = c2) ? $2 : $2.replace(/-[^]/g, ((e6) => e6[1].toUpperCase())), z3 = "object" == typeof g2 && g2 && g2.toString === B && (!n2.utils[e5] || !t3.length);
          if (e5 in n2.utils && !z3) {
            const t4 = n2.utils[e5];
            if (t4 !== l2) {
              l2 = t4, p2(t4(g2)), l2 = null;
              continue;
            }
          } else if (e5 in u) {
            const t4 = u[e5];
            if (t4 !== s2) {
              s2 = t4, p2(t4(g2)), s2 = null;
              continue;
            }
          }
          if (R2 && (b2 = c2.slice(1) in n2.media ? "@media " + n2.media[c2.slice(1)] : c2, c2 = b2.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, ((e6, t4, r5, n3, i3, o3) => {
            const l3 = h.test(t4), s3 = 0.0625 * (l3 ? -1 : 1), [a3, c3] = l3 ? [n3, t4] : [t4, n3];
            return "(" + ("=" === r5[0] ? "" : ">" === r5[0] === l3 ? "max-" : "min-") + a3 + ":" + ("=" !== r5[0] && 1 === r5.length ? c3.replace(h, ((e7, t5, n4) => Number(t5) + s3 * (">" === r5 ? 1 : -1) + n4)) : c3) + (i3 ? ") and (" + (">" === i3[0] ? "min-" : "max-") + a3 + ":" + (1 === i3.length ? o3.replace(h, ((e7, t5, r6) => Number(t5) + s3 * (">" === i3 ? -1 : 1) + r6)) : o3) : "") + ")";
          }))), z3) {
            const e6 = R2 ? r4.concat(c2) : [...r4], n3 = R2 ? [...t3] : f(t3, c2.split(y));
            void 0 !== o2 && i2(x(...o2)), o2 = void 0, a2(g2, n3, e6);
          } else void 0 === o2 && (o2 = [[], t3, r4]), c2 = R2 || 36 !== c2.charCodeAt(0) ? c2 : `--${S(n2.prefix)}${c2.slice(1).replace(/\$/g, "-")}`, g2 = z3 ? g2 : "number" == typeof g2 ? g2 && e5 in I ? String(g2) + "px" : String(g2) : k(m(e5, null == g2 ? "" : g2), n2.prefix, n2.themeMap[e5]), o2[0].push(`${R2 ? `${c2} ` : `${d(c2)}:`}${g2}`);
        }
      }
      var b2, $2;
    };
    p2(e3), void 0 !== o2 && i2(x(...o2)), o2 = void 0;
  };
  a2(e2, t2, r3);
};
var x = (e2, t2, r3) => `${r3.map(((e3) => `${e3}{`)).join("")}${t2.length ? `${t2.join(",")}{` : ""}${e2.join(";")}${t2.length ? "}" : ""}${Array(r3.length ? r3.length + 1 : 0).join("}")}`;
var I = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 };
var R = (e2) => String.fromCharCode(e2 + (e2 > 25 ? 39 : 97));
var z = (e2) => ((e3) => {
  let t2, r3 = "";
  for (t2 = Math.abs(e3); t2 > 52; t2 = t2 / 52 | 0) r3 = R(t2 % 52) + r3;
  return R(t2 % 52) + r3;
})(((e3, t2) => {
  let r3 = t2.length;
  for (; r3; ) e3 = 33 * e3 ^ t2.charCodeAt(--r3);
  return e3;
})(5381, JSON.stringify(e2)) >>> 0);
var W = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"];
var j = (e2) => {
  if (e2.href && !e2.href.startsWith(location.origin)) return false;
  try {
    return !!e2.cssRules;
  } catch (e3) {
    return false;
  }
};
var E = (e2) => {
  let t2;
  const r3 = () => {
    const { cssRules: e3 } = t2.sheet;
    return [].map.call(e3, ((r4, n3) => {
      const { cssText: i2 } = r4;
      let o2 = "";
      if (i2.startsWith("--sxs")) return "";
      if (e3[n3 - 1] && (o2 = e3[n3 - 1].cssText).startsWith("--sxs")) {
        if (!r4.cssRules.length) return "";
        for (const e4 in t2.rules) if (t2.rules[e4].group === r4) return `--sxs{--sxs:${[...t2.rules[e4].cache].join(" ")}}${i2}`;
        return r4.cssRules.length ? `${o2}${i2}` : "";
      }
      return i2;
    })).join("");
  }, n2 = () => {
    if (t2) {
      const { rules: e3, sheet: r4 } = t2;
      if (!r4.deleteRule) {
        for (; 3 === Object(Object(r4.cssRules)[0]).type; ) r4.cssRules.splice(0, 1);
        r4.cssRules = [];
      }
      for (const t3 in e3) delete e3[t3];
    }
    const i2 = Object(e2).styleSheets || [];
    for (const e3 of i2) if (j(e3)) {
      for (let i3 = 0, o3 = e3.cssRules; o3[i3]; ++i3) {
        const l3 = Object(o3[i3]);
        if (1 !== l3.type) continue;
        const s2 = Object(o3[i3 + 1]);
        if (4 !== s2.type) continue;
        ++i3;
        const { cssText: a2 } = l3;
        if (!a2.startsWith("--sxs")) continue;
        const c2 = a2.slice(14, -3).trim().split(/\s+/), d2 = W[c2[0]];
        d2 && (t2 || (t2 = { sheet: e3, reset: n2, rules: {}, toString: r3 }), t2.rules[d2] = { group: s2, index: i3, cache: new Set(c2) });
      }
      if (t2) break;
    }
    if (!t2) {
      const i3 = (e3, t3) => ({ type: t3, cssRules: [], insertRule(e4, t4) {
        this.cssRules.splice(t4, 0, i3(e4, { import: 3, undefined: 1 }[(e4.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4));
      }, get cssText() {
        return "@media{}" === e3 ? `@media{${[].map.call(this.cssRules, ((e4) => e4.cssText)).join("")}}` : e3;
      } });
      t2 = { sheet: e2 ? (e2.head || e2).appendChild(document.createElement("style")).sheet : i3("", "text/css"), rules: {}, reset: n2, toString: r3 };
    }
    const { sheet: o2, rules: l2 } = t2;
    for (let e3 = W.length - 1; e3 >= 0; --e3) {
      const t3 = W[e3];
      if (!l2[t3]) {
        const r4 = W[e3 + 1], n3 = l2[r4] ? l2[r4].index : o2.cssRules.length;
        o2.insertRule("@media{}", n3), o2.insertRule(`--sxs{--sxs:${e3}}`, n3), l2[t3] = { group: o2.cssRules[n3 + 1], index: n3, cache: /* @__PURE__ */ new Set([e3]) };
      }
      v(l2[t3]);
    }
  };
  return n2(), t2;
};
var v = (e2) => {
  const t2 = e2.group;
  let r3 = t2.cssRules.length;
  e2.apply = (e3) => {
    try {
      t2.insertRule(e3, r3), ++r3;
    } catch (e4) {
    }
  };
};
var T = Symbol();
var w = o();
var M = (e2, t2) => w(e2, (() => (...r3) => {
  let n2 = { type: null, composers: /* @__PURE__ */ new Set() };
  for (const t3 of r3) if (null != t3) if (t3[l]) {
    null == n2.type && (n2.type = t3[l].type);
    for (const e3 of t3[l].composers) n2.composers.add(e3);
  } else t3.constructor !== Object || t3.$$typeof ? null == n2.type && (n2.type = t3) : n2.composers.add(C(t3, e2));
  return null == n2.type && (n2.type = "span"), n2.composers.size || n2.composers.add(["PJLV", {}, [], [], {}, []]), P(e2, n2, t2);
}));
var C = ({ variants: e2, compoundVariants: t2, defaultVariants: r3, ...n2 }, i2) => {
  const o2 = `${S(i2.prefix)}c-${z(n2)}`, l2 = [], s2 = [], d2 = /* @__PURE__ */ Object.create(null), g2 = [];
  for (const e3 in r3) d2[e3] = String(r3[e3]);
  if ("object" == typeof e2 && e2) for (const t3 in e2) {
    p2 = d2, u2 = t3, c.call(p2, u2) || (d2[t3] = "undefined");
    const r4 = e2[t3];
    for (const e3 in r4) {
      const n3 = { [t3]: String(e3) };
      "undefined" === String(e3) && g2.push(t3);
      const i3 = r4[e3], o3 = [n3, i3, !a(i3)];
      l2.push(o3);
    }
  }
  var p2, u2;
  if ("object" == typeof t2 && t2) for (const e3 of t2) {
    let { css: t3, ...r4 } = e3;
    t3 = "object" == typeof t3 && t3 || {};
    for (const e4 in r4) r4[e4] = String(r4[e4]);
    const n3 = [r4, t3, !a(t3)];
    s2.push(n3);
  }
  return [o2, n2, l2, s2, d2, g2];
};
var P = (e2, t2, r3) => {
  const [n2, i2, o2, a2] = L(t2.composers), c2 = "function" == typeof t2.type || t2.type.$$typeof ? ((e3) => {
    function t3() {
      for (let r4 = 0; r4 < t3[T].length; r4++) {
        const [n3, i3] = t3[T][r4];
        e3.rules[n3].apply(i3);
      }
      return t3[T] = [], null;
    }
    return t3[T] = [], t3.rules = {}, W.forEach(((e4) => t3.rules[e4] = { apply: (r4) => t3[T].push([e4, r4]) })), t3;
  })(r3) : null, d2 = (c2 || r3).rules, g2 = `.${n2}${i2.length > 1 ? `:where(.${i2.slice(1).join(".")})` : ""}`, p2 = (l2) => {
    l2 = "object" == typeof l2 && l2 || A;
    const { css: s2, ...p3 } = l2, u2 = {};
    for (const e3 in o2) if (delete p3[e3], e3 in l2) {
      let t3 = l2[e3];
      "object" == typeof t3 && t3 ? u2[e3] = { "@initial": o2[e3], ...t3 } : (t3 = String(t3), u2[e3] = "undefined" !== t3 || a2.has(e3) ? t3 : o2[e3]);
    } else u2[e3] = o2[e3];
    const h2 = /* @__PURE__ */ new Set([...i2]);
    for (const [n3, i3, o3, l3] of t2.composers) {
      r3.rules.styled.cache.has(n3) || (r3.rules.styled.cache.add(n3), $(i3, [`.${n3}`], [], e2, ((e3) => {
        d2.styled.apply(e3);
      })));
      const t3 = O(o3, u2, e2.media), s3 = O(l3, u2, e2.media, true);
      for (const i4 of t3) if (void 0 !== i4) for (const [t4, o4, l4] of i4) {
        const i5 = `${n3}-${z(o4)}-${t4}`;
        h2.add(i5);
        const s4 = (l4 ? r3.rules.resonevar : r3.rules.onevar).cache, a3 = l4 ? d2.resonevar : d2.onevar;
        s4.has(i5) || (s4.add(i5), $(o4, [`.${i5}`], [], e2, ((e3) => {
          a3.apply(e3);
        })));
      }
      for (const t4 of s3) if (void 0 !== t4) for (const [i4, o4] of t4) {
        const t5 = `${n3}-${z(o4)}-${i4}`;
        h2.add(t5), r3.rules.allvar.cache.has(t5) || (r3.rules.allvar.cache.add(t5), $(o4, [`.${t5}`], [], e2, ((e3) => {
          d2.allvar.apply(e3);
        })));
      }
    }
    if ("object" == typeof s2 && s2) {
      const t3 = `${n2}-i${z(s2)}-css`;
      h2.add(t3), r3.rules.inline.cache.has(t3) || (r3.rules.inline.cache.add(t3), $(s2, [`.${t3}`], [], e2, ((e3) => {
        d2.inline.apply(e3);
      })));
    }
    for (const e3 of String(l2.className || "").trim().split(/\s+/)) e3 && h2.add(e3);
    const f2 = p3.className = [...h2].join(" ");
    return { type: t2.type, className: f2, selector: g2, props: p3, toString: () => f2, deferredInjector: c2 };
  };
  return s(p2, { className: n2, selector: g2, [l]: t2, toString: () => (r3.rules.styled.cache.has(n2) || p2(), n2) });
};
var L = (e2) => {
  let t2 = "";
  const r3 = [], n2 = {}, i2 = [];
  for (const [o2, , , , l2, s2] of e2) {
    "" === t2 && (t2 = o2), r3.push(o2), i2.push(...s2);
    for (const e3 in l2) {
      const t3 = l2[e3];
      (void 0 === n2[e3] || "undefined" !== t3 || s2.includes(t3)) && (n2[e3] = t3);
    }
  }
  return [t2, r3, n2, new Set(i2)];
};
var O = (e2, t2, r3, n2) => {
  const i2 = [];
  e: for (let [o2, l2, s2] of e2) {
    if (s2) continue;
    let e3, a2 = 0, c2 = false;
    for (e3 in o2) {
      const n3 = o2[e3];
      let i3 = t2[e3];
      if (i3 !== n3) {
        if ("object" != typeof i3 || !i3) continue e;
        {
          let e4, t3, o3 = 0;
          for (const l3 in i3) {
            if (n3 === String(i3[l3])) {
              if ("@initial" !== l3) {
                const e5 = l3.slice(1);
                (t3 = t3 || []).push(e5 in r3 ? r3[e5] : l3.replace(/^@media ?/, "")), c2 = true;
              }
              a2 += o3, e4 = true;
            }
            ++o3;
          }
          if (t3 && t3.length && (l2 = { ["@media " + t3.join(", ")]: l2 }), !e4) continue e;
        }
      }
    }
    (i2[a2] = i2[a2] || []).push([n2 ? "cv" : `${e3}-${o2[e3]}`, l2, c2]);
  }
  return i2;
};
var A = {};
var N = o();
var D = (e2, t2) => N(e2, (() => (...r3) => {
  const n2 = () => {
    for (let n3 of r3) {
      n3 = "object" == typeof n3 && n3 || {};
      let r4 = z(n3);
      if (!t2.rules.global.cache.has(r4)) {
        if (t2.rules.global.cache.add(r4), "@import" in n3) {
          let e3 = [].indexOf.call(t2.sheet.cssRules, t2.rules.themed.group) - 1;
          for (let r5 of [].concat(n3["@import"])) r5 = r5.includes('"') || r5.includes("'") ? r5 : `"${r5}"`, t2.sheet.insertRule(`@import ${r5};`, e3++);
          delete n3["@import"];
        }
        $(n3, [], [], e2, ((e3) => {
          t2.rules.global.apply(e3);
        }));
      }
    }
    return "";
  };
  return s(n2, { toString: n2 });
}));
var H = o();
var V = (e2, t2) => H(e2, (() => (r3) => {
  const n2 = `${S(e2.prefix)}k-${z(r3)}`, i2 = () => {
    if (!t2.rules.global.cache.has(n2)) {
      t2.rules.global.cache.add(n2);
      const i3 = [];
      $(r3, [], [], e2, ((e3) => i3.push(e3)));
      const o2 = `@keyframes ${n2}{${i3.join("")}}`;
      t2.rules.global.apply(o2);
    }
    return n2;
  };
  return s(i2, { get name() {
    return i2();
  }, toString: i2 });
}));
var G = class {
  constructor(e2, t2, r3, n2) {
    this.token = null == e2 ? "" : String(e2), this.value = null == t2 ? "" : String(t2), this.scale = null == r3 ? "" : String(r3), this.prefix = null == n2 ? "" : String(n2);
  }
  get computedValue() {
    return "var(" + this.variable + ")";
  }
  get variable() {
    return "--" + S(this.prefix) + S(this.scale) + this.token;
  }
  toString() {
    return this.computedValue;
  }
};
var F = o();
var J = (e2, t2) => F(e2, (() => (r3, n2) => {
  n2 = "object" == typeof r3 && r3 || Object(n2);
  const i2 = `.${r3 = (r3 = "string" == typeof r3 ? r3 : "") || `${S(e2.prefix)}t-${z(n2)}`}`, o2 = {}, l2 = [];
  for (const t3 in n2) {
    o2[t3] = {};
    for (const r4 in n2[t3]) {
      const i3 = `--${S(e2.prefix)}${t3}-${r4}`, s3 = k(String(n2[t3][r4]), e2.prefix, t3);
      o2[t3][r4] = new G(r4, s3, t3, e2.prefix), l2.push(`${i3}:${s3}`);
    }
  }
  const s2 = () => {
    if (l2.length && !t2.rules.themed.cache.has(r3)) {
      t2.rules.themed.cache.add(r3);
      const i3 = `${n2 === e2.theme ? ":root," : ""}.${r3}{${l2.join(";")}}`;
      t2.rules.themed.apply(i3);
    }
    return r3;
  };
  return { ...o2, get className() {
    return s2();
  }, selector: i2, toString: s2 };
}));
var U = o();
var Y = o();
var q = (e2) => {
  const t2 = ((e3) => {
    let t3 = false;
    const r3 = U(e3, ((e4) => {
      t3 = true;
      const r4 = "prefix" in (e4 = "object" == typeof e4 && e4 || {}) ? String(e4.prefix) : "", i2 = "object" == typeof e4.media && e4.media || {}, o2 = "object" == typeof e4.root ? e4.root || null : globalThis.document || null, l2 = "object" == typeof e4.theme && e4.theme || {}, s2 = { prefix: r4, media: i2, theme: l2, themeMap: "object" == typeof e4.themeMap && e4.themeMap || { ...n }, utils: "object" == typeof e4.utils && e4.utils || {} }, a2 = E(o2), c2 = { css: M(s2, a2), globalCss: D(s2, a2), keyframes: V(s2, a2), createTheme: J(s2, a2), reset() {
        a2.reset(), c2.theme.toString();
      }, theme: {}, sheet: a2, config: s2, prefix: r4, getCssText: a2.toString, toString: a2.toString };
      return String(c2.theme = c2.createTheme(l2)), c2;
    }));
    return t3 || r3.reset(), r3;
  })(e2);
  return t2.styled = (({ config: e3, sheet: t3 }) => Y(e3, (() => {
    const r3 = M(e3, t3);
    return (...e4) => {
      const t4 = r3(...e4), n2 = t4[l].type, i2 = import_react7.default.forwardRef(((e5, r4) => {
        const i3 = e5 && e5.as || n2, { props: o2, deferredInjector: l2 } = t4(e5);
        return delete o2.as, o2.ref = r4, l2 ? import_react7.default.createElement(import_react7.default.Fragment, null, import_react7.default.createElement(i3, o2), import_react7.default.createElement(l2, null)) : import_react7.default.createElement(i3, o2);
      }));
      return i2.className = t4.className, i2.displayName = `Styled.${n2.displayName || n2.name || n2}`, i2.selector = t4.selector, i2.toString = () => t4.selector, i2[l] = t4[l], i2;
    };
  })))(t2), t2;
};

// node_modules/@mirohq/design-tokens/dist/module.js
var colors = {
  "alpha-black-100": "#1A1B1E1A",
  "alpha-black-200": "#1A1B1E33",
  "alpha-black-300": "#1A1B1E4D",
  "alpha-black-400": "#1A1B1E66",
  "alpha-black-50": "#1A1B1E0D",
  "alpha-black-500": "#1A1B1E80",
  "alpha-black-600": "#1A1B1E99",
  "alpha-black-700": "#1A1B1EB3",
  "alpha-black-800": "#1A1B1ECC",
  "alpha-black-900": "#1A1B1EE6",
  "alpha-gray-100": "#656B811A",
  "alpha-gray-200": "#656B8133",
  "alpha-gray-300": "#656B814D",
  "alpha-gray-400": "#656B8166",
  "alpha-gray-50": "#656B810D",
  "alpha-gray-500": "#656B8180",
  "alpha-gray-600": "#656B8199",
  "alpha-gray-700": "#656B81B3",
  "alpha-gray-800": "#656B81CC",
  "alpha-gray-900": "#656B81E6",
  "alpha-white-100": "#FFFFFF1A",
  "alpha-white-200": "#FFFFFF33",
  "alpha-white-300": "#FFFFFF4D",
  "alpha-white-400": "#FFFFFF66",
  "alpha-white-50": "#FFFFFF0D",
  "alpha-white-500": "#FFFFFF80",
  "alpha-white-600": "#FFFFFF99",
  "alpha-white-700": "#FFFFFFB3",
  "alpha-white-800": "#FFFFFFCC",
  "alpha-white-90": "#FFFFFFE6",
  black: "#1C1C1E",
  "miro-yellow": "#FFDD33",
  transparent: "#FFFFFF00",
  white: "#FFFFFF",
  "blue-100": "#F2F4FC",
  "blue-150": "#E8ECFC",
  "blue-200": "#D9DFFC",
  "blue-250": "#C7D0FD",
  "blue-300": "#B1BDFD",
  "blue-350": "#97A8FE",
  "blue-400": "#7A90FE",
  "blue-450": "#5B76FE",
  "blue-50": "#F7F8FC",
  "blue-500": "#3859FF",
  "blue-550": "#314CD9",
  "blue-600": "#2A41B6",
  "blue-650": "#243797",
  "blue-700": "#1E2D7B",
  "blue-750": "#192563",
  "blue-800": "#151F4E",
  "blue-850": "#12193E",
  "blue-900": "#101633",
  "blue-950": "#0F142E",
  "coal-100": "#F7F7F7",
  "coal-150": "#EDEDED",
  "coal-200": "#E7E7E7",
  "coal-250": "#E0E0E0",
  "coal-300": "#DAD8D8",
  "coal-350": "#D6D6D6",
  "coal-400": "#CFCFCF",
  "coal-450": "#C2C2C2",
  "coal-500": "#B0B0B0",
  "coal-550": "#9E9E9E",
  "coal-600": "#908E8E",
  "coal-650": "#888888",
  "coal-700": "#595959",
  "coal-750": "#545454",
  "coal-800": "#4B4B4B",
  "coal-850": "#414141",
  "coal-900": "#333333",
  "coral-100": "#FCE2E2",
  "coral-150": "#FFD7D7",
  "coral-200": "#FFC6C6",
  "coral-250": "#FFBDBD",
  "coral-300": "#FFB4B4",
  "coral-350": "#FFADAD",
  "coral-400": "#FF9E9E",
  "coral-450": "#FD9090",
  "coral-500": "#FF6464",
  "coral-550": "#EF5959",
  "coral-600": "#DB4F4F",
  "coral-650": "#C52C2C",
  "coral-700": "#BD0A0A",
  "coral-750": "#AA0606",
  "coral-800": "#8D0101",
  "coral-850": "#710101",
  "coral-900": "#600000",
  "cyan-100": "#E4F9FF",
  "cyan-150": "#DAF7FF",
  "cyan-200": "#CCF4FF",
  "cyan-250": "#C0F1FF",
  "cyan-300": "#B5ECFF",
  "cyan-350": "#A8E9FF",
  "cyan-400": "#9CE6FF",
  "cyan-450": "#8ADFFC",
  "cyan-500": "#68D3F8",
  "cyan-550": "#59C4E9",
  "cyan-600": "#0E9DCD",
  "cyan-650": "#049BCD",
  "cyan-700": "#0F8AB3",
  "cyan-750": "#0A789D",
  "cyan-800": "#005875",
  "cyan-850": "#024B63",
  "cyan-900": "#003E57",
  "gray-100": "#F1F2F5",
  "gray-150": "#E9EAEF",
  "gray-200": "#E0E2E8",
  "gray-250": "#D8DAE2",
  "gray-300": "#C7CAD5",
  "gray-350": "#AEB2C0",
  "gray-400": "#959AAC",
  "gray-450": "#7D8297",
  "gray-475": "#6F7489",
  "gray-50": "#FAFAFC",
  "gray-500": "#656B81",
  "gray-550": "#5D6376",
  "gray-600": "#555A6A",
  "gray-650": "#4D515F",
  "gray-700": "#454854",
  "gray-750": "#3C3F49",
  "gray-800": "#34363E",
  "gray-850": "#2B2D33",
  "gray-900": "#222428",
  "gray-950": "#1A1B1E",
  "green-100": "#EAF6E6",
  "green-150": "#DFF1DA",
  "green-200": "#CEE9C8",
  "green-250": "#BADEB1",
  "green-300": "#A1D295",
  "green-350": "#85C476",
  "green-400": "#65B452",
  "green-450": "#42A22B",
  "green-50": "#EFF9EC",
  "green-500": "#1C8F00",
  "green-550": "#1A7B02",
  "green-600": "#186904",
  "green-650": "#175906",
  "green-700": "#154B08",
  "green-750": "#143E09",
  "green-800": "#13340A",
  "green-850": "#122B0B",
  "green-900": "#11260C",
  "green-950": "#11230C",
  "lilac-100": "#EFEDFD",
  "lilac-150": "#EAE7FF",
  "lilac-200": "#DEDAFF",
  "lilac-250": "#CBC6FF",
  "lilac-300": "#BBB4FF",
  "lilac-350": "#B5A9FF",
  "lilac-400": "#B8ACFB",
  "lilac-450": "#9288EF",
  "lilac-500": "#8F7FEE",
  "lilac-550": "#8A72EB",
  "lilac-600": "#8167E5",
  "lilac-650": "#7C59DF",
  "lilac-700": "#6631D7",
  "lilac-750": "#5526B7",
  "lilac-800": "#461F98",
  "lilac-850": "#361777",
  "lilac-900": "#20084F",
  "lime-100": "#F1FECF",
  "lime-150": "#E2FBBD",
  "lime-200": "#DBFAAD",
  "lime-250": "#D1F09F",
  "lime-300": "#C6EF88",
  "lime-350": "#C2EB7F",
  "lime-400": "#B3E65F",
  "lime-450": "#A7DB5D",
  "lime-500": "#9ED452",
  "lime-550": "#97CD4B",
  "lime-600": "#89BA42",
  "lime-650": "#759F38",
  "lime-700": "#608521",
  "lime-750": "#486614",
  "lime-800": "#365318",
  "lime-850": "#2D4713",
  "lime-900": "#21370B",
  "moss-100": "#E3F7EA",
  "moss-150": "#C4FFD9",
  "moss-200": "#ADF0C7",
  "moss-250": "#9FF1BD",
  "moss-300": "#8AE9A8",
  "moss-350": "#79E49B",
  "moss-400": "#6AE08D",
  "moss-450": "#5DD581",
  "moss-500": "#2DC75C",
  "moss-550": "#24BC51",
  "moss-600": "#0FA83C",
  "moss-650": "#069330",
  "moss-700": "#067429",
  "moss-750": "#066625",
  "moss-800": "#0A5B23",
  "moss-850": "#0A491E",
  "moss-900": "#02400F",
  "ocean-100": "#E5F0FF",
  "ocean-150": "#D8E9FF",
  "ocean-200": "#C6DCFF",
  "ocean-250": "#B2D0FE",
  "ocean-300": "#A7C9FC",
  "ocean-350": "#A0C4FB",
  "ocean-400": "#86B4F9",
  "ocean-450": "#6DA4F6",
  "ocean-500": "#659DF2",
  "ocean-550": "#6297E6",
  "ocean-600": "#5688D3",
  "ocean-650": "#4978C0",
  "ocean-700": "#305BAB",
  "ocean-750": "#2C56A2",
  "ocean-800": "#1D4792",
  "ocean-850": "#113B87",
  "ocean-900": "#001D66",
  "orange-100": "#FFEEDE",
  "orange-150": "#FFE5CB",
  "orange-200": "#F8D3AF",
  "orange-250": "#FBCB9B",
  "orange-300": "#FFC795",
  "orange-350": "#FFBD83",
  "orange-400": "#FFB575",
  "orange-450": "#FFA95E",
  "orange-500": "#FE9F4D",
  "orange-550": "#FE953A",
  "orange-600": "#DA792B",
  "orange-650": "#D76F1A",
  "orange-700": "#9B4A08",
  "orange-750": "#9B4A08",
  "orange-800": "#843D03",
  "orange-850": "#6C3100",
  "orange-900": "#5C2000",
  "pink-100": "#FEF2FF",
  "pink-150": "#FFE3FC",
  "pink-200": "#FFD8F4",
  "pink-250": "#FFD2F2",
  "pink-300": "#FBBEEA",
  "pink-350": "#FFABEC",
  "pink-400": "#FD9AE7",
  "pink-450": "#F985DE",
  "pink-500": "#F17DE5",
  "pink-550": "#ED72E0",
  "pink-600": "#D55AC8",
  "pink-650": "#C851C3",
  "pink-700": "#AF3FB9",
  "pink-750": "#A334AC",
  "pink-800": "#8B1796",
  "pink-850": "#72157A",
  "pink-900": "#55055C",
  "red-100": "#FDF2F3",
  "red-150": "#FBE6E8",
  "red-200": "#F8D5D8",
  "red-250": "#F4BFC5",
  "red-300": "#F0A5AD",
  "red-350": "#EB8792",
  "red-400": "#E56673",
  "red-450": "#DF4051",
  "red-50": "#FEF7F8",
  "red-500": "#D8182C",
  "red-550": "#B91829",
  "red-600": "#9C1825",
  "red-650": "#821823",
  "red-700": "#6B1720",
  "red-750": "#57171E",
  "red-800": "#46171C",
  "red-850": "#38171A",
  "red-900": "#2F1719",
  "red-950": "#2B1719",
  "sunshine-100": "#FFFDE5",
  "sunshine-150": "#FFF7CA",
  "sunshine-200": "#FFF6B6",
  "sunshine-250": "#FFF79E",
  "sunshine-300": "#FFF09A",
  "sunshine-350": "#FFED7B",
  "sunshine-400": "#FFE86D",
  "sunshine-450": "#F9E05C",
  "sunshine-500": "#FFDC4A",
  "sunshine-550": "#F9D53D",
  "sunshine-600": "#E8C120",
  "sunshine-650": "#BA8A12",
  "sunshine-700": "#AF7E04",
  "sunshine-750": "#8E6A12",
  "sunshine-800": "#6E4F02",
  "sunshine-850": "#604400",
  "sunshine-900": "#503A03",
  "teal-100": "#E1FBF9",
  "teal-150": "#D7FFFC",
  "teal-200": "#C3FAF5",
  "teal-250": "#B6FAF4",
  "teal-300": "#A8F7F0",
  "teal-350": "#96F0E8",
  "teal-400": "#81E7DE",
  "teal-450": "#55D6CA",
  "teal-500": "#39C9BC",
  "teal-550": "#25B6A9",
  "teal-600": "#11A293",
  "teal-650": "#0A9285",
  "teal-700": "#187574",
  "teal-750": "#146A69",
  "teal-800": "#105A59",
  "teal-850": "#0A4949",
  "teal-900": "#0E4343",
  "yellow-100": "#FFF9E3",
  "yellow-150": "#FFF7D9",
  "yellow-200": "#FFF4CB",
  "yellow-250": "#FFEFB9",
  "yellow-300": "#FFEBA3",
  "yellow-350": "#FFE58B",
  "yellow-400": "#FFDF6F",
  "yellow-450": "#FFD850",
  "yellow-50": "#FFFAE7",
  "yellow-500": "#FFD02F",
  "yellow-550": "#D7B029",
  "yellow-600": "#B39223",
  "yellow-650": "#91771E",
  "yellow-700": "#746019",
  "yellow-750": "#5A4B15",
  "yellow-800": "#453911",
  "yellow-850": "#342C0F",
  "yellow-900": "#28220D",
  "yellow-950": "#231E0C"
};
var radii = {
  0: "0px",
  25: "2px",
  50: "4px",
  75: "6px",
  100: "8px",
  200: "16px",
  round: "999px"
};
var space = {
  0: "0px",
  25: "2px",
  50: "4px",
  100: "8px",
  150: "12px",
  200: "16px",
  300: "24px",
  350: "28px",
  400: "32px",
  500: "40px",
  600: "48px",
  700: "56px",
  800: "64px",
  1200: "96px",
  1600: "128px",
  2e3: "192px"
};
var lineHeights = {
  100: 1,
  200: 1.2,
  300: 1.35,
  400: 1.4,
  500: 1.5
};
var fontSizes = {
  125: "0.625rem",
  150: "0.75rem",
  175: "0.875rem",
  200: "1rem",
  250: "1.25rem",
  300: "1.5rem",
  350: "1.75rem",
  400: "2rem",
  500: "2.5rem",
  600: "3rem",
  700: "3.5rem",
  800: "4rem",
  900: "4.5rem",
  1e3: "5rem",
  1100: "5.5rem",
  1200: "6rem",
  1300: "6.5rem",
  1400: "7rem",
  1500: "7.5rem",
  1600: "8.5rem"
};
var borderWidths = {
  none: 0,
  sm: "1px",
  md: "2px",
  lg: "4px"
};
var fallback = "Noto Sans KR, Noto Sans JP, sans-serif";
var fonts = {
  heading: "Roobert PRO, Roobert, ".concat(fallback),
  body: "Noto Sans, OpenSans, ".concat(fallback)
};
var fontWeights = {
  regular: 400,
  semibold: 600
};
var sizesScales = [...Array(200)].reduce(
  (acc, _, i2) => {
    const position = i2 + 1;
    return {
      ...acc,
      [position]: "".concat(position * 4, "px")
    };
  },
  {}
);
var sizes = {
  "icon-200": "16px",
  "icon-300": "24px",
  "icon-400": "32px",
  ...sizesScales
};
var strokeWidths = {
  thin: "1.5px",
  normal: "2px",
  bold: "4px"
};
var zIndices = {
  "dropdown-menu": 100,
  select: 200,
  calendar: 200,
  popover: 300,
  tooltip: 400
};

// node_modules/@mirohq/design-system-themes/dist/module.js
var module_exports = {};
__export(module_exports, {
  base: () => base,
  dark: () => dark,
  light: () => light
});
var colors$1 = {
  "background-alpha": "$alpha-gray-100",
  "background-alpha-active": "$alpha-gray-50",
  "background-alpha-hover": "$alpha-gray-100",
  "background-alpha-neutrals-overlay": "#12193E66",
  "background-alpha-neutrals-overlay-subtle": "$alpha-black-200",
  "background-alpha-subtle": "$alpha-gray-50",
  "background-danger-prominent": "$red-500",
  "background-danger-prominent-active": "$red-600",
  "background-danger-prominent-hover": "$red-550",
  "background-danger-prominent-pressed": "$red-600",
  "background-danger-subtle": "$red-50",
  "background-danger-subtle-active": "$red-150",
  "background-danger-subtle-hover": "$red-100",
  "background-danger-subtle-pressed": "$red-150",
  "background-neutrals": "$white",
  "background-neutrals-active": "$gray-150",
  "background-neutrals-container": "$white",
  "background-neutrals-control": "$gray-300",
  "background-neutrals-control-hover": "$gray-350",
  "background-neutrals-control-pressed": "$gray-400",
  "background-neutrals-disabled": "$gray-150",
  "background-neutrals-hover": "$gray-100",
  "background-neutrals-inactive": "$gray-450",
  "background-neutrals-inactive-hover": "$gray-500",
  "background-neutrals-inverted": "$gray-950",
  "background-neutrals-inverted-subtle": "$gray-800",
  "background-neutrals-layout": "$white",
  "background-neutrals-page": "$gray-100",
  "background-neutrals-page-subtle": "$gray-150",
  "background-neutrals-pressed": "$gray-150",
  "background-neutrals-scrollbar": "$gray-300",
  "background-neutrals-scrollbar-active": "$gray-400",
  "background-neutrals-scrollbar-hover": "$gray-350",
  "background-neutrals-subtle": "$gray-100",
  "background-neutrals-subtle-active": "$gray-200",
  "background-neutrals-subtle-hover": "$gray-150",
  "background-neutrals-subtle-pressed": "$gray-200",
  "background-neutrals-transparent": "$transparent",
  "background-primary-prominent": "$blue-500",
  "background-primary-prominent-active": "$blue-600",
  "background-primary-prominent-hover": "$blue-550",
  "background-primary-prominent-pressed": "$blue-600",
  "background-primary-prominent-selected": "$blue-500",
  "background-primary-subtle": "$blue-100",
  "background-primary-subtle-active": "$blue-200",
  "background-primary-subtle-hover": "$blue-150",
  "background-primary-subtle-pressed": "$blue-200",
  "background-primary-subtle-selected": "$blue-150",
  "background-success-prominent": "$green-500",
  "background-success-prominent-active": "$green-600",
  "background-success-prominent-hover": "$green-550",
  "background-success-prominent-pressed": "$green-600",
  "background-success-subtle": "$green-50",
  "background-warning-prominent": "$yellow-500",
  "background-warning-subtle": "$yellow-100",
  "border-danger": "$red-500",
  "border-danger-active": "$red-600",
  "border-danger-hover": "$red-550",
  "border-danger-pressed": "$red-600",
  "border-danger-subtle": "$red-200",
  "border-focus-error-inner": "$white",
  "border-focus-error-middle": "$blue-400",
  "border-focus-error-outer": "$blue-200",
  "border-focus-inner": "$white",
  "border-focus-middle": "$blue-400",
  "border-focus-outer": "$blue-200",
  "border-focus-success-inner": "$white",
  "border-focus-success-middle": "$blue-400",
  "border-focus-success-outer": "$blue-200",
  "focus-keyboard": "#2B4DF8",
  "border-neutrals": "$gray-200",
  "border-neutrals-active": "$gray-350",
  "border-neutrals-controls": "$gray-450",
  "border-neutrals-controls-disabled": "$gray-150",
  "border-neutrals-disabled": "$gray-150",
  "border-neutrals-hover": "$gray-300",
  "border-neutrals-inverted": "$white",
  "border-neutrals-pressed": "$gray-350",
  "border-neutrals-subtle": "$gray-150",
  "border-neutrals-subtle-hover": "$gray-200",
  "border-neutrals-subtle-pressed": "$gray-250",
  "border-neutrals-text": "$gray-900",
  "border-neutrals-text-active": "$gray-950",
  "border-neutrals-text-hover": "$gray-950",
  "border-neutrals-text-subtle": "$gray-500",
  "border-neutrals-text-subtle-active": "$gray-600",
  "border-neutrals-text-subtle-hover": "$gray-550",
  "border-neutrals-transparent": "$transparent",
  "border-primary": "$blue-500",
  "border-primary-active": "$blue-600",
  "border-primary-hover": "$blue-550",
  "border-primary-inverted": "$blue-50",
  "border-primary-pressed": "$blue-600",
  "border-primary-selected": "$blue-550",
  "border-primary-subtle": "$blue-250",
  "border-success": "$green-500",
  "border-success-active": "$green-600",
  "border-success-hover": "$green-550",
  "border-success-pressed": "$green-600",
  "border-success-subtle": "$green-250",
  "border-warning": "$yellow-500",
  "border-warning-subtle": "$yellow-300",
  "button-background-primary": "$blue-500",
  "button-background-primary-hover": "$blue-550",
  "button-background-primary-pressed": "$blue-600",
  "button-background-secondary": "$gray-150",
  "button-background-secondary-hover": "$gray-200",
  "button-background-secondary-pressed": "$gray-250",
  "format-icon-diagram": "$orange-600",
  "format-icon-docs": "$cyan-600",
  "format-icon-external": "$teal-600",
  "format-icon-kanban": "$moss-600",
  "format-icon-prototype": "$lilac-600",
  "format-icon-slides": "$coral-600",
  "format-icon-table": "$moss-600",
  "format-icon-timeline": "$moss-600",
  "popup-background-static": "$gray-900",
  "popup-text-static": "$white",
  "tooltip-background": "$gray-950",
  "icon-danger": "$red-500",
  "icon-danger-active": "$red-600",
  "icon-danger-hover": "$red-550",
  "icon-danger-inverted": "$red-50",
  "icon-danger-pressed": "$red-600",
  "icon-neutrals": "$gray-900",
  "icon-neutrals-disabled": "$gray-350",
  "icon-neutrals-hover": "$gray-950",
  "icon-neutrals-inactive": "$gray-450",
  "icon-neutrals-inactive-hover": "$gray-500",
  "icon-neutrals-inverted": "$white",
  "icon-neutrals-inverted-hover": "$gray-50",
  "icon-neutrals-inverted-subtle": "$gray-100",
  "icon-neutrals-inverted-subtle-hover": "$gray-150",
  "icon-neutrals-placeholder": "$gray-350",
  "icon-neutrals-pressed": "$gray-950",
  "icon-neutrals-search": "$gray-500",
  "icon-neutrals-subtle": "$gray-500",
  "icon-neutrals-subtle-hover": "$gray-550",
  "icon-neutrals-subtle-pressed": "$gray-600",
  "icon-neutrals-text": "$gray-700",
  "icon-primary": "$blue-500",
  "icon-primary-active": "$blue-600",
  "icon-primary-hover": "$blue-550",
  "icon-primary-inverted": "$blue-50",
  "icon-primary-inverted-hover": "$blue-100",
  "icon-primary-pressed": "$blue-600",
  "icon-primary-selected": "$blue-550",
  "icon-success": "$green-600",
  "icon-success-active": "$green-700",
  "icon-success-hover": "$green-650",
  "icon-success-inverted": "$green-50",
  "icon-success-pressed": "$green-700",
  "icon-warning": "$yellow-800",
  "icon-warning-prominent": "$yellow-600",
  "icon-warning-subtle": "$yellow-700",
  "text-danger": "$red-500",
  "text-danger-active": "$red-600",
  "text-danger-hover": "$red-550",
  "text-danger-inverted": "$red-50",
  "text-danger-pressed": "$red-600",
  "text-neutrals": "$gray-900",
  "text-neutrals-active": "$gray-950",
  "text-neutrals-disabled": "$gray-350",
  "text-neutrals-hover": "$gray-950",
  "text-neutrals-inverted": "$white",
  "text-neutrals-inverted-hover": "$gray-50",
  "text-neutrals-inverted-subtle": "$gray-150",
  "text-neutrals-inverted-subtle-hover": "$gray-200",
  "text-neutrals-placeholder": "$gray-475",
  "text-neutrals-placeholder-only": "$gray-350",
  "text-neutrals-pressed": "$gray-950",
  "text-neutrals-subtle": "$gray-500",
  "text-neutrals-subtle-active": "$gray-700",
  "text-neutrals-subtle-hover": "$gray-550",
  "text-neutrals-subtle-pressed": "$gray-600",
  "text-primary": "$blue-500",
  "text-primary-active": "$blue-600",
  "text-primary-hover": "$blue-550",
  "text-primary-inverted": "$blue-50",
  "text-primary-inverted-subtle": "$blue-100",
  "text-primary-pressed": "$blue-600",
  "text-primary-selected": "$blue-550",
  "text-success": "$green-600",
  "text-success-active": "$green-700",
  "text-success-hover": "$green-650",
  "text-success-inverted": "$green-50",
  "text-success-pressed": "$green-700",
  "text-warning": "$yellow-800",
  "text-warning-subtle": "$yellow-600",
  "coal-background": "$coal-500",
  "coal-background-mild": "$coal-350",
  "coal-background-prominent": "$coal-700",
  "coal-background-subtle": "$coal-200",
  "coral-background": "$coral-500",
  "coral-background-mild": "$coral-350",
  "coral-background-prominent": "$coral-700",
  "coral-background-subtle": "$coral-200",
  "cyan-background": "$cyan-500",
  "cyan-background-mild": "$cyan-350",
  "cyan-background-prominent": "$cyan-700",
  "cyan-background-subtle": "$cyan-200",
  "lilac-background": "$lilac-500",
  "lilac-background-mild": "$lilac-350",
  "lilac-background-prominent": "$lilac-700",
  "lilac-background-subtle": "$lilac-200",
  "lime-background": "$lime-500",
  "lime-background-mild": "$lime-350",
  "lime-background-prominent": "$lime-700",
  "lime-background-subtle": "$lime-200",
  "moss-background": "$moss-500",
  "moss-background-mild": "$moss-350",
  "moss-background-prominent": "$moss-700",
  "moss-background-subtle": "$moss-200",
  "ocean-background": "$ocean-500",
  "ocean-background-mild": "$ocean-350",
  "ocean-background-prominent": "$ocean-700",
  "ocean-background-subtle": "$ocean-200",
  "orange-background": "$orange-500",
  "orange-background-mild": "$orange-350",
  "orange-background-prominent": "$orange-700",
  "orange-background-subtle": "$orange-200",
  "pink-background": "$pink-500",
  "pink-background-mild": "$pink-350",
  "pink-background-prominent": "$pink-700",
  "pink-background-subtle": "$pink-200",
  "sunshine-background": "$sunshine-500",
  "sunshine-background-mild": "$sunshine-350",
  "sunshine-background-prominent": "$sunshine-700",
  "sunshine-background-subtle": "$sunshine-200",
  "teal-background": "$teal-500",
  "teal-background-mild": "$teal-350",
  "teal-background-prominent": "$teal-700",
  "teal-background-subtle": "$teal-200",
  "coal-border": "$coal-600",
  "coal-border-prominent": "$coal-800",
  "coal-border-subtle": "$coal-450",
  "coral-border": "$coral-600",
  "coral-border-prominent": "$coral-800",
  "coral-border-subtle": "$coral-450",
  "cyan-border": "$cyan-600",
  "cyan-border-prominent": "$cyan-800",
  "cyan-border-subtle": "$cyan-450",
  "lilac-border": "$lilac-600",
  "lilac-border-prominent": "$lilac-800",
  "lilac-border-subtle": "$lilac-450",
  "lime-border": "$lime-650",
  "lime-border-prominent": "$lime-800",
  "lime-border-subtle": "$lime-450",
  "moss-border": "$moss-600",
  "moss-border-prominent": "$moss-800",
  "moss-border-subtle": "$moss-450",
  "ocean-border": "$ocean-600",
  "ocean-border-prominent": "$ocean-800",
  "ocean-border-subtle": "$ocean-450",
  "orange-border": "$orange-600",
  "orange-border-prominent": "$orange-800",
  "orange-border-subtle": "$orange-450",
  "pink-border": "$pink-600",
  "pink-border-prominent": "$pink-800",
  "pink-border-subtle": "$pink-450",
  "sunshine-border": "$sunshine-650",
  "sunshine-border-prominent": "$sunshine-750",
  "sunshine-border-subtle": "$sunshine-450",
  "teal-border": "$teal-600",
  "teal-border-prominent": "$teal-800",
  "teal-border-subtle": "$teal-450",
  "coal-avatar-background": "$coal-750",
  "coral-avatar-background": "$coral-750",
  "cyan-avatar-background": "$cyan-750",
  "light-coal-avatar-background": "$coal-450",
  "light-coral-avatar-background": "$coral-450",
  "light-cyan-avatar-background": "$cyan-450",
  "light-lilac-avatar-background": "$lilac-450",
  "light-lime-avatar-background": "$lime-450",
  "light-moss-avatar-background": "$moss-450",
  "light-ocean-avatar-background": "$ocean-450",
  "light-orange-avatar-background": "$orange-450",
  "light-pink-avatar-background": "$pink-450",
  "light-sunshine-avatar-background": "$sunshine-450",
  "light-teal-avatar-background": "$teal-450",
  "lilac-avatar-background": "$lilac-750",
  "lime-avatar-background": "$lime-750",
  "moss-avatar-background": "$moss-750",
  "ocean-avatar-background": "$ocean-750",
  "orange-avatar-background": "$orange-750",
  "pink-avatar-background": "$pink-750",
  "sunshine-avatar-background": "$sunshine-750",
  "teal-avatar-background": "$teal-750",
  "coral-comment-background": "$coral-750",
  "cyan-comment-background": "$cyan-650",
  "lime-comment-background": "$lime-650",
  "coal-cursor-background": "$coal-800",
  "coal-cursor-border": "$coal-650",
  "coal-cursor-border-prominent": "$coal-900",
  "coral-cursor-background": "$coral-800",
  "coral-cursor-border": "$coral-650",
  "coral-cursor-border-prominent": "$coral-900",
  "cyan-cursor-background": "$cyan-800",
  "cyan-cursor-border": "$cyan-650",
  "cyan-cursor-border-prominent": "$cyan-900",
  "light-coal-cursor-background": "$coal-300",
  "light-coral-cursor-background": "$coral-300",
  "light-cursor-background": "$ocean-300",
  "light-cyan-cursor-background": "$cyan-300",
  "light-lilac-cursor-background": "$lilac-300",
  "light-lime-cursor-background": "$lime-300",
  "light-moss-cursor-background": "$moss-300",
  "light-orange-cursor-background": "$orange-300",
  "light-pink-cursor-background": "$pink-300",
  "light-sunshine-cursor-background": "$sunshine-300",
  "light-teal-cursor-background": "$teal-300",
  "lilac-cursor-background": "$lilac-800",
  "lilac-cursor-border": "$lilac-650",
  "lilac-cursor-border-prominent": "$lilac-900",
  "lime-cursor-background": "$lime-800",
  "lime-cursor-border": "$lime-650",
  "lime-cursor-border-prominent": "$lime-900",
  "moss-cursor-background": "$moss-800",
  "moss-cursor-border": "$moss-650",
  "moss-cursor-border-prominent": "$moss-900",
  "ocean-cursor-background": "$ocean-800",
  "ocean-cursor-border": "$ocean-650",
  "ocean-cursor-border-prominent": "$ocean-900",
  "orange-cursor-background": "$orange-800",
  "orange-cursor-border": "$orange-650",
  "orange-cursor-border-prominent": "$orange-900",
  "pink-cursor-background": "$pink-800",
  "pink-cursor-border-prominent": "$pink-900",
  "pink-cursor-coal-border": "$pink-650",
  "sunshine-cursor-background": "$sunshine-800",
  "sunshine-cursor-border": "$sunshine-650",
  "susnhine-cursor-border-prominent": "$sunshine-900",
  "teal-cursor-background": "$teal-800",
  "teal-cursor-border": "$teal-650",
  "teal-cursor-border-prominent": "$teal-900",
  "black-sticky-background": "#151515",
  "coral-sticky-background": "$coral-400",
  "cyan-sticky-background": "$cyan-400",
  "light-coal-sticky-background": "#F3F5F7",
  "light-lime-sticky-background": "$lime-250",
  "light-ocean-sticky-background": "$ocean-250",
  "light-pink-sticky-background": "$pink-250",
  "light-sunshine-sticky-background": "$sunshine-250",
  "lilac-sticky-background": "$lilac-400",
  "lime-sticky-background": "$lime-400",
  "moss-sticky-background": "$moss-400",
  "ocean-sticky-background": "$ocean-400",
  "orange-sticky-background": "$orange-400",
  "pink-sticky-background": "$pink-400",
  "sunshine-sticky-background": "$sunshine-400",
  "teal-sticky-background": "$teal-400",
  "coal-icon": "$coal-900",
  "coal-icon-mild": "$coal-600",
  "coal-icon-subtle": "$coal-100",
  "coral-icon": "$coral-900",
  "coral-icon-mild": "$coral-600",
  "coral-icon-subtle": "$coral-100",
  "cyan-icon": "$cyan-900",
  "cyan-icon-mild": "$cyan-600",
  "cyan-icon-subtle": "$cyan-100",
  "lilac-icon": "$lilac-900",
  "lilac-icon-mild": "$lilac-600",
  "lilac-icon-subtle": "$lilac-100",
  "lime-icon": "$lime-900",
  "lime-icon-mild": "$lime-650",
  "lime-icon-subtle": "$lime-100",
  "moss-icon": "$moss-900",
  "moss-icon-mild": "$moss-600",
  "moss-icon-subtle": "$moss-100",
  "ocean-icon": "$ocean-900",
  "ocean-icon-mild": "$ocean-600",
  "ocean-icon-subtle": "$ocean-100",
  "orange-icon": "$orange-900",
  "orange-icon-mild": "$orange-600",
  "orange-icon-subtle": "$orange-100",
  "pink-icon": "$pink-900",
  "pink-icon-mild": "$pink-600",
  "pink-icon-subtle": "$pink-100",
  "sunshine-icon": "$sunshine-900",
  "sunshine-icon-mild": "$sunshine-650",
  "sunshine-icon-subtle": "$sunshine-100",
  "teal-icon": "$teal-900",
  "teal-icon-mild": "$teal-600",
  "teal-icon-subtle": "$teal-100",
  "coal-text": "$coal-900",
  "coal-text-mild": "$coal-700",
  "coal-text-subtle": "$coal-100",
  "coral-text": "$coral-900",
  "coral-text-mild": "$coral-700",
  "coral-text-subtle": "$coral-100",
  "cyan-text": "$cyan-900",
  "cyan-text-mild": "$cyan-700",
  "cyan-text-subtle": "$cyan-100",
  "lilac-text": "$lilac-900",
  "lilac-text-mild": "$lilac-650",
  "lilac-text-subtle": "$lilac-100",
  "lime-text": "$lime-900",
  "lime-text-mild": "$lime-700",
  "lime-text-subtle": "$lime-100",
  "moss-text": "$moss-900",
  "moss-text-mild": "$moss-700",
  "moss-text-subtle": "$moss-100",
  "ocean-text": "$ocean-900",
  "ocean-text-mild": "$ocean-700",
  "ocean-text-subtle": "$ocean-100",
  "orange-text": "$orange-900",
  "orange-text-mild": "$orange-700",
  "orange-text-subtle": "$orange-100",
  "pink-text": "$pink-900",
  "pink-text-mild": "$pink-650",
  "pink-text-subtle": "$pink-100",
  "sunshine-text": "$sunshine-900",
  "sunshine-text-mild": "$sunshine-700",
  "sunshine-text-subtle": "$sunshine-100",
  "teal-text": "$teal-900",
  "teal-text-mild": "$teal-700",
  "teal-text-subtle": "$teal-100"
};
var colors2 = {
  "background-alpha": "$alpha-black-100",
  "background-alpha-active": "$alpha-black-50",
  "background-alpha-hover": "$alpha-black-100",
  "background-alpha-neutrals-overlay": "#12193E66",
  "background-alpha-neutrals-overlay-subtle": "$alpha-black-200",
  "background-alpha-subtle": "$alpha-black-50",
  "background-danger-prominent": "$red-500",
  "background-danger-prominent-active": "$red-400",
  "background-danger-prominent-hover": "$red-450",
  "background-danger-prominent-pressed": "$red-400",
  "background-danger-subtle": "$red-900",
  "background-danger-subtle-active": "$red-500",
  "background-danger-subtle-hover": "$red-550",
  "background-danger-subtle-pressed": "$red-500",
  "background-neutrals": "$gray-950",
  "background-neutrals-active": "$gray-850",
  "background-neutrals-container": "$gray-850",
  "background-neutrals-control": "$gray-700",
  "background-neutrals-control-hover": "$gray-650",
  "background-neutrals-control-pressed": "$gray-600",
  "background-neutrals-disabled": "$gray-850",
  "background-neutrals-hover": "$gray-900",
  "background-neutrals-inactive": "$gray-500",
  "background-neutrals-inactive-hover": "$gray-600",
  "background-neutrals-inverted": "$white",
  "background-neutrals-inverted-subtle": "$gray-150",
  "background-neutrals-layout": "$gray-850",
  "background-neutrals-page": "$gray-850",
  "background-neutrals-page-subtle": "$gray-800",
  "background-neutrals-pressed": "$gray-850",
  "background-neutrals-scrollbar": "$gray-700",
  "background-neutrals-scrollbar-active": "$gray-600",
  "background-neutrals-scrollbar-hover": "$gray-650",
  "background-neutrals-subtle": "$gray-750",
  "background-neutrals-subtle-active": "$gray-650",
  "background-neutrals-subtle-hover": "$gray-700",
  "background-neutrals-subtle-pressed": "$gray-650",
  "background-neutrals-transparent": "$transparent",
  "background-primary-prominent": "$blue-400",
  "background-primary-prominent-active": "$blue-300",
  "background-primary-prominent-hover": "$blue-350",
  "background-primary-prominent-pressed": "$blue-300",
  "background-primary-prominent-selected": "$blue-400",
  "background-primary-subtle": "$blue-900",
  "background-primary-subtle-active": "$blue-600",
  "background-primary-subtle-hover": "$blue-650",
  "background-primary-subtle-pressed": "$blue-600",
  "background-primary-subtle-selected": "$blue-700",
  "background-success-prominent": "$green-500",
  "background-success-prominent-active": "$green-400",
  "background-success-prominent-hover": "$green-450",
  "background-success-prominent-pressed": "$green-400",
  "background-success-subtle": "$green-900",
  "background-warning-prominent": "$yellow-400",
  "background-warning-subtle": "$yellow-900",
  "border-danger": "$red-400",
  "border-danger-active": "$red-300",
  "border-danger-hover": "$red-350",
  "border-danger-pressed": "$red-300",
  "border-danger-subtle": "$red-700",
  "border-focus-error-inner": "$gray-950",
  "border-focus-error-middle": "$blue-350",
  "border-focus-error-outer": "$blue-550",
  "border-focus-inner": "$gray-950",
  "border-focus-middle": "$blue-350",
  "border-focus-outer": "$blue-550",
  "border-focus-success-inner": "$gray-950",
  "border-focus-success-middle": "$blue-350",
  "border-focus-success-outer": "$blue-550",
  "focus-keyboard": "#2B4DF8",
  "border-neutrals": "$gray-650",
  "border-neutrals-active": "$gray-350",
  "border-neutrals-controls": "$gray-450",
  "border-neutrals-controls-disabled": "$gray-800",
  "border-neutrals-disabled": "$gray-750",
  "border-neutrals-hover": "$gray-550",
  "border-neutrals-inverted": "$gray-950",
  "border-neutrals-pressed": "$gray-450",
  "border-neutrals-subtle": "$gray-800",
  "border-neutrals-subtle-hover": "$gray-700",
  "border-neutrals-subtle-pressed": "$gray-650",
  "border-neutrals-text": "$gray-100",
  "border-neutrals-text-active": "$gray-50",
  "border-neutrals-text-hover": "$gray-50",
  "border-neutrals-text-subtle": "$gray-300",
  "border-neutrals-text-subtle-active": "$gray-100",
  "border-neutrals-text-subtle-hover": "$gray-200",
  "border-neutrals-transparent": "$transparent",
  "border-primary": "$blue-400",
  "border-primary-active": "$blue-300",
  "border-primary-hover": "$blue-350",
  "border-primary-inverted": "$blue-900",
  "border-primary-pressed": "$blue-300",
  "border-primary-selected": "$blue-400",
  "border-primary-subtle": "$blue-750",
  "border-success": "$green-500",
  "border-success-active": "$green-400",
  "border-success-hover": "$green-450",
  "border-success-pressed": "$green-400",
  "border-success-subtle": "$green-700",
  "border-warning": "$yellow-500",
  "border-warning-subtle": "$yellow-700",
  "button-background-primary": "$blue-400",
  "button-background-primary-hover": "$blue-350",
  "button-background-primary-pressed": "$blue-300",
  "button-background-secondary": "$gray-750",
  "button-background-secondary-hover": "$gray-700",
  "button-background-secondary-pressed": "$gray-650",
  "format-icon-diagram": "$orange-600",
  "format-icon-docs": "$cyan-600",
  "format-icon-external": "$teal-600",
  "format-icon-kanban": "$moss-600",
  "format-icon-prototype": "$lilac-600",
  "format-icon-slides": "$coral-600",
  "format-icon-table": "$moss-600",
  "format-icon-timeline": "$moss-600",
  "popup-background-static": "$gray-800",
  "popup-text-static": "$white",
  "tooltip-background": "$gray-650",
  "icon-danger": "$red-400",
  "icon-danger-active": "$red-300",
  "icon-danger-hover": "$red-350",
  "icon-danger-inverted": "$red-900",
  "icon-danger-pressed": "$red-300",
  "icon-neutrals": "$gray-50",
  "icon-neutrals-disabled": "$gray-450",
  "icon-neutrals-hover": "$gray-100",
  "icon-neutrals-inactive": "$gray-400",
  "icon-neutrals-inactive-hover": "$gray-300",
  "icon-neutrals-inverted": "$gray-950",
  "icon-neutrals-inverted-hover": "$gray-900",
  "icon-neutrals-inverted-subtle": "$gray-700",
  "icon-neutrals-inverted-subtle-hover": "$gray-650",
  "icon-neutrals-placeholder": "$gray-650",
  "icon-neutrals-pressed": "$gray-150",
  "icon-neutrals-search": "$gray-400",
  "icon-neutrals-subtle": "$gray-300",
  "icon-neutrals-subtle-hover": "$gray-250",
  "icon-neutrals-subtle-pressed": "$gray-200",
  "icon-neutrals-text": "$gray-300",
  "icon-primary": "$blue-400",
  "icon-primary-active": "$blue-300",
  "icon-primary-hover": "$blue-350",
  "icon-primary-inverted": "$blue-900",
  "icon-primary-inverted-hover": "$blue-850",
  "icon-primary-pressed": "$blue-300",
  "icon-primary-selected": "$blue-400",
  "icon-success": "$green-400",
  "icon-success-active": "$green-300",
  "icon-success-hover": "$green-350",
  "icon-success-inverted": "$green-900",
  "icon-success-pressed": "$green-300",
  "icon-warning": "$yellow-200",
  "icon-warning-prominent": "$yellow-300",
  "icon-warning-subtle": "$yellow-200",
  "text-danger": "$red-400",
  "text-danger-active": "$red-300",
  "text-danger-hover": "$red-350",
  "text-danger-inverted": "$red-900",
  "text-danger-pressed": "$red-300",
  "text-neutrals": "$gray-50",
  "text-neutrals-active": "$gray-150",
  "text-neutrals-disabled": "$gray-450",
  "text-neutrals-hover": "$gray-100",
  "text-neutrals-inverted": "$gray-900",
  "text-neutrals-inverted-hover": "$gray-850",
  "text-neutrals-inverted-subtle": "$gray-700",
  "text-neutrals-inverted-subtle-hover": "$gray-650",
  "text-neutrals-placeholder": "$gray-450",
  "text-neutrals-placeholder-only": "$gray-650",
  "text-neutrals-pressed": "$gray-150",
  "text-neutrals-subtle": "$gray-300",
  "text-neutrals-subtle-active": "$gray-200",
  "text-neutrals-subtle-hover": "$gray-250",
  "text-neutrals-subtle-pressed": "$gray-200",
  "text-primary": "$blue-400",
  "text-primary-active": "$blue-300",
  "text-primary-hover": "$blue-350",
  "text-primary-inverted": "$blue-900",
  "text-primary-inverted-subtle": "$blue-700",
  "text-primary-pressed": "$blue-300",
  "text-primary-selected": "$blue-400",
  "text-success": "$green-400",
  "text-success-active": "$green-300",
  "text-success-hover": "$green-350",
  "text-success-inverted": "$green-900",
  "text-success-pressed": "$green-300",
  "text-warning": "$yellow-200",
  "text-warning-subtle": "$yellow-300",
  "coal-background": "$coal-500",
  "coal-background-mild": "$coal-350",
  "coal-background-prominent": "$coal-700",
  "coal-background-subtle": "$coal-200",
  "coral-background": "$coral-500",
  "coral-background-mild": "$coral-350",
  "coral-background-prominent": "$coral-700",
  "coral-background-subtle": "$coral-200",
  "cyan-background": "$cyan-500",
  "cyan-background-mild": "$cyan-350",
  "cyan-background-prominent": "$cyan-700",
  "cyan-background-subtle": "$cyan-200",
  "lilac-background": "$lilac-500",
  "lilac-background-mild": "$lilac-350",
  "lilac-background-prominent": "$lilac-700",
  "lilac-background-subtle": "$lilac-200",
  "lime-background": "$lime-500",
  "lime-background-mild": "$lime-350",
  "lime-background-prominent": "$lime-700",
  "lime-background-subtle": "$lime-200",
  "moss-background": "$moss-500",
  "moss-background-mild": "$moss-350",
  "moss-background-prominent": "$moss-700",
  "moss-background-subtle": "$moss-200",
  "ocean-background": "$ocean-500",
  "ocean-background-mild": "$ocean-350",
  "ocean-background-prominent": "$ocean-700",
  "ocean-background-subtle": "$ocean-200",
  "orange-background": "$orange-500",
  "orange-background-mild": "$orange-350",
  "orange-background-prominent": "$orange-700",
  "orange-background-subtle": "$orange-200",
  "pink-background": "$pink-500",
  "pink-background-mild": "$pink-350",
  "pink-background-prominent": "$pink-700",
  "pink-background-subtle": "$pink-200",
  "sunshine-background": "$sunshine-500",
  "sunshine-background-mild": "$sunshine-350",
  "sunshine-background-prominent": "$sunshine-700",
  "sunshine-background-subtle": "$sunshine-200",
  "teal-background": "$teal-500",
  "teal-background-mild": "$teal-350",
  "teal-background-prominent": "$teal-700",
  "teal-background-subtle": "$teal-200",
  "coal-border": "$coal-600",
  "coal-border-prominent": "$coal-800",
  "coal-border-subtle": "$coal-450",
  "coral-border": "$coral-600",
  "coral-border-prominent": "$coral-800",
  "coral-border-subtle": "$coral-450",
  "cyan-border": "$cyan-600",
  "cyan-border-prominent": "$cyan-800",
  "cyan-border-subtle": "$cyan-450",
  "lilac-border": "$lilac-600",
  "lilac-border-prominent": "$lilac-800",
  "lilac-border-subtle": "$lilac-450",
  "lime-border": "$lime-650",
  "lime-border-prominent": "$lime-800",
  "lime-border-subtle": "$lime-450",
  "moss-border": "$moss-600",
  "moss-border-prominent": "$moss-800",
  "moss-border-subtle": "$moss-450",
  "ocean-border": "$ocean-600",
  "ocean-border-prominent": "$ocean-800",
  "ocean-border-subtle": "$ocean-450",
  "orange-border": "$orange-600",
  "orange-border-prominent": "$orange-800",
  "orange-border-subtle": "$orange-450",
  "pink-border": "$pink-600",
  "pink-border-prominent": "$pink-800",
  "pink-border-subtle": "$pink-450",
  "sunshine-border": "$sunshine-650",
  "sunshine-border-prominent": "$sunshine-750",
  "sunshine-border-subtle": "$sunshine-450",
  "teal-border": "$teal-600",
  "teal-border-prominent": "$teal-800",
  "teal-border-subtle": "$teal-450",
  "coal-avatar-background": "$coal-750",
  "coral-avatar-background": "$coral-750",
  "cyan-avatar-background": "$cyan-750",
  "light-coal-avatar-background": "$coal-450",
  "light-coral-avatar-background": "$coral-450",
  "light-cyan-avatar-background": "$cyan-450",
  "light-lilac-avatar-background": "$lilac-450",
  "light-lime-avatar-background": "$lime-450",
  "light-moss-avatar-background": "$moss-450",
  "light-ocean-avatar-background": "$ocean-450",
  "light-orange-avatar-background": "$orange-450",
  "light-pink-avatar-background": "$pink-450",
  "light-sunshine-avatar-background": "$sunshine-450",
  "light-teal-avatar-background": "$teal-450",
  "lilac-avatar-background": "$lilac-750",
  "lime-avatar-background": "$lime-750",
  "moss-avatar-background": "$moss-750",
  "ocean-avatar-background": "$ocean-750",
  "orange-avatar-background": "$orange-750",
  "pink-avatar-background": "$pink-750",
  "sunshine-avatar-background": "$sunshine-750",
  "teal-avatar-background": "$teal-750",
  "coral-comment-background": "$coral-750",
  "cyan-comment-background": "$cyan-650",
  "lime-comment-background": "$lime-650",
  "coal-cursor-background": "$coal-800",
  "coal-cursor-border": "$coal-650",
  "coal-cursor-border-prominent": "$coal-900",
  "coral-cursor-background": "$coral-800",
  "coral-cursor-border": "$coral-650",
  "coral-cursor-border-prominent": "$coral-900",
  "cyan-cursor-background": "$cyan-800",
  "cyan-cursor-border": "$cyan-650",
  "cyan-cursor-border-prominent": "$cyan-900",
  "light-coal-cursor-background": "$coal-300",
  "light-coral-cursor-background": "$coral-300",
  "light-cursor-background": "$ocean-300",
  "light-cyan-cursor-background": "$cyan-300",
  "light-lilac-cursor-background": "$lilac-300",
  "light-lime-cursor-background": "$lime-300",
  "light-moss-cursor-background": "$moss-300",
  "light-orange-cursor-background": "$orange-300",
  "light-pink-cursor-background": "$pink-300",
  "light-sunshine-cursor-background": "$sunshine-300",
  "light-teal-cursor-background": "$teal-300",
  "lilac-cursor-background": "$lilac-800",
  "lilac-cursor-border": "$lilac-650",
  "lilac-cursor-border-prominent": "$lilac-900",
  "lime-cursor-background": "$lime-800",
  "lime-cursor-border": "$lime-650",
  "lime-cursor-border-prominent": "$lime-900",
  "moss-cursor-background": "$moss-800",
  "moss-cursor-border": "$moss-650",
  "moss-cursor-border-prominent": "$moss-900",
  "ocean-cursor-background": "$ocean-800",
  "ocean-cursor-border": "$ocean-650",
  "ocean-cursor-border-prominent": "$ocean-900",
  "orange-cursor-background": "$orange-800",
  "orange-cursor-border": "$orange-650",
  "orange-cursor-border-prominent": "$orange-900",
  "pink-cursor-background": "$pink-800",
  "pink-cursor-border-prominent": "$pink-900",
  "pink-cursor-coal-border": "$pink-650",
  "sunshine-cursor-background": "$sunshine-800",
  "sunshine-cursor-border": "$sunshine-650",
  "susnhine-cursor-border-prominent": "$sunshine-900",
  "teal-cursor-background": "$teal-800",
  "teal-cursor-border": "$teal-650",
  "teal-cursor-border-prominent": "$teal-900",
  "black-sticky-background": "#151515",
  "coral-sticky-background": "$coral-400",
  "cyan-sticky-background": "$cyan-400",
  "light-coal-sticky-background": "#F3F5F7",
  "light-lime-sticky-background": "$lime-250",
  "light-ocean-sticky-background": "$ocean-250",
  "light-pink-sticky-background": "$pink-250",
  "light-sunshine-sticky-background": "$sunshine-250",
  "lilac-sticky-background": "$lilac-400",
  "lime-sticky-background": "$lime-400",
  "moss-sticky-background": "$moss-400",
  "ocean-sticky-background": "$ocean-400",
  "orange-sticky-background": "$orange-400",
  "pink-sticky-background": "$pink-400",
  "sunshine-sticky-background": "$sunshine-400",
  "teal-sticky-background": "$teal-400",
  "coal-icon": "$coal-900",
  "coal-icon-mild": "$coal-600",
  "coal-icon-subtle": "$coal-100",
  "coral-icon": "$coral-900",
  "coral-icon-mild": "$coral-600",
  "coral-icon-subtle": "$coral-100",
  "cyan-icon": "$cyan-900",
  "cyan-icon-mild": "$cyan-600",
  "cyan-icon-subtle": "$cyan-100",
  "lilac-icon": "$lilac-900",
  "lilac-icon-mild": "$lilac-600",
  "lilac-icon-subtle": "$lilac-100",
  "lime-icon": "$lime-900",
  "lime-icon-mild": "$lime-650",
  "lime-icon-subtle": "$lime-100",
  "moss-icon": "$moss-900",
  "moss-icon-mild": "$moss-600",
  "moss-icon-subtle": "$moss-100",
  "ocean-icon": "$ocean-900",
  "ocean-icon-mild": "$ocean-600",
  "ocean-icon-subtle": "$ocean-100",
  "orange-icon": "$orange-900",
  "orange-icon-mild": "$orange-600",
  "orange-icon-subtle": "$orange-100",
  "pink-icon": "$pink-900",
  "pink-icon-mild": "$pink-600",
  "pink-icon-subtle": "$pink-100",
  "sunshine-icon": "$sunshine-900",
  "sunshine-icon-mild": "$sunshine-650",
  "sunshine-icon-subtle": "$sunshine-100",
  "teal-icon": "$teal-900",
  "teal-icon-mild": "$teal-600",
  "teal-icon-subtle": "$teal-100",
  "coal-text": "$coal-900",
  "coal-text-mild": "$coal-700",
  "coal-text-subtle": "$coal-100",
  "coral-text": "$coral-900",
  "coral-text-mild": "$coral-700",
  "coral-text-subtle": "$coral-100",
  "cyan-text": "$cyan-900",
  "cyan-text-mild": "$cyan-700",
  "cyan-text-subtle": "$cyan-100",
  "lilac-text": "$lilac-900",
  "lilac-text-mild": "$lilac-650",
  "lilac-text-subtle": "$lilac-100",
  "lime-text": "$lime-900",
  "lime-text-mild": "$lime-700",
  "lime-text-subtle": "$lime-100",
  "moss-text": "$moss-900",
  "moss-text-mild": "$moss-700",
  "moss-text-subtle": "$moss-100",
  "ocean-text": "$ocean-900",
  "ocean-text-mild": "$ocean-700",
  "ocean-text-subtle": "$ocean-100",
  "orange-text": "$orange-900",
  "orange-text-mild": "$orange-700",
  "orange-text-subtle": "$orange-100",
  "pink-text": "$pink-900",
  "pink-text-mild": "$pink-650",
  "pink-text-subtle": "$pink-100",
  "sunshine-text": "$sunshine-900",
  "sunshine-text-mild": "$sunshine-700",
  "sunshine-text-subtle": "$sunshine-100",
  "teal-text": "$teal-900",
  "teal-text-mild": "$teal-700",
  "teal-text-subtle": "$teal-100"
};
var aliasShadows = {
  focus: "0 0 0 2px $colors$border-focus-inner, 0 0 0 4px $colors$focus-keyboard",
  "elevation-0": "0 0 0 1px $colors$gray-200",
  "elevation-100": "0 2px 4px 0px #22242814",
  "elevation-200": "0 2px 8px 0 #2224281f, 0 0 12px 0 #2224280A"
};
var shadows$1 = {
  50: "0 4px 16px rgba(5, 0, 56, 0.07)",
  100: "0 8px 32px rgba(5, 0, 56, 0.03)",
  ...aliasShadows
};
var shadows = {
  50: "0 0 8px 0 rgba(9,9,9,.65)",
  100: "0 0 16px 0 rgba(9,9,9,.65)",
  ...aliasShadows
};
var light = Object.freeze({
  colors: colors$1,
  shadows: shadows$1
});
var dark = Object.freeze({
  colors: colors2,
  shadows
});
var base = light;

// node_modules/@mirohq/design-system-stitches/dist/module.js
var import_lodash = __toESM(require_lodash());
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var import_react9 = __toESM(require_react());
var themeMap = {
  background: "colors",
  backgroundColor: "colors",
  backgroundImage: "colors",
  blockSize: "sizes",
  border: "colors",
  borderBlock: "colors",
  borderBlockEnd: "colors",
  borderBlockStart: "colors",
  borderBottom: "colors",
  borderBottomColor: "colors",
  borderBottomLeftRadius: "radii",
  borderBottomRightRadius: "radii",
  borderBottomStyle: "border-styles",
  borderBottomWidth: "border-widths",
  borderColor: "colors",
  borderImage: "colors",
  borderInline: "colors",
  borderInlineEnd: "colors",
  borderInlineStart: "colors",
  borderLeft: "colors",
  borderLeftColor: "colors",
  borderLeftStyle: "border-styles",
  borderLeftWidth: "border-widths",
  borderRadius: "radii",
  borderRight: "colors",
  borderRightColor: "colors",
  borderRightStyle: "border-styles",
  borderRightWidth: "border-widths",
  borderSpacing: "space",
  borderStyle: "border-styles",
  borderTop: "colors",
  borderTopColor: "colors",
  borderTopLeftRadius: "radii",
  borderTopRightRadius: "radii",
  borderTopStyle: "border-styles",
  borderTopWidth: "border-widths",
  borderWidth: "border-widths",
  bottom: "space",
  boxShadow: "shadows",
  caretColor: "colors",
  color: "colors",
  columnGap: "space",
  columnRuleColor: "colors",
  fill: "colors",
  flexBasis: "sizes",
  fontFamily: "fonts",
  fontSize: "font-sizes",
  fontWeight: "font-weights",
  gap: "space",
  gridColumnGap: "space",
  gridGap: "space",
  gridRowGap: "space",
  gridTemplateColumns: "sizes",
  gridTemplateRows: "sizes",
  height: "sizes",
  inlineSize: "sizes",
  inset: "space",
  insetBlock: "space",
  insetBlockEnd: "space",
  insetBlockStart: "space",
  insetInline: "space",
  insetInlineEnd: "space",
  insetInlineStart: "space",
  left: "space",
  letterSpacing: "letter-spacings",
  lineHeight: "line-heights",
  margin: "space",
  marginBlock: "space",
  marginBlockEnd: "space",
  marginBlockStart: "space",
  marginBottom: "space",
  marginInline: "space",
  marginInlineEnd: "space",
  marginInlineStart: "space",
  marginLeft: "space",
  marginRight: "space",
  marginTop: "space",
  maxBlockSize: "sizes",
  maxHeight: "sizes",
  maxInlineSize: "sizes",
  maxWidth: "sizes",
  minBlockSize: "sizes",
  minHeight: "sizes",
  minInlineSize: "sizes",
  minWidth: "sizes",
  outline: "colors",
  outlineColor: "colors",
  padding: "space",
  paddingBlock: "space",
  paddingBlockEnd: "space",
  paddingBlockStart: "space",
  paddingBottom: "space",
  paddingInline: "space",
  paddingInlineEnd: "space",
  paddingInlineStart: "space",
  paddingLeft: "space",
  paddingRight: "space",
  paddingTop: "space",
  right: "space",
  rowGap: "space",
  scrollMargin: "space",
  scrollMarginBlock: "space",
  scrollMarginBlockEnd: "space",
  scrollMarginBlockStart: "space",
  scrollMarginBottom: "space",
  scrollMarginInline: "space",
  scrollMarginInlineEnd: "space",
  scrollMarginInlineStart: "space",
  scrollMarginLeft: "space",
  scrollMarginRight: "space",
  scrollMarginTop: "space",
  scrollPadding: "space",
  scrollPaddingBlock: "space",
  scrollPaddingBlockEnd: "space",
  scrollPaddingBlockStart: "space",
  scrollPaddingBottom: "space",
  scrollPaddingInline: "space",
  scrollPaddingInlineEnd: "space",
  scrollPaddingInlineStart: "space",
  scrollPaddingLeft: "space",
  scrollPaddingRight: "space",
  scrollPaddingTop: "space",
  stroke: "colors",
  strokeWidth: "stroke-width",
  textDecorationColor: "colors",
  textShadow: "shadows",
  top: "space",
  transition: "transitions",
  width: "sizes",
  zIndex: "z-indices"
};
var theme$1 = {
  "border-widths": borderWidths,
  colors: (0, import_lodash.default)({}, colors, base.colors),
  "font-sizes": fontSizes,
  "font-weights": fontWeights,
  "line-heights": lineHeights,
  fonts,
  radii,
  shadows: base.shadows,
  sizes,
  space,
  "stroke-width": strokeWidths,
  "z-indices": zIndices
};
var utils = {
  paddingX: (value) => ({
    paddingLeft: value,
    paddingRight: value
  }),
  paddingY: (value) => ({
    paddingTop: value,
    paddingBottom: value
  }),
  marginX: (value) => ({
    marginLeft: value,
    marginRight: value
  }),
  marginY: (value) => ({
    marginTop: value,
    marginBottom: value
  }),
  square: (value) => ({
    width: value,
    height: value
  }),
  _hover: (css2) => ({
    "&:hover, &[data-hovered]": css2
  })
};
var media = {
  // reducedMotion: '(prefers-reduced-motion: reduce)',
  // motion: '(prefers-reduced-motion: no-preference)',
  // hover: '(any-hover: hover)',
};
var stitches = q({
  theme: theme$1,
  media,
  utils,
  themeMap
});
var {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  prefix,
  styled: styled$1,
  theme
} = stitches;
var fontFace = (...fonts2) => globalCss({
  "@font-face": fonts2
})();
function setMedia(media2) {
  config.media = {
    ...config.media,
    ...media2
  };
}
function setCssUtils(utils2) {
  config.utils = {
    ...config.utils,
    ...utils2
  };
}
var AS_ERROR = "Polymorphism via `as` prop is not available in styled components.";
var STYLING_ATTRS_ERROR = "The `className` and `style` attributes are not avaialable in styled components.";
var styleWithCssVars = (style, themeMap2) => Object.entries(style).reduce(
  (acc, [prop, value]) => {
    var _a;
    const mapKeyForProp = themeMap2[prop];
    const mapping = theme[mapKeyForProp];
    const parsedValue = typeof value === "string" && /^\$.+$/.test(value) ? (_a = mapping[value.replace("$", "")]) == null ? void 0 : _a.computedValue : value;
    return {
      ...acc,
      [prop]: parsedValue
    };
  },
  {}
);
var styled = (element, composers) => {
  const StyledComponent = styled$1(element, composers != null ? composers : {});
  const Component = import_react9.default.forwardRef(
    (props, forwardRef3) => {
      const {
        as,
        className,
        style,
        UNSAFE_style,
        // eslint-disable-line @typescript-eslint/naming-convention
        ...restProps
      } = props;
      const onlyStyledClasses = typeof className === "string" ? className == null ? void 0 : className.split(" ").filter((x2) => x2.match("".concat(prefix, "c-.+"))).join(" ") : "";
      const parsedStyle = UNSAFE_style !== void 0 ? styleWithCssVars(UNSAFE_style, config.themeMap) : onlyStyledClasses !== "" ? style : void 0;
      if (className !== void 0 && onlyStyledClasses !== className || typeof style === "object" && style !== null && Object.keys(style).length > 0 && onlyStyledClasses === "") {
        console.error(STYLING_ATTRS_ERROR);
      }
      if (as !== void 0) {
        console.error(AS_ERROR);
      }
      return (0, import_jsx_runtime3.jsx)(
        StyledComponent,
        {
          ...restProps,
          className: onlyStyledClasses,
          style: parsedStyle,
          ref: forwardRef3
        }
      );
    }
  );
  Component.displayName = "Styled.ForwardRef";
  Component.toString = StyledComponent.toString;
  Component.className = StyledComponent.className;
  Component.selector = StyledComponent.selector;
  return Component;
};
var stitchesCssRoot = {
  prefix,
  selector: theme.selector,
  className: theme.className
};

// node_modules/@mirohq/design-system-utils/dist/module.js
var import_react32 = __toESM(require_react());

// node_modules/@react-aria/utils/dist/useLayoutEffect.mjs
var import_react10 = __toESM(require_react(), 1);
var $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof document !== "undefined" ? (0, import_react10.default).useLayoutEffect : () => {
};

// node_modules/@react-aria/utils/dist/useValueEffect.mjs
var import_react11 = __toESM(require_react(), 1);
function $1dbecbe27a04f9af$export$14d238f342723f25(defaultValue) {
  let [value, setValue] = (0, import_react11.useState)(defaultValue);
  let currValue = (0, import_react11.useRef)(value);
  let effect = (0, import_react11.useRef)(null);
  let nextRef = (0, import_react11.useRef)(() => {
    if (!effect.current) return;
    let newValue = effect.current.next();
    if (newValue.done) {
      effect.current = null;
      return;
    }
    if (currValue.current === newValue.value) nextRef.current();
    else setValue(newValue.value);
  });
  (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(() => {
    currValue.current = value;
    if (effect.current) nextRef.current();
  });
  let queue = (0, import_react11.useCallback)((fn) => {
    effect.current = fn(currValue.current);
    nextRef.current();
  }, [
    nextRef
  ]);
  return [
    value,
    queue
  ];
}

// node_modules/@react-aria/utils/dist/useId.mjs
var import_react13 = __toESM(require_react(), 1);

// node_modules/@react-aria/ssr/dist/SSRProvider.mjs
var import_react12 = __toESM(require_react(), 1);
var $b5e257d569688ac6$var$defaultContext = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
};
var $b5e257d569688ac6$var$SSRContext = (0, import_react12.default).createContext($b5e257d569688ac6$var$defaultContext);
var $b5e257d569688ac6$var$IsSSRContext = (0, import_react12.default).createContext(false);
var $b5e257d569688ac6$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
var $b5e257d569688ac6$var$componentIds = /* @__PURE__ */ new WeakMap();
function $b5e257d569688ac6$var$useCounter(isDisabled = false) {
  let ctx = (0, import_react12.useContext)($b5e257d569688ac6$var$SSRContext);
  let ref = (0, import_react12.useRef)(null);
  if (ref.current === null && !isDisabled) {
    var _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner, _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    let currentOwner = (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = (0, import_react12.default).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === void 0 ? void 0 : (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner = _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner === void 0 ? void 0 : _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner.current;
    if (currentOwner) {
      let prevComponentValue = $b5e257d569688ac6$var$componentIds.get(currentOwner);
      if (prevComponentValue == null)
        $b5e257d569688ac6$var$componentIds.set(currentOwner, {
          id: ctx.current,
          state: currentOwner.memoizedState
        });
      else if (currentOwner.memoizedState !== prevComponentValue.state) {
        ctx.current = prevComponentValue.id;
        $b5e257d569688ac6$var$componentIds.delete(currentOwner);
      }
    }
    ref.current = ++ctx.current;
  }
  return ref.current;
}
function $b5e257d569688ac6$var$useLegacySSRSafeId(defaultId) {
  let ctx = (0, import_react12.useContext)($b5e257d569688ac6$var$SSRContext);
  if (ctx === $b5e257d569688ac6$var$defaultContext && !$b5e257d569688ac6$var$canUseDOM && true) console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let counter = $b5e257d569688ac6$var$useCounter(!!defaultId);
  let prefix2 = ctx === $b5e257d569688ac6$var$defaultContext && false ? "react-aria" : `react-aria${ctx.prefix}`;
  return defaultId || `${prefix2}-${counter}`;
}
function $b5e257d569688ac6$var$useModernSSRSafeId(defaultId) {
  let id = (0, import_react12.default).useId();
  let [didSSR] = (0, import_react12.useState)($b5e257d569688ac6$export$535bd6ca7f90a273());
  let prefix2 = didSSR || false ? "react-aria" : `react-aria${$b5e257d569688ac6$var$defaultContext.prefix}`;
  return defaultId || `${prefix2}-${id}`;
}
var $b5e257d569688ac6$export$619500959fc48b26 = typeof (0, import_react12.default)["useId"] === "function" ? $b5e257d569688ac6$var$useModernSSRSafeId : $b5e257d569688ac6$var$useLegacySSRSafeId;
function $b5e257d569688ac6$var$getSnapshot() {
  return false;
}
function $b5e257d569688ac6$var$getServerSnapshot() {
  return true;
}
function $b5e257d569688ac6$var$subscribe(onStoreChange) {
  return () => {
  };
}
function $b5e257d569688ac6$export$535bd6ca7f90a273() {
  if (typeof (0, import_react12.default)["useSyncExternalStore"] === "function") return (0, import_react12.default)["useSyncExternalStore"]($b5e257d569688ac6$var$subscribe, $b5e257d569688ac6$var$getSnapshot, $b5e257d569688ac6$var$getServerSnapshot);
  return (0, import_react12.useContext)($b5e257d569688ac6$var$IsSSRContext);
}

// node_modules/@react-aria/utils/dist/useId.mjs
var $bdb11010cef70236$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
var $bdb11010cef70236$export$d41a04c74483c6ef = /* @__PURE__ */ new Map();
var $bdb11010cef70236$var$registry;
if (typeof FinalizationRegistry !== "undefined") $bdb11010cef70236$var$registry = new FinalizationRegistry((heldValue) => {
  $bdb11010cef70236$export$d41a04c74483c6ef.delete(heldValue);
});
function $bdb11010cef70236$export$f680877a34711e37(defaultId) {
  let [value, setValue] = (0, import_react13.useState)(defaultId);
  let nextId = (0, import_react13.useRef)(null);
  let res = (0, $b5e257d569688ac6$export$619500959fc48b26)(value);
  let cleanupRef = (0, import_react13.useRef)(null);
  if ($bdb11010cef70236$var$registry) $bdb11010cef70236$var$registry.register(cleanupRef, res);
  if ($bdb11010cef70236$var$canUseDOM) {
    const cacheIdRef = $bdb11010cef70236$export$d41a04c74483c6ef.get(res);
    if (cacheIdRef && !cacheIdRef.includes(nextId)) cacheIdRef.push(nextId);
    else $bdb11010cef70236$export$d41a04c74483c6ef.set(res, [
      nextId
    ]);
  }
  (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(() => {
    let r3 = res;
    return () => {
      if ($bdb11010cef70236$var$registry) $bdb11010cef70236$var$registry.unregister(cleanupRef);
      $bdb11010cef70236$export$d41a04c74483c6ef.delete(r3);
    };
  }, [
    res
  ]);
  (0, import_react13.useEffect)(() => {
    let newId = nextId.current;
    if (newId) setValue(newId);
    return () => {
      if (newId) nextId.current = null;
    };
  });
  return res;
}
function $bdb11010cef70236$export$cd8c9cb68f842629(idA, idB) {
  if (idA === idB) return idA;
  let setIdsA = $bdb11010cef70236$export$d41a04c74483c6ef.get(idA);
  if (setIdsA) {
    setIdsA.forEach((ref) => ref.current = idB);
    return idB;
  }
  let setIdsB = $bdb11010cef70236$export$d41a04c74483c6ef.get(idB);
  if (setIdsB) {
    setIdsB.forEach((ref) => ref.current = idA);
    return idA;
  }
  return idB;
}
function $bdb11010cef70236$export$b4cc09c592e8fdb8(depArray = []) {
  let id = $bdb11010cef70236$export$f680877a34711e37();
  let [resolvedId, setResolvedId] = (0, $1dbecbe27a04f9af$export$14d238f342723f25)(id);
  let updateId = (0, import_react13.useCallback)(() => {
    setResolvedId(function* () {
      yield id;
      yield document.getElementById(id) ? id : void 0;
    });
  }, [
    id,
    setResolvedId
  ]);
  (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(updateId, [
    id,
    updateId,
    ...depArray
  ]);
  return resolvedId;
}

// node_modules/@react-aria/utils/dist/chain.mjs
function $ff5963eb1fccf552$export$e08e3b67e392101e(...callbacks) {
  return (...args) => {
    for (let callback of callbacks) if (typeof callback === "function") callback(...args);
  };
}

// node_modules/@react-aria/utils/dist/domHelpers.mjs
var $431fbd86ca7dc216$export$b204af158042fbac = (el) => {
  var _el_ownerDocument;
  return (_el_ownerDocument = el === null || el === void 0 ? void 0 : el.ownerDocument) !== null && _el_ownerDocument !== void 0 ? _el_ownerDocument : document;
};
var $431fbd86ca7dc216$export$f21a1ffae260145a = (el) => {
  if (el && "window" in el && el.window === el) return el;
  const doc = $431fbd86ca7dc216$export$b204af158042fbac(el);
  return doc.defaultView || window;
};
function $431fbd86ca7dc216$var$isNode(value) {
  return value !== null && typeof value === "object" && "nodeType" in value && typeof value.nodeType === "number";
}
function $431fbd86ca7dc216$export$af51f0f06c0f328a(node) {
  return $431fbd86ca7dc216$var$isNode(node) && node.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in node;
}

// node_modules/@react-stately/flags/dist/import.mjs
var $f4e2df6bd15f8569$var$_shadowDOM = false;
function $f4e2df6bd15f8569$export$98658e8c59125e6a() {
  return $f4e2df6bd15f8569$var$_shadowDOM;
}

// node_modules/@react-aria/utils/dist/DOMFunctions.mjs
function $d4ee10de306f2510$export$4282f70798064fe0(node, otherNode) {
  if (!(0, $f4e2df6bd15f8569$export$98658e8c59125e6a)()) return otherNode && node ? node.contains(otherNode) : false;
  if (!node || !otherNode) return false;
  let currentNode = otherNode;
  while (currentNode !== null) {
    if (currentNode === node) return true;
    if (currentNode.tagName === "SLOT" && currentNode.assignedSlot)
      currentNode = currentNode.assignedSlot.parentNode;
    else if ((0, $431fbd86ca7dc216$export$af51f0f06c0f328a)(currentNode))
      currentNode = currentNode.host;
    else currentNode = currentNode.parentNode;
  }
  return false;
}
var $d4ee10de306f2510$export$cd4e5573fbe2b576 = (doc = document) => {
  var _activeElement_shadowRoot;
  if (!(0, $f4e2df6bd15f8569$export$98658e8c59125e6a)()) return doc.activeElement;
  let activeElement = doc.activeElement;
  while (activeElement && "shadowRoot" in activeElement && ((_activeElement_shadowRoot = activeElement.shadowRoot) === null || _activeElement_shadowRoot === void 0 ? void 0 : _activeElement_shadowRoot.activeElement)) activeElement = activeElement.shadowRoot.activeElement;
  return activeElement;
};
function $d4ee10de306f2510$export$e58f029f0fbfdb29(event) {
  if ((0, $f4e2df6bd15f8569$export$98658e8c59125e6a)() && event.target.shadowRoot) {
    if (event.composedPath) return event.composedPath()[0];
  }
  return event.target;
}

// node_modules/@react-aria/utils/dist/mergeRefs.mjs
function $5dc95899b306f630$export$c9058316764c140e(...refs) {
  if (refs.length === 1 && refs[0]) return refs[0];
  return (value) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = $5dc95899b306f630$var$setRef(ref, value);
      hasCleanup || (hasCleanup = typeof cleanup == "function");
      return cleanup;
    });
    if (hasCleanup) return () => {
      cleanups.forEach((cleanup, i2) => {
        if (typeof cleanup === "function") cleanup();
        else $5dc95899b306f630$var$setRef(refs[i2], null);
      });
    };
  };
}
function $5dc95899b306f630$var$setRef(ref, value) {
  if (typeof ref === "function") return ref(value);
  else if (ref != null) ref.current = value;
}

// node_modules/clsx/dist/clsx.mjs
function r2(e2) {
  var t2, f2, n2 = "";
  if ("string" == typeof e2 || "number" == typeof e2) n2 += e2;
  else if ("object" == typeof e2) if (Array.isArray(e2)) {
    var o2 = e2.length;
    for (t2 = 0; t2 < o2; t2++) e2[t2] && (f2 = r2(e2[t2])) && (n2 && (n2 += " "), n2 += f2);
  } else for (f2 in e2) e2[f2] && (n2 && (n2 += " "), n2 += f2);
  return n2;
}
function clsx() {
  for (var e2, t2, f2 = 0, n2 = "", o2 = arguments.length; f2 < o2; f2++) (e2 = arguments[f2]) && (t2 = r2(e2)) && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
var clsx_default = clsx;

// node_modules/@react-aria/utils/dist/mergeProps.mjs
function $3ef42575df84b30b$export$9d1611c77c2fe928(...args) {
  let result = {
    ...args[0]
  };
  for (let i2 = 1; i2 < args.length; i2++) {
    let props = args[i2];
    for (let key in props) {
      let a2 = result[key];
      let b2 = props[key];
      if (typeof a2 === "function" && typeof b2 === "function" && // This is a lot faster than a regex.
      key[0] === "o" && key[1] === "n" && key.charCodeAt(2) >= /* 'A' */
      65 && key.charCodeAt(2) <= /* 'Z' */
      90) result[key] = (0, $ff5963eb1fccf552$export$e08e3b67e392101e)(a2, b2);
      else if ((key === "className" || key === "UNSAFE_className") && typeof a2 === "string" && typeof b2 === "string") result[key] = (0, clsx_default)(a2, b2);
      else if (key === "id" && a2 && b2) result.id = (0, $bdb11010cef70236$export$cd8c9cb68f842629)(a2, b2);
      else if (key === "ref" && a2 && b2) result.ref = (0, $5dc95899b306f630$export$c9058316764c140e)(a2, b2);
      else result[key] = b2 !== void 0 ? b2 : a2;
    }
  }
  return result;
}

// node_modules/@react-aria/utils/dist/filterDOMProps.mjs
var $65484d02dcb7eb3e$var$DOMPropNames = /* @__PURE__ */ new Set([
  "id"
]);
var $65484d02dcb7eb3e$var$labelablePropNames = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]);
var $65484d02dcb7eb3e$var$linkPropNames = /* @__PURE__ */ new Set([
  "href",
  "hrefLang",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]);
var $65484d02dcb7eb3e$var$globalAttrs = /* @__PURE__ */ new Set([
  "dir",
  "lang",
  "hidden",
  "inert",
  "translate"
]);
var $65484d02dcb7eb3e$var$globalEvents = /* @__PURE__ */ new Set([
  "onClick",
  "onAuxClick",
  "onContextMenu",
  "onDoubleClick",
  "onMouseDown",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseOut",
  "onMouseOver",
  "onMouseUp",
  "onTouchCancel",
  "onTouchEnd",
  "onTouchMove",
  "onTouchStart",
  "onPointerDown",
  "onPointerMove",
  "onPointerUp",
  "onPointerCancel",
  "onPointerEnter",
  "onPointerLeave",
  "onPointerOver",
  "onPointerOut",
  "onGotPointerCapture",
  "onLostPointerCapture",
  "onScroll",
  "onWheel",
  "onAnimationStart",
  "onAnimationEnd",
  "onAnimationIteration",
  "onTransitionCancel",
  "onTransitionEnd",
  "onTransitionRun",
  "onTransitionStart"
]);
var $65484d02dcb7eb3e$var$propRe = /^(data-.*)$/;
function $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, opts = {}) {
  let { labelable, isLink, global: global2, events = global2, propNames } = opts;
  let filteredProps = {};
  for (const prop in props) if (Object.prototype.hasOwnProperty.call(props, prop) && ($65484d02dcb7eb3e$var$DOMPropNames.has(prop) || labelable && $65484d02dcb7eb3e$var$labelablePropNames.has(prop) || isLink && $65484d02dcb7eb3e$var$linkPropNames.has(prop) || global2 && $65484d02dcb7eb3e$var$globalAttrs.has(prop) || events && ($65484d02dcb7eb3e$var$globalEvents.has(prop) || prop.endsWith("Capture") && $65484d02dcb7eb3e$var$globalEvents.has(prop.slice(0, -7))) || (propNames === null || propNames === void 0 ? void 0 : propNames.has(prop)) || $65484d02dcb7eb3e$var$propRe.test(prop))) filteredProps[prop] = props[prop];
  return filteredProps;
}

// node_modules/@react-aria/utils/dist/focusWithoutScrolling.mjs
function $7215afc6de606d6b$export$de79e2c695e052f3(element) {
  if ($7215afc6de606d6b$var$supportsPreventScroll()) element.focus({
    preventScroll: true
  });
  else {
    let scrollableElements = $7215afc6de606d6b$var$getScrollableElements(element);
    element.focus();
    $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements);
  }
}
var $7215afc6de606d6b$var$supportsPreventScrollCached = null;
function $7215afc6de606d6b$var$supportsPreventScroll() {
  if ($7215afc6de606d6b$var$supportsPreventScrollCached == null) {
    $7215afc6de606d6b$var$supportsPreventScrollCached = false;
    try {
      let focusElem = document.createElement("div");
      focusElem.focus({
        get preventScroll() {
          $7215afc6de606d6b$var$supportsPreventScrollCached = true;
          return true;
        }
      });
    } catch {
    }
  }
  return $7215afc6de606d6b$var$supportsPreventScrollCached;
}
function $7215afc6de606d6b$var$getScrollableElements(element) {
  let parent = element.parentNode;
  let scrollableElements = [];
  let rootScrollingElement = document.scrollingElement || document.documentElement;
  while (parent instanceof HTMLElement && parent !== rootScrollingElement) {
    if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) scrollableElements.push({
      element: parent,
      scrollTop: parent.scrollTop,
      scrollLeft: parent.scrollLeft
    });
    parent = parent.parentNode;
  }
  if (rootScrollingElement instanceof HTMLElement) scrollableElements.push({
    element: rootScrollingElement,
    scrollTop: rootScrollingElement.scrollTop,
    scrollLeft: rootScrollingElement.scrollLeft
  });
  return scrollableElements;
}
function $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements) {
  for (let { element, scrollTop, scrollLeft } of scrollableElements) {
    element.scrollTop = scrollTop;
    element.scrollLeft = scrollLeft;
  }
}

// node_modules/@react-aria/utils/dist/platform.mjs
function $c87311424ea30a05$var$testUserAgent(re) {
  var _window_navigator_userAgentData;
  if (typeof window === "undefined" || window.navigator == null) return false;
  let brands = (_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.brands;
  return Array.isArray(brands) && brands.some((brand) => re.test(brand.brand)) || re.test(window.navigator.userAgent);
}
function $c87311424ea30a05$var$testPlatform(re) {
  var _window_navigator_userAgentData;
  return typeof window !== "undefined" && window.navigator != null ? re.test(((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.platform) || window.navigator.platform) : false;
}
function $c87311424ea30a05$var$cached(fn) {
  if (false) return fn;
  let res = null;
  return () => {
    if (res == null) res = fn();
    return res;
  };
}
var $c87311424ea30a05$export$9ac100e40613ea10 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testPlatform(/^Mac/i);
});
var $c87311424ea30a05$export$186c6964ca17d99 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testPlatform(/^iPhone/i);
});
var $c87311424ea30a05$export$7bef049ce92e4224 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  $c87311424ea30a05$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
});
var $c87311424ea30a05$export$fedb369cb70207f1 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$export$186c6964ca17d99() || $c87311424ea30a05$export$7bef049ce92e4224();
});
var $c87311424ea30a05$export$e1865c3bedcd822b = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$export$9ac100e40613ea10() || $c87311424ea30a05$export$fedb369cb70207f1();
});
var $c87311424ea30a05$export$78551043582a6a98 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testUserAgent(/AppleWebKit/i) && !$c87311424ea30a05$export$6446a186d09e379e();
});
var $c87311424ea30a05$export$6446a186d09e379e = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testUserAgent(/Chrome/i);
});
var $c87311424ea30a05$export$a11b0059900ceec8 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testUserAgent(/Android/i);
});
var $c87311424ea30a05$export$b7d78993b74f766d = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testUserAgent(/Firefox/i);
});

// node_modules/@react-aria/utils/dist/openLink.mjs
var import_react14 = __toESM(require_react(), 1);
var $ea8dcbcb9ea1b556$var$RouterContext = (0, import_react14.createContext)({
  isNative: true,
  open: $ea8dcbcb9ea1b556$var$openSyntheticLink,
  useHref: (href) => href
});
function $ea8dcbcb9ea1b556$export$95185d699e05d4d7(target, modifiers, setOpening = true) {
  var _window_event_type, _window_event;
  let { metaKey, ctrlKey, altKey, shiftKey } = modifiers;
  if ((0, $c87311424ea30a05$export$b7d78993b74f766d)() && ((_window_event = window.event) === null || _window_event === void 0 ? void 0 : (_window_event_type = _window_event.type) === null || _window_event_type === void 0 ? void 0 : _window_event_type.startsWith("key")) && target.target === "_blank") {
    if ((0, $c87311424ea30a05$export$9ac100e40613ea10)()) metaKey = true;
    else ctrlKey = true;
  }
  let event = (0, $c87311424ea30a05$export$78551043582a6a98)() && (0, $c87311424ea30a05$export$9ac100e40613ea10)() && !(0, $c87311424ea30a05$export$7bef049ce92e4224)() && true ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey,
    ctrlKey,
    altKey,
    shiftKey
  }) : new MouseEvent("click", {
    metaKey,
    ctrlKey,
    altKey,
    shiftKey,
    detail: 1,
    bubbles: true,
    cancelable: true
  });
  $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = setOpening;
  (0, $7215afc6de606d6b$export$de79e2c695e052f3)(target);
  target.dispatchEvent(event);
  $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;
}
$ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;
function $ea8dcbcb9ea1b556$var$getSyntheticLink(target, open) {
  if (target instanceof HTMLAnchorElement) open(target);
  else if (target.hasAttribute("data-href")) {
    let link = document.createElement("a");
    link.href = target.getAttribute("data-href");
    if (target.hasAttribute("data-target")) link.target = target.getAttribute("data-target");
    if (target.hasAttribute("data-rel")) link.rel = target.getAttribute("data-rel");
    if (target.hasAttribute("data-download")) link.download = target.getAttribute("data-download");
    if (target.hasAttribute("data-ping")) link.ping = target.getAttribute("data-ping");
    if (target.hasAttribute("data-referrer-policy")) link.referrerPolicy = target.getAttribute("data-referrer-policy");
    target.appendChild(link);
    open(link);
    target.removeChild(link);
  }
}
function $ea8dcbcb9ea1b556$var$openSyntheticLink(target, modifiers) {
  $ea8dcbcb9ea1b556$var$getSyntheticLink(target, (link) => $ea8dcbcb9ea1b556$export$95185d699e05d4d7(link, modifiers));
}

// node_modules/@react-aria/utils/dist/runAfterTransition.mjs
var $bbed8b41f857bcc0$var$transitionsByElement = /* @__PURE__ */ new Map();
var $bbed8b41f857bcc0$var$transitionCallbacks = /* @__PURE__ */ new Set();
function $bbed8b41f857bcc0$var$setupGlobalEvents() {
  if (typeof window === "undefined") return;
  function isTransitionEvent(event) {
    return "propertyName" in event;
  }
  let onTransitionStart = (e2) => {
    if (!isTransitionEvent(e2) || !e2.target) return;
    let transitions = $bbed8b41f857bcc0$var$transitionsByElement.get(e2.target);
    if (!transitions) {
      transitions = /* @__PURE__ */ new Set();
      $bbed8b41f857bcc0$var$transitionsByElement.set(e2.target, transitions);
      e2.target.addEventListener("transitioncancel", onTransitionEnd, {
        once: true
      });
    }
    transitions.add(e2.propertyName);
  };
  let onTransitionEnd = (e2) => {
    if (!isTransitionEvent(e2) || !e2.target) return;
    let properties = $bbed8b41f857bcc0$var$transitionsByElement.get(e2.target);
    if (!properties) return;
    properties.delete(e2.propertyName);
    if (properties.size === 0) {
      e2.target.removeEventListener("transitioncancel", onTransitionEnd);
      $bbed8b41f857bcc0$var$transitionsByElement.delete(e2.target);
    }
    if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) {
      for (let cb of $bbed8b41f857bcc0$var$transitionCallbacks) cb();
      $bbed8b41f857bcc0$var$transitionCallbacks.clear();
    }
  };
  document.body.addEventListener("transitionrun", onTransitionStart);
  document.body.addEventListener("transitionend", onTransitionEnd);
}
if (typeof document !== "undefined") {
  if (document.readyState !== "loading") $bbed8b41f857bcc0$var$setupGlobalEvents();
  else document.addEventListener("DOMContentLoaded", $bbed8b41f857bcc0$var$setupGlobalEvents);
}
function $bbed8b41f857bcc0$var$cleanupDetachedElements() {
  for (const [eventTarget] of $bbed8b41f857bcc0$var$transitionsByElement)
    if ("isConnected" in eventTarget && !eventTarget.isConnected) $bbed8b41f857bcc0$var$transitionsByElement.delete(eventTarget);
}
function $bbed8b41f857bcc0$export$24490316f764c430(fn) {
  requestAnimationFrame(() => {
    $bbed8b41f857bcc0$var$cleanupDetachedElements();
    if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) fn();
    else $bbed8b41f857bcc0$var$transitionCallbacks.add(fn);
  });
}

// node_modules/@react-aria/utils/dist/useDrag1D.mjs
var import_react15 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useGlobalListeners.mjs
var import_react16 = __toESM(require_react(), 1);
function $03deb23ff14920c4$export$4eaf04e54aa8eed6() {
  let globalListeners = (0, import_react16.useRef)(/* @__PURE__ */ new Map());
  let addGlobalListener = (0, import_react16.useCallback)((eventTarget, type, listener, options) => {
    let fn = (options === null || options === void 0 ? void 0 : options.once) ? (...args) => {
      globalListeners.current.delete(listener);
      listener(...args);
    } : listener;
    globalListeners.current.set(listener, {
      type,
      eventTarget,
      fn,
      options
    });
    eventTarget.addEventListener(type, fn, options);
  }, []);
  let removeGlobalListener = (0, import_react16.useCallback)((eventTarget, type, listener, options) => {
    var _globalListeners_current_get;
    let fn = ((_globalListeners_current_get = globalListeners.current.get(listener)) === null || _globalListeners_current_get === void 0 ? void 0 : _globalListeners_current_get.fn) || listener;
    eventTarget.removeEventListener(type, fn, options);
    globalListeners.current.delete(listener);
  }, []);
  let removeAllGlobalListeners = (0, import_react16.useCallback)(() => {
    globalListeners.current.forEach((value, key) => {
      removeGlobalListener(value.eventTarget, value.type, key, value.options);
    });
  }, [
    removeGlobalListener
  ]);
  (0, import_react16.useEffect)(() => {
    return removeAllGlobalListeners;
  }, [
    removeAllGlobalListeners
  ]);
  return {
    addGlobalListener,
    removeGlobalListener,
    removeAllGlobalListeners
  };
}

// node_modules/@react-aria/utils/dist/useLabels.mjs
function $313b98861ee5dd6c$export$d6875122194c7b44(props, defaultLabel) {
  let { id, "aria-label": label, "aria-labelledby": labelledBy } = props;
  id = (0, $bdb11010cef70236$export$f680877a34711e37)(id);
  if (labelledBy && label) {
    let ids = /* @__PURE__ */ new Set([
      id,
      ...labelledBy.trim().split(/\s+/)
    ]);
    labelledBy = [
      ...ids
    ].join(" ");
  } else if (labelledBy) labelledBy = labelledBy.trim().split(/\s+/).join(" ");
  if (!label && !labelledBy && defaultLabel) label = defaultLabel;
  return {
    id,
    "aria-label": label,
    "aria-labelledby": labelledBy
  };
}

// node_modules/@react-aria/utils/dist/useObjectRef.mjs
var import_react17 = __toESM(require_react(), 1);
function $df56164dff5785e2$export$4338b53315abf666(ref) {
  const objRef = (0, import_react17.useRef)(null);
  const cleanupRef = (0, import_react17.useRef)(void 0);
  const refEffect = (0, import_react17.useCallback)((instance) => {
    if (typeof ref === "function") {
      const refCallback = ref;
      const refCleanup = refCallback(instance);
      return () => {
        if (typeof refCleanup === "function") refCleanup();
        else refCallback(null);
      };
    } else if (ref) {
      ref.current = instance;
      return () => {
        ref.current = null;
      };
    }
  }, [
    ref
  ]);
  return (0, import_react17.useMemo)(() => ({
    get current() {
      return objRef.current;
    },
    set current(value) {
      objRef.current = value;
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = void 0;
      }
      if (value != null) cleanupRef.current = refEffect(value);
    }
  }), [
    refEffect
  ]);
}

// node_modules/@react-aria/utils/dist/useEffectEvent.mjs
var import_react18 = __toESM(require_react(), 1);
var $8ae05eaa5c114e9c$var$_React_useInsertionEffect;
var $8ae05eaa5c114e9c$var$useEarlyEffect = ($8ae05eaa5c114e9c$var$_React_useInsertionEffect = (0, import_react18.default)["useInsertionEffect"]) !== null && $8ae05eaa5c114e9c$var$_React_useInsertionEffect !== void 0 ? $8ae05eaa5c114e9c$var$_React_useInsertionEffect : (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c);
function $8ae05eaa5c114e9c$export$7f54fc3180508a52(fn) {
  const ref = (0, import_react18.useRef)(null);
  $8ae05eaa5c114e9c$var$useEarlyEffect(() => {
    ref.current = fn;
  }, [
    fn
  ]);
  return (0, import_react18.useCallback)((...args) => {
    const f2 = ref.current;
    return f2 === null || f2 === void 0 ? void 0 : f2(...args);
  }, []);
}

// node_modules/@react-aria/utils/dist/useUpdateEffect.mjs
var import_react19 = __toESM(require_react(), 1);
function $4f58c5f72bcf79f7$export$496315a1608d9602(cb, dependencies) {
  const isInitialMount = (0, import_react19.useRef)(true);
  const lastDeps = (0, import_react19.useRef)(null);
  let cbEvent = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)(cb);
  (0, import_react19.useEffect)(() => {
    isInitialMount.current = true;
    return () => {
      isInitialMount.current = false;
    };
  }, []);
  (0, import_react19.useEffect)(() => {
    let prevDeps = lastDeps.current;
    if (isInitialMount.current) isInitialMount.current = false;
    else if (!prevDeps || dependencies.some((dep, i2) => !Object.is(dep, prevDeps[i2]))) cbEvent();
    lastDeps.current = dependencies;
  }, dependencies);
}

// node_modules/@react-aria/utils/dist/useUpdateLayoutEffect.mjs
var import_react20 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useResizeObserver.mjs
var import_react21 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useSyncRef.mjs
function $e7801be82b4b2a53$export$4debdb1a3f0fa79e(context, ref) {
  (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(() => {
    if (context && context.ref && ref) {
      context.ref.current = ref.current;
      return () => {
        if (context.ref) context.ref.current = null;
      };
    }
  });
}

// node_modules/@react-aria/utils/dist/isScrollable.mjs
function $cc38e7bd3fc7b213$export$2bb74740c4e19def(node, checkForOverflow) {
  if (!node) return false;
  let style = window.getComputedStyle(node);
  let isScrollable = /(auto|scroll)/.test(style.overflow + style.overflowX + style.overflowY);
  if (isScrollable && checkForOverflow) isScrollable = node.scrollHeight !== node.clientHeight || node.scrollWidth !== node.clientWidth;
  return isScrollable;
}

// node_modules/@react-aria/utils/dist/getScrollParent.mjs
function $62d8ded9296f3872$export$cfa2225e87938781(node, checkForOverflow) {
  let scrollableNode = node;
  if ((0, $cc38e7bd3fc7b213$export$2bb74740c4e19def)(scrollableNode, checkForOverflow)) scrollableNode = scrollableNode.parentElement;
  while (scrollableNode && !(0, $cc38e7bd3fc7b213$export$2bb74740c4e19def)(scrollableNode, checkForOverflow)) scrollableNode = scrollableNode.parentElement;
  return scrollableNode || document.scrollingElement || document.documentElement;
}

// node_modules/@react-aria/utils/dist/getScrollParents.mjs
function $a40c673dc9f6d9c7$export$94ed1c92c7beeb22(node, checkForOverflow) {
  const scrollParents = [];
  while (node && node !== document.documentElement) {
    if ((0, $cc38e7bd3fc7b213$export$2bb74740c4e19def)(node, checkForOverflow)) scrollParents.push(node);
    node = node.parentElement;
  }
  return scrollParents;
}

// node_modules/@react-aria/utils/dist/useViewportSize.mjs
var import_react22 = __toESM(require_react(), 1);
var $5df64b3807dc15ee$var$visualViewport = typeof document !== "undefined" && window.visualViewport;

// node_modules/@react-aria/utils/dist/useDescription.mjs
var import_react23 = __toESM(require_react(), 1);
var $ef06256079686ba0$var$descriptionId = 0;
var $ef06256079686ba0$var$descriptionNodes = /* @__PURE__ */ new Map();
function $ef06256079686ba0$export$f8aeda7b10753fa1(description) {
  let [id, setId] = (0, import_react23.useState)();
  (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(() => {
    if (!description) return;
    let desc = $ef06256079686ba0$var$descriptionNodes.get(description);
    if (!desc) {
      let id2 = `react-aria-description-${$ef06256079686ba0$var$descriptionId++}`;
      setId(id2);
      let node = document.createElement("div");
      node.id = id2;
      node.style.display = "none";
      node.textContent = description;
      document.body.appendChild(node);
      desc = {
        refCount: 0,
        element: node
      };
      $ef06256079686ba0$var$descriptionNodes.set(description, desc);
    } else setId(desc.element.id);
    desc.refCount++;
    return () => {
      if (desc && --desc.refCount === 0) {
        desc.element.remove();
        $ef06256079686ba0$var$descriptionNodes.delete(description);
      }
    };
  }, [
    description
  ]);
  return {
    "aria-describedby": description ? id : void 0
  };
}

// node_modules/@react-aria/utils/dist/useEvent.mjs
var import_react24 = __toESM(require_react(), 1);
function $e9faafb641e167db$export$90fc3a17d93f704c(ref, event, handler, options) {
  let handleEvent = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)(handler);
  let isDisabled = handler == null;
  (0, import_react24.useEffect)(() => {
    if (isDisabled || !ref.current) return;
    let element = ref.current;
    element.addEventListener(event, handleEvent, options);
    return () => {
      element.removeEventListener(event, handleEvent, options);
    };
  }, [
    ref,
    event,
    options,
    isDisabled
  ]);
}

// node_modules/@react-aria/utils/dist/scrollIntoView.mjs
function $2f04cbc44ee30ce0$export$53a0910f038337bd(scrollView, element) {
  let offsetX = $2f04cbc44ee30ce0$var$relativeOffset(scrollView, element, "left");
  let offsetY = $2f04cbc44ee30ce0$var$relativeOffset(scrollView, element, "top");
  let width = element.offsetWidth;
  let height = element.offsetHeight;
  let x2 = scrollView.scrollLeft;
  let y2 = scrollView.scrollTop;
  let { borderTopWidth, borderLeftWidth, scrollPaddingTop, scrollPaddingRight, scrollPaddingBottom, scrollPaddingLeft } = getComputedStyle(scrollView);
  let borderAdjustedX = x2 + parseInt(borderLeftWidth, 10);
  let borderAdjustedY = y2 + parseInt(borderTopWidth, 10);
  let maxX = borderAdjustedX + scrollView.clientWidth;
  let maxY = borderAdjustedY + scrollView.clientHeight;
  let scrollPaddingTopNumber = parseInt(scrollPaddingTop, 10) || 0;
  let scrollPaddingBottomNumber = parseInt(scrollPaddingBottom, 10) || 0;
  let scrollPaddingRightNumber = parseInt(scrollPaddingRight, 10) || 0;
  let scrollPaddingLeftNumber = parseInt(scrollPaddingLeft, 10) || 0;
  if (offsetX <= x2 + scrollPaddingLeftNumber) x2 = offsetX - parseInt(borderLeftWidth, 10) - scrollPaddingLeftNumber;
  else if (offsetX + width > maxX - scrollPaddingRightNumber) x2 += offsetX + width - maxX + scrollPaddingRightNumber;
  if (offsetY <= borderAdjustedY + scrollPaddingTopNumber) y2 = offsetY - parseInt(borderTopWidth, 10) - scrollPaddingTopNumber;
  else if (offsetY + height > maxY - scrollPaddingBottomNumber) y2 += offsetY + height - maxY + scrollPaddingBottomNumber;
  scrollView.scrollLeft = x2;
  scrollView.scrollTop = y2;
}
function $2f04cbc44ee30ce0$var$relativeOffset(ancestor, child, axis) {
  const prop = axis === "left" ? "offsetLeft" : "offsetTop";
  let sum = 0;
  while (child.offsetParent) {
    sum += child[prop];
    if (child.offsetParent === ancestor) break;
    else if ((0, $d4ee10de306f2510$export$4282f70798064fe0)(child.offsetParent, ancestor)) {
      sum -= ancestor[prop];
      break;
    }
    child = child.offsetParent;
  }
  return sum;
}
function $2f04cbc44ee30ce0$export$c826860796309d1b(targetElement, opts) {
  if (targetElement && (0, $d4ee10de306f2510$export$4282f70798064fe0)(document, targetElement)) {
    let root = document.scrollingElement || document.documentElement;
    let isScrollPrevented = window.getComputedStyle(root).overflow === "hidden";
    if (!isScrollPrevented) {
      var _targetElement_scrollIntoView;
      let { left: originalLeft, top: originalTop } = targetElement.getBoundingClientRect();
      targetElement === null || targetElement === void 0 ? void 0 : (_targetElement_scrollIntoView = targetElement.scrollIntoView) === null || _targetElement_scrollIntoView === void 0 ? void 0 : _targetElement_scrollIntoView.call(targetElement, {
        block: "nearest"
      });
      let { left: newLeft, top: newTop } = targetElement.getBoundingClientRect();
      if (Math.abs(originalLeft - newLeft) > 1 || Math.abs(originalTop - newTop) > 1) {
        var _opts_containingElement_scrollIntoView, _opts_containingElement, _targetElement_scrollIntoView1;
        opts === null || opts === void 0 ? void 0 : (_opts_containingElement = opts.containingElement) === null || _opts_containingElement === void 0 ? void 0 : (_opts_containingElement_scrollIntoView = _opts_containingElement.scrollIntoView) === null || _opts_containingElement_scrollIntoView === void 0 ? void 0 : _opts_containingElement_scrollIntoView.call(_opts_containingElement, {
          block: "center",
          inline: "center"
        });
        (_targetElement_scrollIntoView1 = targetElement.scrollIntoView) === null || _targetElement_scrollIntoView1 === void 0 ? void 0 : _targetElement_scrollIntoView1.call(targetElement, {
          block: "nearest"
        });
      }
    } else {
      let scrollParents = (0, $a40c673dc9f6d9c7$export$94ed1c92c7beeb22)(targetElement);
      if (!isScrollPrevented) scrollParents.push(root);
      for (let scrollParent of scrollParents) $2f04cbc44ee30ce0$export$53a0910f038337bd(scrollParent, targetElement);
    }
  }
}

// node_modules/@react-aria/utils/dist/isVirtualEvent.mjs
function $6a7db85432448f7f$export$60278871457622de(event) {
  if (event.pointerType === "" && event.isTrusted) return true;
  if ((0, $c87311424ea30a05$export$a11b0059900ceec8)() && event.pointerType) return event.type === "click" && event.buttons === 1;
  return event.detail === 0 && !event.pointerType;
}
function $6a7db85432448f7f$export$29bf1b5f2c56cf63(event) {
  return !(0, $c87311424ea30a05$export$a11b0059900ceec8)() && event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "mouse";
}

// node_modules/@react-aria/utils/dist/useDeepMemo.mjs
var import_react25 = __toESM(require_react(), 1);
function $5a387cc49350e6db$export$722debc0e56fea39(value, isEqual) {
  let lastValue = (0, import_react25.useRef)(null);
  if (value && lastValue.current && isEqual(value, lastValue.current)) value = lastValue.current;
  lastValue.current = value;
  return value;
}

// node_modules/@react-aria/utils/dist/useFormReset.mjs
var import_react26 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useLoadMore.mjs
var import_react27 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useLoadMoreSentinel.mjs
var import_react28 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/inertValue.mjs
var import_react29 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/animation.mjs
var import_react_dom = __toESM(require_react_dom(), 1);
var import_react30 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/isElementVisible.mjs
var $7d2416ea0959daaa$var$supportsCheckVisibility = typeof Element !== "undefined" && "checkVisibility" in Element.prototype;
function $7d2416ea0959daaa$var$isStyleVisible(element) {
  const windowObject = (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element);
  if (!(element instanceof windowObject.HTMLElement) && !(element instanceof windowObject.SVGElement)) return false;
  let { display, visibility } = element.style;
  let isVisible = display !== "none" && visibility !== "hidden" && visibility !== "collapse";
  if (isVisible) {
    const { getComputedStyle: getComputedStyle2 } = element.ownerDocument.defaultView;
    let { display: computedDisplay, visibility: computedVisibility } = getComputedStyle2(element);
    isVisible = computedDisplay !== "none" && computedVisibility !== "hidden" && computedVisibility !== "collapse";
  }
  return isVisible;
}
function $7d2416ea0959daaa$var$isAttributeVisible(element, childElement) {
  return !element.hasAttribute("hidden") && // Ignore HiddenSelect when tree walking.
  !element.hasAttribute("data-react-aria-prevent-focus") && (element.nodeName === "DETAILS" && childElement && childElement.nodeName !== "SUMMARY" ? element.hasAttribute("open") : true);
}
function $7d2416ea0959daaa$export$e989c0fffaa6b27a(element, childElement) {
  if ($7d2416ea0959daaa$var$supportsCheckVisibility) return element.checkVisibility({
    visibilityProperty: true
  }) && !element.closest("[data-react-aria-prevent-focus]");
  return element.nodeName !== "#comment" && $7d2416ea0959daaa$var$isStyleVisible(element) && $7d2416ea0959daaa$var$isAttributeVisible(element, childElement) && (!element.parentElement || $7d2416ea0959daaa$export$e989c0fffaa6b27a(element.parentElement, element));
}

// node_modules/@react-aria/utils/dist/isFocusable.mjs
var $b4b717babfbb907b$var$focusableElements = [
  "input:not([disabled]):not([type=hidden])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  '[contenteditable]:not([contenteditable^="false"])',
  "permission"
];
var $b4b717babfbb907b$var$FOCUSABLE_ELEMENT_SELECTOR = $b4b717babfbb907b$var$focusableElements.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
$b4b717babfbb907b$var$focusableElements.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
var $b4b717babfbb907b$var$TABBABLE_ELEMENT_SELECTOR = $b4b717babfbb907b$var$focusableElements.join(':not([hidden]):not([tabindex="-1"]),');
function $b4b717babfbb907b$export$4c063cf1350e6fed(element) {
  return element.matches($b4b717babfbb907b$var$FOCUSABLE_ELEMENT_SELECTOR) && (0, $7d2416ea0959daaa$export$e989c0fffaa6b27a)(element) && !$b4b717babfbb907b$var$isInert(element);
}
function $b4b717babfbb907b$var$isInert(element) {
  let node = element;
  while (node != null) {
    if (node instanceof node.ownerDocument.defaultView.HTMLElement && node.inert) return true;
    node = node.parentElement;
  }
  return false;
}

// node_modules/@react-stately/utils/dist/useControlledState.mjs
var import_react31 = __toESM(require_react(), 1);
var $458b0a5536c1a7cf$var$_React_useInsertionEffect;
var $458b0a5536c1a7cf$var$useEarlyEffect = typeof document !== "undefined" ? ($458b0a5536c1a7cf$var$_React_useInsertionEffect = (0, import_react31.default)["useInsertionEffect"]) !== null && $458b0a5536c1a7cf$var$_React_useInsertionEffect !== void 0 ? $458b0a5536c1a7cf$var$_React_useInsertionEffect : (0, import_react31.default).useLayoutEffect : () => {
};
function $458b0a5536c1a7cf$export$40bfa8c7b0832715(value, defaultValue, onChange) {
  let [stateValue, setStateValue] = (0, import_react31.useState)(value || defaultValue);
  let valueRef = (0, import_react31.useRef)(stateValue);
  let isControlledRef = (0, import_react31.useRef)(value !== void 0);
  let isControlled = value !== void 0;
  (0, import_react31.useEffect)(() => {
    let wasControlled = isControlledRef.current;
    if (wasControlled !== isControlled && true) console.warn(`WARN: A component changed from ${wasControlled ? "controlled" : "uncontrolled"} to ${isControlled ? "controlled" : "uncontrolled"}.`);
    isControlledRef.current = isControlled;
  }, [
    isControlled
  ]);
  let currentValue = isControlled ? value : stateValue;
  $458b0a5536c1a7cf$var$useEarlyEffect(() => {
    valueRef.current = currentValue;
  });
  let [, forceUpdate] = (0, import_react31.useReducer)(() => ({}), {});
  let setValue = (0, import_react31.useCallback)((value2, ...args) => {
    let newValue = typeof value2 === "function" ? value2(valueRef.current) : value2;
    if (!Object.is(valueRef.current, newValue)) {
      valueRef.current = newValue;
      setStateValue(newValue);
      forceUpdate();
      onChange === null || onChange === void 0 ? void 0 : onChange(newValue, ...args);
    }
  }, [
    onChange
  ]);
  return [
    currentValue,
    setValue
  ];
}

// node_modules/@react-stately/utils/dist/number.mjs
function $9446cca9a3875146$export$7d15b64cf5a3a4c4(value, min = -Infinity, max = Infinity) {
  let newValue = Math.min(Math.max(value, min), max);
  return newValue;
}
function $9446cca9a3875146$export$b6268554fba451f(value, digits, base2 = 10) {
  const pow = Math.pow(base2, digits);
  return Math.round(value * pow) / pow;
}

// node_modules/@mirohq/design-system-utils/dist/module.js
var isFragment = (fragment) => (fragment == null ? void 0 : fragment.type) === import_react32.Fragment || fragment === import_react32.Fragment;
var addPropsToChildren = (children, containsComponent, props) => {
  const numChildren = import_react32.Children.toArray(children).length;
  const executeContainsComponent = (child) => {
    if (containsComponent(child)) {
      return (0, import_react32.cloneElement)(child, { ...child.props, ...props });
    }
    return child;
  };
  if (numChildren === 1) {
    return executeContainsComponent(children);
  }
  if (numChildren > 1) {
    return import_react32.Children.map(
      import_react32.Children.toArray(children),
      (child) => executeContainsComponent(child)
    );
  }
  return children;
};
var mergeRefs = (refs) => (value) => {
  refs.forEach((ref) => {
    if (typeof ref === "function") {
      ref(value);
    } else if (ref != null) {
      ref.current = value;
    }
  });
};
var removeEventProps = (props, exceptions) => Object.entries(props).reduce((result, [key, fn]) => {
  if (key.startsWith("on") && !exceptions.includes(key)) {
    return result;
  }
  return {
    ...result,
    [key]: fn
  };
}, {});
var booleanify = (value) => {
  if (value === true || value === "true") {
    return true;
  }
  return false;
};
var isOverTarget = (point, target) => {
  const rect = target.getBoundingClientRect();
  const pointRect = getPointClientRect(point);
  return areRectanglesOverlapping(rect, pointRect);
};
var getPointClientRect = (point) => {
  var _a, _b, _c, _d;
  const width = (_a = point.width) != null ? _a : 0;
  const height = (_b = point.height) != null ? _b : 0;
  const offsetX = (_c = width !== 0 ? width / 2 : point.radiusX) != null ? _c : 0;
  const offsetY = (_d = height !== 0 ? height / 2 : point.radiusY) != null ? _d : 0;
  return {
    top: point.clientY - offsetY,
    right: point.clientX + offsetX,
    bottom: point.clientY + offsetY,
    left: point.clientX - offsetX
  };
};
var areRectanglesOverlapping = (a2, b2) => {
  if (a2.left > b2.right || b2.left > a2.right) {
    return false;
  }
  if (a2.top > b2.bottom || b2.top > a2.bottom) {
    return false;
  }
  return true;
};
var booleanishAttrValue = (x2) => booleanify(x2) ? "" : void 0;
var stringAttrValue = (...ids) => {
  const str = ids.filter((x2) => x2 != null && x2 !== false).join(" ").trim();
  return str !== "" ? str : void 0;
};
var createConstants = (...constants) => constants.reduce(
  (result, key) => ({
    ...result,
    [key]: key
  }),
  {}
);
var mapKeysToVariants = (map, prop) => Object.keys(map).reduce((acc, key) => {
  let newProp = {};
  if (typeof prop === "string") {
    newProp = { [key]: { [prop.toString()]: "$".concat(String(key)) } };
  } else {
    newProp = { [key]: prop(key) };
  }
  return {
    ...acc,
    ...newProp
  };
}, {});
var handleVirtualClick = (e2, ref) => {
  if ((e2 == null ? void 0 : e2.nativeEvent) === void 0) {
    console.error(
      "onClick expected a MouseEvent but got different one. It usually happens due to a element used asChild with a different onClick interface.\n" + "Event: ".concat(JSON.stringify(e2, null, 2))
    );
    return;
  }
  const nativeEvent = e2.nativeEvent;
  if (nativeEvent.mozInputSource === void 0) {
    nativeEvent.mozInputSource = null;
  }
  if ($6a7db85432448f7f$export$60278871457622de(e2.nativeEvent) && ref.current !== null) {
    const pointerMoveEvent = new PointerEvent("pointermove", {
      bubbles: true,
      cancelable: true,
      pointerType: "mouse",
      isPrimary: true,
      clientX: e2.clientX,
      clientY: e2.clientY
    });
    const pointerDownEvent = new PointerEvent("pointerdown", {
      bubbles: true,
      cancelable: true,
      pointerType: "mouse"
    });
    const pointerUpEvent = new PointerEvent("pointerup", {
      bubbles: true,
      cancelable: true,
      pointerType: "mouse"
    });
    ref.current.dispatchEvent(pointerMoveEvent);
    ref.current.dispatchEvent(pointerDownEvent);
    ref.current.dispatchEvent(pointerUpEvent);
  }
};

// node_modules/@mirohq/design-system-icons/dist/module.js
var StyledIcon = styled(Primitive.svg, {
  display: "inline-flex",
  verticalAlign: "text-bottom",
  forcedColorAdjust: "auto",
  variants: {
    ...styles,
    color: mapKeysToVariants(theme$1.colors, "color"),
    debug: {
      true: {
        color: "#06D834 !important"
      },
      false: {}
    }
  }
});
var IconActivitySparkle = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M12 4a8 8 0 0 0-6.953 11.959l.137.23.103.822-.764 2.457 2.431-.77.83.103.282.167A7.965 7.965 0 0 0 12 20a8 8 0 0 0 7.936-7h2.014c-.502 5.053-4.765 9-9.95 9a9.973 9.973 0 0 1-4.864-1.263l-3.833 1.216-1.258-1.25 1.201-3.867A9.958 9.958 0 0 1 2 12C2 6.477 6.477 2 12 2v2Zm-.08 8.923.616-1.232.09-.151a1.25 1.25 0 0 1 1.028-.54H15l-.882 2-1.223 2.447-1.752.068L9 11.943l-.643 1.072-1.714-1.03 1.5-2.5h1.714l2.063 3.438ZM19.25 1A3.75 3.75 0 0 0 23 4.75v1.5A3.75 3.75 0 0 0 19.25 10h-1.5A3.75 3.75 0 0 0 14 6.25v-1.5A3.75 3.75 0 0 0 17.75 1h1.5Z"
        }
      )
    );
  }
);
IconActivitySparkle[iconSymbol] = true;
var IconActivity = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m9.857 9.485 2.063 3.438.616-1.232.09-.151a1.25 1.25 0 0 1 1.028-.54H17v2h-2.882l-1.223 2.447-1.752.068L9 11.943l-.643 1.072-1.714-1.03 1.5-2.5h1.714ZM20 12a8 8 0 1 0-14.953 3.959l.137.23.103.822-.764 2.457 2.431-.77.83.103.282.167A7.965 7.965 0 0 0 12 20a8 8 0 0 0 8-8Zm2 0c0 5.523-4.477 10-10 10a9.973 9.973 0 0 1-4.864-1.263l-3.833 1.216-1.258-1.25 1.201-3.867A9.958 9.958 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10Z"
        }
      )
    );
  }
);
IconActivity[iconSymbol] = true;
var IconAddLineBottom = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M13 10v4h4v2h-4v4h-2v-4H7v-2h4v-4h2Zm9-6v2H2V4h20Z"
        }
      )
    );
  }
);
IconAddLineBottom[iconSymbol] = true;
var IconAddLineLeft = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M14 13h-4v4H8v-4H4v-2h4V7h2v4h4v2Zm7 8h-2V3h2v18Z"
        }
      )
    );
  }
);
IconAddLineLeft[iconSymbol] = true;
var IconAddLineRight = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M4 3h2v18H4V3Zm6 8h4V7h2v4h4v2h-4v4h-2v-4h-4v-2Z"
        }
      )
    );
  }
);
IconAddLineRight[iconSymbol] = true;
var IconAddLineTop = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M11 14v-4H7V8h4V4h2v4h4v2h-4v4h-2Zm-9 6v-2h20v2H2Z"
        }
      )
    );
  }
);
IconAddLineTop[iconSymbol] = true;
var IconAha = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m2.67 14.385-.422 1.883c0 .056-.056.084-.112.084H.112c-.028 0-.084-.028-.084-.056C0 16.268 0 16.24 0 16.212l2.67-8.094s.056-.14.225-.196c.59-.113 1.517-.253 2.164-.366.14-.028.196.113.196.113l2.614 8.6c0 .027 0 .055-.028.084-.028.028-.056.028-.085.028h-1.18c-.309 0-.927.028-1.152.028-.056 0-.113-.028-.113-.085l-.421-1.91-2.22-.029Zm1.883-1.658c-.169-.674-.422-1.883-.675-2.923a88.65 88.65 0 0 1-.759 2.923h1.434Zm5.986-1.995c1.433-.984 2.641-.759 3.232-.169.702.731.309 1.686.534 5.705 0 .028 0 .056-.029.084-.028.029-.056.029-.084.029-.225 0-.646-.029-.843-.029-.337 0-1.04.029-1.32.029-.029 0-.057 0-.085-.029-.028-.028-.028-.056-.028-.084.028-3.934.056-4.468-.647-4.468-.253 0-.45.112-.674.196 0 2.024.028 2.614.112 4.244 0 .028 0 .056-.028.056-.028.028-.056.028-.056.028l-2.248.028c-.028 0-.057 0-.057-.028-.028-.028-.028-.056-.028-.056.057-5.873 0-7.082-.168-8.318-.085-.057.028-.057.028-.057 1.012-.14 1.096-.168 2.248-.393 0 0 .113 0 .113.14.028.872.028 3.092.028 3.092Zm7.7 5.03c-.422.31-1.237.731-1.911.731-1.04 0-1.686-.759-1.686-1.883 0-1.742 2.051-2.248 3.512-2.445.029-.28.029-.59-.702-.59-.73 0-1.349.225-1.995.478-.029.028-.085 0-.113 0-.028-.028-.056-.057-.056-.113l.056-1.349c0-.056.028-.084.085-.112 1.32-.393 3.569-.703 4.496.169.59.534.562 1.208.534 2.332-.028 1.63 0 2.08.084 3.288 0 .028 0 .056-.028.084-.028.029-.056.029-.084.029l-2.08.028c-.028 0-.056 0-.084-.028-.028-.029-.028-.057-.028-.085v-.534Zm-.056-2.332c-.534.056-1.35.112-1.35.815 0 .618.675.815 1.35.393V13.43Zm3.765.028a.121.121 0 0 1-.112-.113c-.14-3.063-.168-3.4-.337-5.311 0-.056.028-.112.112-.14l2.248-.366c.029 0 .085 0 .113.028.028.028.028.056.028.113-.14 1.377-.281 3.99-.31 5.648a.12.12 0 0 1-.112.113l-1.63.028Zm-.392 2.609-.001-.028c0-.382.01-.772.012-1.111 0-.125-.004-.25-.012-.374 0-.02 0-.039.009-.058a4.448 4.448 0 0 0-.009-.193c0-.029 0-.057.028-.086.03-.028.058-.028.086-.028.569.057 1.565.028 2.02-.029.029 0 .057 0 .086.029.028.028.028.057.028.085a18.338 18.338 0 0 1 0 .252v1.742c0 .028 0 .056-.028.084-.028.029-.056.029-.084.029-.815-.029-1.321-.029-2.023.028-.029 0-.057 0-.085-.028-.028-.029-.028-.057-.028-.085l.001-.23Z"
        }
      )
    );
  }
);
IconAha[iconSymbol] = true;
var IconAiCursor = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M19.25 1A3.75 3.75 0 0 0 23 4.75v1.5A3.75 3.75 0 0 0 19.25 10h-1.5A3.75 3.75 0 0 0 14 6.25v-1.5A3.75 3.75 0 0 0 17.75 1h1.5ZM4.662 22.607l2.025.574c2.482-4.35 7.221-7 12.228-6.834l.598-2.108L5.138 3.822 3.046 4.99l1.616 17.617Zm11.771-8.132a15.648 15.648 0 0 0-9.998 5.559L5.176 6.319l11.257 8.156Z"
        }
      )
    );
  }
);
IconAiCursor[iconSymbol] = true;
var IconAiText = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20 5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5Zm2 14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14Zm-11.749-8.566-.891 2.497h1.793l-.902-2.497ZM6.544 16 9.47 8.3h1.562l2.937 7.7h-1.716l-.605-1.683H8.865L8.26 16H6.544Zm8.13 0V8.3h1.661V16h-1.66Z"
        }
      )
    );
  }
);
IconAiText[iconSymbol] = true;
var IconAlignBottomGroup = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M7 3h3v13H7V3Zm7 6h3v7h-3V9ZM3 19.5h18v1H3v-1Z"
        }
      )
    );
  }
);
IconAlignBottomGroup[iconSymbol] = true;
var IconAlignBottom = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M3 22v-2h18v2H3Zm8-18v10.586l-3.293-3.293-1.414 1.414 5 5h1.414l5-5-1.414-1.414L13 14.586V4h-2Z"
        }
      )
    );
  }
);
IconAlignBottom[iconSymbol] = true;
var IconAlignCenterHorizontal = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M12.5 7H20v3h-7.5v4H18v3h-5.5v4h-1v-4H6v-3h5.5v-4H4V7h7.5V3h1v4Z"
        }
      )
    );
  }
);
IconAlignCenterHorizontal[iconSymbol] = true;
var IconAlignCenterVertical = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M7 4h3v7.5h4V6h3v5.5h4v1h-4V18h-3v-5.5h-4V20H7v-7.5H3v-1h4V4Z"
        }
      )
    );
  }
);
IconAlignCenterVertical[iconSymbol] = true;
var IconAlignLeft = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M4.5 21h-1V3h1v18ZM8 7h13v3H8V7Zm0 0h13v3H8V7Zm0 0h13v3H8V7Zm0 7h7v3H8v-3Zm0 0h7v3H8v-3Zm0 0h7v3H8v-3Z"
        }
      )
    );
  }
);
IconAlignLeft[iconSymbol] = true;
var IconAlignMiddle = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m16.207 17.793-1.414 1.414L13 17.414V22h-2v-4.586l-1.793 1.793-1.414-1.414 3.5-3.5h1.414l3.5 3.5ZM21 13H3v-2h18v2Zm-8-6.414 1.793-1.793 1.414 1.414-3.5 3.5h-1.414l-3.5-3.5 1.414-1.414L11 6.586V2h2v4.586Z"
        }
      )
    );
  }
);
IconAlignMiddle[iconSymbol] = true;
var IconAlignRight = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20.5 21h-1V3h1v18ZM3 7h13v3H3V7Zm0 0h13v3H3V7Zm0 0h13v3H3V7Zm6 7h7v3H9v-3Zm0 0h7v3H9v-3Zm0 0h7v3H9v-3Z"
        }
      )
    );
  }
);
IconAlignRight[iconSymbol] = true;
var IconAlignTopGroup = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M3 3.5h18v1H3v-1ZM7 8h3v13H7V8Zm7 0h3v7h-3V8Z"
        }
      )
    );
  }
);
IconAlignTopGroup[iconSymbol] = true;
var IconAlignTop = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m17.707 12.293-1.414 1.414L13 10.414V21h-2V10.414l-3.293 3.293-1.414-1.414 5-5h1.414l5 5ZM21 5H3V3h18v2Z"
        }
      )
    );
  }
);
IconAlignTop[iconSymbol] = true;
var IconAlignmentScale = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "m16.176 20.81-1.028 1.028a9.028 9.028 0 0 0-9.29.006l-.987-.987L9.836 10.18h1.327l5.013 10.63Zm-8.162-1.971a11.07 11.07 0 0 1 5.025.009l-2.532-5.371-2.493 5.362ZM22 4v8l-1 1h-6v-2h5V5h-2v3h-2V5h-3v3h-2V5H8v3H6V5H4v6h2v2H3l-1-1V4l1-1h18l1 1Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconAlignmentScale[iconSymbol] = true;
var IconAltTextUnderline = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M22 20H2v-2h20v2Zm-11.923-4H7.923l-.6-1.5H4.677l-.6 1.5H1.923L5.07 8.129h1.86L10.077 16Zm-4.6-3.5h1.045L6 11.192 5.477 12.5ZM13 14h3v2h-5V8h2v6Zm9-4h-2v6h-2v-6h-2V8h6v2Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconAltTextUnderline[iconSymbol] = true;
var IconAltText = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M6.929 8.129 10.077 16H7.923l-.6-1.5H4.677l-.6 1.5H1.923L5.07 8.129h1.86ZM5.477 12.5h1.045L6 11.192 5.477 12.5ZM13 14h3v2h-5V8h2v6Zm9-4h-2v6h-2v-6h-2V8h6v2Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconAltText[iconSymbol] = true;
var IconAndroidShare = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M17.5 3a3.5 3.5 0 1 1-2.724 5.698l-4.92 2.812a3.498 3.498 0 0 1 .127 1.32l4.653 2.658a3.5 3.5 0 1 1-.635 1.94l-4.778-2.73a3.5 3.5 0 1 1-.459-4.867l5.252-3A3.5 3.5 0 0 1 17.5 3Zm0 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm-11-5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm11-6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconAndroidShare[iconSymbol] = true;
var IconArrowArcLeft = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M4 12.392C5.533 10.562 8.226 8 12 8c3.075 0 5.562 1.701 7.215 3.275a17.797 17.797 0 0 1 2.453 2.913 10.62 10.62 0 0 1 .174.271l.01.018.004.007.001.001-1.714 1.03-.005-.008-.026-.041a13.686 13.686 0 0 0-.56-.804c-.397-.53-.98-1.235-1.717-1.937C16.338 11.299 14.325 10 12 10c-3.076 0-5.343 2.275-6.731 4H11v2H3l-1-1V7h2v5.392Z"
        }
      )
    );
  }
);
IconArrowArcLeft[iconSymbol] = true;
var IconArrowArcRight = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m22 15-1 1h-8v-2h5.73c-1.388-1.725-3.654-4-6.73-4-2.325 0-4.338 1.299-5.835 2.725a15.821 15.821 0 0 0-2.167 2.57l-.11.17-.026.042-.005.008-1.714-1.03.004-.008.011-.018a7.437 7.437 0 0 1 .174-.27 17.808 17.808 0 0 1 2.453-2.913C6.438 9.7 8.925 8 12 8c3.773 0 6.466 2.56 8 4.39V7h2v8Z"
        }
      )
    );
  }
);
IconArrowArcRight[iconSymbol] = true;
var IconArrowBendUpLeft = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M8.707 5.707 5.414 9H13c1.808 0 3.565.378 4.987 1.49 1.435 1.122 2.388 2.878 2.8 5.345A17.725 17.725 0 0 1 21 18v2h-2v-1.973a15.712 15.712 0 0 0-.186-1.862c-.355-2.124-1.123-3.368-2.058-4.099C15.809 11.326 14.549 11 13 11H5.414l3.293 3.293-1.414 1.414-5-5V9.293l5-5 1.414 1.414Z"
        }
      )
    );
  }
);
IconArrowBendUpLeft[iconSymbol] = true;
var IconArrowBendUpRight = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M21.707 9.293v1.414l-5 5-1.414-1.414L18.586 11H11c-1.55 0-2.81.326-3.756 1.066-.935.731-1.703 1.975-2.057 4.099A15.706 15.706 0 0 0 5 18.027V20H3v-2l.001-.045a17.63 17.63 0 0 1 .213-2.12c.412-2.467 1.364-4.223 2.799-5.345C7.435 9.378 9.193 9 11 9h7.586l-3.293-3.293 1.414-1.414 5 5Z"
        }
      )
    );
  }
);
IconArrowBendUpRight[iconSymbol] = true;
var IconArrowBoxLeft = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M5 19v-5h2v5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-5V5h5a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3Zm-1-8V5.414l8.293 8.293 1.415-1.414L5.415 4H11V2H3L2 3v8h2Z"
        }
      )
    );
  }
);
IconArrowBoxLeft[iconSymbol] = true;
var IconArrowBoxOut = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M10 7H5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-5h2v5a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h5v2Zm11.992-3.876-1 8-1.984-.248.637-5.108-7.938 7.939-1.414-1.414 7.94-7.94-5.109.64-.248-1.985 8-1 1.116 1.116Z"
        }
      )
    );
  }
);
IconArrowBoxOut[iconSymbol] = true;
var IconArrowClockwiseDownRight = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M11 3a9 9 0 0 1 9 9v.586l1.293-1.293 1.414 1.414-3 3h-1.414l-3-3 1.414-1.414L18 12.586V12a7 7 0 1 0-7 7v2a9 9 0 1 1 0-18Z"
        }
      )
    );
  }
);
IconArrowClockwiseDownRight[iconSymbol] = true;
var IconArrowClockwiseIntoRectangle = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M6 17v-.188h2V17a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v.188H6V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3Zm-1.636-6.263c1.814-1.604 4.71-1.604 6.523 0l1.113.986V10h2v4l-1 1H8.479v-2h1.946l-.863-.765c-1.057-.934-2.816-.934-3.873 0L3.663 14.03l-1.326-1.498 2.027-1.794Z"
        }
      )
    );
  }
);
IconArrowClockwiseIntoRectangle[iconSymbol] = true;
var IconArrowClockwiseUpLeft = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M13 3a9 9 0 1 1-9 9v-.586l-1.293 1.293-1.414-1.414 3-3h1.414l3 3-1.414 1.414L6 11.414V12a7 7 0 1 0 7-7V3Z"
        }
      )
    );
  }
);
IconArrowClockwiseUpLeft[iconSymbol] = true;
var IconArrowCounterClockwiseDownLeft = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M13 3a9 9 0 1 1 0 18v-2a7 7 0 1 0-7-7v.586l1.293-1.293 1.414 1.414-3 3H4.293l-3-3 1.414-1.414L4 12.586V12a9 9 0 0 1 9-9Z"
        }
      )
    );
  }
);
IconArrowCounterClockwiseDownLeft[iconSymbol] = true;
var IconArrowCounterClockwiseUpRight = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M11 5a7 7 0 1 0 7 7v-.586l-1.293 1.293-1.414-1.414 3-3h1.414l3 3-1.414 1.414L20 11.414V12a9 9 0 1 1-9-9v2Z"
        }
      )
    );
  }
);
IconArrowCounterClockwiseUpRight[iconSymbol] = true;
var IconArrowCurvesBottomRight = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M17 3c1.498 0 2.706.532 3.537 1.404.818.86 1.213 1.989 1.213 3.096s-.395 2.237-1.213 3.096C19.707 11.468 18.498 12 17 12H7c-1.002 0-1.668.343-2.088.783A2.485 2.485 0 0 0 4.25 14.5c0 .642.23 1.263.662 1.717.42.44 1.086.783 2.088.783h11.586l-1.293-1.293 1.414-1.414 3 3v1.414l-3 3-1.414-1.414L18.586 19H7c-1.498 0-2.706-.532-3.537-1.404-.818-.86-1.213-1.989-1.213-3.096s.395-2.237 1.213-3.096C4.293 10.532 5.502 10 7 10h10c1.002 0 1.669-.343 2.088-.783A2.484 2.484 0 0 0 19.75 7.5c0-.642-.23-1.263-.662-1.717C18.668 5.343 18 5 17 5H5V3h12Z"
        }
      )
    );
  }
);
IconArrowCurvesBottomRight[iconSymbol] = true;
var IconArrowCurvesSparks = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M15 12H7c-1.002 0-1.668.343-2.088.783A2.485 2.485 0 0 0 4.25 14.5c0 .642.23 1.263.662 1.717.42.44 1.086.783 2.088.783h11.586l-1.293-1.293 1.414-1.414 3 3v1.414l-3 3-1.414-1.414L18.586 19H7c-1.498 0-2.706-.532-3.537-1.404-.818-.86-1.213-1.989-1.213-3.096s.395-2.237 1.213-3.096C4.293 10.532 5.502 10 7 10h8v2Zm-3-7H5V3h7v2Zm7.25-4A3.75 3.75 0 0 0 23 4.75v1.5A3.75 3.75 0 0 0 19.25 10h-1.5A3.75 3.75 0 0 0 14 6.25v-1.5A3.75 3.75 0 0 0 17.75 1h1.5Z"
        }
      )
    );
  }
);
IconArrowCurvesSparks[iconSymbol] = true;
var IconArrowDownLeft = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20.707 4.707 7.413 18H13v2H5l-1-1 .001-8H6v5.586L19.293 3.293l1.414 1.414Z"
        }
      )
    );
  }
);
IconArrowDownLeft[iconSymbol] = true;
var IconArrowDownRight = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M18 16.586V11h1.999L20 19l-1 1h-8v-2h5.586L3.293 4.707l1.414-1.414L18 16.586Z"
        }
      )
    );
  }
);
IconArrowDownRight[iconSymbol] = true;
var IconArrowDown = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M13 3v15.864l4.36-3.633 1.28 1.538-6 5h-1.28l-6-5 1.28-1.538L11 18.864V3h2Z"
        }
      )
    );
  }
);
IconArrowDown[iconSymbol] = true;
var IconArrowElbowDownRight = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M5 14h13.586l-3.293-3.293 1.414-1.414 5 5v1.414l-5 5-1.414-1.414L18.586 16H4l-1-1V4h2v10Z"
        }
      )
    );
  }
);
IconArrowElbowDownRight[iconSymbol] = true;
var IconArrowFatLeftRight = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M7.495 5.414c.785-.865 2.177-.284 2.177.91V8.61l4.674.001V6.325c0-1.194 1.394-1.775 2.178-.908l5.13 5.676c.46.509.46 1.305 0 1.814l-5.13 5.676c-.784.867-2.178.286-2.178-.908v-2.083H9.672v2.085c0 1.193-1.392 1.774-2.177.909l-5.148-5.677a1.366 1.366 0 0 1 0-1.818l5.148-5.677ZM4.305 12l3.348 3.69v-2.21h8.712v2.206L19.695 12l-3.33-3.685v2.409H7.653V8.309L4.306 12Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconArrowFatLeftRight[iconSymbol] = true;
var IconArrowFatLeft = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M12.5 19.247V16h8V8h-8V4.753L4.49 12l8.01 7.247Zm2 1.69c0 1.083-1.285 1.654-2.089.927L1.51 12l10.902-9.864c.804-.727 2.089-.156 2.089.927V6h6.75c.69 0 1.25.56 1.25 1.25v9.5c0 .69-.56 1.25-1.25 1.25H14.5v2.937Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconArrowFatLeft[iconSymbol] = true;
var IconArrowFatRight = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M10 3.063c0-1.015 1.13-1.58 1.933-1.048l.156.122L22.99 12l-10.9 9.863c-.804.727-2.089.157-2.089-.927V18H3.25C2.56 18 2 17.44 2 16.75v-9.5C2 6.56 2.56 6 3.25 6H10V3.063ZM12 8H4v8h8v3.247L20.01 12 12 4.752V8Z"
        }
      )
    );
  }
);
IconArrowFatRight[iconSymbol] = true;
var IconArrowFatUpRight = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20.758 2.03a1 1 0 0 1 1.212 1.212l-3 12a1 1 0 0 1-1.677.465l-2.396-2.397-10.31 7.499a1 1 0 0 1-1.396-1.397l7.497-10.31-2.395-2.395a1 1 0 0 1 .465-1.677l12-3Zm-9.803 4.511 1.752 1.752a1 1 0 0 1 .102 1.295l-4.277 5.879 5.88-4.276.076-.05a1 1 0 0 1 1.219.152l1.751 1.75 2.168-8.67-8.671 2.168Z"
        }
      )
    );
  }
);
IconArrowFatUpRight[iconSymbol] = true;
var IconArrowLeftAwayLine = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M11.707 6.707 7.414 11H18v2H7.414l4.293 4.293-1.414 1.414-6-6v-1.414l6-6 1.414 1.414ZM22 19h-2V5h2v14Z"
        }
      )
    );
  }
);
IconArrowLeftAwayLine[iconSymbol] = true;
var IconArrowLeftRightDotted = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M4 18.667C4 19.281 4.886 20 5.5 20H8v2H5.333A3.333 3.333 0 0 1 2 18.667V16h2v2.667ZM14 22h-4v-2h4v2Zm8-3.333A3.333 3.333 0 0 1 18.667 22H16v-2h2.667C19.28 20 20 19.28 20 18.667V16h2v2.667ZM9.732 9.181 8.043 11H11v2H8.043l1.69 1.82-1.465 1.36-3.25-3.5v-1.36l3.25-3.5 1.464 1.36Zm9.25 2.138v1.362l-3.25 3.5-1.464-1.362L15.957 13H13v-2h2.957l-1.69-1.82 1.465-1.36 3.25 3.5ZM4 14H2v-4h2v4Zm18 0h-2v-4h2v4ZM8 4H5.333C4.72 4 4 4.72 4 5.333V8H2V5.333A3.333 3.333 0 0 1 5.333 2H8v2Zm10.667-2A3.333 3.333 0 0 1 22 5.333V8h-2V5.333C20 4.72 19.28 4 18.667 4H16V2h2.667ZM14 4h-4V2h4v2Z"
        }
      )
    );
  }
);
IconArrowLeftRightDotted[iconSymbol] = true;
var IconArrowLeftTowardLine = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M15.707 6.707 11.414 11H21v2h-9.586l4.293 4.293-1.414 1.414-6-6v-1.414l6-6 1.414 1.414ZM6 19H4V5h2v14Z"
        }
      )
    );
  }
);
IconArrowLeftTowardLine[iconSymbol] = true;
var IconArrowLeft = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M9.707 6.707 5.414 11H20v2H5.414l4.293 4.293-1.414 1.414-6-6v-1.414l6-6 1.414 1.414Z"
        }
      )
    );
  }
);
IconArrowLeft[iconSymbol] = true;
var IconArrowMobile = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M14 16v2h-4v-2h4Zm-9 3v-1h2v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5a1 1 0 0 0-.898-.995L16 4H8a1 1 0 0 0-1 1v1H5V5a3 3 0 0 1 3-3h8l.154.004A3 3 0 0 1 19 5v14a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3Zm3.469-7.992H8.5v.037l.269.323v1.28l-.269.322v.038h-.031l-2.841 3.408-1.536-1.28 1.773-2.128L1 13v-1.992h4.865L4.092 8.88 5.628 7.6l2.84 3.408Z"
        }
      )
    );
  }
);
IconArrowMobile[iconSymbol] = true;
var IconArrowRightAwayLine = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M21.769 11.36v1.28l-5 6-1.538-1.28L18.865 13H8v-2h10.865l-3.634-4.36 1.538-1.28 5 6ZM6 19H4V5h2v14Z"
        }
      )
    );
  }
);
IconArrowRightAwayLine[iconSymbol] = true;
var IconArrowRightTowardLine = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M17.769 11.36v1.28l-5 6-1.538-1.28L14.865 13H4v-2h10.865l-3.634-4.36 1.538-1.28 5 6ZM22 19h-2V5h2v14Z"
        }
      )
    );
  }
);
IconArrowRightTowardLine[iconSymbol] = true;
var IconArrowRight = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M21.769 11.36v1.28l-5 6-1.538-1.28L18.865 13H3v-2h15.865l-3.634-4.36 1.538-1.28 5 6Z"
        }
      )
    );
  }
);
IconArrowRight[iconSymbol] = true;
var IconArrowUpCircle = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "m16.707 10.293-1.414 1.414L13 9.414V18h-2V9.414l-2.293 2.293-1.414-1.414 4-4h1.414l4 4ZM11.997 2c5.522 0 10 4.477 10 10s-4.478 10-10 10c-5.524 0-10-4.477-10-10s4.476-10 10-10Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconArrowUpCircle[iconSymbol] = true;
var IconArrowUpLeft = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M13 4v2H7.414l13.293 13.293-1.414 1.414L5.999 7.413 6 13H4V5l1-1h8Z"
        }
      )
    );
  }
);
IconArrowUpLeft[iconSymbol] = true;
var IconArrowUpRight = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20 4v8h-2V6.413L4.707 19.707l-1.414-1.414L16.586 5H11V3.001L19 3l1 1Z"
        }
      )
    );
  }
);
IconArrowUpRight[iconSymbol] = true;
var IconArrowUp = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m12.64 2.231 6 5-1.28 1.538L13 5.135V21h-2V5.135L6.64 8.769 5.36 7.23l6-5h1.28Z"
        }
      )
    );
  }
);
IconArrowUp[iconSymbol] = true;
var IconArrowsClockwiseRectangleTilt = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M9.88 9.707a3 3 0 0 1 4.242 0l3.707 3.707a3 3 0 0 1 0 4.243l-3.707 3.707a3 3 0 0 1-4.243 0l-3.707-3.707a3 3 0 0 1 0-4.243L9.88 9.707Zm2.828 1.414a1 1 0 0 0-1.415 0l-3.707 3.707a1 1 0 0 0 0 1.414l3.707 3.708c.39.39 1.025.39 1.415 0l3.707-3.708a1 1 0 0 0 0-1.414l-3.707-3.707Zm-4.174-9a5 5 0 0 1 7.072 0l1.315 1.315V1h2v4.922l-1 1H13v-2h2.577l-1.384-1.386a3 3 0 0 0-4.131-.107l-.113.107-2.206 2.207-1.414-1.415 2.206-2.206Z"
        }
      )
    );
  }
);
IconArrowsClockwiseRectangleTilt[iconSymbol] = true;
var IconArrowsClockwiseX = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M19.865 7.499C20.648 8.852 21 10.397 21 12a9 9 0 0 1-9 9h-.586l1.293 1.293-1.414 1.414-3-3v-1.414l3-3 1.414 1.414L11.414 19H12a7 7 0 0 0 7-7c0-1.312-.287-2.499-.865-3.499l1.73-1.002Zm-4.158-4.206v1.414l-3 3-1.414-1.414L12.586 5H12a7 7 0 0 0-7 7c0 1.312.287 2.499.865 3.499l-1.73 1.002C3.352 15.148 3 13.603 3 12a9 9 0 0 1 9-9h.586l-1.293-1.293L12.707.293l3 3Z"
        }
      )
    );
  }
);
IconArrowsClockwiseX[iconSymbol] = true;
var IconArrowsClockwiseY = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m7.707 11.293-1.414 1.414L5 11.414V12a7 7 0 0 0 7 7c1.312 0 2.499-.287 3.499-.865l1.002 1.73C15.148 20.648 13.603 21 12 21a9 9 0 0 1-9-9v-.586l-1.293 1.293-1.414-1.414 3-3h1.414l3 3ZM12 3a9 9 0 0 1 9 9v.586l1.293-1.293 1.414 1.414-3 3h-1.414l-3-3 1.414-1.414L19 12.586V12a7 7 0 0 0-7-7c-1.312 0-2.499.287-3.499.865l-1.002-1.73C8.852 3.352 10.397 3 12 3Z"
        }
      )
    );
  }
);
IconArrowsClockwiseY[iconSymbol] = true;
var IconArrowsCounterclockwiseRectangleTilt = (0, import_react33.forwardRef)(({ size = "medium", ...props }, forwardRef22) => {
  const [debug] = useLocalStorage("DEBUG_ICON", false);
  return (0, import_react33.createElement)(
    StyledIcon,
    {
      ...props,
      debug,
      "aria-hidden": true,
      size,
      viewBox: "0 0 24 24",
      fill: "none",
      ref: forwardRef22
    },
    (0, import_jsx_runtime4.jsx)(
      "path",
      {
        fill: "currentColor",
        d: "M14.121 9.707a3 3 0 0 0-4.243 0L6.17 13.414a3 3 0 0 0 0 4.243l3.707 3.707a3 3 0 0 0 4.243 0l3.707-3.707a3 3 0 0 0 0-4.243L14.12 9.707Zm-2.829 1.414a1 1 0 0 1 1.415 0l3.707 3.707a1 1 0 0 1 0 1.414l-3.707 3.708c-.39.39-1.025.39-1.415 0l-3.707-3.708a1 1 0 0 1 0-1.414l3.707-3.707Zm4.174-9a5 5 0 0 0-7.071 0L7.079 3.437V1h-2v4.922l1 1h4.922v-2H8.424l1.385-1.386a3 3 0 0 1 4.13-.107l.113.107 2.206 2.207 1.414-1.415-2.206-2.206Z"
      }
    )
  );
});
IconArrowsCounterclockwiseRectangleTilt[iconSymbol] = true;
var IconArrowsDownUp = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M17.947 3H18v.046l4.411 3.86-1.317 1.505L18 5.703V22h-2V5.703l-3.094 2.708-1.317-1.505L16 3.046V3h.053l.289-.253h1.316l.29.253ZM8 18.586l2.5-2.5 1.414 1.414-4.207 4.207H6.293L2.086 17.5 3.5 16.086l2.5 2.5V3h2v15.586Z"
        }
      )
    );
  }
);
IconArrowsDownUp[iconSymbol] = true;
var IconArrowsHorizontalLinesTopBottomIn = (0, import_react33.forwardRef)(({ size = "medium", ...props }, forwardRef22) => {
  const [debug] = useLocalStorage("DEBUG_ICON", false);
  return (0, import_react33.createElement)(
    StyledIcon,
    {
      ...props,
      debug,
      "aria-hidden": true,
      size,
      viewBox: "0 0 24 24",
      fill: "none",
      ref: forwardRef22
    },
    (0, import_jsx_runtime4.jsx)(
      "path",
      {
        fill: "currentColor",
        d: "M13 20h7v2H4v-2h7v-4h2v4Zm-2.293-8.707v1.414l-4 4-1.414-1.414L7.586 13H2v-2h5.586L5.293 8.707l1.414-1.414 4 4Zm8-2.586L16.414 11H22v2h-5.586l2.293 2.293-1.414 1.414-4-4v-1.414l4-4 1.414 1.414ZM20 4h-7v4h-2V4H4V2h16v2Z"
      }
    )
  );
});
IconArrowsHorizontalLinesTopBottomIn[iconSymbol] = true;
var IconArrowsHorizontalLinesTopBottom = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M13 20h7v2H4v-2h7v-4h2v4ZM6.707 8.707 4.414 11H10v2H4.414l2.293 2.293-1.414 1.414-4-4v-1.414l4-4 1.414 1.414Zm16 2.586v1.414l-4 4-1.414-1.414L19.586 13H14v-2h5.586l-2.293-2.293 1.414-1.414 4 4ZM20 4h-7v4h-2V4H4V2h16v2Z"
        }
      )
    );
  }
);
IconArrowsHorizontalLinesTopBottom[iconSymbol] = true;
var IconArrowsInSimple = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M11 14v6H9v-3.586l-6 6L1.586 21l6-6.001L4 15v-2h6l1 1ZM22.414 3l-6 6H20l-.001 2H14l-1-1V4h2v3.586l6-6L22.414 3Z"
        }
      )
    );
  }
);
IconArrowsInSimple[iconSymbol] = true;
var IconArrowsOutCardinal = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M16.414 5 15 6.414l-2-2V11h6.586l-2-2L19 7.586l3.707 3.707v1.414L19 16.414 17.586 15l2-2H13v6.586l2-2L16.414 19l-3.707 3.707h-1.414L7.586 19 9 17.586l2 2V13H4.414l2 2L5 16.414l-3.707-3.707v-1.414L5 7.586 6.414 9l-2 2H11V4.414l-2 2L7.586 5l3.707-3.707h1.414L16.414 5Z"
        }
      )
    );
  }
);
IconArrowsOutCardinal[iconSymbol] = true;
var IconArrowsOutLinesHorizontal = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M3 18H1V6h2v12Zm20 0h-2V6h2v12Zm-3.293-6.707v1.414l-3 3-1.414-1.414L16.586 13H7.414l1.293 1.293-1.414 1.414-3-3v-1.414l3-3 1.414 1.414L7.414 11h9.172l-1.293-1.293 1.414-1.414 3 3Z"
        }
      )
    );
  }
);
IconArrowsOutLinesHorizontal[iconSymbol] = true;
var IconArrowsOutLinesVertical = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M18 23H6v-2h12v2ZM15.707 7.293l-1.414 1.414L13 7.414v9.172l1.293-1.293 1.414 1.414-3 3h-1.414l-3-3 1.414-1.414L11 16.586V7.414L9.707 8.707 8.293 7.293l3-3h1.414l3 3ZM18 3H6V1h12v2Z"
        }
      )
    );
  }
);
IconArrowsOutLinesVertical[iconSymbol] = true;
var IconArrowsOutSimple = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M10.707 14.707 5.414 20H9v2H3l-1-1v-6h2v3.586l5.293-5.293 1.414 1.414ZM22 3v6h-2V5.414l-5.293 5.293-1.414-1.414L18.586 4H15V2h6l1 1Z"
        }
      )
    );
  }
);
IconArrowsOutSimple[iconSymbol] = true;
var IconArrowsSquareCounterClockwiseY = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m22.707 7.293-1.414 1.414L19 6.414V20l-1 1h-5v-2h4V6.414l-2.293 2.293-1.414-1.414 4-4h1.414l4 4ZM13 5H8v12.586l2.293-2.293 1.414 1.414-4 4H6.293l-4-4 1.414-1.414L6 17.586V4l1-1h6v2Z"
        }
      )
    );
  }
);
IconArrowsSquareCounterClockwiseY[iconSymbol] = true;
var IconArrowsTimeBackward = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M13.157 2C18.61 2 23 6.494 23 12s-4.39 10-9.843 10v-2C17.472 20 21 16.435 21 12c0-4.435-3.528-8-7.843-8-4.314 0-7.842 3.565-7.842 8v.929l1.603-1.63L8.345 12.7l-3.316 3.375H3.603L.287 12.701 1.713 11.3l1.602 1.63V12c0-5.506 4.39-10 9.842-10ZM11.75 9.5V16h-1.5v-5.001l-.8.6-.9-1.199 2-1.5 1.2.6Zm6 .3v5.4l-.75.75h-3l-.75-.75V9.8l.75-.75h3l.75.75Zm-3 4.65h1.5v-3.9h-1.5v3.9Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconArrowsTimeBackward[iconSymbol] = true;
var IconArrowsTimeForward = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M10.843 2c5.452 0 9.842 4.494 9.842 10v.929l1.602-1.63 1.426 1.402-3.316 3.375h-1.426l-3.316-3.375 1.427-1.402 1.603 1.63V12c0-4.435-3.528-8-7.842-8C6.528 4 3 7.565 3 12c0 4.435 3.528 8 7.843 8v2C5.39 22 1 17.506 1 12S5.39 2 10.843 2ZM8.75 9.5V16h-1.5v-5.176l-1.364.82-.772-1.288 2.5-1.5L8.75 9.5Zm6 .3v5.4l-.75.75h-3l-.75-.75V9.8l.75-.75h3l.75.75Zm-3 4.65h1.5v-3.9h-1.5v3.9Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconArrowsTimeForward[iconSymbol] = true;
var IconArticleEmpty = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M6 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7.414L15.586 4H6ZM3 5a3 3 0 0 1 3-3h10.414L21 6.586V19a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V5Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconArticleEmpty[iconSymbol] = true;
var IconArticle = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M5 5a1 1 0 0 1 1-1h9.586L19 7.414V19a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5Zm1-3a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6.586L16.414 2H6Zm1 7h7V7H7v2Zm0 4h10v-2H7v2Zm0 4h10v-2H7v2Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconArticle[iconSymbol] = true;
var IconAt = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M15 12a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm2 1.5a1.5 1.5 0 0 0 3 0V12c0-3.6-2.693-8.01-7.998-8H12a8 8 0 0 0-.412 15.99L12 20l.065.002h.013a6.878 6.878 0 0 0 .339.005c.24-.002.582-.016.98-.063.809-.096 1.779-.32 2.592-.803l1.022 1.718c-1.15.683-2.43.96-3.38 1.072a11.164 11.164 0 0 1-1.549.074L11.98 22l-.03-.001-.004-.001C6.448 21.969 2 17.505 2 12c0-5.522 4.476-9.998 9.998-10H12c6.693-.012 10 5.6 10 10v1.5a3.5 3.5 0 0 1-6.398 1.964A5 5 0 1 1 17 12v1.5Z"
        }
      )
    );
  }
);
IconAt[iconSymbol] = true;
var IconAttachment = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M14.089 2.917a3.528 3.528 0 0 1 4.877.126 3.565 3.565 0 0 1 0 5.021l-8.786 8.838-1.42-1.409 8.787-8.839a1.564 1.564 0 0 0 0-2.2 1.527 1.527 0 0 0-2.171 0l-9.324 9.378a3.632 3.632 0 0 0 0 5.112 3.566 3.566 0 0 0 5.049.017l6.8-6.748 1.408 1.42-6.8 6.748a5.566 5.566 0 0 1-7.875-.026 5.632 5.632 0 0 1 0-7.933l9.323-9.379.132-.126Z"
        }
      )
    );
  }
);
IconAttachment[iconSymbol] = true;
var IconBadge = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M16 7c1.771 0 3.173.675 4.122 1.742.933 1.05 1.378 2.42 1.378 3.758s-.445 2.709-1.378 3.758C19.173 17.326 17.772 18 16 18H8c-1.771 0-3.173-.674-4.122-1.742-.933-1.05-1.378-2.42-1.378-3.758s.445-2.709 1.378-3.758C4.827 7.674 6.228 7 8 7h8ZM8 9c-1.229 0-2.077.45-2.628 1.07-.567.639-.872 1.518-.872 2.43 0 .912.305 1.791.872 2.43C5.923 15.55 6.772 16 8 16h8c1.229 0 2.077-.45 2.628-1.07.567-.639.872-1.518.872-2.43 0-.912-.305-1.791-.872-2.43C18.077 9.45 17.228 9 16 9H8Z"
        }
      )
    );
  }
);
IconBadge[iconSymbol] = true;
var IconBarrel = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20 7.08a11.06 11.06 0 0 1-1.873.583c-1.75.396-3.954.587-6.127.587-2.173 0-4.376-.19-6.127-.587A10.97 10.97 0 0 1 4 7.079v11.68c.061.075.19.2.462.35.4.22.98.43 1.723.606 1.478.351 3.427.535 5.44.535 2.01 0 4.03-.183 5.645-.54.808-.177 1.486-.392 2-.632.35-.163.582-.319.73-.45V7.08Zm-8-3.33c-2.077 0-4.124.184-5.686.538-.784.178-1.402.388-1.83.612a2.903 2.903 0 0 0-.173.1c.051.032.109.066.173.1.428.224 1.046.434 1.83.612 1.562.354 3.609.538 5.686.538s4.124-.184 5.686-.538c.784-.178 1.402-.388 1.83-.612.064-.034.12-.068.173-.1a2.876 2.876 0 0 0-.173-.1c-.428-.224-1.046-.434-1.83-.612-1.562-.354-3.609-.538-5.686-.538ZM22 19a1 1 0 0 1-.168.555c-.398.596-1.043 1.022-1.716 1.336-.692.322-1.522.576-2.417.773-1.791.394-3.96.586-6.074.586-2.112 0-4.226-.191-5.903-.59-.836-.198-1.608-.458-2.227-.8-.596-.329-1.201-.817-1.443-1.544A1.002 1.002 0 0 1 2 19V5c0-.107.018-.214.052-.316.248-.745.891-1.232 1.503-1.553.642-.338 1.446-.597 2.318-.794C7.623 1.94 9.827 1.75 12 1.75c2.173 0 4.376.19 6.127.587.872.197 1.676.456 2.318.794.612.321 1.255.808 1.503 1.553A.997.997 0 0 1 22 5v14Z"
        }
      )
    );
  }
);
IconBarrel[iconSymbol] = true;
var IconBasicChevron = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m16.95 5 .123.008a1 1 0 0 1 .706.432l4.05 6 .006 1.11-3.952 6a1 1 0 0 1-.834.45H2.998a1 1 0 0 1-.834-1.55L5.754 12l-3.59-5.45A1 1 0 0 1 3 5h13.95Zm-9.164 6.45a1 1 0 0 1 0 1.1L4.856 17H16.51l3.287-4.993L16.418 7H4.856l2.93 4.45Z"
        }
      )
    );
  }
);
IconBasicChevron[iconSymbol] = true;
var IconBear = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M17.85 2C20.777 2 23 4.455 23 7.294a5.361 5.361 0 0 1-1.106 3.271 9.02 9.02 0 0 1 .206 1.906C22.1 17.869 17.438 22 12 22c-5.268 0-9.807-3.877-10.086-9.027L1.9 12.47c0-.653.073-1.29.205-1.906A5.363 5.363 0 0 1 1 7.294C1 4.455 3.223 2 6.15 2l.351.012a5.037 5.037 0 0 1 2.962 1.234 10.682 10.682 0 0 1 5.072 0A5.034 5.034 0 0 1 17.85 2Zm0 2c-1.125 0-2.11.618-2.667 1.546A8.6 8.6 0 0 0 12 4.94a8.6 8.6 0 0 0-3.184.605C8.26 4.618 7.276 4 6.15 4 4.41 4 3 5.475 3 7.294c0 1.118.535 2.105 1.35 2.7a7.042 7.042 0 0 0-.45 2.477C3.9 16.629 7.527 20 12 20s8.1-3.371 8.1-7.53c0-.867-.16-1.7-.45-2.476a3.334 3.334 0 0 0 1.35-2.7C21 5.474 19.59 4 17.85 4ZM13 16v2h-2v-2l-2-2h6l-2 2Zm-4-4H7v-2h2v2Zm8 0h-2v-2h2v2Z"
        }
      )
    );
  }
);
IconBear[iconSymbol] = true;
var IconBellSlash = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M14 20v1l-1 1h-2l-1-1v-1h4Zm5.745-17.333-17 19-1.49-1.334L4.02 17.24l.922-8.883A7.089 7.089 0 0 1 11.994 2c1.626 0 3.132.552 4.335 1.483l1.926-2.15 1.49 1.334ZM11.995 4a5.089 5.089 0 0 0-5.062 4.563l-.637 6.135 8.696-9.72A5.07 5.07 0 0 0 11.994 4Zm7.003 4c.02.127.036.255.049.384L19.905 17H22v2H9v-2h8.895l-.837-8.418A5.116 5.116 0 0 0 16.965 8h2.033Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconBellSlash[iconSymbol] = true;
var IconBellTilt = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M20.072 3.928a7.077 7.077 0 0 1 .473 9.486l-5.49 6.71 1.484 1.484-1.414 1.414L.98 8.877l1.414-1.414 1.481 1.481 6.71-5.49a7.077 7.077 0 0 1 9.487.474Zm-8.22 1.074-6.555 5.364 8.336 8.337 5.364-6.556a5.077 5.077 0 0 0-7.145-7.145ZM8.76 18.072l-2.829-2.828-.707.707v1.414L6.64 18.78h1.415l.707-.708Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconBellTilt[iconSymbol] = true;
var IconBell = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M12.004 2a7.077 7.077 0 0 0-7.042 6.373L4.099 17H2v2h20.004v-2h-2.095l-.863-8.627A7.077 7.077 0 0 0 12.004 2Zm5.052 6.572L17.9 17H6.109l.843-8.428a5.077 5.077 0 0 1 10.104 0ZM10 20h4v1l-1 1h-2l-1-1v-1Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconBell[iconSymbol] = true;
var IconBoard = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M18 14h-7v-2h7v2ZM13 3h6a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2.584l1.25 3H15.5l-1.25-3h-4.5L8.5 22H6.333l1.25-3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h6V1h2v2ZM5 5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconBoard[iconSymbol] = true;
var IconBookOpenInfo = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20 6c0-.207-.046-.321-.086-.382a.392.392 0 0 0-.153-.134l-.1-.043a8.708 8.708 0 0 0-3.573-.445 7.117 7.117 0 0 0-2.571.73 5.714 5.714 0 0 0-.838.512l-.033.025-.646.548-.646-.548-.033-.025a3.496 3.496 0 0 0-.16-.116 5.986 5.986 0 0 0-.678-.397 7.117 7.117 0 0 0-2.57-.73 8.796 8.796 0 0 0-3.252.34l-.322.106c-.153.055-.218.123-.253.177C4.046 5.678 4 5.793 4 6v12.615c.084-.025.17-.052.259-.077C5.167 18.28 6.399 18 7.5 18c1.126 0 2.13.292 2.836.57.357.14.648.28.852.389.027.013.051.028.075.04h1.474c.024-.012.048-.027.075-.04.204-.108.495-.249.852-.39.706-.277 1.71-.57 2.836-.57 1.1 0 2.333.282 3.241.539.089.025.175.052.259.077V6Zm-9.532 14.846s-.003 0-.006-.003l-.037-.022a6.657 6.657 0 0 0-.821-.39C9.04 20.207 8.294 20 7.5 20c-.818 0-1.836.219-2.698.462a19.477 19.477 0 0 0-1.342.433l-.077.03-.018.006-.004.001L2 20V6c0-.51.117-1.023.41-1.472a2.454 2.454 0 0 1 1.251-.969l.407-.135c1.013-.31 2.446-.56 4.02-.42a9.12 9.12 0 0 1 3.297.936c.237.12.442.24.615.346.173-.107.378-.226.615-.346a9.12 9.12 0 0 1 3.297-.937 10.71 10.71 0 0 1 4.427.556l.191.077c.436.194.801.492 1.06.892.293.45.41.963.41 1.472v14l-1.361.932h-.004l-.018-.008-.077-.029a19.474 19.474 0 0 0-1.342-.433C18.336 20.22 17.318 20 16.5 20c-.793 0-1.54.208-2.104.43a6.651 6.651 0 0 0-.82.39c-.018.011-.031.02-.038.023l-.006.004-.242.153h-2.58l-.242-.154ZM13 12v5h-2v-3h-1v-2h3Zm.5-2.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        }
      )
    );
  }
);
IconBookOpenInfo[iconSymbol] = true;
var IconBookmark = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M18.5 3A1.5 1.5 0 0 1 20 4.5V21l-1.475.88L12 18.358 5.475 21.88 4 21V4.5A1.5 1.5 0 0 1 5.5 3h13ZM6 19.323l5.525-2.981h.95L18 19.323V5H6v14.323Z"
        }
      )
    );
  }
);
IconBookmark[iconSymbol] = true;
var IconBoxCaptionsFilled = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h14ZM9.112 9.336c-.482 0-.943.097-1.348.287a2.662 2.662 0 0 0-.458.273c-.605.45-1.01 1.166-1.054 2.131a3.883 3.883 0 0 0 0 .346c.077 1.76 1.334 2.692 2.86 2.692 1.504 0 2.552-.825 2.656-2.097h-1.416a1.016 1.016 0 0 1-.501.695 1.263 1.263 0 0 1-.188.089 1.584 1.584 0 0 1-.705.09 1.47 1.47 0 0 1-.28-.053c-.58-.17-.998-.705-.998-1.589 0-.748.303-1.247.747-1.485.08-.043.166-.078.255-.104.133-.039.276-.06.422-.06a1.469 1.469 0 0 1 .45.063c.412.122.696.416.75.818H11.8c-.152-1.272-1.208-2.096-2.688-2.096Zm5.961 0c-.482 0-.943.097-1.348.287a2.66 2.66 0 0 0-.458.273c-.605.45-1.01 1.166-1.054 2.131a3.929 3.929 0 0 0 0 .346c.077 1.76 1.334 2.692 2.86 2.692 1.504 0 2.552-.825 2.655-2.097h-1.416a1.016 1.016 0 0 1-.5.695 1.258 1.258 0 0 1-.188.089 1.584 1.584 0 0 1-.705.09 1.47 1.47 0 0 1-.28-.053c-.58-.17-.998-.705-.998-1.589 0-.748.303-1.247.747-1.485.08-.043.166-.078.255-.104a1.5 1.5 0 0 1 .422-.06 1.467 1.467 0 0 1 .45.063c.412.122.695.416.75.818h1.496c-.152-1.272-1.208-2.096-2.688-2.096Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconBoxCaptionsFilled[iconSymbol] = true;
var IconBoxCaptions = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M2 7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7Zm3-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5Zm10.073 9.064c-1.576 0-2.864-.992-2.864-2.864 0-1.872 1.32-2.864 2.864-2.864 1.48 0 2.536.824 2.688 2.096h-1.496c-.072-.536-.552-.88-1.2-.88-.784 0-1.424.56-1.424 1.648 0 1.088.632 1.648 1.424 1.648.656 0 1.144-.344 1.248-.88h1.416c-.104 1.272-1.152 2.096-2.656 2.096Zm-5.961 0c-1.576 0-2.864-.992-2.864-2.864 0-1.872 1.32-2.864 2.864-2.864 1.48 0 2.536.824 2.688 2.096h-1.496c-.072-.536-.552-.88-1.2-.88-.784 0-1.424.56-1.424 1.648 0 1.088.632 1.648 1.424 1.648.656 0 1.144-.344 1.248-.88h1.416c-.104 1.272-1.152 2.096-2.656 2.096Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconBoxCaptions[iconSymbol] = true;
var IconBoxLinesTextarea = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M3 6v13h18V6H3Zm16 6v2H5v-2h14Zm-3-4v2H5V8h11Zm7 11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v13Z"
        }
      )
    );
  }
);
IconBoxLinesTextarea[iconSymbol] = true;
var IconBracketClose = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M16.082 12c0 3.893-1.713 7.387-4.422 9.768l-1.32-1.502A10.973 10.973 0 0 0 14.082 12c0-3.294-1.447-6.249-3.742-8.266l1.32-1.502A12.971 12.971 0 0 1 16.082 12Z"
        }
      )
    );
  }
);
IconBracketClose[iconSymbol] = true;
var IconBracketCurlyLeft = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M10 18v-3.981a.56.56 0 0 0-.102-.158 2.75 2.75 0 0 0-.527-.455 7.383 7.383 0 0 0-.611-.377 9.908 9.908 0 0 1-.232-.13 1.325 1.325 0 0 1-.205-.15 1.003 1.003 0 0 1 .437-1.72c.033-.014.085-.037.154-.073.154-.08.351-.198.541-.34.194-.147.35-.296.448-.43.1-.135.097-.194.097-.186V6c0-1.686 1.465-3 3-3h2v2h-2c-.49 0-1 .477-1 1v4c0 .56-.234 1.028-.485 1.37-.19.259-.417.482-.64.67.193.156.39.337.56.542.273.329.565.813.565 1.418v4c0 .523.51 1 1 1h2v2h-2c-1.535 0-3-1.314-3-3Zm-1-5Z"
        }
      )
    );
  }
);
IconBracketCurlyLeft[iconSymbol] = true;
var IconBracketCurlyRight = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M13.992 18v-3.981a.561.561 0 0 1 .103-.158 2.75 2.75 0 0 1 .526-.455c.218-.152.439-.28.611-.377.073-.04.172-.094.233-.13.008-.005.11-.065.204-.15a1.003 1.003 0 0 0-.437-1.72 2.222 2.222 0 0 1-.154-.073 4.005 4.005 0 0 1-.54-.34 2.215 2.215 0 0 1-.448-.43c-.1-.135-.098-.194-.098-.186V6c0-1.686-1.465-3-3-3H9v2h1.992c.49 0 1 .477 1 1v4c0 .56.234 1.028.485 1.37.19.259.418.482.64.67a4.103 4.103 0 0 0-.56.542c-.273.329-.565.813-.565 1.418v4c0 .523-.51 1-1 1H9v2h1.992c1.535 0 3-1.314 3-3Zm1-5Z"
        }
      )
    );
  }
);
IconBracketCurlyRight[iconSymbol] = true;
var IconBracketOpen = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M8 12c0-3.893 1.713-7.387 4.422-9.768l1.32 1.502A10.973 10.973 0 0 0 10 12c0 3.293 1.447 6.248 3.742 8.265l-1.32 1.502A12.971 12.971 0 0 1 8 12Z"
        }
      )
    );
  }
);
IconBracketOpen[iconSymbol] = true;
var IconBracketsAngleSlash = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M8.707 7.707 4.414 12l3.793 3.793-1.414 1.414-4.5-4.5v-1.414l5-5 1.414 1.414Zm6.586 0L19.586 12l-3.793 3.793 1.414 1.414 4.5-4.5v-1.414l-5-5-1.414 1.414Zm-.81-3.522-3 16-1.965-.37 3-16 1.964.37Z"
        }
      )
    );
  }
);
IconBracketsAngleSlash[iconSymbol] = true;
var IconBracketsCurlyCirclesThree = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 25 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M19.645 18v-4c0-.597.306-1.079.601-1.41.19-.214.41-.402.627-.565a4.134 4.134 0 0 1-.682-.645c-.28-.34-.546-.811-.546-1.38V6c0-.523-.556-1-1.09-1h-2.728V3h2.727c1.623 0 3.173 1.233 3.269 2.843l.004.157v4c0-.017-.007.04.107.178.11.135.286.285.503.433.213.145.434.264.604.347l.188.084c.112.03.29.096.455.244.255.23.355.54.322.823a.955.955 0 0 1-.178.449 1.042 1.042 0 0 1-.306.28c-.058.037-.12.068-.14.078l-.107.053-.126.063a7.22 7.22 0 0 0-.653.37c-.239.155-.433.31-.558.452a.539.539 0 0 0-.11.16V18c0 1.686-1.6 3-3.274 3h-2.727v-2h2.727c.535 0 1.091-.477 1.091-1Zm3.178-5.004.095.004c-.035 0-.067-.002-.098-.005l.003.001ZM2.191 18v-3.981a.556.556 0 0 0-.112-.158 2.94 2.94 0 0 0-.574-.455 8.215 8.215 0 0 0-.667-.377c-.08-.04-.187-.094-.254-.13-.009-.005-.12-.065-.222-.15a1.072 1.072 0 0 1-.175-.187.94.94 0 0 1-.165-.757c.11-.496.537-.692.713-.748.035-.012.07-.02.103-.028.035-.014.093-.037.168-.073.168-.08.383-.198.59-.34a2.35 2.35 0 0 0 .488-.43c.11-.135.107-.194.107-.186V6c0-1.686 1.598-3 3.273-3H8.19v2H5.464c-.535 0-1.091.477-1.091 1v4c0 .56-.255 1.028-.53 1.37a4.094 4.094 0 0 1-.697.67c.21.156.424.337.61.542.298.329.617.813.617 1.418v4c0 .523.556 1 1.09 1h2.728v2H5.464c-1.675 0-3.273-1.314-3.273-3Zm-1.09-5a1.133 1.133 0 0 0-.001 0Zm8.726 2c0 .552-.488 1-1.09 1-.603 0-1.092-.448-1.092-1s.489-1 1.091-1c.603 0 1.091.448 1.091 1Zm3.273 0c0 .552-.489 1-1.091 1-.603 0-1.091-.448-1.091-1s.488-1 1.09-1c.603 0 1.092.448 1.092 1Zm3.272 0c0 .552-.488 1-1.09 1-.603 0-1.091-.448-1.091-1s.488-1 1.09-1c.603 0 1.091.448 1.091 1Z"
        }
      )
    );
  }
);
IconBracketsCurlyCirclesThree[iconSymbol] = true;
var IconBriefcase = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m20 12.54-7.594 3.374h-.812L4 12.54V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4.46ZM13.5 10v2h-3v-2h3ZM20 9a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v1.35l8 3.555 8-3.555V9Zm-5-4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h6V5Zm2 1h2a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h2V5a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1Z"
        }
      )
    );
  }
);
IconBriefcase[iconSymbol] = true;
var IconBrowser = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M21 6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6Zm2 12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v12ZM7 7v2H5V7h2Zm3 0v2H8V7h2Zm3 0v2h-2V7h2Z"
        }
      )
    );
  }
);
IconBrowser[iconSymbol] = true;
var IconBrush = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M21 3v11a3 3 0 0 1-3 3h-2.5v2a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3v-2H6a3 3 0 0 1-3-3V3l1-1h16l1 1ZM5 14a1 1 0 0 0 1 1h4.5v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-4H18a1 1 0 0 0 1-1v-1H5v1Zm0-3h14V4h-3v5h-2V4h-4v5H8V4H5v7Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconBrush[iconSymbol] = true;
var IconCalendarBlank = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M9 2v2h6V2h2v2h4l1 1v16l-1 1H3l-1-1V5l1-1h4V2h2ZM4 20h16v-8H4v8Zm0-10h16V6h-3v2h-2V6H9v2H7V6H4v4Z"
        }
      )
    );
  }
);
IconCalendarBlank[iconSymbol] = true;
var IconCalendarEnd = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M9 4h6V2h2v2h4l1 1v16l-1 1h-8v-7h2v5h5v-8H3l-1-1V5l1-1h4V2h2v2Zm-5 6h16V6h-3v2h-2V6H9v2H7V6H4v4Zm6.707 6.293v1.414l-3 3-1.414-1.414L7.586 18H2v-2h5.586l-1.293-1.293 1.414-1.414 3 3Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconCalendarEnd[iconSymbol] = true;
var IconCalendarStart = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M7 4V2h2v2h6V2h2v2h4l1 1v6l-1 1H4v8h5v-5h2v7H3l-1-1V5l1-1h4Zm0 2H4v4h16V6h-3v2h-2V6H9v2H7V6Zm11.585 12H13v-2h5.586l-1.293-1.293 1.414-1.414 3 3v1.414l-3 3-1.414-1.414L18.586 18Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconCalendarStart[iconSymbol] = true;
var IconCamera = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20 8h-3.5a1 1 0 0 1-.895-.553L14.382 5H9.618L8.395 7.447A1 1 0 0 1 7.5 8H4v11h16V8Zm2 12-1 1H3l-1-1V7l1-1h3.882l1.223-2.447L9 3h6l.895.553L17.117 6H21l1 1v13Zm-7.5-7a2.5 2.5 0 1 0-2.5 2.5v2a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9v-2a2.5 2.5 0 0 0 2.5-2.5Z"
        }
      )
    );
  }
);
IconCamera[iconSymbol] = true;
var IconCaptionAlong = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M9.4 14.222 8.174 13.7 6.92 15.195l.726 1.117-.786.937-2.904-4.903.893-1.064 5.337 2.003-.786.937Zm-2.13-.926a369.604 369.604 0 0 1-1.89-.796 5.555 5.555 0 0 1-.337-.156c.187.263.631.936 1.33 2.02l.898-1.069Zm-.752-3.969 1.07-1.276c.489-.582.926-.935 1.312-1.059.386-.123.76-.034 1.12.269.245.205.398.432.459.679a.9.9 0 0 1-.102.696l.028.023c.277-.21.542-.307.798-.289.255.018.515.138.779.36.374.313.552.693.535 1.14-.018.445-.22.9-.61 1.364l-1.288 1.535-4.101-3.442Zm2.354.493.424-.505c.197-.235.304-.436.32-.603.016-.167-.06-.321-.23-.463-.156-.131-.317-.168-.482-.11-.165.057-.351.21-.56.46l-.384.456.912.765Zm.69.58 1.069.896.475-.566c.201-.24.304-.455.308-.646.004-.19-.088-.366-.277-.524-.34-.286-.715-.185-1.123.3l-.452.54Zm2.322-6.117c-.275.327-.365.684-.27 1.07.096.385.363.763.803 1.132.914.767 1.66.807 2.236.121.241-.288.462-.697.662-1.228l.729.612c-.142.455-.388.89-.736 1.305-.5.596-1.065.9-1.692.913-.627.013-1.279-.265-1.956-.833-.426-.358-.735-.75-.925-1.173a2.197 2.197 0 0 1-.176-1.289c.072-.434.273-.847.6-1.238a3.603 3.603 0 0 1 1.297-.958l.472.874a6.063 6.063 0 0 0-.58.303c-.184.11-.339.24-.464.389ZM2.25 20.397a.45.45 0 0 1 0-.9h.748a.45.45 0 0 1 .003.9H2.25Zm2.272-.032a.45.45 0 1 1-.045-.9c.265-.012.502-.03.72-.055a.45.45 0 1 1 .1.894 12.26 12.26 0 0 1-.775.06Zm2.354-.432a.45.45 0 1 1-.33-.837 4.05 4.05 0 0 0 .605-.3.45.45 0 1 1 .464.771 4.88 4.88 0 0 1-.739.366Zm2.025-1.381a.45.45 0 0 1-.625-.648 13.5 13.5 0 0 0 .507-.519.45.45 0 0 1 .66.612 14.08 14.08 0 0 1-.542.555Zm1.523-1.683a.45.45 0 0 1-.693-.574c.148-.178.304-.37.47-.577a.45.45 0 1 1 .701.565c-.169.21-.328.405-.478.586Zm1.418-1.772a.45.45 0 1 1-.708-.555l.46-.59a.45.45 0 1 1 .71.552l-.462.593Zm1.386-1.782a.45.45 0 0 1-.712-.551l.46-.593a.45.45 0 0 1 .711.552l-.46.592Zm1.38-1.772a.45.45 0 1 1-.707-.557l.467-.59a.45.45 0 1 1 .704.561l-.463.585Zm1.406-1.738a.45.45 0 1 1-.687-.581c.176-.208.342-.4.5-.576a.45.45 0 1 1 .67.6c-.152.17-.312.355-.483.557Zm1.502-1.587a.45.45 0 0 1-.595-.675c.212-.187.42-.352.626-.497a.45.45 0 0 1 .517.736c-.178.125-.36.27-.548.436Zm1.792-1.042a.45.45 0 0 1-.254-.864c.248-.073.508-.13.79-.174a.45.45 0 1 1 .14.89 5.272 5.272 0 0 0-.676.148Zm2.097-.263a.45.45 0 1 1-.027-.9c.227-.006.473-.01.76-.013a.45.45 0 0 1 .007.9 36 36 0 0 0-.74.013Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconCaptionAlong[iconSymbol] = true;
var IconCaptionHorizontal = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M2.25 20.397a.45.45 0 0 1 0-.9h.748a.45.45 0 0 1 .003.9H2.25Zm2.272-.032a.45.45 0 0 1-.045-.9c.265-.012.502-.03.72-.055a.45.45 0 1 1 .1.894c-.236.027-.492.047-.775.06Zm2.354-.432a.45.45 0 1 1-.33-.837 4.05 4.05 0 0 0 .605-.3.45.45 0 0 1 .464.771 4.88 4.88 0 0 1-.739.366Zm2.025-1.381a.45.45 0 0 1-.625-.648 13.5 13.5 0 0 0 .507-.519.45.45 0 0 1 .66.612 14.08 14.08 0 0 1-.542.555Zm7.113-8.747a.45.45 0 1 1-.687-.581c.176-.208.342-.4.5-.576a.45.45 0 1 1 .67.6c-.152.17-.312.355-.483.557Zm1.502-1.587a.45.45 0 0 1-.595-.675c.212-.187.42-.352.626-.497a.45.45 0 0 1 .517.736c-.178.125-.36.27-.548.436Zm1.792-1.042a.45.45 0 0 1-.254-.864c.248-.073.508-.13.79-.174a.45.45 0 1 1 .14.89 5.274 5.274 0 0 0-.676.148Zm2.097-.263a.45.45 0 1 1-.027-.9c.227-.006.473-.01.76-.013a.45.45 0 0 1 .007.9 36 36 0 0 0-.74.013Zm-12.2 8.943-.388-1.274H6.865l-.388 1.274H5.253l1.89-5.376h1.388l1.897 5.376H9.205Zm-.66-2.227c-.358-1.154-.56-1.807-.605-1.959a5.532 5.532 0 0 1-.097-.359 74.279 74.279 0 0 1-.693 2.318h1.396Zm2.557-3.127h1.666c.76 0 1.31.108 1.653.324.344.216.515.56.515 1.03 0 .32-.075.583-.225.788a.9.9 0 0 1-.599.37v.037c.34.075.584.217.734.425.15.207.226.483.226.827 0 .488-.177.87-.53 1.143-.352.273-.832.41-1.437.41h-2.003v-5.354Zm1.135 2.12h.66c.307 0 .53-.047.668-.143.138-.095.207-.252.207-.472 0-.205-.076-.352-.226-.441-.15-.09-.387-.134-.712-.134h-.597v1.19Zm0 .901v1.396h.74c.312 0 .543-.06.692-.18.149-.12.223-.303.223-.55 0-.444-.317-.666-.952-.666h-.703Zm6.178-2.153c-.427 0-.758.16-.992.481-.235.321-.352.769-.352 1.343 0 1.193.448 1.79 1.344 1.79.376 0 .831-.094 1.366-.282v.953c-.44.183-.93.274-1.472.274-.779 0-1.375-.236-1.787-.708-.413-.473-.62-1.15-.62-2.035 0-.556.102-1.044.305-1.463.202-.418.494-.74.873-.963.38-.223.825-.335 1.335-.335.52 0 1.043.126 1.567.377l-.366.923a6.068 6.068 0 0 0-.604-.249 1.803 1.803 0 0 0-.597-.106Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconCaptionHorizontal[iconSymbol] = true;
var IconCar = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M10 16H6v-2h4v2Zm8 0h-4v-2h4v2ZM16.83 4.006a2 2 0 0 1 1.69 1.206L19.285 7H22v2h-1.737L22 12.648V18l-2 2v2h-4v-2H8v2H4v-2l-2-2v-5.352L3.737 9H2V7h2.714l.766-1.788A2 2 0 0 1 7.318 4h9.364l.148.006ZM4 13.1V18h16v-4.9L19 11H5l-1 2.1ZM6.033 9h11.934l-1.285-3H7.318L6.033 9Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconCar[iconSymbol] = true;
var IconCardCircles = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M13 15h3v3h-3v-3Zm-2-9H8v3h3V6ZM4 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5Zm3-1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H7Z"
        }
      )
    );
  }
);
IconCardCircles[iconSymbol] = true;
var IconCardNumberThree = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M18 5a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5Zm2 14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v14Zm-9-5a1 1 0 1 0 1.002-1H11v-2h1.002l.101-.005A1 1 0 1 0 11 10H9a3 3 0 0 1 6.002 0c0 .77-.293 1.469-.77 2 .477.531.77 1.23.77 2A3.001 3.001 0 0 1 9 14h2Zm4 3h2v2h-2v-2ZM7 5h2v2H7V5Z"
        }
      )
    );
  }
);
IconCardNumberThree[iconSymbol] = true;
var IconCard = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m21 4 1 1v14l-1 1H3l-1-1V5l1-1h18ZM4 18h16V6H4v12Zm14-5v2H6v-2h12Zm-2-4h2v2h-2V9Z"
        }
      )
    );
  }
);
IconCard[iconSymbol] = true;
var IconCardsPoker = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M13.889 8.556A.556.556 0 0 0 13.333 8H5.556A.556.556 0 0 0 5 8.556v10.888c0 .307.249.556.556.556h7.777a.556.556 0 0 0 .556-.556V8.556Zm2 10.888A2.556 2.556 0 0 1 13.333 22H5.556A2.556 2.556 0 0 1 3 19.444V8.556A2.556 2.556 0 0 1 5.556 6h7.777a2.556 2.556 0 0 1 2.556 2.556v10.888Zm3-4V4.556A.556.556 0 0 0 18.333 4h-7.777a.556.556 0 0 0-.556.556V5H8v-.444A2.556 2.556 0 0 1 10.556 2h7.777a2.556 2.556 0 0 1 2.556 2.556v10.888A2.556 2.556 0 0 1 18.333 18H17v-2h1.333a.556.556 0 0 0 .556-.556ZM6 9h2v2H6V9Zm5 8h2v2h-2v-2Zm0-3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        }
      )
    );
  }
);
IconCardsPoker[iconSymbol] = true;
var IconChartBarXSimple = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M5 4v2h14V4H5Zm16 2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2ZM5 18v2h5v-2H5Zm7 2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v2Zm-7-9v2h9v-2H5Zm11 2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v2Z"
        }
      )
    );
  }
);
IconChartBarXSimple[iconSymbol] = true;
var IconChartBarYSimple = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20 5v14h-2V5h2Zm-4 14a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v14Zm-3-9v9h-2v-9h2Zm-4 9a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v9Zm-3-5v5H4v-5h2Zm-4 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v5Z"
        }
      )
    );
  }
);
IconChartBarYSimple[iconSymbol] = true;
var IconChartBarY = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20 5v12h-2V5h2Zm-4 12a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v12Zm-3-8v8h-2V9h2Zm-4 8a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v8Zm-3-4v4H4v-4h2Zm-4 4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v4Zm20 3v2H2v-2h20Z"
        }
      )
    );
  }
);
IconChartBarY[iconSymbol] = true;
var IconChartLine = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M22 22H3l-1-1V4h2v16h18v2ZM11.625 9.219l4.122 3.299 4.405-7.048 1.696 1.06-5 8-1.473.251-4.148-3.319-3.395 5.092-1.664-1.109 4-6 1.457-.226Z"
        }
      )
    );
  }
);
IconChartLine[iconSymbol] = true;
var IconChartNumber = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M5 9H3V7h2a2 2 0 0 1 2 2v8H5V9Zm5 0v6h2V9h-2Zm4 6a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6Zm3-6v6h2V9h-2Zm4 6a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6Z"
        }
      )
    );
  }
);
IconChartNumber[iconSymbol] = true;
var IconChartProgress = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M12.016 2A10 10 0 0 1 17 20.66l-1-1.732a8 8 0 1 0-8.022-.012l-1.004 1.729A10 10 0 0 1 12.016 2Zm2.57 5.586L16 9l-7 7-1.414-1.414 7-7ZM11 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        }
      )
    );
  }
);
IconChartProgress[iconSymbol] = true;
var IconChatCheck = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20 12a8 8 0 1 0-14.953 3.959l.137.23.103.822-.764 2.457 2.431-.77.83.103.282.167A7.965 7.965 0 0 0 12 20a8 8 0 0 0 8-8Zm2 0c0 5.523-4.477 10-10 10a9.971 9.971 0 0 1-4.864-1.263l-3.833 1.216-1.258-1.25 1.201-3.867A9.958 9.958 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10Zm-5.186-2.919-5 7-1.573.07-3-3.5L8.76 11.35l2.169 2.53 4.258-5.961 1.628 1.162Z"
        }
      )
    );
  }
);
IconChatCheck[iconSymbol] = true;
var IconChatContent = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20 12a8 8 0 1 0-14.953 3.959l.137.23.103.822-.764 2.457 2.431-.77.83.103.282.167A7.965 7.965 0 0 0 12 20a8 8 0 0 0 8-8Zm2 0c0 5.523-4.477 10-10 10a9.971 9.971 0 0 1-4.864-1.263l-3.833 1.216-1.258-1.25 1.201-3.867A9.958 9.958 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10Zm-5 1v2H7v-2h10Zm0-4v2H7V9h10Z"
        }
      )
    );
  }
);
IconChatContent[iconSymbol] = true;
var IconChatCross = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M21.707 2.707 19.414 5l2.293 2.293-1.414 1.414L18 6.414l-2.293 2.293-1.414-1.414L16.586 5l-2.293-2.293 1.414-1.414L18 3.586l2.293-2.293 1.414 1.414ZM2 12c0-5.147 3.889-9.386 8.89-9.94l.22 1.99a8.002 8.002 0 0 0-5.926 12.14l.103.821-.764 2.456 2.431-.77.83.104a7.966 7.966 0 0 0 4.216 1.2 8.002 8.002 0 0 0 7.951-7.111l1.988.22C21.387 18.11 17.148 22 12 22a9.973 9.973 0 0 1-4.865-1.263l-3.832 1.216-1.258-1.25 1.201-3.868A9.958 9.958 0 0 1 2 12Z"
        }
      )
    );
  }
);
IconChatCross[iconSymbol] = true;
var IconChatDashesLinesTwo = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20 12a8 8 0 1 0-14.953 3.959l.137.23.103.822-.764 2.457 2.431-.77.83.103.282.167A7.965 7.965 0 0 0 12 20a8 8 0 0 0 8-8Zm2 0c0 5.523-4.477 10-10 10a9.971 9.971 0 0 1-4.864-1.263l-3.833 1.216-1.258-1.25 1.201-3.867A9.958 9.958 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10ZM9 13v2H7v-2h2Zm0-4v2H7V9h2Zm8 0v2h-6V9h6Zm0 4v2h-6v-2h6Z"
        }
      )
    );
  }
);
IconChatDashesLinesTwo[iconSymbol] = true;
var IconChatLinesCross = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M21.707 2.707 19.414 5l2.293 2.293-1.414 1.414L18 6.414l-2.293 2.293-1.414-1.414L16.586 5l-2.293-2.293 1.414-1.414L18 3.586l2.293-2.293 1.414 1.414ZM2 12c0-5.148 3.889-9.386 8.89-9.94l.22 1.99a8.002 8.002 0 0 0-5.926 12.14l.103.821-.764 2.456 2.431-.77.83.104a7.966 7.966 0 0 0 4.216 1.2 8.002 8.002 0 0 0 7.951-7.111l1.988.22C21.387 18.11 17.148 22 12 22a9.973 9.973 0 0 1-4.865-1.263l-3.832 1.216-1.258-1.25 1.201-3.868A9.958 9.958 0 0 1 2 12Zm15 1v2H7v-2h10Zm-4-4v2H7V9h6Z"
        }
      )
    );
  }
);
IconChatLinesCross[iconSymbol] = true;
var IconChatLinesDot = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M2 12C2 6.477 6.477 2 12 2c.375 0 .746.02 1.11.06l-.22 1.989a8 8 0 0 0-7.843 11.91l.137.23.103.822-.764 2.457 2.431-.77.83.103.282.167A7.965 7.965 0 0 0 12 20a8 8 0 0 0 7.169-11.555l1.791-.89A9.964 9.964 0 0 1 22 12c0 5.523-4.477 10-10 10a9.973 9.973 0 0 1-4.864-1.263l-3.833 1.216-1.258-1.25 1.201-3.867A9.958 9.958 0 0 1 2 12Zm15 1v2H7v-2h10Zm-4-4v2H7V9h6Zm8-5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        }
      )
    );
  }
);
IconChatLinesDot[iconSymbol] = true;
var IconChatLinesEyeOpen = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M2 12c0-4.56 3.052-8.406 7.223-9.61l.554 1.923A8.004 8.004 0 0 0 5.184 16.19l.103.821-.764 2.456 2.431-.77.83.104a7.966 7.966 0 0 0 4.216 1.2 8.002 8.002 0 0 0 7.951-7.111l1.988.22C21.387 18.11 17.148 22 12 22a9.973 9.973 0 0 1-4.865-1.263l-3.832 1.216-1.258-1.25 1.201-3.868A9.958 9.958 0 0 1 2 12Zm13.5-9c2.008 0 3.615 1.06 4.66 2.01a10.962 10.962 0 0 1 1.56 1.768l.09.132.024.038.008.013.003.004v.002l.002.533v.533l-.002.002-.003.004-.008.013-.024.038a9.628 9.628 0 0 1-.419.575 11 11 0 0 1-1.23 1.325C19.115 10.94 17.508 12 15.5 12c-2.008 0-3.615-1.06-4.66-2.01a10.962 10.962 0 0 1-1.56-1.768 6.83 6.83 0 0 1-.09-.132l-.024-.038-.008-.013-.003-.004v-.002L9.152 7.5v-.533l.002-.002.003-.004.008-.013.024-.038a9.614 9.614 0 0 1 .419-.575 11 11 0 0 1 1.23-1.325C11.886 4.06 13.493 3 15.5 3Zm0 2c-1.292 0-2.435.69-3.315 1.49-.396.36-.716.724-.946 1.01.23.286.55.65.946 1.01.88.8 2.023 1.49 3.315 1.49 1.292 0 2.435-.69 3.314-1.49.397-.36.716-.724.946-1.01a8.934 8.934 0 0 0-.946-1.01C17.934 5.69 16.793 5 15.5 5ZM17 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        }
      )
    );
  }
);
IconChatLinesEyeOpen[iconSymbol] = true;
var IconChatLinesTwoStack = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M14.5 3a6.468 6.468 0 0 0-3.466 1H8.019a8.5 8.5 0 1 1 12.148 11.835L20 15.65v-2.683A6.5 6.5 0 0 0 14.5 3ZM17 13.5a6.5 6.5 0 1 0-12.04 3.404l.104.822-.542 1.742 1.723-.546.83.103A6.479 6.479 0 0 0 10.5 20a6.5 6.5 0 0 0 6.5-6.5Zm2 0a8.5 8.5 0 0 1-12.571 7.46l-3.126.993-1.258-1.25.98-3.155A8.5 8.5 0 1 1 19 13.5Zm-6 .5v2H8v-2h5Zm0-3v2H8v-2h5Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconChatLinesTwoStack[iconSymbol] = true;
var IconChatLinesTwo = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20 12a8 8 0 1 0-14.953 3.959l.137.23.103.822-.764 2.457 2.431-.77.83.103.282.167A7.965 7.965 0 0 0 12 20a8 8 0 0 0 8-8Zm2 0c0 5.523-4.477 10-10 10a9.971 9.971 0 0 1-4.864-1.263l-3.833 1.216-1.258-1.25 1.201-3.867A9.958 9.958 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10ZM7 11h2v2H7v-2Zm4 0h2v2h-2v-2Zm4 0h2v2h-2v-2Z"
        }
      )
    );
  }
);
IconChatLinesTwo[iconSymbol] = true;
var IconChatPlus = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M2 12C2 6.477 6.477 2 12 2c1.167 0 2.29.2 3.333.57l-.666 1.885a8 8 0 0 0-9.62 11.504l.137.23.103.822-.764 2.457 2.431-.77.83.103.282.167A7.965 7.965 0 0 0 12 20a8.004 8.004 0 0 0 7.802-6.222l1.95.444C20.742 18.675 16.76 22 12 22a9.973 9.973 0 0 1-4.864-1.263l-3.833 1.216-1.258-1.25 1.201-3.867A9.958 9.958 0 0 1 2 12Zm18-8v3h3v2h-3v3h-2V9h-3V7h3V4h2Z"
        }
      )
    );
  }
);
IconChatPlus[iconSymbol] = true;
var IconChatTextArrow = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M11.11 4.049a8.002 8.002 0 0 0-5.926 12.14l.103.822-.764 2.456 2.431-.77.83.104A7.976 7.976 0 0 0 12 20a8.002 8.002 0 0 0 7.951-7.11l1.988.22C21.387 18.11 17.148 22 12 22a9.973 9.973 0 0 1-4.865-1.264l-3.832 1.217-1.258-1.25 1.201-3.868A9.96 9.96 0 0 1 2 12c0-5.148 3.889-9.386 8.89-9.94l.22 1.989Zm10.88-.907-1 7-1.98-.284.575-4.03-4.878 4.879-1.414-1.414 4.879-4.88-4.03.577-.284-1.98 7-1 1.132 1.132Z"
        }
      )
    );
  }
);
IconChatTextArrow[iconSymbol] = true;
var IconChatTwo = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m15 8 1 1v10l-1 1H5.303l-2.748 1.832L1 21V9.5A1.5 1.5 0 0 1 2.5 8H15ZM3 19.13l1.445-.962L5 18h9v-8H3v9.13ZM23 17l-1.707.707L18.586 15H18v-2h1l.707.293L21 14.586V5H8v1H6V4.5A1.5 1.5 0 0 1 7.5 3h14A1.5 1.5 0 0 1 23 4.5V17Z"
        }
      )
    );
  }
);
IconChatTwo[iconSymbol] = true;
var IconChat = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M4 5v12h5v2l2.667-2H20V5H4Zm18 12a2 2 0 0 1-2 2h-7.667L8.76 21.68A1.1 1.1 0 0 1 7 20.8V19H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12Z"
        }
      )
    );
  }
);
IconChat[iconSymbol] = true;
var IconCheckBoxLines = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20 6.5v2h-8v-2h8Zm0 9v2h-8v-2h8Zm-9.219-9.875-4 5-1.532.035-2-2.272 1.502-1.322 1.212 1.378 3.256-4.069 1.562 1.25ZM9 13l1 1v5l-1 1H4l-1-1v-5l1-1h5Zm-4 5h3v-3H5v3Z"
        }
      )
    );
  }
);
IconCheckBoxLines[iconSymbol] = true;
var IconCheckMark = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m19.77 6.637-9.5 11.5-1.544-.004-4.5-5.5 1.548-1.266 3.73 4.558L18.23 5.363l1.54 1.274Z"
        }
      )
    );
  }
);
IconCheckMark[iconSymbol] = true;
var IconCheckboardSquareCentered = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M1 2a1 1 0 0 1 1-1h1v2H1V2Zm2 1h2v2H3V3ZM1 5h2v2H1V5Zm2 2h2v2H3V7ZM1 9h2v2H1V9Zm2 2h2v2H3v-2Zm-2 2h2v2H1v-2Zm2 2h2v2H3v-2Zm-2 2h2v2H1v-2Zm0 4h2v2H2a1 1 0 0 1-1-1v-1Zm2-2h2v2H3v-2ZM5 1h2v2H5V1Zm2 2h2v2H7V3ZM5 5h2L5 7V5Zm0 12 2 2H5v-2Zm0 4h2v2H5v-2Zm2-2h2v2H7v-2ZM9 1h2v2H9V1Zm2 2h2v2h-2V3ZM9 21h2v2H9v-2Zm2-2h2v2h-2v-2Zm2-18h2v2h-2V1Zm2 2h2v2h-2V3Zm-2 18h2v2h-2v-2Zm2-2h2v2h-2v-2Zm2-18h2v2h-2V1Zm4 0h1a1 1 0 0 1 1 1v1h-2V1Zm-2 2h2v2h-2V3Zm-2 2h2v2l-2-2Zm4 0h2v2h-2V5Zm-2 2h2v2h-2V7Zm2 2h2v2h-2V9Zm-2 2h2v2h-2v-2Zm2 2h2v2h-2v-2Zm-2 2h2v2h-2v-2Zm0 2v2h-2l2-2Zm-2 4h2v2h-2v-2Zm4-4h2v2h-2v-2Zm0 4h2v1a1 1 0 0 1-1 1h-1v-2Zm-2-2h2v2h-2v-2ZM9 9v6h6V9H9Zm8 6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6Z"
        }
      )
    );
  }
);
IconCheckboardSquareCentered[iconSymbol] = true;
var IconChevronDownDouble = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M8.707 6.293 12 9.586l3.293-3.293 1.414 1.414-4 4h-1.414l-4-4 1.414-1.414Zm0 7L12 16.586l3.293-3.293 1.414 1.414-4 4h-1.414l-4-4 1.414-1.414Z"
        }
      )
    );
  }
);
IconChevronDownDouble[iconSymbol] = true;
var IconChevronDown = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M6.707 9.293 12 14.586l5.293-5.293 1.414 1.414-6 6h-1.414l-6-6 1.414-1.414Z"
        }
      )
    );
  }
);
IconChevronDown[iconSymbol] = true;
var IconChevronLeftDouble = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M10.707 8.707 7.414 12l3.293 3.293-1.414 1.414-4-4v-1.414l4-4 1.414 1.414Zm7 0L14.414 12l3.293 3.293-1.414 1.414-4-4v-1.414l4-4 1.414 1.414Z"
        }
      )
    );
  }
);
IconChevronLeftDouble[iconSymbol] = true;
var IconChevronLeft = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M15.707 6.707 10.414 12l5.293 5.293-1.414 1.414-6-6v-1.414l6-6 1.414 1.414Z"
        }
      )
    );
  }
);
IconChevronLeft[iconSymbol] = true;
var IconChevronRightDouble = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M13.293 15.293 16.586 12l-3.293-3.293 1.414-1.414 4 4v1.414l-4 4-1.414-1.414Zm-7 0L9.586 12 6.293 8.707l1.414-1.414 4 4v1.414l-4 4-1.414-1.414Z"
        }
      )
    );
  }
);
IconChevronRightDouble[iconSymbol] = true;
var IconChevronRightSmall = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M9.293 7.293a1 1 0 0 1 1.414 0L15.414 12l-4.707 4.707a1 1 0 0 1-1.414-1.414L12.586 12 9.293 8.707a1 1 0 0 1 0-1.414Z"
        }
      )
    );
  }
);
IconChevronRightSmall[iconSymbol] = true;
var IconChevronRight = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M8.293 17.293 13.586 12 8.293 6.707l1.414-1.414 6 6v1.414l-6 6-1.414-1.414Z"
        }
      )
    );
  }
);
IconChevronRight[iconSymbol] = true;
var IconChevronUpDouble = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M15.293 11.707 12 8.414l-3.293 3.293-1.414-1.414 4-4h1.414l4 4-1.414 1.414Zm0 7L12 15.414l-3.293 3.293-1.414-1.414 4-4h1.414l4 4-1.414 1.414Z"
        }
      )
    );
  }
);
IconChevronUpDouble[iconSymbol] = true;
var IconChevronUpDownLine = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20 11v2H4v-2h16Zm-4.707-2.293L12 5.414 8.707 8.707 7.293 7.293l4-4h1.414l4 4-1.414 1.414Zm-6.586 6.586L12 18.586l3.293-3.293 1.414 1.414-4 4h-1.414l-4-4 1.414-1.414Z"
        }
      )
    );
  }
);
IconChevronUpDownLine[iconSymbol] = true;
var IconChevronUpDown = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M15.293 8.707 12 5.414 8.707 8.707 7.293 7.293l4-4h1.414l4 4-1.414 1.414Zm-6.586 6.586L12 18.586l3.293-3.293 1.414 1.414-4 4h-1.414l-4-4 1.414-1.414Z"
        }
      )
    );
  }
);
IconChevronUpDown[iconSymbol] = true;
var IconChevronUp = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M17.293 15.707 12 10.414l-5.293 5.293-1.414-1.414 6-6h1.414l6 6-1.414 1.414Z"
        }
      )
    );
  }
);
IconChevronUp[iconSymbol] = true;
var IconCircleCorners = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M19 9V5h-4V3h5l1 1v5h-2ZM3 9V4l1-1h5v2H5v4H3Zm12 12v-2h4v-4h2v5l-1 1h-5ZM4 21l-1-1v-5h2v4h4v2H4Zm11-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        }
      )
    );
  }
);
IconCircleCorners[iconSymbol] = true;
var IconCircleDashedLoop = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M11.5 6.022A5.998 5.998 0 0 0 6.022 11.5H4.018A7.998 7.998 0 0 1 11.5 4.017v2.005Zm1-2.005a7.998 7.998 0 0 1 7.482 7.483h-2.005A5.998 5.998 0 0 0 12.5 6.022V4.017ZM6.022 12.5a5.999 5.999 0 0 0 11.956 0h2.004a7.98 7.98 0 0 1-2.694 5.5l-.022.019c-.068.06-.137.118-.207.175l-.054.044a7.84 7.84 0 0 1-.215.165l-.087.066a7.876 7.876 0 0 1-.5.336 7.406 7.406 0 0 1-.321.188l-.072.04a8.103 8.103 0 0 1-.558.276l-.108.046a8.17 8.17 0 0 1-.227.094l-.117.044c-.079.03-.157.058-.237.085-.027.01-.055.018-.083.027a8.151 8.151 0 0 1-.415.123 5.042 5.042 0 0 1-.176.046c-.063.016-.127.029-.19.042-.066.014-.13.029-.196.041-.037.008-.074.013-.111.02-.087.015-.174.03-.262.043-.033.005-.067.007-.1.012-.09.011-.18.022-.27.03-.066.007-.132.01-.198.015-.058.005-.115.01-.173.013-.13.006-.259.01-.389.01H3v-2h3.712a7.98 7.98 0 0 1-2.694-5.5h2.004ZM21 20h-4.878a9.03 9.03 0 0 0 2.585-2H21v2Z"
        }
      )
    );
  }
);
IconCircleDashedLoop[iconSymbol] = true;
var IconCircleDashed = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M13.562 19.848h.002l.386 1.96a10.04 10.04 0 0 1-3.901 0l.388-1.96h.002a8.041 8.041 0 0 0 3.121-.001h.002Zm-8.214-3.404a8.043 8.043 0 0 0 2.207 2.207l.002.002-.557.831-.557.83a10.053 10.053 0 0 1-2.757-2.758l1.66-1.113.002.001Zm14.966 1.112a10.052 10.052 0 0 1-2.758 2.758l-1.113-1.66.001-.003a8.042 8.042 0 0 0 2.207-2.207h.002l1.66 1.112Zm-16.162-7.12v.002a8.039 8.039 0 0 0 0 3.122v.004l-.982.193-.97.192-.009.001a10.046 10.046 0 0 1 0-3.901l1.961.388Zm17.656-.387a10.043 10.043 0 0 1 0 3.901H21.8l-1.952-.386v-.002l-.001-.002a8.039 8.039 0 0 0 0-3.122v-.002l1.96-.387ZM7.557 5.347h-.002a8.044 8.044 0 0 0-2.207 2.208l-.001.002-1.661-1.114a10.053 10.053 0 0 1 2.757-2.757l1.114 1.66Zm9.999-1.661c1.09.73 2.028 1.667 2.758 2.757l-1.66 1.114-.003-.002a8.043 8.043 0 0 0-2.207-2.207v-.001l1.112-1.661ZM12 2c.667 0 1.32.067 1.95.191l-.177.907-.21 1.054h-.002a8.039 8.039 0 0 0-3.123 0h-.002l-.387-1.96A10.047 10.047 0 0 1 12 2Z"
        }
      )
    );
  }
);
IconCircleDashed[iconSymbol] = true;
var IconCircleFullCheck = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm-1.368 11.533-1.917-1.96-1.43 1.399 2.666 2.727 1.463-.035 5.333-6-1.494-1.328-4.621 5.197Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconCircleFullCheck[iconSymbol] = true;
var IconCircleHalfFill = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M12 2a9.928 9.928 0 0 1 5.186 1.447 10.02 10.02 0 0 1 4.699 7.03 10.083 10.083 0 0 1-.2 4.022 10.019 10.019 0 0 1-5.35 6.515A9.93 9.93 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2Zm0 2a8 8 0 1 0 0 16V4Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconCircleHalfFill[iconSymbol] = true;
var IconCircleMotionX = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20 12a5 5 0 1 0-10 0 5 5 0 0 0 10 0Zm2 0a7 7 0 0 1-7.5 6.98V19H6v-2h4.102a6.98 6.98 0 0 1-2.03-4H2v-2h6.072a6.98 6.98 0 0 1 2.03-4H6V5h9a7 7 0 0 1 7 7ZM4 5v2H2V5h2Zm0 12v2H2v-2h2Z"
        }
      )
    );
  }
);
IconCircleMotionX[iconSymbol] = true;
var IconCircleNotch = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12h2a8 8 0 1 1 8 8v2c5.523 0 10-4.477 10-10Z"
        }
      )
    );
  }
);
IconCircleNotch[iconSymbol] = true;
var IconCircleSlash = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m22.707 2.707-20 20-1.414-1.414 20-20 1.414 1.414ZM20.96 7.555A9.964 9.964 0 0 1 22 12c0 5.523-4.477 10-10 10a9.964 9.964 0 0 1-4.445-1.04l-.402-.2 1.495-1.493A7.966 7.966 0 0 0 12 20a8 8 0 0 0 8-8 7.966 7.966 0 0 0-.733-3.352l1.494-1.495.199.402ZM12 2c1.65 0 3.211.4 4.586 1.111l.256.133-1.49 1.49A7.967 7.967 0 0 0 12 4a8 8 0 0 0-8 8c0 1.198.263 2.333.733 3.352l-1.489 1.49-.133-.256A9.961 9.961 0 0 1 2 12C2 6.477 6.477 2 12 2Z"
        }
      )
    );
  }
);
IconCircleSlash[iconSymbol] = true;
var IconCircleTarget = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M13 1v2.057a8.982 8.982 0 0 1 7.37 5.63l.147.399c.212.621.353 1.263.425 1.914H23v2h-2.058a8.98 8.98 0 0 1-5.63 7.371h-.002a8.98 8.98 0 0 1-2.31.571V23h-2v-2.058a8.98 8.98 0 0 1-7.371-5.63v-.002A8.98 8.98 0 0 1 3.058 13H1v-2h2.058a8.96 8.96 0 0 1 2.577-5.365A8.96 8.96 0 0 1 11 3.057V1h2Zm0 6h-2V5.07a6.989 6.989 0 0 0-1.578.42l-.002.001A6.96 6.96 0 0 0 7.049 7.05a6.96 6.96 0 0 0-1.558 2.37v.003A6.987 6.987 0 0 0 5.07 11H7v2H5.071c.062.43.164.855.305 1.268l.114.31.001.002a6.961 6.961 0 0 0 1.558 2.371 6.961 6.961 0 0 0 2.37 1.558h.003a6.99 6.99 0 0 0 1.578.42V17h2v1.929a6.99 6.99 0 0 0 1.578-.42h.002a6.962 6.962 0 0 0 2.371-1.558 6.962 6.962 0 0 0 1.558-2.37v-.003A6.99 6.99 0 0 0 18.93 13H17v-2h1.929a6.99 6.99 0 0 0-.42-1.578V9.42a6.961 6.961 0 0 0-1.558-2.371 6.961 6.961 0 0 0-2.37-1.558h-.003A6.988 6.988 0 0 0 13 5.07V7Z"
        }
      )
    );
  }
);
IconCircleTarget[iconSymbol] = true;
var IconCircle = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20 12a8 8 0 1 0-16 0 8 8 0 0 0 16 0Zm2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
        }
      )
    );
  }
);
IconCircle[iconSymbol] = true;
var IconCirclesConnected = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M6 19a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm9-7a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm4-6.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM6 5a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0c0 .463-.109.899-.296 1.29l1.538 1.538A4.977 4.977 0 0 1 12 7a4.98 4.98 0 0 1 2.757.828l1.417-1.417a2.5 2.5 0 1 1 1.414 1.414L16.17 9.242a5 5 0 0 1-6.929 6.929l-1.535 1.536-.003.002c.187.392.296.828.296 1.291a3 3 0 1 1-3-3c.462 0 .899.108 1.29.295l.003-.002 1.535-1.536A4.976 4.976 0 0 1 7 12c0-1.02.305-1.967.828-2.758L6.29 7.704A2.982 2.982 0 0 1 5 8a3 3 0 1 1 3-3Zm11 13.5a.5.5 0 1 0-.5.5v2a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5v-2a.5.5 0 0 0 .5-.5Z"
        }
      )
    );
  }
);
IconCirclesConnected[iconSymbol] = true;
var IconClickup = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m3 17.366 3.322-2.356c1.764 2.132 3.64 3.115 5.726 3.115 2.076 0 3.898-.971 5.583-3.087l3.369 2.3C18.569 20.387 15.547 22 12.048 22 8.561 22 5.51 20.398 3 17.366Zm9.037-10.24-5.912 4.716-2.733-2.934L12.05 2l8.589 6.913-2.746 2.924-5.856-4.712Z"
        }
      )
    );
  }
);
IconClickup[iconSymbol] = true;
var IconClockCounterClockwiseSimple = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M13 3a9 9 0 1 1 0 18v-2a7 7 0 1 0-7-7v.586l1.293-1.293 1.414 1.414-3 3H4.293l-3-3 1.414-1.414L4 12.586V12a9 9 0 0 1 9-9Zm0 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"
        }
      )
    );
  }
);
IconClockCounterClockwiseSimple[iconSymbol] = true;
var IconClockCounterClockwise = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M13 3a9 9 0 1 1 0 18v-2a7 7 0 1 0-7-7v.586l1.293-1.293 1.414 1.414-3 3H4.293l-3-3 1.414-1.414L4 12.586V12a9 9 0 0 1 9-9Zm3.707 6.707-1.777 1.776a2 2 0 1 1-1.414-1.414l1.777-1.776 1.414 1.414Z"
        }
      )
    );
  }
);
IconClockCounterClockwise[iconSymbol] = true;
var IconClockOvertime = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20 12a8 8 0 1 0-16 0 8 8 0 0 0 16 0Zm2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-10 0c.88.44 2.921 1.267 4.137 1.8.25.11.362.401.229.639a5 5 0 1 1-4.865-7.414c.274-.028.499.2.499.476V12Z"
        }
      )
    );
  }
);
IconClockOvertime[iconSymbol] = true;
var IconClock = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M19.997 12a8 8 0 1 0-16 0 8 8 0 0 0 16 0Zm-7-5v4.584l3.418 3.415L15 16.414l-4.004-3.999V7h2Zm9 5c0 5.523-4.478 10-10 10-5.523 0-10-4.477-10-10s4.477-10 10-10c5.522 0 10 4.477 10 10Z"
        }
      )
    );
  }
);
IconClock[iconSymbol] = true;
var IconCloud = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M9.23 2.933a3.14 3.14 0 0 1 2.684-.9c1.293.184 2.361 1.092 2.874 2.491.984-.684 2.17-.813 3.203-.353a2.975 2.975 0 0 1 1.714 2.15c.124.605.078 1.256-.134 1.931.913.217 1.67.638 2.252 1.22.864.864 1.262 2.003 1.262 3.113 0 1.8-1.07 3.659-3.038 4.281.215.696.24 1.367.06 1.989-.292 1.012-1.068 1.68-1.942 1.986-1.144.4-2.552.221-3.651-.61-.522.92-1.36 1.612-2.337 1.83-.875.194-1.802-.015-2.562-.706-.423-.384-.77-.895-1.042-1.524a4.065 4.065 0 0 1-1.792.595 3.68 3.68 0 0 1-2.82-.988 3.662 3.662 0 0 1-1.15-2.789 4.262 4.262 0 0 1 .528-1.899 3.753 3.753 0 0 1-1.476-1.098 3.923 3.923 0 0 1-.833-2.941c.126-1.007.664-2.008 1.673-2.565a3.43 3.43 0 0 1 1.434-.41c-.208-1.01.026-2.052.579-2.805.51-.697 1.334-1.197 2.345-1.133.46.029.91.172 1.347.416.194-.5.47-.93.821-1.281Zm-2.521 5.37a1 1 0 0 1-.996 1.71l.372-.928.624-.781Zm1.616-1.568c-.649-.756-1.138-.925-1.39-.941-.222-.014-.43.078-.607.32-.397.54-.417 1.551.381 2.19l-.625.78-.371.929c-1.062-.425-1.702-.305-2.044-.116-.35.194-.593.57-.654 1.062a1.924 1.924 0 0 0 .4 1.433c.306.377.827.693 1.67.693a1 1 0 0 1 .707 1.707c-.73.73-.967 1.403-.981 1.915a1.66 1.66 0 0 0 .522 1.274c.332.313.791.49 1.29.45.489-.038 1.099-.293 1.702-.997l.1-.101a1 1 0 0 1 1.64.556c.226 1.129.594 1.713.896 1.987.271.247.532.288.782.232.6-.133 1.342-.918 1.342-2.023a1 1 0 0 1 1.88-.474l.039.08.106.221c.571 1.053 1.66 1.298 2.394 1.041.376-.131.6-.37.682-.654.074-.255.079-.706-.275-1.381l-.175-.304-.063-.119a1 1 0 0 1 .912-1.41c1.606 0 2.5-1.206 2.5-2.5 0-.64-.228-1.25-.676-1.7-.44-.439-1.17-.8-2.324-.8a1.001 1.001 0 0 1-.849-1.53c.53-.847.585-1.461.51-1.832a.975.975 0 0 0-.567-.725c-.5-.222-1.57-.13-2.157 1.438a1 1 0 0 1-1.932-.45c.213-2.13-.825-2.884-1.46-2.974a1.14 1.14 0 0 0-.987.335c-.28.28-.558.816-.558 1.738a1 1 0 0 1-1.76.65Z"
        }
      )
    );
  }
);
IconCloud[iconSymbol] = true;
var IconClusterAi = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M10 18v4l-1 1H5l-1-1v-4l1-1h4l1 1Zm-4 3h2v-2H6v2Zm9.715-8.498c.204-1.415 2.248-1.418 2.453 0a3.794 3.794 0 0 0 3.213 3.213c1.412.204 1.42 2.248 0 2.453a3.793 3.793 0 0 0-3.213 3.213c-.205 1.42-2.249 1.412-2.453 0a3.794 3.794 0 0 0-3.213-3.213c-1.418-.205-1.415-2.249 0-2.453a3.794 3.794 0 0 0 3.213-3.213ZM17 3v6.5h-2V4H4v10h6v2H3l-1-1V3l1-1h13l1 1Zm-8 9H6v-2h3v2Zm3-4H6V6h6v2Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconClusterAi[iconSymbol] = true;
var IconClusterColor = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M10 18v4l-1 1H5l-1-1v-4l1-1h4l1 1Zm-4 3h2v-2H6v2Zm15.75-9v5.223a2.75 2.75 0 0 1-2.75 2.75h-.344v.62a2.156 2.156 0 1 1-4.312 0v-.62H14a2.75 2.75 0 0 1-2.75-2.75V12l.75-.75h9l.75.75Zm-8.882 5.75c.2.426.63.723 1.132.723h1.844v2.12a.656.656 0 0 0 1.312 0v-2.12H19a1.25 1.25 0 0 0 1.132-.723h-7.264Zm-.118-1.5h7.5v-3.5h-1.5V15h-1.5v-2.25h-1.5V15h-1.5v-2.25h-1.5v3.5ZM17 3v6.5h-2V4H4v10h6v2H3l-1-1V3l1-1h13l1 1Zm-8 9H6v-2h3v2Zm3-4H6V6h6v2Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconClusterColor[iconSymbol] = true;
var IconClusterSentiment = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m9 17 1 1v4l-1 1H5l-1-1v-4l1-1h4Zm-3 4h2v-2H6v2ZM16 2l1 1v6.5h-2V4H4v10h6v2H3l-1-1V3l1-1h13Zm-7 8v2H6v-2h3Zm3-4v2H6V6h6Zm6 9h1v1h-1v-1Zm1 0v1h-1v-1h1Zm2 2a4 4 0 1 0-8 0 4 4 0 0 0 8 0Zm2 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0Zm-8-2h1v1h-1v-1Zm1 0v1h-1v-1h1Zm3.741 2.113C19.528 18.506 18.47 19.75 17 19.75c-1.47 0-2.528-1.244-2.741-2.637l1.482-.226c.135.883.735 1.363 1.259 1.363.524 0 1.124-.48 1.259-1.363l1.482.226Z"
        }
      )
    );
  }
);
IconClusterSentiment[iconSymbol] = true;
var IconCluster = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m9 17 1 1v4l-1 1H5l-1-1v-4l1-1h4Zm-3 4h2v-2H6v2Zm15-10 1 1v8l-1 1h-8l-1-1v-2h2v1h6v-6h-1v-2h2Zm-5-9 1 1v12l-1 1H3l-1-1V3l1-1h13ZM4 14h11V4H4v10Zm5-4v2H6v-2h3Zm3-4v2H6V6h6Z"
        }
      )
    );
  }
);
IconCluster[iconSymbol] = true;
var IconClustered = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M5.333 4C4.72 4 4 4.72 4 5.333V8H2V5.333A3.333 3.333 0 0 1 5.333 2H8v2H5.333ZM14 4h-4V2h4v2Zm4.667 0H16V2h2.667A3.333 3.333 0 0 1 22 5.333V8h-2V5.333C20 4.72 19.28 4 18.667 4ZM4 10v4H2v-4h2Zm16 4v-4h2v4h-2ZM4 16v2.667C4 19.28 4.886 20 5.5 20H8v2H5.333A3.333 3.333 0 0 1 2 18.667V16h2Zm16 2.667V16h2v2.667A3.333 3.333 0 0 1 18.667 22H16v-2h2.667C19.28 20 20 19.28 20 18.667ZM10 20h4v2h-4v-2ZM7 7h4v4H7V7Zm6 0h4v4h-4V7Zm-6 6h4v4H7v-4Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconClustered[iconSymbol] = true;
var IconCog = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm1.544-9a1 1 0 0 1 .95.684l.879 2.64.79.455 2.725-.557a1 1 0 0 1 .976.347l.09.132 1.5 2.598c.215.373.168.842-.117 1.164l-1.847 2.08v.912l1.847 2.082c.285.322.332.791.117 1.164l-1.5 2.598-.09.132a1 1 0 0 1-.976.347l-2.726-.558-.789.456-.88 2.64a1 1 0 0 1-.95.684h-3a1 1 0 0 1-.885-.537l-.062-.147-.88-2.64-.79-.455-2.726.557a1 1 0 0 1-1.066-.48l-1.5-2.597a1.001 1.001 0 0 1 .118-1.164l1.846-2.082v-.911L2.752 9.463a1.001 1.001 0 0 1-.118-1.164l1.5-2.598.09-.132a1 1 0 0 1 .976-.347l2.726.556.79-.456.88-2.638.062-.147A1 1 0 0 1 10.544 2h3Zm-3.05 4.316L9.542 6l.95.316-.12.36L8.269 7.89l-2.763-.567-.78 1.35 1.872 2.111v2.43l-1.872 2.11.78 1.35 2.763-.566 2.104 1.215.893 2.676h1.557l.893-2.676.328-.19 1.446-.835.33-.19 2.762.566.78-1.35-1.62-1.827-.252-.283v-2.43l.252-.283 1.62-1.828-.78-1.35-2.763.567-.329-.19-1.774-1.024L12.823 4h-1.557l-.773 2.316Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconCog[iconSymbol] = true;
var IconCoinsChecked = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M8 22c.701 0 1.374-.06 2-.17v-1.998A11.06 11.06 0 0 1 8 20c-1.214 0-3.007-.156-4-1v-1.764c1.062.475 2.463.764 4 .764.701 0 1.374-.06 2-.17v-1.998A11.06 11.06 0 0 1 8 16c-1.214 0-3.007-.156-4-1v-1.764c1.062.475 2.463.764 4 .764s2.938-.289 4-.764V15h2v-3.17c.626.11 1.299.17 2 .17 1.537 0 2.939-.289 4-.764V13h2V5c0-1.657-2.686-3-6-3s-6 1.343-6 3v3.17C9.374 8.06 8.701 8 8 8c-3.314 0-6 1.343-6 3v8c0 1.657 2.686 3 6 3ZM20 5c-.993-.844-2.786-1-4-1s-3.007.156-4 1c.993.844 2.786 1 4 1s3.007-.156 4-1Zm0 2.236C18.939 7.711 17.537 8 16 8s-2.938-.289-4-.764v1.528c.58.26 1.059.575 1.402.929.87.247 1.845.307 2.598.307 1.214 0 3.007-.156 4-1V7.236ZM12 11c-.993-.844-2.786-1-4-1s-3.007.156-4 1c.993.844 2.786 1 4 1s3.007-.156 4-1Zm9.322 4.57-4.5 6.5-1.529.137-3-3 1.414-1.414 2.152 2.152 3.819-5.514 1.644 1.138Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconCoinsChecked[iconSymbol] = true;
var IconCoinsSlash = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "m20.267 20.857-1.534 1.286L14 16.493V19c0 1.657-2.687 3-6 3s-6-1.343-6-3v-8c0-1.474 2.125-2.696 4.927-2.95L3.233 3.644l1.534-1.286 15.5 18.5ZM12 17.235C10.938 17.71 9.537 18 8 18s-2.938-.29-4-.765V19c.993.843 2.786 1 4 1s3.007-.157 4-1v-1.765ZM4 15c.993.844 2.786 1 4 1s3.007-.156 4-1v-.895l-.549-.655c-.976.344-2.166.55-3.451.55-1.537 0-2.938-.29-4-.765V15Zm4-5c-1.214 0-3.007.156-4 1 .993.844 2.786 1 4 1 .606 0 1.357-.041 2.08-.185l-1.509-1.802C8.371 10.004 8.18 10 8 10Zm8-8c3.314 0 6 1.343 6 3v12h-2v-1.764a8.59 8.59 0 0 1-2 .593v-1.997c.753-.142 1.484-.394 2-.832v-1.764c-1.061.475-2.463.764-4 .764-.34 0-.675-.014-1-.041V9.962c.355.028.696.038 1 .038 1.214 0 3.007-.156 4-1V7.236C18.939 7.711 17.537 8 16 8c-.156 0-.31-.005-.463-.01l-.076-.004c-.146-.006-.29-.014-.432-.026L15 7.959C12.162 7.721 10 6.486 10 5c0-1.657 2.686-3 6-3Zm0 2c-1.214 0-3.007.156-4 1 .993.844 2.786 1 4 1s3.007-.156 4-1c-.993-.844-2.786-1-4-1Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconCoinsSlash[iconSymbol] = true;
var IconCoins = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M13.79 19.79c.684.136 1.43.21 2.21.21 3.314 0 6-1.343 6-3V5c0-1.657-2.686-3-6-3s-6 1.343-6 3v3.17C9.374 8.06 8.701 8 8 8c-3.314 0-6 1.343-6 3v8c0 1.657 2.686 3 6 3 2.767 0 5.096-.936 5.79-2.21ZM20 5c-.993-.844-2.786-1-4-1s-3.007.156-4 1c.993.844 2.786 1 4 1s3.007-.156 4-1Zm0 2.236C18.939 7.711 17.537 8 16 8s-2.938-.289-4-.764v1.528c.58.26 1.059.575 1.402.929.87.247 1.845.307 2.598.307 1.214 0 3.007-.156 4-1V7.236Zm-6 4.593v2.003c.698.132 1.416.168 2 .168 1.214 0 3.007-.156 4-1v-1.764c-1.061.475-2.463.764-4 .764-.701 0-1.374-.06-2-.17Zm0 4v2.003c.698.132 1.416.168 2 .168 1.214 0 3.007-.156 4-1v-1.764c-1.061.475-2.463.764-4 .764-.701 0-1.374-.06-2-.17ZM12 11c-.993-.844-2.786-1-4-1s-3.007.156-4 1c.993.844 2.786 1 4 1s3.007-.156 4-1Zm-4 3c1.537 0 2.938-.289 4-.764V15c-.993.844-2.786 1-4 1s-3.007-.156-4-1v-1.764c1.062.475 2.463.764 4 .764Zm0 4c1.537 0 2.938-.289 4-.764V19c-.993.844-2.786 1-4 1s-3.007-.156-4-1v-1.764c1.062.475 2.463.764 4 .764Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconCoins[iconSymbol] = true;
var IconColumnsFormat = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M19.5 2A2.5 2.5 0 0 1 22 4.5v9a2.5 2.5 0 0 1-2.5 2.5H13v3a3 3 0 0 1-3 3H4.5A2.5 2.5 0 0 1 2 19.5v-15A2.5 2.5 0 0 1 4.5 2h15ZM5 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V4H5Zm8 0v10h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-6Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconColumnsFormat[iconSymbol] = true;
var IconColumnsThree = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14ZM5 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h1V4H5Zm13 16h1a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-1v16ZM8 20h8V4H8v16Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconColumnsThree[iconSymbol] = true;
var IconCommentGroup = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M13 10c0-.488-.16-.776-.328-.941a.982.982 0 0 0-.682-.277.927.927 0 0 0-.664.257c-.16.157-.326.445-.326.96H9c0-.982.334-1.807.924-2.387a2.928 2.928 0 0 1 2.086-.83c.742.007 1.496.29 2.068.855.583.576.922 1.392.922 2.363 0 1.006-.366 1.74-.964 2.268-.518.456-1.194.726-1.629.92-.506.225-.828.397-1.048.635-.046.05-.091.107-.134.177H15v2h-5l-1-1c0-1.092.32-1.916.89-2.534.53-.574 1.21-.886 1.703-1.106.565-.251.889-.389 1.12-.593.153-.134.287-.315.287-.767Zm6-5H5v14.898l2.062-1.674.63-.224H19V5Zm2 14-1 1H8.048L4.63 22.776 3 22V4.5A1.5 1.5 0 0 1 4.5 3H20l1 1v15Z"
        }
      )
    );
  }
);
IconCommentGroup[iconSymbol] = true;
var IconCompass = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M20 12a8 8 0 1 0-16 0 8 8 0 0 0 16 0Zm2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8.041 14.946l1.6-4.8a.8.8 0 0 1 .505-.505l4.8-1.6a.8.8 0 0 1 1.013 1.012l-1.6 4.8a.8.8 0 0 1-.505.505l-4.8 1.6a.801.801 0 0 1-.903-.29.8.8 0 0 1-.11-.722Zm5.896-4.881-2.905.968-.968 2.903 2.904-.968.969-2.903Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconCompass[iconSymbol] = true;
var IconConeSerpentine = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M14.997 2.498a1.498 1.498 0 1 1-2.997 0 1.498 1.498 0 0 1 2.997 0Zm8.213-.818-1.343 3.723-1.257.61-2.163-.722-.976 2.043-1.805-.863 1.358-2.839 1.218-.517 2.075.691 1.012-2.805 1.881.679ZM19 9h5v2h-5V9ZM9 6l.013-1-.941.629-6 15 1.3 1.3 15-6 .628-.941L18 15l1-.012v-.024l-.001-.017-.001-.025a6.456 6.456 0 0 0-.06-.592 9.13 9.13 0 0 0-.378-1.538c-.421-1.257-1.245-2.896-2.849-4.5-1.603-1.602-3.243-2.427-4.5-2.85a9.159 9.159 0 0 0-1.54-.378A6.4 6.4 0 0 0 9.037 5h-.024L9 6ZM4.795 19.205l9.977-3.991c-1.04-.487-2.239-1.266-3.48-2.507-1.24-1.24-2.02-2.44-2.506-3.48l-3.99 9.978Zm11.869-5.777c.047.142.089.278.124.405a6.517 6.517 0 0 1-.282-.082c-.948-.301-2.309-.968-3.8-2.458-1.49-1.49-2.156-2.851-2.457-3.8a6.522 6.522 0 0 1-.082-.28c.128.036.264.077.407.125 1.005.338 2.367 1.013 3.723 2.37 1.356 1.355 2.03 2.716 2.367 3.72Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconConeSerpentine[iconSymbol] = true;
var IconConnectionLineElbows = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M13.928 2.68a1 1 0 0 1 1.046-.061l6.5 3.5a1.001 1.001 0 0 1 0 1.762l-6.5 3.5a1 1 0 0 1-1.464-1.023L13.847 8H11a1 1 0 0 0-1 1v9a3 3 0 0 1-3 3H2v-2h5a1 1 0 0 0 1-1V9a3 3 0 0 1 3-3h2.847l-.337-2.36a1.001 1.001 0 0 1 .418-.961Z"
        }
      )
    );
  }
);
IconConnectionLineElbows[iconSymbol] = true;
var IconConnectionLineStraight = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M19.305 3.185a1.001 1.001 0 0 1 1.293 1.275l-2.657 7.378a1.001 1.001 0 0 1-1.775.214l-1.197-1.811L4.014 21.413l-1.428-1.399L13.47 8.913l-1.939-1.03a1 1 0 0 1 .117-1.82l7.657-2.878Z"
        }
      )
    );
  }
);
IconConnectionLineStraight[iconSymbol] = true;
var IconCornersInside = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M6 18H2v-2h5l1 1v5H6v-4Zm10-1 1-1h5v2h-4v4h-2v-5Zm0-10V2h2v4h4v2h-5l-1-1ZM2 6h4V2h2v5L7 8H2V6Z"
        }
      )
    );
  }
);
IconCornersInside[iconSymbol] = true;
var IconCornersThreeEyeOpen = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M3 9V4l1-1h4v2H5v4H3Zm12 12v-2h4v-4h2v5l-1 1h-5ZM4 21l-1-1v-5h2v4h4v2H4ZM15.5 3c2.008 0 3.615 1.06 4.66 2.01a10.962 10.962 0 0 1 1.56 1.768l.09.132.024.038.008.013.003.004v.002s.002 0-.845.533l.847.533-.002.002-.003.004-.008.013-.024.038a9.628 9.628 0 0 1-.419.575 11 11 0 0 1-1.23 1.325C19.115 10.94 17.508 12 15.5 12c-2.008 0-3.615-1.06-4.66-2.01a10.962 10.962 0 0 1-1.56-1.768 6.83 6.83 0 0 1-.09-.132l-.024-.038-.008-.013-.003-.004v-.002s-.002 0 .845-.533l-.847-.533.002-.002.003-.004.008-.013.024-.038a9.614 9.614 0 0 1 .419-.575 11 11 0 0 1 1.23-1.325C11.886 4.06 13.493 3 15.5 3Zm0 2c-1.292 0-2.435.69-3.315 1.49-.396.36-.716.724-.946 1.01.23.286.55.65.946 1.01.88.8 2.023 1.49 3.315 1.49 1.292 0 2.435-.69 3.314-1.49.397-.36.716-.724.946-1.01a8.934 8.934 0 0 0-.946-1.01C17.934 5.69 16.793 5 15.5 5ZM10 7.5l-.847.532V6.967L10 7.5Zm11.847.533L21 7.5l.847-.532v1.065ZM17 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        }
      )
    );
  }
);
IconCornersThreeEyeOpen[iconSymbol] = true;
var IconCorners = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M4 20h4v2H3l-1-1v-5h2v4Zm18 1-1 1h-5v-2h4v-4h2v5ZM8 4H4v4H2V3l1-1h5v2Zm14-1v5h-2V4h-4V2h5l1 1Z"
        }
      )
    );
  }
);
IconCorners[iconSymbol] = true;
var IconCounter = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M9 13H5v-2h4v2Zm9-2h2v2h-2v2h-2v-2h-2v-2h2V9h2v2Zm2-8a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h16ZM4 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h7V5H4Zm9 14h7a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-7v14Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconCounter[iconSymbol] = true;
var IconCreditCard = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M10 14H6v-2h4v2Zm4 0h-2v-2h2v2Zm5-10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h14ZM4 17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7H4v7ZM5 6a1 1 0 0 0-1 1v1h16V7a1 1 0 0 0-1-1H5Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconCreditCard[iconSymbol] = true;
var IconCrop = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M5 17V7H2V5h3V2h2v15h15v2h-3v3h-2v-3H7a2 2 0 0 1-2-2ZM17 7H9V5h8a2 2 0 0 1 2 2v8h-2V7Z"
        }
      )
    );
  }
);
IconCrop[iconSymbol] = true;
var IconCrossCircle = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M19.997 12a8 8 0 1 0-16 0 8 8 0 0 0 16 0Zm2 0c0 5.523-4.478 10-10 10-5.523 0-10-4.477-10-10s4.477-10 10-10c5.522 0 10 4.477 10 10Zm-5.29-3.293L13.414 12l3.293 3.293-1.414 1.414L12 13.414l-3.293 3.293-1.414-1.414L10.586 12 7.293 8.707l1.414-1.414L12 10.586l3.293-3.293 1.414 1.414Z"
        }
      )
    );
  }
);
IconCrossCircle[iconSymbol] = true;
var IconCrossFat = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M16 2a1 1 0 0 1 1 1v4h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-4v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h4V3l.005-.103A1 1 0 0 1 8 2h8ZM9 9H4v6h5v5h6v-5h5V9h-5V4H9v5Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconCrossFat[iconSymbol] = true;
var IconCrossMobile = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M5 19V5a3 3 0 0 1 3-3h4v2H8a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8h2v8a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3Zm9-3v2h-4v-2h4Zm7.707-13.293L19.414 5l2.293 2.293-1.414 1.414L18 6.414l-2.293 2.293-1.414-1.414L16.586 5l-2.293-2.293 1.414-1.414L18 3.586l2.293-2.293 1.414 1.414Z"
        }
      )
    );
  }
);
IconCrossMobile[iconSymbol] = true;
var IconCrossSquare = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M19 6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6Zm2 12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12Zm-4.293-9.293L13.414 12l3.293 3.293-1.414 1.414L12 13.414l-3.293 3.293-1.414-1.414L10.586 12 7.293 8.707l1.414-1.414L12 10.586l3.293-3.293 1.414 1.414Z"
        }
      )
    );
  }
);
IconCrossSquare[iconSymbol] = true;
var IconCross = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M19.707 5.707 13.414 12l6.293 6.293-1.414 1.414L12 13.414l-6.293 6.293-1.414-1.414L10.586 12 4.293 5.707l1.414-1.414L12 10.586l6.293-6.293 1.414 1.414Z"
        }
      )
    );
  }
);
IconCross[iconSymbol] = true;
var IconCube = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m4 17.28 7 2.332V10.72L4 8.387v8.892Zm9-6.56v8.892l7-2.333V8.387l-7 2.333ZM6.161 7 12 8.946 17.839 7 12 5.054 6.161 7ZM22 18l-.684.948-9 3h-.632l-9-3L2 18V7l.684-.948 9-3h.632l9 3L22 7v11Z"
        }
      )
    );
  }
);
IconCube[iconSymbol] = true;
var IconCursorFilled = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M22.001 8.936v2.045l-.003.019C15.977 11 11 15.977 11 21.998l-.012.002H8.935L2 3.178V3l1-1h.179L22 8.936Z"
        }
      )
    );
  }
);
IconCursorFilled[iconSymbol] = true;
var IconCursorLines = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M18 7v2h-4V7h4Zm4-4v2H10V3h12ZM4.11 22.065l1.689.48a11.363 11.363 0 0 1 10.207-5.705l.5-1.76-12-8.694-1.746.974 1.35 14.705Zm8.989-6.984a13.401 13.401 0 0 0-7.251 4.04l-.914-9.956 8.165 5.916Z"
        }
      )
    );
  }
);
IconCursorLines[iconSymbol] = true;
var IconCursorTextLines = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20 7v2h-6V7h6Zm2-4v2H12V3h10ZM5 18v-8l-.005-.14a1.513 1.513 0 0 0-.218-.72.408.408 0 0 0-.131-.14H2V7h2.667c.538 0 .986.221 1.333.527C6.347 7.221 6.795 7 7.333 7H10v2H7.354a.408.408 0 0 0-.131.14 1.513 1.513 0 0 0-.218.72L7 10v8l.005.14c.022.316.115.565.218.72.065.097.112.13.131.14H10v2H7.333c-.538 0-.986-.221-1.333-.527-.347.306-.795.527-1.333.527H2v-2h2.646a.408.408 0 0 0 .131-.14c.118-.177.223-.478.223-.86Z"
        }
      )
    );
  }
);
IconCursorTextLines[iconSymbol] = true;
var IconCursorText = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M11 17V7l-.005-.103A1 1 0 0 0 10 6H6V4h4c.77 0 1.469.292 2 .769A2.985 2.985 0 0 1 14 4h4v2h-4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4v2h-4a2.98 2.98 0 0 1-2-.769A2.985 2.985 0 0 1 10 20H6v-2h4a1 1 0 0 0 1-1Z"
        }
      )
    );
  }
);
IconCursorText[iconSymbol] = true;
var IconCursor = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M22.001 8.936v2.045l-.003.019C15.977 11 11 15.977 11 21.998l-.012.002H8.935L2.062 3.346 2 3.178V3l1-1h.179L22 8.936Zm-12.385 9.13a13.162 13.162 0 0 1 8.45-8.45L4.687 4.688l4.928 13.377Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconCursor[iconSymbol] = true;
var IconCurveSquareCircleArrow = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M9 18a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm10.445-3.832a1 1 0 0 1 1.387.277l2 3a1 1 0 0 1 0 1.11l-2 3a1 1 0 1 1-1.664-1.11L20.132 19H14a1 1 0 1 1 0-2h6.132l-.964-1.445a1 1 0 0 1 .277-1.387ZM5 11v-1a5 5 0 0 1 5-5h1a1 1 0 1 1 0 2h-1a3 3 0 0 0-3 3v1a1 1 0 1 1-2 0Zm16-7a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V4ZM11 18a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM23 8a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v4Z"
        }
      )
    );
  }
);
IconCurveSquareCircleArrow[iconSymbol] = true;
var IconDashLeftDownSquareDashRightUp = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m6.707 18.707-3 3-1.414-1.414 3-3 1.414 1.414ZM9 9v6h6V9H9Zm12.707-5.293-3 3-1.414-1.414 3-3 1.414 1.414ZM17 15a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6Z"
        }
      )
    );
  }
);
IconDashLeftDownSquareDashRightUp[iconSymbol] = true;
var IconDashLeftUpSquareDashDownRight = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m21.707 20.293-1.414 1.414-3-3 1.414-1.414 3 3ZM9 9v6h6V9H9ZM6.707 5.293 5.293 6.707l-3-3 1.414-1.414 3 3ZM17 15a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6Z"
        }
      )
    );
  }
);
IconDashLeftUpSquareDashDownRight[iconSymbol] = true;
var IconDashSquareDashHorizontal = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M9 9v6h6V9H9Zm-4 2v2H.5v-2H5Zm18 0v2h-4v-2h4Zm-6 4a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6Z"
        }
      )
    );
  }
);
IconDashSquareDashHorizontal[iconSymbol] = true;
var IconDashSquareDashVertical = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M15 9H9v6h6V9Zm-2-4h-2V1h2v4Zm0 18h-2v-4h2v4Zm-4-6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9Z"
        }
      )
    );
  }
);
IconDashSquareDashVertical[iconSymbol] = true;
var IconDiagramCardLarge1 = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m21 3 1 1v16l-1 1H3l-1-1V4l1-1h18ZM4 19h16V5H4v14Zm8-8v2H6v-2h6Zm4-4v2H6V7h10Z"
        }
      )
    );
  }
);
IconDiagramCardLarge1[iconSymbol] = true;
var IconDiagramCardLarge2 = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m21 3 1 1v16l-1 1H3l-1-1V4l1-1h18ZM4 19h16V5H4v14ZM18 7v2h-6V7h6Zm0 4v2h-6v-2h6ZM6 9a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm0 6h2v2H6v-2Zm5 0h2v2h-2v-2Zm5 0h2v2h-2v-2Z"
        }
      )
    );
  }
);
IconDiagramCardLarge2[iconSymbol] = true;
var IconDiagramCardLarge3 = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M8 19H6v-2h2v2Zm5 0h-2v-2h2v2Zm5 0h-2v-2h2v2Zm-4-7H6v-2h8v2Zm4-4H6V6h12v2Zm4-5v18l-1 1H3l-1-1V3l1-1h18l1 1ZM4 20h16v-4H4v4Zm0-6h16V4H4v10Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconDiagramCardLarge3[iconSymbol] = true;
var IconDiagramCardLarge4 = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M8 19H6v-2h2v2Zm5 0h-2v-2h2v2Zm5 0h-2v-2h2v2Zm-2-7h-4v-2h4v2ZM8 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm10 2h-6V6h6v2Zm4-5v18l-1 1H3l-1-1V3l1-1h18l1 1ZM4 20h16v-4H4v4Zm0-6h16V4H4v10Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconDiagramCardLarge4[iconSymbol] = true;
var IconDiagramCardMagnifyingGlass = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M19 14a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm2 0a3.98 3.98 0 0 1-.555 2.031l3.262 3.262-1.414 1.414-3.262-3.262A4 4 0 1 1 21 14ZM11 9v2H6V9h5Zm-2 4v2H6v-2h3Zm12-9 1 1v3h-2V6H4v12h7v2H3l-1-1V5l1-1h18Z"
        }
      )
    );
  }
);
IconDiagramCardMagnifyingGlass[iconSymbol] = true;
var IconDiagramCardSmall1 = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m21 5 1 1v12l-1 1H3l-1-1V6l1-1h18ZM4 17h16V7H4v10Zm12-6v2H6v-2h10Z"
        }
      )
    );
  }
);
IconDiagramCardSmall1[iconSymbol] = true;
var IconDiagramCardSmall2 = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m21 5 1 1v12l-1 1H3l-1-1V6l1-1h18ZM4 17h16V7H4v10Zm14-6v2h-6v-2h6Zm-8 1a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
        }
      )
    );
  }
);
IconDiagramCardSmall2[iconSymbol] = true;
var IconDiagramCardSmall3 = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M10 15H6v-2h4v2Zm2-4H6V9h6v2Zm10-5v12l-1 1H3l-1-1V6l1-1h18l1 1Zm-6 11h4V7h-4v10ZM4 17h10V7H4v10Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconDiagramCardSmall3[iconSymbol] = true;
var IconDiagramCardTeam = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M13 11.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm2 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM8 9v2H6V9h2Zm0 4v2H6v-2h2Zm4.5 2a4.427 4.427 0 0 1 4.405 3.991l.09.91-1.99.198-.09-.91a2.427 2.427 0 0 0-4.83 0l-.09.91-1.99-.198.09-.91A4.427 4.427 0 0 1 12.5 15Zm5.5 0a4.97 4.97 0 0 1 4.94 4.414l.054.474-1.988.224-.053-.474A2.972 2.972 0 0 0 18 17v-2Zm1-3.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm2 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM21 4l1 1v2h-2V6H4v12h2v2H3l-1-1V5l1-1h18Z"
        }
      )
    );
  }
);
IconDiagramCardTeam[iconSymbol] = true;
var IconDiagramCardUser = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M19 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9-2v2H6V9h6Zm0 4v2H6v-2h6Zm6 2a4.97 4.97 0 0 1 4.94 4.414l.054.474-1.988.224-.053-.474a2.972 2.972 0 0 0-5.906 0l-.053.474-1.988-.224.054-.474A4.972 4.972 0 0 1 18 15Zm3-11 1 1v2h-2V6H4v12h6v2H3l-1-1V5l1-1h18Z"
        }
      )
    );
  }
);
IconDiagramCardUser[iconSymbol] = true;
var IconDiagrammingShapes = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M13 4.5A2.5 2.5 0 0 1 15.5 2h4A2.5 2.5 0 0 1 22 4.5v4a2.5 2.5 0 0 1-2.5 2.5h-4A2.5 2.5 0 0 1 13 8.5v-1h-2a4 4 0 0 0-4 4v.5a5.002 5.002 0 0 1 4.9 4h6.626l-2.143-1.712 1.234-1.577 4.383 3.5v1.577l-4.383 3.5-1.234-1.576L18.526 18H11.9A5.002 5.002 0 0 1 2 17a5.001 5.001 0 0 1 3-4.584V11.5a6 6 0 0 1 6-6h2v-1Zm2.5-.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-4ZM7 14a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconDiagrammingShapes[iconSymbol] = true;
var IconDiagramming = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M18.5 2A2.5 2.5 0 0 1 21 4.5v3a2.5 2.5 0 0 1-2.5 2.5h-3A2.5 2.5 0 0 1 13 7.5V6h-3a2.999 2.999 0 0 0-2.826 2H7.5a2.5 2.5 0 0 1 2.5 2.5v3A2.5 2.5 0 0 1 7.5 16H7a2 2 0 0 0 2 2h4v-1.5a2.5 2.5 0 0 1 2.5-2.5h3a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5h-3a2.501 2.501 0 0 1-2.45-2H9a4 4 0 0 1-4-4h-.5A2.5 2.5 0 0 1 2 13.5v-3A2.5 2.5 0 0 1 4.5 8h.6A5.003 5.003 0 0 1 10 4h3.05a2.5 2.5 0 0 1 2.45-2h3Zm-3 14a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3Zm-11-6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3Zm11-6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconDiagramming[iconSymbol] = true;
var IconDigit = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M8.235 6v11H11v2H3v-2h3.235V7.543L3.408 8.808 2.592 6.98l4.235-1.894L8.235 6Zm9.815-1A3.95 3.95 0 0 1 22 8.95c0 2.023-1.443 3.62-3.097 4.334-1.66.717-3.33 1.881-3.783 3.716h6.38v2H14l-1-1c0-3.718 3.034-5.656 5.111-6.553C19.246 10.957 20 9.964 20 8.95A1.95 1.95 0 0 0 18.05 7h-.621A2.429 2.429 0 0 0 15 9.429h-2A4.429 4.429 0 0 1 17.429 5h.62Z"
        }
      )
    );
  }
);
IconDigit[iconSymbol] = true;
var IconDistributeHorizontal = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M3 3h2v18H3V3Zm16 0h2v18h-2V3Zm-9 4h4v10h-4V7Z"
        }
      )
    );
  }
);
IconDistributeHorizontal[iconSymbol] = true;
var IconDistributeVertical = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M21 5H3V3h18v2Zm0 16H3v-2h18v2ZM7 10h10v4H7v-4Z"
        }
      )
    );
  }
);
IconDistributeVertical[iconSymbol] = true;
var IconDocFormat = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20 5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5Zm2 14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14Zm-5-8v2H7v-2h10Zm0-4v2H7V7h10Zm-3 8v2H7v-2h7Z"
        }
      )
    );
  }
);
IconDocFormat[iconSymbol] = true;
var IconDollarSignCurrency = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M16 15.333c0-.287-.142-.851-.68-1.35-.417-.386-1.13-.781-2.32-.925v4.55c1.191-.144 1.903-.539 2.32-.925.538-.499.68-1.063.68-1.35Zm2 0c0 .824-.359 1.927-1.32 2.817-.82.76-2.02 1.311-3.68 1.47V22h-2v-2.38c-1.66-.159-2.86-.71-3.68-1.47C6.36 17.26 6 16.157 6 15.333h2c0 .287.142.851.68 1.35.417.386 1.129.781 2.32.925v-4.656c-1.66-.158-2.86-.709-3.68-1.469C6.36 10.593 6 9.491 6 8.667c0-.824.359-1.927 1.32-2.817.82-.76 2.02-1.312 3.68-1.47V2h2v2.38c1.66.158 2.86.71 3.68 1.47.961.89 1.32 1.993 1.32 2.817h-2c0-.287-.142-.851-.68-1.35-.417-.386-1.129-.782-2.32-.926v4.656c1.66.158 2.86.71 3.68 1.47.961.89 1.32 1.992 1.32 2.816ZM8 8.667c0 .287.142.851.68 1.35.417.386 1.13.78 2.32.924v-4.55c-1.191.144-1.903.54-2.32.926C8.142 7.816 8 8.38 8 8.667Z"
        }
      )
    );
  }
);
IconDollarSignCurrency[iconSymbol] = true;
var IconDotLineDot = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20 11v2H4v-2h16Zm-9-5h2v2h-2V6Zm0 10h2v2h-2v-2Z"
        }
      )
    );
  }
);
IconDotLineDot[iconSymbol] = true;
var IconDotVoting = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M4.05 12a8 8 0 0 1 15.808-1.748.52.52 0 0 1-.144.477.913.913 0 0 1-.665.271h-1a7 7 0 0 0-7 7v1a.913.913 0 0 1-.27.664.52.52 0 0 1-.478.144A8.003 8.003 0 0 1 4.05 12Zm-2 0c0-5.523 4.476-10 10-10 2.175 0 4.189.695 5.83 1.875A9.987 9.987 0 0 1 22.05 12v.414L12.462 22h-.414a9.987 9.987 0 0 1-8.125-4.17A9.953 9.953 0 0 1 2.05 12Zm16.585 1-5.586 5.586V18a5 5 0 0 1 5-5h.586Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconDotVoting[iconSymbol] = true;
var IconDotsNine = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M10 3h4v4h-4V3Zm0 7h4v4h-4v-4Zm0 7h4v4h-4v-4ZM3 3h4v4H3V3Zm0 7h4v4H3v-4Zm0 7h4v4H3v-4ZM17 3h4v4h-4V3Zm0 7h4v4h-4v-4Zm0 7h4v4h-4v-4Z"
        }
      )
    );
  }
);
IconDotsNine[iconSymbol] = true;
var IconDotsSixHorizontal = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M2 6h4v4H2V6Zm8 0h4v4h-4V6Zm8 0h4v4h-4V6ZM2 14h4v4H2v-4Zm8 0h4v4h-4v-4Zm8 0h4v4h-4v-4Z"
        }
      )
    );
  }
);
IconDotsSixHorizontal[iconSymbol] = true;
var IconDotsSixVertical = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M6 2h4v4H6V2Zm8 0h4v4h-4V2Zm-8 8h4v4H6v-4Zm8 0h4v4h-4v-4Zm-8 8h4v4H6v-4Zm8 0h4v4h-4v-4Z"
        }
      )
    );
  }
);
IconDotsSixVertical[iconSymbol] = true;
var IconDotsThreeVertical = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M12 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
        }
      )
    );
  }
);
IconDotsThreeVertical[iconSymbol] = true;
var IconDotsThree = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M12 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
        }
      )
    );
  }
);
IconDotsThree[iconSymbol] = true;
var IconDotsTwo = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M10 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
        }
      )
    );
  }
);
IconDotsTwo[iconSymbol] = true;
var IconDownload = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M4 19a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5h2v5a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5h2v5Zm9-6.414 2.293-2.293 1.414 1.414-4 4h-1.414l-4-4 1.414-1.414L11 12.586V3h2v9.586Z"
        }
      )
    );
  }
);
IconDownload[iconSymbol] = true;
var IconDrinkBurger = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M11.555 2.832 9 4.535V6h4.084l-.322 4.006A5.09 5.09 0 0 1 13 10h3a5 5 0 0 1 4.974 4.483A2.494 2.494 0 0 1 21 18.496V20a2 2 0 0 1-2 2H3.202L1.916 6H7V3.465l3.445-2.297 1.11 1.664ZM5.048 20H8v-1.504a2.493 2.493 0 0 1 .025-4.013 5.003 5.003 0 0 1 2.685-3.928L10.916 8H4.084l.964 12ZM10 19v1h9v-1h-9Zm-.5-3a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1h-10Zm3.5-4a2.998 2.998 0 0 0-2.826 2h8.652A2.998 2.998 0 0 0 16 12h-3Z"
        }
      )
    );
  }
);
IconDrinkBurger[iconSymbol] = true;
var IconEnvelope = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M22 5v14l-1 1H3l-1-1V5l1-1h18l1 1Zm-8.586 9h-2.828L4 7.414V18h16V7.414L13.414 14Zm-2-2h1.172l6-6H5.414l6 6Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconEnvelope[iconSymbol] = true;
var IconEraser = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M12.63 3.957a3 3 0 0 1 4.242 0l4.171 4.172a3 3 0 0 1 0 4.242l-6.629 6.63H21v2H8l-.707-.294-3.586-3.585a3 3 0 0 1 0-4.243l8.922-8.922ZM5.12 14.293a1 1 0 0 0 0 1.414L8.414 19h3.172l3-3L9 10.414l-3.879 3.88Zm10.336-8.922a1 1 0 0 0-1.414 0l-3.629 3.63L16 14.585l3.63-3.629a1 1 0 0 0 0-1.414L15.457 5.37Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconEraser[iconSymbol] = true;
var IconExclamationMarkOctagon = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m16 2 .707.293 5 5L22 8v8l-.293.707-5 5L16 22H8l-.707-.293-5-5L2 16V8l.293-.707 5-5L8 2h8ZM4 8.414v7.172L8.414 20h7.172L20 15.586V8.414L15.586 4H8.414L4 8.414ZM11 13V7h2v6h-2Zm-.5 2.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
        }
      )
    );
  }
);
IconExclamationMarkOctagon[iconSymbol] = true;
var IconExclamationPointCircle = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20 12a8 8 0 1 0-16 0 8 8 0 0 0 16 0Zm2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-11 2V7h2v7h-2Zm-.5 2.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
        }
      )
    );
  }
);
IconExclamationPointCircle[iconSymbol] = true;
var IconExport = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M4 19a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5h2v5a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5h2v5Zm8.707-15.707 4 4-1.414 1.414L13 6.414V16h-2V6.414L8.707 8.707 7.293 7.293l4-4h1.414Z"
        }
      )
    );
  }
);
IconExport[iconSymbol] = true;
var IconExternalFormat = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M17 8.001v6h-2v-3.587l-6.793 6.793-1.414-1.414 6.793-6.792H10v-2h6l1 1ZM18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h12ZM6 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconExternalFormat[iconSymbol] = true;
var IconEyeClosedDotsFourFrameBroken = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M6 7H5v12h14v-5h2v6l-1 1H4l-1-1V6l1-1h2v2Zm3 10H7v-2h2v2Zm4 0h-2v-2h2v2Zm4 0h-2v-2h2v2Zm4.379-11.314-.532.846-.001.001-.001.002-.003.004-.008.013-.024.038a9.628 9.628 0 0 1-.419.575c-.212.27-.498.606-.851.961L20.914 9.5 19.5 10.914l-1.516-1.516a7.56 7.56 0 0 1-.955.528l.736 2.206-1.898.633-.766-2.3a5.68 5.68 0 0 1-.601.035 5.67 5.67 0 0 1-.602-.035l-.765 2.3-1.898-.633.735-2.206a7.684 7.684 0 0 1-1.143-.653L9.81 10.88 8.12 9.809l1.175-1.855a11.198 11.198 0 0 1-.686-.789 9.614 9.614 0 0 1-.419-.575l-.024-.038-.008-.013-.003-.004v-.002l.035.057-.037-.058-.532-.846L9.314 4.62l.532.846.002.002.012.02.062.09a8.987 8.987 0 0 0 1.264 1.43c.88.8 2.022 1.491 3.314 1.491 1.292 0 2.435-.69 3.314-1.49a8.987 8.987 0 0 0 1.264-1.43 4.036 4.036 0 0 0 .074-.111l.002-.002.532-.846 1.693 1.065Z"
        }
      )
    );
  }
);
IconEyeClosedDotsFourFrameBroken[iconSymbol] = true;
var IconEyeClosed = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m22.372 11.657-.515.858-.005.008-.01.018a10.717 10.717 0 0 1-.174.27 18.077 18.077 0 0 1-1.99 2.452l2.029 2.03-1.414 1.414-2.096-2.096a12.11 12.11 0 0 1-2.497 1.553l1.195 2.389-1.79.894-1.32-2.641A8.426 8.426 0 0 1 12 19c-.596 0-1.17-.065-1.72-.18l-.832 2.496-1.896-.632.827-2.485a12.048 12.048 0 0 1-2.577-1.588l-2.095 2.096-1.414-1.414 2.028-2.03a18.064 18.064 0 0 1-1.989-2.451 10.501 10.501 0 0 1-.174-.271l-.01-.018-.004-.007-.001-.001-.515-.858 1.715-1.03.514.858.005.008.026.041a13.688 13.688 0 0 0 .56.804c.397.53.98 1.235 1.717 1.937C7.662 15.701 9.675 17 12 17s4.338-1.299 5.835-2.725a15.818 15.818 0 0 0 2.167-2.57l.11-.17.026-.042.005-.008.514-.857 1.715 1.03Z"
        }
      )
    );
  }
);
IconEyeClosed[iconSymbol] = true;
var IconEyeOpenLineFrameBroken = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M6 7H5v12h14v-5h2v6l-1 1H4l-1-1V6l1-1h2v2Zm11 10H7v-2h10v2ZM14.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0-3c2.008 0 3.615 1.06 4.66 2.01a10.962 10.962 0 0 1 1.56 1.768l.09.132.024.038.008.013.003.004v.002s.002 0 0-.002l.002.003v1.065l-.002.002-.003.004-.008.013-.024.038a9.628 9.628 0 0 1-.419.575 11 11 0 0 1-1.23 1.325C18.115 10.94 16.508 12 14.5 12c-2.008 0-3.615-1.06-4.66-2.01a10.962 10.962 0 0 1-1.56-1.768 6.83 6.83 0 0 1-.09-.132l-.024-.038-.008-.013-.003-.004v-.002l.091.14-.093-.14V6.966l.002-.002.003-.004.008-.013.024-.038a9.614 9.614 0 0 1 .419-.575 11 11 0 0 1 1.23-1.325C10.886 4.06 12.493 3 14.5 3Zm0 2c-1.292 0-2.435.69-3.315 1.49-.396.36-.716.724-.946 1.01.23.286.55.65.946 1.01.88.8 2.023 1.49 3.315 1.49 1.292 0 2.435-.69 3.314-1.49.397-.36.716-.724.946-1.01a8.934 8.934 0 0 0-.946-1.01C16.934 5.69 15.792 5 14.5 5Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconEyeOpenLineFrameBroken[iconSymbol] = true;
var IconEyeOpenSlash = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "m20.707 4.707-16 16-1.414-1.414 2.348-2.35a19.294 19.294 0 0 1-2.56-2.516 21.01 21.01 0 0 1-1.044-1.333 17.2 17.2 0 0 1-.278-.402l-.075-.112a.19.19 0 0 1-.02-.032l-.007-.01-.002-.003v-1.07l.001-.002.004-.005.01-.018.042-.063a19.075 19.075 0 0 1 .72-1.002 20.99 20.99 0 0 1 2.102-2.348C6.294 6.346 8.91 4.5 12 4.5c1.744 0 3.333.589 4.692 1.392l2.601-2.599 1.414 1.414ZM12 6.5c-2.308 0-4.443 1.404-6.084 2.973a18.987 18.987 0 0 0-2.201 2.525c.213.295.513.69.89 1.135.637.75 1.475 1.62 2.458 2.388l1.859-1.858a3.5 3.5 0 0 1 4.742-4.742l1.558-1.559c-1.015-.53-2.1-.862-3.222-.862Zm0 4a1.5 1.5 0 0 0-1.5 1.5c0 .027.002.054.004.081l1.578-1.578A1.103 1.103 0 0 0 12 10.5Zm7.736-2.209a21.205 21.205 0 0 1 2.42 2.89c.06.087.105.155.137.204l.037.057.01.016.004.006.002.002v1.068l-.001.001-.001.002-.004.005-.01.018-.042.063a19.019 19.019 0 0 1-.72 1.002 20.998 20.998 0 0 1-2.102 2.348C17.706 17.654 15.09 19.5 12 19.5a8.2 8.2 0 0 1-2.545-.412l.613-1.903.21.063A6.198 6.198 0 0 0 12 17.5c2.308 0 4.443-1.404 6.084-2.973A18.983 18.983 0 0 0 20.285 12c-.07-.096-.148-.203-.236-.318a19.157 19.157 0 0 0-1.723-1.973l1.41-1.418Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconEyeOpenSlash[iconSymbol] = true;
var IconEyeOpen = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M13.5 12a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm2 0a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM12 4.5c3.091 0 5.707 1.846 7.466 3.527a20.992 20.992 0 0 1 2.67 3.125 11.866 11.866 0 0 1 .193.288l.01.018a.041.041 0 0 0 .005.005v.002h.002v1.069l-.001.001-.001.002-.004.005-.01.018-.042.063a19.019 19.019 0 0 1-.72 1.002 20.998 20.998 0 0 1-2.102 2.348C17.706 17.654 15.09 19.5 12 19.5s-5.707-1.846-7.466-3.527a20.997 20.997 0 0 1-2.67-3.125 12.085 12.085 0 0 1-.152-.225l-.041-.063-.01-.018a.042.042 0 0 0-.005-.005v-.002h-.002v-1.069l.001-.001.001-.002.004-.005.01-.018.042-.063a19.082 19.082 0 0 1 .72-1.002 20.99 20.99 0 0 1 2.102-2.348C6.294 6.346 8.91 4.5 12 4.5Zm0 2c-2.308 0-4.443 1.404-6.084 2.973A18.988 18.988 0 0 0 3.714 12a18.984 18.984 0 0 0 2.202 2.527C7.557 16.096 9.692 17.5 12 17.5c2.309 0 4.443-1.404 6.084-2.973A18.983 18.983 0 0 0 20.285 12a18.987 18.987 0 0 0-2.201-2.527C16.443 7.904 14.309 6.5 12 6.5Z"
        }
      )
    );
  }
);
IconEyeOpen[iconSymbol] = true;
var IconEyedropper = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M15.01 3.37a3.866 3.866 0 0 1 5.594 5.335L19.445 9.95l-.455 3.191-1.697.566-.793-.793-5.937 5.936a5.001 5.001 0 0 1-2.554 1.367l-3.813.763-1.176-1.177.762-3.812a5.001 5.001 0 0 1 1.367-2.555L11.086 7.5l-.793-.793.543-1.693 2.746-.458 1.15-.903.278-.283ZM6.563 14.85a3.001 3.001 0 0 0-.82 1.533l-.469 2.341 2.342-.468a3.001 3.001 0 0 0 1.533-.82l5.937-5.937L12.5 8.916 6.563 14.85ZM19.091 4.755a1.866 1.866 0 0 0-2.652.014l-.325.331-.096.087-1.4 1.1-.454.2-1.084.18 4.212 4.211.218-1.52.258-.538 1.37-1.477a1.866 1.866 0 0 0-.047-2.588Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconEyedropper[iconSymbol] = true;
var IconFactoryHouse = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M11 13H9v-2h2v2Zm4 0h-2v-2h2v2ZM8 4.32l3.47-2.168h1.06l8 5L21 8v13l-1 1h-5.5l-1-1v-4h-3v4l-1 1H4l-1-1V8l.47-.848L6 5.57V2h2v2.32ZM5 8.554V20h3.5v-4l1-1h5l1 1v4H19V8.554l-7-4.375-7 4.375Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconFactoryHouse[iconSymbol] = true;
var IconFactory = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M19.791 2c.566 0 1.057.38 1.205.917l.026.11.007.042.004.044-.995.091-.007.002 1.002-.093.96 10.344c.004.043.007.087.007.13V21l-1 1H3l-1-1v-6.84c0-.487.284-.93.727-1.135l6.18-2.852.097-.041a1.25 1.25 0 0 1 1.316.297l.07.078 1.901 2.28 6.14-2.63.098-.039a1.25 1.25 0 0 1 1.163.201L19.107 4h-1.456l-.66 4.64-1.981-.28.759-5.328.005-.027A1.25 1.25 0 0 1 17 2h2.791Zm-8.082 13.213-2.486-2.984L4 14.639V20h3v-3h2v3h6v-3h2v3h3v-6.15l-1.307-1.631-6.984 2.994Z"
        }
      )
    );
  }
);
IconFactory[iconSymbol] = true;
var IconFigma = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M9 21a3 3 0 0 0 3-3v-3H9a3 3 0 0 0 0 6Zm-2.999-9a3 3 0 0 1 3-3H12v6H9a3 3 0 0 1-2.999-3Zm0-6a3 3 0 0 1 3-3H12v6H9a3 3 0 0 1-2.999-3ZM12 3h3a3 3 0 0 1 0 6h-3V3Zm5.999 9a3 3 0 0 1-3 3 3 3 0 0 1 0-6 3 3 0 0 1 3 3Z"
        }
      )
    );
  }
);
IconFigma[iconSymbol] = true;
var IconFileSpreadsheet = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M7 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-7.53a3 3 0 0 0-3.331-2.983l-.059.007-1.104-1.104.007-.059A3 3 0 0 0 10.53 4H7Zm7.531 0h1.64a1 1 0 0 1 .708.293l.828.828a1 1 0 0 1 .293.707v1.64a4.977 4.977 0 0 0-2.493-.975A4.978 4.978 0 0 0 14.53 4ZM20 5.828a3 3 0 0 0-.879-2.12l-.828-.83A3 3 0 0 0 16.172 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5.828ZM11 16H8v2h3v-2Zm2 2h3v-2h-3v2Zm-2-6H8v2h3v-2Zm5 0h-3v2h3v-2Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconFileSpreadsheet[iconSymbol] = true;
var IconFilledBottomBox = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M5 10a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H7v5a2 2 0 0 0 2 2h2v-1a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2H9a4 4 0 0 1-4-4v-5Zm0-2h14V5H5v3Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconFilledBottomBox[iconSymbol] = true;
var IconFilledTopBox = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M5 10a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H7v5a2 2 0 0 0 2 2h2v-1a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2H9a4 4 0 0 1-4-4v-5Zm8 9h6v-3h-6v3Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconFilledTopBox[iconSymbol] = true;
var IconFlag = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M19 7h-6l-.895-.553L11.382 5H5v7h7l.895.553.723 1.447H19V7Zm2 8-1 1h-7a1 1 0 0 1-.895-.553L11.382 14H5v8H3V4l1-1h8a1 1 0 0 1 .895.553L13.618 5H20l1 1v9Z"
        }
      )
    );
  }
);
IconFlag[iconSymbol] = true;
var IconFlask = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M14 6.837V5l.105-.447.276-.553H9.618l.276.553L10 5v1.973a9 9 0 0 1-.96 4.044c1.872.06 2.795.286 3.703.513.724.181 1.437.36 2.829.434l-.346-.592A9.001 9.001 0 0 1 14 6.837ZM5.377 17.785A1.5 1.5 0 0 0 6.698 20h10.949a1.5 1.5 0 0 0 1.296-2.256l-2.187-3.748c-2.423-.016-3.471-.27-4.499-.526-.938-.235-1.855-.47-4.256-.47v-.056l-2.623 4.841ZM16 6.837c0 1.24.33 2.457.955 3.527l3.716 6.372C22.032 19.07 20.348 22 17.647 22H6.697c-2.651 0-4.34-2.835-3.077-5.167l3.535-6.526A7 7 0 0 0 8 6.973V5.236l-.895-1.789L8 2h8l.894 1.447L16 5.237v1.6Z"
        }
      )
    );
  }
);
IconFlask[iconSymbol] = true;
var IconFlipCard = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-2h2v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v6H6V9.15a9.6 9.6 0 0 0-.284.059c-1.151.255-1.826.638-2.206 1.001-.363.347-.496.71-.51 1.061l-.009.14a3.339 3.339 0 0 0-.004.154l.001.015c.046.304.138.474.25.595.123.131.346.285.787.422C4.949 12.884 6.484 13 9 13l2.59.004-1.297-1.297 1.414-1.414 3 2.999v1.415l-3 3-1.415-1.414 1.288-1.29c-1.11 0-2.246-.003-2.579-.003l-.902-.006c-2.03-.025-3.568-.147-4.667-.488-.65-.202-1.222-.501-1.656-.967a2.95 2.95 0 0 1-.724-1.433l-.041-.227c-.044-.29-.013-.612-.01-.691.037-.863.387-1.717 1.127-2.424.724-.692 1.773-1.2 3.155-1.507.229-.05.468-.096.717-.136V5a3 3 0 0 1 3-3h10Z"
        }
      )
    );
  }
);
IconFlipCard[iconSymbol] = true;
var IconFlip = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M12.1 4c4.025 0 7.687 1.343 9.644 3.521l-1.488 1.336C18.802 7.24 15.773 6 12.1 6c-2.64 0-4.98.644-6.628 1.632C3.805 8.632 3 9.875 3 11.058c0 1.183.805 2.425 2.473 3.425 1.647.989 3.988 1.632 6.628 1.632.357 0 .709-.014 1.054-.037l-.406-2.299 1.173-1.254 7.362 2.187.3 1.69-6.167 4.578-1.472-.436-.44-2.485c-.46.036-.93.056-1.404.056-2.94 0-5.649-.713-7.657-1.917C2.456 15.006 1 13.22 1 11.058c0-2.162 1.456-3.949 3.444-5.141C6.452 4.713 9.161 4 12.101 4Z"
        }
      )
    );
  }
);
IconFlip[iconSymbol] = true;
var IconFolderFilled = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M16 7v2.5h3V7h-3ZM4 19h16v-7.5h-6l-.759-.35-1.006-1.172L10.541 8H4.81a.81.81 0 0 0-.81.81V19ZM6 4v2h5.031l.764.356 1.97 2.333.235.275V4H6Zm10 1h3a2 2 0 0 1 2 2v2.5l1 1V20l-1 1H3l-1-1V8.81a2.81 2.81 0 0 1 2-2.69V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1Z"
        }
      )
    );
  }
);
IconFolderFilled[iconSymbol] = true;
var IconFolder = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "m11.666 3 .294.295L14.645 6H21l1 1v13l-1 1H3l-1-1V6a3 3 0 0 1 3-3h6.666ZM4 19h16V8H4v11ZM5 5a1 1 0 0 0-1 1h7.826l-.993-1H5Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconFolder[iconSymbol] = true;
var IconFormula = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m18 3 1 1v4h-2V5H7.204l5.549 6.342v1.316L7.204 19H17v-3h2v4l-1 1H5l-.753-1.658L10.671 12 4.247 4.658 5 3h13Z"
        }
      )
    );
  }
);
IconFormula[iconSymbol] = true;
var IconFrameLinesTwo = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M6 2v2h12V2h2v2h2v2h-2v12h2v2h-2v2h-2v-2H6v2H4v-2H2v-2h2V6H2V4h2V2h2Zm0 16h12V6H6v12Zm10-9v2H8V9h8Zm0 4v2H8v-2h8Z"
        }
      )
    );
  }
);
IconFrameLinesTwo[iconSymbol] = true;
var IconFramePlay = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m11 9 4 2.5v1L11 15l-1-.5v-5l1-.5ZM6 2v2h12V2h2v2h2v2h-2v12h2v2h-2v2h-2v-2H6v2H4v-2H2v-2h2V6H2V4h2V2h2Zm0 16h12V6H6v12Z"
        }
      )
    );
  }
);
IconFramePlay[iconSymbol] = true;
var IconFramePlus = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M6 2v2h12V2h2v2h2v2h-2v12h2v2h-2v2h-2v-2H6v2H4v-2H2v-2h2V6H2V4h2V2h2Zm0 16h12V6H6v12Zm7-10v3h3v2h-3v3h-2v-3H8v-2h3V8h2Z"
        }
      )
    );
  }
);
IconFramePlus[iconSymbol] = true;
var IconFrame = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M6 2v2h12V2h2v2h2v2h-2v12h2v2h-2v2h-2v-2H6v2H4v-2H2v-2h2V6H2V4h2V2h2Zm0 16h12V6H6v12Z"
        }
      )
    );
  }
);
IconFrame[iconSymbol] = true;
var IconFunnel = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M19 5H5v1.14a2 2 0 0 0 .304 1.06l4.544 7.27.152.243v4.9l4-1.334v-3.566l.152-.243 4.544-7.27A2 2 0 0 0 19 6.14V5Zm2 1.14c0 .75-.211 1.484-.608 2.12L16 15.286V19l-.684.948-6 2L8 21v-5.714L3.608 8.26A4.001 4.001 0 0 1 3 6.14V3h18v3.14Z"
        }
      )
    );
  }
);
IconFunnel[iconSymbol] = true;
var IconGauge = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M11.997 2c5.523 0 10 4.477 10 10a9.983 9.983 0 0 1-3.714 7.777l-.777.63-1.258-1.555.777-.63a8 8 0 1 0-10.358-.257l.745.668-1.333 1.49-.745-.666A9.979 9.979 0 0 1 1.996 12c0-5.523 4.478-10 10.001-10ZM12 10a2 2 0 0 1 2 2c0 .179-.026.35-.07.516l2.277 2.277-1.414 1.414-2.277-2.277A2 2 0 1 1 12 10Z"
        }
      )
    );
  }
);
IconGauge[iconSymbol] = true;
var IconGavel = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m13 2 .707.293 2.5 2.5.293.707v3a1 1 0 0 1-.293.707l-2.543 2.543 8.468 8.468-1.415 1.414-8.467-8.468-2.043 2.043a1 1 0 0 1-.39.241l-3 1-.968-.188-3.5-3-.336-.924.5-3 .038-.152a1 1 0 0 1 .242-.391l6.5-6.5.073-.067A1 1 0 0 1 10 2h3ZM4.433 9.98l-.355 2.128 2.641 2.264 1.68-.56-3.9-3.898-.066.066Zm1.48-1.48L10 12.586 13.086 9.5 9 5.414 5.914 8.5Zm8.587-.414V5.914L12.586 4h-2.172L14.5 8.086Z"
        }
      )
    );
  }
);
IconGavel[iconSymbol] = true;
var IconGift = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M18.958 3.287 17.844 7H21l1 1v6l-1 1h-1v6l-1 1H5l-1-1v-6H3l-1-1V8l1-1h2.78l-.76-3.804L6.242 2.03l4 1 .59.415L12 5.197l1.168-1.752.59-.415 4-1 1.2 1.257ZM13 20h5v-5h-5v5Zm-7 0h5v-5H6v5Zm7-7h7V9h-7v4Zm-9 0h7V9H4v4Zm3.82-6h2.978L9.382 4.875 7.29 4.353 7.82 7Zm6.797-2.125L13.202 7h2.554l.78-2.604-1.919.479Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconGift[iconSymbol] = true;
var IconGithub = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M12 2C6.478 2 2 6.59 2 12.253c0 4.53 2.865 8.374 6.839 9.73.5.094.683-.223.683-.494 0-.244-.01-1.052-.014-1.909-2.782.62-3.369-1.21-3.369-1.21-.455-1.185-1.11-1.5-1.11-1.5-.907-.636.068-.623.068-.623 1.005.072 1.533 1.056 1.533 1.056.892 1.568 2.34 1.115 2.91.853.09-.663.35-1.115.635-1.371-2.221-.26-4.556-1.139-4.556-5.067 0-1.12.39-2.034 1.03-2.752-.103-.259-.446-1.302.097-2.714 0 0 .84-.275 2.751 1.051A9.363 9.363 0 0 1 12 6.958c.85.004 1.706.118 2.505.345 1.909-1.326 2.748-1.05 2.748-1.05.544 1.411.201 2.454.098 2.713.64.718 1.029 1.632 1.029 2.752 0 3.938-2.34 4.805-4.566 5.059.358.318.678.942.678 1.898 0 1.372-.012 2.476-.012 2.814 0 .273.18.593.687.492 3.971-1.357 6.833-5.2 6.833-9.728C22 6.59 17.523 2 12 2ZM5.745 16.606c-.022.05-.1.066-.171.031-.073-.033-.113-.103-.09-.154.022-.052.1-.067.172-.032.073.034.115.104.09.155Zm.492.45c-.047.045-.14.024-.204-.047-.065-.072-.078-.168-.03-.214.05-.045.14-.024.206.048.065.072.078.167.028.213Zm.338.576c-.062.043-.162.002-.224-.089-.061-.091-.061-.2.002-.244.062-.044.16-.005.223.086.061.093.061.202-.001.247Zm.57.666c-.054.063-.171.046-.257-.039-.087-.082-.111-.2-.056-.262s.173-.044.259.04c.086.082.113.2.054.262Zm.738.226c-.024.08-.137.116-.25.082-.113-.035-.187-.129-.164-.21.023-.08.136-.119.25-.082.113.035.188.128.164.21Zm.84.095c.002.085-.094.155-.213.156-.12.003-.216-.065-.217-.149 0-.085.094-.154.213-.157.119-.002.216.066.216.15Zm.824-.032c.014.082-.068.167-.186.19-.117.021-.224-.03-.239-.111-.014-.085.07-.17.186-.192.118-.02.224.029.239.113Z"
        }
      )
    );
  }
);
IconGithub[iconSymbol] = true;
var IconGlobe = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2ZM9.043 13c.245 2.895 1.524 5.343 3.016 6.744 1.465-1.392 2.673-3.832 2.902-6.744H9.043Zm-4.979 0a8.006 8.006 0 0 0 5.197 6.519C8.065 17.772 7.218 15.497 7.037 13H4.064Zm12.9 0c-.168 2.465-.95 4.723-2.099 6.469A8.004 8.004 0 0 0 19.935 13h-2.97Zm-2.226-8.52c1.196 1.748 2.044 4.023 2.225 6.52h2.973a8.007 8.007 0 0 0-5.198-6.52ZM12 4.312C10.534 5.723 9.285 8.145 9.043 11h5.914c-.242-2.856-1.49-5.277-2.957-6.688Zm-2.74.168A8.007 8.007 0 0 0 4.065 11h2.973c.181-2.497 1.028-4.772 2.224-6.52Z"
        }
      )
    );
  }
);
IconGlobe[iconSymbol] = true;
var IconGoogleDrive = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m6.835 21 3.08-6h12.072l-3.331 6H6.835Zm8.49-7h6.662L15.325 3H8.662l6.663 11ZM2 15l3.331 6 5.663-11-3.332-6L2 15Z"
        }
      )
    );
  }
);
IconGoogleDrive[iconSymbol] = true;
var IconGraduationCap = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "m23.43 7.097.017 1.798L21 10.118V17l-.629.929-7.5 3h-.742l-7.5-3L4 17v-6.777L3 9.68V19H1V8l.57-.903 10.5-5h.86l10.5 5Zm-10.511 6.811-.826.005L6 11.2v5.123l6.5 2.6 6.5-2.6v-5.22l-6.081 2.806Zm-8.716-5.85 1.56.846 6.728 2.997 6.077-2.803 2.15-1.077L12.5 4.107l-8.297 3.95Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconGraduationCap[iconSymbol] = true;
var IconGridFour = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14Zm-6 11v7h6a1 1 0 0 0 1-1v-6h-7Zm-9 6a1 1 0 0 0 1 1h6v-7H4v6Zm9-8h7V5a1 1 0 0 0-1-1h-6v7ZM5 4a1 1 0 0 0-1 1v6h7V4H5Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconGridFour[iconSymbol] = true;
var IconGridSix = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M13 20h7v-4h-7v4Zm-9 0h7v-4H4v4Zm9-6h7v-4h-7v4Zm-9 0h7v-4H4v4Zm9-6h7V4h-7v4ZM4 8h7V4H4v4Zm18 12.75c0 .69-.56 1.25-1.25 1.25H3.25C2.56 22 2 21.44 2 20.75V3.25C2 2.56 2.56 2 3.25 2h17.5c.69 0 1.25.56 1.25 1.25v17.5Z"
        }
      )
    );
  }
);
IconGridSix[iconSymbol] = true;
var IconGrid = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M17 19h-4v3h-2v-3H7v3H5v-3H2v-2h3v-4H2v-2h3V7H2V5h3V2h2v3h4V2h2v3h4V2h2v3h3v2h-3v4h3v2h-3v4h3v2h-3v3h-2v-3Zm-4-2h4v-4h-4v4Zm-6 0h4v-4H7v4Zm6-6h4V7h-4v4Zm-6 0h4V7H7v4Z"
        }
      )
    );
  }
);
IconGrid[iconSymbol] = true;
var IconHandFilled = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M13.857 3.5c0-.828-.608-1.5-1.357-1.5-.75 0-1.357.672-1.357 1.5V11h-1.024V5.812c0-.5-.19-1.5-1.19-1.5s-1.5.672-1.5 1.5v8.55C6.491 13.676 5.407 12.867 5 12.5c-.776-.697-2.073-.646-2.603-.06-.53.585-.397 1.56 0 2.12L7 19.5c1.428 1.25 3.5 2.5 5.407 2.5h1.355c2.451 0 3.37-.56 4.238-1.25.454-.36 1.08-.98 1.55-1.75.85-1.393 1.2-4 1.2-5V8c0-.828-.608-1.5-1.357-1.5-.75 0-1.143.672-1.143 1.5v3h-.894V5.69c0-.829-.465-1.5-1.214-1.5-.75 0-1.286.671-1.286 1.5V11h-1V3.5Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconHandFilled[iconSymbol] = true;
var IconHandPointing = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M4.173 12.834a.685.685 0 0 0-.834.027l-.094.094a.683.683 0 0 0 .043.919l4.003 4.003A7.248 7.248 0 0 0 12.417 20H13a7 7 0 0 0 7-7v-2.25a.75.75 0 0 0-1.5 0V12h-2V9.25l-.004-.077A.75.75 0 0 0 15 9.25V12h-2V7.75a.75.75 0 0 0-1.5 0V12h-2V4.75L8.75 4a.75.75 0 0 0-.746.673L8 4.75v8.879l-1.582.812-2.245-1.607ZM11.5 5.106a2.75 2.75 0 0 1 3.283 1.571 2.75 2.75 0 0 1 3.5 1.5A2.75 2.75 0 0 1 22 10.75v2.251a9 9 0 0 1-9 9h-.583a9.248 9.248 0 0 1-6.54-2.709l-4.003-4.003a2.684 2.684 0 0 1-.173-3.605l.177-.194a2.685 2.685 0 0 1 3.459-.281l.663.475V4.75a2.75 2.75 0 0 1 5.5 0v.356Z"
        }
      )
    );
  }
);
IconHandPointing[iconSymbol] = true;
var IconHandRaisedFilled = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M10.19 3.5c0-.828.608-1.5 1.358-1.5.75 0 1.357.672 1.357 1.5V11h1.024V5.812c0-.5.19-1.5 1.19-1.5s1.5.672 1.5 1.5v8.55c.937-.686 2.021-1.495 2.429-1.862.776-.697 2.073-.646 2.603-.06.53.585.397 1.56 0 2.12l-4.603 4.94c-1.429 1.25-3.5 2.5-5.408 2.5h-1.354c-2.451 0-3.37-.56-4.238-1.25A7.005 7.005 0 0 1 4.498 19c-.85-1.393-1.2-4-1.2-5V8c0-.828.608-1.5 1.357-1.5.75 0 1.143.672 1.143 1.5v3h.894V5.69c0-.829.465-1.5 1.214-1.5.75 0 1.286.671 1.286 1.5V11h.999V3.5Z"
        }
      )
    );
  }
);
IconHandRaisedFilled[iconSymbol] = true;
var IconHand = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M7.009 6.503c.04-.576.225-1.15.598-1.616C8.054 4.33 8.717 4 9.5 4c.198 0 .389.022.57.063.088-.423.26-.83.537-1.176C11.054 2.33 11.717 2 12.5 2c.782 0 1.446.33 1.893.887.277.346.448.753.536 1.175.181-.04.372-.062.571-.062.782 0 1.446.33 1.893.887.279.348.45.757.537 1.181.178-.044.368-.068.57-.068.888 0 1.553.465 1.957 1.07.384.576.543 1.282.543 1.93v4c0 2.319-.455 4.532-1.535 6.2-1.044 1.612-2.645 2.662-4.78 2.787L14.25 22h-1.5c-2.343 0-4.202-1.038-5.873-2.709l-4.003-4.003a2.684 2.684 0 0 1-.173-3.605l.177-.194a2.685 2.685 0 0 1 3.459-.281l.663.475V6.75l.009-.247ZM9 13.629l-1.582.812-2.245-1.607a.685.685 0 0 0-.834.027l-.094.094a.683.683 0 0 0 .043.919l4.003 4.003C9.714 19.3 11.093 20 12.75 20h1.5l.303-.008c1.482-.082 2.519-.776 3.233-1.879C18.581 16.886 19 15.1 19 13V9c0-.352-.09-.646-.207-.82-.096-.145-.18-.18-.293-.18-.112 0-.197.035-.293.18-.116.174-.207.468-.207.82v3h-2V6.75c0-.31-.086-.51-.167-.611C15.771 6.062 15.684 6 15.5 6c-.184 0-.271.062-.333.139-.081.1-.167.301-.167.611V12h-2V4.75c0-.31-.087-.51-.168-.611C12.77 4.062 12.684 4 12.5 4c-.184 0-.271.062-.333.139-.08.1-.167.301-.167.611V12h-2V6.75c0-.31-.086-.51-.167-.611C9.771 6.062 9.684 6 9.5 6c-.184 0-.271.062-.333.139-.081.1-.167.301-.167.611v6.879Z"
        }
      )
    );
  }
);
IconHand[iconSymbol] = true;
var IconHeadphones = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M12 3c5.027 0 9 4.311 9 9.5v.258A4.5 4.5 0 0 1 18.5 21c-.974 0-1.77-.324-2.309-.632l-.047-.027-.044-.032-.688-.5-.36-1.125 2-6L18 12h.5c.164 0 .325.01.484.026C18.755 8.055 15.665 5 12 5s-6.756 3.054-6.985 7.026A4.55 4.55 0 0 1 5.5 12H6l.948.684 2 6-.36 1.125-.688.5-.044.032-.047.027A4.665 4.665 0 0 1 5.5 21 4.5 4.5 0 0 1 3 12.758V12.5C3 7.311 6.973 3 12 3ZM5.283 14.01A2.5 2.5 0 0 0 5.5 19a2.65 2.65 0 0 0 1.277-.348l.042-.03-1.536-4.611Zm11.898 4.611.042.031c.332.184.77.348 1.277.348a2.5 2.5 0 0 0 .217-4.99l-1.536 4.611Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconHeadphones[iconSymbol] = true;
var IconHeadsetPerson = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M12 2.875c2.184 0 4.415.646 6.121 1.997C19.854 6.244 21 8.311 21 11l1 1v5l-1 1v2a1 1 0 0 1-1 1h-8v-2h7v-8c0-2.06-.854-3.556-2.121-4.56C15.585 5.417 13.816 4.875 12 4.875c-1.816 0-3.585.542-4.879 1.565C5.854 7.444 5 8.94 5 11v6l-1 1H3l-1-1v-5l1-1c0-2.69 1.146-4.756 2.879-6.128C7.585 3.521 9.816 2.875 12 2.875ZM9.5 12a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-2.448-6a6.04 6.04 0 0 1 5.95 5.03c-3.12-.03-5.81-1.84-7.12-4.47a8.076 8.076 0 0 1-4.86 5.89c-.26-3.94 3-6.45 6.03-6.45Z"
        }
      )
    );
  }
);
IconHeadsetPerson[iconSymbol] = true;
var IconHeartFilled = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M16.925 3.016C20.533 2.743 23 5.704 23 9c0 2.62-1.633 4.99-3.614 7.037-2.004 2.07-4.574 4.019-6.767 5.748h-1.238c-2.2-1.734-4.765-3.707-6.769-5.793C2.637 13.936 1 11.565 1 9c0-3.296 2.467-6.257 6.075-5.984A6.488 6.488 0 0 1 12 5.902a6.488 6.488 0 0 1 4.925-2.886Z"
        }
      )
    );
  }
);
IconHeartFilled[iconSymbol] = true;
var IconHeartMusicNote = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M13 6.647c0-.99-.722-1.712-1.678-1.642C10.15 5.09 9.5 6.052 9.5 6.647h-2l-.008-.116c-.076-.597-.714-1.446-1.814-1.526C4.722 4.935 4 5.657 4 6.647c0 .712.5 1.585 1.541 2.628.847.849 1.905 1.669 2.959 2.47 1.057-.8 2.114-1.606 2.96-2.45C12.498 8.266 13 7.393 13 6.648Zm2 0c0 1.595-1.025 2.97-2.128 4.067-1.13 1.123-2.575 2.178-3.768 3.083H7.896c-1.2-.91-2.64-1.977-3.77-3.109C3.029 9.59 2 8.214 2 6.648 2 4.641 3.567 2.845 5.822 3.01A4.06 4.06 0 0 1 8.5 4.28a4.06 4.06 0 0 1 2.678-1.27C13.433 2.846 15 4.642 15 6.647Zm5.122 3.686a3 3 0 0 1 .183 4.41l-.464.464-1.414-1.414.464-.464a1 1 0 0 0-.062-1.47L18 11.157V18a3 3 0 1 1-2-2.826V9l1.646-.764 2.476 2.097ZM15 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconHeartMusicNote[iconSymbol] = true;
var IconHeartPlusMusic = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M20.938 11.33a3 3 0 0 1 .183 4.41l-.464.464-1.414-1.414.464-.463a1 1 0 0 0-.062-1.47l-.829-.702v6.842a3 3 0 1 1-2-2.825V9.998l1.646-.764 2.476 2.097Zm-5.122 6.667a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM7 14v3h3v2H7v3H5v-3H2v-2h3v-3h2Zm9.252-8.352c0 1.595-1.025 2.97-2.128 4.067-.999.992-2.244 1.931-3.343 2.761l-.425.321H9.148l-.277-.21c-1.14-.862-2.449-1.852-3.493-2.898-1.097-1.098-2.126-2.474-2.126-4.04 0-2.007 1.567-3.803 3.822-3.638a4.06 4.06 0 0 1 2.678 1.27 4.06 4.06 0 0 1 2.678-1.27c2.255-.164 3.822 1.632 3.822 3.637Zm-3.678-1.642c.956-.07 1.678.652 1.678 1.642 0 .745-.502 1.619-1.54 2.648-.846.844-1.903 1.65-2.96 2.45-1.054-.801-2.112-1.621-2.96-2.47-1.04-1.043-1.54-1.916-1.54-2.628 0-.99.722-1.712 1.678-1.642 1.1.08 1.738.929 1.814 1.526l.008.116h2c0-.595.65-1.557 1.822-1.642Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconHeartPlusMusic[iconSymbol] = true;
var IconHeart = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M21 9c0-2.362-1.695-4.158-3.925-3.989C14.563 5.201 13 7.356 13 9.001h-2l-.005-.157c-.094-1.621-1.636-3.649-4.07-3.833C4.695 4.842 3 6.638 3 9.001c0 1.738 1.142 3.615 3.055 5.606C7.768 16.39 9.935 18.1 12 19.727c2.07-1.625 4.234-3.31 5.947-5.08C19.855 12.676 21 10.799 21 9Zm2 0c0 2.62-1.633 4.99-3.614 7.037-2.004 2.071-4.574 4.019-6.767 5.748h-1.238c-2.2-1.734-4.765-3.707-6.769-5.793C2.637 13.936 1 11.565 1 9c0-3.296 2.467-6.257 6.075-5.984A6.488 6.488 0 0 1 12 5.903a6.488 6.488 0 0 1 4.925-2.887C20.533 2.743 23 5.704 23 9Z"
        }
      )
    );
  }
);
IconHeart[iconSymbol] = true;
var IconHexagon = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M17 2a1 1 0 0 1 .874.515l5 9a1 1 0 0 1 0 .97l-5 9A1 1 0 0 1 17 22H7a1 1 0 0 1-.874-.515l-5-9a1 1 0 0 1 0-.97l5-9 .073-.114A1 1 0 0 1 7 2h10ZM3.144 12l4.444 8h8.824l4.444-8-4.444-8H7.588l-4.444 8Z"
        }
      )
    );
  }
);
IconHexagon[iconSymbol] = true;
var IconHighlighterColorSelection = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "m17.157 1.343 5.5 5.5-.006 1.32-10.148 9.969-1.542-.514a.93.93 0 0 0-.951.225l-.814.814-.84.254-4.648-.929-.475-1.569 2.674-2.674a.93.93 0 0 0 .224-.95l-.333-1.002-.186-.556 10.241-9.899 1.304.01Zm-9.41 10.41.149.447a2.79 2.79 0 0 1-.674 2.855l-1.447 1.444 2.457.491.463-.462a2.79 2.79 0 0 1 2.854-.673l.462.153 4.884-4.799-4.221-4.22-4.928 4.764Zm6.264-6.057 4.21 4.21 2.458-2.413-4.19-4.19-2.478 2.393Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconHighlighterColorSelection[iconSymbol] = true;
var IconHighlighterUnderline = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M20.839 22h-18v-2h18v2ZM17.157 1.343l5.5 5.5-.006 1.32-10.148 9.969-1.542-.514a.93.93 0 0 0-.951.225l-.814.814-.84.254-4.648-.929-.475-1.569 2.674-2.674a.93.93 0 0 0 .224-.95l-.333-1.002-.186-.556 10.241-9.899 1.304.01Zm-9.41 10.41.149.447a2.79 2.79 0 0 1-.674 2.855l-1.447 1.444 2.457.491.463-.462a2.79 2.79 0 0 1 2.854-.673l.462.153 4.884-4.799-4.221-4.22-4.928 4.764Zm6.264-6.057 4.21 4.21 2.458-2.413-4.19-4.19-2.478 2.393Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconHighlighterUnderline[iconSymbol] = true;
var IconHighlighter = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M12.737 2.676 8.531 7.264a1 1 0 0 0 .03 1.382l7.674 7.675a1 1 0 0 0 1.442-.029l4.589-4.97 1.468 1.357-4.588 4.97a3 3 0 0 1-3.46.689l-1.917 2.303-1.454.087-.63-.593-.828 1.38L10 22v-1l-.001-.001L10 22H1v-3l.18-.573 3.452-4.93-.817-.77.045-1.496 2.621-2.184a2.999 2.999 0 0 1 .577-3.134l4.205-4.589 1.474 1.352ZM3 19.315v.684h6.434l.76-1.268-4.09-3.85L3 19.314Zm3.007-7.27 6.904 6.498 1.217-1.46-6.667-6.25-1.454 1.212Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconHighlighter[iconSymbol] = true;
var IconHorizontalBlocks = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M5 15v4h10v-4H5Zm12 4a2 2 0 0 1-2 2H5a2 2 0 0 1-1.99-1.796L3 19v-4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4ZM5 5v4h14V5H5Zm16 4a2 2 0 0 1-2 2H5a2 2 0 0 1-1.99-1.796L3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4Z"
        }
      )
    );
  }
);
IconHorizontalBlocks[iconSymbol] = true;
var IconHouse = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m12.53 2.152 8 5L21 8v13l-1 1h-5.5l-1-1v-4h-3v4l-1 1H4l-1-1V8l.47-.848 8-5h1.06ZM5 8.554V20h3.5v-4l1-1h5l1 1v4H19V8.554l-7-4.375-7 4.375Z"
        }
      )
    );
  }
);
IconHouse[iconSymbol] = true;
var IconImageSparkle = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M12 2v2H5a1 1 0 0 0-1 1v9.148l2.219-2.773L7 11h2l.747.336L17.448 20H19a1 1 0 0 0 1-1v-7h2v7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h7ZM4 17.352V19a1 1 0 0 0 1 1h9.773l-6.221-7h-1.07L4 17.352ZM19.25 1A3.75 3.75 0 0 0 23 4.75v1.5A3.75 3.75 0 0 0 19.25 10h-1.5A3.75 3.75 0 0 0 14 6.25v-1.5A3.75 3.75 0 0 0 17.75 1h1.5Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconImageSparkle[iconSymbol] = true;
var IconImage = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M19 6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6Zm2 12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12Zm-5-9a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-8.429 2 .734.32 7.427 8-1.464 1.36L9.136 13h-.954l-3.414 4.086-1.536-1.283 3.715-4.445.767-.358H9.57Z"
        }
      )
    );
  }
);
IconImage[iconSymbol] = true;
var IconIndentLeft = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20 19H4v-2h16v2ZM7.5 10.5v3l-.724.447-3-1.5v-.894l3-1.5.724.447ZM20 13H10v-2h10v2Zm0-6H4V5h16v2Z"
        }
      )
    );
  }
);
IconIndentLeft[iconSymbol] = true;
var IconIndentRight = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20 19H4v-2h16v2ZM7.224 11.553v.894l-3 1.5L3.5 13.5v-3l.724-.447 3 1.5ZM20 13H10v-2h10v2Zm0-6H4V5h16v2Z"
        }
      )
    );
  }
);
IconIndentRight[iconSymbol] = true;
var IconInformationMarkCircle = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20 12a8 8 0 1 0-16 0 8 8 0 0 0 16 0Zm2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-9-1v6h-2v-4H9.5v-2H13Zm.5-2.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        }
      )
    );
  }
);
IconInformationMarkCircle[iconSymbol] = true;
var IconInsightsSearch = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M19.75 17.375a2.375 2.375 0 1 0-4.75 0 2.375 2.375 0 0 0 4.75 0ZM15 10v2h-5v-2h5Zm5.585-5a1 1 0 0 0-.897-.995L19.585 4h-10a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1H11v2H9.585a3 3 0 0 1-3-3V8.65l-1.758.309a1.001 1.001 0 0 0-.811 1.16l1.736 9.847a1 1 0 0 0 1.158.811l4.925-.868.347 1.97-4.924.868a3 3 0 0 1-3.476-2.433l-1.736-9.85A3 3 0 0 1 4.48 6.99l2.105-.372V5a3 3 0 0 1 3-3h10l.154.004A3 3 0 0 1 22.585 5v7h-2V5ZM19 6v2h-9V6h9Zm2.75 11.375c0 .846-.24 1.635-.656 2.305l2.613 2.613-1.414 1.414-2.614-2.614a4.375 4.375 0 1 1 2.071-3.718Z"
        }
      )
    );
  }
);
IconInsightsSearch[iconSymbol] = true;
var IconInsights = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M15 2a3 3 0 0 1 3 3v1.618l2.105.371a3 3 0 0 1 2.434 3.476l-1.736 9.849a3 3 0 0 1-3.476 2.433L7.48 21.01A3 3 0 0 1 5.001 18 3 3 0 0 1 2 15V5a3 3 0 0 1 3-3h10Zm3 13a3 3 0 0 1-3 3H7.003a1 1 0 0 0 .824 1.041l9.848 1.736a1 1 0 0 0 1.158-.811l1.736-9.848a1 1 0 0 0-.81-1.159L18 8.649V15ZM5 4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconInsights[iconSymbol] = true;
var IconIosShare = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m12.707.293 4 4-1.414 1.414L13 3.414V13h-2V3.414L8.707 5.707 7.293 4.293l4-4h1.414ZM3 19V9a2 2 0 0 1 2-2h4v2H5v10h14V9h-4V7h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"
        }
      )
    );
  }
);
IconIosShare[iconSymbol] = true;
var IconKanban = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M19.5 2A2.5 2.5 0 0 1 22 4.5v9a2.5 2.5 0 0 1-2.5 2.5H13v3a3 3 0 0 1-3 3H4.5A2.5 2.5 0 0 1 2 19.5v-15A2.5 2.5 0 0 1 4.5 2h15ZM5 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V4H5Zm8 0v10h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-6Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconKanban[iconSymbol] = true;
var IconKey = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M4.5 17a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM7 4a5.001 5.001 0 0 1 4.9 4H21l1 1v5h-2v-4h-2v4h-2v-4h-4.1A5.001 5.001 0 1 1 7 4Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconKey[iconSymbol] = true;
var IconKeycapSingle = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20 5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5Zm2 14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14ZM12.026 7.596c.602 0 1.145.098 1.618.305.474.207.859.502 1.136.892.284.392.42.852.42 1.361v.38h-1.976l-.027-.35a.717.717 0 0 0-.135-.348.9.9 0 0 0-.375-.294l-.008-.005c-.159-.08-.385-.13-.698-.13-.399 0-.694.088-.912.238-.18.125-.272.296-.272.561 0 .164.04.26.089.32.077.088.18.166.32.229.165.067.35.121.552.161.224.044.442.085.656.124a7.94 7.94 0 0 1 1.398.365c.458.162.84.412 1.132.755.32.372.456.868.456 1.434 0 .585-.15 1.106-.464 1.546-.305.427-.73.743-1.257.954-.52.21-1.113.31-1.773.31-.613 0-1.17-.09-1.66-.277-.495-.189-.9-.471-1.197-.856l-.001-.003c-.304-.401-.448-.88-.448-1.416v-.38h2.018l.048.325a.947.947 0 0 0 .168.43c.072.098.187.19.368.263l.149.046c.162.04.365.064.615.064.38 0 .653-.054.838-.137l.002-.001c.209-.092.33-.2.398-.305a.727.727 0 0 0 .116-.408c0-.213-.06-.32-.131-.383-.117-.103-.293-.197-.55-.265l-.006-.002a11.37 11.37 0 0 0-.953-.223l-.005-.001a10.87 10.87 0 0 1-1.375-.368l-.005-.002a2.591 2.591 0 0 1-1.107-.74c-.316-.368-.448-.861-.448-1.425 0-.616.153-1.155.49-1.583.322-.409.74-.707 1.24-.893h.002a4.481 4.481 0 0 1 1.554-.268Z"
        }
      )
    );
  }
);
IconKeycapSingle[iconSymbol] = true;
var IconKeycap = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M14 8h-3v6H9V8H6V6h8v2Zm5-6a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14ZM5 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconKeycap[iconSymbol] = true;
var IconLaptop = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M19 7a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v6H3V7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v6h-2V7Zm2 8a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1h18ZM4 18a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1h-6v1h-4v-1H4v1Z"
        }
      )
    );
  }
);
IconLaptop[iconSymbol] = true;
var IconLasso = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M21.76 8.64a7.327 7.327 0 0 1 .227 2.27l-.003.06a7.463 7.463 0 0 1-.033.367l-.01.094-.008.05c-.26 1.966-1.293 3.687-2.807 4.985a9.932 9.932 0 0 1-.226.187 10.02 10.02 0 0 1-1.747 1.136l-.003-.006a11.189 11.189 0 0 1-3.383 1.08v.005c-.082.013-.166.022-.25.032l-.065.01c-.132.015-.265.03-.398.041l-.081.008c-.127.01-.254.018-.382.024l-.115.006a12.097 12.097 0 0 1-.921.002c-.031 0-.062-.003-.093-.005-.11-.005-.22-.01-.33-.018a8.677 8.677 0 0 1-.237-.022l-.192-.018c-.078-.009-.155-.02-.232-.03-.062-.008-.123-.014-.184-.023l-.055-.007v-.002c-.335-.05-.665-.116-.989-.194a3.516 3.516 0 0 1-.8.74A4.2 4.2 0 0 1 8.75 21c0 .948-.313 1.977-1.043 2.707l-1.414-1.414c.27-.27.457-.741.457-1.293a2.07 2.07 0 0 0-.242-1.001L6.5 20a3.5 3.5 0 1 1 3.486-3.21c.643.136 1.317.21 2.014.21 1.588 0 3.033-.367 4.245-.988l-.002-.004a7.982 7.982 0 0 0 1.503-.993C19.158 13.82 20 12.205 20 10.5c0-.464-.06-.917-.174-1.353l1.935-.506ZM6.5 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM4.174 9.147a5.329 5.329 0 0 0 0 2.705l-1.935.507a7.33 7.33 0 0 1 0-3.718l1.935.506Zm3.583-4.155A7.651 7.651 0 0 0 5.49 6.727l-1.5-1.322a9.65 9.65 0 0 1 2.856-2.194l.91 1.781Zm9.396-1.781a9.652 9.652 0 0 1 2.857 2.194l-1.501 1.322a7.651 7.651 0 0 0-2.266-1.735l.91-1.781ZM12 2c.602 0 1.193.045 1.768.132l-.3 1.977a9.823 9.823 0 0 0-2.937 0l-.299-1.977A11.818 11.818 0 0 1 12 2Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconLasso[iconSymbol] = true;
var IconLayeredBoxesCheck = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M15 5V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1m13-7V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1m12-9H10a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1Zm-1.714 3L14 18l-2.571-3"
        }
      )
    );
  }
);
IconLayeredBoxesCheck[iconSymbol] = true;
var IconLayout = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14Zm-9 18h9a1 1 0 0 0 1-1v-9H10v10Zm-6-1a1 1 0 0 0 1 1h3V10H4v9ZM5 4a1 1 0 0 0-1 1v3h16V5a1 1 0 0 0-1-1H5Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconLayout[iconSymbol] = true;
var IconLifesaver = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M4.929 4.929c3.905-3.906 10.237-3.906 14.142 0 3.905 3.905 3.905 10.237 0 14.142-3.905 3.905-10.237 3.905-14.142 0-3.906-3.905-3.906-10.237 0-14.142Zm9.828 11.242a5.004 5.004 0 0 1-5.515 0l-2.146 2.146a7.998 7.998 0 0 0 9.807 0l-2.146-2.146ZM5.682 7.096a7.999 7.999 0 0 0 0 9.807l2.146-2.146a5.005 5.005 0 0 1 0-5.515L5.682 7.096ZM16.17 9.242a5.004 5.004 0 0 1 0 5.515l2.146 2.146a7.998 7.998 0 0 0 0-9.807L16.17 9.242Zm-2.05.637a3 3 0 1 0-4.24 4.241 3 3 0 0 0 4.242-4.242Zm2.782-4.197a7.999 7.999 0 0 0-9.807 0l2.146 2.146a5.005 5.005 0 0 1 5.515 0l2.146-2.146Z"
        }
      )
    );
  }
);
IconLifesaver[iconSymbol] = true;
var IconLightbox = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M13 3h6a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2.583l1.25 3H15.5l-1.25-3h-4.5L8.5 22H6.333l1.25-3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h6V1h2v2ZM4 16a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1H4v1Zm0-7v4h16V9H4Zm1-4a1 1 0 0 0-1 1v1h16V6a1 1 0 0 0-1-1H5Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconLightbox[iconSymbol] = true;
var IconLightbulb = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M17 9A5 5 0 0 0 7 9c0 1.812.969 3.249 2.501 4.135L10 14v2h4v-2l.499-.865C16.031 12.249 17 10.812 17 9Zm2 0c0 2.41-1.215 4.329-3 5.548V17l-1 1H9l-1-1v-2.452C6.215 13.328 5 11.41 5 9a7 7 0 0 1 14 0Zm-4 11H9v1l1.5 1h3l1.5-1v-1Z"
        }
      )
    );
  }
);
IconLightbulb[iconSymbol] = true;
var IconLightning = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M13 1v7h7l.855 1.519-8.5 14L10.5 23v-7H4l-.868-1.496 8-14L13 1ZM5.723 14H11.5l1 1v4.427L18.224 10H12l-1-1V4.765L5.723 14Z"
        }
      )
    );
  }
);
IconLightning[iconSymbol] = true;
var IconLineCurved = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M6.804 8.02c1.453-.291 2.638.144 3.61.863.92.682 1.694 1.655 2.365 2.49.713.888 1.323 1.638 1.997 2.136.626.463 1.248.666 2.028.51.894-.178 1.997-.817 2.952-1.5a19.102 19.102 0 0 0 1.542-1.232l.02-.018.004-.005a1 1 0 0 1 1.356 1.471l-.003.003-.009.008-.027.024-.1.09a21.107 21.107 0 0 1-1.62 1.286c-.987.706-2.384 1.566-3.723 1.834-1.453.29-2.638-.144-3.61-.862-.921-.682-1.694-1.656-2.365-2.492-.713-.887-1.323-1.637-1.997-2.136-.625-.463-1.248-.666-2.028-.51-.894.179-1.997.819-2.952 1.501a19.1 19.1 0 0 0-1.459 1.157l-.083.075-.02.018a.065.065 0 0 0-.003.004l-1.357-1.47.003-.004.009-.006.027-.026c.024-.02.057-.05.1-.089.086-.075.21-.184.364-.313a21.71 21.71 0 0 1 1.256-.973c.987-.705 2.384-1.567 3.723-1.835Zm-4.125 4.715a1.001 1.001 0 0 1-1.356-1.47l1.356 1.47Z"
        }
      )
    );
  }
);
IconLineCurved[iconSymbol] = true;
var IconLineDashed = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M6 11a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2h4Zm8 0a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2h4Zm8 0a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2h4Z"
        }
      )
    );
  }
);
IconLineDashed[iconSymbol] = true;
var IconLineDiagonal = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M19.293 3.293a1 1 0 1 1 1.414 1.414l-16 16a1 1 0 1 1-1.414-1.414l16-16Z"
        }
      )
    );
  }
);
IconLineDiagonal[iconSymbol] = true;
var IconLineDotted = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M3 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        }
      )
    );
  }
);
IconLineDotted[iconSymbol] = true;
var IconLineHorizontal = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)("path", { fill: "currentColor", d: "M21 11a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2h18Z" })
    );
  }
);
IconLineHorizontal[iconSymbol] = true;
var IconLineOrthogonal = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M22 7a1 1 0 1 1 0 2h-9v7a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h9V8l.005-.103A1 1 0 0 1 12 7h10Z"
        }
      )
    );
  }
);
IconLineOrthogonal[iconSymbol] = true;
var IconLineStraight = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20.684 8.052a1 1 0 1 1 .632 1.896l-18 6a1 1 0 0 1-.632-1.896l18-6Z"
        }
      )
    );
  }
);
IconLineStraight[iconSymbol] = true;
var IconLineTwoDiagonalTopRightDouble = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m6.707 18.707-1.414-1.414 12-12 1.414 1.414-12 12Zm7 0-1.414-1.414 5-5 1.414 1.414-5 5Z"
        }
      )
    );
  }
);
IconLineTwoDiagonalTopRightDouble[iconSymbol] = true;
var IconLineVertical = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)("path", { fill: "currentColor", d: "M14 20h-2V4h2v16Z" })
    );
  }
);
IconLineVertical[iconSymbol] = true;
var IconLinear = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M2.245 14.304c-.044-.19.182-.31.32-.17l7.302 7.302c.138.137.018.363-.171.319a10.023 10.023 0 0 1-7.45-7.451ZM2 11.377a.2.2 0 0 0 .059.153L12.47 21.94a.2.2 0 0 0 .153.059c.473-.03.938-.093 1.392-.186a.194.194 0 0 0 .095-.33L2.515 9.89a.194.194 0 0 0-.329.095c-.093.454-.156.919-.186 1.392Zm.843-3.436a.198.198 0 0 0 .04.22L15.84 21.116a.198.198 0 0 0 .22.041 9.773 9.773 0 0 0 1.037-.537.196.196 0 0 0 .037-.308L3.688 6.867a.196.196 0 0 0-.309.037 9.99 9.99 0 0 0-.536 1.037Zm1.689-2.326a.198.198 0 0 1-.01-.27A9.985 9.985 0 0 1 11.99 2C17.518 2 22 6.482 22 12.01a9.985 9.985 0 0 1-3.344 7.467.198.198 0 0 1-.27-.009L4.531 5.615Z"
        }
      )
    );
  }
);
IconLinear[iconSymbol] = true;
var IconLinesThreeHorizontalLineVerticalCenter = (0, import_react33.forwardRef)(({ size = "medium", ...props }, forwardRef22) => {
  const [debug] = useLocalStorage("DEBUG_ICON", false);
  return (0, import_react33.createElement)(
    StyledIcon,
    {
      ...props,
      debug,
      "aria-hidden": true,
      size,
      viewBox: "0 0 24 24",
      fill: "none",
      ref: forwardRef22
    },
    (0, import_jsx_runtime4.jsx)(
      "path",
      {
        fill: "currentColor",
        d: "M13 6h7V4H4v2h7v5H4v2h7v5H4v2h16v-2h-7v-5h7v-2h-7V6Z"
      }
    )
  );
});
IconLinesThreeHorizontalLineVerticalCenter[iconSymbol] = true;
var IconLinesThreeHorizontal = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20 18v2H4v-2h16Zm0-7v2H4v-2h16Zm0-7v2H4V4h16Z"
        }
      )
    );
  }
);
IconLinesThreeHorizontal[iconSymbol] = true;
var IconLinesThreeVertical = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M6 20H4V4h2v16Zm7 0h-2V4h2v16Zm7 0h-2V4h2v16Z"
        }
      )
    );
  }
);
IconLinesThreeVertical[iconSymbol] = true;
var IconLinesTopLeftColumnsTwo = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M4 22H2V6h2v16ZM19 6a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h10ZM9 8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4V8H9Zm6 12h4a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-4v12Zm7-16H6V2h16v2Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconLinesTopLeftColumnsTwo[iconSymbol] = true;
var IconLinkPlus = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m7.708 10.707-2.5 2.5a3.949 3.949 0 0 0 5.438 5.726l.146-.14.5-.5 1.415 1.415-.5.5-.222.21a5.95 5.95 0 0 1-8.193-8.626l2.5-2.5 1.416 1.415Zm4.307-7.125a5.95 5.95 0 0 1 8.192.21l.193.203c1.938 2.122 2.135 5.333.394 7.612l-1.588-1.214c1.13-1.481 1.027-3.616-.283-5.05l-.13-.136a3.95 3.95 0 0 0-5.438-.14l-.148.14-2.5 2.5-1.415-1.415 2.5-2.5.223-.21Zm3.692 6.125-6 6-1.414-1.414 6-6 1.414 1.414ZM19 13v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2Z"
        }
      )
    );
  }
);
IconLinkPlus[iconSymbol] = true;
var IconLinkVariant = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M1 12c0-3.248 2.474-6 5.667-6H10v2H6.667C4.706 8 3 9.725 3 12s1.706 4 3.667 4H10v2H6.667c-3.094 0-5.512-2.583-5.66-5.697L1 12Zm20 0c0-2.275-1.706-4-3.667-4H14V6h3.333C20.527 6 23 8.752 23 12l-.007.303C22.845 15.417 20.427 18 17.333 18H14v-2h3.333C19.294 16 21 14.275 21 12Zm-4.757 1H7.757v-2h8.486v2Z"
        }
      )
    );
  }
);
IconLinkVariant[iconSymbol] = true;
var IconLink = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m7.707 10.707-2.5 2.5a3.95 3.95 0 0 0 5.586 5.586l2.5-2.5 1.414 1.414-2.5 2.5a5.95 5.95 0 1 1-8.414-8.414l2.5-2.5 1.414 1.414Zm4.086-6.914a5.95 5.95 0 1 1 8.414 8.414l-2.5 2.5-1.414-1.414 2.5-2.5a3.95 3.95 0 0 0-5.586-5.586l-2.5 2.5-1.414-1.414 2.5-2.5Zm3.914 5.914-6 6-1.414-1.414 6-6 1.414 1.414Z"
        }
      )
    );
  }
);
IconLink[iconSymbol] = true;
var IconListBullets = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M5 19H3v-2h2v2Zm16 0H7v-2h14v2ZM5 13H3v-2h2v2Zm16 0H7v-2h14v2ZM5 7H3V5h2v2Zm16 0H7V5h14v2Z"
        }
      )
    );
  }
);
IconListBullets[iconSymbol] = true;
var IconListNumbers = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m7 13 1 1v3l-1 1H4v1h4v2H3l-1-1v-3l1-1h3v-1H2v-2h5Zm15 3v2H10v-2h12ZM6 2l1 1v7H5V4H2V2h4Zm16 3v2H10V5h12Z"
        }
      )
    );
  }
);
IconListNumbers[iconSymbol] = true;
var IconLockClosed = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M12 2a5 5 0 0 1 5 5v3h2l1 1v7a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-7l1-1h2V7a5 5 0 0 1 5-5Zm-1.5 15.5h3v-3h-3v3ZM12 4a3 3 0 0 0-3 3v3h6V7a3 3 0 0 0-3-3Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconLockClosed[iconSymbol] = true;
var IconLockOpen = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M13.5 17.5h-3v-3h3v3ZM12 2a5 5 0 0 1 5 5v1h-2V7a3 3 0 1 0-6 0v3h10l1 1v7a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-7l1-1h2V7a5 5 0 0 1 5-5ZM6 18a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6H6v6Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconLockOpen[iconSymbol] = true;
var IconLogin = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-5v-2h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-5V2h5Zm-3.293 9.293v1.414l-4 4-1.414-1.414L12.586 13H2v-2h10.586l-2.293-2.293 1.414-1.414 4 4Z"
        }
      )
    );
  }
);
IconLogin[iconSymbol] = true;
var IconLogout = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-5v-2h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-5V2h5ZM6.707 8.707 4.414 11H15v2H4.414l2.293 2.293-1.414 1.414-4-4v-1.414l4-4 1.414 1.414Z"
        }
      )
    );
  }
);
IconLogout[iconSymbol] = true;
var IconMagnet = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m20 3 1 1v6h-9.507C10.131 9.99 9.01 11.107 9 12.507c-.01 1.362 1.107 2.483 2.507 2.493H21v7h-9.5a9.5 9.5 0 0 1 0-19H20Zm-3 17h2v-3h-2v3Zm.005-12H19V5h-1.98l-.015 3ZM4 12.5a7.5 7.5 0 0 0 7.5 7.5H15v-3h-3.507c-2.466-.018-4.51-2.003-4.493-4.507C7.018 10.03 9 7.986 11.5 8h3.505l.015-3H11.5A7.5 7.5 0 0 0 4 12.5Z"
        }
      )
    );
  }
);
IconMagnet[iconSymbol] = true;
var IconMagnifyingGlassLightning = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M15.29 2.114 13.044 5H14l.8 1.6-3 4-1.6-1.2L12.001 7H11l-.79-1.614 3.5-4.5 1.58 1.228Zm-6.455.983c.054-.01.11-.018.165-.026V5.1a5 5 0 1 0 6 4.9h2a6.97 6.97 0 0 1-1.394 4.192l5.101 5.1-1.414 1.415-5.1-5.1a7 7 0 1 1-5.358-12.51Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconMagnifyingGlassLightning[iconSymbol] = true;
var IconMagnifyingGlassMinus = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20 4v2h-8V4h8ZM3 10a7 7 0 0 1 7-7v2a5 5 0 1 0 4.93 5.835l1.973.33a6.97 6.97 0 0 1-1.297 3.026l5.101 5.102-1.414 1.414-5.103-5.103A7 7 0 0 1 3 10Z"
        }
      )
    );
  }
);
IconMagnifyingGlassMinus[iconSymbol] = true;
var IconMagnifyingGlassPlus = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M3 10a7 7 0 0 1 7-7v2a5 5 0 1 0 4.93 5.835l1.973.33a6.97 6.97 0 0 1-1.297 3.026l5.101 5.102-1.414 1.414-5.103-5.103A7 7 0 0 1 3 10Zm14-9v3h3v2h-3v3h-2V6h-3V4h3V1h2Z"
        }
      )
    );
  }
);
IconMagnifyingGlassPlus[iconSymbol] = true;
var IconMagnifyingGlass = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M15 10a5 5 0 1 0-10 0 5 5 0 0 0 10 0Zm2 0c0 1.572-.52 3.023-1.395 4.191l5.102 5.102-1.414 1.414-5.102-5.102A7 7 0 1 1 17 10Z"
        }
      )
    );
  }
);
IconMagnifyingGlass[iconSymbol] = true;
var IconMapUser = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M7 13a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-3 4a4.97 4.97 0 0 1 4.94 4.414l.054.474-1.988.224-.053-.474a2.972 2.972 0 0 0-5.906 0l-.053.474-1.988-.224.054-.474A4.972 4.972 0 0 1 6 17ZM9.316 3.052 15 4.946l5.684-1.894L22 4v14.5l-.615.923-6 2.5h-.77l-2.25-.938.77-1.845.75.312.115.048V6.72L9 5.054 4 6.72V8H2V6l.684-.948 6-2h.632ZM16 6.72V19.5l4-1.667V5.387L16 6.72Z"
        }
      )
    );
  }
);
IconMapUser[iconSymbol] = true;
var IconMap = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M9.316 3.052 15 4.946l5.684-1.894L22 4v14.5l-.615.923-6 2.5h-.77L9 19.583l-5.615 2.34L2 21V6l.684-.948 6-2h.632ZM4 6.72V19.5l4-1.667V5.387L4 6.72Zm6 11.113 4 1.667V6.72l-4-1.333v12.446ZM16 6.72V19.5l4-1.667V5.387L16 6.72Z"
        }
      )
    );
  }
);
IconMap[iconSymbol] = true;
var IconMarginAll = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M16 9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9Zm2 6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6Zm4 3h-2V6h2v12ZM4 18H2V6h2v12Zm14 2v2H6v-2h12Zm0-18v2H6V2h12Z"
        }
      )
    );
  }
);
IconMarginAll[iconSymbol] = true;
var IconMarginBottom = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M17 6a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6Zm2 8a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8Zm-1 5v2H6v-2h12Z"
        }
      )
    );
  }
);
IconMarginBottom[iconSymbol] = true;
var IconMarginLeftRight = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M16 9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9Zm2 6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6Zm4 3h-2V6h2v12ZM4 18H2V6h2v12Z"
        }
      )
    );
  }
);
IconMarginLeftRight[iconSymbol] = true;
var IconMarginLeft = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M19 8a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8Zm2 8a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8ZM5 18H3V6h2v12Z"
        }
      )
    );
  }
);
IconMarginLeft[iconSymbol] = true;
var IconMarginRight = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M15 8a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8Zm2 8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8Zm4 2h-2V6h2v12Z"
        }
      )
    );
  }
);
IconMarginRight[iconSymbol] = true;
var IconMarginTopBottom = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M16 9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9Zm2 6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6Zm1 5v2H5v-2h14Zm0-18v2H5V2h14Z"
        }
      )
    );
  }
);
IconMarginTopBottom[iconSymbol] = true;
var IconMarginTop = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M17 10a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8Zm2 8a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8ZM18 3v2H6V3h12Z"
        }
      )
    );
  }
);
IconMarginTop[iconSymbol] = true;
var IconMeasurePencil = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M19.707 19.293 19 21H4l-1-1V5l1.707-.707 15 15ZM5 11h2v2H5v2h2v2H5v2h11.586L5 7.414V11Zm4.793-8.207a3.121 3.121 0 0 1 4.414 0l6.964 6.964.81 4.046-1.177 1.177-3.75-.75-.297-.058-.214-.215-6.75-6.75a3.121 3.121 0 0 1 0-4.414ZM13.414 8l4.328 4.328 1.983.396-.397-1.982L15 6.414 13.414 8Zm-.621-3.793a1.122 1.122 0 0 0-1.586 1.586l.793.793L13.586 5l-.793-.793Z"
        }
      )
    );
  }
);
IconMeasurePencil[iconSymbol] = true;
var IconMegaphone = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "m11.71 5.026-4.843.537a5.47 5.47 0 0 0-.002 10.873L7 16.45V21l1 1h4a1 1 0 0 0 1-1v-3.382l4.555 2.279L19 19.002V2.998l-1.447-.894-5.843 2.922ZM11 16.895V20H9v-3.328l2 .223Zm6.002.489L13 15.382V6.617l4.002-2v12.767ZM11 14.882l-3.912-.434a3.47 3.47 0 0 1 0-6.897L11 7.117v7.765ZM21 13h1l1-1v-2l-1-1h-1v4Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconMegaphone[iconSymbol] = true;
var IconMermaid = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M4 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4Zm8 9.065c.904-2.524 3.34-4.174 5.995-4.06a6.197 6.197 0 0 1-2.66 5.358 3.325 3.325 0 0 0-1.422 2.74V17h-3.825v-1.897a3.325 3.325 0 0 0-1.423-2.74 6.2 6.2 0 0 1-2.66-5.357C8.66 6.89 11.095 8.54 12 11.065Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconMermaid[iconSymbol] = true;
var IconMicLinesDot = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M11.5 12c0 2.294 1.97 4 4.5 4 2.53 0 4.5-1.706 4.5-4v-1h2v1c0 3.287-2.533 5.584-5.5 6v2h-2v-2c-2.967-.416-5.5-2.713-5.5-6v-1h2v1ZM16 4c1.36 0 2.5 1.202 2.5 2.5v5c0 1.298-1.14 2.5-2.5 2.5s-2.5-1.202-2.5-2.5v-5C13.5 5.202 14.64 4 16 4ZM6 13H2v-2h4v2Zm4-4H2V7h8v2ZM7 5H2V3h5v2Zm3 0H8V3h2v2Z"
        }
      )
    );
  }
);
IconMicLinesDot[iconSymbol] = true;
var IconMicrophoneSlash = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M19.707 3.707 16 7.414V11a4 4 0 0 1-6.613 3.026L7.97 15.443A6 6 0 0 0 18 11V9h2v2a8 8 0 0 1-7 7.936V21h-2v-2.064a7.973 7.973 0 0 1-4.445-2.078l-1.848 1.849-1.414-1.414 15-15 1.414 1.414Zm-8.9 8.899A2 2 0 0 0 14 11V9.413l-3.191 3.191ZM6 11c0 .292.02.579.06.858l-1.979.284A8.061 8.061 0 0 1 4 11V9h2v2Zm6-9a3.995 3.995 0 0 1 2.667 1.019l-1.334 1.49a2.006 2.006 0 0 0-.485-.322l-.181-.074A2 2 0 0 0 10 6v2H8V6a4 4 0 0 1 4-4Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconMicrophoneSlash[iconSymbol] = true;
var IconMicrophone = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M4 11V9h2v2a6 6 0 0 0 12 0V9h2v2a8 8 0 0 1-7 7.936V21h-2v-2.064A8 8 0 0 1 4 11Zm10-5a2 2 0 1 0-4 0v5a2 2 0 1 0 4 0V6Zm2 5a4 4 0 0 1-8 0V6a4 4 0 1 1 8 0v5Z"
        }
      )
    );
  }
);
IconMicrophone[iconSymbol] = true;
var IconMinus = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)("path", { fill: "currentColor", d: "M20 11v2H4v-2h16Z" })
    );
  }
);
IconMinus[iconSymbol] = true;
var IconMiroMark = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M16.17 3h-2.633l2.195 3.857L10.902 3H8.268l2.415 4.714L5.634 3H3l2.634 6L3 21h2.634l5.049-12.857L8.268 21h2.634l4.83-13.714L13.537 21h2.634L21 6l-4.83-3Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconMiroMark[iconSymbol] = true;
var IconMobile = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M17 5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5Zm2 14a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v14Zm-5-3v2h-4v-2h4Z"
        }
      )
    );
  }
);
IconMobile[iconSymbol] = true;
var IconMonitorArrowUp = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M11.356 6.773h1.293l3.534 3-1.295 1.525L12 8.848l-2.89 2.45-1.294-1.526 3.539-3ZM20 6a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6Zm2 9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v9Zm-5 4v2H7v-2h10Zm-3 0h-4v-1h4v1Zm-1-5h-2V8h2v6Z"
        }
      )
    );
  }
);
IconMonitorArrowUp[iconSymbol] = true;
var IconMonitorArrow = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m21.707 4.707-8 8-1.414-1.414 8-8 1.414 1.414Zm.283-.565-1 7-1.98-.283.812-5.681-5.68.812-.283-1.98 7-1 1.13 1.132ZM2 15V6a3 3 0 0 1 3-3h7v2H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2h2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm15 4v2H7v-2h10Zm-3 0h-4v-1h4v1Z"
        }
      )
    );
  }
);
IconMonitorArrow[iconSymbol] = true;
var IconMonitorEyeClosed = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m21.398 2.785-.591.807L20 3l.807.592-.002.002-.012.015-.026.035a8.575 8.575 0 0 1-.425.501c-.225.244-.532.55-.91.873L20.914 6.5 19.5 7.914l-1.751-1.75a7.77 7.77 0 0 1-1.063.46l.527 2.104-1.94.485-.555-2.22c-.072.003-.145.007-.218.007a6.56 6.56 0 0 1-1.192-.112l-.58 2.325-1.94-.485.242-.97.378-1.514a8.506 8.506 0 0 1-.79-.448L8.5 7.914 7.086 6.5l1.959-1.96a8.585 8.585 0 0 1-.812-.896l-.026-.035-.012-.015v-.001C8.197 3.59 8.248 3.55 9 3l-.807.592-.59-.807 1.612-1.182.59.806.012.015.06.075a8.218 8.218 0 0 0 1.25 1.212C11.995 4.387 13.157 5 14.5 5c1.343 0 2.505-.613 3.373-1.29a8.218 8.218 0 0 0 1.25-1.211 3.37 3.37 0 0 0 .06-.075l.01-.015.592-.806 1.613 1.182ZM2 15V6a3 3 0 0 1 3-3h1v2H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4h2v4a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm15 4v2H7v-2h10Zm-3 0h-4v-1h4v1Z"
        }
      )
    );
  }
);
IconMonitorEyeClosed[iconSymbol] = true;
var IconMonitorEyeOpen = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M15.5 1c2.008 0 3.615 1.06 4.66 2.01a10.962 10.962 0 0 1 1.56 1.768l.09.132.024.038.008.013.003.004v.002s.002 0-.845.533l.847.533-.002.002-.003.004-.008.013-.024.038a9.628 9.628 0 0 1-.419.575 11 11 0 0 1-1.23 1.325C19.114 8.94 17.507 10 15.5 10c-2.008 0-3.615-1.06-4.66-2.01a10.962 10.962 0 0 1-1.56-1.768 6.83 6.83 0 0 1-.09-.132l-.024-.038-.008-.013-.003-.004v-.002s-.002 0 .845-.533a121.31 121.31 0 0 1-.847-.533l.002-.002.003-.004.008-.013.024-.038a9.614 9.614 0 0 1 .419-.575 11 11 0 0 1 1.23-1.325C11.886 2.06 13.493 1 15.5 1Zm0 2c-1.292 0-2.435.69-3.315 1.49-.396.36-.716.724-.946 1.01.23.286.55.65.946 1.01.88.8 2.023 1.49 3.315 1.49 1.292 0 2.435-.69 3.314-1.49.397-.36.716-.724.946-1.01a8.934 8.934 0 0 0-.946-1.01C17.934 3.69 16.793 3 15.5 3ZM10 5.5l-.847.532V4.967L10 5.5Zm11.847.533L21 5.5l.847-.532v1.065ZM17 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM2 15V6a3 3 0 0 1 3-3h2v2H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4h2v4a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm15 4v2H7v-2h10Zm-3 0h-4v-1h4v1Z"
        }
      )
    );
  }
);
IconMonitorEyeOpen[iconSymbol] = true;
var IconMonitorPause = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M11 7.5v6H9v-6h2Zm4 0v6h-2v-6h2ZM20 6a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6Zm2 9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v9Zm-5 4v2H7v-2h10Zm-3 0h-4v-1h4v1Z"
        }
      )
    );
  }
);
IconMonitorPause[iconSymbol] = true;
var IconMonitorPlay = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m11 7.5 4 2.5v1l-4 2.5-1-.5V8l1-.5ZM20 6a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6Zm2 9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v9Zm-5 4v2H7v-2h10Zm-3 0h-4v-1h4v1Z"
        }
      )
    );
  }
);
IconMonitorPlay[iconSymbol] = true;
var IconMonitorStop = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M9 8.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4ZM20 6a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6Zm2 9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v9Zm-5 4v2H7v-2h10Zm-3 0h-4v-1h4v1Z"
        }
      )
    );
  }
);
IconMonitorStop[iconSymbol] = true;
var IconMonitor = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20 6a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6Zm2 9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v9Zm-5 4v2H7v-2h10Zm-3 0h-4v-1h4v1Z"
        }
      )
    );
  }
);
IconMonitor[iconSymbol] = true;
var IconMoon = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m8.8 4.561.002-.125a8.069 8.069 0 0 0 3.265 15.446 8.07 8.07 0 0 0 7.573-5.284c-.255.019-.513.03-.773.03C13.307 14.628 8.8 10.12 8.8 4.56Zm2.119-1.39-.61-.571-.61-.572 1.22 1.143Zm-.12 1.39a8.067 8.067 0 0 0 9.967 7.842l1.22 1.144c-.822 4.734-4.949 8.335-9.919 8.335C6.507 21.882 2 17.374 2 11.814c0-4.745 3.282-8.72 7.7-9.786l.61.572.609.57c-.078.452-.12.917-.12 1.391Z"
        }
      )
    );
  }
);
IconMoon[iconSymbol] = true;
var IconMouse = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M14 2.5c1.283 0 2.616.371 3.655 1.104 1.038.733 1.815 1.861 1.842 3.319l.5 6.5.003.039v.038a8 8 0 1 1-16 0v-.038l.003-.04.5-6.5c.027-1.457.804-2.585 1.842-3.318C7.384 2.871 8.717 2.5 10 2.5h4Zm-4 2c-.926 0-1.843.274-2.502.738C6.856 5.691 6.5 6.286 6.5 7v.038l-.003.04L6 13.528a6 6 0 0 0 11.999 0l-.496-6.452-.003-.039V7c0-.714-.357-1.31-.998-1.762C15.843 4.774 14.926 4.5 14 4.5h-4Zm1 6.5V8a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0Z"
        }
      )
    );
  }
);
IconMouse[iconSymbol] = true;
var IconMusicNote = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "m7 6 .811-.982 10.486-2.02 1.19.983v10.027a3.29 3.29 0 1 1-2-2.288V5.192L9 6.826v9.09a3.29 3.29 0 1 1-2-2.289V6Zm-1.53 9.446a1.29 1.29 0 1 0 .667 2.49 1.29 1.29 0 0 0-.667-2.49Zm9.575-.328a1.29 1.29 0 1 1 2.49-.667 1.29 1.29 0 0 1-2.49.667Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconMusicNote[iconSymbol] = true;
var IconNavigationArrowLines = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "m6.335 4.126-.67 1.884-1.03-.367L9.28 18.918c1.6-3.658 4.59-6.962 8.97-8.7l.585-1.643 2.5.89-.11 1.916-.572.143c-5.834 1.577-9.29 6.089-10.38 10.706l-1.917.1-6.3-18 1.279-1.272 3 1.068Zm7.54-.045a1.16 1.16 0 0 1 1.165 1.156 1.16 1.16 0 0 1-1.165 1.156 1.16 1.16 0 0 1-1.165-1.156 1.16 1.16 0 0 1 1.165-1.156Zm0-3.081c1.893 0 3.405.991 4.386 1.876a10.247 10.247 0 0 1 1.464 1.647 5.96 5.96 0 0 1 .108.16l.008.012.002.004.002.002v1.071l-.002.002-.002.004-.008.012a5.275 5.275 0 0 1-.108.16 10.248 10.248 0 0 1-1.464 1.647c-.98.885-2.493 1.877-4.386 1.877-1.893 0-3.405-.992-4.386-1.876A10.248 10.248 0 0 1 8.025 5.95a5.915 5.915 0 0 1-.108-.16l-.008-.012-.002-.004-.002-.002v-1.07l.002-.003.002-.004.008-.011a4.07 4.07 0 0 1 .108-.16A10.247 10.247 0 0 1 9.49 2.876c.98-.886 2.493-1.877 4.386-1.877Zm0 2c-1.182 0-2.232.627-3.046 1.361a8.28 8.28 0 0 0-.833.875c.209.254.49.567.833.877.813.734 1.864 1.36 3.046 1.36 1.182 0 2.233-.626 3.046-1.36.343-.31.623-.623.832-.877a8.19 8.19 0 0 0-.832-.875C16.108 3.627 15.057 3 13.875 3Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconNavigationArrowLines[iconSymbol] = true;
var IconNavigationUpLeftFilled = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M22.001 8.936v2.045l-.003.019C15.977 11 11 15.977 11 21.998l-.012.002H8.935L2 3.178V3l1-1h.179L22 8.936Z"
        }
      )
    );
  }
);
IconNavigationUpLeftFilled[iconSymbol] = true;
var IconNavigationUpLeftSlash = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "m2 3.178 3.01 8.168 1.876-.692-2.193-5.951 5.956 2.233.702-1.872L3.181 2H3L2 3v.178Zm20.001 5.757-5.655-2.083-.692 1.876 2.411.889a13.16 13.16 0 0 0-8.448 8.448l-.52-1.41-1.877.69L8.935 22h2.053l.012-.002C11 15.977 15.977 11 21.998 11l.003-.019V8.935ZM18.75 2.662l-15 17-1.5-1.323 15-17.001 1.5 1.324Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconNavigationUpLeftSlash[iconSymbol] = true;
var IconNavigationUpRight = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M22.001 3.178 15.066 22h-2.053l-.011-.002c0-6.021-4.978-10.998-11-10.998L2 10.981V8.935L20.823 2h.178l1 1v.178Zm-7.616 14.887 4.929-13.378-13.378 4.93a13.16 13.16 0 0 1 8.449 8.448Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconNavigationUpRight[iconSymbol] = true;
var IconNesting = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M19 3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H7v5a2 2 0 0 0 2 2h2v-1a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2H9a4 4 0 0 1-4-4v-5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-6 13v3h6v-3h-6ZM5 8h14V5H5v3Z"
        }
      )
    );
  }
);
IconNesting[iconSymbol] = true;
var IconNext = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20 4v16h-2V4h2Zm-4 7v2L6 19l-2-1V6l2-1 10 6ZM6 16.667 13.78 12 6 7.332v9.335Z"
        }
      )
    );
  }
);
IconNext[iconSymbol] = true;
var IconNodeConnectedDot = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M13.235 2.006c1.163.056 2.107.53 2.762 1.267C16.68 4.041 17 5.037 17 6c0 .963-.32 1.959-1.003 2.727-.655.737-1.599 1.21-2.762 1.267L13 10h-3v4c0 1.91.365 3.113 1.003 3.842.611.698 1.65 1.158 3.497 1.158h1.674A2.998 2.998 0 0 1 22 20a3 3 0 0 1-5.826 1H14.5c-2.153 0-3.864-.54-5.003-1.84C8.385 17.887 8 16.09 8 14v-4H5c-1.271 0-2.298-.487-2.997-1.273C1.32 7.959 1 6.963 1 6c0-.963.32-1.959 1.003-2.727C2.702 2.487 3.729 2 5 2h8l.235.006ZM19 19a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM5 4c-.729 0-1.202.263-1.503.602C3.18 4.959 3 5.463 3 6c0 .537.18 1.042.497 1.398C3.798 7.737 4.271 8 5 8h8c.729 0 1.202-.263 1.503-.602C14.82 7.042 15 6.537 15 6c0-.537-.18-1.041-.497-1.398-.263-.297-.659-.535-1.241-.59L13 4H5Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconNodeConnectedDot[iconSymbol] = true;
var IconNodeLinesCurved = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M21 6c-2.98 0-5.44 1.941-7.307 5H21v2h-7.307c1.867 3.059 4.327 5 7.307 5v2c-3.96 0-6.936-2.576-9-5.94C9.936 17.424 6.96 20 3 20v-2c2.98 0 5.44-1.941 7.307-5H3v-2h7.307C8.44 7.941 5.98 6 3 6V4c3.96 0 6.936 2.575 9 5.94C14.064 6.574 17.04 4 21 4v2Z"
        }
      )
    );
  }
);
IconNodeLinesCurved[iconSymbol] = true;
var IconNodeLinesHorizontal = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M11 16v-3H3v-2h8V8c0-1.747.6-3.085 1.794-3.939C13.92 3.256 15.424 3 17 3h4v2h-4c-1.423 0-2.421.243-3.044.688C13.4 6.085 13 6.747 13 8v3h8v2h-8v3c0 1.253.4 1.915.956 2.311.623.445 1.62.689 3.044.689h4v2h-4c-1.577 0-3.079-.257-4.206-1.062C11.6 19.085 11 17.746 11 16Z"
        }
      )
    );
  }
);
IconNodeLinesHorizontal[iconSymbol] = true;
var IconNodeLinesVertical = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M8 11h3V3h2v8h3c1.747 0 3.085.6 3.939 1.794C20.744 13.92 21 15.424 21 17v4h-2v-4c0-1.423-.244-2.421-.688-3.044C17.915 13.4 17.253 13 16 13h-3v8h-2v-8H8c-1.253 0-1.915.4-2.311.956C5.244 14.58 5 15.576 5 17v4H3v-4c0-1.577.257-3.079 1.062-4.206C4.915 11.6 6.253 11 8 11Z"
        }
      )
    );
  }
);
IconNodeLinesVertical[iconSymbol] = true;
var IconNodePlus = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M15 4c2.534 0 4.501.997 5.821 2.537 1.302 1.519 1.929 3.51 1.929 5.463 0 1.954-.627 3.944-1.929 5.463C19.501 19.003 17.534 20 15 20H9c-2.534 0-4.501-.997-5.821-2.537C1.877 15.944 1.25 13.953 1.25 12c0-1.954.627-3.944 1.929-5.463C4.499 4.997 6.466 4 9 4h6ZM9 6c-1.966 0-3.374.753-4.304 1.838C3.748 8.944 3.25 10.453 3.25 12c0 1.546.498 3.056 1.446 4.162C5.626 17.247 7.034 18 9 18h6c1.966 0 3.374-.753 4.304-1.838.948-1.106 1.446-2.615 1.446-4.162 0-1.546-.498-3.056-1.446-4.162C18.374 6.753 16.966 6 15 6H9Zm4 2v3h3v2h-3v3h-2v-3H8v-2h3V8h2Z"
        }
      )
    );
  }
);
IconNodePlus[iconSymbol] = true;
var IconNodesConnected = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M19 2a3 3 0 1 1 0 6c-.463 0-.9-.109-1.291-.296l-1.19 1.19A3.992 3.992 0 0 1 18 12a3.991 3.991 0 0 1-1.48 3.105l1.189 1.19A2.984 2.984 0 0 1 19 16a3 3 0 1 1-3 3c0-.463.108-.9.295-1.291l-1.748-1.748A4.106 4.106 0 0 1 14 16h-4c-.186 0-.37-.014-.549-.04l-1.747 1.75c.187.392.296.828.296 1.291a3 3 0 1 1-3-3c.462 0 .899.108 1.29.295l1.19-1.19A3.992 3.992 0 0 1 6 12a3.99 3.99 0 0 1 1.48-3.106l-1.19-1.19A2.982 2.982 0 0 1 5 8a3 3 0 1 1 3-3c0 .463-.109.899-.296 1.29l1.748 1.748C9.632 8.014 9.814 8 10 8h4c.185 0 .368.013.547.037l1.748-1.747A2.983 2.983 0 0 1 16 5a3 3 0 0 1 3-3ZM5 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm14 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-9-8a2 2 0 1 0 0 4h4a2 2 0 1 0 0-4h-4ZM5 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm14 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconNodesConnected[iconSymbol] = true;
var IconNodesConnectionsThree = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M16 3v2h-1.5c-2.39 0-4.15.482-5.287 1.309C8.35 6.936 7.78 7.809 7.58 9h.92c.983 0 1.81.334 2.395.918.315.315.539.688.68 1.082H16v2h-4.426c-.14.394-.364.767-.68 1.082-.584.584-1.411.918-2.394.918h-.92c.2 1.19.77 2.064 1.633 2.691C10.35 18.518 12.11 19 14.5 19H16v2h-1.5c-2.61 0-4.85-.518-6.463-1.691C6.625 18.282 5.785 16.817 5.562 15H4.5c-.983 0-1.81-.334-2.395-.918A2.939 2.939 0 0 1 1.25 12c0-.747.28-1.507.855-2.082C2.69 9.334 3.517 9 4.5 9h1.063c.222-1.817 1.062-3.282 2.474-4.309C9.65 3.52 11.89 3 14.5 3H16Zm6 16v2h-4v-2h4ZM4.5 11c-.517 0-.815.166-.98.332a.94.94 0 0 0-.27.668.94.94 0 0 0 .27.668c.165.166.463.332.98.332h4c.517 0 .815-.166.98-.332A.94.94 0 0 0 9.75 12a.94.94 0 0 0-.27-.668C9.315 11.166 9.017 11 8.5 11h-4ZM22 11v2h-4v-2h4Zm0-8v2h-4V3h4Z"
        }
      )
    );
  }
);
IconNodesConnectionsThree[iconSymbol] = true;
var IconNotchedChevron = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m16.95 5 .123.008a1 1 0 0 1 .706.432l4.05 6 .006 1.11-3.951 6a1 1 0 0 1-.835.45H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h13.95ZM4 17h12.51l3.288-4.993L16.418 7H4v10Z"
        }
      )
    );
  }
);
IconNotchedChevron[iconSymbol] = true;
var IconNoteMagnifyingGlass = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M19 16a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm2 0c0 .887-.233 1.72-.639 2.443l2.256 1.77-1.234 1.574-2.331-1.829A5 5 0 1 1 21 16ZM5 5a1 1 0 0 1 1-1h9.586L19 7.414V10.5h2V6.586L16.414 2H6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h4v-2H6a1 1 0 0 1-1-1V5Zm2 4h7V7H7v2Zm0 4h3v-2H7v2Zm0 4h2v-2H7v2Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconNoteMagnifyingGlass[iconSymbol] = true;
var IconNotepad = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M16 16H8v-2h8v2Zm0-4H8v-2h8v2ZM9 3h2V2h2v1h2V2h2v1h2l1 1v17l-1 1H5l-1-1V4l1-1h2V2h2v1ZM6 20h12V5h-1v1h-2V5h-2v1h-2V5H9v1H7V5H6v15Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconNotepad[iconSymbol] = true;
var IconNumber = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M17.986 3.164 17.181 8H21v2h-4.153l-.666 4H20v2h-4.153l-.86 5.164-1.973-.328.805-4.836H9.347l-.86 5.164-1.973-.328L7.319 16H3v-2h4.653l.666-4H4V8h4.653l.86-5.164 1.973.328L10.681 8h4.472l.86-5.164 1.973.328ZM9.681 14h4.472l.666-4h-4.472l-.666 4Z"
        }
      )
    );
  }
);
IconNumber[iconSymbol] = true;
var IconOctagon = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M16 2a1 1 0 0 1 .707.293l5 5A1 1 0 0 1 22 8v8a1 1 0 0 1-.293.707l-5 5A1 1 0 0 1 16 22H8a1 1 0 0 1-.707-.293l-5-5A1 1 0 0 1 2 16V8a1 1 0 0 1 .293-.707l5-5 .073-.066A1 1 0 0 1 8 2h8ZM4 8.414v7.172L8.414 20h7.172L20 15.586V8.414L15.586 4H8.414L4 8.414Z"
        }
      )
    );
  }
);
IconOctagon[iconSymbol] = true;
var IconOffice = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M9 18H7v-2h2v2Zm4 0h-2v-2h2v2Zm-4-4H7v-2h2v2Zm4 0h-2v-2h2v2Zm-4-4H7V8h2v2Zm4 0h-2V8h2v2Zm4-7v6h3l1 1v11l-1 1H4l-1-1V5.5l.796-.979 12-2.5L17 3Zm0 17h2v-9h-2v9ZM5 6.312V20h10V4.229L5 6.312Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconOffice[iconSymbol] = true;
var IconOrbitDouble = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M12.02 4.57c3.135-1.695 6.172-1.934 7.78-.327 1.606 1.607 1.365 4.642-.33 7.777 1.696 3.136 1.936 6.172.329 7.779-1.608 1.607-4.644 1.367-7.779-.328-3.135 1.694-6.17 1.934-7.777.328-1.607-1.607-1.368-4.644.327-7.779-1.695-3.134-1.934-6.17-.327-7.777 1.607-1.607 4.642-1.368 7.777.327ZM5.832 14a9.91 9.91 0 0 0-.393 1.085c-.552 1.878-.193 2.888.218 3.3.411.411 1.42.77 3.3.217.35-.103.712-.235 1.084-.393a19.724 19.724 0 0 1-2.263-1.946 19.5 19.5 0 0 1-1.946-2.262Zm12.377 0a19.707 19.707 0 0 1-1.946 2.263c-.729.73-1.49 1.379-2.262 1.946.372.158.734.29 1.084.393 1.879.553 2.888.194 3.3-.218.41-.41.77-1.42.217-3.3a9.914 9.914 0 0 0-.393-1.083ZM12.02 6.895a17.245 17.245 0 0 0-2.827 2.298 17.25 17.25 0 0 0-2.299 2.828c.61.947 1.377 1.909 2.298 2.83.92.92 1.882 1.686 2.828 2.296a17.236 17.236 0 0 0 2.83-2.297c.92-.92 1.686-1.883 2.296-2.829a17.243 17.243 0 0 0-2.297-2.828 17.238 17.238 0 0 0-2.829-2.298ZM8.957 5.44c-1.88-.552-2.889-.193-3.3.218-.412.411-.77 1.42-.218 3.3.103.35.234.712.393 1.084a19.72 19.72 0 0 1 1.946-2.263c.73-.73 1.491-1.38 2.263-1.946a9.898 9.898 0 0 0-1.084-.393Zm9.428.218c-.411-.411-1.421-.77-3.3-.218A9.9 9.9 0 0 0 14 5.832a19.714 19.714 0 0 1 2.262 1.946 19.73 19.73 0 0 1 1.946 2.262c.158-.372.29-.734.393-1.083.553-1.879.195-2.888-.217-3.3Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconOrbitDouble[iconSymbol] = true;
var IconOrgChart = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M14 3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v2h4l1 1v2h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h1v-1H8v1h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h1v-2l1-1h4v-2h-1a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4ZM5 20h4v-3H5v3Zm10 0h4v-3h-4v3ZM10 8h4V5h-4v3Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconOrgChart[iconSymbol] = true;
var IconOrientationHorizontal = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M22.707 17.293v1.414l-3 3-1.414-1.414L19.586 19H2v-2h17.586l-1.293-1.293 1.414-1.414 3 3ZM20 2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16ZM4 10h16V4H4v6Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconOrientationHorizontal[iconSymbol] = true;
var IconOrientationVertical = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M10 2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6ZM4 20h6V4H4v16Zm15-1.414 1.293-1.293 1.414 1.414-3 3h-1.414l-3-3 1.414-1.414L17 18.586V2h2v16.586Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconOrientationVertical[iconSymbol] = true;
var IconPaddingAll = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M19 6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6Zm2 12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12Zm-3-3h-2V9h2v6ZM8 15H6V9h2v6Zm7 1v2H9v-2h6Zm0-10v2H9V6h6Z"
        }
      )
    );
  }
);
IconPaddingAll[iconSymbol] = true;
var IconPaddingBottom = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M19 6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6Zm2 12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12Zm-4-3v2H7v-2h10Z"
        }
      )
    );
  }
);
IconPaddingBottom[iconSymbol] = true;
var IconPaddingLeftRight = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M19 6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6Zm2 12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12Zm-4-1h-2V7h2v10Zm-8 0H7V7h2v10Z"
        }
      )
    );
  }
);
IconPaddingLeftRight[iconSymbol] = true;
var IconPaddingLeft = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M19 6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6Zm2 12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12ZM9 17H7V7h2v10Z"
        }
      )
    );
  }
);
IconPaddingLeft[iconSymbol] = true;
var IconPaddingRight = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M19 6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6Zm2 12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12Zm-4-1h-2V7h2v10Z"
        }
      )
    );
  }
);
IconPaddingRight[iconSymbol] = true;
var IconPaddingTopBottom = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M19 6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6Zm2 12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12Zm-4-3v2H7v-2h10Zm0-8v2H7V7h10Z"
        }
      )
    );
  }
);
IconPaddingTopBottom[iconSymbol] = true;
var IconPaddingTop = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M19 6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6Zm2 12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12ZM17 7v2H7V7h10Z"
        }
      )
    );
  }
);
IconPaddingTop[iconSymbol] = true;
var IconPaintBucket = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "m19.785 14.379.004.007.02.025c.018.021.04.053.07.091a17.196 17.196 0 0 1 .973 1.411c.265.431.543.933.758 1.442.207.492.39 1.074.39 1.645a3 3 0 0 1-6 0c0-.571.184-1.153.391-1.645.214-.51.493-1.01.758-1.442a17.196 17.196 0 0 1 .972-1.411c.03-.039.053-.07.07-.09l.02-.026.005-.007.003-.003 1.563-.001.003.004Zm-.933 2.583a8.899 8.899 0 0 0-.617 1.168c-.168.398-.235.691-.235.87a1 1 0 1 0 2 0c0-.179-.067-.472-.234-.87a8.899 8.899 0 0 0-.617-1.168c-.049-.079-.1-.155-.149-.23-.048.075-.1.151-.148.23Zm-.145-6.669v1.414l-7.586 7.586a3 3 0 0 1-4.242 0l-4.172-4.172a3 3 0 0 1 0-4.242L7.087 6.5 5.292 4.707l1.414-1.414L8.5 5.086l2.5-2.5 7.707 7.707ZM9.914 6.5l2.793 2.793-1.414 1.414L8.5 7.914l-4.379 4.379a1 1 0 0 0 0 1.414l4.172 4.172a1 1 0 0 0 1.414 0L16.587 11 11 5.414 9.914 6.5Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconPaintBucket[iconSymbol] = true;
var IconPalette = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M9 11c1.044 0 2.284.512 3.003 1.655.744 1.185.789 2.81-.092 4.757-.327.724-.394 1.232-.361 1.563.03.309.149.505.305.645.362.324 1.11.49 1.923.305C17.325 19.12 20 15.822 20 12a8 8 0 1 0-16 0c0 .807.116 1.585.333 2.316.148-.293.316-.587.506-.872C5.664 12.211 7.017 11 9 11Zm13 1c0 4.744-3.31 8.86-7.778 9.875-1.186.269-2.689.143-3.702-.767-.531-.476-.881-1.134-.96-1.938-.077-.782.106-1.648.529-2.582.703-1.554.497-2.428.22-2.868A1.591 1.591 0 0 0 9 13c-1.058 0-1.875.623-2.499 1.556-.63.943-.945 2.042-1.008 2.564l-1.824.437A9.947 9.947 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10ZM11.5 7.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm4 .5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm2.5 3a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.5 4a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
        }
      )
    );
  }
);
IconPalette[iconSymbol] = true;
var IconPaperPlaneFilledRight = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m4.479 2.122 16.5 9v1.756l-16.5 9-1.428-1.194L5.613 13H14v-2H5.613L3.05 3.316l1.43-1.194Z"
        }
      )
    );
  }
);
IconPaperPlaneFilledRight[iconSymbol] = true;
var IconPaperPlaneTilt = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "m21.454 3.8-5.5 17.5-1.849.147-3.851-7.702-7.701-3.85.147-1.85 17.5-5.5L21.454 3.8Zm-9.238 9.397 2.571 5.142 3.534-11.247-6.105 6.105ZM5.66 9.212l5.143 2.571 6.106-6.107L5.66 9.212Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconPaperPlaneTilt[iconSymbol] = true;
var IconParallelogram = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M21.68 3c.813 0 1.41.764 1.213 1.553l-3.875 15.5a1.25 1.25 0 0 1-1.213.947H2.32a1.25 1.25 0 0 1-1.213-1.553l3.875-15.5.03-.102A1.25 1.25 0 0 1 6.196 3H21.68ZM3.28 19h13.94l3.5-14H6.78l-3.5 14Z"
        }
      )
    );
  }
);
IconParallelogram[iconSymbol] = true;
var IconPauseCircle = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M19.997 12a8 8 0 1 0-16 0 8 8 0 0 0 16 0Zm2 0c0 5.523-4.478 10-10 10-5.523 0-10-4.477-10-10s4.477-10 10-10c5.522 0 10 4.477 10 10ZM11 9v6H9V9h2Zm4 0v6h-2V9h2Z"
        }
      )
    );
  }
);
IconPauseCircle[iconSymbol] = true;
var IconPause = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)("path", { fill: "currentColor", d: "M9.5 4v16h-3V4h3Zm8 0v16h-3V4h3Z" })
    );
  }
);
IconPause[iconSymbol] = true;
var IconPdf = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M5.488 2.404c.458-.312 1.077-.502 1.715-.351.597.141 1.06.547 1.339 1.112l.107.252.225.653a25.97 25.97 0 0 1 1.043 5.01 17.785 17.785 0 0 0 2.124 1.683c.504.34 1.026.653 1.56.938a20.386 20.386 0 0 1 5.8-.798l.03.001c.758.03 1.392.333 1.828.826.423.478.616 1.08.616 1.649 0 .564-.189 1.17-.63 1.626-.465.482-1.128.71-1.866.62l-.008-.001a19.687 19.687 0 0 1-5.955-1.773 18.413 18.413 0 0 0-3.733 1.731c-.36 1.754-1.01 3.496-2.084 5.071l-.198.284c-.905 1.248-2.394 1.29-3.36.67a2.228 2.228 0 0 1-1.007-1.47c-.121-.671.088-1.349.56-1.932l.013-.016.37-.426a20.533 20.533 0 0 1 3.892-3.394c.161-1.074.216-2.162.188-3.227-.01-.384-.031-.764-.06-1.136a19.87 19.87 0 0 1-3.212-4.21c-.83-1.375-.23-2.757.703-3.392Zm1.51 15.163a18.556 18.556 0 0 0-1.849 1.894c-.173.216-.147.32-.147.321.004.022.026.082.12.142a.48.48 0 0 0 .323.071c.09-.014.213-.063.336-.232l.166-.237c.422-.62.767-1.277 1.05-1.959Zm12.358-4.664a18.377 18.377 0 0 0-2.464.152c.892.265 1.805.462 2.733.585.09.01.137-.001.152-.006a.068.068 0 0 0 .03-.019c.021-.023.069-.099.069-.234a.496.496 0 0 0-.114-.324c-.053-.06-.16-.144-.406-.154Zm-9.294-1.098c-.002.43-.018.867-.048 1.307a20.412 20.412 0 0 1 1.144-.538c-.079-.051-.158-.1-.236-.153a20.975 20.975 0 0 1-.86-.616Zm-3.34-7.8a.35.35 0 0 0-.108.053.516.516 0 0 0-.206.282.453.453 0 0 0 .021.286l.068.138.013.023.262.444c.194.32.4.633.613.94a19.33 19.33 0 0 0-.613-2.064l-.047-.1-.003-.002Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconPdf[iconSymbol] = true;
var IconPenColorSelection = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M13.879 2.707a3 3 0 0 1 4.242 0l1.172 1.172a3 3 0 0 1 0 4.242l-9.8 9.8-5.297 1.06-1.176-1.177 1.06-5.297 9.799-9.8ZM5.92 13.493l-.647 3.232 3.233-.647L15.085 9.5l-2.586-2.586-6.578 6.58ZM16.707 4.12a1 1 0 0 0-1.414 0l-1.38 1.38L16.5 8.085l1.38-1.378a1 1 0 0 0 0-1.414l-1.172-1.172Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconPenColorSelection[iconSymbol] = true;
var IconPenSlash = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "m20.747 20.336-1.494 1.328-5.226-5.878-3.445 4.074-.266.088-6 2-1.302-1.112 1-6 .045-.271L8.39 9.443 3.253 3.664l1.494-1.328 16 18Zm-14.807-4.9-.681 4.09 4.158-1.386 3.268-3.865-2.953-3.322-3.792 4.483ZM13.98 2.84a3 3 0 0 1 4.164-.405l1.876 1.5a3 3 0 0 1 .416 4.28l-3.938 4.653-1.343-1.51.742-.877-3.407-2.788-.288.342-1.342-1.51 3.12-3.685Zm2.915 1.156a1 1 0 0 0-1.388.135l-1.724 2.035 3.406 2.787 1.72-2.03a1 1 0 0 0-.14-1.426l-1.874-1.5Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconPenSlash[iconSymbol] = true;
var IconPenTip = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M14.492 3.414 8.921 8.985a4.312 4.312 0 0 0 6.105 6.09l5.564-5.562 1.414 1.414-5.664 5.664a6.002 6.002 0 0 1-2.182 1.392L3.344 21.94 2.06 20.656 6.02 9.845c.3-.82.774-1.563 1.391-2.18l.093-.092.01-.01L13.077 2l1.415 1.414ZM4.68 19.32l4.486-1.64a6.305 6.305 0 0 1-1.651-1.19 6.306 6.306 0 0 1-1.192-1.655L4.68 19.32Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconPenTip[iconSymbol] = true;
var IconPenUnderline = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M21 22H3v-2h18v2ZM13.879 2.707a3 3 0 0 1 4.242 0l1.172 1.172a3 3 0 0 1 0 4.242l-9.8 9.8-5.297 1.06-1.176-1.177 1.06-5.297 9.799-9.8ZM5.92 13.493l-.647 3.232 3.233-.647L15.085 9.5l-2.586-2.586-6.578 6.58ZM16.707 4.12a1 1 0 0 0-1.414 0l-1.38 1.38L16.5 8.085l1.38-1.378a1 1 0 0 0 0-1.414l-1.172-1.172Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconPenUnderline[iconSymbol] = true;
var IconPen = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M13.98 2.84a3 3 0 0 1 4.164-.405l1.876 1.5a3 3 0 0 1 .416 4.28L10.582 19.86l-.266.088-6 2-1.302-1.112 1-6 .045-.271 9.92-11.725ZM5.94 15.436l-.681 4.09 4.158-1.386 6.48-7.66-3.406-2.787-6.55 7.743Zm10.954-11.44a1 1 0 0 0-1.387.135l-1.724 2.036 3.406 2.787 1.72-2.03a1 1 0 0 0-.14-1.427l-1.874-1.5Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconPen[iconSymbol] = true;
var IconPentagon = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M11.519 1.123a1 1 0 0 1 1.106.096l10 8a1 1 0 0 1 .314 1.123l-4 11A1 1 0 0 1 18 22H6a1 1 0 0 1-.94-.658l-4-11a1 1 0 0 1 .315-1.123l10-8 .144-.096Zm-8.334 9.21L6.7 20h10.6l3.514-9.667L12 3.281l-8.815 7.052Z"
        }
      )
    );
  }
);
IconPentagon[iconSymbol] = true;
var IconPeopleList = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M12.004 6.066a3.934 3.934 0 1 1-.001 7.869 3.934 3.934 0 0 1 0-7.869Zm0 1.868a2.066 2.066 0 1 0 0 4.132 2.066 2.066 0 0 0 0-4.132ZM12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm-.496 15A3.003 3.003 0 0 0 8.6 19.242 7.967 7.967 0 0 0 12 20c1.217 0 2.37-.274 3.402-.76A2.998 2.998 0 0 0 12.504 17h-1ZM12 4a8 8 0 0 0-5.137 14.13 5.005 5.005 0 0 1 4.64-3.13h1a5 5 0 0 1 4.637 3.128A8 8 0 0 0 12 4Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconPeopleList[iconSymbol] = true;
var IconPercent = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M18.29 2.542 7.467 22.414l-1.757-.956L16.532 1.586l1.757.956ZM17.5 13a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM6.5 4a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconPercent[iconSymbol] = true;
var IconPersonInCircle = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20 12a8 8 0 1 0-16 0 8 8 0 0 0 16 0Zm2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-4.946-1.336-.303.175c-.99.544-2.146.916-3.393 1.075l.576 1.726 1.485 3.466-1.838.788-1.5-3.5-.03-.078-.052-.154-.05.154-.03.078-1.5 3.5-1.838-.788 1.485-3.466.575-1.726a9.677 9.677 0 0 1-3.062-.903l-.252-.13a8.074 8.074 0 0 1-.381-.217l1.039-1.71c.093.057.188.112.287.165 1.015.544 2.305.88 3.727.88 1.45 0 2.763-.349 3.787-.912l.23-.132 1.038 1.709ZM13.5 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        }
      )
    );
  }
);
IconPersonInCircle[iconSymbol] = true;
var IconPhoneFilled = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M12 8.5c-5.5 0-11 3-11 4.5 0 .297.454 1.77 1.5 2.203.517.213 2 0 2 0 1.42-.284 2.177-.522 3-1v-2.5h9v2.5c.823.478 1.58.716 3 1 0 0 1.483.213 2 0C22.546 14.77 23 13.298 23 13c0-1.5-4.5-4.5-11-4.5Z"
        }
      )
    );
  }
);
IconPhoneFilled[iconSymbol] = true;
var IconPixelEraser = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M12.254 3.957a3 3 0 0 1 4.243 0l4.171 4.172a3 3 0 0 1 0 4.242l-7.75 7.75a3.001 3.001 0 0 1-2.12.88H7.624l-.707-.294-3.586-3.585a3 3 0 0 1 0-4.243l8.922-8.922ZM4.746 14.293a1 1 0 0 0 0 1.414L8.04 19h2.758c.265 0 .52-.105.707-.293L14.211 16l-5.586-5.586-3.879 3.88Zm10.336-8.922a1 1 0 0 0-1.414 0l-3.629 3.63 5.586 5.585 3.63-3.629a1 1 0 0 0 0-1.414l-4.173-4.172ZM18 21.001h-2v-2h2v2Zm4 0h-2v-2h2v2Zm0-4h-2v-2h2v2Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconPixelEraser[iconSymbol] = true;
var IconPlaceholder = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M21.707 3.707 19.03 6.383A8.96 8.96 0 0 1 21 12a8.96 8.96 0 0 1-1.97 5.616l2.677 2.677-1.414 1.414-2.677-2.677A8.96 8.96 0 0 1 12 21a8.96 8.96 0 0 1-5.617-1.97l-2.676 2.677-1.414-1.414 2.676-2.677A8.96 8.96 0 0 1 3 12c0-2.125.737-4.078 1.969-5.617L2.293 3.707l1.414-1.414 2.676 2.676A8.961 8.961 0 0 1 12 3a8.96 8.96 0 0 1 5.616 1.969l2.677-2.676 1.414 1.414Zm-13.9 13.899A6.969 6.969 0 0 0 12 19c1.572 0 3.023-.52 4.191-1.395L12 13.415l-4.192 4.19ZM6.395 7.807A6.97 6.97 0 0 0 5 12c0 1.572.519 3.023 1.394 4.191L10.586 12 6.394 7.808ZM13.414 12l4.191 4.191A6.968 6.968 0 0 0 19 12c0-1.573-.52-3.024-1.395-4.192L13.415 12ZM12 5a6.97 6.97 0 0 0-4.192 1.394L12 10.586l4.191-4.192A6.969 6.969 0 0 0 12 5Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconPlaceholder[iconSymbol] = true;
var IconPlanet = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M12 3a8.96 8.96 0 0 1 5.371 1.778c1.08-.267 2.074-.477 2.9-.498.962-.024 2.01.207 2.595 1.22.5.867.328 1.87-.018 2.709-.358.868-.99 1.791-1.78 2.7l-.12.132a9 9 0 0 1-14.05 8.371c-.086.022-.17.045-.254.065-1.15.272-2.239.405-3.154.316-.838-.081-1.73-.374-2.256-1.135l-.1-.158c-.545-.944-.367-2.091.04-3.077.375-.911 1.015-1.868 1.85-2.782A9 9 0 0 1 12 3Zm6.924 10.021a29.52 29.52 0 0 1-4.508 3.197 34.959 34.959 0 0 1-4.867 2.34 7 7 0 0 0 9.375-5.536ZM3.576 15.17c-.238.36-.424.701-.554 1.017-.316.767-.24 1.17-.156 1.314l.052.063c.087.078.292.193.765.239.374.036.84.018 1.388-.059a8.99 8.99 0 0 1-1.495-2.574Zm16.746-8.89a7.64 7.64 0 0 0-1.247.16 8.987 8.987 0 0 1 1.26 2.167c.3-.427.523-.817.664-1.16.256-.62.174-.88.135-.947-.042-.072-.143-.236-.812-.22ZM5 12c0 2.072.9 3.932 2.33 5.214 1.852-.573 3.996-1.52 6.086-2.728 2.115-1.22 4.002-2.689 5.396-4.093A7 7 0 0 0 5 12Z"
        }
      )
    );
  }
);
IconPlanet[iconSymbol] = true;
var IconPlayCircle = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M19.997 12a8 8 0 1 0-16 0 8 8 0 0 0 16 0Zm2 0c0 5.523-4.478 10-10 10-5.523 0-10-4.477-10-10s4.477-10 10-10c5.522 0 10 4.477 10 10ZM11 8l5 3.5v1L11 16l-1-1V9l1-1Z"
        }
      )
    );
  }
);
IconPlayCircle[iconSymbol] = true;
var IconPlay = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M7.333 4 19 10.857v2.286L7.333 20 5 18.857V5.143L7.333 4Z"
        }
      )
    );
  }
);
IconPlay[iconSymbol] = true;
var IconPlaybackSpeedCircle = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "m11 8.5 5 3v1l-5 3-1-.5V9l1-.5Zm9 3.5a8 8 0 0 0-8-8c-.843 0-1.654.13-2.415.37l-.602-1.907A9.997 9.997 0 0 1 11.999 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.978 9.978 0 0 1-3.545-.648l.709-1.87A8 8 0 0 0 20 12ZM8.387 4.79l-.831.557a8.05 8.05 0 0 0-2.21 2.209l-.555.83-1.662-1.112.556-.83a10.05 10.05 0 0 1 2.758-2.759l.831-.556L8.387 4.79Zm-4.04 4.667-.195.98A8.044 8.044 0 0 0 4 12c0 .532.045 1.05.13 1.55l.169.986-1.971.337-.17-.986A11.182 11.182 0 0 1 2 12c0-.667.065-1.319.19-1.95l.194-.982 1.962.389Zm.322 6.114.514.858a7.415 7.415 0 0 0 2.039 2.23l.778.558v.073l-1.13 1.578-.813-.583a9.413 9.413 0 0 1-2.59-2.829l-.514-.858L4.67 15.57ZM11.472 22H12.5h-1.028Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconPlaybackSpeedCircle[iconSymbol] = true;
var IconPlug = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m16.79 3-2.83 2.828 4.243 4.243 2.828-2.829 1.414 1.415-2.828 2.828 1.222 1.222v1.414l-3.535 3.536c-2.31 2.31-6.1 2.153-8.427.048l-.22-.209-.368-.368-5.347 4.932-1.355-1.471 5.287-4.876-1.046-1.046a6 6 0 0 1 0-8.485l3.536-3.536h1.414l1.768 1.768 2.828-2.828L16.789 3ZM7.241 7.596a4 4 0 0 0 0 5.657l2.83 2.828.153.146c1.617 1.461 4.19 1.49 5.664.015l2.828-2.829-8.647-8.646-2.828 2.829Z"
        }
      )
    );
  }
);
IconPlug[iconSymbol] = true;
var IconPlusBox = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M17 7h-3V5h3V2h2v3h3v2h-3v3h-2V7ZM3 18V6a3 3 0 0 1 3-3h6v2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6h2v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3Z"
        }
      )
    );
  }
);
IconPlusBox[iconSymbol] = true;
var IconPlusCross = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M21.95 13.465 18.414 17l3.536 3.535-1.415 1.415L17 18.414l-3.535 3.536-1.415-1.415L15.586 17l-3.536-3.535 1.415-1.415L17 15.586l3.535-3.536 1.415 1.415ZM7 9H2V7h5V2h2v5h5v2H9v5H7V9Z"
        }
      )
    );
  }
);
IconPlusCross[iconSymbol] = true;
var IconPlusLinesBox = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M22 7h-3v3h-2V7h-3V5h3V2h2v3h3v2ZM3 18V6a3 3 0 0 1 3-3h6v2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6h2v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3Zm14-3v2H7v-2h10Zm-2-4v2H7v-2h8Zm-3-4v2H7V7h5Z"
        }
      )
    );
  }
);
IconPlusLinesBox[iconSymbol] = true;
var IconPlusSquare = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm6 6v3H8v2h3v3h2v-3h3v-2h-3V8h-2Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconPlusSquare[iconSymbol] = true;
var IconPlusText = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m19 3 1 1v4h-2V5h-6l.001 14H15v2H7v-2h3.001L10 5H4v3H2V4l1-1h16Zm1 7v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2Z"
        }
      )
    );
  }
);
IconPlusText[iconSymbol] = true;
var IconPlus = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)("path", { fill: "currentColor", d: "M13 4v7h7v2h-7v7h-2v-7H4v-2h7V4h2Z" })
    );
  }
);
IconPlus[iconSymbol] = true;
var IconPolling = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M23 14v5l-1 1H2l-1-1v-5l1-1h20l1 1ZM3 18h1v-3H3v3Zm3 0h1v-3H6v3Zm3 0h1v-3H9v3Zm3 0h9v-3h-9v3ZM23 5v5l-1 1H2l-1-1V5l1-1h20l1 1ZM9 9h12V6H9v3ZM6 9h1V6H6v3ZM3 9h1V6H3v3Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconPolling[iconSymbol] = true;
var IconPresentationArrow = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M11 5H5c-.484 0-1 .446-1 1.154v9.692C4 16.554 4.516 17 5 17h14c.484 0 1-.446 1-1.154V13h2v2.846C22 17.516 20.725 19 19 19h-2.584l1.25 3H15.5l-1.25-3h-4.5L8.5 22H6.333l1.25-3H5c-1.725 0-3-1.484-3-3.154V6.154C2 4.484 3.275 3 5 3h6v2Zm10.99-1.858-1 7-1.98-.284.575-4.03-5.878 5.879-1.414-1.414 5.879-5.88-4.03.577-.284-1.98 7-1 1.132 1.132Z"
        }
      )
    );
  }
);
IconPresentationArrow[iconSymbol] = true;
var IconPresentationEyeOpen = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M5 3a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h3l-1.667 4H8.5l1.666-4h3.667l1.667 4h2.166L16 18h3a3 3 0 0 0 3-3v-5h-2v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2V3H5Zm10.5-2c2.008 0 3.615 1.06 4.66 2.01a10.962 10.962 0 0 1 1.56 1.768l.09.132.024.038.008.013.003.004v.002l.002.584v.482l-.002.002-.003.004-.008.013-.024.038a9.628 9.628 0 0 1-.419.575 11 11 0 0 1-1.23 1.325C19.114 8.94 17.507 10 15.5 10c-2.008 0-3.615-1.06-4.66-2.01a10.962 10.962 0 0 1-1.56-1.768 6.83 6.83 0 0 1-.09-.132l-.024-.038-.008-.013-.003-.004v-.002l-.002-.513v-.553l.002-.002.003-.004.008-.013.024-.038a9.614 9.614 0 0 1 .419-.575 11 11 0 0 1 1.23-1.325C11.886 2.06 13.493 1 15.5 1Zm0 2c-1.292 0-2.435.69-3.315 1.49-.396.36-.716.724-.946 1.01.23.286.55.65.946 1.01.88.8 2.023 1.49 3.315 1.49 1.292 0 2.435-.69 3.314-1.49.397-.36.716-.724.946-1.01a8.934 8.934 0 0 0-.946-1.01C17.934 3.69 16.793 3 15.5 3ZM9.153 5.52v.512-1.065.553Zm12.694.513V4.968v1.065ZM17 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconPresentationEyeOpen[iconSymbol] = true;
var IconPresentationLine = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M11 1v2H5C3.275 3 2 4.483 2 6.154v9.692C2 17.516 3.275 19 5 19h2.583l-1.25 3H8.5l1.25-3h4.5l1.25 3h2.166l-1.25-3H19c1.725 0 3-1.483 3-3.154V12h-2v3.846c0 .709-.516 1.154-1 1.154H5c-.484 0-1-.445-1-1.154V6.154C4 5.446 4.516 5 5 5h10V3h-2V1h-2Zm12 6v2h-8V7h8Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconPresentationLine[iconSymbol] = true;
var IconPresentationLinesTwo = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M11 3V1h2v2h6a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2.584l1.25 3H15.5l-1.25-3h-4.5L8.5 22H6.333l1.25-3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h6ZM5 5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5Zm2 5h10V8H7v2Zm0 4h10v-2H7v2Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconPresentationLinesTwo[iconSymbol] = true;
var IconPresentationLink = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M5 3C3.275 3 2 4.483 2 6.154v9.692C2 17.516 3.275 19 5 19h2.583l-1.25 3H8.5l1.25-3h4.5l1.25 3h2.166l-1.25-3H19c1.725 0 3-1.483 3-3.154V11h-2v4.846c0 .709-.516 1.154-1 1.154H5c-.484 0-1-.445-1-1.154V6.154C4 5.446 4.516 5 5 5h3V3H5Zm7.707 3.707-1 1a1.829 1.829 0 0 0 2.586 2.586l1-1 1.414 1.414-1 1a3.828 3.828 0 1 1-5.414-5.414l1-1 1.414 1.414Zm1.586-4.414a3.828 3.828 0 1 1 5.414 5.414l-.5.5-1.414-1.414.5-.5a1.829 1.829 0 0 0-2.586-2.586l-1 1-1.414-1.414 1-1Zm3.414 3.414-4 4-1.414-1.414 4-4 1.414 1.414Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconPresentationLink[iconSymbol] = true;
var IconPresentationNumberOne = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M13 7.5V13h2v2H9v-2h2V9.515l-1.396 1.06L8.396 8.98l3-2.278L13 7.5ZM13 3h6a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2.584l1.25 3H15.5l-1.25-3h-4.5L8.5 22H6.333l1.25-3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h6V1h2v2ZM5 5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconPresentationNumberOne[iconSymbol] = true;
var IconPresentationPlay = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M11 1v2H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2.583l-1.25 3H8.5l1.25-3h4.5l1.25 3h2.166l-1.25-3H19a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-6V1h-2ZM4 6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6Zm7 2 4 2.5v1L11 14l-1-.5v-5l1-.5Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconPresentationPlay[iconSymbol] = true;
var IconPresentationPlus = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M11 1v2H5C3.275 3 2 4.483 2 6.154v9.692C2 17.516 3.275 19 5 19h2.583l-1.25 3H8.5l1.25-3h4.5l1.25 3h2.166l-1.25-3H19c1.725 0 3-1.483 3-3.154V14h-2v1.846c0 .709-.516 1.154-1 1.154H5c-.484 0-1-.445-1-1.154V6.154C4 5.446 4.516 5 5 5h10V3h-2V1h-2Zm9 3v3h3v2h-3v3h-2V9h-3V7h3V4h2Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconPresentationPlus[iconSymbol] = true;
var IconPrevious = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M4 4v16h2V4H4Zm4 7v2l10 6 2-1V6l-2-1-10 6Zm10 5.667L10.22 12 18 7.332v9.335Z"
        }
      )
    );
  }
);
IconPrevious[iconSymbol] = true;
var IconProgressBar = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "m22 7 1 1v7l-1 1H2l-1-1V8l1-1h20Zm-12 7h11V9H10v5Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconProgressBar[iconSymbol] = true;
var IconProhibit = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M11.997 2c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10ZM7.094 18.32A8 8 0 0 0 19.997 12c0-1.848-.63-3.548-1.682-4.902L7.094 18.319ZM11.997 4A8 8 0 0 0 5.68 16.905L16.902 5.683A7.963 7.963 0 0 0 11.997 4Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconProhibit[iconSymbol] = true;
var IconProtoButton = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M2 9a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v5h-2V9a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h5v2H5a3 3 0 0 1-3-3V9Zm10.642 1.119a1.13 1.13 0 0 1 1.316.224l5.66 5.779c.39.396.447.93.322 1.34-.125.41-.498.87-1.123.924l-1.762.152.783 2.115a1 1 0 0 1-1.876.694l-.707-1.912-1.064 1.062a1.263 1.263 0 0 1-1.47.239A1.325 1.325 0 0 1 12 19.545v-8.381c0-.44.242-.847.642-1.045ZM14 13.244v4.618l.84-.839a1.28 1.28 0 0 1 .791-.37l1.575-.136L14 13.244Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconProtoButton[iconSymbol] = true;
var IconProtoCheckbox = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M19 6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6Zm2 12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12Zm-4.21-9.387-5.429 7-1.583-.004-2.571-3.347 1.586-1.219 1.781 2.32 4.636-5.976 1.58 1.226Z"
        }
      )
    );
  }
);
IconProtoCheckbox[iconSymbol] = true;
var IconProtoDropdown = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M12.707 10.293 15 12.586l2.293-2.293 1.414 1.414-3 3h-1.414l-3-3 1.414-1.414ZM20 7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7Zm2 10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10Z"
        }
      )
    );
  }
);
IconProtoDropdown[iconSymbol] = true;
var IconProtoInput = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20 7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7Zm2 10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10ZM8 16H6V8h2v8Z"
        }
      )
    );
  }
);
IconProtoInput[iconSymbol] = true;
var IconProtoNumber = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20 7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7Zm2 10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10Zm-9.293-4.707L15 14.586l2.293-2.293 1.414 1.414-3 3h-1.414l-3-3 1.414-1.414Zm4.586-.586L15 9.414l-2.293 2.293-1.414-1.414 3-3h1.414l3 3-1.414 1.414Z"
        }
      )
    );
  }
);
IconProtoNumber[iconSymbol] = true;
var IconProtoRadio = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20 12a8 8 0 1 0-8 8v2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10v-2a8 8 0 0 0 8-8Zm-4 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
        }
      )
    );
  }
);
IconProtoRadio[iconSymbol] = true;
var IconProtoSlider = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M12 9a3 3 0 1 1-2.826 4H2v-2h7.174c.412-1.165 1.52-2 2.826-2Zm10 4h-5v-2h5v2Z"
        }
      )
    );
  }
);
IconProtoSlider[iconSymbol] = true;
var IconPrototypeFormat = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M17 5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5Zm-3 1v2h-4V6h4Zm5 13a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v14Z"
        }
      )
    );
  }
);
IconPrototypeFormat[iconSymbol] = true;
var IconPushPinFilled = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m7.81 18.31-3.75 3.75-2.122-2.12 3.751-3.75 2.122 2.12Zm9.397-16.017 4.5 4.5.025 1.387-4.398 4.739c.746 2.71-.016 5.678-2.126 7.788h-1.415l-10.5-10.5V8.793c2.11-2.11 5.076-2.873 7.787-2.128l4.74-4.398 1.387.026Z"
        }
      )
    );
  }
);
IconPushPinFilled[iconSymbol] = true;
var IconPushPin = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "m17.207 2.293 4.5 4.5.025 1.387-4.398 4.739c.746 2.71-.016 5.678-2.126 7.788l-.333.332h-1.414l-4.543-4.543-4.711 4.711-1.414-1.414 4.71-4.711-4.542-4.543V9.125l.332-.332c2.11-2.11 5.076-2.873 7.787-2.128l4.74-4.398 1.387.026Zm-5.64 6.65-.575-.209-.199-.068c-1.913-.617-4.058-.207-5.694 1.182L14.15 18.9c1.437-1.693 1.827-3.931 1.115-5.893l-.21-.575 4.556-4.907-3.138-3.137-4.908 4.553Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconPushPin[iconSymbol] = true;
var IconQrCode = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m10 13 1 1v6l-1 1H4l-1-1v-6l1-1h6Zm-5 6h4v-4H5v4Zm5-16 1 1v6l-1 1H4l-1-1V4l1-1h6ZM5 9h4V5H5v4Zm15-6 1 1v6l-1 1h-6l-1-1V4l1-1h6Zm-5 6h4V5h-4v4Zm0 6h-2v2h2v-2Zm2-2h-2v2h2v-2Zm-2 0h-2v2h2v-2Zm2 6h-2v2h2v-2Zm2-4h-2v2h2v-2Zm2-2h-2v2h2v-2Zm-4 4h-2v2h2v-2Zm-2 2h-2v2h2v-2Zm6 0h-2v2h2v-2Zm0-2h-2v2h2v-2Z"
        }
      )
    );
  }
);
IconQrCode[iconSymbol] = true;
var IconQuestionMarkCircle = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M11 16h2v2h-2v-2Zm3-6a2 2 0 1 0-4 0H8a4 4 0 1 1 5 3.874v1.122h-2V13l1-1a2 2 0 0 0 2-2Zm6 2a8 8 0 1 0-16 0 8 8 0 0 0 16 0Zm2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
        }
      )
    );
  }
);
IconQuestionMarkCircle[iconSymbol] = true;
var IconQuestionMark = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M11 19h2v2h-2v-2Zm5-10c0-1.031-.484-2.034-1.265-2.793C13.951 5.444 12.941 5 12 5c-.94 0-1.95.444-2.735 1.207C8.484 6.967 8 7.969 8 9H6c0-1.662.773-3.16 1.871-4.228C8.965 3.71 10.456 3 12 3c1.544 0 3.035.709 4.129 1.772C17.227 5.84 18 7.338 18 9s-.773 3.16-1.871 4.227c-.855.832-1.953 1.444-3.129 1.672V17h-2v-3l1-1c.94 0 1.95-.444 2.735-1.207C15.516 11.033 16 10.031 16 9Z"
        }
      )
    );
  }
);
IconQuestionMark[iconSymbol] = true;
var IconQuotes = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M9 4c.488 0 .996.159 1.39.528.406.38.61.905.61 1.472v7c0 2.568-.832 4.29-1.726 5.383a6.21 6.21 0 0 1-1.23 1.153 4.822 4.822 0 0 1-.565.344l-.045.021-.016.007-.007.003-.003.002-.815-1.826H6.59l-.003.003h-.003l.006-.002a2.84 2.84 0 0 0 .304-.187 4.26 4.26 0 0 0 .832-.784c.503-.615 1.047-1.6 1.218-3.117H4c-.488 0-.996-.159-1.39-.528C2.203 13.092 2 12.567 2 12V6a2 2 0 0 1 2-2h5Zm11 0c.488 0 .996.159 1.39.528.406.38.61.905.61 1.472v7c0 2.568-.832 4.29-1.726 5.383a6.21 6.21 0 0 1-1.23 1.153 4.828 4.828 0 0 1-.566.344l-.044.021-.016.007-.007.003-.003.002-.815-1.826h-.003l-.003.003h-.003l.006-.002.054-.028c.053-.03.14-.082.25-.159a4.26 4.26 0 0 0 .832-.784c.503-.615 1.047-1.6 1.218-3.117H15c-.488 0-.996-.159-1.39-.528-.406-.38-.61-.905-.61-1.472V6c0-.567.204-1.092.61-1.472.394-.37.902-.528 1.39-.528h5Zm-5 8h5V6h-5v6ZM4 12h5V6H4v6Z"
        }
      )
    );
  }
);
IconQuotes[iconSymbol] = true;
var IconRaisedHand = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M17.088 6.75c0-.656-.18-1.33-.608-1.863C16.034 4.33 15.37 4 14.588 4a2.58 2.58 0 0 0-.57.063 2.755 2.755 0 0 0-.538-1.176C13.034 2.33 12.37 2 11.588 2c-.782 0-1.446.33-1.893.887a2.753 2.753 0 0 0-.536 1.175A2.599 2.599 0 0 0 8.588 4c-.783 0-1.446.33-1.893.887-.279.348-.45.757-.537 1.181A2.364 2.364 0 0 0 5.588 6C4.7 6 4.035 6.465 3.63 7.07c-.384.576-.543 1.282-.543 1.93v4c0 2.319.455 4.532 1.535 6.2 1.044 1.612 2.644 2.662 4.78 2.787l.435.013h1.5c2.343 0 4.202-1.038 5.873-2.709l4.003-4.003a2.684 2.684 0 0 0 .173-3.605l-.177-.194a2.685 2.685 0 0 0-3.459-.281l-.663.475V6.75Zm-2 6.42-1.241 1.073 1.306 1.514 1.557-1.345 2.205-1.578a.685.685 0 0 1 .834.027l.094.094a.683.683 0 0 1-.043.919l-4.003 4.003C14.374 19.3 12.995 20 11.337 20h-1.5l-.302-.008c-1.482-.082-2.52-.776-3.233-1.879C5.507 16.886 5.088 15.1 5.088 13V9c0-.352.09-.646.207-.82.096-.145.18-.18.293-.18.112 0 .197.035.293.18.116.174.207.468.207.82v3h2V6.75c0-.31.086-.51.167-.611.062-.077.149-.139.333-.139.184 0 .271.062.333.139.08.1.167.301.167.611V12h2V4.75c0-.31.087-.51.168-.611.062-.077.148-.139.332-.139.184 0 .271.062.333.139.08.1.167.301.167.611V12h2V6.75c0-.31.086-.51.167-.611.062-.077.149-.139.333-.139.184 0 .271.062.333.139.08.1.167.301.167.611v6.42Z"
        }
      )
    );
  }
);
IconRaisedHand[iconSymbol] = true;
var IconRally = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M10.198 18.613A3.8 3.8 0 0 1 8.82 17.23a3.757 3.757 0 1 1 4.95 1.485 1.875 1.875 0 1 0-3.571-.103Zm-2.206-.8a7.103 7.103 0 0 1-2.179-2.52 6.969 6.969 0 0 1-.775-3.215 7.04 7.04 0 1 1 14.081 0 6.969 6.969 0 0 1-.776 3.216 7.103 7.103 0 0 1-2.178 2.518 4.765 4.765 0 1 0-8.173 0Zm4.087 2.311a8.046 8.046 0 1 0-.001-16.092 8.047 8.047 0 0 0-.001 16.092h.002ZM12 22c-5.523 0-10-4.475-10-9.998S6.477 2 12 2s10 4.478 10 10.001S17.523 22 12 22v-.001Z"
        }
      )
    );
  }
);
IconRally[iconSymbol] = true;
var IconRatio169 = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m20 6 1 1v10l-1 1H4l-1-1V7l1-1h16ZM5 16h14V8H5v8Z"
        }
      )
    );
  }
);
IconRatio169[iconSymbol] = true;
var IconRatio43 = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m19 6 1 1v10l-1 1H5l-1-1V7l1-1h14ZM6 16h12V8H6v8Z"
        }
      )
    );
  }
);
IconRatio43[iconSymbol] = true;
var IconRatioSquare = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m17 6 1 1v10l-1 1H7l-1-1V7l1-1h10ZM8 16h8V8H8v8Z"
        }
      )
    );
  }
);
IconRatioSquare[iconSymbol] = true;
var IconRectangleArrowUpCenter = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m12.707 9.293 4 4-1.414 1.414L13 12.414V21h-2v-8.586l-2.293 2.293-1.414-1.414 4-4h1.414ZM19 3a3 3 0 0 1 3 3v5h-2V6a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v5H2V6a3 3 0 0 1 3-3h14Z"
        }
      )
    );
  }
);
IconRectangleArrowUpCenter[iconSymbol] = true;
var IconRectangleDashLines = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m21 4 1 1v14l-1 1H3l-1-1V5l1-1h18ZM4 18h16V6H4v12Zm14-5v2H6v-2h12ZM8 9v2H6V9h2Zm10 0v2h-8V9h8Z"
        }
      )
    );
  }
);
IconRectangleDashLines[iconSymbol] = true;
var IconRectangleDotLinePen = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M22 5v2h-2V6H4v12h5v2H3l-1-1V5l1-1h18l1 1Zm-4.457 4.543a2.768 2.768 0 1 1 3.914 3.914l-5.977 5.977-3.316.552-1.15-1.15.552-3.316 5.977-5.977Zm-4.11 6.938-.217 1.302 1.304-.217 3.816-3.816-1.086-1.086-3.816 3.816Zm6.61-5.524c-.3-.3-.786-.3-1.086 0l-.293.293 1.086 1.086.293-.293c.3-.3.3-.786 0-1.086ZM10 15H6v-2h4v2Zm-2-4H6V9h2v2Zm6 0h-4V9h4v2Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconRectangleDotLinePen[iconSymbol] = true;
var IconRectangleFrame2Lines = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m21 5 1 1v12l-1 1H3l-1-1V6l1-1h18ZM4 17h16V7H4v10Zm14-4v2H6v-2h12Zm-2-4v2H8V9h8Z"
        }
      )
    );
  }
);
IconRectangleFrame2Lines[iconSymbol] = true;
var IconRectangleLine = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M15 7a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h10ZM4 19a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-7H4v7ZM5 9a1 1 0 0 0-1 1h12a1 1 0 0 0-1-1H5Zm14-6a3 3 0 0 1 3 3v9a3.001 3.001 0 0 1-2 2.83V6a1 1 0 0 0-1-1H6.17A3.001 3.001 0 0 1 9 3h10Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconRectangleLine[iconSymbol] = true;
var IconRectanglePlayStack = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M5 2a3 3 0 0 0-3 3v13h2V5a1 1 0 0 1 1-1h13V2H5Zm15 7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9Zm2 10a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10Zm-9-8 4 2.5v1L13 17l-1-.5v-5l1-.5Z"
        }
      )
    );
  }
);
IconRectanglePlayStack[iconSymbol] = true;
var IconRectanglePortraitDashSquareTopCenter = (0, import_react33.forwardRef)(({ size = "medium", ...props }, forwardRef22) => {
  const [debug] = useLocalStorage("DEBUG_ICON", false);
  return (0, import_react33.createElement)(
    StyledIcon,
    {
      ...props,
      debug,
      "aria-hidden": true,
      size,
      viewBox: "0 0 24 24",
      fill: "none",
      ref: forwardRef22
    },
    (0, import_jsx_runtime4.jsx)(
      "path",
      {
        fill: "currentColor",
        d: "M4.8 18c0 .552.798 1.2 1.35 1.2H8.4V21H6a3 3 0 0 1-3-3v-2.4h1.8V18Zm9 3h-3.6v-1.8h3.6V21Zm7.2-3a3 3 0 0 1-3 3h-2.4v-1.8H18c.552 0 1.2-.648 1.2-1.2v-2.4H21V18ZM4.8 13.8H3v-3.6h1.8v3.6Zm16.2 0h-1.8v-3.6H21v3.6ZM18 3a3 3 0 0 1 3 3v2.4h-1.8V6c0-.552-.648-1.2-1.2-1.2h-2V11H8V4.8H6c-.552 0-1.2.648-1.2 1.2v2.4H3V6a3 3 0 0 1 3-3h12Z"
      }
    )
  );
});
IconRectanglePortraitDashSquareTopCenter[iconSymbol] = true;
var IconRectanglePortraitDashSquareTopLeft = (0, import_react33.forwardRef)(({ size = "medium", ...props }, forwardRef22) => {
  const [debug] = useLocalStorage("DEBUG_ICON", false);
  return (0, import_react33.createElement)(
    StyledIcon,
    {
      ...props,
      debug,
      "aria-hidden": true,
      size,
      viewBox: "0 0 24 24",
      fill: "none",
      ref: forwardRef22
    },
    (0, import_jsx_runtime4.jsx)(
      "path",
      {
        fill: "currentColor",
        d: "M4.8 18c0 .552.798 1.2 1.35 1.2H8.4V21H6a3 3 0 0 1-3-3v-2.4h1.8V18Zm9 3h-3.6v-1.8h3.6V21Zm7.2-3a3 3 0 0 1-3 3h-2.4v-1.8H18c.552 0 1.2-.648 1.2-1.2v-2.4H21V18ZM13.8 3v1.8H12V11H4.8v2.8H3V6a3 3 0 0 1 3-3h7.8ZM21 13.8h-1.8v-3.6H21v3.6ZM18 3a3 3 0 0 1 3 3v2.4h-1.8V6c0-.552-.648-1.2-1.2-1.2h-2.4V3H18Z"
      }
    )
  );
});
IconRectanglePortraitDashSquareTopLeft[iconSymbol] = true;
var IconRectanglePortraitDash = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M6 4.8c-.552 0-1.2.648-1.2 1.2v2.4H3V6a3 3 0 0 1 3-3h2.4v1.8H6Zm7.8 0h-3.6V3h3.6v1.8Zm4.2 0h-2.4V3H18a3 3 0 0 1 3 3v2.4h-1.8V6c0-.552-.648-1.2-1.2-1.2ZM4.8 10.2v3.6H3v-3.6h1.8Zm14.4 3.6v-3.6H21v3.6h-1.8ZM4.8 15.6V18c0 .552.798 1.2 1.35 1.2H8.4V21H6a3 3 0 0 1-3-3v-2.4h1.8ZM19.2 18v-2.4H21V18a3 3 0 0 1-3 3h-2.4v-1.8H18c.552 0 1.2-.648 1.2-1.2Zm-9 1.2h3.6V21h-3.6v-1.8Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconRectanglePortraitDash[iconSymbol] = true;
var IconRectanglePortraitFilled = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M4 6.667A2.667 2.667 0 0 1 6.667 4h10.666A2.667 2.667 0 0 1 20 6.667v10.666A2.667 2.667 0 0 1 17.333 20H6.667A2.667 2.667 0 0 1 4 17.333V6.667Z"
        }
      )
    );
  }
);
IconRectanglePortraitFilled[iconSymbol] = true;
var IconRectanglePortraitSquareBottomRight = (0, import_react33.forwardRef)(({ size = "medium", ...props }, forwardRef22) => {
  const [debug] = useLocalStorage("DEBUG_ICON", false);
  return (0, import_react33.createElement)(
    StyledIcon,
    {
      ...props,
      debug,
      "aria-hidden": true,
      size,
      viewBox: "0 0 24 24",
      fill: "none",
      ref: forwardRef22
    },
    (0, import_jsx_runtime4.jsx)(
      "path",
      {
        fill: "currentColor",
        d: "M11.5 10.5h7v6h-7v-6ZM20 7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10l.005.102A1 1 0 0 0 5 18h14a1 1 0 0 0 1-1V7Zm2 10a3 3 0 0 1-3 3H5a3 3 0 0 1-2.996-2.846L2 17V7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10Z"
      }
    )
  );
});
IconRectanglePortraitSquareBottomRight[iconSymbol] = true;
var IconRectanglePortraitSquareTopLeft = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12Zm-6 8H5v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-6v6Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconRectanglePortraitSquareTopLeft[iconSymbol] = true;
var IconRectanglePortrait = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12ZM6 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconRectanglePortrait[iconSymbol] = true;
var IconRectangleTick = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m20.809 4.588-8 11-1.59.037-4-5 1.562-1.25 3.18 3.977 7.23-9.94 1.618 1.176ZM3 18V6a3 3 0 0 1 3-3h8v2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7h2v7a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3Z"
        }
      )
    );
  }
);
IconRectangleTick[iconSymbol] = true;
var IconRectangleTriangleBottomCenter = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20 16V6a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3v2H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-3v-2h3a1 1 0 0 0 1-1Zm-7.2.4 3 4L15 22H9l-.8-1.6 3-4h1.6ZM10.999 20h2.002L12 18.666 10.999 20Z"
        }
      )
    );
  }
);
IconRectangleTriangleBottomCenter[iconSymbol] = true;
var IconRectanglesLayout = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m13 4-1 1v6l1 1h8l1-1V5l-1-1h-8Zm7 6h-6V6h6v4ZM3 3 2 4v15l1 1h6l1-1V4L9 3H3Zm5 15H4V5h4v13Zm5-4-1 1v5l1 1h6l1-1v-5l-1-1h-6Zm5 5h-4v-3h4v3Z"
        }
      )
    );
  }
);
IconRectanglesLayout[iconSymbol] = true;
var IconRectanglesSquares = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m1 14 1-1h10l1 1v6l-1 1H2l-1-1v-6Zm10 5v-4H3v4h8ZM1 4l1-1h6l1 1v6l-1 1H2l-1-1V4Zm6 5V5H3v4h4Zm4-5 1-1h10l1 1v6l-1 1H12l-1-1V4Zm10 5V5h-8v4h8Zm-6 5 1-1h6l1 1v6l-1 1h-6l-1-1v-6Zm6 5v-4h-4v4h4Z"
        }
      )
    );
  }
);
IconRectanglesSquares[iconSymbol] = true;
var IconRectanglesThreeAligned = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M17 7h2V5h-2v2Zm4 .5A1.5 1.5 0 0 1 19.5 9h-3A1.5 1.5 0 0 1 15 7.5v-3A1.5 1.5 0 0 1 16.5 3h3A1.5 1.5 0 0 1 21 4.5v3ZM5 5v6h6V5H5Zm8 6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6Zm-8 6v3h14v-3H5Zm16 3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3Z"
        }
      )
    );
  }
);
IconRectanglesThreeAligned[iconSymbol] = true;
var IconRectanglesThreeFree = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M19.063 15a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-14a1 1 0 0 1-1-1v-5l.005-.102A1 1 0 0 1 5.063 15h14Zm-13 5h12v-3h-12v3ZM4.643 1.772a1 1 0 0 1 .76-.086l7.69 2.205.097.033a1 1 0 0 1 .613 1.104l-.024.1-2.205 7.69a1 1 0 0 1-1.237.685l-7.69-2.205a1.002 1.002 0 0 1-.685-1.237l2.205-7.69.031-.093c.085-.214.242-.393.445-.506Zm14.89 3.324a1 1 0 0 1 1.14.708l1.102 3.845a1 1 0 0 1-.685 1.237l-3.845 1.103a1.001 1.001 0 0 1-1.238-.686l-1.102-3.845a1 1 0 0 1 .687-1.237l3.844-1.102.097-.023ZM4.159 9.651l5.767 1.653 1.654-5.767-5.768-1.654L4.16 9.651Zm12.944-1.784.551 1.923 1.923-.551-.55-1.923-1.924.55Z"
        }
      )
    );
  }
);
IconRectanglesThreeFree[iconSymbol] = true;
var IconRectanglesThreeOverlap = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m21 2 1 1v10l-1 1h-3v3l-1 1h-3v3l-1 1H4l-1-1V11l1-1h3V7l1-1h3V3l1-1h9ZM5 20h7v-8H5v8Zm4-10h4l1 1v5h2V8H9v2Zm4-4h4l1 1v5h2V4h-7v2Z"
        }
      )
    );
  }
);
IconRectanglesThreeOverlap[iconSymbol] = true;
var IconRectanglesTwoLine = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M21 21h-2V3h2v18ZM5 5v4h10V5H5Zm12 4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4ZM5 15v4h10v-4H5Zm12 4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4Z"
        }
      )
    );
  }
);
IconRectanglesTwoLine[iconSymbol] = true;
var IconRectanglesTwoLinesFour = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M5 15v4h4v-4H5Zm6 4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4ZM5 5v4h4V5H5Zm6 4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4Zm10-5v2h-8V4h8Zm-2 4v2h-6V8h6Zm2 6v2h-8v-2h8Zm-2 4v2h-6v-2h6Z"
        }
      )
    );
  }
);
IconRectanglesTwoLinesFour[iconSymbol] = true;
var IconRectanglesTwoMinus = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20 9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9Zm2 10a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10ZM2 14V5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3h-2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1v2a3 3 0 0 1-3-3Zm16-1v2h-8v-2h8Z"
        }
      )
    );
  }
);
IconRectanglesTwoMinus[iconSymbol] = true;
var IconRectanglesTwoPlus = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20 9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9Zm2 10a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10ZM2 14V5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3h-2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1v2a3 3 0 0 1-3-3Zm13-4v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2Z"
        }
      )
    );
  }
);
IconRectanglesTwoPlus[iconSymbol] = true;
var IconRectanglesTwoUser = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M14 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm5-5a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h10Zm-5 12c-1.45 0-2.727.8-3.39 2h6.78A3.87 3.87 0 0 0 14 18ZM9 8a1 1 0 0 0-1 1v10c0 .364.195.68.485.855a5.873 5.873 0 0 1 11.028 0A.997.997 0 0 0 20 19V9a1 1 0 0 0-1-1H9Zm5-6a3 3 0 0 1 3 3h-2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1v2a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h9Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconRectanglesTwoUser[iconSymbol] = true;
var IconResize = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M4 18.667C4 19.281 4.886 20 5.5 20H8v2H5.333A3.333 3.333 0 0 1 2 18.667V16h2v2.667ZM14 22h-4v-2h4v2Zm8-3.333A3.333 3.333 0 0 1 18.667 22H16v-2h2.667C19.28 20 20 19.28 20 18.667V16h2v2.667ZM4 14H2v-4h2v4Zm18 0h-2v-4h2v4ZM8 4H5.333C4.72 4 4 4.72 4 5.333V8H2V5.333A3.333 3.333 0 0 1 5.333 2H8v2Zm10.667-2A3.333 3.333 0 0 1 22 5.333V8h-2V5.333C20 4.72 19.28 4 18.667 4H16V2h2.667ZM14 4h-4V2h4v2Zm-1.61 4.403-2.48.092 2.09 2.09L10.586 12 8.495 9.91l-.092 2.48-1.998-.073.176-4.773.963-.963 4.773-.176.073 1.998Zm5.029 8.053-.963.963-4.773.176-.073-1.998 2.48-.092-2.09-2.09L13.414 12l2.091 2.09.092-2.48 1.998.073-.176 4.773Z"
        }
      )
    );
  }
);
IconResize[iconSymbol] = true;
var IconRhombus = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M11.21 2.384a1.25 1.25 0 0 1 1.58 0l.094.086 8.646 8.646a1.25 1.25 0 0 1 0 1.768l-8.646 8.646a1.25 1.25 0 0 1-1.768 0L2.47 12.884a1.25 1.25 0 0 1 0-1.768l8.646-8.646.095-.086ZM4.415 12 12 19.586 19.586 12 12 4.414 4.414 12Z"
        }
      )
    );
  }
);
IconRhombus[iconSymbol] = true;
var IconRocket = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M19.274 2.961a11.706 11.706 0 0 1 .765.038l.049.005h.014l.005.002h.002l.883.87.001.003v.005l.002.014a3.545 3.545 0 0 1 .019.204c.01.132.02.32.025.551a12.12 12.12 0 0 1-.11 1.857c-.203 1.486-.75 3.437-2.16 5.13l-.062.067-.622.621.895 4.476-.273.903-4 4-1.688-.51-.94-4.705-4.572-4.571-4.703-.94-.511-1.688 4-4 .903-.273 4.475.894.622-.621.283-.267c1.444-1.278 3.3-1.769 4.733-1.956a13.589 13.589 0 0 1 1.965-.109Zm-5.189 13.367.528 2.644 2.301-2.301-.528-2.644-2.301 2.301ZM19.039 4.96c-.401 0-.912.02-1.473.094-1.263.165-2.651.575-3.662 1.468l-.197.185L9.414 11 13 14.586l4.25-4.251c1.075-1.302 1.525-2.84 1.696-4.096.067-.49.09-.929.093-1.279ZM5.027 9.386l2.644.528 2.3-2.3-2.643-.529-2.3 2.3Zm1.68 6.321c-.782.782-1.136 1.153-1.36 1.645-.16.353-.271.82-.32 1.62.8-.049 1.268-.159 1.621-.32.492-.223.863-.577 1.645-1.359l1.414 1.414c-.718.718-1.347 1.364-2.23 1.766C6.585 20.878 5.529 21 4 21l-1-1c0-1.53.122-2.585.527-3.477.402-.883 1.048-1.512 1.766-2.23l1.414 1.414Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconRocket[iconSymbol] = true;
var IconRssRectangle = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M2 14a6 6 0 0 1 6 6H6a4 4 0 0 0-4-4v-2Zm0-4c5.523 0 10 4.477 10 10h-2a8 8 0 0 0-8-8v-2Zm2 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm16-3V6a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2H2V6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-5v-2h5a1 1 0 0 0 1-1Z"
        }
      )
    );
  }
);
IconRssRectangle[iconSymbol] = true;
var IconRss = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M7 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm5 1c0-2.766-.915-4.733-2.304-6.016C8.294 13.69 6.306 13 4 13H3v-2h1c2.694 0 5.206.81 7.054 2.516C12.914 15.233 14 17.766 14 21v1h-2v-1Zm8 0c0-4.76-1.662-8.748-4.457-11.543S8.76 5 4 5H3V3h1c5.24 0 9.752 1.838 12.957 5.043S22 15.761 22 21v1h-2v-1Z"
        }
      )
    );
  }
);
IconRss[iconSymbol] = true;
var IconScissors = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M7 3a4 4 0 0 1 3.523 5.893L13 10.75l7.4-5.55 1.2 1.6-11.077 8.306a4 4 0 1 1-1.367-1.475L11.333 12l-2.177-1.633A4 4 0 1 1 7 3Zm0 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM7 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm14.6 12.2-1.2 1.6-6-4.5 1.2-1.6 6 4.5Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconScissors[iconSymbol] = true;
var IconScreenUser = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M22 19v2H2v-2h20Zm-10-6a4.972 4.972 0 0 1 4.564 3H19a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h2.437A4.972 4.972 0 0 1 12 13Zm0 2c-.878 0-1.673.385-2.22 1h4.44A2.965 2.965 0 0 0 12 15Zm1-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm7 6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v9Z"
        }
      )
    );
  }
);
IconScreenUser[iconSymbol] = true;
var IconScrollbarXy = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M19 6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6Zm2 12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12Zm-4-5h-2v-2h2v2Zm0 4h-2v-2h2v2Zm0-8h-2V7h2v2Z"
        }
      )
    );
  }
);
IconScrollbarXy[iconSymbol] = true;
var IconSelect = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M8.707 10.293 12 13.586l3.293-3.293 1.414 1.414-4 4h-1.414l-4-4 1.414-1.414ZM20 12a8 8 0 1 0-16 0 8 8 0 0 0 16 0Zm2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
        }
      )
    );
  }
);
IconSelect[iconSymbol] = true;
var IconSentiment = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M12.441 9.636a3.5 3.5 0 0 1-6.883 0l1.474-.272a2.002 2.002 0 0 0 3.935 0l1.474.272ZM6 8V6h2v2H6Zm4 0V6h2v2h-2Zm6 1A7 7 0 1 1 2 9a7 7 0 0 1 14 0Zm-2 0A5 5 0 1 0 4 9a5 5 0 0 0 10 0Zm8 6a7 7 0 0 1-13.063 3.501l1.731-1.002a5 5 0 1 0 6.831-6.831l1.002-1.73A6.997 6.997 0 0 1 22 15Zm-5.032 2.886a2.002 2.002 0 0 0-3.935 0l-1.474-.272a3.5 3.5 0 0 1 6.883 0l-1.474.272ZM16 14v-2h2v2h-2Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconSentiment[iconSymbol] = true;
var IconShadow = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M16 3a3 3 0 0 1 3 3v1a2 2 0 0 1 2 2v9a3 3 0 0 1-3 3H9a2 2 0 0 1-2-2H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h10ZM6 5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconShadow[iconSymbol] = true;
var IconShapeSparkle = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M13 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8h2v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h8v2Zm-5.257 9.144c.125-.525.89-.526 1.014 0l.01.054.017.098a2.402 2.402 0 0 0 2.018 1.936c.596.086.599.95 0 1.036a2.401 2.401 0 0 0-2.034 2.034c-.087.599-.95.596-1.036 0a2.402 2.402 0 0 0-2.034-2.034c-.598-.087-.597-.95 0-1.036l.098-.016a2.402 2.402 0 0 0 1.936-2.018l.01-.054Zm9.479-10.498a2.206 2.206 0 0 1 3.12 0l1.012 1.012a2.206 2.206 0 0 1 0 3.12l-6.705 6.705-3.616.517L10 12.967l.517-3.616 6.705-6.705Zm-4.82 7.648-.218 1.521 1.521-.217 3.74-3.74-1.304-1.303-3.74 3.739Zm6.526-6.233a.207.207 0 0 0-.292 0l-1.081 1.08 1.303 1.303 1.081-1.08a.207.207 0 0 0 0-.292l-1.011-1.011Z"
        }
      )
    );
  }
);
IconShapeSparkle[iconSymbol] = true;
var IconShapesLinesStacked = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m21.993 13.115-.75 6.5-1.986-.23.42-3.65-5.97 5.972-1.414-1.414 5.97-5.972-3.649.422-.228-1.986 6.499-.75 1.108 1.108ZM12 7a5.002 5.002 0 0 1 4.843 3.751l-1.938.498A3.002 3.002 0 0 0 9 12a3 3 0 0 0 4.134 2.778l.757 1.852A4.977 4.977 0 0 1 12 17a5 5 0 0 1 0-10Zm-2-5a2 2 0 0 1 2 2v2h-2V4H4v6h2v2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6Z"
        }
      )
    );
  }
);
IconShapesLinesStacked[iconSymbol] = true;
var IconShapesLines = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "m7.374 13.514 3.9 7L10.4 22H2.5l-.868-1.496 4-7 1.742.01ZM4.223 20h4.475l-2.21-3.966L4.223 20Zm17.774-5.923-.5 6.5-1.994-.154.292-3.805-5.088 5.089-1.414-1.414 5.089-5.09-3.805.294-.154-1.994 6.5-.5 1.074 1.074ZM17.75 1.75a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5Zm0 2a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5ZM11 3v7l-1 1H3l-1-1V3l1-1h7l1 1ZM4 9h5V4H4v5Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconShapesLines[iconSymbol] = true;
var IconShapes = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M7.616 2 .999 14.534 1.883 16h13.234l.885-1.466L9.384 2H7.616ZM8.5 4.61 13.459 14H3.542L8.5 4.61ZM16 10.1a5.002 5.002 0 0 1-1 9.9 4.992 4.992 0 0 1-4-2H8.674A7 7 0 1 0 16 8.07v2.03Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconShapes[iconSymbol] = true;
var IconShieldCheck = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m19 6.693-7-2.625-7 2.625v6.352c0 1.346.482 2.647 1.357 3.669a12.278 12.278 0 0 0 3.004 2.537L12 20.833l2.639-1.582a12.279 12.279 0 0 0 3.004-2.537l.16-.195A5.638 5.638 0 0 0 19 13.045V6.693Zm2 6.352a7.638 7.638 0 0 1-1.622 4.706l-.217.264a14.275 14.275 0 0 1-3.494 2.95l-3.152 1.892h-1.03l-3.152-1.891a14.275 14.275 0 0 1-3.111-2.522l-.383-.43A7.637 7.637 0 0 1 3 13.045V6l.648-.937 8-3h.704l8 3L21 6v7.045ZM16.814 9.08l-5 7-1.573.07-3-3.5 1.519-1.3 2.169 2.53 4.258-5.961 1.628 1.162Z"
        }
      )
    );
  }
);
IconShieldCheck[iconSymbol] = true;
var IconShieldLockFilled = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "m4 6 8-3 8 3v7.044a6.638 6.638 0 0 1-1.598 4.32 13.275 13.275 0 0 1-3.25 2.744L12 22l-3.153-1.892a13.274 13.274 0 0 1-3.249-2.744A6.638 6.638 0 0 1 4 13.044V6Zm7 3.5a1 1 0 1 1 2 0V11h-2V9.5Zm4 0V11l1 1v4l-1 1H9l-1-1v-4l1-1V9.5a3 3 0 1 1 6 0ZM14 13v2h-4v-2h4Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconShieldLockFilled[iconSymbol] = true;
var IconShieldLock = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M12 6.5a3 3 0 0 1 3 3V11l1 1v4l-1 1H9l-1-1v-4l1-1V9.5a3 3 0 0 1 3-3Zm0 2a1 1 0 0 0-1 1V11h2V9.5a1 1 0 0 0-1-1Zm8.352-3.437L21 6v7.045a7.638 7.638 0 0 1-1.622 4.706l-.217.264a14.275 14.275 0 0 1-3.494 2.95l-3.152 1.892h-1.03l-3.152-1.891a14.275 14.275 0 0 1-3.111-2.522l-.383-.43A7.637 7.637 0 0 1 3 13.045V6l.648-.937 8-3h.704l8 3ZM5 6.693v6.352c0 1.346.482 2.647 1.357 3.669a12.278 12.278 0 0 0 3.004 2.537L12 20.833l2.639-1.582a12.279 12.279 0 0 0 3.004-2.537l.16-.195A5.638 5.638 0 0 0 19 13.045V6.693l-7-2.625-7 2.625Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconShieldLock[iconSymbol] = true;
var IconShoppingBag = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M13.5 5.5a1.5 1.5 0 1 0-3 0v1h3v-1Zm-8.426 15h13.852l-.857-12H5.93l-.857 12Zm3.425-9V10h2v1.5a1.5 1.5 0 0 0 3 0V10h2v1.5a3.5 3.5 0 1 1-7 0Zm7-5h2.57a2 2 0 0 1 1.995 1.857l.856 12a2 2 0 0 1-1.994 2.143H5.074a2 2 0 0 1-1.996-2.143l.858-12A2 2 0 0 1 5.93 6.5h2.568v-1a3.5 3.5 0 0 1 7 0v1Z"
        }
      )
    );
  }
);
IconShoppingBag[iconSymbol] = true;
var IconShuffle = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M7 5c1.857 0 3.086.89 3.91 2.148.771 1.178 1.213 2.717 1.605 4.104.412 1.458.78 2.792 1.366 3.853.562 1.018 1.269 1.681 2.336 1.918.705.157 1.653.18 2.543.15l-1.467-1.466 1.414-1.414 3 3v1.414l-3 3-1.414-1.414 1.106-1.107c-.857.01-1.81-.031-2.616-.21-1.792-.399-2.907-1.553-3.653-2.904-.722-1.307-1.15-2.894-1.54-4.276-.411-1.454-.782-2.678-1.354-3.552C8.717 7.452 8.072 7 7 7H3V5h4Zm3.665 11.746c-.084.075-.194.201-.412.443a9.395 9.395 0 0 1-.732.742C8.948 18.44 8.105 19 7 19H3v-2h4c.395 0 .778-.196 1.192-.564.204-.181.39-.381.577-.587.161-.18.376-.427.566-.596l1.33 1.493ZM21.707 5.293v1.414l-3 3-1.414-1.414 1.468-1.468c-.762-.025-1.566-.012-2.225.091l-.32.06c-.053.012-.204.069-.46.214a9.26 9.26 0 0 0-.78.511 17.27 17.27 0 0 0-1.308 1.043l-1.336-1.49c.29-.26.864-.737 1.477-1.177.306-.22.637-.44.956-.623.3-.172.663-.352 1.018-.43l.421-.08c.705-.112 1.484-.14 2.195-.13l-1.106-1.107 1.414-1.414 3 3Z"
        }
      )
    );
  }
);
IconShuffle[iconSymbol] = true;
var IconSidebarClosed = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M8.5 17h-3v-2h3v2Zm0-4h-3v-2h3v2Zm0-4h-3V7h3v2ZM19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14ZM5 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5V4H5Zm7 16h7a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-7v16Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconSidebarClosed[iconSymbol] = true;
var IconSidebarGlobalClosed = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M17.759 11.35v1.3l-3 3.5-1.518-1.3L14.826 13H11v-2h3.826l-1.585-1.85 1.518-1.3 3 3.5ZM19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14ZM5 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2V4H5Zm4 16h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H9v16Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconSidebarGlobalClosed[iconSymbol] = true;
var IconSidebarGlobalOpen = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M15.259 9.15 13.673 11H17.5v2h-3.827l1.586 1.85-1.518 1.3-3-3.5v-1.3l3-3.5 1.518 1.3ZM19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14ZM5 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2V4H5Zm4 16h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H9v16Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconSidebarGlobalOpen[iconSymbol] = true;
var IconSidebarOpen = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14Zm-7 18h7a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-7v16Zm-6.5-3h3v-2h-3v2Zm0-4h3v-2h-3v2Zm0-4h3V7h-3v2Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconSidebarOpen[iconSymbol] = true;
var IconSingleSparksFilled = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M10.538 3.268c.244-1.69 2.684-1.692 2.928 0a8.584 8.584 0 0 0 7.27 7.27c1.686.244 1.695 2.683 0 2.928a8.583 8.583 0 0 0-7.27 7.27c-.245 1.695-2.684 1.686-2.928 0a8.584 8.584 0 0 0-7.27-7.27c-1.692-.244-1.69-2.684 0-2.928a8.585 8.585 0 0 0 7.27-7.27Z"
        }
      )
    );
  }
);
IconSingleSparksFilled[iconSymbol] = true;
var IconSlideFormat = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M17 9v2h-3V9h3Zm0 4v2h-3v-2h3Zm-5.857-1.514a.6.6 0 0 1 0 1.028l-3.234 1.94A.6.6 0 0 1 7 13.94v-3.88a.6.6 0 0 1 .909-.515l3.234 1.94ZM19 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h14ZM5 6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5Z"
        }
      )
    );
  }
);
IconSlideFormat[iconSymbol] = true;
var IconSlideInteractive = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20 7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h7v2H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v6h-2V7Zm-3.535 16h1.145c.654-2.672 2.743-4.783 5.39-5.446V16.35L13.923 13l-.923.93L16.465 23Zm2.836-5.884a9.486 9.486 0 0 0-2.126 2.139l-1.301-3.403 3.427 1.264ZM9 8v3H6V8h3Zm0 5v3H6v-3h3Zm5-5v3h-3V8h3Z"
        }
      )
    );
  }
);
IconSlideInteractive[iconSymbol] = true;
var IconSlidersX = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M18.5 13a2.5 2.5 0 0 1 2.5 2.5v1a2.5 2.5 0 0 1-2.5 2.5h-1a2.501 2.501 0 0 1-2.45-2H3v-2h12.05a2.5 2.5 0 0 1 2.45-2h1Zm-1 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm-5-10a2.5 2.5 0 0 1 2.45 2H21v2h-6.05a2.501 2.501 0 0 1-2.45 2h-1a2.501 2.501 0 0 1-2.45-2H3V7h6.05a2.5 2.5 0 0 1 2.45-2h1Zm-1 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconSlidersX[iconSymbol] = true;
var IconSlidersY = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M6 9.05a2.5 2.5 0 0 1 2 2.45v1a2.5 2.5 0 0 1-2 2.45V20H4v-5.05a2.5 2.5 0 0 1-2-2.45v-1a2.5 2.5 0 0 1 2-2.45V4h2v5.05ZM4.5 11a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm8.5 3.05a2.5 2.5 0 0 1 2 2.45v1a2.5 2.5 0 0 1-2.5 2.5h-1A2.5 2.5 0 0 1 9 17.5v-1a2.5 2.5 0 0 1 2-2.45V4h2v10.05ZM11.5 16a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm8-12A2.5 2.5 0 0 1 22 6.5v1a2.5 2.5 0 0 1-2 2.45V20h-2V9.95a2.5 2.5 0 0 1-2-2.45v-1A2.5 2.5 0 0 1 18.5 4h1Zm-1 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconSlidersY[iconSymbol] = true;
var IconSmileyChat = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20 12a8 8 0 1 0-14.816 4.19l.103.82-.764 2.458 2.431-.77.83.103A7.976 7.976 0 0 0 12 20a8 8 0 0 0 8-8Zm2 0c0 5.523-4.477 10-10 10a9.973 9.973 0 0 1-4.864-1.263l-3.833 1.216-1.258-1.25 1.201-3.867A9.958 9.958 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10ZM7.95 8h2v2h-2V8Zm6 0h2v2h-2V8Zm2.949 5a5 5 0 0 1-9.797 0H9.17a2.998 2.998 0 0 0 5.655 0H16.9Z"
        }
      )
    );
  }
);
IconSmileyChat[iconSymbol] = true;
var IconSmileyPlus = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M2 12C2 6.477 6.477 2 12 2h1v2h-1a8 8 0 1 0 8 8v-1h2v1c0 5.523-4.477 10-10 10S2 17.523 2 12Zm16-6h-3V4h3V1h2v3h3v2h-3v3h-2V6ZM7.95 8h2v2h-2V8Zm6 0h2v2h-2V8Zm2.949 5a5 5 0 0 1-9.797 0H9.17a2.998 2.998 0 0 0 5.655 0H16.9Z"
        }
      )
    );
  }
);
IconSmileyPlus[iconSymbol] = true;
var IconSmileySticker = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M12.05 4a8 8 0 0 0-1.75 15.808.52.52 0 0 0 .478-.144.913.913 0 0 0 .27-.664v-1c0-.366.028-.725.082-1.075A5.001 5.001 0 0 1 7 12h2a3 3 0 0 0 2.729 2.988A7 7 0 0 1 18.049 11h1a.913.913 0 0 0 .665-.27.52.52 0 0 0 .144-.478A8.005 8.005 0 0 0 12.062 4h-.013Zm6.585 9h-.586a5 5 0 0 0-5 5v.586L18.635 13ZM2.05 12c0-5.523 4.477-10 10-10h.014a9.948 9.948 0 0 1 5.817 1.875A9.987 9.987 0 0 1 22.05 12v.414L12.462 22h-.414c-5.523 0-10-4.477-10-10ZM8 8h2v2H8V8Zm6 0h2v2h-2V8Z"
        }
      )
    );
  }
);
IconSmileySticker[iconSymbol] = true;
var IconSmiley = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20 12a8 8 0 1 0-16 0 8 8 0 0 0 16 0Zm2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM7.95 8h2v2h-2V8Zm6 0h2v2h-2V8Zm2.949 5a5 5 0 0 1-9.797 0H9.17a2.998 2.998 0 0 0 5.655 0H16.9Z"
        }
      )
    );
  }
);
IconSmiley[iconSymbol] = true;
var IconSocialAdo = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M22 5.745v12.16L17 22l-7.75-2.822v2.797l-4.425-5.643 12.825.911V6.295l4.35-.55Zm-4.35.55L10.563 2v2.859L3.974 6.794 2 9.328v5.756l2.825 1.248V8.954l12.825-2.66Z"
        }
      )
    );
  }
);
IconSocialAdo[iconSymbol] = true;
var IconSocialAsana = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M17.65 12.62a4.35 4.35 0 1 0 0 8.7 4.35 4.35 0 0 0 0-8.7Zm-11.3 0a4.35 4.35 0 1 0 0 8.7 4.35 4.35 0 0 0 0-8.7Zm10-5.437a4.35 4.35 0 1 1-8.7 0 4.35 4.35 0 0 1 8.7 0Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconSocialAsana[iconSymbol] = true;
var IconSocialAws = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M1.092 15.011c-.223-.205 0-.48.246-.326a21.905 21.905 0 0 0 10.87 2.889 21.635 21.635 0 0 0 8.3-1.716c.412-.154.755.286.354.577-2.402 1.78-5.892 2.724-8.901 2.724a16.116 16.116 0 0 1-10.87-4.147Zm17.928-.137c1.379-.967 3.632-.687 3.896-.366.263.32-.068 2.591-1.361 3.672-.195.166-.384.08-.298-.143.269-.726.915-2.35.636-2.745-.31-.395-2.037-.184-2.815-.092-.234.029-.27-.177-.058-.326Zm.945-8.827.246.022.123.009c.04.005.08.013.12.021l.232.056.21.052.207.062.155.056a2 2 0 0 1 .148.07.766.766 0 0 1 .224.184.413.413 0 0 1 .062.24v.343l-.01.102c-.021.088-.074.133-.156.133a.867.867 0 0 1-.286-.092 3.383 3.383 0 0 0-1.407-.28 1.925 1.925 0 0 0-.973.206.762.762 0 0 0-.125 1.144c.238.19.513.33.807.406l1.035.332c.445.11.844.357 1.144.703.225.293.345.655.338 1.025.01.29-.047.58-.166.846a2.067 2.067 0 0 1-.573.647 2.412 2.412 0 0 1-.811.406 3.518 3.518 0 0 1-1.025.143v-.011a4.95 4.95 0 0 1-1.144-.132 3.495 3.495 0 0 1-.847-.292.493.493 0 0 1-.223-.206.54.54 0 0 1-.045-.206v-.371c0-.149.057-.23.166-.23a.397.397 0 0 1 .136 0l.184.075c.26.112.53.198.807.257l.048.008c.27.05.546.078.82.078.373.022.744-.061 1.071-.24a.78.78 0 0 0 .395-.652.706.706 0 0 0-.2-.509 1.891 1.891 0 0 0-.733-.384l-1.064-.337a2.29 2.29 0 0 1-1.144-.738 1.757 1.757 0 0 1-.395-1.064c-.007-.283.06-.564.195-.813.137-.222.316-.416.526-.571.228-.172.486-.301.76-.378.3-.086.61-.128.922-.126.082-.001.164.001.246.006ZM4.662 6.013a2.632 2.632 0 0 1 1.91.572A2.406 2.406 0 0 1 7.18 8.38l.006 2.402a2 2 0 0 0 .086.652c.061.182.14.359.234.527.032.05.05.107.052.166a.28.28 0 0 1-.045.126l-.044.052a.283.283 0 0 1-.054.04l-.458.302a.35.35 0 0 1-.194.069.31.31 0 0 1-.218-.103 1.685 1.685 0 0 1-.258-.343 5.523 5.523 0 0 1-.228-.424 2.714 2.714 0 0 1-2.146 1.007 1.994 1.994 0 0 1-1.47-.52 1.89 1.89 0 0 1-.538-1.413 1.866 1.866 0 0 1 .664-1.5 2.65 2.65 0 0 1 1.79-.572c.259.003.517.023.773.058.269.04.572.092.84.16V8.53a1.596 1.596 0 0 0-.342-1.143 1.673 1.673 0 0 0-1.19-.344 3.47 3.47 0 0 0-.79.097 5.508 5.508 0 0 0-.789.252c-.08.039-.165.069-.252.091a.392.392 0 0 1-.114 0c-.103 0-.155-.08-.155-.228v-.427a.482.482 0 0 1 .052-.191.572.572 0 0 1 .12-.107l.08-.048c.298-.14.608-.25.927-.332a4.55 4.55 0 0 1 1.144-.136ZM4.616 9.72a1.67 1.67 0 0 0-1.087.296 1.021 1.021 0 0 0-.36.842 1.053 1.053 0 0 0 .269.778 1.068 1.068 0 0 0 .778.257 2.29 2.29 0 0 0 .755-.132c.268-.092.507-.254.692-.468.118-.134.204-.293.252-.464a2.57 2.57 0 0 0 .068-.635v-.308a5.813 5.813 0 0 0-.68-.12 5.696 5.696 0 0 0-.687-.046Zm11.27-3.52h.718a.165.165 0 0 1 .036.008.164.164 0 0 1 .098.102c.008.024.01.05.006.074a.96.96 0 0 1 0 .12l-.052.176-1.779 5.653a.527.527 0 0 1-.154.286l-.072.034a.447.447 0 0 1-.23.023h-.573a.465.465 0 0 1-.229-.037l-.069-.038a.532.532 0 0 1-.137-.296l-1.144-4.709-1.144 4.708a.574.574 0 0 1-.143.297l-.068.038a.449.449 0 0 1-.224.037h-.708a.46.46 0 0 1-.142-.035l-.065-.034a.527.527 0 0 1-.155-.286L7.94 6.665a1.44 1.44 0 0 1-.062-.28.162.162 0 0 1 .046-.132.162.162 0 0 1 .096-.046h.83a.471.471 0 0 1 .213.068.648.648 0 0 1 .148.292l1.241 4.828 1.145-4.834a.572.572 0 0 1 .091-.226l.051-.066a.488.488 0 0 1 .216-.068h.726a.51.51 0 0 1 .22.068c.072.082.12.184.137.292l1.145 4.898 1.263-4.898a.648.648 0 0 1 .155-.292.46.46 0 0 1 .286-.068Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconSocialAws[iconSymbol] = true;
var IconSocialDrawio = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M4 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4Zm5.064 3.008a.75.75 0 0 1 .75-.75h4.376a.75.75 0 0 1 .75.75v3.995a.75.75 0 0 1-.75.75h-.006l2.624 4.494h2.195a.75.75 0 0 1 .75.75v3.995a.75.75 0 0 1-.75.75h-4.376a.75.75 0 0 1-.75-.75v-3.995a.75.75 0 0 1 .75-.75h.444l-2.625-4.494h-.889l-2.625 4.494h.444a.75.75 0 0 1 .75.75v3.995a.75.75 0 0 1-.75.75H5a.75.75 0 0 1-.75-.75v-3.995a.75.75 0 0 1 .75-.75h2.195L9.82 9.753h-.006a.75.75 0 0 1-.75-.75V5.008Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconSocialDrawio[iconSymbol] = true;
var IconSocialFacebook = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M22 12.061C22 6.505 17.523 2 12 2S2 6.505 2 12.061c0 5.022 3.657 9.184 8.438 9.939v-7.03h-2.54v-2.91h2.54V9.845c0-2.522 1.492-3.915 3.777-3.915 1.094 0 2.238.197 2.238.197v2.476h-1.26c-1.243 0-1.63.775-1.63 1.57v1.888h2.773l-.443 2.908h-2.33V22c4.78-.755 8.437-4.917 8.437-9.939Z"
        }
      )
    );
  }
);
IconSocialFacebook[iconSymbol] = true;
var IconSocialInstagram = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M8.667 12a3.333 3.333 0 1 0 6.666 0 3.333 3.333 0 0 0-6.666 0ZM12 2c-2.716 0-3.056.012-4.123.06-1.064.049-1.791.218-2.427.465a4.902 4.902 0 0 0-1.772 1.153A4.902 4.902 0 0 0 2.525 5.45c-.247.636-.416 1.363-.465 2.427C2.011 8.944 2 9.284 2 12s.011 3.056.06 4.123c.049 1.064.218 1.791.465 2.427a4.902 4.902 0 0 0 1.153 1.772 4.901 4.901 0 0 0 1.772 1.153c.636.247 1.363.416 2.427.465 1.067.048 1.407.06 4.123.06s3.056-.012 4.123-.06c1.064-.049 1.791-.218 2.427-.465a4.902 4.902 0 0 0 1.772-1.153 4.902 4.902 0 0 0 1.153-1.772c.247-.636.416-1.363.465-2.427.048-1.067.06-1.407.06-4.123s-.012-3.056-.06-4.123c-.049-1.064-.218-1.791-.465-2.427a4.901 4.901 0 0 0-1.153-1.772 4.902 4.902 0 0 0-1.772-1.153c-.636-.247-1.363-.416-2.427-.465C15.056 2.012 14.716 2 12 2Zm6.538 4.662a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0ZM6.865 12a5.135 5.135 0 1 1 10.27 0 5.135 5.135 0 0 1-10.27 0Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconSocialInstagram[iconSymbol] = true;
var IconSocialJira = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M21.202 2H12a4.19 4.19 0 0 0 1.217 2.954 4.142 4.142 0 0 0 2.937 1.224h1.695v1.646C17.85 10.13 19.708 12 22 12V2.803A.8.8 0 0 0 21.202 2Zm-5 5H7a4.19 4.19 0 0 0 1.217 2.954 4.142 4.142 0 0 0 2.937 1.224h1.695v1.646C12.85 15.13 14.708 17 17 17V7.803A.8.8 0 0 0 16.202 7Zm-5 5H2a4.19 4.19 0 0 0 1.217 2.954 4.142 4.142 0 0 0 2.937 1.224h1.695v1.646C7.85 20.13 9.708 22 12 22v-9.197a.8.8 0 0 0-.798-.803Z"
        }
      )
    );
  }
);
IconSocialJira[iconSymbol] = true;
var IconSocialLinkedin = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20.52 2c.816 0 1.48.646 1.48 1.442v17.115c0 .796-.664 1.443-1.48 1.443H3.475C2.661 22 2 21.353 2 20.557V3.442C2 2.646 2.661 2 3.475 2h17.046Zm-1.477 17.042v-5.234c0-2.57-.555-4.547-3.558-4.547-1.444 0-2.412.791-2.807 1.542h-.04V9.498H9.793v9.544h2.963v-4.72c0-1.246.235-2.452 1.779-2.452 1.522 0 1.541 1.424 1.541 2.53v4.642h2.966ZM7.933 9.498h-2.97v9.544h2.97V9.498ZM6.449 4.753a1.72 1.72 0 1 0-.003 3.44 1.72 1.72 0 0 0 .003-3.44Z"
        }
      )
    );
  }
);
IconSocialLinkedin[iconSymbol] = true;
var IconSocialLooker = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M12.16 2a1.749 1.749 0 0 0-1.45 2.724l.747-.746a.737.737 0 1 1 .47.47l-.745.746A1.748 1.748 0 1 0 12.16 2Zm-.695 5.093a2.717 2.717 0 0 0-.544-1.637l-.97.968a1.39 1.39 0 0 1-.265 1.677l.527 1.288a2.732 2.732 0 0 0 1.252-2.296Zm-2.708 1.39H8.73a1.39 1.39 0 1 1 .764-2.552l.96-.96a2.733 2.733 0 1 0-1.172 4.801l-.526-1.288Zm3.44 1.114c-.606 0-1.21.088-1.79.262l.767 1.877a4.183 4.183 0 1 1-.94.363l-.759-1.871a6.202 6.202 0 1 0 2.728-.632h-.006Z"
        }
      )
    );
  }
);
IconSocialLooker[iconSymbol] = true;
var IconSocialMonday = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M4.488 18.158a2.498 2.498 0 0 1-2.177-1.263 2.415 2.415 0 0 1 .069-2.486L6.862 7.37a2.5 2.5 0 0 1 2.213-1.202 2.495 2.495 0 0 1 2.141 1.32 2.41 2.41 0 0 1-.135 2.482l-4.48 7.039a2.499 2.499 0 0 1-2.113 1.149Zm7.688 0a2.49 2.49 0 0 1-2.173-1.26 2.408 2.408 0 0 1 .069-2.48l4.473-7.022a2.496 2.496 0 0 1 2.215-1.228 2.49 2.49 0 0 1 2.155 1.327 2.407 2.407 0 0 1-.16 2.494l-4.474 7.023a2.495 2.495 0 0 1-2.105 1.146Zm7.516.059c1.275 0 2.308-1.012 2.308-2.26 0-1.247-1.033-2.259-2.308-2.259-1.274 0-2.307 1.012-2.307 2.26 0 1.247 1.033 2.259 2.307 2.259Z"
        }
      )
    );
  }
);
IconSocialMonday[iconSymbol] = true;
var IconSocialSlack = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M6.202 14.638a2.106 2.106 0 0 1-2.101 2.101A2.106 2.106 0 0 1 2 14.64c0-1.157.945-2.101 2.101-2.101h2.101v2.1Zm1.059 0c0-1.156.944-2.1 2.1-2.1 1.157 0 2.101.944 2.101 2.1V19.9A2.106 2.106 0 0 1 9.363 22a2.106 2.106 0 0 1-2.101-2.101v-5.26Zm2.1-8.436a2.106 2.106 0 0 1-2.1-2.101A2.105 2.105 0 0 1 9.36 2c1.157 0 2.101.945 2.101 2.101v2.101h-2.1Zm0 1.059c1.157 0 2.101.944 2.101 2.1a2.105 2.105 0 0 1-2.1 2.101H4.1A2.106 2.106 0 0 1 2 9.363c0-1.157.945-2.101 2.101-2.101h5.26Zm8.437 2.1c0-1.156.945-2.1 2.101-2.1 1.156 0 2.101.944 2.101 2.1a2.106 2.106 0 0 1-2.101 2.101h-2.101v-2.1Zm-1.059 0a2.105 2.105 0 0 1-2.1 2.101 2.105 2.105 0 0 1-2.101-2.1V4.1c0-1.156.944-2.101 2.1-2.101 1.157 0 2.101.945 2.101 2.101v5.26Zm-2.1 8.437c1.156 0 2.1.945 2.1 2.101A2.106 2.106 0 0 1 14.64 22a2.106 2.106 0 0 1-2.102-2.101v-2.101h2.101Zm0-1.059a2.105 2.105 0 0 1-2.101-2.1c0-1.157.944-2.101 2.1-2.101H19.9c1.156 0 2.101.944 2.101 2.1a2.106 2.106 0 0 1-2.101 2.101h-5.26Z"
        }
      )
    );
  }
);
IconSocialSlack[iconSymbol] = true;
var IconSocialTwitter = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M7.919 21C16.22 21 20.76 14.074 20.76 8.068c0-.196 0-.392-.013-.587A9.22 9.22 0 0 0 23 5.128a8.963 8.963 0 0 1-2.593.715 4.556 4.556 0 0 0 1.985-2.514 9.01 9.01 0 0 1-2.866 1.104A4.505 4.505 0 0 0 16.235 3c-2.479 0-4.518 2.054-4.518 4.55 0 .345.039.69.117 1.028A12.791 12.791 0 0 1 2.53 3.829c-1.19 2.065-.574 4.741 1.4 6.067a4.456 4.456 0 0 1-2.049-.569v.058c0 2.155 1.523 4.029 3.621 4.455a4.477 4.477 0 0 1-2.038.078 4.532 4.532 0 0 0 4.217 3.157A9.019 9.019 0 0 1 1 18.958a12.716 12.716 0 0 0 6.919 2.039"
        }
      )
    );
  }
);
IconSocialTwitter[iconSymbol] = true;
var IconSocialX = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M13.905 10.47 21.351 2h-1.764l-6.469 7.352L7.956 2H2l7.809 11.12L2 22h1.764l6.827-7.766L16.044 22H22l-8.095-11.53Zm-2.417 2.747-.793-1.108L4.401 3.3h2.71l5.082 7.111.789 1.108 6.604 9.242h-2.71l-5.388-7.545Z"
        }
      )
    );
  }
);
IconSocialX[iconSymbol] = true;
var IconSocialYoutube = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M23.02 6.155c-.265-1.045-1.044-1.868-2.034-2.147C19.192 3.5 12 3.5 12 3.5s-7.192 0-8.986.508C2.024 4.287 1.245 5.11.98 6.155.5 8.049.5 12 .5 12s0 3.952.48 5.845c.265 1.045 1.044 1.868 2.034 2.148C4.808 20.5 12 20.5 12 20.5s7.192 0 8.986-.507c.99-.28 1.77-1.103 2.034-2.148.48-1.893.48-5.845.48-5.845s0-3.951-.48-5.845ZM9.7 15.643V8.357L15.675 12 9.7 15.643Z"
        }
      )
    );
  }
);
IconSocialYoutube[iconSymbol] = true;
var IconSortAscending = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M17 19H3v-2h14v2Zm1-8.414 2.293-2.293 1.414 1.414-4 4h-1.414l-4-4 1.414-1.414L16 10.586V4h2v6.586ZM11 13H3v-2h8v2ZM9 7H3V5h6v2Z"
        }
      )
    );
  }
);
IconSortAscending[iconSymbol] = true;
var IconSortDescending = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m21.707 14.293-1.414 1.414L18 13.414V20h-2v-6.586l-2.293 2.293-1.414-1.414 4-4h1.414l4 4ZM9 19H3v-2h6v2Zm2-6H3v-2h8v2Zm6-6H3V5h14v2Z"
        }
      )
    );
  }
);
IconSortDescending[iconSymbol] = true;
var IconSparksFilled = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M5.5 16A2.5 2.5 0 0 0 8 18.5v1A2.5 2.5 0 0 0 5.5 22h-1A2.5 2.5 0 0 0 2 19.5v-1A2.5 2.5 0 0 0 4.5 16h1Zm5.178-10.793c.325-1.368 2.319-1.37 2.644 0l.027.142.042.255a6.26 6.26 0 0 0 5.26 5.046c1.553.224 1.561 2.473 0 2.699a6.26 6.26 0 0 0-5.302 5.301c-.225 1.563-2.475 1.554-2.699 0a6.26 6.26 0 0 0-5.3-5.3c-1.56-.225-1.557-2.474 0-2.699l.255-.042a6.26 6.26 0 0 0 5.046-5.26l.028-.141ZM19.5 2A2.5 2.5 0 0 0 22 4.5v1A2.5 2.5 0 0 0 19.5 8h-1A2.5 2.5 0 0 0 16 5.5v-1A2.5 2.5 0 0 0 18.5 2h1Z"
        }
      )
    );
  }
);
IconSparksFilled[iconSymbol] = true;
var IconSparks = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M19.5 2h-1A2.5 2.5 0 0 1 16 4.5v1A2.5 2.5 0 0 1 18.5 8h1A2.5 2.5 0 0 1 22 5.5v-1A2.5 2.5 0 0 1 19.5 2Zm-14 14h-1A2.5 2.5 0 0 1 2 18.5v1A2.5 2.5 0 0 1 4.5 22h1A2.5 2.5 0 0 1 8 19.5v-1A2.5 2.5 0 0 1 5.5 16Zm7.91-11.776c-.232-1.629-2.588-1.635-2.82 0a7.5 7.5 0 0 1-6.366 6.365c-1.635.233-1.629 2.59 0 2.822a7.498 7.498 0 0 1 6.365 6.363c.233 1.63 2.589 1.633 2.821 0a7.496 7.496 0 0 1 6.364-6.364c1.633-.232 1.63-2.588 0-2.82a7.498 7.498 0 0 1-6.364-6.366ZM6.659 12A9.509 9.509 0 0 0 12 6.658 9.507 9.507 0 0 0 17.34 12 9.505 9.505 0 0 0 12 17.34 9.508 9.508 0 0 0 6.658 12Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconSparks[iconSymbol] = true;
var IconSpeakerCross = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m13 4 1 1v14l-1 1h-2.5l-.707-.293L6.086 16H5a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h1.086l3.707-3.707L10.5 4H13Zm-9 9a1 1 0 0 0 1 1h1.914l4 4H12V6h-1.086l-4 4H5a1 1 0 0 0-1 1v2Zm17.707-2.293L19.914 12.5l1.793 1.793-1.414 1.414-1.793-1.793-1.793 1.793-1.414-1.414 1.793-1.793-1.793-1.793 1.414-1.414 1.793 1.793 1.793-1.793 1.414 1.414Z"
        }
      )
    );
  }
);
IconSpeakerCross[iconSymbol] = true;
var IconSpeakerHigh = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20 12a7.978 7.978 0 0 0-2.667-5.963l1.334-1.49A9.978 9.978 0 0 1 22 12a9.979 9.979 0 0 1-3.333 7.454l-1.334-1.49A7.98 7.98 0 0 0 20 12Zm-4 0c0-.902-.298-1.731-.8-2.4l1.6-1.2A5.979 5.979 0 0 1 18 12a5.98 5.98 0 0 1-1.2 3.601l-1.6-1.2A3.98 3.98 0 0 0 16 12Zm-3-8 1 1v14l-1 1h-2.5l-.707-.293L6.086 16H5a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h1.086l3.707-3.707L10.5 4H13Zm-9 9a1 1 0 0 0 1 1h1.914l4 4H12V6h-1.086l-4 4H5a1 1 0 0 0-1 1v2Z"
        }
      )
    );
  }
);
IconSpeakerHigh[iconSymbol] = true;
var IconSpinner = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M12.371 13.952a1.992 1.992 0 0 1-1.607-.393 1.992 1.992 0 0 1-.74-1.27 1.995 1.995 0 0 1 .405-1.54c.09-.114.191-.226.302-.335A4.81 4.81 0 0 1 11 10.17c.563-.477 1.285-.895 1.966-1.23 1.12-.553 2.126-.882 2.126-.882s-.066.84-.275 1.887c-.025.126-.052.255-.081.386-.143.635-.337 1.314-.598 1.91a5.75 5.75 0 0 1-.217.446 3.835 3.835 0 0 1-.348.537 1.993 1.993 0 0 1-1.202.729ZM12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm4.165-3.168A7.963 7.963 0 0 1 12 20a7.963 7.963 0 0 1-4.165-1.168l2.495-3.21a4.01 4.01 0 0 1-1.551-1.263l-2.507 3.225A7.974 7.974 0 0 1 4 12c0-.512.048-1.012.14-1.497l3.872 1.176c.05-.66.264-1.312.648-1.894L4.756 8.6A8.007 8.007 0 0 1 11 4.062V7.73a15.26 15.26 0 0 1 1.371-.726A19.9 19.9 0 0 1 13 6.722v-2.66A8.007 8.007 0 0 1 19.244 8.6l-2.286.694c-.05.336-.115.733-.203 1.16-.065.316-.148.681-.255 1.07l3.36-1.021c.092.485.14.985.14 1.497a7.974 7.974 0 0 1-2.272 5.584l-2.507-3.225a3.984 3.984 0 0 1-1.551 1.263l2.495 3.21Z"
        }
      )
    );
  }
);
IconSpinner[iconSymbol] = true;
var IconSplitHorizontal = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M3 18V6a3 3 0 0 1 3-3h2v2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2v2H6a3 3 0 0 1-3-3Zm16 0V6a1 1 0 0 0-1-1h-2V3h2a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-2v-2h2a1 1 0 0 0 1-1Zm-6 5h-2V1h2v22Z"
        }
      )
    );
  }
);
IconSplitHorizontal[iconSymbol] = true;
var IconSplitVertical = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M23 11v2H1v-2h22Zm-4-5a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v2H3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v2h-2V6ZM5 18a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2h2v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2h2v2Z"
        }
      )
    );
  }
);
IconSplitVertical[iconSymbol] = true;
var IconSquareArrowIn = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m16.707 12.293-1.414 1.414L13 11.414V22h-2V11.414l-2.293 2.293-1.414-1.414 4-4h1.414l4 4ZM19 2a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-4v-2h4a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4v2H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14Z"
        }
      )
    );
  }
);
IconSquareArrowIn[iconSymbol] = true;
var IconSquareBracketsAngleSlash = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M19.293 4.707 21.586 7l-2.293 2.293 1.414 1.414 3-3V6.293l-3-3-1.414 1.414Zm-6.586 0L10.414 7l2.293 2.293-1.414 1.414-3-3V6.293l3-3 1.414 1.414Zm5.751-2.42-3 10-1.916-.574 3-10 1.916.574ZM2 19V5a3 3 0 0 1 3-3h1v2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5h2v5a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Z"
        }
      )
    );
  }
);
IconSquareBracketsAngleSlash[iconSymbol] = true;
var IconSquareCirclesTwo = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M19 6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6.179s-1.5-.571-1.5-2.321c0-1.75 1.5-2.308 1.5-2.308V6Zm2 12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v1.192s1.5.558 1.5 2.308c0 1.75-1.5 2.321-1.5 2.321V18Zm-6.5-3.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
        }
      )
    );
  }
);
IconSquareCirclesTwo[iconSymbol] = true;
var IconSquareFrame2LinesCircle = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m21 2 1 1v18l-1 1H3l-1-1V3l1-1h18ZM4 20h16V4H4v16Zm11-8v2H9v-2h6Zm2 4v2H7v-2h10Zm-7-8a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
        }
      )
    );
  }
);
IconSquareFrame2LinesCircle[iconSymbol] = true;
var IconSquareL = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M19 6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6Zm2 12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12ZM9.546 16V7.6h1.813v6.84h3.803V16H9.546Z"
        }
      )
    );
  }
);
IconSquareL[iconSymbol] = true;
var IconSquareLineSquareDashed = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M17.167 4.7H14.9V3h2.267A2.833 2.833 0 0 1 20 5.833V8.1h-1.7V5.833c0-.521-.612-1.133-1.133-1.133Zm1.133 8.5V9.8H20v3.4h-1.7ZM4.7 14.9v2.267c0 .521.753 1.133 1.275 1.133H8.1V20H5.833A2.833 2.833 0 0 1 3 17.167V14.9h1.7Zm13.6 2.267V14.9H20v2.267A2.833 2.833 0 0 1 17.167 20H14.9v-1.7h2.267c.521 0 1.133-.612 1.133-1.133ZM9.8 18.3h3.4V20H9.8v-1.7ZM14 3v11H3V6a3 3 0 0 1 3-3h8Zm-9 9h7V5H6a1 1 0 0 0-1 1v6Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconSquareLineSquareDashed[iconSymbol] = true;
var IconSquareM = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M19 6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6Zm2 12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12ZM7.53 16V7.6h2.03l2.448 5.868L14.455 7.6h2.028V16h-1.68v-5.124L12.667 16h-1.32l-2.148-5.124V16H7.53Z"
        }
      )
    );
  }
);
IconSquareM[iconSymbol] = true;
var IconSquarePencil = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M3 18V6a3 3 0 0 1 3-3h7v2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7h2v7a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3ZM18.543 1.543a2.768 2.768 0 1 1 3.914 3.914l-5.839 5.839-3.422.684-1.176-1.176.684-3.422 5.839-5.839Zm2.5 1.414c-.3-.3-.786-.3-1.086 0l-5.411 5.41-.272 1.358 1.358-.272 5.411-5.41c.3-.3.3-.786 0-1.086Z"
        }
      )
    );
  }
);
IconSquarePencil[iconSymbol] = true;
var IconSquareRounded = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M19 8a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8Zm2 8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8Z"
        }
      )
    );
  }
);
IconSquareRounded[iconSymbol] = true;
var IconSquareS = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M19 6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6Zm2 12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12Zm-8.974-1.904c-1.92 0-3.192-1.164-3.264-2.952h1.728c.072.852.636 1.392 1.536 1.392.792 0 1.332-.336 1.332-.972 0-1.644-4.356-.384-4.356-3.684 0-1.392 1.2-2.376 2.916-2.376 1.812 0 3.024 1.044 3.072 2.64h-1.704c-.072-.66-.576-1.092-1.368-1.092-.72 0-1.164.336-1.164.828 0 1.752 4.416.336 4.416 3.66 0 1.572-1.272 2.556-3.144 2.556Z"
        }
      )
    );
  }
);
IconSquareS[iconSymbol] = true;
var IconSquareStarScribble = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M11 12v9h9v-9h-9ZM7.316 3.948c-.647.216-1.85.765-2.823 1.846-.944 1.049-1.72 2.65-1.497 5.115.234 2.574 2.354 4.17 4.283 4.732l-.558 1.92c-2.37-.69-5.38-2.767-5.717-6.47-.276-3.035.697-5.184 2.003-6.635 1.277-1.42 2.824-2.12 3.677-2.404l.632 1.896Zm3.782.563.227.036.448.107c1.02.268 1.881.658 2.553 1.294.782.74 1.195 1.704 1.425 2.857l-1.962.39c-.182-.915-.462-1.439-.838-1.795-.389-.367-.995-.665-2.049-.898-.929.018-1.49.112-1.92.28-.414.162-.782.423-1.268.918L6.286 6.3c.598-.61 1.196-1.078 1.966-1.38.753-.295 1.592-.398 2.617-.418l.229.009ZM22 21a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v9ZM19.5 2h-1A2.5 2.5 0 0 1 16 4.5v1A2.5 2.5 0 0 1 18.5 8h1A2.5 2.5 0 0 1 22 5.5v-1A2.5 2.5 0 0 1 19.5 2Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconSquareStarScribble[iconSymbol] = true;
var IconSquareTriangleCirclePlus = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m10 2 1 1v7l-1 1H3l-1-1V3l1-1h7ZM4 9h5V4H4v5Zm15 5v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2ZM9 17.75a2.75 2.75 0 1 0-5.5 0 2.75 2.75 0 0 0 5.5 0Zm2 0a4.75 4.75 0 1 1-9.5 0 4.75 4.75 0 0 1 9.5 0Zm7.888-15.71 3.9 7.5L21.9 11H14l-.883-1.47 4-7.5 1.77.01ZM15.667 9h4.586l-2.265-4.354L15.667 9Z"
        }
      )
    );
  }
);
IconSquareTriangleCirclePlus[iconSymbol] = true;
var IconSquare = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M4 20h16V4H4v16Zm18 .75c0 .69-.56 1.25-1.25 1.25H3.25C2.56 22 2 21.44 2 20.75V3.25C2 2.56 2.56 2 3.25 2h17.5c.69 0 1.25.56 1.25 1.25v17.5Z"
        }
      )
    );
  }
);
IconSquare[iconSymbol] = true;
var IconSquaresColumn = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M9 16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2Zm-2 2v2h2v-2H7Zm11 .586 1.293-1.293 1.414 1.414-3 3h-1.414l-3-3 1.414-1.414L16 18.586V3h2v15.586ZM9 9a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2Zm-2 4h2v-2H7v2ZM9 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h2ZM7 6h2V4H7v2Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconSquaresColumn[iconSymbol] = true;
var IconSquaresFour = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m10 13 1 1v6l-1 1H4l-1-1v-6l1-1h6Zm-5 6h4v-4H5v4Zm5-16 1 1v6l-1 1H4l-1-1V4l1-1h6ZM5 9h4V5H5v4Zm15-6 1 1v6l-1 1h-6l-1-1V4l1-1h6Zm-5 6h4V5h-4v4Zm5 4 1 1v6l-1 1h-6l-1-1v-6l1-1h6Zm-5 6h4v-4h-4v4Z"
        }
      )
    );
  }
);
IconSquaresFour[iconSymbol] = true;
var IconSquaresGroup = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M17 8v5l-1 1h-1.667v2l-1 1H8l-1-1v-5l1-1h2V8l1-1h5l1 1Zm-8 7h3.333v-1H11l-1-1v-1H9v3Zm3-3h3V9h-3v3ZM5 3h14V2h3v3h-1v14h1v3h-3v-1H5v1H2v-3h1V5H2V2h3v1Zm0 16h14V5H5v14Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconSquaresGroup[iconSymbol] = true;
var IconSquaresMerge = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m21 2 1 1v12l-1 1h-5v5l-1 1H3l-1-1V9l1-1h5V3l1-1h12Zm-11 8H4v10h10v-6h6V4H10v6Z"
        }
      )
    );
  }
);
IconSquaresMerge[iconSymbol] = true;
var IconSquaresRowDownwards = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M5 7v2h2V7H5Zm4 2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm3-2v2h2V7h-2Zm4 2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 6a3 3 0 0 1-3 3h-4.586l1.293 1.293-1.414 1.414-3-3v-1.414l3-3 1.414 1.414L12.414 16H17a1 1 0 0 0 1-1V8h2v7Z"
        }
      )
    );
  }
);
IconSquaresRowDownwards[iconSymbol] = true;
var IconSquaresRow = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M21.707 16.293v1.414l-3 3-1.414-1.414L18.586 18H2v-2h16.586l-1.293-1.293 1.414-1.414 3 3ZM6 5a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2ZM4 9h2V7H4v2Zm9-4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2Zm-2 4h2V7h-2v2Zm9-4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2Zm-2 4h2V7h-2v2Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconSquaresRow[iconSymbol] = true;
var IconSquaresThree = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m10 13 1 1v6l-1 1H4l-1-1v-6l1-1h6Zm-5 6h4v-4H5v4Zm5-16 1 1v6l-1 1H4l-1-1V4l1-1h6ZM5 9h4V5H5v4Zm15 4 1 1v6l-1 1h-6l-1-1v-6l1-1h6Zm-5 6h4v-4h-4v4Z"
        }
      )
    );
  }
);
IconSquaresThree[iconSymbol] = true;
var IconSquaresTwoOverlap = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M13.154 6.004A3 3 0 0 1 16 9v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h8l.154.004ZM5 8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9a1 1 0 0 0-.898-.995L13 8H5Zm14.154-5.996A3 3 0 0 1 22 5v10a3 3 0 0 1-3 3h-1v-2h1a1 1 0 0 0 1-1V5a1 1 0 0 0-.898-.995L19 4h-8a1 1 0 0 0-1 1H8a3 3 0 0 1 3-3h8l.154.004Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconSquaresTwoOverlap[iconSymbol] = true;
var IconSquaresUngroup = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M11 3h8V2h3v3h-1v8h1v3h-3v-1h-4v4h1v3h-3v-1H5v1H2v-3h1v-8H2V8h3v1h4V5H8V2h3v1ZM5 19h8v-4h-2v1H8v-3h1v-2H5v8Zm6-6h8V5h-8v8Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconSquaresUngroup[iconSymbol] = true;
var IconSquaresUnmerge = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m21 2 1 1v12l-1 1h-5v5l-1 1H3l-1-1V9l1-1h5V3l1-1h12ZM4 20h10v-4H9l-1-1v-5H4v10Zm6-12h5l1 1v5h4V4H10v4Zm0 6h4v-4h-4v4Z"
        }
      )
    );
  }
);
IconSquaresUnmerge[iconSymbol] = true;
var IconStack = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m22.447 14.605-.037 1.807-10 4.5h-.82l-10-4.5-.037-1.806 4-2 .894 1.789-2.116 1.057L12 18.903l7.668-3.45-2.115-1.058.894-1.79 4 2ZM12.41 3.088l10 4.5v1.824l-10 4.5h-.82l-10-4.5V7.588l10-4.5h.82ZM4.437 8.5 12 11.903 19.563 8.5 12 5.097 4.437 8.5Z"
        }
      )
    );
  }
);
IconStack[iconSymbol] = true;
var IconStackedCircles = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M12 2c2.412 0 4.646.532 6.313 1.44 1.628.889 2.937 2.28 2.937 4.06v9c0 1.78-1.31 3.171-2.938 4.06-1.666.909-3.9 1.44-6.312 1.44-2.413 0-4.646-.532-6.313-1.44-1.627-.89-2.937-2.28-2.937-4.06v-9c0-1.78 1.31-3.171 2.938-4.06C7.354 2.532 9.588 2 12 2Zm7.25 13.46c-.294.22-.609.42-.938.6-1.666.909-3.9 1.44-6.312 1.44-2.413 0-4.646-.532-6.313-1.44a7.948 7.948 0 0 1-.937-.6v1.04c0 .705.538 1.563 1.896 2.304C7.966 19.524 9.856 20 12 20s4.035-.477 5.355-1.196c1.357-.74 1.895-1.599 1.895-2.304v-1.04Zm0-4.5c-.294.22-.609.42-.938.6-1.666.909-3.9 1.44-6.312 1.44-2.413 0-4.646-.531-6.313-1.44a7.948 7.948 0 0 1-.937-.6V12c0 .705.538 1.563 1.896 2.304 1.32.72 3.21 1.196 5.354 1.196s4.035-.476 5.355-1.196c1.357-.74 1.895-1.599 1.895-2.304v-1.04ZM12 4c-2.144 0-4.035.477-5.354 1.196C5.288 5.936 4.75 6.795 4.75 7.5c0 .705.538 1.563 1.896 2.304C7.966 10.524 9.856 11 12 11s4.035-.476 5.355-1.196c1.357-.74 1.895-1.599 1.895-2.304 0-.705-.538-1.563-1.895-2.304C16.035 4.476 14.144 4 12 4Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconStackedCircles[iconSymbol] = true;
var IconStarFilled = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m15.666 8.097 5.498.917.583 1.65-3.687 4.148.928 6.036-1.435 1.047L12 19.117l-5.553 2.777-1.435-1.047.927-6.036-3.686-4.148.583-1.65 5.497-.917 2.772-5.544h1.79l2.771 5.544Z"
        }
      )
    );
  }
);
IconStarFilled[iconSymbol] = true;
var IconStarHalf = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "m15.666 8.097 5.498.917.583 1.65-3.687 4.148.928 6.036-1.435 1.047L12 19.117l-5.553 2.777-1.435-1.047.927-6.036-3.686-4.148.583-1.65 5.497-.917 2.772-5.544h1.79l2.771 5.544ZM12 16.882l4.717 2.358-.777-5.052 3.11-3.5-4.717-.786L12 5.236v11.646Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconStarHalf[iconSymbol] = true;
var IconStar = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m12.895 2.553 2.771 5.544 5.498.917.583 1.65-3.687 4.148.928 6.036-1.435 1.047L12 19.117l-5.553 2.777-1.435-1.047.927-6.036-3.686-4.148.583-1.65 5.497-.917 2.772-5.544h1.79Zm-3.228 7.35-4.718.785 3.11 3.5-.777 5.052L12 16.882l4.717 2.358-.777-5.052 3.11-3.5-4.717-.786L12 5.236 9.667 9.902Z"
        }
      )
    );
  }
);
IconStar[iconSymbol] = true;
var IconStickyCorners = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M4 20h4v2H3l-1-1v-5h2v4Zm18 1-1 1h-5v-2h4v-4h2v5ZM16.099 7.005A1 1 0 0 1 17 8v5a4 4 0 0 1-3.999 4l-4.998.001a1.002 1.002 0 0 1-1.001-1V8l.006-.103A1 1 0 0 1 8.002 7H16l.099.005Zm-7.097 7.997L12 15v-2l1-1h2V9.001H9.002v6.001ZM14 14v.73c.303-.176.555-.427.73-.73H14ZM8 4H4v4H2V3l1-1h5v2Zm14-1v5h-2V4h-4V2h5l1 1Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconStickyCorners[iconSymbol] = true;
var IconStickyEyeClosed = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M4 5a1 1 0 0 1 1-1h1V2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h7c5.523 0 10-4.477 10-10V9h-2a3 3 0 0 1-3 3h-4l-1 1v3.996a3 3 0 0 1-3 3H5V20a1 1 0 0 1-1-1V5Zm9.048 14.932a8.004 8.004 0 0 0 6.884-6.881A4.977 4.977 0 0 1 17 14h-3v2.996a4.977 4.977 0 0 1-.952 2.936ZM8.27 3.692l-.078-.1-.59-.807 1.612-1.182.592.805-.001.001.011.015.06.075a8.218 8.218 0 0 0 1.25 1.212C11.995 4.387 13.157 5 14.5 5s2.505-.613 3.373-1.29a8.218 8.218 0 0 0 1.25-1.211 3.37 3.37 0 0 0 .06-.075l.01-.015.592-.806 1.613 1.182-.591.807-.737-.54.737.54-.002.002-.012.015-.026.035a8.575 8.575 0 0 1-.425.501c-.225.244-.532.55-.91.873L20.914 6.5 19.5 7.914l-1.751-1.75a7.77 7.77 0 0 1-1.063.46l.527 2.104-1.94.485-.555-2.22c-.072.003-.145.007-.218.007a6.56 6.56 0 0 1-1.192-.112l-.58 2.325-1.94-.485.242-.97.378-1.514a8.506 8.506 0 0 1-.79-.448L8.5 7.914 7.086 6.5l1.959-1.96a8.585 8.585 0 0 1-.812-.896l-.026-.035-.012-.015v-.001c.003-.003-.607.6.076.098Zm11.436-.907L20 3l.07.052-.363-.267Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconStickyEyeClosed[iconSymbol] = true;
var IconStickyEyeOpen = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M4 5a1 1 0 0 1 1-1h1V2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h7c5.523 0 10-4.477 10-10V9h-2a3 3 0 0 1-3 3h-4l-1 1v3.996a3 3 0 0 1-3 3H5V20a1 1 0 0 1-1-1V5Zm9.048 14.932a8.004 8.004 0 0 0 6.884-6.881A4.977 4.977 0 0 1 17 14h-3v2.996a4.977 4.977 0 0 1-.952 2.936ZM14.5 1c2.008 0 3.615 1.06 4.66 2.01a10.962 10.962 0 0 1 1.56 1.768l.09.132.024.038.008.013.003.004v.002l.002.58v.486l-.002.002-.003.004-.008.013-.024.038a9.628 9.628 0 0 1-.419.575 11 11 0 0 1-1.23 1.325C18.114 8.94 16.507 10 14.5 10c-2.008 0-3.615-1.06-4.66-2.01a10.962 10.962 0 0 1-1.56-1.768 6.83 6.83 0 0 1-.09-.132l-.024-.038-.008-.013-.003-.004v-.002L8.152 5.5v-.533l.002-.002.003-.004.008-.013.024-.038a9.614 9.614 0 0 1 .419-.575 11 11 0 0 1 1.23-1.325C10.886 2.06 12.493 1 14.5 1Zm0 2c-1.292 0-2.435.69-3.315 1.49-.396.36-.716.724-.946 1.01.23.286.55.65.946 1.01.88.8 2.023 1.49 3.315 1.49 1.292 0 2.435-.69 3.314-1.49.397-.36.716-.724.946-1.01a8.934 8.934 0 0 0-.946-1.01C16.934 3.69 15.792 3 14.5 3Zm6.347 3.033V4.967v1.066ZM16 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconStickyEyeOpen[iconSymbol] = true;
var IconStickyNoteStack = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M8 9a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2l-1 1v2a3 3 0 0 1-3 3H9a1 1 0 0 1-1-1V9Zm7 11c1.784 0 2.984-.55 3.753-1.414.711-.8 1.157-1.988 1.235-3.576A4.978 4.978 0 0 1 17 16h-1v1a4.978 4.978 0 0 1-1 3Zm7-5.5c0 2.154-.538 4.048-1.753 5.414C19.016 21.3 17.217 22 15 22H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v5.5ZM5 2a3 3 0 0 0-3 3v13h2V5a1 1 0 0 1 1-1h13V2H5Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconStickyNoteStack[iconSymbol] = true;
var IconStickyNoteWide = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M5 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10c2.712 0 4.57-.87 5.686-2.48C21.746 15.99 22 13.978 22 12V7a3 3 0 0 0-3-3H5Zm15 5.002V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6a3 3 0 0 0 3-3v-1.998l1-1h2a3 3 0 0 0 3-3ZM15 18c.628-.836 1-1.874 1-3v-.998h1c1.113 0 2.14-.364 2.971-.978-.085 1.407-.363 2.54-.929 3.356-.64.924-1.784 1.62-4.042 1.62Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconStickyNoteWide[iconSymbol] = true;
var IconStickyNote = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h7c5.523 0 10-4.477 10-10V5a3 3 0 0 0-3-3H5Zm15 7V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1v-.004h4a3 3 0 0 0 3-3V13l1-1h4a3 3 0 0 0 3-3Zm-6.952 10.932A4.977 4.977 0 0 0 14 16.996V14h3a4.977 4.977 0 0 0 2.932-.95 8.004 8.004 0 0 1-6.884 6.882Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconStickyNote[iconSymbol] = true;
var IconStickyNotesTwo = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M10 7a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h6c2.04 0 3.614-.7 4.642-2.048C21.631 18.654 22 16.9 22 15v-5a3 3 0 0 0-3-3h-9Zm5.465 13H16c1.55 0 2.476-.506 3.05-1.26.419-.548.708-1.303.85-2.264a4.613 4.613 0 0 1-2.136.524H16v1c0 .729-.195 1.412-.535 2ZM20 13.744A2.618 2.618 0 0 1 17.764 15H15l-1 1v2a2 2 0 0 1-2 2h-2a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v3.744ZM2 14V5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3h-2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1v2a3 3 0 0 1-3-3Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconStickyNotesTwo[iconSymbol] = true;
var IconStopCircle = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M19.997 12a8 8 0 1 0-16 0 8 8 0 0 0 16 0Zm2 0c0 5.523-4.478 10-10 10-5.523 0-10-4.477-10-10s4.477-10 10-10c5.522 0 10 4.477 10 10ZM9 10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4Z"
        }
      )
    );
  }
);
IconStopCircle[iconSymbol] = true;
var IconStoryPoints = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M12.05 2c2.176 0 4.189.695 5.83 1.875A9.987 9.987 0 0 1 22.05 12v.414L12.464 22h-.415a9.988 9.988 0 0 1-8.125-4.169A9.955 9.955 0 0 1 2.049 12c0-5.523 4.478-10 10-10Zm0 2a8 8 0 0 0-1.748 15.809.52.52 0 0 0 .477-.145.914.914 0 0 0 .27-.664v-1c0-.72.11-1.416.311-2.07A3 3 0 0 1 9 13h2a1 1 0 0 0 1 1h.307c.209-.3.44-.583.693-.846V13a1 1 0 0 0-1-1h-1v-2h1a1 1 0 1 0-1-1H9a3 3 0 1 1 6 0 2.98 2.98 0 0 1-.769 2c.217.242.393.52.524.822A6.97 6.97 0 0 1 18.05 11h1c.282 0 .52-.117.664-.27a.52.52 0 0 0 .143-.478A8.003 8.003 0 0 0 12.05 4Zm6 9a5 5 0 0 0-5 5v.586L18.635 13h-.585Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconStoryPoints[iconSymbol] = true;
var IconStroke1 = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M4.318 19.682a1.086 1.086 0 0 1 0-1.537L18.145 4.318a1.086 1.086 0 0 1 1.537 1.537L5.855 19.682a1.086 1.086 0 0 1-1.537 0Z"
        }
      )
    );
  }
);
IconStroke1[iconSymbol] = true;
var IconStroke2 = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M16.433 4.612a2.09 2.09 0 0 1 2.955 2.956l-11.82 11.82a2.09 2.09 0 0 1-2.956-2.955l11.82-11.821Z"
        }
      )
    );
  }
);
IconStroke2[iconSymbol] = true;
var IconStroke3 = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M4.884 19.116a3.019 3.019 0 0 1 0-4.27l9.962-9.962a3.019 3.019 0 0 1 4.27 4.27l-9.962 9.962a3.019 3.019 0 0 1-4.27 0Z"
        }
      )
    );
  }
);
IconStroke3[iconSymbol] = true;
var IconStroke4 = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M5.137 18.863a3.882 3.882 0 0 1 0-5.49l8.236-8.236a3.882 3.882 0 1 1 5.49 5.49l-8.236 8.236a3.882 3.882 0 0 1-5.49 0Z"
        }
      )
    );
  }
);
IconStroke4[iconSymbol] = true;
var IconStroke5 = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M5.373 18.627a4.686 4.686 0 0 1 0-6.627L12 5.373A4.686 4.686 0 1 1 18.627 12L12 18.627a4.686 4.686 0 0 1-6.627 0Z"
        }
      )
    );
  }
);
IconStroke5[iconSymbol] = true;
var IconStroke6 = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M5.257 18.692a6 6 0 0 1 0-8.485l4.95-4.95a6 6 0 0 1 8.485 8.486l-4.95 4.95a6 6 0 0 1-8.485 0Z"
        }
      )
    );
  }
);
IconStroke6[iconSymbol] = true;
var IconSwapHorizontal = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M15.583 6.707 17.876 9H7.29v2h13l.707-1.707-4-4-1.414 1.414ZM8.414 17.293 6.121 15h9.586v-2h-12L3 14.707l4 4 1.414-1.414Z"
        }
      )
    );
  }
);
IconSwapHorizontal[iconSymbol] = true;
var IconSwitch = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M16 8H8a4 4 0 1 0 0 8h8a4 4 0 0 0 0-8ZM8 6a6 6 0 1 0 0 12h8a6 6 0 0 0 0-12H8Zm11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconSwitch[iconSymbol] = true;
var IconTableFormat = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14Zm-6 14v4h6a1 1 0 0 0 1-1v-3h-7Zm-9 3a1 1 0 0 0 1 1h6v-4H4v3Zm9-9v4h7v-4h-7Zm-9 4h7v-4H4v4Zm9-6h7V5a1 1 0 0 0-1-1h-6v4ZM5 4a1 1 0 0 0-1 1v3h7V4H5Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconTableFormat[iconSymbol] = true;
var IconTable = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5ZM4 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3H4V5Zm7 5h9v4h-9v-4Zm-2 4v-4H4v4h5Zm-5 2h5v4H5a1 1 0 0 1-1-1v-3Zm7 0h9v3a1 1 0 0 1-1 1h-8v-4Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconTable[iconSymbol] = true;
var IconTablet = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M19 5a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5Zm2 14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v14Zm-7-3v2h-4v-2h4Z"
        }
      )
    );
  }
);
IconTablet[iconSymbol] = true;
var IconTag = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m12 2 .669.257 10 9 .057 1.43-9 9.5-1.415.038-10-9.5L2 12V3l1-1h9Zm-8 9.571 8.962 8.515 7.606-8.03L11.616 4H4v7.571ZM9 8.5a.5.5 0 1 0-.5.5v2a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5V9a.5.5 0 0 0 .5-.5Z"
        }
      )
    );
  }
);
IconTag[iconSymbol] = true;
var IconTargetArrow = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10v-2a8 8 0 1 1 8-8h2c0-5.523-4.477-10-10-10Zm0 5a5 5 0 0 0 0 10v-2a3 3 0 1 1 3-3h2a5 5 0 0 0-5-5Zm.707 4.293L17.414 16H20v2h-2v2h-2v-2.585l-4.707-4.708 1.414-1.414Z"
        }
      )
    );
  }
);
IconTargetArrow[iconSymbol] = true;
var IconTasks = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M18 3a1 1 0 0 1 .97.758l2 8 .03.119V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-6.123l.03-.12 2-8 .055-.16A1 1 0 0 1 6 3h12ZM5 18a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5h-2.067c-.456 2.337-2.559 4-4.933 4-2.374 0-4.477-1.663-4.933-4H5v5Zm.28-7H8l1 1v.424C9.184 13.884 10.474 15 12 15s2.816-1.117 3-2.576V12l1-1h2.72l-1.5-6H6.78l-1.5 6Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconTasks[iconSymbol] = true;
var IconTennisBall = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2ZM4.005 12.203a7.995 7.995 0 0 0 7.79 7.791 10.008 10.008 0 0 0-7.79-7.79Zm6.198-7.999a8.009 8.009 0 0 0-5.999 6 12.009 12.009 0 0 1 9.592 9.59 8.007 8.007 0 0 0 5.999-5.998 12.009 12.009 0 0 1-9.592-9.592Zm2-.2a10.008 10.008 0 0 0 7.791 7.792 7.995 7.995 0 0 0-7.79-7.791Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconTennisBall[iconSymbol] = true;
var IconTextAColorSelection = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m12.923 3.615 5.385 12.923-1.846.77L15.083 14H8.917l-1.379 3.308-1.846-.77 5.385-12.923h1.846ZM9.75 12h4.5L12 6.6 9.75 12Z"
        }
      )
    );
  }
);
IconTextAColorSelection[iconSymbol] = true;
var IconTextAHorizontal = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M21.969 17H22v.037l.269.322v1.282l-.269.32V19h-.031l-2.841 3.408-1.536-1.28L19.365 19H3v-2h16.365l-1.773-2.128 1.536-1.28L21.968 17Zm-4.67-4.443-1.856.743-1.12-2.8H9.677l-1.12 2.8-1.857-.743 4.371-10.928h1.858l4.37 10.928ZM10.478 8.5h3.046L12 4.692 10.477 8.5Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconTextAHorizontal[iconSymbol] = true;
var IconTextAUnderline = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M21 20v2H3v-2h18ZM12.923 3l5.935 14.248-1.846.77-1.929-4.633H8.917l-1.976 4.634-1.845-.77L11.077 3h1.846ZM9.75 11.385h4.5L12 5.985l-2.25 5.4Z"
        }
      )
    );
  }
);
IconTextAUnderline[iconSymbol] = true;
var IconTextAVertical = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M18.963 3H19v.03l3.408 2.842-1.28 1.536L19 5.635V21h-2V5.635l-2.128 1.773-1.28-1.536L17 3.03V3h.037l.322-.269h1.282l.322.269ZM13.3 10.557l-2.8 1.12v4.646l2.8 1.12-.743 1.857-10.928-4.371V13.07L12.557 8.7l.743 1.856ZM4.692 14 8.5 15.523v-3.046L4.692 14Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconTextAVertical[iconSymbol] = true;
var IconTextAa = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "m14.286 19.588-1.874.698L10.442 15H4.558l-1.971 5.286-1.874-.698L6.564 3.9h1.873l5.85 15.688ZM5.305 13h4.39L7.5 7.11 5.305 13ZM19 8c.93 0 1.96.34 2.752 1.196C22.544 10.054 23 11.322 23 13v6l-1 1h-3.5a3.5 3.5 0 1 1 0-7H21c0-1.322-.354-2.054-.717-2.446A1.718 1.718 0 0 0 19 10c-.781 0-1.5.444-2.143 1.515l-1.714-1.03C15.997 9.063 17.266 8 19 8Zm-.5 7a1.5 1.5 0 0 0 0 3H21v-3h-2.5Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconTextAa[iconSymbol] = true;
var IconTextAlignCenter = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M16.571 17v2H7.43v-2h9.142ZM20 13v2H4v-2h16Zm-3.429-4v2H7.43V9h9.142ZM20 5v2H4V5h16Z"
        }
      )
    );
  }
);
IconTextAlignCenter[iconSymbol] = true;
var IconTextAlignLeft = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M13.143 17v2H4v-2h9.143ZM20 13v2H4v-2h16Zm-6.857-4v2H4V9h9.143ZM20 5v2H4V5h16Z"
        }
      )
    );
  }
);
IconTextAlignLeft[iconSymbol] = true;
var IconTextAlignRight = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20 17v2h-9.143v-2H20Zm0-4v2H4v-2h16Zm0-4v2h-9.143V9H20Zm0-4v2H4V5h16Z"
        }
      )
    );
  }
);
IconTextAlignRight[iconSymbol] = true;
var IconTextBBoldItalicUnderlined = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M22 20v2H2v-2h20ZM13.429 3c1.447 0 2.67.425 3.498 1.249.84.837 1.163 1.975.998 3.14a4.51 4.51 0 0 1-1.576 2.867c.169.105.33.223.48.351.929.8 1.37 1.982 1.085 3.348-.332 1.589-1.195 2.643-2.303 3.27-1.066.603-2.292.775-3.351.775H7l-.984-1.177 2.338-13L9.338 3h4.09ZM8.196 16h4.064c.877 0 1.716-.147 2.366-.516.61-.345 1.116-.915 1.33-1.94.138-.658-.06-1.1-.432-1.42-.418-.36-1.143-.624-2.095-.624H9.005L8.196 16Zm1.17-6.5h3.478c1.576 0 2.896-.943 3.101-2.39.087-.614-.083-1.1-.428-1.444C15.159 5.311 14.502 5 13.429 5h-3.255l-.809 4.5Z"
        }
      )
    );
  }
);
IconTextBBoldItalicUnderlined[iconSymbol] = true;
var IconTextBBold = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M12.25 3a4.75 4.75 0 0 1 3.543 7.911A5.253 5.253 0 0 1 13.75 21H6l-1-1V4l1-1h6.25ZM7 19h6.75a3.25 3.25 0 0 0 0-6.5H7V19Zm0-8.5h5.25a2.75 2.75 0 1 0 0-5.5H7v5.5Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconTextBBold[iconSymbol] = true;
var IconTextCursorEyeOpen = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M7 17V7a1 1 0 0 0-1-1H2V4h4a3 3 0 0 1 3 3v10a1 1 0 0 0 1 1h4v2h-4a2.98 2.98 0 0 1-2-.769A2.985 2.985 0 0 1 6 20H2v-2h4a1 1 0 0 0 1-1Zm9.5-15c2.008 0 3.615 1.06 4.66 2.01a10.962 10.962 0 0 1 1.56 1.768l.09.132.024.038.008.013.003.004v.002s.002 0-.845.533l.847.533-.002.002-.003.004-.008.013-.024.038a9.628 9.628 0 0 1-.419.575 11 11 0 0 1-1.23 1.325C20.114 9.94 18.507 11 16.5 11c-2.008 0-3.615-1.06-4.66-2.01a10.962 10.962 0 0 1-1.56-1.768 6.526 6.526 0 0 1-.09-.132l-.024-.038-.008-.013-.003-.004v-.002s-.002 0 .845-.533l-.847-.533.002-.002.003-.004.008-.013.024-.038.09-.132a10.962 10.962 0 0 1 1.56-1.769C12.885 3.06 14.492 2 16.5 2Zm0 2c-1.292 0-2.435.69-3.315 1.49-.396.36-.716.724-.946 1.01.23.286.55.65.946 1.01.88.8 2.023 1.49 3.315 1.49 1.292 0 2.435-.69 3.314-1.49.397-.36.716-.724.946-1.01a8.934 8.934 0 0 0-.946-1.01C18.934 4.69 17.793 4 16.5 4ZM11 6.5l-.847.532V5.967L11 6.5Zm11.847.533L22 6.5l.847-.532v1.065ZM18 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        }
      )
    );
  }
);
IconTextCursorEyeOpen[iconSymbol] = true;
var IconTextHOne = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M3 4v7h7V4h2v16h-2v-7H3v7H1V4h2Zm17 .75V18h3v2h-8v-2h3V6.368l-3.053 1.527-.894-1.79 4.5-2.25L20 4.75Z"
        }
      )
    );
  }
);
IconTextHOne[iconSymbol] = true;
var IconTextHThree = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M3 11h7V4h2v16h-2v-7H3v7H1V4h2v7Zm15.5-7a4.5 4.5 0 0 1 2.827 8 4.5 4.5 0 0 1-2.827 8H14v-2h4.5a2.5 2.5 0 0 0 0-5H14v-2h4.5a2.5 2.5 0 0 0 0-5H14V4h4.5Z"
        }
      )
    );
  }
);
IconTextHThree[iconSymbol] = true;
var IconTextHTwo = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M3 4v7h7V4h2v16h-2v-7H3v7H1V4h2Zm18 4.49A2.494 2.494 0 0 0 18.505 6 2.504 2.504 0 0 0 16 8.5V9h-2v-.5C14 6.013 16.021 4 18.505 4A4.494 4.494 0 0 1 23 8.49c0 2.25-1.585 4.035-3.321 4.975-1.585.858-3.222 2.263-3.598 4.535H23v2h-8l-1-1c0-3.938 2.633-6.161 4.727-7.294C20.077 10.975 21 9.751 21 8.49Z"
        }
      )
    );
  }
);
IconTextHTwo[iconSymbol] = true;
var IconTextIItalic = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20 3v2h-4.307l-5.25 14H14v2H4v-2h4.307l5.25-14H10V3h10Z"
        }
      )
    );
  }
);
IconTextIItalic[iconSymbol] = true;
var IconTextIndent = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M13 21h-2V3h2v18Zm9-2h-7v-2h7v2ZM9.707 11.293v1.414l-3 3-1.414-1.414L6.586 13H1v-2h5.586L5.293 9.707l1.414-1.414 3 3ZM20 13h-5v-2h5v2Zm2-6h-7V5h7v2Z"
        }
      )
    );
  }
);
IconTextIndent[iconSymbol] = true;
var IconTextLineHeight = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m22.6 7.2-1.2 1.6L19 6.999v9.587l2.293-2.293 1.414 1.414-4 4h-1.414l-4-4 1.414-1.414L17 16.586V6.999l-2.4 1.8L13.4 7.2l4-3h1.2l4 3ZM10 19H1v-2h9v2Zm0-4H1v-2h9v2Zm0-4H1V9h9v2Zm0-4H1V5h9v2Z"
        }
      )
    );
  }
);
IconTextLineHeight[iconSymbol] = true;
var IconTextLinesThree = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M13.6 17v2H4v-2h9.6Zm6.4-6v2H4v-2h16Zm0-6v2H4V5h16Z"
        }
      )
    );
  }
);
IconTextLinesThree[iconSymbol] = true;
var IconTextPosition = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m18 5 1 1v1.8h-2V7h-4v10h1.571v2H9.43v-2H11V7H7v.8H5V6l1-1h12ZM7.44 13.235l1.325 1.498-2.587 2.289-1.325-1.498 2.586-2.29Zm-4.015 3.553.75-.663L5.5 17.623l-2.586 2.288-1.326-1.497 1.837-1.627ZM20.693 2.087v.001l.61-.537 1.32 1.503-.954.839-.205.178-.202.179-.955.839-1.32-1.503 1.706-1.5Z"
        }
      )
    );
  }
);
IconTextPosition[iconSymbol] = true;
var IconTextSStrikethrough = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M8.113 5.628c-.639.398-1.047.955-1.117 1.714-.09.978.422 1.727 1.348 2.371.887.617 1.99 1.014 2.816 1.287H22v2H2v-2h4.734c-1.034-.857-1.89-2.108-1.73-3.842.138-1.496.987-2.564 2.05-3.227C8.094 3.283 9.36 3 10.5 3c1.702 0 3.35.561 4.531 1.086a16.25 16.25 0 0 1 1.862.979c.05.03.088.055.115.072l.032.021.01.006.003.003s.002.001-.553.833l-.554.832-.003-.002-.02-.012a10.804 10.804 0 0 0-.435-.262 14.276 14.276 0 0 0-1.27-.642C13.15 5.439 11.799 5 10.5 5c-.844 0-1.725.215-2.387.628ZM14.462 15h2.308a3.993 3.993 0 0 1 .224 1.86c-.155 1.395-.802 2.48-1.844 3.187-1.007.682-2.29.953-3.65.953-1.702 0-3.35-.561-4.531-1.086a16.258 16.258 0 0 1-1.863-.979 9.916 9.916 0 0 1-.114-.072l-.032-.021-.01-.006-.004-.003L5.5 18l.554-.832.003.002.02.012.086.055a14.276 14.276 0 0 0 1.618.85c1.07.474 2.42.913 3.719.913 1.125 0 1.967-.229 2.527-.609.524-.355.884-.896.98-1.751a1.995 1.995 0 0 0-.075-.838 1.969 1.969 0 0 0-.14-.331 2.411 2.411 0 0 0-.33-.471Z"
        }
      )
    );
  }
);
IconTextSStrikethrough[iconSymbol] = true;
var IconTextStyles = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M14.573 13.5c.873-.553 2.038-.901 3.1-.406.25.117.473.268.667.443a7.298 7.298 0 0 1 .269-.497l.035-.059.012-.017.004-.007.003-.003.837.546.837.547-.016.026a6.042 6.042 0 0 0-.327.654 6.758 6.758 0 0 0-.5 1.883c-.085.767-.176 1.668-.097 2.421.088.83.319.988.416 1.02.207.068.498.012.871-.23a3.046 3.046 0 0 0 .558-.473L22 20l.758.652-.003.004a.26.26 0 0 1-.007.008l-.018.02a4.698 4.698 0 0 1-.255.26c-.164.154-.404.36-.7.552-.557.363-1.516.807-2.588.453-.74-.244-1.176-.767-1.435-1.344-.333.35-.694.654-1.075.895-.873.553-2.038.901-3.1.406-1.02-.475-1.55-1.502-1.723-2.516-.176-1.035-.02-2.222.49-3.313.506-1.086 1.324-2.004 2.229-2.577Zm2.255 1.406c-.175-.081-.582-.098-1.186.284-.571.362-1.136.982-1.486 1.733-.347.745-.434 1.52-.33 2.132.107.632.38.938.596 1.039.175.081.582.098 1.186-.284.571-.362 1.136-.982 1.485-1.733.348-.745.435-1.52.331-2.132-.107-.631-.38-.938-.596-1.039ZM5.193 13h5.586l.557 1.669a9.159 9.159 0 0 1 1.51-1.796l-.397-1.19a.942.942 0 0 0-.017-.045l-3.5-9H7.068l-3.5 9-.004.01-1.851 4.937 1.872.703L5.193 13ZM8 5.76 5.962 11h4.076L8 5.76Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconTextStyles[iconSymbol] = true;
var IconTextT = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m20 3 1 1v4h-2V5h-6l.001 14H16v2H8v-2h3.001L11 5H5v3H3V4l1-1h16Z"
        }
      )
    );
  }
);
IconTextT[iconSymbol] = true;
var IconTextUUnderlined = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M22 20v2H2v-2h20ZM6 12V3h2v9a4 4 0 0 0 8 0V3h2v9a6 6 0 0 1-12 0Z"
        }
      )
    );
  }
);
IconTextUUnderlined[iconSymbol] = true;
var IconThumbsUp = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "m9 20.868.438.292a5 5 0 0 0 2.773.84h4.29a5.5 5.5 0 0 0 5.5-5.5V12a4 4 0 0 0-4-4h-3.147l.853-2.772a3.35 3.35 0 0 0-6.352-2.13l-.867 2.384A6.61 6.61 0 0 1 7.7 7H3L2 8v12l1 1h6v-.132Zm3.797-17.944a1.35 1.35 0 0 0-1.562.857l-.868 2.385A8.609 8.609 0 0 1 9 8.6v9.864l1.547 1.031a3 3 0 0 0 1.664.504h4.29a3.5 3.5 0 0 0 3.5-3.5V12a2 2 0 0 0-2-2h-4.5l-.957-1.294 1.252-4.066a1.351 1.351 0 0 0-.999-1.716ZM4 19V9h3v10H4Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconThumbsUp[iconSymbol] = true;
var IconTickCircle = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20 12a8 8 0 1 0-16 0 8 8 0 0 0 16 0Zm2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-5.186-2.919-5 7-1.573.07-3-3.5L8.76 11.35l2.169 2.53 4.258-5.961 1.628 1.162Z"
        }
      )
    );
  }
);
IconTickCircle[iconSymbol] = true;
var IconTicket = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M14 14h-2v-4h2v4Zm5.941-10C21.024 4 22 4.842 22 6v3l-1 1c-.786 0-1.25.239-1.523.528-.281.3-.477.78-.477 1.472 0 .693.196 1.172.477 1.472.273.289.737.528 1.523.528l1 1v3c0 1.158-.976 2-2.059 2H4.06C2.976 20 2 19.158 2 18v-3l1-1c.786 0 1.25-.239 1.522-.528.282-.3.478-.78.478-1.472 0-.594-.186-1.09-.49-1.426C4.22 10.254 3.75 10 3 10L2 9V6c0-1.158.976-2 2.059-2H19.94ZM4.06 6c-.031 0-.05.01-.059.018v2.086c.804.175 1.48.565 1.99 1.126C6.686 9.997 7 11 7 12c0 1.061-.305 2.082-1.022 2.844-.519.55-1.194.902-1.978 1.06v2.077a.09.09 0 0 0 .059.019H12v-2h2v2h5.941a.09.09 0 0 0 .059-.019v-2.078c-.784-.157-1.46-.51-1.977-1.06C17.305 14.083 17 13.062 17 12s.305-2.082 1.023-2.844c.518-.55 1.193-.903 1.977-1.06V6.018A.093.093 0 0 0 19.941 6H14v2h-2V6H4.059Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconTicket[iconSymbol] = true;
var IconTimelineFormat = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M11 16a2 2 0 0 1 1.99 1.796L13 18v2a2 2 0 0 1-2 2H7a2 2 0 0 1-1.99-1.796L5 20v-2l.01-.204a2 2 0 0 1 1.785-1.785L7 16h4Zm0 2H7v2h4v-2Zm9-9a2 2 0 0 1 1.99 1.796L22 11v2a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-2l.01-.204a2 2 0 0 1 1.786-1.785L11 9h9Zm0 2h-9v2h9v-2Zm-9-9a2 2 0 0 1 1.99 1.796L13 4v2l-.01.204A2 2 0 0 1 11 8H4l-.204-.01A2 2 0 0 1 2.01 6.203L2 6V4l.01-.204A2 2 0 0 1 3.795 2.01L4 2h7Zm0 2H4v2h7V4Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconTimelineFormat[iconSymbol] = true;
var IconTimelineLocation = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M2 19v-2a2 2 0 0 1 2-2h7v2H4v2h16v-4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2ZM15.476 4a5.46 5.46 0 0 1 4.733 2.724l.188.345v.003c.803 1.632.82 3.482-.045 5.055l-.001-.001c-.366.675-1.273 1.896-2.043 2.899a109.54 109.54 0 0 1-1.599 2.028l-.448.567-1.554.019-.473-.569-.005-.007c-.15-.184-.896-1.1-1.68-2.119-.756-.982-1.636-2.175-1.98-2.868-.643-1.291-.741-2.824-.293-4.223l.002-.006c.461-1.406 1.41-2.57 2.726-3.241A5.312 5.312 0 0 1 15.476 4Zm0 2c-.547 0-1.06.126-1.552.38l-.007.004c-.816.415-1.43 1.145-1.738 2.086a3.68 3.68 0 0 0 .11 2.563l.07.154c.24.481.981 1.507 1.775 2.539a93.933 93.933 0 0 0 1.329 1.682c.293-.366.764-.958 1.259-1.602.806-1.05 1.602-2.135 1.873-2.636l.005-.008c.524-.953.542-2.11.002-3.207A3.47 3.47 0 0 0 15.476 6ZM17.5 9.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
        }
      )
    );
  }
);
IconTimelineLocation[iconSymbol] = true;
var IconTimer = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "m16.207 9.207-2.277 2.276a2 2 0 1 1-1.414-1.414l2.277-2.276 1.414 1.414ZM13 2.05c5.052.503 8.997 4.766 8.997 9.95 0 5.523-4.477 10-10 10s-10-4.477-10-10c0-5.186 3.948-9.45 9.003-9.95V0h2v2.05ZM11.997 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconTimer[iconSymbol] = true;
var IconToolbar = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M16.5 9v6H21V9h-4.5Zm-7 6h5V9h-5v6ZM3 15h4.5V9H3v6Zm20 0a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v6Z"
        }
      )
    );
  }
);
IconToolbar[iconSymbol] = true;
var IconTooltip = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M3 6v8h5.5a2 2 0 0 1 1.6.8l1.9 2.533 1.9-2.533a2 2 0 0 1 1.6-.8H21V6H3Zm20 8a2 2 0 0 1-2 2h-5.5l-2.7 3.6h-1.6L8.5 16H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v8Z"
        }
      )
    );
  }
);
IconTooltip[iconSymbol] = true;
var IconTrackpad = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12Zm-5 12v4h5a1 1 0 0 0 1-1v-3h-6Zm-8 3a1 1 0 0 0 1 1h5v-4H5v3ZM6 5a1 1 0 0 0-1 1v7h14V6a1 1 0 0 0-1-1H6Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconTrackpad[iconSymbol] = true;
var IconTrapeze = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M18 2a1 1 0 0 1 .977.783l4 18A1.001 1.001 0 0 1 22 22H2.094a1 1 0 0 1-.978-1.212l3.906-18 .023-.085A1 1 0 0 1 6 2h12ZM3.334 20h17.419L17.197 4H6.807L3.334 20Z"
        }
      )
    );
  }
);
IconTrapeze[iconSymbol] = true;
var IconTrashSimple = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M18.997 8.077 18.14 19.23A3 3 0 0 1 15.148 22H8.853a3 3 0 0 1-2.992-2.77L5.003 8.077l1.994-.154.858 11.154a1 1 0 0 0 .998.923h6.295a1 1 0 0 0 .997-.923l.858-11.154 1.994.154ZM15 1l.948.684L16.721 4H21v2H3V4h4.28l.772-2.316L9 1h6ZM9.387 4h5.226l-.334-1H9.721l-.334 1Z"
        }
      )
    );
  }
);
IconTrashSimple[iconSymbol] = true;
var IconTrash = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M11 8v7H9V8h2Zm7.997.077L18.14 19.23A3 3 0 0 1 15.148 22H8.853a3 3 0 0 1-2.992-2.77L5.003 8.077l1.994-.154.858 11.154a1 1 0 0 0 .998.923h6.295a1 1 0 0 0 .997-.923l.858-11.154 1.994.154ZM15 1l.948.684L16.721 4H21v2H3V4h4.28l.772-2.316L9 1h6ZM9.387 4h5.226l-.334-1H9.721l-.334 1ZM15 8v7h-2V8h2Z"
        }
      )
    );
  }
);
IconTrash[iconSymbol] = true;
var IconTrello = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M20.047 2C21.126 2 22 2.874 22 3.953v16.094A1.953 1.953 0 0 1 20.047 22H3.953A1.953 1.953 0 0 1 2 20.047V3.953C2 2.874 2.874 2 3.953 2h16.094ZM5.538 4.6a.938.938 0 0 0-.937.937v11.875c0 .518.42.938.937.938h4.225c.517 0 .937-.42.937-.938V5.537a.938.938 0 0 0-.937-.937H5.538Zm8.7 0a.938.938 0 0 0-.938.937v6.875c0 .518.42.938.937.938h4.225c.518 0 .937-.42.937-.938V5.537a.938.938 0 0 0-.937-.937h-4.225Z"
        }
      )
    );
  }
);
IconTrello[iconSymbol] = true;
var IconTriangleSquareCircle = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M10 13a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h7Zm10 4.5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0ZM4 20h5v-5H4v5Zm8-18a1 1 0 0 1 .895.553l3.5 7A1 1 0 0 1 15.5 11h-7a1 1 0 0 1-.895-1.447l3.5-7 .072-.121A1 1 0 0 1 12 2Zm-1.882 7h3.764L12 5.236 10.118 9ZM22 17.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
        }
      )
    );
  }
);
IconTriangleSquareCircle[iconSymbol] = true;
var IconTriangle = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M10.507 2.839a1.252 1.252 0 0 1 2.031-.043l.1.157 9.043 16.729a1.25 1.25 0 0 1-1.1 1.844H3.4a1.25 1.25 0 0 1-1.124-1.796L10.415 3l.092-.162ZM4.599 19.526h14.724L11.573 5.19 4.6 19.526Z"
        }
      )
    );
  }
);
IconTriangle[iconSymbol] = true;
var IconTrident = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M11.78 2.138a.25.25 0 0 1 .447 0l2.006 4.012c.1.2-.092.42-.303.349L13 6.187v8.66l5-.714V8.16l-.923.31a.25.25 0 0 1-.303-.35l2.005-4.012a.25.25 0 0 1 .448 0l2.006 4.012a.25.25 0 0 1-.303.35L20 8.155v5.977a2 2 0 0 1-1.535 1.946l-.182.034-5.283.755V21h-2v-4.133l-5.283-.755A2 2 0 0 1 4 14.133v-5.95l-.926.31a.25.25 0 0 1-.303-.348l2.006-4.012a.25.25 0 0 1 .447 0L7.23 8.145c.1.2-.092.42-.303.349L6 8.184v5.95l5 .713V6.19l-.924.31a.25.25 0 0 1-.302-.35l2.006-4.01Z"
        }
      )
    );
  }
);
IconTrident[iconSymbol] = true;
var IconTrophy = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M18 3v2h4l1 1.022c-.045 1.98-.63 3.31-1.807 4.208-.97.741-2.284 1.116-3.583 1.488-.054.232-.108.44-.163.602-.51 1.51-1.251 2.506-2.294 3.075-.68.37-1.421.514-2.153.57V20h3v2H8v-2h3v-4.037c-.734-.06-1.472-.212-2.152-.588-.97-.536-1.683-1.438-2.194-2.774l-.098-.273a6.484 6.484 0 0 1-.168-.608c-1.264-.36-2.56-.727-3.529-1.464-1.173-.893-1.778-2.22-1.858-4.216L2 5h4V3l1-1h10l1 1ZM8 9c0 .278.06.81.158 1.383.098.575.212 1.072.287 1.289.41 1.18.896 1.69 1.37 1.953.517.285 1.188.375 2.185.375 1.012 0 1.682-.082 2.196-.362.467-.255.951-.758 1.357-1.958.074-.22.189-.722.287-1.296.074-.431.127-.837.15-1.131L16 9V4H8v5ZM3.116 7c.179.879.533 1.343.955 1.664.477.363 1.101.602 1.957.864A6.186 6.186 0 0 1 6 9V7H3.116ZM18 9c0 .155-.013.333-.03.525.888-.273 1.529-.517 2.01-.884.417-.32.761-.774.923-1.641H18v2Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconTrophy[iconSymbol] = true;
var IconTshirt = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M10 4a2 2 0 0 0 4 0l1-1h1.42a5 5 0 0 1 4.966 4.42l.604 4.331-.722 1.103L18 13.76V20l-1 1H7l-1-1v-6.22l-3.242-.81-.75-1.105.606-4.441A5 5 0 0 1 7.58 3H9l1 1ZM7.58 5A3 3 0 0 0 4.6 7.669l-.001.012-.002.012-.485 3.554L6 11.72V9h2v10h8V9h2v2.684l1.889-.525-.484-3.463-.004-.027A3 3 0 0 0 16.42 5h-.546a4.002 4.002 0 0 1-7.748 0H7.58Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconTshirt[iconSymbol] = true;
var IconUserAdd = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M9.45 7.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm-2 0a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm4.5 5.5a7.077 7.077 0 0 0-7.042 6.373L4.755 20.9l1.99.2.153-1.528A5.077 5.077 0 0 1 11.95 15v-2ZM19 13v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2Z"
        }
      )
    );
  }
);
IconUserAdd[iconSymbol] = true;
var IconUserArrowRightUp = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M11.95 15a5.077 5.077 0 0 0-5.052 4.572L6.745 21.1l-1.99-.2.153-1.527A7.077 7.077 0 0 1 11.95 13v2Zm6.757-2.707 3.5 3.5-1.414 1.414L19 15.414V21h-2v-5.586l-1.793 1.793-1.414-1.414 3.5-3.5h1.414ZM11.95 3a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconUserArrowRightUp[iconSymbol] = true;
var IconUserArrowRight = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M21.707 16.293v1.414l-3.5 3.5-1.414-1.414L18.586 18H13v-2h5.586l-1.793-1.793 1.414-1.414 3.5 3.5ZM11.95 15a5.077 5.077 0 0 0-5.052 4.572L6.745 21.1l-1.99-.2.153-1.527A7.077 7.077 0 0 1 11.95 13v2Zm0-12a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconUserArrowRight[iconSymbol] = true;
var IconUserBackgroundBlur = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "m19.018 10 1.767 1.768-1.767 1.768-1.768-1.768L19.018 10Zm0-7.5 1.767 1.768-1.767 1.768-1.768-1.768L19.018 2.5ZM4.768 10l1.768 1.768-1.768 1.768L3 11.768 4.768 10Zm0-7.5 1.768 1.768-1.768 1.768L3 4.268 4.768 2.5ZM14 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm2 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-4 5a6.863 6.863 0 0 1 6.831 6.201l.164 1.702-1.99.194-.165-1.703a4.863 4.863 0 0 0-9.68 0l-.165 1.703-1.99-.194.164-1.702A6.863 6.863 0 0 1 12 13Z"
        }
      )
    );
  }
);
IconUserBackgroundBlur[iconSymbol] = true;
var IconUserCogPlus = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "m18.544 13.342.385 1.153.314.182 1.19-.244.534.24.666 1.154-.059.582-.806.91v.362l.806.91.059.582-.666 1.154-.533.24-1.19-.245-.315.182-.385 1.154-.475.342h-1.333l-.474-.342-.384-1.154-.315-.18-1.19.243-.534-.24-.667-1.154.06-.582.806-.91v-.363l-.807-.909-.06-.582.668-1.154.533-.24 1.191.243.315-.18.384-1.154.474-.342h1.333l.475.342ZM17.45 16.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-5.5-1.5a5.077 5.077 0 0 0-5.052 4.572L6.745 21.1l-1.99-.2.153-1.527A7.077 7.077 0 0 1 11.95 13v2Zm0-12c.469 0 .923.072 1.35.206l-.6 1.908a2.5 2.5 0 1 0 1.51 3.457l1.807.858A4.5 4.5 0 1 1 11.95 3ZM19 4h2v2h-2v2h-2V6h-2V4h2V2h2v2Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconUserCogPlus[iconSymbol] = true;
var IconUserCog = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "m18.07 13 .474.342.385 1.153.314.182 1.19-.244.534.24.666 1.154-.059.582-.806.91v.362l.806.91.059.582-.666 1.154-.533.24-1.19-.245-.315.182-.385 1.154-.475.342h-1.333l-.474-.342-.384-1.154-.315-.18-1.19.243-.534-.24-.667-1.154.06-.582.806-.91v-.363l-.807-.909-.06-.582.668-1.154.533-.24 1.191.243.315-.18.384-1.154.474-.342h1.333Zm-.62 3.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-5.5-1.5a5.077 5.077 0 0 0-5.052 4.572L6.745 21.1l-1.99-.2.153-1.527A7.077 7.077 0 0 1 11.95 13v2Zm0-12a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconUserCog[iconSymbol] = true;
var IconUserEyeOpen = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M16.5 7.5a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0ZM12 5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm-2 8.25a7.108 7.108 0 0 0-5.092 6.123L4.755 20.9l1.99.2.153-1.528A5.061 5.061 0 0 1 10 15.4v.1-2.25Zm6.5-.25c2.008 0 3.615 1.06 4.66 2.01a10.956 10.956 0 0 1 1.56 1.768l.09.132.024.038.008.013.003.004v.002l.002.534v.532l-.002.002-.003.004-.008.013-.024.038a9.632 9.632 0 0 1-.419.575 11 11 0 0 1-1.23 1.325C20.115 20.94 18.508 22 16.5 22c-2.008 0-3.615-1.06-4.66-2.01a10.956 10.956 0 0 1-1.56-1.768 6.47 6.47 0 0 1-.09-.132l-.024-.038-.008-.013-.003-.004v-.002l-.002-.533v-.533l.002-.002.003-.004.008-.013.024-.038a9.632 9.632 0 0 1 .419-.575c.284-.36.699-.842 1.23-1.325C12.886 14.06 14.493 13 16.5 13Zm0 2c-1.292 0-2.435.69-3.315 1.49-.396.36-.716.724-.946 1.01.23.286.55.65.946 1.01.88.8 2.023 1.49 3.315 1.49 1.292 0 2.435-.69 3.314-1.49.397-.36.716-.724.946-1.01a8.933 8.933 0 0 0-.946-1.01c-.88-.8-2.022-1.49-3.314-1.49Zm6.347 3.033v-1.065 1.065ZM18 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        }
      )
    );
  }
);
IconUserEyeOpen[iconSymbol] = true;
var IconUserFilter = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M16.844 8.915a3.003 3.003 0 1 1 4.241 4.241l-5.077 4.528a5.09 5.09 0 0 1-.14.63c-.169.574-.514 1.364-1.23 1.956-1.137.941-2.719 1.045-3.808.996a11.255 11.255 0 0 1-1.904-.255l-.126-.03-.037-.01-.011-.002-.004-.001h-.002c.001-.005.018-.073.254-.968l-.255.967-.452-1.674c.554-.554.714-1.071.835-1.658.11-.538.21-1.498.851-2.273a3.971 3.971 0 0 1 1.793-1.217c.2-.068.382-.112.533-.142l4.539-5.088Zm2.949 1.292a1.003 1.003 0 0 0-1.456.04l-4.778 5.357-.28.313-.42.02a2.23 2.23 0 0 0-.443.102c-.294.099-.63.278-.896.599-.238.288-.264.58-.433 1.4a5.872 5.872 0 0 1-.373 1.216l.207.014c.995.045 1.913-.101 2.441-.538.29-.24.477-.607.587-.982a3.18 3.18 0 0 0 .114-.604l.016-.42 5.675-5.06a1.004 1.004 0 0 0 .039-1.457Zm-6.93 5.73h-.005l.006-.002v.002ZM13.5 7.5a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0ZM9 5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm0 8c-3.636 0-6.73 2.755-7.092 6.373L1.755 20.9l1.99.2.153-1.528C4.158 16.977 6.39 15 9 15v-2Z"
        }
      )
    );
  }
);
IconUserFilter[iconSymbol] = true;
var IconUserLoad = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M14.5 7.5a2.5 2.5 0 0 0-5 0c0 .36.011.556.059.715l-1.917.57C7.5 8.31 7.5 7.835 7.5 7.5a4.5 4.5 0 1 1 5.29 4.43c-.158.029-.36.045-.487.053a12.383 12.383 0 0 1-.236.015l-.016.001h-.006l-.09-1.998h.003L11.97 10c.01 0 .025 0 .044-.002l.15-.009c.13-.009.235-.02.276-.027A2.502 2.502 0 0 0 14.5 7.5ZM12 13a7.077 7.077 0 0 1 7.042 6.373l.154 1.527-1.99.2-.154-1.528a5.077 5.077 0 0 0-10.104 0L6.795 21.1l-1.99-.2.152-1.527A7.078 7.078 0 0 1 12 13Z"
        }
      )
    );
  }
);
IconUserLoad[iconSymbol] = true;
var IconUserMicSlash = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "m22.758 8.153-3.98 4.617V15c0 1.354-.901 2.592-2.278 2.592-.56 0-1.04-.206-1.414-.541l-.895 1.037A3.41 3.41 0 0 0 16.5 19c1.899 0 3.5-1.607 3.5-3.667V14h2v1.333c0 2.75-1.918 5.086-4.5 5.572V22h-2v-1.095a5.398 5.398 0 0 1-2.613-1.303l-2.63 3.051-1.515-1.306 12.5-14.5 1.516 1.306ZM9 15c-2.609 0-4.843 1.977-5.103 4.572L3.745 21.1l-1.99-.2.152-1.527C2.27 15.755 5.364 13 9 13v2Zm4-.84-1.898 2.262A5.846 5.846 0 0 1 11 15.333V14h2v.16Zm3.5-5.123c.332 0 .653.071.946.205l-3.223 3.845V11.5c0-.695.223-1.317.65-1.77a2.209 2.209 0 0 1 1.627-.693ZM9 3a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconUserMicSlash[iconSymbol] = true;
var IconUserMic = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M13 15.333C13 17.393 14.601 19 16.5 19s3.5-1.607 3.5-3.667V14h2v1.333c0 2.75-1.918 5.086-4.5 5.572V22h-2v-1.095c-2.582-.486-4.5-2.822-4.5-5.572V14h2v1.333ZM9 15c-2.609 0-4.843 1.977-5.103 4.572L3.745 21.1l-1.99-.2.152-1.527C2.27 15.755 5.364 13 9 13v2Zm7.5-5.936c.61 0 1.187.237 1.607.685.42.448.643 1.062.643 1.751V15c0 1.343-.893 2.564-2.25 2.564s-2.25-1.22-2.25-2.564v-3.5c0-.689.223-1.303.643-1.751a2.18 2.18 0 0 1 1.607-.685ZM9 3a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconUserMic[iconSymbol] = true;
var IconUserNumberThree = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M12 13c3.624 0 6.631 2.8 6.89 6.415l.107 1.514-1.994.142-.108-1.513a4.907 4.907 0 0 0-9.79 0l-.108 1.513-1.994-.142.107-1.514A6.907 6.907 0 0 1 12 13Zm-1-4a1 1 0 1 0 1.002-1H11V6h1.002l.101-.005A1 1 0 1 0 11 5H9a3 3 0 0 1 6.002 0c0 .77-.293 1.469-.77 2 .477.531.77 1.23.77 2A3.001 3.001 0 0 1 9 9h2Z"
        }
      )
    );
  }
);
IconUserNumberThree[iconSymbol] = true;
var IconUserPenDashesBottom = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M9 15c-2.609 0-4.843 1.977-5.103 4.572L3.745 21.1l-1.99-.2.152-1.527C2.27 15.755 5.364 13 9 13v2Zm7.629-6.043a3 3 0 0 1 4.242 0l.172.172a3 3 0 0 1 0 4.242l-7.071 7.071-.33.048-3.5.5-1.132-1.132.5-3.5.048-.33 7.07-7.071Zm-5.187 8.014-.263 1.85 1.85-.264 4.556-4.558-1.586-1.586-4.557 4.558Zm8.015-6.6a1 1 0 0 0-1.414 0l-.63.628L19 12.585l.63-.628a1 1 0 0 0 0-1.414l-.172-.172ZM9 3a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconUserPenDashesBottom[iconSymbol] = true;
var IconUserPenLineBottom = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M9 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 11-1 1-1.5 6H3l-1-1 .17-1.799A6.863 6.863 0 0 1 9 12v2Zm8-4.957a2.82 2.82 0 0 1 3.957 0 2.82 2.82 0 0 1 0 3.957l-.793.75-3.914-3.914.75-.793Zm-2.164 2.207L10 16l-1 4 1 1 4-1 4.75-4.836-3.914-3.914Z"
        }
      )
    );
  }
);
IconUserPenLineBottom[iconSymbol] = true;
var IconUserSparkle = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M9.45 7.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm-2 0a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm4.5 5.5a7.077 7.077 0 0 0-7.042 6.373L4.755 20.9l1.99.2.153-1.528A5.077 5.077 0 0 1 11.95 15v-2Zm6.3 0A3.75 3.75 0 0 0 22 16.75v1.5A3.75 3.75 0 0 0 18.25 22h-1.5A3.75 3.75 0 0 0 13 18.25v-1.5A3.75 3.75 0 0 0 16.75 13h1.5Z"
        }
      )
    );
  }
);
IconUserSparkle[iconSymbol] = true;
var IconUserTickDown = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M9.45 7.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm-2 0a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm4.5 5.5a7.077 7.077 0 0 0-7.042 6.373L4.755 20.9l1.99.2.153-1.528A5.077 5.077 0 0 1 11.95 15v-2Zm9.843 1.61-5 6.5-1.552.04-3-3.5 1.518-1.3 2.198 2.564 4.25-5.523 1.586 1.218Z"
        }
      )
    );
  }
);
IconUserTickDown[iconSymbol] = true;
var IconUser = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M14.5 7.5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Zm2 0a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM12 13a7.077 7.077 0 0 1 7.042 6.373l.154 1.527-1.99.2-.154-1.528a5.077 5.077 0 0 0-10.104 0L6.795 21.1l-1.99-.2.152-1.527A7.078 7.078 0 0 1 12 13Z"
        }
      )
    );
  }
);
IconUser[iconSymbol] = true;
var IconUsersThree = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M12 16a4.97 4.97 0 0 1 4.94 4.414l.054.474-1.988.224-.053-.474a2.972 2.972 0 0 0-5.906 0l-.053.474-1.988-.224.054-.474A4.972 4.972 0 0 1 12 16Zm1-4a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-8 0a2.972 2.972 0 0 0-2.953 2.638l-.053.474-1.988-.224.054-.474A4.972 4.972 0 0 1 7 10v2Zm1-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm7 4a4.97 4.97 0 0 1 4.94 4.414l.054.474-1.988.224-.053-.474A2.972 2.972 0 0 0 17 12v-2Zm1-4a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        }
      )
    );
  }
);
IconUsersThree[iconSymbol] = true;
var IconUsers = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M11 7c0-1.153-.847-2-2-2s-2 .847-2 2 .847 2 2 2 2-.847 2-2Zm2 0c0 2.258-1.742 4-4 4S5 9.258 5 7s1.742-4 4-4 4 1.742 4 4Zm-4 5a6.37 6.37 0 0 1 6.354 5.916l.143 2.013-1.994.142-.145-2.012a4.37 4.37 0 0 0-8.716 0l-.145 2.012-1.994-.142.143-2.013A6.37 6.37 0 0 1 9 12Zm9-2a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-3 4a4.315 4.315 0 0 1 4.294 3.886l.201 2.014-1.99.2-.201-2.015A2.315 2.315 0 0 0 17 16v-2Z"
        }
      )
    );
  }
);
IconUsers[iconSymbol] = true;
var IconVerticalBlocks = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M15 5h4v12h-4V5Zm4 14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4ZM5 5h4v14H5V5Zm4 16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4Z"
        }
      )
    );
  }
);
IconVerticalBlocks[iconSymbol] = true;
var IconVideoCameraDot = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M12 6H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-6.5h2v2.53L19.363 15H20V9h2v7l-1 1h-2.362l-.279-.231L17 15.636V17a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h7v2Zm5.5-4a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z"
        }
      )
    );
  }
);
IconVideoCameraDot[iconSymbol] = true;
var IconVideoCameraLinesDot = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M12 6H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-6.5h2v2.53L19.363 15H20V9h2v7l-1 1h-2.362l-.279-.231L17 15.636V17a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h7v2Zm-2 7v2H6v-2h4Zm3 0v2h-2v-2h2Zm0-4v2H6V9h7Zm4.5-7a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z"
        }
      )
    );
  }
);
IconVideoCameraLinesDot[iconSymbol] = true;
var IconVideoCameraLines = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M10 13v2H6v-2h4Zm3 0v2h-2v-2h2Zm0-4v2H6V9h7Zm1-5a3 3 0 0 1 3 3v1.365L18.638 7H21l1 1v8l-1 1h-2.362L17 15.635V17a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h9ZM5 6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5Zm12 4.969v2.062L19.362 15H20V9h-.638L17 10.969Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconVideoCameraLines[iconSymbol] = true;
var IconVideoCameraSimpleError = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M14 4a3 3 0 0 1 3 3v1.364l1.36-1.133.278-.231H21l1 1v8l-1 1h-2.362l-.279-.231L17 15.636V17a3 3 0 0 1-3 3v-2a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v1H2V7a3 3 0 0 1 3-3h9Zm5.363 5L17 10.969v2.061L19.363 15H20V9h-.637ZM8 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3-2a4 4 0 1 0-8 0 4 4 0 0 0 8 0Zm-3-3v3H6v-3h2Zm5 3a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"
        }
      )
    );
  }
);
IconVideoCameraSimpleError[iconSymbol] = true;
var IconVideoCameraSimpleSlash = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M18.747 3.664 17 5.63v2.736L18.638 7H21l1 1v8l-1 1h-2.362L17 15.635V17a3 3 0 0 1-3 3H4.227l-1.48 1.664-1.494-1.328 16-18 1.494 1.328ZM6.004 18H14a1 1 0 0 0 1-1V7.879L6.004 18ZM17 10.969v2.062L19.362 15H20V9h-.638L17 10.969ZM12 6H5a1 1 0 0 0-1 1v9H2V7a3 3 0 0 1 3-3h7v2Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconVideoCameraSimpleSlash[iconSymbol] = true;
var IconVideoCameraSimple = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M5 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-1.365L18.638 17H21l1-1V8l-1-1h-2.362L17 8.365V7a3 3 0 0 0-3-3H5Zm12 6.968v2.064L19.362 15H20V9h-.638L17 10.968ZM4 7a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconVideoCameraSimple[iconSymbol] = true;
var IconVideoCamera = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M14 3a3 3 0 0 1 3 3v1.32L18.65 6H21l1 1v8l-1 1h-2.35L17 14.68V16a3 3 0 0 1-3 3h-1v2h-2v-2H8v2H6v-2H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h9ZM5 5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5Zm12 4.88v2.24L19.35 14H20V8h-.65L17 9.88Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconVideoCamera[iconSymbol] = true;
var IconVideoPlayer = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M10.833 9 15 11.571v.858L10.833 15 10 14.571V9.43l.833-.43ZM19 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h14ZM5 6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5Z"
        }
      )
    );
  }
);
IconVideoPlayer[iconSymbol] = true;
var IconViewCenter = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M16 8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V9l.005-.103A1 1 0 0 1 8 8h8Zm3-5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h14ZM5 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconViewCenter[iconSymbol] = true;
var IconViewSideLeft = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M11 7a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8l.005-.103A1 1 0 0 1 7 7h4Zm8-4a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h14ZM5 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconViewSideLeft[iconSymbol] = true;
var IconViewSideRight = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M17 7a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V8l.005-.103A1 1 0 0 1 13 7h4Zm2-4a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h14ZM5 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconViewSideRight[iconSymbol] = true;
var IconWallet = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M15 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm2-7a3 3 0 0 1 3 3v1h1l1 1v6l-1 1h-1v1a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h12ZM5 6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1h-6l-1-1V9l1-1h6V7a1 1 0 0 0-1-1H5Zm8 8h7v-4h-7v4Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconWallet[iconSymbol] = true;
var IconWand = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M20.294 4.879a3 3 0 0 1 0 4.242L8.122 21.293a3 3 0 0 1-4.242 0l-1.172-1.172a3 3 0 0 1 0-4.242L14.879 3.707a3 3 0 0 1 4.243 0l1.172 1.172ZM13 8.414l-8.88 8.879a1 1 0 0 0 0 1.414l1.173 1.172a1 1 0 0 0 1.414 0L15.586 11l-2.585-2.586Zm5.879-.707a1 1 0 0 0 0-1.414l-1.172-1.172a1 1 0 0 0-1.414 0L14.414 7l2.587 2.586 1.878-1.879ZM9 5.917c-1.15 0-2.083.933-2.083 2.083h-.833c0-1.15-.933-2.083-2.083-2.083v-.834c1.15 0 2.083-.933 2.083-2.083h.833c0 1.15.932 2.083 2.083 2.083v.834Zm5-3.167c-.69 0-1.25.56-1.25 1.25h-.5c0-.69-.56-1.25-1.25-1.25v-.5c.69 0 1.25-.56 1.25-1.25h.5c0 .69.56 1.25 1.25 1.25v.5Zm6 13c-.69 0-1.25.56-1.25 1.25h-.5c0-.69-.56-1.25-1.25-1.25v-.5c.69 0 1.25-.56 1.25-1.25h.5c0 .69.56 1.25 1.25 1.25v.5Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconWand[iconSymbol] = true;
var IconWarning = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M11 14V9h2v5h-2Zm-.5 2.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm2.384-13.968 9 17L21 21H3l-.884-1.468 9-17h1.768ZM4.66 19h14.68L12 5.137 4.661 19Z"
        }
      )
    );
  }
);
IconWarning[iconSymbol] = true;
var IconWidgetColumns = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14ZM5 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3V4H5Zm11 16h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-3v16Zm-6 0h4V4h-4v16Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
IconWidgetColumns[iconSymbol] = true;
var IconWifiExclamation = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M12 16a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm1-1h-2V4h2v11Zm-3.08-1.805a6.263 6.263 0 0 0-1.074.638 7.67 7.67 0 0 0-.904.775l-1.414-1.414.002-.002c.09-.09.183-.179.276-.265l.046-.042a9.9 9.9 0 0 1 .229-.203l.075-.065c.19-.16.383-.31.581-.452l.034-.023c.092-.066.185-.129.279-.19l.049-.031a8.283 8.283 0 0 1 .351-.214l.059-.033c.187-.106.377-.204.571-.293l.84 1.814Zm5.035-1.812c.19.089.377.188.563.295v-.001l.05.03c.038.02.075.044.112.066l.152.094.162.106c.05.033.099.068.149.102l.116.081a9.357 9.357 0 0 1 .836.68l.11.1c.09.084.179.17.267.258l-1.414 1.414-.214-.206a6.83 6.83 0 0 0-1.74-1.21l.851-1.81ZM8.342 7.349a11.387 11.387 0 0 0-1.633.746 13.412 13.412 0 0 0-3.002 2.278L2.293 8.959c.094-.094.188-.186.283-.276l.146-.136c.046-.044.092-.087.14-.13l.136-.124.146-.127a16.157 16.157 0 0 1 .346-.292l.109-.089.13-.103a15.389 15.389 0 0 1 1.064-.767l.17-.11.163-.103c.047-.03.095-.057.143-.086l.175-.104c.05-.03.101-.06.152-.088.066-.038.133-.073.199-.11l.112-.062c.04-.021.08-.04.12-.062.133-.069.267-.136.4-.2l.134-.064c.361-.17.728-.322 1.097-.456l.684 1.879Zm8-1.88a13.396 13.396 0 0 1 1.027.425l.052.023a13.78 13.78 0 0 1 1.02.528l.05.03c.082.047.164.095.245.144l.137.083.175.11.137.088.226.152.076.052a15.06 15.06 0 0 1 .783.578l.13.103a16.892 16.892 0 0 1 .359.297l.014.013a16.804 16.804 0 0 1 .92.85l.014.014-1.415 1.414a13.432 13.432 0 0 0-2.967-2.26 11.828 11.828 0 0 0-1.668-.764l.685-1.88Z"
        }
      )
    );
  }
);
IconWifiExclamation[iconSymbol] = true;
var IconWifi = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M13.5 17.759a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-6.972-4.565c1.461-1.461 3.276-2.397 5.234-2.476 1.975-.079 3.956.722 5.71 2.476l-1.415 1.414c-1.422-1.422-2.882-1.944-4.215-1.891-1.352.054-2.714.705-3.9 1.891l-1.414-1.414ZM2.293 8.959C5.109 6.142 8.534 4.696 12 4.696c3.466 0 6.89 1.447 9.707 4.263l-1.415 1.414C17.815 7.896 14.887 6.695 12 6.695c-2.886 0-5.815 1.2-8.293 3.678L2.293 8.96Z"
        }
      )
    );
  }
);
IconWifi[iconSymbol] = true;
var IconWordCloud = (0, import_react33.forwardRef)(
  ({ size = "medium", ...props }, forwardRef22) => {
    const [debug] = useLocalStorage("DEBUG_ICON", false);
    return (0, import_react33.createElement)(
      StyledIcon,
      {
        ...props,
        debug,
        "aria-hidden": true,
        size,
        viewBox: "0 0 24 24",
        fill: "none",
        ref: forwardRef22
      },
      (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M19 12a2 2 0 0 0-2-2H7a2 2 0 1 0 0 4h10a2 2 0 0 0 2-2Zm2 0a4 4 0 0 1-4 4H7a4 4 0 0 1 0-8h10a4 4 0 0 1 4 4Zm-3 7.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5Zm2 0a2.5 2.5 0 0 1-2.5 2.5h-5a2.5 2.5 0 0 1 0-5h5a2.5 2.5 0 0 1 2.5 2.5Zm-13 0a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 .5-.5Zm2 0A2.5 2.5 0 0 1 6.5 22h-1a2.5 2.5 0 0 1 0-5h1A2.5 2.5 0 0 1 9 19.5Zm5-15a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5Zm2 0A2.5 2.5 0 0 1 13.5 7h-3a2.5 2.5 0 0 1 0-5h3A2.5 2.5 0 0 1 16 4.5Z"
        }
      )
    );
  }
);
IconWordCloud[iconSymbol] = true;

export {
  module_exports,
  require_jsx_runtime,
  themeMap,
  theme$1,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  fontFace,
  setMedia,
  setCssUtils,
  AS_ERROR,
  STYLING_ATTRS_ERROR,
  styled,
  stitchesCssRoot,
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c,
  $b5e257d569688ac6$export$535bd6ca7f90a273,
  $bdb11010cef70236$export$b4cc09c592e8fdb8,
  $ff5963eb1fccf552$export$e08e3b67e392101e,
  $431fbd86ca7dc216$export$b204af158042fbac,
  $431fbd86ca7dc216$export$f21a1ffae260145a,
  $d4ee10de306f2510$export$4282f70798064fe0,
  $d4ee10de306f2510$export$cd4e5573fbe2b576,
  $d4ee10de306f2510$export$e58f029f0fbfdb29,
  $5dc95899b306f630$export$c9058316764c140e,
  $3ef42575df84b30b$export$9d1611c77c2fe928,
  $65484d02dcb7eb3e$export$457c3d6518dd4c6f,
  $7215afc6de606d6b$export$de79e2c695e052f3,
  $c87311424ea30a05$export$9ac100e40613ea10,
  $c87311424ea30a05$export$fedb369cb70207f1,
  $ea8dcbcb9ea1b556$export$95185d699e05d4d7,
  $bbed8b41f857bcc0$export$24490316f764c430,
  $03deb23ff14920c4$export$4eaf04e54aa8eed6,
  $313b98861ee5dd6c$export$d6875122194c7b44,
  $df56164dff5785e2$export$4338b53315abf666,
  $8ae05eaa5c114e9c$export$7f54fc3180508a52,
  $4f58c5f72bcf79f7$export$496315a1608d9602,
  $e7801be82b4b2a53$export$4debdb1a3f0fa79e,
  $62d8ded9296f3872$export$cfa2225e87938781,
  $ef06256079686ba0$export$f8aeda7b10753fa1,
  $e9faafb641e167db$export$90fc3a17d93f704c,
  $2f04cbc44ee30ce0$export$c826860796309d1b,
  $6a7db85432448f7f$export$60278871457622de,
  $6a7db85432448f7f$export$29bf1b5f2c56cf63,
  $5a387cc49350e6db$export$722debc0e56fea39,
  $b4b717babfbb907b$export$4c063cf1350e6fed,
  $458b0a5536c1a7cf$export$40bfa8c7b0832715,
  $9446cca9a3875146$export$7d15b64cf5a3a4c4,
  $9446cca9a3875146$export$b6268554fba451f,
  isFragment,
  addPropsToChildren,
  mergeRefs,
  removeEventProps,
  booleanify,
  isOverTarget,
  getPointClientRect,
  areRectanglesOverlapping,
  booleanishAttrValue,
  stringAttrValue,
  createConstants,
  mapKeysToVariants,
  handleVirtualClick,
  composeRefs,
  useComposedRefs,
  Primitive,
  useListeners,
  useLayoutEffect,
  useEventListener,
  useEvent,
  configUseLocalStorage,
  useLocalStorage,
  styles,
  isIconComponent,
  IconActivitySparkle,
  IconActivity,
  IconAddLineBottom,
  IconAddLineLeft,
  IconAddLineRight,
  IconAddLineTop,
  IconAha,
  IconAiCursor,
  IconAiText,
  IconAlignBottomGroup,
  IconAlignBottom,
  IconAlignCenterHorizontal,
  IconAlignCenterVertical,
  IconAlignLeft,
  IconAlignMiddle,
  IconAlignRight,
  IconAlignTopGroup,
  IconAlignTop,
  IconAlignmentScale,
  IconAltTextUnderline,
  IconAltText,
  IconAndroidShare,
  IconArrowArcLeft,
  IconArrowArcRight,
  IconArrowBendUpLeft,
  IconArrowBendUpRight,
  IconArrowBoxLeft,
  IconArrowBoxOut,
  IconArrowClockwiseDownRight,
  IconArrowClockwiseIntoRectangle,
  IconArrowClockwiseUpLeft,
  IconArrowCounterClockwiseDownLeft,
  IconArrowCounterClockwiseUpRight,
  IconArrowCurvesBottomRight,
  IconArrowCurvesSparks,
  IconArrowDownLeft,
  IconArrowDownRight,
  IconArrowDown,
  IconArrowElbowDownRight,
  IconArrowFatLeftRight,
  IconArrowFatLeft,
  IconArrowFatRight,
  IconArrowFatUpRight,
  IconArrowLeftAwayLine,
  IconArrowLeftRightDotted,
  IconArrowLeftTowardLine,
  IconArrowLeft,
  IconArrowMobile,
  IconArrowRightAwayLine,
  IconArrowRightTowardLine,
  IconArrowRight,
  IconArrowUpCircle,
  IconArrowUpLeft,
  IconArrowUpRight,
  IconArrowUp,
  IconArrowsClockwiseRectangleTilt,
  IconArrowsClockwiseX,
  IconArrowsClockwiseY,
  IconArrowsCounterclockwiseRectangleTilt,
  IconArrowsDownUp,
  IconArrowsHorizontalLinesTopBottomIn,
  IconArrowsHorizontalLinesTopBottom,
  IconArrowsInSimple,
  IconArrowsOutCardinal,
  IconArrowsOutLinesHorizontal,
  IconArrowsOutLinesVertical,
  IconArrowsOutSimple,
  IconArrowsSquareCounterClockwiseY,
  IconArrowsTimeBackward,
  IconArrowsTimeForward,
  IconArticleEmpty,
  IconArticle,
  IconAt,
  IconAttachment,
  IconBadge,
  IconBarrel,
  IconBasicChevron,
  IconBear,
  IconBellSlash,
  IconBellTilt,
  IconBell,
  IconBoard,
  IconBookOpenInfo,
  IconBookmark,
  IconBoxCaptionsFilled,
  IconBoxCaptions,
  IconBoxLinesTextarea,
  IconBracketClose,
  IconBracketCurlyLeft,
  IconBracketCurlyRight,
  IconBracketOpen,
  IconBracketsAngleSlash,
  IconBracketsCurlyCirclesThree,
  IconBriefcase,
  IconBrowser,
  IconBrush,
  IconCalendarBlank,
  IconCalendarEnd,
  IconCalendarStart,
  IconCamera,
  IconCaptionAlong,
  IconCaptionHorizontal,
  IconCar,
  IconCardCircles,
  IconCardNumberThree,
  IconCard,
  IconCardsPoker,
  IconChartBarXSimple,
  IconChartBarYSimple,
  IconChartBarY,
  IconChartLine,
  IconChartNumber,
  IconChartProgress,
  IconChatCheck,
  IconChatContent,
  IconChatCross,
  IconChatDashesLinesTwo,
  IconChatLinesCross,
  IconChatLinesDot,
  IconChatLinesEyeOpen,
  IconChatLinesTwoStack,
  IconChatLinesTwo,
  IconChatPlus,
  IconChatTextArrow,
  IconChatTwo,
  IconChat,
  IconCheckBoxLines,
  IconCheckMark,
  IconCheckboardSquareCentered,
  IconChevronDownDouble,
  IconChevronDown,
  IconChevronLeftDouble,
  IconChevronLeft,
  IconChevronRightDouble,
  IconChevronRightSmall,
  IconChevronRight,
  IconChevronUpDouble,
  IconChevronUpDownLine,
  IconChevronUpDown,
  IconChevronUp,
  IconCircleCorners,
  IconCircleDashedLoop,
  IconCircleDashed,
  IconCircleFullCheck,
  IconCircleHalfFill,
  IconCircleMotionX,
  IconCircleNotch,
  IconCircleSlash,
  IconCircleTarget,
  IconCircle,
  IconCirclesConnected,
  IconClickup,
  IconClockCounterClockwiseSimple,
  IconClockCounterClockwise,
  IconClockOvertime,
  IconClock,
  IconCloud,
  IconClusterAi,
  IconClusterColor,
  IconClusterSentiment,
  IconCluster,
  IconClustered,
  IconCog,
  IconCoinsChecked,
  IconCoinsSlash,
  IconCoins,
  IconColumnsFormat,
  IconColumnsThree,
  IconCommentGroup,
  IconCompass,
  IconConeSerpentine,
  IconConnectionLineElbows,
  IconConnectionLineStraight,
  IconCornersInside,
  IconCornersThreeEyeOpen,
  IconCorners,
  IconCounter,
  IconCreditCard,
  IconCrop,
  IconCrossCircle,
  IconCrossFat,
  IconCrossMobile,
  IconCrossSquare,
  IconCross,
  IconCube,
  IconCursorFilled,
  IconCursorLines,
  IconCursorTextLines,
  IconCursorText,
  IconCursor,
  IconCurveSquareCircleArrow,
  IconDashLeftDownSquareDashRightUp,
  IconDashLeftUpSquareDashDownRight,
  IconDashSquareDashHorizontal,
  IconDashSquareDashVertical,
  IconDiagramCardLarge1,
  IconDiagramCardLarge2,
  IconDiagramCardLarge3,
  IconDiagramCardLarge4,
  IconDiagramCardMagnifyingGlass,
  IconDiagramCardSmall1,
  IconDiagramCardSmall2,
  IconDiagramCardSmall3,
  IconDiagramCardTeam,
  IconDiagramCardUser,
  IconDiagrammingShapes,
  IconDiagramming,
  IconDigit,
  IconDistributeHorizontal,
  IconDistributeVertical,
  IconDocFormat,
  IconDollarSignCurrency,
  IconDotLineDot,
  IconDotVoting,
  IconDotsNine,
  IconDotsSixHorizontal,
  IconDotsSixVertical,
  IconDotsThreeVertical,
  IconDotsThree,
  IconDotsTwo,
  IconDownload,
  IconDrinkBurger,
  IconEnvelope,
  IconEraser,
  IconExclamationMarkOctagon,
  IconExclamationPointCircle,
  IconExport,
  IconExternalFormat,
  IconEyeClosedDotsFourFrameBroken,
  IconEyeClosed,
  IconEyeOpenLineFrameBroken,
  IconEyeOpenSlash,
  IconEyeOpen,
  IconEyedropper,
  IconFactoryHouse,
  IconFactory,
  IconFigma,
  IconFileSpreadsheet,
  IconFilledBottomBox,
  IconFilledTopBox,
  IconFlag,
  IconFlask,
  IconFlipCard,
  IconFlip,
  IconFolderFilled,
  IconFolder,
  IconFormula,
  IconFrameLinesTwo,
  IconFramePlay,
  IconFramePlus,
  IconFrame,
  IconFunnel,
  IconGauge,
  IconGavel,
  IconGift,
  IconGithub,
  IconGlobe,
  IconGoogleDrive,
  IconGraduationCap,
  IconGridFour,
  IconGridSix,
  IconGrid,
  IconHandFilled,
  IconHandPointing,
  IconHandRaisedFilled,
  IconHand,
  IconHeadphones,
  IconHeadsetPerson,
  IconHeartFilled,
  IconHeartMusicNote,
  IconHeartPlusMusic,
  IconHeart,
  IconHexagon,
  IconHighlighterColorSelection,
  IconHighlighterUnderline,
  IconHighlighter,
  IconHorizontalBlocks,
  IconHouse,
  IconImageSparkle,
  IconImage,
  IconIndentLeft,
  IconIndentRight,
  IconInformationMarkCircle,
  IconInsightsSearch,
  IconInsights,
  IconIosShare,
  IconKanban,
  IconKey,
  IconKeycapSingle,
  IconKeycap,
  IconLaptop,
  IconLasso,
  IconLayeredBoxesCheck,
  IconLayout,
  IconLifesaver,
  IconLightbox,
  IconLightbulb,
  IconLightning,
  IconLineCurved,
  IconLineDashed,
  IconLineDiagonal,
  IconLineDotted,
  IconLineHorizontal,
  IconLineOrthogonal,
  IconLineStraight,
  IconLineTwoDiagonalTopRightDouble,
  IconLineVertical,
  IconLinear,
  IconLinesThreeHorizontalLineVerticalCenter,
  IconLinesThreeHorizontal,
  IconLinesThreeVertical,
  IconLinesTopLeftColumnsTwo,
  IconLinkPlus,
  IconLinkVariant,
  IconLink,
  IconListBullets,
  IconListNumbers,
  IconLockClosed,
  IconLockOpen,
  IconLogin,
  IconLogout,
  IconMagnet,
  IconMagnifyingGlassLightning,
  IconMagnifyingGlassMinus,
  IconMagnifyingGlassPlus,
  IconMagnifyingGlass,
  IconMapUser,
  IconMap,
  IconMarginAll,
  IconMarginBottom,
  IconMarginLeftRight,
  IconMarginLeft,
  IconMarginRight,
  IconMarginTopBottom,
  IconMarginTop,
  IconMeasurePencil,
  IconMegaphone,
  IconMermaid,
  IconMicLinesDot,
  IconMicrophoneSlash,
  IconMicrophone,
  IconMinus,
  IconMiroMark,
  IconMobile,
  IconMonitorArrowUp,
  IconMonitorArrow,
  IconMonitorEyeClosed,
  IconMonitorEyeOpen,
  IconMonitorPause,
  IconMonitorPlay,
  IconMonitorStop,
  IconMonitor,
  IconMoon,
  IconMouse,
  IconMusicNote,
  IconNavigationArrowLines,
  IconNavigationUpLeftFilled,
  IconNavigationUpLeftSlash,
  IconNavigationUpRight,
  IconNesting,
  IconNext,
  IconNodeConnectedDot,
  IconNodeLinesCurved,
  IconNodeLinesHorizontal,
  IconNodeLinesVertical,
  IconNodePlus,
  IconNodesConnected,
  IconNodesConnectionsThree,
  IconNotchedChevron,
  IconNoteMagnifyingGlass,
  IconNotepad,
  IconNumber,
  IconOctagon,
  IconOffice,
  IconOrbitDouble,
  IconOrgChart,
  IconOrientationHorizontal,
  IconOrientationVertical,
  IconPaddingAll,
  IconPaddingBottom,
  IconPaddingLeftRight,
  IconPaddingLeft,
  IconPaddingRight,
  IconPaddingTopBottom,
  IconPaddingTop,
  IconPaintBucket,
  IconPalette,
  IconPaperPlaneFilledRight,
  IconPaperPlaneTilt,
  IconParallelogram,
  IconPauseCircle,
  IconPause,
  IconPdf,
  IconPenColorSelection,
  IconPenSlash,
  IconPenTip,
  IconPenUnderline,
  IconPen,
  IconPentagon,
  IconPeopleList,
  IconPercent,
  IconPersonInCircle,
  IconPhoneFilled,
  IconPixelEraser,
  IconPlaceholder,
  IconPlanet,
  IconPlayCircle,
  IconPlay,
  IconPlaybackSpeedCircle,
  IconPlug,
  IconPlusBox,
  IconPlusCross,
  IconPlusLinesBox,
  IconPlusSquare,
  IconPlusText,
  IconPlus,
  IconPolling,
  IconPresentationArrow,
  IconPresentationEyeOpen,
  IconPresentationLine,
  IconPresentationLinesTwo,
  IconPresentationLink,
  IconPresentationNumberOne,
  IconPresentationPlay,
  IconPresentationPlus,
  IconPrevious,
  IconProgressBar,
  IconProhibit,
  IconProtoButton,
  IconProtoCheckbox,
  IconProtoDropdown,
  IconProtoInput,
  IconProtoNumber,
  IconProtoRadio,
  IconProtoSlider,
  IconPrototypeFormat,
  IconPushPinFilled,
  IconPushPin,
  IconQrCode,
  IconQuestionMarkCircle,
  IconQuestionMark,
  IconQuotes,
  IconRaisedHand,
  IconRally,
  IconRatio169,
  IconRatio43,
  IconRatioSquare,
  IconRectangleArrowUpCenter,
  IconRectangleDashLines,
  IconRectangleDotLinePen,
  IconRectangleFrame2Lines,
  IconRectangleLine,
  IconRectanglePlayStack,
  IconRectanglePortraitDashSquareTopCenter,
  IconRectanglePortraitDashSquareTopLeft,
  IconRectanglePortraitDash,
  IconRectanglePortraitFilled,
  IconRectanglePortraitSquareBottomRight,
  IconRectanglePortraitSquareTopLeft,
  IconRectanglePortrait,
  IconRectangleTick,
  IconRectangleTriangleBottomCenter,
  IconRectanglesLayout,
  IconRectanglesSquares,
  IconRectanglesThreeAligned,
  IconRectanglesThreeFree,
  IconRectanglesThreeOverlap,
  IconRectanglesTwoLine,
  IconRectanglesTwoLinesFour,
  IconRectanglesTwoMinus,
  IconRectanglesTwoPlus,
  IconRectanglesTwoUser,
  IconResize,
  IconRhombus,
  IconRocket,
  IconRssRectangle,
  IconRss,
  IconScissors,
  IconScreenUser,
  IconScrollbarXy,
  IconSelect,
  IconSentiment,
  IconShadow,
  IconShapeSparkle,
  IconShapesLinesStacked,
  IconShapesLines,
  IconShapes,
  IconShieldCheck,
  IconShieldLockFilled,
  IconShieldLock,
  IconShoppingBag,
  IconShuffle,
  IconSidebarClosed,
  IconSidebarGlobalClosed,
  IconSidebarGlobalOpen,
  IconSidebarOpen,
  IconSingleSparksFilled,
  IconSlideFormat,
  IconSlideInteractive,
  IconSlidersX,
  IconSlidersY,
  IconSmileyChat,
  IconSmileyPlus,
  IconSmileySticker,
  IconSmiley,
  IconSocialAdo,
  IconSocialAsana,
  IconSocialAws,
  IconSocialDrawio,
  IconSocialFacebook,
  IconSocialInstagram,
  IconSocialJira,
  IconSocialLinkedin,
  IconSocialLooker,
  IconSocialMonday,
  IconSocialSlack,
  IconSocialTwitter,
  IconSocialX,
  IconSocialYoutube,
  IconSortAscending,
  IconSortDescending,
  IconSparksFilled,
  IconSparks,
  IconSpeakerCross,
  IconSpeakerHigh,
  IconSpinner,
  IconSplitHorizontal,
  IconSplitVertical,
  IconSquareArrowIn,
  IconSquareBracketsAngleSlash,
  IconSquareCirclesTwo,
  IconSquareFrame2LinesCircle,
  IconSquareL,
  IconSquareLineSquareDashed,
  IconSquareM,
  IconSquarePencil,
  IconSquareRounded,
  IconSquareS,
  IconSquareStarScribble,
  IconSquareTriangleCirclePlus,
  IconSquare,
  IconSquaresColumn,
  IconSquaresFour,
  IconSquaresGroup,
  IconSquaresMerge,
  IconSquaresRowDownwards,
  IconSquaresRow,
  IconSquaresThree,
  IconSquaresTwoOverlap,
  IconSquaresUngroup,
  IconSquaresUnmerge,
  IconStack,
  IconStackedCircles,
  IconStarFilled,
  IconStarHalf,
  IconStar,
  IconStickyCorners,
  IconStickyEyeClosed,
  IconStickyEyeOpen,
  IconStickyNoteStack,
  IconStickyNoteWide,
  IconStickyNote,
  IconStickyNotesTwo,
  IconStopCircle,
  IconStoryPoints,
  IconStroke1,
  IconStroke2,
  IconStroke3,
  IconStroke4,
  IconStroke5,
  IconStroke6,
  IconSwapHorizontal,
  IconSwitch,
  IconTableFormat,
  IconTable,
  IconTablet,
  IconTag,
  IconTargetArrow,
  IconTasks,
  IconTennisBall,
  IconTextAColorSelection,
  IconTextAHorizontal,
  IconTextAUnderline,
  IconTextAVertical,
  IconTextAa,
  IconTextAlignCenter,
  IconTextAlignLeft,
  IconTextAlignRight,
  IconTextBBoldItalicUnderlined,
  IconTextBBold,
  IconTextCursorEyeOpen,
  IconTextHOne,
  IconTextHThree,
  IconTextHTwo,
  IconTextIItalic,
  IconTextIndent,
  IconTextLineHeight,
  IconTextLinesThree,
  IconTextPosition,
  IconTextSStrikethrough,
  IconTextStyles,
  IconTextT,
  IconTextUUnderlined,
  IconThumbsUp,
  IconTickCircle,
  IconTicket,
  IconTimelineFormat,
  IconTimelineLocation,
  IconTimer,
  IconToolbar,
  IconTooltip,
  IconTrackpad,
  IconTrapeze,
  IconTrashSimple,
  IconTrash,
  IconTrello,
  IconTriangleSquareCircle,
  IconTriangle,
  IconTrident,
  IconTrophy,
  IconTshirt,
  IconUserAdd,
  IconUserArrowRightUp,
  IconUserArrowRight,
  IconUserBackgroundBlur,
  IconUserCogPlus,
  IconUserCog,
  IconUserEyeOpen,
  IconUserFilter,
  IconUserLoad,
  IconUserMicSlash,
  IconUserMic,
  IconUserNumberThree,
  IconUserPenDashesBottom,
  IconUserPenLineBottom,
  IconUserSparkle,
  IconUserTickDown,
  IconUser,
  IconUsersThree,
  IconUsers,
  IconVerticalBlocks,
  IconVideoCameraDot,
  IconVideoCameraLinesDot,
  IconVideoCameraLines,
  IconVideoCameraSimpleError,
  IconVideoCameraSimpleSlash,
  IconVideoCameraSimple,
  IconVideoCamera,
  IconVideoPlayer,
  IconViewCenter,
  IconViewSideLeft,
  IconViewSideRight,
  IconWallet,
  IconWand,
  IconWarning,
  IconWidgetColumns,
  IconWifiExclamation,
  IconWifi,
  IconWordCloud
};
/*! Bundled license information:

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=chunk-RA2V6PFE.js.map
