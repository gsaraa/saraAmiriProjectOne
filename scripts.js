// Add a submit event listener to the form
    // Cache the form element and add a event listener to it
// Get data from user (name, email and comment)
    // Capture the value of username, email and comment inputs by using querySelectors and store them in a variable
// Append the comment, user photo and date it was posted on the page


// Storing the form element in a variable
const formElement = document.querySelector('.formContainer');

let date = new Date();
// console.log(date);

// let currentDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// console.log(date.toLocaleString(undefined, currentDate));

currentDate = date.toLocaleString(undefined, {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});

console.log(currentDate);
formElement.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const userName = document.querySelector('#userName').value;
    // console.log(userName);
    
    const userEmail = document.querySelector('#userEmail').value;
    // console.log(userEmail);
    
    const userComment = document.querySelector('#userComment').value;
    // console.log(userComment);
    
    const printUserComment = document.querySelector('.newUserComment');
    
    printUserComment.innerHTML = `
    <img src="./assets/default-user-picture.png" alt="a default picture of user leaving a comment">
    
    <div class="newComment">
        <p class="commentTime">${currentDate} by ${userName}</p>
        <p>${userComment}</p>
    </div>`;

});