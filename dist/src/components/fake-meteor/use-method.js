"use strict";
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
var lodash_1 = require("lodash");
exports.defaultMethodCall = function(name) {
  var args = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }
  return null;
};
exports.defaultArgs = [];
exports.Context = react_1.default.createContext(exports.defaultMethodCall);
exports.default = function(name, args, PropsContext) {
  if (args === void 0) {
    args = exports.defaultArgs;
  }
  var _a = react_1.useState(null),
    error = _a[0],
    setError = _a[1];
  var _b = react_1.useState(),
    prevName = _b[0],
    setPrevName = _b[1];
  var _c = react_1.useState(),
    prevArgs = _c[0],
    setPrevArgs = _c[1];
  var _d = react_1.useState(),
    result = _d[0],
    setResult = _d[1];
  var call = react_1.useContext(PropsContext || exports.Context);
  react_1.useEffect(
    function() {
      if (name !== prevName || !lodash_1.isEqual(args, prevArgs)) {
        setPrevArgs(args);
        setPrevName(name);
        call.apply(
          void 0,
          [name].concat(args, [
            function(error, result) {
              setError(error);
              setResult(result);
            }
          ])
        );
      }
    },
    [name, args, prevName, setPrevName, prevArgs, setPrevArgs, call]
  );
  return [result, error];
};
//# sourceMappingURL=use-method.js.map

//# sourceMappingURL={"version":3,"file":"use-method.js","sourceRoot":"","sources":["use-method.tsx"],"names":[],"mappings":";;;;;;;;;AAAA,6CAA+D;AAC/D,iCAAiC;AAIpB,QAAA,iBAAiB,GAAG,UAAC,IAAI;IAAE,cAAO;SAAP,UAAO,EAAP,qBAAO,EAAP,IAAO;QAAP,6BAAO;;IAAK,OAAA,IAAI;AAAJ,CAAI,CAAC;AAC5C,QAAA,WAAW,GAAG,EAAE,CAAC;AAEjB,QAAA,OAAO,GAAG,eAAK,CAAC,aAAa,CAAc,yBAAiB,CAAC,CAAC;AAE3E,mBAAe,UACb,IAAY,EACZ,IAAyB,EACzB,YAAyC;IADzC,qBAAA,EAAA,OAAc,mBAAW;IAGnB,IAAA,2BAAkC,EAAjC,aAAK,EAAE,gBAA0B,CAAC;IACnC,IAAA,uBAAoC,EAAnC,gBAAQ,EAAE,mBAAyB,CAAC;IACrC,IAAA,uBAA2C,EAA1C,gBAAQ,EAAE,mBAAgC,CAAC;IAC5C,IAAA,uBAAgC,EAA/B,cAAM,EAAE,iBAAuB,CAAC;IAEvC,IAAM,IAAI,GAAG,kBAAU,CAAc,YAAY,IAAI,eAAO,CAAC,CAAC;IAE9D,iBAAS,CAAC;QACR,IAAI,IAAI,KAAK,QAAQ,IAAI,CAAC,gBAAO,CAAC,IAAI,EAAE,QAAQ,CAAC,EAAE;YACjD,WAAW,CAAC,IAAI,CAAC,CAAC;YAClB,WAAW,CAAC,IAAI,CAAC,CAAC;YAClB,IAAI,gBAAC,IAAI,SAAK,IAAI,GAAE,UAAC,KAAK,EAAE,MAAM;oBAChC,QAAQ,CAAC,KAAK,CAAC,CAAC;oBAChB,SAAS,CAAC,MAAM,CAAC,CAAC;gBACpB,CAAC,IAAE;SACJ;IACH,CAAC,EAAE,CAAC,IAAI,EAAE,IAAI,EAAE,QAAQ,EAAE,WAAW,EAAE,QAAQ,EAAE,WAAW,EAAE,IAAI,CAAC,CAAC,CAAC;IAErE,OAAO,CAAC,MAAM,EAAE,KAAK,CAAC,CAAC;AACzB,CAAC,EAAC"}
