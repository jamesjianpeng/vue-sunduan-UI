<template lang="html">
  <button type="button" name="button" @click="add">button</button>
</template>

<script>
export default {
  name: 'button-test',
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    add() {
      this.num++;
    },
  },
};
</script>

<style lang="css">
</style>
