/**
 * spread operator is for spreading - spliting.
 */

let front = ['react', 'vue', 'angular']
let back = ['python', 'ruby', 'nodejs']

// creting an array
console.log(...'will')

// creating a string
console.log(...front)

let fullStack = [...front, 'RxJS', ...back]
console.log(fullStack)