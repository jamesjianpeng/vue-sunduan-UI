import {SdSelectTest} from '@/index.js';
import select from '@/select/index.vue';
import {getVueExtend} from '../util';

describe('SdSelectTest type', () => {
  it('SdSelectTest shoudle a object', () => {
    expect(typeof SdSelectTest).to.equal('object');
  });
});

describe('select type', () => {
  it('select shoudle a object', () => {
    expect(typeof select).to.equal('object');
  });
});

// const hook = {
//   'beforeCreate': 'beforeCreate',
//   'created': 'created',
//   'beforeMount': 'beforeMount',
//   'mounted': 'mounted',
//   'beforeUpdate': 'beforeUpdate',
//   'updated': 'updated',
//   'activated': 'activated',
//   'deactivated': 'deactivated',
//   'beforeDestroy': 'beforeDestroy',
//   'destroyed': 'destroyed'
// };

const list = [
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
];

describe('select testz', () => {
  it('$el is HTMLSelectElement', () => {
    const vm = getVueExtend(select, null);
    expect(vm.$el instanceof HTMLSelectElement)
      .to.equal(true);
  });

  it('props multiple default is false', () => {
    const vm = getVueExtend(select, null);
    expect(typeof vm.multiple)
      .to.equal('boolean');
  });
//
  it('props data default is array', () => {
    const vm = getVueExtend(select, null);
    expect(Array.isArray(vm.data))
      .to.equal(true);
  });

  it('props data is array 6', () => {
    const vm = getVueExtend(select, {data: list});
    expect(Array.isArray(vm.data)).to.equal(true);
    expect(vm.data.length).to.equal(6);
  });

  it('$el.childNodes element type is HTMLOptionElement', () => {
    const vm = getVueExtend(select, {data: list});
    expect(typeof vm.change).to.equal('function');

    const index = 1;
    const optionElement = vm.$el.childNodes[index];
    expect(optionElement instanceof HTMLOptionElement).to.equal(true);
  });
});
