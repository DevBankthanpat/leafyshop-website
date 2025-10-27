<!-- app/pages/products/[id].vue -->
<template>
  <div v-if="product">
    <div class="flex gap-6">
      <img :src="product.image" class="rounded w-60 h-60 object-cover" />
      <div>
        <h1 class="text-3xl font-bold mb-2">{{ product.name }}</h1>
        <p class="text-green-700 font-semibold text-xl mb-4">{{ product.price }} ฿</p>
        <p class="text-gray-700 mb-6">{{ product.description }}</p>

        <button
          class="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
          @click="addToCart(product.id)"
        >
          เพิ่มลงตะกร้า
        </button>
      </div>
    </div>
  </div>

  <div v-else class="text-gray-500">ไม่พบสินค้า</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useProductStore } from '~/stores/product'

const route = useRoute()
const store = useProductStore()

const product = computed(() =>
  store.products.find(p => p.id === Number(route.params.id))
)

onMounted(() => {
  if (!store.products.length) store.fetchProducts()
})

function addToCart(id: number) {
  console.log('add to cart', id)
}
</script>
