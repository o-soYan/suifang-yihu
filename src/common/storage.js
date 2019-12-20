let db = {
  save (key, value) {
    sessionStorage.setItem(key, JSON.stringify(value))
  },
  get (key, defaultValue = {}) {
    if (!key) return
    return JSON.parse(sessionStorage.getItem(key))
  },
  remove (key) {
    if (!key) return
    sessionStorage.removeItem(key)
  },
  clear () {
    sessionStorage.clear()
  }
}

export default db
