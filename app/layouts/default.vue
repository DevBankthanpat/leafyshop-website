<template>
  <div class="min-h-screen bg-gray-50 text-gray-800">
    <header class="border-b bg-white">
      <div class="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <NuxtLink to="/" class="font-bold text-xl">LeafyShop</NuxtLink>
        <nav class="text-sm">
          <NuxtLink to="/products" class="hover:underline">Products</NuxtLink>
        </nav>
      </div>
    </header>

    <main class="max-w-5xl mx-auto px-4 py-6">
      <slot />
    </main>
  </div>
</template>
