
// Get references to HTML elements with specific IDs using the Document Object Model (DOM) method.  

const fullNameEl = document.getElementById("full-name");
const birthDateEl = document.getElementById("birthdate");
const currentYearEl = document.getElementById("currentdate")

const clearBtn = document.getElementById("clear-btn");
const calculateAge = document.getElementById("calculate-age");

const greetingEl = document.getElementById("greetings");
const resultOut = document.getElementById("result");


// Function for the calculateAge button
calculateAge.addEventListener("click", function() {

  // Stores the value of fullNameEl, birthDateEl and currentYearEl in new Variables.
  const fullName = fullNameEl.value
  const birthdate = birthDateEl.value;
  const currentdate = currentYearEl.value;

  // If statements to make sure all input field are not submited empty.
  if (fullName === "") {
    window.alert("Please input your Full Name.");
  } 

  else if (birthdate === "") {
    window.alert("Please input your Date of Birth.");
  } 
  
  else if (currentdate === "") {
    window.alert("Please input Current Date.");
  } 
  
  else {
    // Codes to be executed when all input fields have values

    // Creates two Date objects for the two date input field using the date constructor and store's the value in the "birthDate" and "currentdate" variables respectively.
    const birthDate = new Date(birthdate);
    const currentDate = new Date(currentdate);

    // Calculates the difference in Years, Months and Days between the "currentDate" and "birthDate" and stores the values in the Years, Month and Days variable respectively.
    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth(); 
    let days = currentDate.getDate() - birthDate.getDate(); 

    // This condition checks if the birth month is greater than the current month (months < 0) or if the birth month is the same as the current month but the birth day is greater than the current day (months === 0 && today.getDate() < birthDate.getDate()). If either of these conditions is true, it means the birthday hasn't occurred yet this year. In that case, it subtracts 1 from the years variable and adds 12 to the months variable to adjust the age calculation accordingly.
    if (months < 0 || (months === 0 && currentDate.getDate() < birthDate.getDate())) {
      years--;
      months += 12;
    }

    // This condition checks if the birth day is greater than the current day (days < 0). If true, it means the current month has fewer days than the birth month. In that case, it subtracts 1 from the months variable and calculates the last day of the previous month (lastMonth). Then, it adds that number of days to the days variable to adjust the age calculation.
    if (days < 0) {
      months--;
      let lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 0);
      days += lastMonth.getDate();
    }

    // Concatenates the calculated age values (days, months, years) with their respective labels including that of fullName and stores the value in a "result" variable. 
    let result = "You are " + days + " days, " + months + " months and " + years + " years old.";

    // Sets the innerHTML of an element with the ID "result" to the result string, which will display the calculated age on the web page.
    resultOut.innerHTML = result;
  
    greetingEl.innerHTML = "Hello! <span class='fullname'>" + fullName  + "</span> ";
  }
 
}); 


// Function for the Clear button
clearBtn.addEventListener("click", function() {
  fullNameEl.value = "";
  birthDateEl.value = "";
  currentYearEl.value = "";
  resultOut.innerHTML = "";
  greetingEl.innerHTML = "";
})



  