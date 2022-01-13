// #1
function isOdd(number) {
  return number % 2 !== 0;
}
// console.log(isOdd(11));
// console.log(isOdd(10));
// #2
function getCurrencySymbolFromCode(code) {
  code = strToLower(code);
  if(code === 'usd'){
    return '$';
  }
  if(code === 'eur') {
    return '€';
  }
  if(code === 'gel'){
    return 'ლ';
  }
  return code;
}

// console.log(getCurrencySymbolFromCode('USD'));
// console.log(getCurrencySymbolFromCode('EUR'));
// console.log(getCurrencySymbolFromCode('gel'));
// console.log(getCurrencySymbolFromCode('GBP'));

// #3
function strToLower(str) {
  return str.toLowerCase();
}
const strToUpper = (str) => str.toUpperCase();
// console.log(strToLower('MY NAME IS JOHN'));
// console.log(strToUpper(strToLower('MY NAME IS JOHN')));

// #4
const numbersArray = [30, 31, 55, 12, 243, 60];
const filterNumbers = (numbers) => {
  return numbers.filter(number => number % 2 === 0);
}
// console.log(filterNumbers(numbersArray));
// #5
const getUserName = (users, userName) => {
  return users.find(user => user.name === userName);
}
// const users = [{name: 'John'}, {name: 'Gela'}, {name: 'Soso'}]
// console.log(getUserName(users, 'Gela'));

// const users = [
//   {
//     id: 7,
//     email: "michael.lawson@reqres.in",
//     first_name: "Michael",
//     last_name: "Lawson",
//     avatar: "https://reqres.in/img/faces/7-image.jpg"
//   },
//   {
//     id: 8,
//     email: "lindsay.ferguson@reqres.in",
//     first_name: "Lindsay",
//     last_name: "Ferguson",
//     avatar: "https://reqres.in/img/faces/8-image.jpg"
//   },
//   {
//     id: 9,
//     email: "tobias.funke@reqres.in",
//     first_name: "Tobias",
//     last_name: "Funke",
//     avatar: "https://reqres.in/img/faces/9-image.jpg"
//   },
//   {
//     id: 10,
//     email: "byron.fields@reqres.in",
//     first_name: "Byron",
//     last_name: "Fields",
//     avatar: "https://reqres.in/img/faces/10-image.jpg"
//   },
// ];

// DOM selectors
const pageHeading = document.getElementById('heading-1');
const pageHeading1 = document.querySelector('#heading-1');
const parentDiv = document.querySelector('.parent');
const children = document.querySelectorAll('.child');
// console.log(children);

// Dom manipulations
const body = document.body;
const newDiv = document.createElement('div');
newDiv.style.backgroundColor = 'red';
newDiv.style.padding = '20px';
newDiv.classList.toggle('this-is-new-class');

const aTag = document.createElement('a');
aTag.innerText = 'I am Strong string';
aTag.setAttribute('href', 'https://google.com');
aTag.style.color = '#fff';

aTag.addEventListener('click', e => {
  e.preventDefault();
  console.log('a tag clicked');
});

newDiv.append(aTag);
//
body.append(newDiv);

// setTimeout(() => {
//   newDiv.classList.toggle('this-is-new-class');
// }, 4000);
// console.log(newDiv);

// Event handling
const parentDiv1 = document.querySelector('#parent');
const myButton = document.querySelector('#my-button');

// myButton.addEventListener('click', (e) => {
//   e.stopPropagation();
//   myButton.remove();
//   console.log('Button clicked');
// });
//
// parentDiv1.addEventListener('click', e => {
//   parentDiv1.style.backgroundColor = 'green';
//   console.log('Parent div clicked');
// });
//
// document.addEventListener('click', e => {
//   console.log('Document Clicked');
// });
const users = [
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg"
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg"
  },
  {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg"
  },
  {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://reqres.in/img/faces/10-image.jpg"
  },
];

const body1 = document.body;

function renderUsers(){
  const usersElements = users.map(user => {
    return `<div class="user-item"><span class="delete-user">${user.first_name}</span></div>`
  });
  body1.innerHTML = usersElements.join('');
  const deleteButtons = document.querySelectorAll('.delete-user');
  deleteButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      // console.log(e.target.parentNode.parentNode);// Get parent node
      // console.log(e.target.closest());
    })
  });
  // console.log(usersElements.join(''));
}
renderUsers();
