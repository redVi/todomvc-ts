import TodoFilters from '@/components/TodoFilters.vue';
import { shallowMount } from '@vue/test-utils';

describe('TodoFilter.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(TodoFilters);
    wrapper.setData({ selectedFilter: 'active' });
  });

  it('has filters', () => {
    expect( wrapper.find('.filters').exists() ).toBe(true);
  });

  it('correct change active class', () => {
    // default element with active class
    expect( wrapper.find('.filters a').classes() ).toContain('selected');

    // second element with active class after click
    wrapper.findAll('.filters a').at(1).trigger('click');
    expect( wrapper.findAll('.filters a').at(1).classes() ).toContain('selected');
  });

  it('correct change filter name with "setFilter" method', () => {
    wrapper.vm.setFilter('all');

    expect( wrapper.emitted().filter ).toBeDefined();
    expect( wrapper.vm.selectedFilter ).toBe('all');
  });
});
