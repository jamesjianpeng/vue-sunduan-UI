<template lang="html">
  <div class="sd-app-side-drawer">
    <slot name="sd-app-side-drawer-left"></slot>
    <mian class="sd-app-container">
      <slot name="sd-app-toolbar"></slot>
      <slot name="sd-app-content"></slot>
    </mian>
    <slot name="sd-app-side-drawer-right"></slot>
  </div>
</template>

<script>
export default {
  name: 'SdAppSideDrawer',
};
</script>

<style lang="scss">
</style>
