import { mount } from '@vue/test-utils'
import TheWelcome from '../src/components/TheWelcome.vue'
import { describe, test, expect, vi } from 'vitest'
import { fetchSimulator } from '../src/services/simulator.service'

vi.mock('./path/to/module.js', async (importOriginal) => {
  const mod = await importOriginal<typeof import('./path/to/module.js')>()
  return {
    ...mod,
    // replace some exports
    namedExport: vi.fn(),
  }
})
describe('TheWelcome', () => {
  test('displays product names fetched from API', async () => {
    const mockProducts = [
      { id: 1, name: 'Product 1', price: 10, description: 'Description 1' },
      { id: 2, name: 'Product 2', price: 20, description: 'Description 2' }
    ]

    window.fetch = vi.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockProducts)
      })
    )

    const wrapper = mount(TheWelcome)

    await wrapper.vm.$nextTick()

    const productNames = wrapper.findAll('li').map((li) => li.text())

    expect(productNames).toEqual(['Product 1', 'Product 2'])
  })
})
