# Cocorita Vue.js plugin

[Vue.js](https://vuejs.org/) plugin for the [Cocorita](https://www.npmjs.com/package/cocorita) translation library.

## Installation
`npm install --save vue-cocorita`

## Getting started

**In your main.js:**
```Javascript
import Vue from 'vue';
import Cocorita from 'cocorita';
import VueCocorita from 'vue-cocorita';

// Instantiate Cocorita as usual
const coco = new Cocorita(/*...*/);
coco.load(/*...*/);

// Install vue-cocorita on Vue
Vue.use(VueCocorita, coco);
```

This will add `tr` and `coco` to Vue class, and `$tr` and `$coco` to any Vue instance (your components).  

Calling `Vue.tr()` or `vm.$tr()` is the same as calling `coco.tr()`.  
`Vue.coco` and `vm.coco` are references to the coco instance.

## Usage in components
You will be able to call Cocorita `tr` method directly from within vour Vue components by calling `$tr` on the Vue instance.  


**In interpolations:**
```Javascript
{{ $tr('Translate this') }}
```

**In scripts:**
```Javascript
export default {
  methods: {
    error() {
      alert($tr('An error occurred');
    };
  }
}
```

## Usage outside .vue files
```Javascript
const message = Vue.tr('Translate this');
```

## License

```
MIT License

Copyright (c) 2018 Valerio Bianchi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```