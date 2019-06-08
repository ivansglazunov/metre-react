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
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
exports.default = function(generator) {
  return function(Component) {
    return function(props) {
      return react_1.default.createElement(
        Component,
        __assign({}, props, generator(props))
      );
    };
  };
};
//# sourceMappingURL=with-tracker.js.map

//# sourceMappingURL={"version":3,"file":"with-tracker.js","sourceRoot":"","sources":["with-tracker.tsx"],"names":[],"mappings":";;;;;;;;;;;;;;;;AAAA,gDAA0B;AAE1B,mBAAe,UACb,SAAqC;IAErC,OAAO,UAAC,SAAuC;QAC7C,OAAO,UAAC,KAAa;YACnB,OAAO,8BAAC,SAAS,eAAK,KAAK,EAAM,SAAS,CAAC,KAAK,CAAC,EAAI,CAAC;QACxD,CAAC,CAAC;IACJ,CAAC,CAAC;AACJ,CAAC,EAAC"}
