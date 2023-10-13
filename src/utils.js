export function load(key) {
  let i = localStorage.getItem(key)
  if (typeof(i) == "undefined") {
    return undefined
  }
  return JSON.parse(i)
}

export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}