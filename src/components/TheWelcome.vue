<script setup lang="ts">
import { ref } from 'vue'
import { fetchSimulator } from '@/services/simulator.service'

interface Simulator {
  id: number
  name: string
  price: number
  description: string
}

const simulators = ref<Simulator[]>([])

fetchSimulator()
  .then((data) => {
    simulators.value = data // Update the simulators ref with the fetched data
  })
  .catch((error) => {
    console.error('Error fetching simulators:', error)
  })
</script>

<template>
  <div class="card m-3">
    <h5 class="card-header text-center">Simulators</h5>
    <div class="card-body">
      <div v-if="simulators.length">
        <ul class="mb-0">
          <li v-for="simulator in simulators" :key="simulator.id">{{ simulator.name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
