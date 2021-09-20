// console.log(document.body)
// console.log(document.links)
// console.log(document.links[2])


// select forms
// Element= document.forms
// Element=document.forms[0].method;
// Element=document.forms[0].classList;
// Element=document.forms[0].className;
// console.log(Element)

//Images
// element= document.images;
//looping through The images
// element=Array.from(document.images)


// element.forEach(function(image){
//   console.log(image.src)
// })

// element.forEach(image => console.log(image.src))
// console.table(element)

//selecting DOM Elements
// let heading = (document.getElementById('heading'));
// console.log(heading.className)

//change CSS in a dom
// heading.style.background = '#333';
// heading.style.color ='#ffffff'
// heading.style.padding="20px"


//Nest your Slelector with CSS syntax
// let image = document.querySelector('.card img')
// console.log(image)

//Query Selector Supporting n-th-child, first-child or last-child

// let link;

// link = document.querySelector('#primary');
// link = document.querySelector('#primary a:first-child');
// link = document.querySelector('#primary a:last-child');
// link = document.querySelector('#primary a:nth-child(2)')
// console.log(link)


//Returning Multipy Element
// const links = document.getElementsByClassName('link');
// links[0].style.color='red';
// links[0].textContent='New Text';

// let primaryLinks = document.getElementById('primary').getElementsByClassName('link');
// let primaryLinks = document.querySelector('#primary').getElementsByClassName('link');
// console.log(primaryLinks);


//QuerySelectorAll

// const oddLinks = document.querySelectorAll('#primary a:nth-child(odd)');

//  oddLinks.forEach(function(odd){ 
//    odd.style.backgroundColor = 'red' 
//    odd.style.color = "white"});

// const evenLinks = document.querySelectorAll('#primary a:nth-child(even)');
//   evenLinks.forEach( function(even) {
//     even.style.backgroundColor="blue"
//     even.style.color = 'white'});


//traversing the Dom
// const navigation = document.querySelector('#primary');
// let element;
// navigation.children[0].textContent = 'New Text';
// element = navigation.children[0];
// console.log(navigation.children[0])

// const cartBtn = document.querySelector('.add-to-cart');

// let element;

// //ParentNode
// element = cartBtn;
// element = cartBtn.parentNode;
// element = cartBtn.parentElement.parentElement.children[0];

// //Siblings
//  element = cartBtn;
//  element =cartBtn.parentNode;
//  element = cartBtn.previousElementSibling.previousElementSibling ;

//  //Next Element Siblings Course Name

//  const courseName = cartBtn.parentElement.querySelector('h4');

//  element = courseName.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
//  console.log(element);


//Create a New Element
//creating an <a></a> tag
// const newLink = document.createElement('a');

// //adding a className
// newLink.className ='link';

// //adding a href
// newLink.href = '#';

// //adding a text
// newLink.appendChild(document.createTextNode('New Link'));

// // Adding the element in the HTML
// document.querySelector('#secondary').appendChild(newLink)
// console.log(newLink)


//replacing an element
// const newHeading = document.createElement('h2');

// //add an ID
// newHeading.id = 'heading';

// //add  the class
// newHeading.classList.add('heading');

// //adding the NewText
// newHeading.appendChild(document.createTextNode('The Best Courses'));

// //select the Old Heading
// const oldHeading = document.querySelector('#heading');

// //Select the parent
// const courseList = document.querySelector('#courses-list');

// console.log(newHeading)
// // now its time to Relace
// courseList.replaceChild(newHeading, oldHeading)

//Removing Elements

// const links = document.querySelectorAll('.link');
// links[0].remove();

//remove by Childern

// const navigation = document.querySelector('#primary');
// const links = document.querySelectorAll('#primary .link')
 
// navigation.removeChild(links[4]);

// console.log(links);
// console.log(navigation);




// Classes, ID, & Attributes
// const link = document.querySelector('.link')
// let element;

// element = link;

// //read the class
// element = link.className;

// //read the class (DOM Token List)
// element = link.classList;

// //Access Specific classList
// element =link.classList[0]
// //Add a new class
// element.classList.add('new-class');
// //removing the class
// link.classList.remove('link');

// //Adding a new ID
// link.id = 'new-id';
// //remove the ID;
// link.id = '';
// link.removeAttribute('id');

//Atribute Functions
// element =link.getAttribute('href');
// element =link.getAttribute('class');
// element =link.setAttribute('href', 'http://sammking.co.ke')
// element = link.setAttribute('target','_blank');
// element =link.setAttribute('data_link','10')
// element =link.hasAttribute('data-link');
// element =link.removeAttribute('data-link');
// console.log(element);


// //Event Listeners.
//const clearCartBtn = document.getElementById('clear-cart');

// // clearCartBtn.addEventListener('click',function(event){
// //   let element;
// //   element = event;

// //   element = event.target;
// //   element = event.target.id;
// //   console.log(element);
// // })

// clearCartBtn.addEventListener('click', event => (element=event) console.log(element))

//Examples of Mouse Events
const clearCartBtn = document.querySelector('#clear-cart');

// //Click Mouse Event
// function printEvent(event){
//   console.log(`The Event is: ${event.type}`);
// }

// //click Mouse Event
// clearCartBtn.addEventListener('click', printEvent);

// //Double Click
// clearCartBtn.addEventListener('dbclick', printEvent);

// //mouse Enter
// clearCartBtn.addEventListener('mouseenter', printEvent);

// //Mouse Leave
// clearCartBtn.addEventListener('mouseleave', printEvent);

// //MouseOver
// clearCartBtn.addEventListener('mouseover', printEvent);

// //MouseOut
// clearCartBtn.addEventListener('mouseout', printEvent);

// //mouseup
// clearCartBtn.addEventListener('mouseup', printEvent);

// //Mousedown
// clearCartBtn.addEventListener('mousedown', printEvent);

// //mousemove
// clearCartBtn.addEventListener('mousemove', printEvent);



//Inputs and forms Events
// const searchForm = document.getElementById('search'),
//       searchInput=document.getElementById('search-course');

//Events for The forms
// searchForm.addEventListener('submit',printEvent);


//eventListners for the Input Value

// //Input Events
// searchInput.addEventListener('keydown',printEvent);
// searchInput.addEventListener('keyup',printEvent);
// searchInput.addEventListener('keypress',printEvent);
// searchInput.addEventListener('focus',printEvent);
// searchInput.addEventListener('blur',printEvent);
// searchInput.addEventListener('cut',printEvent);
// searchInput.addEventListener('copy',printEvent);
// searchInput.addEventListener('paste',printEvent);
// searchInput.addEventListener('input',printEvent);



// function printEvent(event){

//   // event.preventDefault();(important when dealling with submit)


//   //prints the value of the inputs
//   console.log(searchInput.value);
//   console.log(`type: ${e.type}`)
// }