import { writable } from 'svelte/store'

function createStore() {
  // The default value of the store is defined at runtime in $components/layout/Language.svelte
  const { subscribe, set } = writable()

  return {
    subscribe,
    change: (newLanguage: string) => {
      set(newLanguage)
      localStorage.setItem('language', newLanguage)
    }
  }
}

export default createStore()