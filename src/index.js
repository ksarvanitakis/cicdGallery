import aunty from './images/aunty.png'
import './styles/main.scss'

//   // Create paragraph node
//   const p = document.createElement('p')
//   p.textContent = `I like ${myGame.name}.`
// // Create heading node
const search = document.createElement('INPUT')
search.setAttribute("type", "text");
const submitbtn = document.createElement('BUTTON')
submitbtn.textContent = "search"






// // Append heading node to the DOM
const app = document.querySelector('#root')
app.append(search)
app.append(submitbtn)