'use strict';

var vue = require('vue');

var script = {
  name: "w-button"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createBlock("button", null, "按钮"))
}

script.render = render;
script.__file = "src/button.vue";

script.install = (app) => {
  app.components(script.name, script);
};

module.exports = script;
