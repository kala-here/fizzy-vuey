import { mount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'
import { describe, test, expect } from 'vitest'

describe('HomeView', () => {
  test('renders the home page with the correct title', () => {
    const wrapper = mount(HomeView)

    const title = wrapper.find('h1')
    expect(title.text()).toBe('This is a HOME page')
  })
})
