import { mount } from '@vue/test-utils'
import SimulatorsView from '@/views/SimulatorsView.vue'
import { describe, test, expect } from 'vitest'

describe('SimulatorsView', () => {
  test('renders the Simulators component', () => {
    const wrapper = mount(SimulatorsView)

    const simulatorsComponent = wrapper.find('[data-test-id="simulators"]')
    expect(simulatorsComponent.exists()).toBe(true)
  })
})
