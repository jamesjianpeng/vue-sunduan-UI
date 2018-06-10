<template lang="html">
  <div>
    <div class="">
      <sd-app-side-drawer>
        <div slot="sd-app-side-drawer-left">
          <sd-app-drawer></sd-app-drawer>
        </div>
        <div slot="sd-app-toolbar">
          <sd-app-toolbar></sd-app-toolbar>
        </div>
        <div slot="sd-app-content">
          <sd-app-content></sd-app-content>
        </div>
        <div slot="sd-app-side-drawer-left">
          <sd-app-drawer></sd-app-drawer>
        </div>
      </sd-app-side-drawer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      hello: 'hello vue-sunduan-select, my name is james q>_<p!! _>o<_ ',
      listOne: [
        {
          name: 'one',
          id: 1,
        },
        {
          name: 'two',
          id: 2,
        },
        {
          name: 'three',
          id: 3,
        },
        {
          name: 'four',
          id: 4,
        },
        {
          name: 'five',
          id: 5,
        },
        {
          name: 'six',
          id: 6,
        },
      ],
      listTwo: [
        {
          name: 'one1',
          id: 11,
        },
        {
          name: 'two2',
          id: 22,
        },
        {
          name: 'three3',
          id: 33,
        },
        {
          name: 'four4',
          id: 44,
        },
        {
          name: 'five5',
          id: 55,
        },
        {
          name: 'six6',
          id: 66,
        },
      ],
    };
  },
  created() {
    console.log(this, '====');
  },
  methods: {
    getSelectItem(options) {
      const {name, id} = options;
      console.log(name, id);
    },
  },
};
</script>

<style lang="scss">
.hello {
  font-size: 24px;
  color: #333;
  background: #eee;
  .test {
    font-size: 50px;
  }
}
.hello-two {
  .test {
    font-size: 10px;
  }
}
</style>
