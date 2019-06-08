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
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var view_1 = __importDefault(require("./view"));
var store_1 = require("../store");
exports.default = function() {
  var _a = react_1.useContext(store_1.Context),
    get = _a.get,
    set = _a.set;
  var value = get();
  react_1.useEffect(function() {
    if (typeof value.currentUser !== "number")
      set(__assign({}, value, { currentUser: 0 }));
    if (typeof value.count !== "number") set(__assign({}, value, { count: 0 }));
  });
  return react_1.default.createElement(view_1.default, {
    currentUser: value.currentUser,
    setCurrentUser: function(currentUser) {
      return set(__assign({}, value, { currentUser: currentUser }));
    },
    count: value.count,
    setCount: function(count) {
      return set(__assign({}, value, { count: count }));
    }
  });
};
//# sourceMappingURL=store.js.map

//# sourceMappingURL={"version":3,"file":"store.js","sourceRoot":"","sources":["store.tsx"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;AAAA,6CAAqD;AAErD,gDAA6B;AAC7B,kCAAmC;AAEnC,mBAAe;IACP,IAAA,wCAAkC,EAAhC,YAAG,EAAE,YAA2B,CAAC;IACzC,IAAM,KAAK,GAAG,GAAG,EAAE,CAAC;IAEpB,iBAAS,CAAC;QACR,IAAI,OAAO,KAAK,CAAC,WAAW,KAAK,QAAQ;YACvC,GAAG,cAAM,KAAK,IAAE,WAAW,EAAE,CAAC,IAAG,CAAC;QACpC,IAAI,OAAO,KAAK,CAAC,KAAK,KAAK,QAAQ;YAAE,GAAG,cAAM,KAAK,IAAE,KAAK,EAAE,CAAC,IAAG,CAAC;IACnE,CAAC,CAAC,CAAC;IAEH,OAAO,CACL,8BAAC,cAAO,IACN,WAAW,EAAE,KAAK,CAAC,WAAW,EAC9B,cAAc,EAAE,UAAA,WAAW,IAAI,OAAA,GAAG,cAAM,KAAK,IAAE,WAAW,aAAA,IAAG,EAA9B,CAA8B,EAC7D,KAAK,EAAE,KAAK,CAAC,KAAK,EAClB,QAAQ,EAAE,UAAA,KAAK,IAAI,OAAA,GAAG,cAAM,KAAK,IAAE,KAAK,OAAA,IAAG,EAAxB,CAAwB,GAC3C,CACH,CAAC;AACJ,CAAC,EAAC"}
