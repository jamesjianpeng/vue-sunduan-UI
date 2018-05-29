<template lang="html">
  <div>
    <select
      :multiple="multiple"
      name="num"
      @change="change"
      :value="selectItem"
    >
      <option
        v-for="(item, index) in data"
        :value="item.name"
        v-html="item.name"
      />
    </select>
  </div>
</template>

<script>
export default {
  name: 'vue-sunduan-select',
  props: {
    data: {
      type: [Array],
      default() {
        return [];
      },
    },
    multiple: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  data() {
    return {
      selectItem: null,
    };
  },
  mounted() {
    this.selectItem = this.data[0].name;
  },
  methods: {
    change(event) {
      this.$emit('change', this.findItem(this.selectItem));
    },
    findItem(name) {
      return this.data.find((i) => Object.is(i.name, name)) || null;
    },
  },
};
</script>

<style lang="css">
</style>
