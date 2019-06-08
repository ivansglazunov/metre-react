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
    value = _a.value,
    context = _a.context,
    def = _a.default,
    children = _a.children;
  var ResultContext = context || _1.Context;
  return react_1.default.createElement(
    ResultContext.Provider,
    { value: { value: value, set: set } },
    children
  );
};
exports.default = exports.Provider;
//# sourceMappingURL=props.js.map

//# sourceMappingURL={"version":3,"file":"props.js","sourceRoot":"","sources":["props.tsx"],"names":[],"mappings":";;;;;AAAA,gDAA0B;AAE1B,uBAAmD;AAOtC,QAAA,QAAQ,GAAG,UAAC,EAMhB;QALP,YAAG,EACH,gBAAK,EACL,oBAAO,EACP,gBAAY,EACZ,sBAAQ;IAER,IAAM,aAAa,GAAG,OAAO,IAAI,UAAO,CAAC;IACzC,OAAO,CACL,8BAAC,aAAa,CAAC,QAAQ,IAAC,KAAK,EAAE,EAAE,KAAK,OAAA,EAAE,GAAG,KAAA,EAAE,IAC1C,QAAQ,CACc,CAC1B,CAAC;AACJ,CAAC,CAAC;AAEF,kBAAe,gBAAQ,CAAC"}
