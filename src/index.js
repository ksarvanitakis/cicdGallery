import aunty from './images/aunty.png'
import './styles/main.scss'

const search = document.createElement('INPUT');
search.setAttribute("list", "dataList");

const dataList = document.createElement('datalist');
dataList.setAttribute("id", "dataList");

const option = document.createElement('option');
option.setAttribute("value", "chocolate");
dataList.appendChild(option);

search.appendChild(dataList);

const submitbtn = document.createElement('BUTTON');
submitbtn.textContent = "search"

const searchHistory = document.createElement('P');

const searchList = JSON.parse(localStorage.getItem('search'));

submitbtn.addEventListener('click', () => {
    const value = search.value;
    searchList.push(value);
    localStorage.setItem('search', JSON.stringify(searchList));
});

const items =  localStorage.getItem('search');
console.log(items);

// // Append heading node to the DOM
const app = document.querySelector('#root')
app.append(search);
app.append(submitbtn);
app.append(searchHistory);
