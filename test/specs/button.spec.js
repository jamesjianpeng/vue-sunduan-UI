import button from '@/components/SdButton/SdButton.vue';
import {getVueExtend, clickEvent} from '../util';

describe('button', () => {
  it('button element type is  HTMLButtonElement', () => {
    const vm = getVueExtend(button, null);
    expect(vm.$el instanceof HTMLButtonElement).to.equal(true);
  });

  it('button num init is 0', () => {
    const vm = getVueExtend(button, null);
    expect(vm.num).to.equal(0);
  });

  it('button num add 1', () => {
    const vm = getVueExtend(button, null);
    clickEvent(vm);
    expect(vm.num).to.equal(1);
  });

  it('button num add 10', () => {
    const vm = getVueExtend(button, null);
    Array.apply(null, {length: 10}).map(() => {
      clickEvent(vm);
    });

    expect(vm.num).to.equal(10);
  });

  it('button num add 10000', () => {
    const vm = getVueExtend(button, null);
    Array.apply(null, {length: 10000}).map(() => {
      clickEvent(vm);
    });
    (vm.num).should.equal(10000);
  });
});
