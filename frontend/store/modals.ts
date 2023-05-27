import { defineStore } from 'pinia'

export const useModalStore = defineStore('useModalStore', () => {
  let orderModal = ref(false)

  function mutationOrderModal (val: boolean) {
    orderModal.value = val
  }

  return { orderModal, mutationOrderModal }
})