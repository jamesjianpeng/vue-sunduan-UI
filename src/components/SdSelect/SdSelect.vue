<template lang="html">
    <select
      :multiple="multiple"
      name="num"
      @change="change"
      v-model="getSelectItem"
    >
      <option
        v-for="(item, index) in data"
        :value="item.name"
        v-html="item.name"
      />
    </select>
</template>

<script>
export default {
  name: 'sd-select-test',
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
      selectItem: '',
      text: 'select',
    };
  },
  mounted() {
    // console.log(this, 'this');
    // console.log(this.$el instanceof HTMLSelectElement, 'this.$el');
    this.selectItem = this.data[0] ? this.data[0].name : '';
  },
  computed: {
    getSelectItem: {
      get() {
        if (!this.selectItem) this.selectItem = this.multiple ? [] : '';
        return this.selectItem;
      },
      set(val) {
        this.selectItem = val;
      },
    },
  },
  methods: {
    change(event) {
      this.$emit('change', this.findItem(this.selectItem));
    },
    findItem(name) {
      return this.data.find((i) => Object.is(i.name, name)) || {};
    },
  },
};
</script>

<style lang="scss">
</style>
