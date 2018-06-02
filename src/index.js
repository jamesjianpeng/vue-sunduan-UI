import SdSelectTest from './select/index.vue';

const components = {
  SdSelectTest,
};

export default (Vue) => {
  Object.keys(components).map((component) => {
    Vue.component(components[component].name, components[component]);
  });
};

export {
  SdSelectTest,
};

/**
 *
 * 所有全局功能组件的出口
 *
 */
