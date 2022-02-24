// import aunty from './images/aunty.png'
import './styles/main.scss';
import getPhotos from './api.js';

/////Search///////////
const searchList = JSON.parse(localStorage.getItem('search')) || [];

const search = document.createElement('INPUT');
search.setAttribute("list", "dataList");

const dataList = document.createElement('datalist');
dataList.setAttribute("id", "dataList");

const renderList = () => {
    searchList.forEach(element => {
        const option = document.createElement('option');
        option.setAttribute("value", element);
        dataList.appendChild(option);
    });
}
const items = localStorage.getItem('search');
console.log(items);

renderList()
search.appendChild(dataList);

/////////////button//////////
const searchContainer = document.createElement('div');
searchContainer.classList = 'search-container';
const submitbtn = document.createElement('BUTTON');
submitbtn.textContent = "search"

const searchHistory = document.createElement('P');

submitbtn.addEventListener('click', () => {
    while (imageContainer.firstChild) {
        imageContainer.firstChild.remove()
    }
    const value = search.value;
    searchList.push(value);
    localStorage.setItem('search', JSON.stringify(searchList));

    const option = document.createElement('option');
    option.setAttribute("value", value);
    dataList.appendChild(option);
    getPhotos(value);
});
searchContainer.appendChild(search);
searchContainer.appendChild(submitbtn);

//////////div/////
const imageContainer = document.createElement('div')
imageContainer.className = "image-container"

// // Append heading node to the DOM
const app = document.querySelector('#root')
app.append(searchContainer);
app.append(imageContainer);





