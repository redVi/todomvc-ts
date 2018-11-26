import TodoCount from '@/components/TodoCount.vue';
import { shallowMount } from '@vue/test-utils';

describe('TodoCount.vue', () => {
  const wrapper = shallowMount( TodoCount, { propsData: { list: 2 } } );

  it('correctly declines words', () => {
    // exact text match
    expect( wrapper.find('strong').text() ).toBe('2 items left');

    // approximate text match
    wrapper.setProps({ list: 1 });
    expect( wrapper.find('strong').text() ).toContain('item left');

    wrapper.setProps({ list: 378 });
    expect( wrapper.find('strong').text() ).toContain('items left');
  });
});
