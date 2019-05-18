// Array.isArray()

const a = "vinicius"
const b = ["marcos"]

if (Array.isArray(a)) {
  a.forEach(console.log())
} else {
  console.log(a)
}

if (Array.isArray(b)) {
  b.forEach(console.log)
} else {
  console.log(b)
}
