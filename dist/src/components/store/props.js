"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var _1 = require("./");
exports.Provider = function(_a) {
  var set = _a.set,
    get = _a.get,
    context = _a.context,
    def = _a.default,
    children = _a.children;
  var ResultContext = context || _1.Context;
  return react_1.default.createElement(
    ResultContext.Provider,
    { value: { get: get, set: set } },
    children
  );
};
exports.default = exports.Provider;
//# sourceMappingURL=props.js.map

//# sourceMappingURL={"version":3,"file":"props.js","sourceRoot":"","sources":["props.tsx"],"names":[],"mappings":";;;;;AAAA,gDAA0B;AAE1B,uBAA2D;AAI9C,QAAA,QAAQ,GAAG,UAAC,EAMhB;QALP,YAAG,EACH,YAAG,EACH,oBAAO,EACP,gBAAY,EACZ,sBAAQ;IAER,IAAM,aAAa,GAAG,OAAO,IAAI,UAAO,CAAC;IACzC,OAAO,CACL,8BAAC,aAAa,CAAC,QAAQ,IAAC,KAAK,EAAE,EAAE,GAAG,KAAA,EAAE,GAAG,KAAA,EAAE,IACxC,QAAQ,CACc,CAC1B,CAAC;AACJ,CAAC,CAAC;AAEF,kBAAe,gBAAQ,CAAC"}
