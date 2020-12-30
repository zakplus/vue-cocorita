/* eslint-disable no-param-reassign */
const VueCocorita = {
  install(Vue, coco) {
    Vue.coco = coco;
    Vue.tr = (...rest) => coco.tr(...rest);
    Vue.prototype.$tr = (...rest) => coco.tr(...rest);
    Vue.prototype.$coco = coco;
  },
};

export default VueCocorita;
