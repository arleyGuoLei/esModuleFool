import a from './a'
import b from './b'

console.log('start!')

console.log(a)
console.log(b)

console.log('a.times => ', a.times)
console.log('a.time => ', a.time)

setTimeout(()=>{
  clearInterval(a.time)

  console.log('clearInterval a.times => ', a.times)
  console.log('clearInterval a.time => ', a.time)
}, 5000)

console.log('over!')