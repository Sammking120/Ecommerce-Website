//Variables

const courses = document.querySelector('#courses-list'),
      shoppingCartContent = document.querySelector('#cart-content tbody'),
      clearCartBtn = document.querySelector('#clear-cart');
      



//Listeners
loadEventListeners();

function loadEventListeners(){
  //When a new course is added
courses.addEventListener('click', buyCourse)

  //When the Remove Course is Clicked
  shoppingCartContent.addEventListener('click', removeCourse)

  //Clear Cart Btn
  clearCartBtn.addEventListener('click', clearCart);

  //Document Ready
  document.addEventListener('DOMContentLoaded',getFromLocalStorage);

}


//Functions
function buyCourse(e){
  e.preventDefault();

  //Use Delegation to find the course that was Added
  if(e.target.classList.contains('add-to-cart')){
    //read the course values
    const course = e.target.parentElement.parentElement;
    
    //read the values
   getCourseInfo(course);
  }
}

function getCourseInfo(course){
  //Create an Object With Course Data

  const courseInfo = {
    image: course.querySelector('img').src,
    title:course.querySelector('h4').textContent,
    price:course.querySelector('.price span').textContent,
    id:course.querySelector('a').getAttribute('data-id')

  }
  //Insert into the shopping Cart
  addIntoCart(courseInfo)

}
//Function to display the selected course into the Cart
function addIntoCart(course){
  const row = document.createElement('tr');

  //Build the Template
  row.innerHTML=
 
    ` <tr>
          <td>
            <img src="${course.image}" width=100>
          </td>
          <td>
            ${course.title}
          </td>
          <td>
            ${course.price}
          </td>
          <td>
            <a href="#" class="remove" data-id="${course.id}">X</a>
          </td>
      </tr>
 `;
 //adding the content to the Storage
 shoppingCartContent.appendChild(row);

 //Add courses into the storage
 saveIntoStorage(course); 
}


//Add the Courses into the Localstorage
function saveIntoStorage(course) {
  let courses=getCoursesFromStorage();

  //add the course into the array
  courses.push(course);

  //since storage only saves strings, we need to convert JSON into String
  localStorage.setItem('courses', JSON.stringify(courses));

}


//Get The Contents from Local Storage;
function getCoursesFromStorage(){
  let courses;

  //if something exsist on storage then we get the value, otherwise create an empty array
  if(localStorage.getItem('courses') === null){
    courses =[];
  }else{
    courses =JSON.parse(localStorage.getItem('courses'));
  }

  return courses;
}





//Remove the Course from the DOM. 
function removeCourse(e){
  let course, courseId;

  //remove from the Dom
  if(e.target.classList.contains('remove')){
    e.target.parentElement.parentElement.remove();
    course = e.target.parentElement.parentElement;
    courseId =course.querySelector('a').getAttribute('data-id');
  }
  
  
//remove from the Local Storage
removeCourseLocalStorage(courseId);
}


//Remove from the Local Storage
function removeCourseLocalStorage(id){
  
  //get the local storage Data
  let coursesLS = getCoursesFromStorage();

  //Loop through the array and Find the index to remove
  coursesLS.forEach(function(courseLS, index){
    if(courseLS.id === id ){
      coursesLS.splice(index, 1);
    }
  });
  
  //Add the rest of the Array
  localStorage.setItem('courses', JSON.stringify(coursesLS));
}

   

//Clears the shopping Cart
function clearCart(){
  //shoppingCartContent.innerHTML = "";

  while(shoppingCartContent.firstChild){
    shoppingCartContent.removeChild(shoppingCartContent.firstChild);
  }

  //Clear from the Local Storage
  clearLocalStorage();

}


//Clears the Whole local Storage. 
function clearLocalStorage(){
  localStorage.clear();
}


function getFromLocalStorage(){
   let coursesLS = getCoursesFromStorage();

   //Loop through the courses and Print into the cart
    coursesLS.forEach(function(course){

      //create the <tr></tr>
      const row = document.createElement('tr');

      //print the Content
      row.innerHTML=
 
      ` <tr>
            <td>
              <img src="${course.image}" width=100>
            </td>
            <td>
              ${course.title}
            </td>
            <td>
              ${course.price}
            </td>
            <td>
              <a href="#" class="remove" data-id="${course.id}">X</a>
            </td>
        </tr>
   `;
   shoppingCartContent.appendChild(row);

    });
  }