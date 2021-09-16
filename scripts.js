// Add a submit event listener to the form
    // Cache the form element and add a event listener to it
// Get data from user (name, email and comment)
    // Capture the value of username, email and comment inputs by using querySelectors and store them in a variable
// Append the comment, user photo and date it was posted on the page

const formElement = document.querySelector('.formContainer');

let date = new Date();

let currentDay = date.toLocaleString(undefined, {weekday: 'long'});

let currentDate = date.toLocaleString(undefined, {year: 'numeric', month: 'long', day: 'numeric'});


formElement.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const userName = document.querySelector('#userName').value;
    
    const userEmail = document.querySelector('#userEmail').value;
    
    const userComment = document.querySelector('#userComment').value;
    
    const printUserComment = document.querySelector('.newUserComment');
    
    printUserComment.innerHTML = `
    <img src="./assets/default-user-picture.png" alt="a default picture of user leaving a comment">
    
    <div class="newComment">
        <p class="commentTime">${currentDay} ${currentDate} by ${userName}</p>
        <p>${userComment}</p>
    </div>`;

    formElement.reset();
});