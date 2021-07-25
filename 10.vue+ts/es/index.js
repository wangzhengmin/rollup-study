import { openBlock, createBlock } from 'vue';

var script = {
  name: "w-button"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("button", null, "按钮"))
}

script.render = render;
script.__file = "src/button.vue";

script.install = (app) => {
  app.components(script.name, script);
};

export default script;
