"use strict";
var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __importStar =
  (this && this.__importStar) ||
  function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var _1 = require("./");
exports.Provider = function(_a) {
  var context = _a.context,
    _b = _a.default,
    def = _b === void 0 ? {} : _b,
    children = _a.children;
  var _c = react_1.useState(def),
    value = _c[0],
    set = _c[1];
  var ResultContext = context || _1.Context;
  return react_1.default.createElement(
    ResultContext.Provider,
    {
      value: {
        get: function() {
          return value;
        },
        set: function(data) {
          return set(__assign({}, data));
        }
      }
    },
    children
  );
};
exports.default = exports.Provider;
//# sourceMappingURL=state.js.map

//# sourceMappingURL={"version":3,"file":"state.js","sourceRoot":"","sources":["state.tsx"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;AAAA,6CAAwC;AAExC,uBAAmD;AAItC,QAAA,QAAQ,GAAG,UAAC,EAAgD;QAA9C,oBAAO,EAAE,eAAiB,EAAjB,6BAAiB,EAAE,sBAAQ;IACvD,IAAA,0BAA4B,EAA3B,aAAK,EAAE,WAAoB,CAAC;IACnC,IAAM,aAAa,GAAG,OAAO,IAAI,UAAO,CAAC;IACzC,OAAO,CACL,8BAAC,aAAa,CAAC,QAAQ,IACrB,KAAK,EAAE,EAAE,GAAG,EAAE,cAAM,OAAA,KAAK,EAAL,CAAK,EAAE,GAAG,EAAE,UAAA,IAAI,IAAI,OAAA,GAAG,cAAM,IAAI,EAAG,EAAhB,CAAgB,EAAE,IAEzD,QAAQ,CACc,CAC1B,CAAC;AACJ,CAAC,CAAC;AAEF,kBAAe,gBAAQ,CAAC"}
