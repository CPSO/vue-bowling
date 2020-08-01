import { mount } from '@vue/test-utils'
import Home from '@/components/home.vue'
import { BootstrapVue} from 'bootstrap-vue'


import { createLocalVue } from '@vue/test-utils'

// create an extended `Vue` constructor
const localVue = createLocalVue()

// install plugins as normal
localVue.use(BootstrapVue)

// pass the `localVue` to the mount options
mount(Home, {
  localVue
})


/* describe('Home.vue', () => {
  test('Check if button renders', () => {
    const wrapper = mount(Home)
    expect(wrapper.text()).toContain('counter: 0')
    wrapper.find('b-button').trigger('click')
  })
}); */

describe('Home.vue', () => {
    test('Check if home renders', () => {
        const wrapper = mount(Home,{localVue})
        expect(wrapper.exists()).toBe(true);
    })
})