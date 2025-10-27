<template>
  <NuxtLink :to="`/products/${product.id}`" class="block border rounded-lg p-4 bg-white hover:shadow">
    <img :src="product.image" alt="" class="rounded mb-2 w-full h-36 object-cover" />
    <h2 class="font-semibold text-lg leading-tight line-clamp-2">{{ product.name }}</h2>
    <p class="text-green-600 font-medium mt-1">{{ product.price }} ฿</p>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  product: {
    id: number
    name: string
    image: string
    price: number
    description?: string
  }
}>()
</script>
