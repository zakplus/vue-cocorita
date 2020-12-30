import test from 'tape';
import Vue from './VueMock';
import Cocorita from './CocoritaMock';
import VueCocorita from '../dist/index';

test('Installation tests', (t) => {
  const coco = new Cocorita();
  Vue.use(VueCocorita, coco);
  const vue = new Vue();

  t.equal(Vue.coco, coco, 'Vue.coco should be the same coco instance passed to Vue.use');
  t.equal(typeof Vue.tr, 'function', 'Should create Vue static method "tr"');

  t.equal(vue.$coco, coco, 'vue.$coco should be the same coco instance passed to Vue.use');
  t.equal(typeof vue.$tr, 'function', 'Should create Vue instance method "$tr"');

  t.end();
});

test('Functionality tests', (t) => {
  const coco = new Cocorita();
  Vue.use(VueCocorita, coco);
  const vue = new Vue();

  t.deepEqual(Vue.tr('a', 'b', 'c'), ['a', 'b', 'c'], 'Vue.tr should call cocorita instance "tr" method');
  t.deepEqual(vue.$tr(1, 2, 3), [1, 2, 3], 'vue.$tr should call cocorita instance "tr" method');

  t.end();
});
