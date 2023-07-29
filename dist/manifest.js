// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this,
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4fefZ":[function(require,module,exports) {
var Refresh = require('react-refresh/runtime');
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {
};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};

},{"react-refresh/runtime":"3ig9i"}],"3ig9i":[function(require,module,exports) {
'use strict';
module.exports = require('./cjs/react-refresh-runtime.development.js');

},{"./cjs/react-refresh-runtime.development.js":"ETk7a"}],"ETk7a":[function(require,module,exports) {
/** @license React v0.9.0
 * react-refresh-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
(function() {
    // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var REACT_ELEMENT_TYPE = 60103;
    var REACT_PORTAL_TYPE = 60106;
    var REACT_FRAGMENT_TYPE = 60107;
    var REACT_STRICT_MODE_TYPE = 60108;
    var REACT_PROFILER_TYPE = 60114;
    var REACT_PROVIDER_TYPE = 60109;
    var REACT_CONTEXT_TYPE = 60110;
    var REACT_FORWARD_REF_TYPE = 60112;
    var REACT_SUSPENSE_TYPE = 60113;
    var REACT_SUSPENSE_LIST_TYPE = 60120;
    var REACT_MEMO_TYPE = 60115;
    var REACT_LAZY_TYPE = 60116;
    var REACT_BLOCK_TYPE = 60121;
    var REACT_SERVER_BLOCK_TYPE = 60122;
    var REACT_FUNDAMENTAL_TYPE = 60117;
    var REACT_SCOPE_TYPE = 60119;
    var REACT_OPAQUE_ID_TYPE = 60128;
    var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
    var REACT_OFFSCREEN_TYPE = 60130;
    var REACT_LEGACY_HIDDEN_TYPE = 60131;
    if (typeof Symbol === 'function' && Symbol.for) {
        var symbolFor = Symbol.for;
        REACT_ELEMENT_TYPE = symbolFor('react.element');
        REACT_PORTAL_TYPE = symbolFor('react.portal');
        REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
        REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
        REACT_PROFILER_TYPE = symbolFor('react.profiler');
        REACT_PROVIDER_TYPE = symbolFor('react.provider');
        REACT_CONTEXT_TYPE = symbolFor('react.context');
        REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
        REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
        REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
        REACT_MEMO_TYPE = symbolFor('react.memo');
        REACT_LAZY_TYPE = symbolFor('react.lazy');
        REACT_BLOCK_TYPE = symbolFor('react.block');
        REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
        REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
        REACT_SCOPE_TYPE = symbolFor('react.scope');
        REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
        REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
        REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
        REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
    }
    var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map; // We never remove these associations.
    // It's OK to reference families, but use WeakMap/Set for types.
    var allFamiliesByID = new Map();
    var allFamiliesByType = new PossiblyWeakMap();
    var allSignaturesByType = new PossiblyWeakMap(); // This WeakMap is read by React, so we only put families
    // that have actually been edited here. This keeps checks fast.
    // $FlowIssue
    var updatedFamiliesByType = new PossiblyWeakMap(); // This is cleared on every performReactRefresh() call.
    // It is an array of [Family, NextType] tuples.
    var pendingUpdates = []; // This is injected by the renderer via DevTools global hook.
    var helpersByRendererID = new Map();
    var helpersByRoot = new Map(); // We keep track of mounted roots so we can schedule updates.
    var mountedRoots = new Set(); // If a root captures an error, we remember it so we can retry on edit.
    var failedRoots = new Set(); // In environments that support WeakMap, we also remember the last element for every root.
    // It needs to be weak because we do this even for roots that failed to mount.
    // If there is no WeakMap, we won't attempt to do retrying.
    // $FlowIssue
    var rootElements = typeof WeakMap === 'function' ? new WeakMap() : null;
    var isPerformingRefresh = false;
    function computeFullKey(signature) {
        if (signature.fullKey !== null) return signature.fullKey;
        var fullKey = signature.ownKey;
        var hooks;
        try {
            hooks = signature.getCustomHooks();
        } catch (err) {
            // This can happen in an edge case, e.g. if expression like Foo.useSomething
            // depends on Foo which is lazily initialized during rendering.
            // In that case just assume we'll have to remount.
            signature.forceReset = true;
            signature.fullKey = fullKey;
            return fullKey;
        }
        for(var i = 0; i < hooks.length; i++){
            var hook = hooks[i];
            if (typeof hook !== 'function') {
                // Something's wrong. Assume we need to remount.
                signature.forceReset = true;
                signature.fullKey = fullKey;
                return fullKey;
            }
            var nestedHookSignature = allSignaturesByType.get(hook);
            if (nestedHookSignature === undefined) continue;
            var nestedHookKey = computeFullKey(nestedHookSignature);
            if (nestedHookSignature.forceReset) signature.forceReset = true;
            fullKey += '\n---\n' + nestedHookKey;
        }
        signature.fullKey = fullKey;
        return fullKey;
    }
    function haveEqualSignatures(prevType, nextType) {
        var prevSignature = allSignaturesByType.get(prevType);
        var nextSignature = allSignaturesByType.get(nextType);
        if (prevSignature === undefined && nextSignature === undefined) return true;
        if (prevSignature === undefined || nextSignature === undefined) return false;
        if (computeFullKey(prevSignature) !== computeFullKey(nextSignature)) return false;
        if (nextSignature.forceReset) return false;
        return true;
    }
    function isReactClass(type) {
        return type.prototype && type.prototype.isReactComponent;
    }
    function canPreserveStateBetween(prevType, nextType) {
        if (isReactClass(prevType) || isReactClass(nextType)) return false;
        if (haveEqualSignatures(prevType, nextType)) return true;
        return false;
    }
    function resolveFamily(type) {
        // Only check updated types to keep lookups fast.
        return updatedFamiliesByType.get(type);
    } // If we didn't care about IE11, we could use new Map/Set(iterable).
    function cloneMap(map) {
        var clone = new Map();
        map.forEach(function(value, key) {
            clone.set(key, value);
        });
        return clone;
    }
    function cloneSet(set) {
        var clone = new Set();
        set.forEach(function(value) {
            clone.add(value);
        });
        return clone;
    }
    function performReactRefresh() {
        if (pendingUpdates.length === 0) return null;
        if (isPerformingRefresh) return null;
        isPerformingRefresh = true;
        try {
            var staleFamilies = new Set();
            var updatedFamilies = new Set();
            var updates = pendingUpdates;
            pendingUpdates = [];
            updates.forEach(function(_ref) {
                var family = _ref[0], nextType = _ref[1];
                // Now that we got a real edit, we can create associations
                // that will be read by the React reconciler.
                var prevType = family.current;
                updatedFamiliesByType.set(prevType, family);
                updatedFamiliesByType.set(nextType, family);
                family.current = nextType; // Determine whether this should be a re-render or a re-mount.
                if (canPreserveStateBetween(prevType, nextType)) updatedFamilies.add(family);
                else staleFamilies.add(family);
            }); // TODO: rename these fields to something more meaningful.
            var update = {
                updatedFamilies: updatedFamilies,
                // Families that will re-render preserving state
                staleFamilies: staleFamilies
            };
            helpersByRendererID.forEach(function(helpers) {
                // Even if there are no roots, set the handler on first update.
                // This ensures that if *new* roots are mounted, they'll use the resolve handler.
                helpers.setRefreshHandler(resolveFamily);
            });
            var didError = false;
            var firstError = null; // We snapshot maps and sets that are mutated during commits.
            // If we don't do this, there is a risk they will be mutated while
            // we iterate over them. For example, trying to recover a failed root
            // may cause another root to be added to the failed list -- an infinite loop.
            var failedRootsSnapshot = cloneSet(failedRoots);
            var mountedRootsSnapshot = cloneSet(mountedRoots);
            var helpersByRootSnapshot = cloneMap(helpersByRoot);
            failedRootsSnapshot.forEach(function(root) {
                var helpers = helpersByRootSnapshot.get(root);
                if (helpers === undefined) throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
                failedRoots.has(root);
                if (rootElements === null) return;
                if (!rootElements.has(root)) return;
                var element = rootElements.get(root);
                try {
                    helpers.scheduleRoot(root, element);
                } catch (err) {
                    if (!didError) {
                        didError = true;
                        firstError = err;
                    } // Keep trying other roots.
                }
            });
            mountedRootsSnapshot.forEach(function(root) {
                var helpers = helpersByRootSnapshot.get(root);
                if (helpers === undefined) throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
                mountedRoots.has(root);
                try {
                    helpers.scheduleRefresh(root, update);
                } catch (err) {
                    if (!didError) {
                        didError = true;
                        firstError = err;
                    } // Keep trying other roots.
                }
            });
            if (didError) throw firstError;
            return update;
        } finally{
            isPerformingRefresh = false;
        }
    }
    function register(type, id) {
        if (type === null) return;
        if (typeof type !== 'function' && typeof type !== 'object') return;
         // This can happen in an edge case, e.g. if we register
        // return value of a HOC but it returns a cached component.
        // Ignore anything but the first registration for each type.
        if (allFamiliesByType.has(type)) return;
         // Create family or remember to update it.
        // None of this bookkeeping affects reconciliation
        // until the first performReactRefresh() call above.
        var family = allFamiliesByID.get(id);
        if (family === undefined) {
            family = {
                current: type
            };
            allFamiliesByID.set(id, family);
        } else pendingUpdates.push([
            family,
            type
        ]);
        allFamiliesByType.set(type, family); // Visit inner types because we might not have registered them.
        if (typeof type === 'object' && type !== null) switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                register(type.render, id + '$render');
                break;
            case REACT_MEMO_TYPE:
                register(type.type, id + '$type');
                break;
        }
    }
    function setSignature(type, key) {
        var forceReset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var getCustomHooks = arguments.length > 3 ? arguments[3] : undefined;
        allSignaturesByType.set(type, {
            forceReset: forceReset,
            ownKey: key,
            fullKey: null,
            getCustomHooks: getCustomHooks || function() {
                return [];
            }
        });
    } // This is lazily called during first render for a type.
    // It captures Hook list at that time so inline requires don't break comparisons.
    function collectCustomHooksForSignature(type) {
        var signature = allSignaturesByType.get(type);
        if (signature !== undefined) computeFullKey(signature);
    }
    function getFamilyByID(id) {
        return allFamiliesByID.get(id);
    }
    function getFamilyByType(type) {
        return allFamiliesByType.get(type);
    }
    function findAffectedHostInstances(families) {
        var affectedInstances = new Set();
        mountedRoots.forEach(function(root) {
            var helpers = helpersByRoot.get(root);
            if (helpers === undefined) throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
            var instancesForRoot = helpers.findHostInstancesForRefresh(root, families);
            instancesForRoot.forEach(function(inst) {
                affectedInstances.add(inst);
            });
        });
        return affectedInstances;
    }
    function injectIntoGlobalHook(globalObject) {
        // For React Native, the global hook will be set up by require('react-devtools-core').
        // That code will run before us. So we need to monkeypatch functions on existing hook.
        // For React Web, the global hook will be set up by the extension.
        // This will also run before us.
        var hook = globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (hook === undefined) {
            // However, if there is no DevTools extension, we'll need to set up the global hook ourselves.
            // Note that in this case it's important that renderer code runs *after* this method call.
            // Otherwise, the renderer will think that there is no global hook, and won't do the injection.
            var nextID = 0;
            globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__ = hook = {
                renderers: new Map(),
                supportsFiber: true,
                inject: function(injected) {
                    return nextID++;
                },
                onScheduleFiberRoot: function(id, root, children) {
                },
                onCommitFiberRoot: function(id, root, maybePriorityLevel, didError) {
                },
                onCommitFiberUnmount: function() {
                }
            };
        } // Here, we just want to get a reference to scheduleRefresh.
        var oldInject = hook.inject;
        hook.inject = function(injected) {
            var id = oldInject.apply(this, arguments);
            if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') // This version supports React Refresh.
            helpersByRendererID.set(id, injected);
            return id;
        }; // Do the same for any already injected roots.
        // This is useful if ReactDOM has already been initialized.
        // https://github.com/facebook/react/issues/17626
        hook.renderers.forEach(function(injected, id) {
            if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') // This version supports React Refresh.
            helpersByRendererID.set(id, injected);
        }); // We also want to track currently mounted roots.
        var oldOnCommitFiberRoot = hook.onCommitFiberRoot;
        var oldOnScheduleFiberRoot = hook.onScheduleFiberRoot || function() {
        };
        hook.onScheduleFiberRoot = function(id, root, children) {
            if (!isPerformingRefresh) {
                // If it was intentionally scheduled, don't attempt to restore.
                // This includes intentionally scheduled unmounts.
                failedRoots.delete(root);
                if (rootElements !== null) rootElements.set(root, children);
            }
            return oldOnScheduleFiberRoot.apply(this, arguments);
        };
        hook.onCommitFiberRoot = function(id, root, maybePriorityLevel, didError) {
            var helpers = helpersByRendererID.get(id);
            if (helpers === undefined) return;
            helpersByRoot.set(root, helpers);
            var current = root.current;
            var alternate = current.alternate; // We need to determine whether this root has just (un)mounted.
            // This logic is copy-pasted from similar logic in the DevTools backend.
            // If this breaks with some refactoring, you'll want to update DevTools too.
            if (alternate !== null) {
                var wasMounted = alternate.memoizedState != null && alternate.memoizedState.element != null;
                var isMounted = current.memoizedState != null && current.memoizedState.element != null;
                if (!wasMounted && isMounted) {
                    // Mount a new root.
                    mountedRoots.add(root);
                    failedRoots.delete(root);
                } else if (wasMounted && isMounted) ;
                else if (wasMounted && !isMounted) {
                    // Unmount an existing root.
                    mountedRoots.delete(root);
                    if (didError) // We'll remount it on future edits.
                    failedRoots.add(root);
                    else helpersByRoot.delete(root);
                } else if (!wasMounted && !isMounted) {
                    if (didError) // We'll remount it on future edits.
                    failedRoots.add(root);
                }
            } else // Mount a new root.
            mountedRoots.add(root);
            return oldOnCommitFiberRoot.apply(this, arguments);
        };
    }
    function hasUnrecoverableErrors() {
        // TODO: delete this after removing dependency in RN.
        return false;
    } // Exposed for testing.
    function _getMountedRootCount() {
        return mountedRoots.size;
    } // This is a wrapper over more primitive functions for setting signature.
    // Signatures let us decide whether the Hook order has changed on refresh.
    //
    // This function is intended to be used as a transform target, e.g.:
    // var _s = createSignatureFunctionForTransform()
    //
    // function Hello() {
    //   const [foo, setFoo] = useState(0);
    //   const value = useCustomHook();
    //   _s(); /* Second call triggers collecting the custom Hook list.
    //          * This doesn't happen during the module evaluation because we
    //          * don't want to change the module order with inline requires.
    //          * Next calls are noops. */
    //   return <h1>Hi</h1>;
    // }
    //
    // /* First call specifies the signature: */
    // _s(
    //   Hello,
    //   'useState{[foo, setFoo]}(0)',
    //   () => [useCustomHook], /* Lazy to avoid triggering inline requires */
    // );
    function createSignatureFunctionForTransform() {
        // We'll fill in the signature in two steps.
        // First, we'll know the signature itself. This happens outside the component.
        // Then, we'll know the references to custom Hooks. This happens inside the component.
        // After that, the returned function will be a fast path no-op.
        var status = 'needsSignature';
        var savedType;
        var hasCustomHooks;
        return function(type, key, forceReset, getCustomHooks) {
            switch(status){
                case 'needsSignature':
                    if (type !== undefined) {
                        // If we received an argument, this is the initial registration call.
                        savedType = type;
                        hasCustomHooks = typeof getCustomHooks === 'function';
                        setSignature(type, key, forceReset, getCustomHooks); // The next call we expect is from inside a function, to fill in the custom Hooks.
                        status = 'needsCustomHooks';
                    }
                    break;
                case 'needsCustomHooks':
                    if (hasCustomHooks) collectCustomHooksForSignature(savedType);
                    status = 'resolved';
                    break;
            }
            return type;
        };
    }
    function isLikelyComponentType(type) {
        switch(typeof type){
            case 'function':
                // First, deal with classes.
                if (type.prototype != null) {
                    if (type.prototype.isReactComponent) // React class.
                    return true;
                    var ownNames = Object.getOwnPropertyNames(type.prototype);
                    if (ownNames.length > 1 || ownNames[0] !== 'constructor') // This looks like a class.
                    return false;
                     // eslint-disable-next-line no-proto
                    if (type.prototype.__proto__ !== Object.prototype) // It has a superclass.
                    return false;
                     // Pass through.
                // This looks like a regular function with empty prototype.
                } // For plain functions and arrows, use name as a heuristic.
                var name = type.name || type.displayName;
                return typeof name === 'string' && /^[A-Z]/.test(name);
            case 'object':
                if (type != null) switch(type.$$typeof){
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_MEMO_TYPE:
                        // Definitely React components.
                        return true;
                    default:
                        return false;
                }
                return false;
            default:
                return false;
        }
    }
    exports._getMountedRootCount = _getMountedRootCount;
    exports.collectCustomHooksForSignature = collectCustomHooksForSignature;
    exports.createSignatureFunctionForTransform = createSignatureFunctionForTransform;
    exports.findAffectedHostInstances = findAffectedHostInstances;
    exports.getFamilyByID = getFamilyByID;
    exports.getFamilyByType = getFamilyByType;
    exports.hasUnrecoverableErrors = hasUnrecoverableErrors;
    exports.injectIntoGlobalHook = injectIntoGlobalHook;
    exports.isLikelyComponentType = isLikelyComponentType;
    exports.performReactRefresh = performReactRefresh;
    exports.register = register;
    exports.setSignature = setSignature;
})();

},{}],"20wME":[function(require,module,exports) {
var HMR_HOST = "localhost";
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "07d5a8db6cebf66ea354e823f007455f"; // @flow
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets/*: {|[string]: boolean|} */ , acceptedAssets/*: {|[string]: boolean|} */ , assetsToAccept/*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    // $FlowFixMe
    ws.onmessage = function(event/*: {data: string, ...} */ ) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH
            );
            // Handle HMR Update
            var handled = false;
            assets.forEach((asset)=>{
                var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
                if (didAccept) handled = true;
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function(e) {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
        errorHTML += `\n      <div>\n        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">\n          🚨 ${diagnostic.message}\n        </div>\n        <pre>\n          ${stack}\n        </pre>\n        <div>\n          ${diagnostic.hints.map((hint)=>'<div>' + hint + '</div>'
        ).join('')}\n        </div>\n      </div>\n    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    link.getAttribute('href').split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle/*: ParcelRequire */ , asset/*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle/*: ParcelRequire */ , id/*: string */ , depsByBundle/*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle/*: ParcelRequire */ , id/*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"3i8EU":[function(require,module,exports) {
module.exports = JSON.parse("{\"manifest_version\":2,\"name\":\"Web Extension\",\"description\":\"Web extension which can be shipped to multiple browsers.\",\"version\":\"0.0.1\",\"icons\":{\"16\":\"assets/icon16.png\",\"32\":\"assets/icon32.png\",\"48\":\"assets/icon48.png\",\"128\":\"assets/icon128.png\"},\"browser_action\":{\"default_icon\":\"assets/icon128.png\",\"default_popup\":\"src/static/popup.html\"},\"content_scripts\":[{\"matches\":[\"https://*/*\"],\"js\":[\"src/scripts/content.tsx\"]}],\"background\":{\"scripts\":[\"src/scripts/background.ts\"],\"persistent\":false},\"options_ui\":{\"page\":\"src/static/options.html\",\"open_in_tab\":true}}");

},{}]},["4fefZ","20wME","3i8EU"], "3i8EU", "parcelRequired178")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLENBQUMsTUFBTyxFQUFBLGdCQUFBLEVBQW9CLEdBQUUsRUFBRyxFQUFBLFNBQUEsRUFBYTtRQUM3RCxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO0lBQzVCLE1BQU0sQ0FBQyxPQUFPOztRQUNWLE1BQU0sSUFBSSxNQUFNLENBQUMsR0FBRyxFQUN0QixNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTztRQUc5QixNQUFNLElBQUksTUFBTSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFDN0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLFVBQVUsRUFBRTtRQUM5QyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU87O1dBSWQsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO0lBQ3RCLE1BQU0sQ0FBQyxFQUFFO0lBRVQsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNwQixNQUFNLElBQUksTUFBTSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFDNUQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLFVBQVUsRUFBRTtZQUN6QyxrQkFBa0IsR0FBRyxFQUFFO21CQUNsQixVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRTs7WUFFdEMsa0JBQWtCLElBQUksY0FBYyxDQUFDLE1BQU0sRUFDN0MsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLGtCQUFrQjs7SUFJbEUsY0FBYyxDQUFDLEVBQUUsSUFBSSxJQUFJOzs7O0FDN1czQixNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUMseW5CQUEybkIiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGFyY2VsL3J1bnRpbWUtcmVhY3QtcmVmcmVzaC9saWIvcnVudGltZS1iYzM4OTE4NzNmMDY0ZjNkYTQ5NGNmNGVlYjExMjVjOS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1yZWZyZXNoL3J1bnRpbWUuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtcmVmcmVzaC9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzIiwibm9kZV9tb2R1bGVzL0BwYXJjZWwvcnVudGltZS1icm93c2VyLWhtci9saWIvcnVudGltZS1jYWMzMmJkZDQ4MTI4ZjQ5NjMzOTc5MmEwMjk4YTQyOS5qcyIsIm1hbmlmZXN0Lmpzb24iXSwic291cmNlc0NvbnRlbnQiOlsiXG52YXIgUmVmcmVzaCA9IHJlcXVpcmUoJ3JlYWN0LXJlZnJlc2gvcnVudGltZScpO1xuXG5SZWZyZXNoLmluamVjdEludG9HbG9iYWxIb29rKHdpbmRvdyk7XG53aW5kb3cuJFJlZnJlc2hSZWckID0gZnVuY3Rpb24oKSB7fTtcbndpbmRvdy4kUmVmcmVzaFNpZyQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHR5cGUpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MC45LjBcbiAqIHJlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSAweGVhY2U7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSAweGVhZDk7XG52YXIgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSAweGVhZGE7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IDB4ZWFkNTtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gMHhlYWQ3O1xudmFyIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gMHhlYWUwO1xudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gMHhlYWUyO1xudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcikge1xuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5lbGVtZW50Jyk7XG4gIFJFQUNUX1BPUlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wb3J0YWwnKTtcbiAgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcbiAgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbiAgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvZmlsZXInKTtcbiAgUkVBQ1RfUFJPVklERVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvdmlkZXInKTtcbiAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5jb250ZXh0Jyk7XG4gIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG4gIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG4gIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xuICBSRUFDVF9NRU1PX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm1lbW8nKTtcbiAgUkVBQ1RfTEFaWV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sYXp5Jyk7XG4gIFJFQUNUX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmJsb2NrJyk7XG4gIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zZXJ2ZXIuYmxvY2snKTtcbiAgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnVuZGFtZW50YWwnKTtcbiAgUkVBQ1RfU0NPUEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2NvcGUnKTtcbiAgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9wYXF1ZS5pZCcpO1xuICBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZGVidWdfdHJhY2VfbW9kZScpO1xuICBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG4gIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGVnYWN5X2hpZGRlbicpO1xufVxuXG52YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwOyAvLyBXZSBuZXZlciByZW1vdmUgdGhlc2UgYXNzb2NpYXRpb25zLlxuLy8gSXQncyBPSyB0byByZWZlcmVuY2UgZmFtaWxpZXMsIGJ1dCB1c2UgV2Vha01hcC9TZXQgZm9yIHR5cGVzLlxuXG52YXIgYWxsRmFtaWxpZXNCeUlEID0gbmV3IE1hcCgpO1xudmFyIGFsbEZhbWlsaWVzQnlUeXBlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xudmFyIGFsbFNpZ25hdHVyZXNCeVR5cGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7IC8vIFRoaXMgV2Vha01hcCBpcyByZWFkIGJ5IFJlYWN0LCBzbyB3ZSBvbmx5IHB1dCBmYW1pbGllc1xuLy8gdGhhdCBoYXZlIGFjdHVhbGx5IGJlZW4gZWRpdGVkIGhlcmUuIFRoaXMga2VlcHMgY2hlY2tzIGZhc3QuXG4vLyAkRmxvd0lzc3VlXG5cbnZhciB1cGRhdGVkRmFtaWxpZXNCeVR5cGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7IC8vIFRoaXMgaXMgY2xlYXJlZCBvbiBldmVyeSBwZXJmb3JtUmVhY3RSZWZyZXNoKCkgY2FsbC5cbi8vIEl0IGlzIGFuIGFycmF5IG9mIFtGYW1pbHksIE5leHRUeXBlXSB0dXBsZXMuXG5cbnZhciBwZW5kaW5nVXBkYXRlcyA9IFtdOyAvLyBUaGlzIGlzIGluamVjdGVkIGJ5IHRoZSByZW5kZXJlciB2aWEgRGV2VG9vbHMgZ2xvYmFsIGhvb2suXG5cbnZhciBoZWxwZXJzQnlSZW5kZXJlcklEID0gbmV3IE1hcCgpO1xudmFyIGhlbHBlcnNCeVJvb3QgPSBuZXcgTWFwKCk7IC8vIFdlIGtlZXAgdHJhY2sgb2YgbW91bnRlZCByb290cyBzbyB3ZSBjYW4gc2NoZWR1bGUgdXBkYXRlcy5cblxudmFyIG1vdW50ZWRSb290cyA9IG5ldyBTZXQoKTsgLy8gSWYgYSByb290IGNhcHR1cmVzIGFuIGVycm9yLCB3ZSByZW1lbWJlciBpdCBzbyB3ZSBjYW4gcmV0cnkgb24gZWRpdC5cblxudmFyIGZhaWxlZFJvb3RzID0gbmV3IFNldCgpOyAvLyBJbiBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IFdlYWtNYXAsIHdlIGFsc28gcmVtZW1iZXIgdGhlIGxhc3QgZWxlbWVudCBmb3IgZXZlcnkgcm9vdC5cbi8vIEl0IG5lZWRzIHRvIGJlIHdlYWsgYmVjYXVzZSB3ZSBkbyB0aGlzIGV2ZW4gZm9yIHJvb3RzIHRoYXQgZmFpbGVkIHRvIG1vdW50LlxuLy8gSWYgdGhlcmUgaXMgbm8gV2Vha01hcCwgd2Ugd29uJ3QgYXR0ZW1wdCB0byBkbyByZXRyeWluZy5cbi8vICRGbG93SXNzdWVcblxudmFyIHJvb3RFbGVtZW50cyA9IC8vICRGbG93SXNzdWVcbnR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gbmV3IFdlYWtNYXAoKSA6IG51bGw7XG52YXIgaXNQZXJmb3JtaW5nUmVmcmVzaCA9IGZhbHNlO1xuXG5mdW5jdGlvbiBjb21wdXRlRnVsbEtleShzaWduYXR1cmUpIHtcbiAgaWYgKHNpZ25hdHVyZS5mdWxsS2V5ICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIHNpZ25hdHVyZS5mdWxsS2V5O1xuICB9XG5cbiAgdmFyIGZ1bGxLZXkgPSBzaWduYXR1cmUub3duS2V5O1xuICB2YXIgaG9va3M7XG5cbiAgdHJ5IHtcbiAgICBob29rcyA9IHNpZ25hdHVyZS5nZXRDdXN0b21Ib29rcygpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaW4gYW4gZWRnZSBjYXNlLCBlLmcuIGlmIGV4cHJlc3Npb24gbGlrZSBGb28udXNlU29tZXRoaW5nXG4gICAgLy8gZGVwZW5kcyBvbiBGb28gd2hpY2ggaXMgbGF6aWx5IGluaXRpYWxpemVkIGR1cmluZyByZW5kZXJpbmcuXG4gICAgLy8gSW4gdGhhdCBjYXNlIGp1c3QgYXNzdW1lIHdlJ2xsIGhhdmUgdG8gcmVtb3VudC5cbiAgICBzaWduYXR1cmUuZm9yY2VSZXNldCA9IHRydWU7XG4gICAgc2lnbmF0dXJlLmZ1bGxLZXkgPSBmdWxsS2V5O1xuICAgIHJldHVybiBmdWxsS2V5O1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBob29rcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBob29rID0gaG9va3NbaV07XG5cbiAgICBpZiAodHlwZW9mIGhvb2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIFNvbWV0aGluZydzIHdyb25nLiBBc3N1bWUgd2UgbmVlZCB0byByZW1vdW50LlxuICAgICAgc2lnbmF0dXJlLmZvcmNlUmVzZXQgPSB0cnVlO1xuICAgICAgc2lnbmF0dXJlLmZ1bGxLZXkgPSBmdWxsS2V5O1xuICAgICAgcmV0dXJuIGZ1bGxLZXk7XG4gICAgfVxuXG4gICAgdmFyIG5lc3RlZEhvb2tTaWduYXR1cmUgPSBhbGxTaWduYXR1cmVzQnlUeXBlLmdldChob29rKTtcblxuICAgIGlmIChuZXN0ZWRIb29rU2lnbmF0dXJlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIE5vIHNpZ25hdHVyZSBtZWFucyBIb29rIHdhc24ndCBpbiB0aGUgc291cmNlIGNvZGUsIGUuZy4gaW4gYSBsaWJyYXJ5LlxuICAgICAgLy8gV2UnbGwgc2tpcCBpdCBiZWNhdXNlIHdlIGNhbiBhc3N1bWUgaXQgd29uJ3QgY2hhbmdlIGR1cmluZyB0aGlzIHNlc3Npb24uXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YXIgbmVzdGVkSG9va0tleSA9IGNvbXB1dGVGdWxsS2V5KG5lc3RlZEhvb2tTaWduYXR1cmUpO1xuXG4gICAgaWYgKG5lc3RlZEhvb2tTaWduYXR1cmUuZm9yY2VSZXNldCkge1xuICAgICAgc2lnbmF0dXJlLmZvcmNlUmVzZXQgPSB0cnVlO1xuICAgIH1cblxuICAgIGZ1bGxLZXkgKz0gJ1xcbi0tLVxcbicgKyBuZXN0ZWRIb29rS2V5O1xuICB9XG5cbiAgc2lnbmF0dXJlLmZ1bGxLZXkgPSBmdWxsS2V5O1xuICByZXR1cm4gZnVsbEtleTtcbn1cblxuZnVuY3Rpb24gaGF2ZUVxdWFsU2lnbmF0dXJlcyhwcmV2VHlwZSwgbmV4dFR5cGUpIHtcbiAgdmFyIHByZXZTaWduYXR1cmUgPSBhbGxTaWduYXR1cmVzQnlUeXBlLmdldChwcmV2VHlwZSk7XG4gIHZhciBuZXh0U2lnbmF0dXJlID0gYWxsU2lnbmF0dXJlc0J5VHlwZS5nZXQobmV4dFR5cGUpO1xuXG4gIGlmIChwcmV2U2lnbmF0dXJlID09PSB1bmRlZmluZWQgJiYgbmV4dFNpZ25hdHVyZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAocHJldlNpZ25hdHVyZSA9PT0gdW5kZWZpbmVkIHx8IG5leHRTaWduYXR1cmUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChjb21wdXRlRnVsbEtleShwcmV2U2lnbmF0dXJlKSAhPT0gY29tcHV0ZUZ1bGxLZXkobmV4dFNpZ25hdHVyZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAobmV4dFNpZ25hdHVyZS5mb3JjZVJlc2V0KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGlzUmVhY3RDbGFzcyh0eXBlKSB7XG4gIHJldHVybiB0eXBlLnByb3RvdHlwZSAmJiB0eXBlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50O1xufVxuXG5mdW5jdGlvbiBjYW5QcmVzZXJ2ZVN0YXRlQmV0d2VlbihwcmV2VHlwZSwgbmV4dFR5cGUpIHtcbiAgaWYgKGlzUmVhY3RDbGFzcyhwcmV2VHlwZSkgfHwgaXNSZWFjdENsYXNzKG5leHRUeXBlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChoYXZlRXF1YWxTaWduYXR1cmVzKHByZXZUeXBlLCBuZXh0VHlwZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUZhbWlseSh0eXBlKSB7XG4gIC8vIE9ubHkgY2hlY2sgdXBkYXRlZCB0eXBlcyB0byBrZWVwIGxvb2t1cHMgZmFzdC5cbiAgcmV0dXJuIHVwZGF0ZWRGYW1pbGllc0J5VHlwZS5nZXQodHlwZSk7XG59IC8vIElmIHdlIGRpZG4ndCBjYXJlIGFib3V0IElFMTEsIHdlIGNvdWxkIHVzZSBuZXcgTWFwL1NldChpdGVyYWJsZSkuXG5cblxuZnVuY3Rpb24gY2xvbmVNYXAobWFwKSB7XG4gIHZhciBjbG9uZSA9IG5ldyBNYXAoKTtcbiAgbWFwLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICBjbG9uZS5zZXQoa2V5LCB2YWx1ZSk7XG4gIH0pO1xuICByZXR1cm4gY2xvbmU7XG59XG5cbmZ1bmN0aW9uIGNsb25lU2V0KHNldCkge1xuICB2YXIgY2xvbmUgPSBuZXcgU2V0KCk7XG4gIHNldC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGNsb25lLmFkZCh2YWx1ZSk7XG4gIH0pO1xuICByZXR1cm4gY2xvbmU7XG59XG5cbmZ1bmN0aW9uIHBlcmZvcm1SZWFjdFJlZnJlc2goKSB7XG5cbiAgaWYgKHBlbmRpbmdVcGRhdGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKGlzUGVyZm9ybWluZ1JlZnJlc2gpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlzUGVyZm9ybWluZ1JlZnJlc2ggPSB0cnVlO1xuXG4gIHRyeSB7XG4gICAgdmFyIHN0YWxlRmFtaWxpZXMgPSBuZXcgU2V0KCk7XG4gICAgdmFyIHVwZGF0ZWRGYW1pbGllcyA9IG5ldyBTZXQoKTtcbiAgICB2YXIgdXBkYXRlcyA9IHBlbmRpbmdVcGRhdGVzO1xuICAgIHBlbmRpbmdVcGRhdGVzID0gW107XG4gICAgdXBkYXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgZmFtaWx5ID0gX3JlZlswXSxcbiAgICAgICAgICBuZXh0VHlwZSA9IF9yZWZbMV07XG4gICAgICAvLyBOb3cgdGhhdCB3ZSBnb3QgYSByZWFsIGVkaXQsIHdlIGNhbiBjcmVhdGUgYXNzb2NpYXRpb25zXG4gICAgICAvLyB0aGF0IHdpbGwgYmUgcmVhZCBieSB0aGUgUmVhY3QgcmVjb25jaWxlci5cbiAgICAgIHZhciBwcmV2VHlwZSA9IGZhbWlseS5jdXJyZW50O1xuICAgICAgdXBkYXRlZEZhbWlsaWVzQnlUeXBlLnNldChwcmV2VHlwZSwgZmFtaWx5KTtcbiAgICAgIHVwZGF0ZWRGYW1pbGllc0J5VHlwZS5zZXQobmV4dFR5cGUsIGZhbWlseSk7XG4gICAgICBmYW1pbHkuY3VycmVudCA9IG5leHRUeXBlOyAvLyBEZXRlcm1pbmUgd2hldGhlciB0aGlzIHNob3VsZCBiZSBhIHJlLXJlbmRlciBvciBhIHJlLW1vdW50LlxuXG4gICAgICBpZiAoY2FuUHJlc2VydmVTdGF0ZUJldHdlZW4ocHJldlR5cGUsIG5leHRUeXBlKSkge1xuICAgICAgICB1cGRhdGVkRmFtaWxpZXMuYWRkKGZhbWlseSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGFsZUZhbWlsaWVzLmFkZChmYW1pbHkpO1xuICAgICAgfVxuICAgIH0pOyAvLyBUT0RPOiByZW5hbWUgdGhlc2UgZmllbGRzIHRvIHNvbWV0aGluZyBtb3JlIG1lYW5pbmdmdWwuXG5cbiAgICB2YXIgdXBkYXRlID0ge1xuICAgICAgdXBkYXRlZEZhbWlsaWVzOiB1cGRhdGVkRmFtaWxpZXMsXG4gICAgICAvLyBGYW1pbGllcyB0aGF0IHdpbGwgcmUtcmVuZGVyIHByZXNlcnZpbmcgc3RhdGVcbiAgICAgIHN0YWxlRmFtaWxpZXM6IHN0YWxlRmFtaWxpZXMgLy8gRmFtaWxpZXMgdGhhdCB3aWxsIGJlIHJlbW91bnRlZFxuXG4gICAgfTtcbiAgICBoZWxwZXJzQnlSZW5kZXJlcklELmZvckVhY2goZnVuY3Rpb24gKGhlbHBlcnMpIHtcbiAgICAgIC8vIEV2ZW4gaWYgdGhlcmUgYXJlIG5vIHJvb3RzLCBzZXQgdGhlIGhhbmRsZXIgb24gZmlyc3QgdXBkYXRlLlxuICAgICAgLy8gVGhpcyBlbnN1cmVzIHRoYXQgaWYgKm5ldyogcm9vdHMgYXJlIG1vdW50ZWQsIHRoZXknbGwgdXNlIHRoZSByZXNvbHZlIGhhbmRsZXIuXG4gICAgICBoZWxwZXJzLnNldFJlZnJlc2hIYW5kbGVyKHJlc29sdmVGYW1pbHkpO1xuICAgIH0pO1xuICAgIHZhciBkaWRFcnJvciA9IGZhbHNlO1xuICAgIHZhciBmaXJzdEVycm9yID0gbnVsbDsgLy8gV2Ugc25hcHNob3QgbWFwcyBhbmQgc2V0cyB0aGF0IGFyZSBtdXRhdGVkIGR1cmluZyBjb21taXRzLlxuICAgIC8vIElmIHdlIGRvbid0IGRvIHRoaXMsIHRoZXJlIGlzIGEgcmlzayB0aGV5IHdpbGwgYmUgbXV0YXRlZCB3aGlsZVxuICAgIC8vIHdlIGl0ZXJhdGUgb3ZlciB0aGVtLiBGb3IgZXhhbXBsZSwgdHJ5aW5nIHRvIHJlY292ZXIgYSBmYWlsZWQgcm9vdFxuICAgIC8vIG1heSBjYXVzZSBhbm90aGVyIHJvb3QgdG8gYmUgYWRkZWQgdG8gdGhlIGZhaWxlZCBsaXN0IC0tIGFuIGluZmluaXRlIGxvb3AuXG5cbiAgICB2YXIgZmFpbGVkUm9vdHNTbmFwc2hvdCA9IGNsb25lU2V0KGZhaWxlZFJvb3RzKTtcbiAgICB2YXIgbW91bnRlZFJvb3RzU25hcHNob3QgPSBjbG9uZVNldChtb3VudGVkUm9vdHMpO1xuICAgIHZhciBoZWxwZXJzQnlSb290U25hcHNob3QgPSBjbG9uZU1hcChoZWxwZXJzQnlSb290KTtcbiAgICBmYWlsZWRSb290c1NuYXBzaG90LmZvckVhY2goZnVuY3Rpb24gKHJvb3QpIHtcbiAgICAgIHZhciBoZWxwZXJzID0gaGVscGVyc0J5Um9vdFNuYXBzaG90LmdldChyb290KTtcblxuICAgICAgaWYgKGhlbHBlcnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWZhaWxlZFJvb3RzLmhhcyhyb290KSkgey8vIE5vIGxvbmdlciBmYWlsZWQuXG4gICAgICB9XG5cbiAgICAgIGlmIChyb290RWxlbWVudHMgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXJvb3RFbGVtZW50cy5oYXMocm9vdCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgZWxlbWVudCA9IHJvb3RFbGVtZW50cy5nZXQocm9vdCk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGhlbHBlcnMuc2NoZWR1bGVSb290KHJvb3QsIGVsZW1lbnQpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGlmICghZGlkRXJyb3IpIHtcbiAgICAgICAgICBkaWRFcnJvciA9IHRydWU7XG4gICAgICAgICAgZmlyc3RFcnJvciA9IGVycjtcbiAgICAgICAgfSAvLyBLZWVwIHRyeWluZyBvdGhlciByb290cy5cblxuICAgICAgfVxuICAgIH0pO1xuICAgIG1vdW50ZWRSb290c1NuYXBzaG90LmZvckVhY2goZnVuY3Rpb24gKHJvb3QpIHtcbiAgICAgIHZhciBoZWxwZXJzID0gaGVscGVyc0J5Um9vdFNuYXBzaG90LmdldChyb290KTtcblxuICAgICAgaWYgKGhlbHBlcnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW1vdW50ZWRSb290cy5oYXMocm9vdCkpIHsvLyBObyBsb25nZXIgbW91bnRlZC5cbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgaGVscGVycy5zY2hlZHVsZVJlZnJlc2gocm9vdCwgdXBkYXRlKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAoIWRpZEVycm9yKSB7XG4gICAgICAgICAgZGlkRXJyb3IgPSB0cnVlO1xuICAgICAgICAgIGZpcnN0RXJyb3IgPSBlcnI7XG4gICAgICAgIH0gLy8gS2VlcCB0cnlpbmcgb3RoZXIgcm9vdHMuXG5cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChkaWRFcnJvcikge1xuICAgICAgdGhyb3cgZmlyc3RFcnJvcjtcbiAgICB9XG5cbiAgICByZXR1cm4gdXBkYXRlO1xuICB9IGZpbmFsbHkge1xuICAgIGlzUGVyZm9ybWluZ1JlZnJlc2ggPSBmYWxzZTtcbiAgfVxufVxuZnVuY3Rpb24gcmVnaXN0ZXIodHlwZSwgaWQpIHtcbiAge1xuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlICE9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB0eXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gVGhpcyBjYW4gaGFwcGVuIGluIGFuIGVkZ2UgY2FzZSwgZS5nLiBpZiB3ZSByZWdpc3RlclxuICAgIC8vIHJldHVybiB2YWx1ZSBvZiBhIEhPQyBidXQgaXQgcmV0dXJucyBhIGNhY2hlZCBjb21wb25lbnQuXG4gICAgLy8gSWdub3JlIGFueXRoaW5nIGJ1dCB0aGUgZmlyc3QgcmVnaXN0cmF0aW9uIGZvciBlYWNoIHR5cGUuXG5cblxuICAgIGlmIChhbGxGYW1pbGllc0J5VHlwZS5oYXModHlwZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIENyZWF0ZSBmYW1pbHkgb3IgcmVtZW1iZXIgdG8gdXBkYXRlIGl0LlxuICAgIC8vIE5vbmUgb2YgdGhpcyBib29ra2VlcGluZyBhZmZlY3RzIHJlY29uY2lsaWF0aW9uXG4gICAgLy8gdW50aWwgdGhlIGZpcnN0IHBlcmZvcm1SZWFjdFJlZnJlc2goKSBjYWxsIGFib3ZlLlxuXG5cbiAgICB2YXIgZmFtaWx5ID0gYWxsRmFtaWxpZXNCeUlELmdldChpZCk7XG5cbiAgICBpZiAoZmFtaWx5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGZhbWlseSA9IHtcbiAgICAgICAgY3VycmVudDogdHlwZVxuICAgICAgfTtcbiAgICAgIGFsbEZhbWlsaWVzQnlJRC5zZXQoaWQsIGZhbWlseSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBlbmRpbmdVcGRhdGVzLnB1c2goW2ZhbWlseSwgdHlwZV0pO1xuICAgIH1cblxuICAgIGFsbEZhbWlsaWVzQnlUeXBlLnNldCh0eXBlLCBmYW1pbHkpOyAvLyBWaXNpdCBpbm5lciB0eXBlcyBiZWNhdXNlIHdlIG1pZ2h0IG5vdCBoYXZlIHJlZ2lzdGVyZWQgdGhlbS5cblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICByZWdpc3Rlcih0eXBlLnJlbmRlciwgaWQgKyAnJHJlbmRlcicpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgIHJlZ2lzdGVyKHR5cGUudHlwZSwgaWQgKyAnJHR5cGUnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIHNldFNpZ25hdHVyZSh0eXBlLCBrZXkpIHtcbiAgdmFyIGZvcmNlUmVzZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZhbHNlO1xuICB2YXIgZ2V0Q3VzdG9tSG9va3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMyA/IGFyZ3VtZW50c1szXSA6IHVuZGVmaW5lZDtcblxuICB7XG4gICAgYWxsU2lnbmF0dXJlc0J5VHlwZS5zZXQodHlwZSwge1xuICAgICAgZm9yY2VSZXNldDogZm9yY2VSZXNldCxcbiAgICAgIG93bktleToga2V5LFxuICAgICAgZnVsbEtleTogbnVsbCxcbiAgICAgIGdldEN1c3RvbUhvb2tzOiBnZXRDdXN0b21Ib29rcyB8fCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSAvLyBUaGlzIGlzIGxhemlseSBjYWxsZWQgZHVyaW5nIGZpcnN0IHJlbmRlciBmb3IgYSB0eXBlLlxuLy8gSXQgY2FwdHVyZXMgSG9vayBsaXN0IGF0IHRoYXQgdGltZSBzbyBpbmxpbmUgcmVxdWlyZXMgZG9uJ3QgYnJlYWsgY29tcGFyaXNvbnMuXG5cbmZ1bmN0aW9uIGNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZSh0eXBlKSB7XG4gIHtcbiAgICB2YXIgc2lnbmF0dXJlID0gYWxsU2lnbmF0dXJlc0J5VHlwZS5nZXQodHlwZSk7XG5cbiAgICBpZiAoc2lnbmF0dXJlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbXB1dGVGdWxsS2V5KHNpZ25hdHVyZSk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBnZXRGYW1pbHlCeUlEKGlkKSB7XG4gIHtcbiAgICByZXR1cm4gYWxsRmFtaWxpZXNCeUlELmdldChpZCk7XG4gIH1cbn1cbmZ1bmN0aW9uIGdldEZhbWlseUJ5VHlwZSh0eXBlKSB7XG4gIHtcbiAgICByZXR1cm4gYWxsRmFtaWxpZXNCeVR5cGUuZ2V0KHR5cGUpO1xuICB9XG59XG5mdW5jdGlvbiBmaW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzKGZhbWlsaWVzKSB7XG4gIHtcbiAgICB2YXIgYWZmZWN0ZWRJbnN0YW5jZXMgPSBuZXcgU2V0KCk7XG4gICAgbW91bnRlZFJvb3RzLmZvckVhY2goZnVuY3Rpb24gKHJvb3QpIHtcbiAgICAgIHZhciBoZWxwZXJzID0gaGVscGVyc0J5Um9vdC5nZXQocm9vdCk7XG5cbiAgICAgIGlmIChoZWxwZXJzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC4nKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGluc3RhbmNlc0ZvclJvb3QgPSBoZWxwZXJzLmZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaChyb290LCBmYW1pbGllcyk7XG4gICAgICBpbnN0YW5jZXNGb3JSb290LmZvckVhY2goZnVuY3Rpb24gKGluc3QpIHtcbiAgICAgICAgYWZmZWN0ZWRJbnN0YW5jZXMuYWRkKGluc3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFmZmVjdGVkSW5zdGFuY2VzO1xuICB9XG59XG5mdW5jdGlvbiBpbmplY3RJbnRvR2xvYmFsSG9vayhnbG9iYWxPYmplY3QpIHtcbiAge1xuICAgIC8vIEZvciBSZWFjdCBOYXRpdmUsIHRoZSBnbG9iYWwgaG9vayB3aWxsIGJlIHNldCB1cCBieSByZXF1aXJlKCdyZWFjdC1kZXZ0b29scy1jb3JlJykuXG4gICAgLy8gVGhhdCBjb2RlIHdpbGwgcnVuIGJlZm9yZSB1cy4gU28gd2UgbmVlZCB0byBtb25rZXlwYXRjaCBmdW5jdGlvbnMgb24gZXhpc3RpbmcgaG9vay5cbiAgICAvLyBGb3IgUmVhY3QgV2ViLCB0aGUgZ2xvYmFsIGhvb2sgd2lsbCBiZSBzZXQgdXAgYnkgdGhlIGV4dGVuc2lvbi5cbiAgICAvLyBUaGlzIHdpbGwgYWxzbyBydW4gYmVmb3JlIHVzLlxuICAgIHZhciBob29rID0gZ2xvYmFsT2JqZWN0Ll9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztcblxuICAgIGlmIChob29rID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEhvd2V2ZXIsIGlmIHRoZXJlIGlzIG5vIERldlRvb2xzIGV4dGVuc2lvbiwgd2UnbGwgbmVlZCB0byBzZXQgdXAgdGhlIGdsb2JhbCBob29rIG91cnNlbHZlcy5cbiAgICAgIC8vIE5vdGUgdGhhdCBpbiB0aGlzIGNhc2UgaXQncyBpbXBvcnRhbnQgdGhhdCByZW5kZXJlciBjb2RlIHJ1bnMgKmFmdGVyKiB0aGlzIG1ldGhvZCBjYWxsLlxuICAgICAgLy8gT3RoZXJ3aXNlLCB0aGUgcmVuZGVyZXIgd2lsbCB0aGluayB0aGF0IHRoZXJlIGlzIG5vIGdsb2JhbCBob29rLCBhbmQgd29uJ3QgZG8gdGhlIGluamVjdGlvbi5cbiAgICAgIHZhciBuZXh0SUQgPSAwO1xuICAgICAgZ2xvYmFsT2JqZWN0Ll9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyA9IGhvb2sgPSB7XG4gICAgICAgIHJlbmRlcmVyczogbmV3IE1hcCgpLFxuICAgICAgICBzdXBwb3J0c0ZpYmVyOiB0cnVlLFxuICAgICAgICBpbmplY3Q6IGZ1bmN0aW9uIChpbmplY3RlZCkge1xuICAgICAgICAgIHJldHVybiBuZXh0SUQrKztcbiAgICAgICAgfSxcbiAgICAgICAgb25TY2hlZHVsZUZpYmVyUm9vdDogZnVuY3Rpb24gKGlkLCByb290LCBjaGlsZHJlbikge30sXG4gICAgICAgIG9uQ29tbWl0RmliZXJSb290OiBmdW5jdGlvbiAoaWQsIHJvb3QsIG1heWJlUHJpb3JpdHlMZXZlbCwgZGlkRXJyb3IpIHt9LFxuICAgICAgICBvbkNvbW1pdEZpYmVyVW5tb3VudDogZnVuY3Rpb24gKCkge31cbiAgICAgIH07XG4gICAgfSAvLyBIZXJlLCB3ZSBqdXN0IHdhbnQgdG8gZ2V0IGEgcmVmZXJlbmNlIHRvIHNjaGVkdWxlUmVmcmVzaC5cblxuXG4gICAgdmFyIG9sZEluamVjdCA9IGhvb2suaW5qZWN0O1xuXG4gICAgaG9vay5pbmplY3QgPSBmdW5jdGlvbiAoaW5qZWN0ZWQpIHtcbiAgICAgIHZhciBpZCA9IG9sZEluamVjdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgICBpZiAodHlwZW9mIGluamVjdGVkLnNjaGVkdWxlUmVmcmVzaCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgaW5qZWN0ZWQuc2V0UmVmcmVzaEhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gVGhpcyB2ZXJzaW9uIHN1cHBvcnRzIFJlYWN0IFJlZnJlc2guXG4gICAgICAgIGhlbHBlcnNCeVJlbmRlcmVySUQuc2V0KGlkLCBpbmplY3RlZCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpZDtcbiAgICB9OyAvLyBEbyB0aGUgc2FtZSBmb3IgYW55IGFscmVhZHkgaW5qZWN0ZWQgcm9vdHMuXG4gICAgLy8gVGhpcyBpcyB1c2VmdWwgaWYgUmVhY3RET00gaGFzIGFscmVhZHkgYmVlbiBpbml0aWFsaXplZC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE3NjI2XG5cblxuICAgIGhvb2sucmVuZGVyZXJzLmZvckVhY2goZnVuY3Rpb24gKGluamVjdGVkLCBpZCkge1xuICAgICAgaWYgKHR5cGVvZiBpbmplY3RlZC5zY2hlZHVsZVJlZnJlc2ggPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGluamVjdGVkLnNldFJlZnJlc2hIYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIFRoaXMgdmVyc2lvbiBzdXBwb3J0cyBSZWFjdCBSZWZyZXNoLlxuICAgICAgICBoZWxwZXJzQnlSZW5kZXJlcklELnNldChpZCwgaW5qZWN0ZWQpO1xuICAgICAgfVxuICAgIH0pOyAvLyBXZSBhbHNvIHdhbnQgdG8gdHJhY2sgY3VycmVudGx5IG1vdW50ZWQgcm9vdHMuXG5cbiAgICB2YXIgb2xkT25Db21taXRGaWJlclJvb3QgPSBob29rLm9uQ29tbWl0RmliZXJSb290O1xuXG4gICAgdmFyIG9sZE9uU2NoZWR1bGVGaWJlclJvb3QgPSBob29rLm9uU2NoZWR1bGVGaWJlclJvb3QgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICBob29rLm9uU2NoZWR1bGVGaWJlclJvb3QgPSBmdW5jdGlvbiAoaWQsIHJvb3QsIGNoaWxkcmVuKSB7XG4gICAgICBpZiAoIWlzUGVyZm9ybWluZ1JlZnJlc2gpIHtcbiAgICAgICAgLy8gSWYgaXQgd2FzIGludGVudGlvbmFsbHkgc2NoZWR1bGVkLCBkb24ndCBhdHRlbXB0IHRvIHJlc3RvcmUuXG4gICAgICAgIC8vIFRoaXMgaW5jbHVkZXMgaW50ZW50aW9uYWxseSBzY2hlZHVsZWQgdW5tb3VudHMuXG4gICAgICAgIGZhaWxlZFJvb3RzLmRlbGV0ZShyb290KTtcblxuICAgICAgICBpZiAocm9vdEVsZW1lbnRzICE9PSBudWxsKSB7XG4gICAgICAgICAgcm9vdEVsZW1lbnRzLnNldChyb290LCBjaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9sZE9uU2NoZWR1bGVGaWJlclJvb3QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgaG9vay5vbkNvbW1pdEZpYmVyUm9vdCA9IGZ1bmN0aW9uIChpZCwgcm9vdCwgbWF5YmVQcmlvcml0eUxldmVsLCBkaWRFcnJvcikge1xuICAgICAgdmFyIGhlbHBlcnMgPSBoZWxwZXJzQnlSZW5kZXJlcklELmdldChpZCk7XG5cbiAgICAgIGlmIChoZWxwZXJzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBoZWxwZXJzQnlSb290LnNldChyb290LCBoZWxwZXJzKTtcbiAgICAgIHZhciBjdXJyZW50ID0gcm9vdC5jdXJyZW50O1xuICAgICAgdmFyIGFsdGVybmF0ZSA9IGN1cnJlbnQuYWx0ZXJuYXRlOyAvLyBXZSBuZWVkIHRvIGRldGVybWluZSB3aGV0aGVyIHRoaXMgcm9vdCBoYXMganVzdCAodW4pbW91bnRlZC5cbiAgICAgIC8vIFRoaXMgbG9naWMgaXMgY29weS1wYXN0ZWQgZnJvbSBzaW1pbGFyIGxvZ2ljIGluIHRoZSBEZXZUb29scyBiYWNrZW5kLlxuICAgICAgLy8gSWYgdGhpcyBicmVha3Mgd2l0aCBzb21lIHJlZmFjdG9yaW5nLCB5b3UnbGwgd2FudCB0byB1cGRhdGUgRGV2VG9vbHMgdG9vLlxuXG4gICAgICBpZiAoYWx0ZXJuYXRlICE9PSBudWxsKSB7XG4gICAgICAgIHZhciB3YXNNb3VudGVkID0gYWx0ZXJuYXRlLm1lbW9pemVkU3RhdGUgIT0gbnVsbCAmJiBhbHRlcm5hdGUubWVtb2l6ZWRTdGF0ZS5lbGVtZW50ICE9IG51bGw7XG4gICAgICAgIHZhciBpc01vdW50ZWQgPSBjdXJyZW50Lm1lbW9pemVkU3RhdGUgIT0gbnVsbCAmJiBjdXJyZW50Lm1lbW9pemVkU3RhdGUuZWxlbWVudCAhPSBudWxsO1xuXG4gICAgICAgIGlmICghd2FzTW91bnRlZCAmJiBpc01vdW50ZWQpIHtcbiAgICAgICAgICAvLyBNb3VudCBhIG5ldyByb290LlxuICAgICAgICAgIG1vdW50ZWRSb290cy5hZGQocm9vdCk7XG4gICAgICAgICAgZmFpbGVkUm9vdHMuZGVsZXRlKHJvb3QpO1xuICAgICAgICB9IGVsc2UgaWYgKHdhc01vdW50ZWQgJiYgaXNNb3VudGVkKSA7IGVsc2UgaWYgKHdhc01vdW50ZWQgJiYgIWlzTW91bnRlZCkge1xuICAgICAgICAgIC8vIFVubW91bnQgYW4gZXhpc3Rpbmcgcm9vdC5cbiAgICAgICAgICBtb3VudGVkUm9vdHMuZGVsZXRlKHJvb3QpO1xuXG4gICAgICAgICAgaWYgKGRpZEVycm9yKSB7XG4gICAgICAgICAgICAvLyBXZSdsbCByZW1vdW50IGl0IG9uIGZ1dHVyZSBlZGl0cy5cbiAgICAgICAgICAgIGZhaWxlZFJvb3RzLmFkZChyb290KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaGVscGVyc0J5Um9vdC5kZWxldGUocm9vdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCF3YXNNb3VudGVkICYmICFpc01vdW50ZWQpIHtcbiAgICAgICAgICBpZiAoZGlkRXJyb3IpIHtcbiAgICAgICAgICAgIC8vIFdlJ2xsIHJlbW91bnQgaXQgb24gZnV0dXJlIGVkaXRzLlxuICAgICAgICAgICAgZmFpbGVkUm9vdHMuYWRkKHJvb3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTW91bnQgYSBuZXcgcm9vdC5cbiAgICAgICAgbW91bnRlZFJvb3RzLmFkZChyb290KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9sZE9uQ29tbWl0RmliZXJSb290LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxufVxuZnVuY3Rpb24gaGFzVW5yZWNvdmVyYWJsZUVycm9ycygpIHtcbiAgLy8gVE9ETzogZGVsZXRlIHRoaXMgYWZ0ZXIgcmVtb3ZpbmcgZGVwZW5kZW5jeSBpbiBSTi5cbiAgcmV0dXJuIGZhbHNlO1xufSAvLyBFeHBvc2VkIGZvciB0ZXN0aW5nLlxuXG5mdW5jdGlvbiBfZ2V0TW91bnRlZFJvb3RDb3VudCgpIHtcbiAge1xuICAgIHJldHVybiBtb3VudGVkUm9vdHMuc2l6ZTtcbiAgfVxufSAvLyBUaGlzIGlzIGEgd3JhcHBlciBvdmVyIG1vcmUgcHJpbWl0aXZlIGZ1bmN0aW9ucyBmb3Igc2V0dGluZyBzaWduYXR1cmUuXG4vLyBTaWduYXR1cmVzIGxldCB1cyBkZWNpZGUgd2hldGhlciB0aGUgSG9vayBvcmRlciBoYXMgY2hhbmdlZCBvbiByZWZyZXNoLlxuLy9cbi8vIFRoaXMgZnVuY3Rpb24gaXMgaW50ZW5kZWQgdG8gYmUgdXNlZCBhcyBhIHRyYW5zZm9ybSB0YXJnZXQsIGUuZy46XG4vLyB2YXIgX3MgPSBjcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybSgpXG4vL1xuLy8gZnVuY3Rpb24gSGVsbG8oKSB7XG4vLyAgIGNvbnN0IFtmb28sIHNldEZvb10gPSB1c2VTdGF0ZSgwKTtcbi8vICAgY29uc3QgdmFsdWUgPSB1c2VDdXN0b21Ib29rKCk7XG4vLyAgIF9zKCk7IC8qIFNlY29uZCBjYWxsIHRyaWdnZXJzIGNvbGxlY3RpbmcgdGhlIGN1c3RvbSBIb29rIGxpc3QuXG4vLyAgICAgICAgICAqIFRoaXMgZG9lc24ndCBoYXBwZW4gZHVyaW5nIHRoZSBtb2R1bGUgZXZhbHVhdGlvbiBiZWNhdXNlIHdlXG4vLyAgICAgICAgICAqIGRvbid0IHdhbnQgdG8gY2hhbmdlIHRoZSBtb2R1bGUgb3JkZXIgd2l0aCBpbmxpbmUgcmVxdWlyZXMuXG4vLyAgICAgICAgICAqIE5leHQgY2FsbHMgYXJlIG5vb3BzLiAqL1xuLy8gICByZXR1cm4gPGgxPkhpPC9oMT47XG4vLyB9XG4vL1xuLy8gLyogRmlyc3QgY2FsbCBzcGVjaWZpZXMgdGhlIHNpZ25hdHVyZTogKi9cbi8vIF9zKFxuLy8gICBIZWxsbyxcbi8vICAgJ3VzZVN0YXRle1tmb28sIHNldEZvb119KDApJyxcbi8vICAgKCkgPT4gW3VzZUN1c3RvbUhvb2tdLCAvKiBMYXp5IHRvIGF2b2lkIHRyaWdnZXJpbmcgaW5saW5lIHJlcXVpcmVzICovXG4vLyApO1xuXG5mdW5jdGlvbiBjcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybSgpIHtcbiAge1xuICAgIC8vIFdlJ2xsIGZpbGwgaW4gdGhlIHNpZ25hdHVyZSBpbiB0d28gc3RlcHMuXG4gICAgLy8gRmlyc3QsIHdlJ2xsIGtub3cgdGhlIHNpZ25hdHVyZSBpdHNlbGYuIFRoaXMgaGFwcGVucyBvdXRzaWRlIHRoZSBjb21wb25lbnQuXG4gICAgLy8gVGhlbiwgd2UnbGwga25vdyB0aGUgcmVmZXJlbmNlcyB0byBjdXN0b20gSG9va3MuIFRoaXMgaGFwcGVucyBpbnNpZGUgdGhlIGNvbXBvbmVudC5cbiAgICAvLyBBZnRlciB0aGF0LCB0aGUgcmV0dXJuZWQgZnVuY3Rpb24gd2lsbCBiZSBhIGZhc3QgcGF0aCBuby1vcC5cbiAgICB2YXIgc3RhdHVzID0gJ25lZWRzU2lnbmF0dXJlJztcbiAgICB2YXIgc2F2ZWRUeXBlO1xuICAgIHZhciBoYXNDdXN0b21Ib29rcztcbiAgICByZXR1cm4gZnVuY3Rpb24gKHR5cGUsIGtleSwgZm9yY2VSZXNldCwgZ2V0Q3VzdG9tSG9va3MpIHtcbiAgICAgIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgICAgIGNhc2UgJ25lZWRzU2lnbmF0dXJlJzpcbiAgICAgICAgICBpZiAodHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSByZWNlaXZlZCBhbiBhcmd1bWVudCwgdGhpcyBpcyB0aGUgaW5pdGlhbCByZWdpc3RyYXRpb24gY2FsbC5cbiAgICAgICAgICAgIHNhdmVkVHlwZSA9IHR5cGU7XG4gICAgICAgICAgICBoYXNDdXN0b21Ib29rcyA9IHR5cGVvZiBnZXRDdXN0b21Ib29rcyA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgICAgICAgIHNldFNpZ25hdHVyZSh0eXBlLCBrZXksIGZvcmNlUmVzZXQsIGdldEN1c3RvbUhvb2tzKTsgLy8gVGhlIG5leHQgY2FsbCB3ZSBleHBlY3QgaXMgZnJvbSBpbnNpZGUgYSBmdW5jdGlvbiwgdG8gZmlsbCBpbiB0aGUgY3VzdG9tIEhvb2tzLlxuXG4gICAgICAgICAgICBzdGF0dXMgPSAnbmVlZHNDdXN0b21Ib29rcyc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnbmVlZHNDdXN0b21Ib29rcyc6XG4gICAgICAgICAgaWYgKGhhc0N1c3RvbUhvb2tzKSB7XG4gICAgICAgICAgICBjb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmUoc2F2ZWRUeXBlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzdGF0dXMgPSAncmVzb2x2ZWQnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHlwZTtcbiAgICB9O1xuICB9XG59XG5mdW5jdGlvbiBpc0xpa2VseUNvbXBvbmVudFR5cGUodHlwZSkge1xuICB7XG4gICAgc3dpdGNoICh0eXBlb2YgdHlwZSkge1xuICAgICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgICB7XG4gICAgICAgICAgLy8gRmlyc3QsIGRlYWwgd2l0aCBjbGFzc2VzLlxuICAgICAgICAgIGlmICh0eXBlLnByb3RvdHlwZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAodHlwZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCkge1xuICAgICAgICAgICAgICAvLyBSZWFjdCBjbGFzcy5cbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBvd25OYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHR5cGUucHJvdG90eXBlKTtcblxuICAgICAgICAgICAgaWYgKG93bk5hbWVzLmxlbmd0aCA+IDEgfHwgb3duTmFtZXNbMF0gIT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBsb29rcyBsaWtlIGEgY2xhc3MuXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvXG5cblxuICAgICAgICAgICAgaWYgKHR5cGUucHJvdG90eXBlLl9fcHJvdG9fXyAhPT0gT2JqZWN0LnByb3RvdHlwZSkge1xuICAgICAgICAgICAgICAvLyBJdCBoYXMgYSBzdXBlcmNsYXNzLlxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IC8vIFBhc3MgdGhyb3VnaC5cbiAgICAgICAgICAgIC8vIFRoaXMgbG9va3MgbGlrZSBhIHJlZ3VsYXIgZnVuY3Rpb24gd2l0aCBlbXB0eSBwcm90b3R5cGUuXG5cbiAgICAgICAgICB9IC8vIEZvciBwbGFpbiBmdW5jdGlvbnMgYW5kIGFycm93cywgdXNlIG5hbWUgYXMgYSBoZXVyaXN0aWMuXG5cblxuICAgICAgICAgIHZhciBuYW1lID0gdHlwZS5uYW1lIHx8IHR5cGUuZGlzcGxheU5hbWU7XG4gICAgICAgICAgcmV0dXJuIHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJyAmJiAvXltBLVpdLy50ZXN0KG5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHtcbiAgICAgICAgICBpZiAodHlwZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgICAvLyBEZWZpbml0ZWx5IFJlYWN0IGNvbXBvbmVudHMuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0cy5fZ2V0TW91bnRlZFJvb3RDb3VudCA9IF9nZXRNb3VudGVkUm9vdENvdW50O1xuZXhwb3J0cy5jb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmUgPSBjb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmU7XG5leHBvcnRzLmNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtID0gY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm07XG5leHBvcnRzLmZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXMgPSBmaW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzO1xuZXhwb3J0cy5nZXRGYW1pbHlCeUlEID0gZ2V0RmFtaWx5QnlJRDtcbmV4cG9ydHMuZ2V0RmFtaWx5QnlUeXBlID0gZ2V0RmFtaWx5QnlUeXBlO1xuZXhwb3J0cy5oYXNVbnJlY292ZXJhYmxlRXJyb3JzID0gaGFzVW5yZWNvdmVyYWJsZUVycm9ycztcbmV4cG9ydHMuaW5qZWN0SW50b0dsb2JhbEhvb2sgPSBpbmplY3RJbnRvR2xvYmFsSG9vaztcbmV4cG9ydHMuaXNMaWtlbHlDb21wb25lbnRUeXBlID0gaXNMaWtlbHlDb21wb25lbnRUeXBlO1xuZXhwb3J0cy5wZXJmb3JtUmVhY3RSZWZyZXNoID0gcGVyZm9ybVJlYWN0UmVmcmVzaDtcbmV4cG9ydHMucmVnaXN0ZXIgPSByZWdpc3RlcjtcbmV4cG9ydHMuc2V0U2lnbmF0dXJlID0gc2V0U2lnbmF0dXJlO1xuICB9KSgpO1xufVxuIiwidmFyIEhNUl9IT1NUID0gXCJsb2NhbGhvc3RcIjt2YXIgSE1SX1BPUlQgPSBudWxsO3ZhciBITVJfU0VDVVJFID0gZmFsc2U7dmFyIEhNUl9FTlZfSEFTSCA9IFwiZDc1MTcxMzk4ODk4N2U5MzMxOTgwMzYzZTI0MTg5Y2VcIjttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQgPSBcIjA3ZDVhOGRiNmNlYmY2NmVhMzU0ZTgyM2YwMDc0NTVmXCI7Ly8gQGZsb3dcbi8qIGdsb2JhbCBITVJfSE9TVCwgSE1SX1BPUlQsIEhNUl9FTlZfSEFTSCwgSE1SX1NFQ1VSRSAqL1xuXG4vKjo6XG5pbXBvcnQgdHlwZSB7XG4gIEhNUkFzc2V0LFxuICBITVJNZXNzYWdlLFxufSBmcm9tICdAcGFyY2VsL3JlcG9ydGVyLWRldi1zZXJ2ZXIvc3JjL0hNUlNlcnZlci5qcyc7XG5pbnRlcmZhY2UgUGFyY2VsUmVxdWlyZSB7XG4gIChzdHJpbmcpOiBtaXhlZDtcbiAgY2FjaGU6IHt8W3N0cmluZ106IFBhcmNlbE1vZHVsZXx9O1xuICBob3REYXRhOiBtaXhlZDtcbiAgTW9kdWxlOiBhbnk7XG4gIHBhcmVudDogP1BhcmNlbFJlcXVpcmU7XG4gIGlzUGFyY2VsUmVxdWlyZTogdHJ1ZTtcbiAgbW9kdWxlczoge3xbc3RyaW5nXTogW0Z1bmN0aW9uLCB7fFtzdHJpbmddOiBzdHJpbmd8fV18fTtcbiAgSE1SX0JVTkRMRV9JRDogc3RyaW5nO1xuICByb290OiBQYXJjZWxSZXF1aXJlO1xufVxuaW50ZXJmYWNlIFBhcmNlbE1vZHVsZSB7XG4gIGhvdDoge3xcbiAgICBkYXRhOiBtaXhlZCxcbiAgICBhY2NlcHQoY2I6IChGdW5jdGlvbikgPT4gdm9pZCk6IHZvaWQsXG4gICAgZGlzcG9zZShjYjogKG1peGVkKSA9PiB2b2lkKTogdm9pZCxcbiAgICAvLyBhY2NlcHQoZGVwczogQXJyYXk8c3RyaW5nPiB8IHN0cmluZywgY2I6IChGdW5jdGlvbikgPT4gdm9pZCk6IHZvaWQsXG4gICAgLy8gZGVjbGluZSgpOiB2b2lkLFxuICAgIF9hY2NlcHRDYWxsYmFja3M6IEFycmF5PChGdW5jdGlvbikgPT4gdm9pZD4sXG4gICAgX2Rpc3Bvc2VDYWxsYmFja3M6IEFycmF5PChtaXhlZCkgPT4gdm9pZD4sXG4gIHx9O1xufVxuZGVjbGFyZSB2YXIgbW9kdWxlOiB7YnVuZGxlOiBQYXJjZWxSZXF1aXJlLCAuLi59O1xuZGVjbGFyZSB2YXIgSE1SX0hPU1Q6IHN0cmluZztcbmRlY2xhcmUgdmFyIEhNUl9QT1JUOiBzdHJpbmc7XG5kZWNsYXJlIHZhciBITVJfRU5WX0hBU0g6IHN0cmluZztcbmRlY2xhcmUgdmFyIEhNUl9TRUNVUkU6IGJvb2xlYW47XG4qL1xuXG52YXIgT1ZFUkxBWV9JRCA9ICdfX3BhcmNlbF9fZXJyb3JfX292ZXJsYXlfXyc7XG5cbnZhciBPbGRNb2R1bGUgPSBtb2R1bGUuYnVuZGxlLk1vZHVsZTtcblxuZnVuY3Rpb24gTW9kdWxlKG1vZHVsZU5hbWUpIHtcbiAgT2xkTW9kdWxlLmNhbGwodGhpcywgbW9kdWxlTmFtZSk7XG4gIHRoaXMuaG90ID0ge1xuICAgIGRhdGE6IG1vZHVsZS5idW5kbGUuaG90RGF0YSxcbiAgICBfYWNjZXB0Q2FsbGJhY2tzOiBbXSxcbiAgICBfZGlzcG9zZUNhbGxiYWNrczogW10sXG4gICAgYWNjZXB0OiBmdW5jdGlvbihmbikge1xuICAgICAgdGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2goZm4gfHwgZnVuY3Rpb24oKSB7fSk7XG4gICAgfSxcbiAgICBkaXNwb3NlOiBmdW5jdGlvbihmbikge1xuICAgICAgdGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKGZuKTtcbiAgICB9LFxuICB9O1xuICBtb2R1bGUuYnVuZGxlLmhvdERhdGEgPSB1bmRlZmluZWQ7XG59XG5tb2R1bGUuYnVuZGxlLk1vZHVsZSA9IE1vZHVsZTtcblxudmFyIGNoZWNrZWRBc3NldHMgLyo6IHt8W3N0cmluZ106IGJvb2xlYW58fSAqLyxcbiAgYWNjZXB0ZWRBc3NldHMgLyo6IHt8W3N0cmluZ106IGJvb2xlYW58fSAqLyxcbiAgYXNzZXRzVG9BY2NlcHQgLyo6IEFycmF5PFtQYXJjZWxSZXF1aXJlLCBzdHJpbmddPiAqLztcblxuZnVuY3Rpb24gZ2V0SG9zdG5hbWUoKSB7XG4gIHJldHVybiAoXG4gICAgSE1SX0hPU1QgfHxcbiAgICAobG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZignaHR0cCcpID09PSAwID8gbG9jYXRpb24uaG9zdG5hbWUgOiAnbG9jYWxob3N0JylcbiAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0UG9ydCgpIHtcbiAgcmV0dXJuIEhNUl9QT1JUIHx8IGxvY2F0aW9uLnBvcnQ7XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZWRlY2xhcmVcbnZhciBwYXJlbnQgPSBtb2R1bGUuYnVuZGxlLnBhcmVudDtcbmlmICgoIXBhcmVudCB8fCAhcGFyZW50LmlzUGFyY2VsUmVxdWlyZSkgJiYgdHlwZW9mIFdlYlNvY2tldCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgdmFyIGhvc3RuYW1lID0gZ2V0SG9zdG5hbWUoKTtcbiAgdmFyIHBvcnQgPSBnZXRQb3J0KCk7XG4gIHZhciBwcm90b2NvbCA9XG4gICAgSE1SX1NFQ1VSRSB8fFxuICAgIChsb2NhdGlvbi5wcm90b2NvbCA9PSAnaHR0cHM6JyAmJlxuICAgICAgIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QoaG9zdG5hbWUpKVxuICAgICAgPyAnd3NzJ1xuICAgICAgOiAnd3MnO1xuICB2YXIgd3MgPSBuZXcgV2ViU29ja2V0KFxuICAgIHByb3RvY29sICsgJzovLycgKyBob3N0bmFtZSArIChwb3J0ID8gJzonICsgcG9ydCA6ICcnKSArICcvJyxcbiAgKTtcbiAgLy8gJEZsb3dGaXhNZVxuICB3cy5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCAvKjoge2RhdGE6IHN0cmluZywgLi4ufSAqLykge1xuICAgIGNoZWNrZWRBc3NldHMgPSAoe30gLyo6IHt8W3N0cmluZ106IGJvb2xlYW58fSAqLyk7XG4gICAgYWNjZXB0ZWRBc3NldHMgPSAoe30gLyo6IHt8W3N0cmluZ106IGJvb2xlYW58fSAqLyk7XG4gICAgYXNzZXRzVG9BY2NlcHQgPSBbXTtcblxuICAgIHZhciBkYXRhIC8qOiBITVJNZXNzYWdlICovID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcblxuICAgIGlmIChkYXRhLnR5cGUgPT09ICd1cGRhdGUnKSB7XG4gICAgICAvLyBSZW1vdmUgZXJyb3Igb3ZlcmxheSBpZiB0aGVyZSBpcyBvbmVcbiAgICAgIHJlbW92ZUVycm9yT3ZlcmxheSgpO1xuXG4gICAgICBsZXQgYXNzZXRzID0gZGF0YS5hc3NldHMuZmlsdGVyKGFzc2V0ID0+IGFzc2V0LmVudkhhc2ggPT09IEhNUl9FTlZfSEFTSCk7XG5cbiAgICAgIC8vIEhhbmRsZSBITVIgVXBkYXRlXG4gICAgICB2YXIgaGFuZGxlZCA9IGZhbHNlO1xuICAgICAgYXNzZXRzLmZvckVhY2goYXNzZXQgPT4ge1xuICAgICAgICB2YXIgZGlkQWNjZXB0ID1cbiAgICAgICAgICBhc3NldC50eXBlID09PSAnY3NzJyB8fFxuICAgICAgICAgIChhc3NldC50eXBlID09PSAnanMnICYmXG4gICAgICAgICAgICBobXJBY2NlcHRDaGVjayhtb2R1bGUuYnVuZGxlLnJvb3QsIGFzc2V0LmlkLCBhc3NldC5kZXBzQnlCdW5kbGUpKTtcbiAgICAgICAgaWYgKGRpZEFjY2VwdCkge1xuICAgICAgICAgIGhhbmRsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGhhbmRsZWQpIHtcbiAgICAgICAgY29uc29sZS5jbGVhcigpO1xuXG4gICAgICAgIGFzc2V0cy5mb3JFYWNoKGZ1bmN0aW9uKGFzc2V0KSB7XG4gICAgICAgICAgaG1yQXBwbHkobW9kdWxlLmJ1bmRsZS5yb290LCBhc3NldCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXNzZXRzVG9BY2NlcHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgaWQgPSBhc3NldHNUb0FjY2VwdFtpXVsxXTtcbiAgICAgICAgICBpZiAoIWFjY2VwdGVkQXNzZXRzW2lkXSkge1xuICAgICAgICAgICAgaG1yQWNjZXB0UnVuKGFzc2V0c1RvQWNjZXB0W2ldWzBdLCBpZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRhdGEudHlwZSA9PT0gJ2Vycm9yJykge1xuICAgICAgLy8gTG9nIHBhcmNlbCBlcnJvcnMgdG8gY29uc29sZVxuICAgICAgZm9yIChsZXQgYW5zaURpYWdub3N0aWMgb2YgZGF0YS5kaWFnbm9zdGljcy5hbnNpKSB7XG4gICAgICAgIGxldCBzdGFjayA9IGFuc2lEaWFnbm9zdGljLmNvZGVmcmFtZVxuICAgICAgICAgID8gYW5zaURpYWdub3N0aWMuY29kZWZyYW1lXG4gICAgICAgICAgOiBhbnNpRGlhZ25vc3RpYy5zdGFjaztcblxuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICfwn5qoIFtwYXJjZWxdOiAnICtcbiAgICAgICAgICAgIGFuc2lEaWFnbm9zdGljLm1lc3NhZ2UgK1xuICAgICAgICAgICAgJ1xcbicgK1xuICAgICAgICAgICAgc3RhY2sgK1xuICAgICAgICAgICAgJ1xcblxcbicgK1xuICAgICAgICAgICAgYW5zaURpYWdub3N0aWMuaGludHMuam9pbignXFxuJyksXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIC8vIFJlbmRlciB0aGUgZmFuY3kgaHRtbCBvdmVybGF5XG4gICAgICByZW1vdmVFcnJvck92ZXJsYXkoKTtcbiAgICAgIHZhciBvdmVybGF5ID0gY3JlYXRlRXJyb3JPdmVybGF5KGRhdGEuZGlhZ25vc3RpY3MuaHRtbCk7XG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICAgIH1cbiAgfTtcbiAgd3Mub25lcnJvciA9IGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKGUubWVzc2FnZSk7XG4gIH07XG4gIHdzLm9uY2xvc2UgPSBmdW5jdGlvbihlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52LlBBUkNFTF9CVUlMRF9FTlYgIT09ICd0ZXN0Jykge1xuICAgICAgY29uc29sZS53YXJuKCdbcGFyY2VsXSDwn5qoIENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgd2FzIGxvc3QnKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUVycm9yT3ZlcmxheSgpIHtcbiAgdmFyIG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChPVkVSTEFZX0lEKTtcbiAgaWYgKG92ZXJsYXkpIHtcbiAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgIGNvbnNvbGUubG9nKCdbcGFyY2VsXSDinKggRXJyb3IgcmVzb2x2ZWQnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFcnJvck92ZXJsYXkoZGlhZ25vc3RpY3MpIHtcbiAgdmFyIG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgb3ZlcmxheS5pZCA9IE9WRVJMQVlfSUQ7XG5cbiAgbGV0IGVycm9ySFRNTCA9XG4gICAgJzxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kOiBibGFjazsgb3BhY2l0eTogMC44NTsgZm9udC1zaXplOiAxNnB4OyBjb2xvcjogd2hpdGU7IHBvc2l0aW9uOiBmaXhlZDsgaGVpZ2h0OiAxMDAlOyB3aWR0aDogMTAwJTsgdG9wOiAwcHg7IGxlZnQ6IDBweDsgcGFkZGluZzogMzBweDsgZm9udC1mYW1pbHk6IE1lbmxvLCBDb25zb2xhcywgbW9ub3NwYWNlOyB6LWluZGV4OiA5OTk5O1wiPic7XG5cbiAgZm9yIChsZXQgZGlhZ25vc3RpYyBvZiBkaWFnbm9zdGljcykge1xuICAgIGxldCBzdGFjayA9IGRpYWdub3N0aWMuY29kZWZyYW1lID8gZGlhZ25vc3RpYy5jb2RlZnJhbWUgOiBkaWFnbm9zdGljLnN0YWNrO1xuXG4gICAgZXJyb3JIVE1MICs9IGBcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJmb250LXNpemU6IDE4cHg7IGZvbnQtd2VpZ2h0OiBib2xkOyBtYXJnaW4tdG9wOiAyMHB4O1wiPlxuICAgICAgICAgIPCfmqggJHtkaWFnbm9zdGljLm1lc3NhZ2V9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cHJlPlxuICAgICAgICAgICR7c3RhY2t9XG4gICAgICAgIDwvcHJlPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICR7ZGlhZ25vc3RpYy5oaW50cy5tYXAoaGludCA9PiAnPGRpdj4nICsgaGludCArICc8L2Rpdj4nKS5qb2luKCcnKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgZXJyb3JIVE1MICs9ICc8L2Rpdj4nO1xuXG4gIG92ZXJsYXkuaW5uZXJIVE1MID0gZXJyb3JIVE1MO1xuXG4gIHJldHVybiBvdmVybGF5O1xufVxuXG5mdW5jdGlvbiBnZXRQYXJlbnRzKGJ1bmRsZSwgaWQpIC8qOiBBcnJheTxbUGFyY2VsUmVxdWlyZSwgc3RyaW5nXT4gKi8ge1xuICB2YXIgbW9kdWxlcyA9IGJ1bmRsZS5tb2R1bGVzO1xuICBpZiAoIW1vZHVsZXMpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICB2YXIgcGFyZW50cyA9IFtdO1xuICB2YXIgaywgZCwgZGVwO1xuXG4gIGZvciAoayBpbiBtb2R1bGVzKSB7XG4gICAgZm9yIChkIGluIG1vZHVsZXNba11bMV0pIHtcbiAgICAgIGRlcCA9IG1vZHVsZXNba11bMV1bZF07XG5cbiAgICAgIGlmIChkZXAgPT09IGlkIHx8IChBcnJheS5pc0FycmF5KGRlcCkgJiYgZGVwW2RlcC5sZW5ndGggLSAxXSA9PT0gaWQpKSB7XG4gICAgICAgIHBhcmVudHMucHVzaChbYnVuZGxlLCBrXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGJ1bmRsZS5wYXJlbnQpIHtcbiAgICBwYXJlbnRzID0gcGFyZW50cy5jb25jYXQoZ2V0UGFyZW50cyhidW5kbGUucGFyZW50LCBpZCkpO1xuICB9XG5cbiAgcmV0dXJuIHBhcmVudHM7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGluaykge1xuICB2YXIgbmV3TGluayA9IGxpbmsuY2xvbmVOb2RlKCk7XG4gIG5ld0xpbmsub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKGxpbmsucGFyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgbGluay5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGxpbmspO1xuICAgIH1cbiAgfTtcbiAgbmV3TGluay5zZXRBdHRyaWJ1dGUoXG4gICAgJ2hyZWYnLFxuICAgIC8vICRGbG93Rml4TWVcbiAgICBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpLnNwbGl0KCc/JylbMF0gKyAnPycgKyBEYXRlLm5vdygpLFxuICApO1xuICAvLyAkRmxvd0ZpeE1lXG4gIGxpbmsucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3TGluaywgbGluay5uZXh0U2libGluZyk7XG59XG5cbnZhciBjc3NUaW1lb3V0ID0gbnVsbDtcbmZ1bmN0aW9uIHJlbG9hZENTUygpIHtcbiAgaWYgKGNzc1RpbWVvdXQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjc3NUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICB2YXIgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS10eXBlXVxuICAgICAgdmFyIGhyZWYgLyo6IHN0cmluZyAqLyA9IGxpbmtzW2ldLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgdmFyIGhvc3RuYW1lID0gZ2V0SG9zdG5hbWUoKTtcbiAgICAgIHZhciBzZXJ2ZWRGcm9tSE1SU2VydmVyID1cbiAgICAgICAgaG9zdG5hbWUgPT09ICdsb2NhbGhvc3QnXG4gICAgICAgICAgPyBuZXcgUmVnRXhwKFxuICAgICAgICAgICAgICAnXihodHRwcz86XFxcXC9cXFxcLygwLjAuMC4wfDEyNy4wLjAuMSl8bG9jYWxob3N0KTonICsgZ2V0UG9ydCgpLFxuICAgICAgICAgICAgKS50ZXN0KGhyZWYpXG4gICAgICAgICAgOiBocmVmLmluZGV4T2YoaG9zdG5hbWUgKyAnOicgKyBnZXRQb3J0KCkpO1xuICAgICAgdmFyIGFic29sdXRlID1cbiAgICAgICAgL15odHRwcz86XFwvXFwvL2kudGVzdChocmVmKSAmJlxuICAgICAgICBocmVmLmluZGV4T2Yod2luZG93LmxvY2F0aW9uLm9yaWdpbikgIT09IDAgJiZcbiAgICAgICAgIXNlcnZlZEZyb21ITVJTZXJ2ZXI7XG4gICAgICBpZiAoIWFic29sdXRlKSB7XG4gICAgICAgIHVwZGF0ZUxpbmsobGlua3NbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNzc1RpbWVvdXQgPSBudWxsO1xuICB9LCA1MCk7XG59XG5cbmZ1bmN0aW9uIGhtckFwcGx5KGJ1bmRsZSAvKjogUGFyY2VsUmVxdWlyZSAqLywgYXNzZXQgLyo6ICBITVJBc3NldCAqLykge1xuICB2YXIgbW9kdWxlcyA9IGJ1bmRsZS5tb2R1bGVzO1xuICBpZiAoIW1vZHVsZXMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoYXNzZXQudHlwZSA9PT0gJ2NzcycpIHtcbiAgICByZWxvYWRDU1MoKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgZGVwcyA9IGFzc2V0LmRlcHNCeUJ1bmRsZVtidW5kbGUuSE1SX0JVTkRMRV9JRF07XG4gIGlmIChkZXBzKSB7XG4gICAgdmFyIGZuID0gbmV3IEZ1bmN0aW9uKCdyZXF1aXJlJywgJ21vZHVsZScsICdleHBvcnRzJywgYXNzZXQub3V0cHV0KTtcbiAgICBtb2R1bGVzW2Fzc2V0LmlkXSA9IFtmbiwgZGVwc107XG4gIH0gZWxzZSBpZiAoYnVuZGxlLnBhcmVudCkge1xuICAgIGhtckFwcGx5KGJ1bmRsZS5wYXJlbnQsIGFzc2V0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBobXJBY2NlcHRDaGVjayhcbiAgYnVuZGxlIC8qOiBQYXJjZWxSZXF1aXJlICovLFxuICBpZCAvKjogc3RyaW5nICovLFxuICBkZXBzQnlCdW5kbGUgLyo6ID97IFtzdHJpbmddOiB7IFtzdHJpbmddOiBzdHJpbmcgfSB9Ki8sXG4pIHtcbiAgdmFyIG1vZHVsZXMgPSBidW5kbGUubW9kdWxlcztcbiAgaWYgKCFtb2R1bGVzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGRlcHNCeUJ1bmRsZSAmJiAhZGVwc0J5QnVuZGxlW2J1bmRsZS5ITVJfQlVORExFX0lEXSkge1xuICAgIC8vIElmIHdlIHJlYWNoZWQgdGhlIHJvb3QgYnVuZGxlIHdpdGhvdXQgZmluZGluZyB3aGVyZSB0aGUgYXNzZXQgc2hvdWxkIGdvLFxuICAgIC8vIHRoZXJlJ3Mgbm90aGluZyB0byBkby4gTWFyayBhcyBcImFjY2VwdGVkXCIgc28gd2UgZG9uJ3QgcmVsb2FkIHRoZSBwYWdlLlxuICAgIGlmICghYnVuZGxlLnBhcmVudCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhtckFjY2VwdENoZWNrKGJ1bmRsZS5wYXJlbnQsIGlkLCBkZXBzQnlCdW5kbGUpO1xuICB9XG5cbiAgaWYgKGNoZWNrZWRBc3NldHNbaWRdKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY2hlY2tlZEFzc2V0c1tpZF0gPSB0cnVlO1xuXG4gIHZhciBjYWNoZWQgPSBidW5kbGUuY2FjaGVbaWRdO1xuXG4gIGFzc2V0c1RvQWNjZXB0LnB1c2goW2J1bmRsZSwgaWRdKTtcblxuICBpZiAoY2FjaGVkICYmIGNhY2hlZC5ob3QgJiYgY2FjaGVkLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGdldFBhcmVudHMobW9kdWxlLmJ1bmRsZS5yb290LCBpZCkuc29tZShmdW5jdGlvbih2KSB7XG4gICAgcmV0dXJuIGhtckFjY2VwdENoZWNrKHZbMF0sIHZbMV0sIG51bGwpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaG1yQWNjZXB0UnVuKGJ1bmRsZSAvKjogUGFyY2VsUmVxdWlyZSAqLywgaWQgLyo6IHN0cmluZyAqLykge1xuICB2YXIgY2FjaGVkID0gYnVuZGxlLmNhY2hlW2lkXTtcbiAgYnVuZGxlLmhvdERhdGEgPSB7fTtcbiAgaWYgKGNhY2hlZCAmJiBjYWNoZWQuaG90KSB7XG4gICAgY2FjaGVkLmhvdC5kYXRhID0gYnVuZGxlLmhvdERhdGE7XG4gIH1cblxuICBpZiAoY2FjaGVkICYmIGNhY2hlZC5ob3QgJiYgY2FjaGVkLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICBjYWNoZWQuaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24oY2IpIHtcbiAgICAgIGNiKGJ1bmRsZS5ob3REYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRlbGV0ZSBidW5kbGUuY2FjaGVbaWRdO1xuICBidW5kbGUoaWQpO1xuXG4gIGNhY2hlZCA9IGJ1bmRsZS5jYWNoZVtpZF07XG4gIGlmIChjYWNoZWQgJiYgY2FjaGVkLmhvdCAmJiBjYWNoZWQuaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgY2FjaGVkLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24oY2IpIHtcbiAgICAgIHZhciBhc3NldHNUb0Fsc29BY2NlcHQgPSBjYihmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGdldFBhcmVudHMobW9kdWxlLmJ1bmRsZS5yb290LCBpZCk7XG4gICAgICB9KTtcbiAgICAgIGlmIChhc3NldHNUb0Fsc29BY2NlcHQgJiYgYXNzZXRzVG9BY2NlcHQubGVuZ3RoKSB7XG4gICAgICAgIGFzc2V0c1RvQWNjZXB0LnB1c2guYXBwbHkoYXNzZXRzVG9BY2NlcHQsIGFzc2V0c1RvQWxzb0FjY2VwdCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgYWNjZXB0ZWRBc3NldHNbaWRdID0gdHJ1ZTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gSlNPTi5wYXJzZShcIntcXFwibWFuaWZlc3RfdmVyc2lvblxcXCI6MixcXFwibmFtZVxcXCI6XFxcIldlYiBFeHRlbnNpb25cXFwiLFxcXCJkZXNjcmlwdGlvblxcXCI6XFxcIldlYiBleHRlbnNpb24gd2hpY2ggY2FuIGJlIHNoaXBwZWQgdG8gbXVsdGlwbGUgYnJvd3NlcnMuXFxcIixcXFwidmVyc2lvblxcXCI6XFxcIjAuMC4xXFxcIixcXFwiaWNvbnNcXFwiOntcXFwiMTZcXFwiOlxcXCJhc3NldHMvaWNvbjE2LnBuZ1xcXCIsXFxcIjMyXFxcIjpcXFwiYXNzZXRzL2ljb24zMi5wbmdcXFwiLFxcXCI0OFxcXCI6XFxcImFzc2V0cy9pY29uNDgucG5nXFxcIixcXFwiMTI4XFxcIjpcXFwiYXNzZXRzL2ljb24xMjgucG5nXFxcIn0sXFxcImJyb3dzZXJfYWN0aW9uXFxcIjp7XFxcImRlZmF1bHRfaWNvblxcXCI6XFxcImFzc2V0cy9pY29uMTI4LnBuZ1xcXCIsXFxcImRlZmF1bHRfcG9wdXBcXFwiOlxcXCJzcmMvc3RhdGljL3BvcHVwLmh0bWxcXFwifSxcXFwiY29udGVudF9zY3JpcHRzXFxcIjpbe1xcXCJtYXRjaGVzXFxcIjpbXFxcImh0dHBzOi8vKi8qXFxcIl0sXFxcImpzXFxcIjpbXFxcInNyYy9zY3JpcHRzL2NvbnRlbnQudHN4XFxcIl19XSxcXFwiYmFja2dyb3VuZFxcXCI6e1xcXCJzY3JpcHRzXFxcIjpbXFxcInNyYy9zY3JpcHRzL2JhY2tncm91bmQudHNcXFwiXSxcXFwicGVyc2lzdGVudFxcXCI6ZmFsc2V9LFxcXCJvcHRpb25zX3VpXFxcIjp7XFxcInBhZ2VcXFwiOlxcXCJzcmMvc3RhdGljL29wdGlvbnMuaHRtbFxcXCIsXFxcIm9wZW5faW5fdGFiXFxcIjp0cnVlfX1cIik7Il0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6Im1hbmlmZXN0LmpzLm1hcCJ9
