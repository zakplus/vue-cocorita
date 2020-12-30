"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* eslint-disable no-param-reassign */
var VueCocorita = {
  install: function install(Vue, coco) {
    Vue.coco = coco;

    Vue.tr = function () {
      return coco.tr.apply(coco, arguments);
    };

    Vue.prototype.$tr = function () {
      return coco.tr.apply(coco, arguments);
    };

    Vue.prototype.$coco = coco;
  }
};
var _default = VueCocorita;
exports["default"] = _default;