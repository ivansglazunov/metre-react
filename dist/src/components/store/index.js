"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var params_1 = __importDefault(require("./params"));
exports.Params = params_1.default;
var props_1 = __importDefault(require("./props"));
exports.Props = props_1.default;
var state_1 = __importDefault(require("./state"));
exports.State = state_1.default;
exports.Context = react_1.default.createContext({
  get: function() {
    return {};
  },
  set: function() {
    return undefined;
  }
});
//# sourceMappingURL=index.js.map

//# sourceMappingURL={"version":3,"file":"index.js","sourceRoot":"","sources":["index.tsx"],"names":[],"mappings":";;;;;AAAA,gDAA0B;AAC1B,oDAA8B;AAuBrB,iBAvBF,gBAAM,CAuBE;AAtBf,kDAA4B;AAsBX,gBAtBV,eAAK,CAsBU;AArBtB,kDAA4B;AAqBJ,gBArBjB,eAAK,CAqBiB;AALhB,QAAA,OAAO,GAAG,eAAK,CAAC,aAAa,CAAS;IACjD,GAAG,EAAE,cAAM,OAAA,CAAC,EAAE,CAAC,EAAJ,CAAI;IACf,GAAG,EAAE,cAAM,OAAA,SAAS,EAAT,CAAS;CACrB,CAAC,CAAC"}
