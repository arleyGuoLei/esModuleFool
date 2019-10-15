import { me, title } from './util'

console.log('a start: ', me)

me.name = 'js'

/**
  console.log('a - oldTitle => ', title)
  title = 'new Title' // Uncaught ReferenceError: title is not defined
  console.log('a - newTitle => ', title)
*/
export let times = 0
export const time = setInterval(()=>{
  times = times + 1
  console.log(times, ' => ', me)
}, 1000)

export default {
  me,
  title,
  times,
  time
}