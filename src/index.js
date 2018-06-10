import SdSelectTest from './components/SdSelect/SdSelect.vue';
import SdApp from './components/SdApp/SdApp.vue';
import SdAppSideDrawer from './components/SdApp/SdAppSideDrawer.vue';
import SdAppToolbar from './components/SdApp/SdAppToolbar.vue';
import SdAppDrawer from './components/SdApp/SdAppDrawer.vue';
import SdAppContent from './components/SdApp/SdAppContent.vue';

const components = {
  SdSelectTest,
  SdApp,
  SdAppSideDrawer,
  SdAppToolbar,
  SdAppDrawer,
  SdAppContent,
};

export default (Vue) => {
  Object.keys(components).map((component) => {
    Vue.component(components[component].name, components[component]);
  });
};

export {
  SdSelectTest,
  SdApp,
  SdAppSideDrawer,
  SdAppToolbar,
  SdAppDrawer,
  SdAppContent,
};

/**
 *
 * 所有全局功能组件的出口
 *
 */
