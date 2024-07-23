
const imageWrapper = document.querySelector('.image-wrapper');
const images = document.querySelectorAll('.image');
let translateXValue = 0;
let currentImage = 0;
let imageWidth = images[0].offsetWidth;
setInterval(() => {
currentImage++;
translateXValue -= imageWidth;
imageWrapper.style.transition = 'transform 1s ease-in-out';
imageWrapper.style.transform = `translateX(${translateXValue}px)`;
if (currentImage >= images.length - 1) {
setTimeout(() => {
translateXValue = 0;
imageWrapper.style.transition = 'none';
imageWrapper.style.transform = `translateX(${translateXValue}px)`;
currentImage = 0;
}, 2000);
}
}, 4000);

function user(){
    var start  = document.getElementById("from").value;
    var end    = document.getElementById("to").value;
    var ondate = document.getElementById("ondate").value;
    var condate= document.getElementById("condate").value;
    var adult  = document.getElementById("adult").value;
    var child  = document.getElementById("child").value;
    console.log(start);
    console.log(end);
    console.log("hello")

    var storing = {
         start : start,
         end : end,
         ondate : ondate,
         condate : condate,
         adult : adult,
         child : child

    }

    console.log(storing);

    
    fetch('http://localhost:8080/user/user1', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(storing),
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        var res = document.getElementById('result');
        res.innerHTML = data;

        // Redirect to details.html after condition is satisfied
        if (data === 'Success') {
            setTimeout(() => {
                window.location.href = 'details.html';
            }, 1000); // Redirect after 1 second (adjust timing as needed)
        }
    })
    .catch(error => {
     console.error('Error:', error);
     alert('An error occurred while logging in');
});
}
const adultInput = document.getElementById('adult');
const childInput = document.getElementById('child');
const addInput = document.getElementById('add');

// Function to calculate and update the third input field
function updateAddField() {
// Get the values from the adult and child input fields
const adultValue = parseInt(adultInput.value) || 0; // Use parseInt to convert string to number
const childValue = parseInt(childInput.value) || 0;

// Calculate the sum
const sum = adultValue + childValue;
if (sum > 7) {
    // Alert the user
    alert("Sorry, you can only book up to 7 books. Please make a new try.");
    // Reset the input fields
    adultInput.value = '';
    childInput.value = '';
    addInput.value = '';
    const noofseats = document.getElementById("noofseats");
noofseats.innerHTML = sum.toString();

} else {
    // Update the value of the add input field
    addInput.value = sum.toString(); // Convert the sum back to string and assign it to the input field
}

}

// Add event listeners to the adult and child input fields
adultInput.addEventListener('input', updateAddField);
childInput.addEventListener('input', updateAddField);
