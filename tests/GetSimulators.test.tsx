import { mount, flushPromises } from '@vue/test-utils'
import Simulators from '@/components/GetSimulators.vue'
import { describe, test, expect, vi } from 'vitest'
import { fetchSimulator } from '@/services/simulator.service'

vi.mock('@/services/simulator.service.ts', async (importOriginal) => {
  const service = await importOriginal<typeof import('@/services/simulator.service')>()

  return {
    ...service,
    fetchSimulator: vi.fn(() =>
      Promise.resolve([
        { id: 1, name: 'simulator 1', price: 10, description: 'Description 1' },
        { id: 2, name: 'simulator 2', price: 20, description: 'Description 2' }
      ])
    )
  }
})

describe('Simulators', () => {
  test('displays simulator names fetched from API', async () => {
    const wrapper = mount(Simulators)
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toContain('Simulators')
    await flushPromises()

    const simulatorNames = wrapper.findAll('li').map((li) => li.text())
    expect(simulatorNames.length).toBe(2)
    expect(fetchSimulator).toHaveBeenCalledOnce()

    expect(simulatorNames).toEqual(['simulator 1', 'simulator 2'])
  })
})
