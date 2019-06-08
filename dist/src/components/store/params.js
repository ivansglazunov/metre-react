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
var jsonpack = __importStar(require("jsonpack/main"));
var _ = __importStar(require("lodash"));
var queryString = __importStar(require("query-string"));
var react_1 = __importStar(require("react"));
var react_router_1 = require("react-router");
var _1 = require("./");
exports.getValue = function(history, name) {
  var search = queryString.parse(_.get(history, "location.search"));
  var _packed = _.get(search, name);
  var value = _packed ? jsonpack.unpack(_packed) : {};
  return value;
};
exports.setValue = function(history, name, data) {
  var _a;
  var search = queryString.parse(_.get(history, "location.search"));
  var _packed = _.get(search, name);
  var value = _packed ? jsonpack.unpack(_packed) : {};
  var newSearch = queryString.stringify(
    __assign(
      {},
      search,
      ((_a = {}), (_a[name] = jsonpack.pack(_.defaults(data, value))), _a)
    )
  );
  history.push({
    search: "?" + newSearch
  });
};
exports.Component = function(_a) {
  var history = _a.history,
    name = _a.name,
    context = _a.context,
    def = _a.default,
    children = _a.children;
  var ResultContext = context || _1.Context;
  react_1.useEffect(function() {
    var value = exports.getValue(history, name);
    exports.setValue(history, name, __assign({}, def, value));
    // eslint-disable-next-line
  }, []);
  return react_1.default.createElement(
    ResultContext.Provider,
    {
      value: {
        get: function() {
          return exports.getValue(history, name);
        },
        set: function(data) {
          return exports.setValue(history, name, data);
        }
      }
    },
    children
  );
};
exports.Provider = react_router_1.withRouter(exports.Component);
exports.default = exports.Provider;
//# sourceMappingURL=params.js.map

//# sourceMappingURL={"version":3,"file":"params.js","sourceRoot":"","sources":["params.tsx"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;AAAA,sDAA0C;AAC1C,wCAA4B;AAC5B,wDAA4C;AAC5C,6CAAyC;AACzC,6CAA0C;AAE1C,uBAAmD;AAUtC,QAAA,QAAQ,GAAG,UAAC,OAAO,EAAE,IAAI;IACpC,IAAM,MAAM,GAAG,WAAW,CAAC,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,OAAO,EAAE,iBAAiB,CAAC,CAAC,CAAC;IACpE,IAAM,OAAO,GAAG,CAAC,CAAC,GAAG,CAAC,MAAM,EAAE,IAAI,CAAC,CAAC;IACpC,IAAM,KAAK,GAAG,OAAO,CAAC,CAAC,CAAC,QAAQ,CAAC,MAAM,CAAC,OAAO,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC;IACtD,OAAO,KAAK,CAAC;AACf,CAAC,CAAC;AAEW,QAAA,QAAQ,GAAG,UAAC,OAAO,EAAE,IAAI,EAAE,IAAI;;IAC1C,IAAM,MAAM,GAAG,WAAW,CAAC,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,OAAO,EAAE,iBAAiB,CAAC,CAAC,CAAC;IACpE,IAAM,OAAO,GAAG,CAAC,CAAC,GAAG,CAAC,MAAM,EAAE,IAAI,CAAC,CAAC;IACpC,IAAM,KAAK,GAAG,OAAO,CAAC,CAAC,CAAC,QAAQ,CAAC,MAAM,CAAC,OAAO,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC;IACtD,IAAM,SAAS,GAAG,WAAW,CAAC,SAAS,cAClC,MAAM,eACR,IAAI,IAAG,QAAQ,CAAC,IAAI,CAAC,CAAC,CAAC,QAAQ,CAAC,IAAI,EAAE,KAAK,CAAC,CAAC,OAC9C,CAAC;IACH,OAAO,CAAC,IAAI,CAAC;QACX,MAAM,EAAE,GAAG,GAAG,SAAS;KACxB,CAAC,CAAC;AACL,CAAC,CAAC;AAEW,QAAA,SAAS,GAAG,UAAC,EAMjB;QALP,oBAAO,EACP,cAAI,EACJ,oBAAO,EACP,gBAAY,EACZ,sBAAQ;IAER,IAAM,aAAa,GAAG,OAAO,IAAI,UAAO,CAAC;IAEzC,iBAAS,CAAC;QACR,IAAM,KAAK,GAAG,gBAAQ,CAAC,OAAO,EAAE,IAAI,CAAC,CAAC;QACtC,gBAAQ,CAAC,OAAO,EAAE,IAAI,eAAO,GAAG,EAAK,KAAK,EAAG,CAAC;QAC9C,2BAA2B;IAC7B,CAAC,EAAE,EAAE,CAAC,CAAC;IAEP,OAAO,CACL,8BAAC,aAAa,CAAC,QAAQ,IACrB,KAAK,EAAE;YACL,GAAG,EAAE,cAAM,OAAA,gBAAQ,CAAC,OAAO,EAAE,IAAI,CAAC,EAAvB,CAAuB;YAClC,GAAG,EAAE,UAAA,IAAI,IAAI,OAAA,gBAAQ,CAAC,OAAO,EAAE,IAAI,EAAE,IAAI,CAAC,EAA7B,CAA6B;SAC3C,IAEA,QAAQ,CACc,CAC1B,CAAC;AACJ,CAAC,CAAC;AAEW,QAAA,QAAQ,GAAG,yBAAU,CAAC,iBAAS,CAAC,CAAC;AAE9C,kBAAe,gBAAQ,CAAC"}
