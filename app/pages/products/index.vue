<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">สินค้าทั้งหมด</h1>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <ProductCard
        v-for="item in products"
        :key="item.id"
        :product="item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
    import { useProductStore } from '~/stores/product'

    const store = useProductStore()
    const products = computed(() => store.products)

    onMounted(() => {
        if (!store.products.length) store.fetchProducts()
    })
</script>