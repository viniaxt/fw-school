const people = [
  { name: "Marcos", age: 21 },
  { name: "Vinicius", age: 19 },
  { name: "Roberto", age: 22 },
  { name: "Marcelo", age: 38 }
]

function customMap(list, callback) {
  const all = []
  const max = list.length
  let index = 0

  for (; index < max; index++) {
    const currentItem = list[index]
    const transformedItem = callback(currentItem)
    all.push(transformedItem)
  }

  return all
}

const allAges2 = customMap(people, function(person) {
  return person.age
})

console.log(allAges2)
