import { mount } from '@vue/test-utils'
import TheWelcome from '@/components/TheWelcome.vue'
import { describe, test, expect, vi } from 'vitest'

window.fetch = vi.fn()
function createFetchResponse(data) {
  return { json: () => new Promise((resolve) => resolve(data)) }
}
describe('TheWelcome', () => {
  test('displays product names fetched from API', async () => {
    const mockProducts = [
      { id: 1, name: 'Product 1', price: 10, description: 'Description 1' },
      { id: 2, name: 'Product 2', price: 20, description: 'Description 2' }
    ]

    fetch.mockResolvedValue(createFetchResponse(mockProducts))

    const wrapper = mount(TheWelcome)

    await wrapper.vm.$nextTick()

    const productNames = wrapper.findAll('li').map((li) => li.text())

    expect(productNames).toEqual(['Product 1', 'Product 2'])
  })

  // test('displays spinner when products are being fetched', async () => {
  //   window.fetch = vi.fn().mockImplementation(() => new Promise(() => {}))

  //   const wrapper = mount(TheWelcome)

  //   await wrapper.vm.$nextTick()

  //   const spinner = wrapper.find('.spinner-border')

  //   expect(spinner.exists()).toBe(true)
  // })
})
