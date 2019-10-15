import { me, title } from './util'

console.log('b start: ', me)


/**
  console.log('b - oldTitle => ', title)
  title = 'new Title' // Uncaught ReferenceError: title is not defined
  console.log('b - newTitle => ', title)
*/

export default {
  me,
  title
}