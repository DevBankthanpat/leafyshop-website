// stores/product.ts
import { defineStore } from 'pinia'

type Product = {
  id: number
  name: string
  image: string
  price: number
  description: string
}

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [] as Product[],
  }),
  actions: {
    fetchProducts() {
      this.products = [
        { id: 1, name: 'Leafy Mug', image: 'https://picsum.photos/400?1', price: 290, description: 'แก้วมัคสีเขียวธรรมชาติ' },
        { id: 2, name: 'Eco Tote Bag', image: 'https://picsum.photos/400?2', price: 350, description: 'ถุงผ้าจากวัสดุรีไซเคิล' },
        { id: 3, name: 'Bamboo Spoon Set', image: 'https://picsum.photos/400?3', price: 150, description: 'ชุดช้อนส้อมไม้ไผ่' },
        { id: 4, name: 'Green Tea Candle', image: 'https://picsum.photos/400?4', price: 450, description: 'เทียนหอมกลิ่นชาเขียว' },
      ]
    },
  },
})
