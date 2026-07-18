export const storage = {
  setItem: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
  },
  getItem: (key) => {
    const item = localStorage.getItem(key)
    if (!item) {
      return null
    }
    try {
      return JSON.parse(item)
    } catch (error) {
      return item
    }
  },
  removeItem: (key) => {
    localStorage.removeItem(key)
  },
  clear: () => {
    localStorage.clear()
  },
  length: () => {
    return localStorage.length
  },
}
