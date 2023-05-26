import { defineStore } from 'pinia'

export const useFetchUserStore = defineStore('fetchUser', () => {
  const reactiveVar = ref()
  const dataUser = ref(null)

  async function fetchData() {
    const data = await fetch('')
    const res = await data.json()

    reactiveVar.value = res
  }

  return { reactiveVar, fetchData }
})