document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show");
  });
});

// Get references to the form, birthdate input, gender input, and output element

const form = document.getElementById("form");
const birthdate = document.getElementById("birthdate");
const gender = document.getElementById("gender");
const output = document.getElementById("englishName");

// Define arrays of names for generating English names
const lastNames = [
  "William",
  "Edwards",
  "Johnson",
  "Swift",
  "Wilson",
  "Anderson",
  "Grace",
  "Bennett",
  "Trump",
  "Lewis",
];
const middleNamesMale = [
  "(Bruce)",
  "(Matthew)",
  "(Nicholas)",
  "(Austin)",
  "(Benjamin)",
  "(Keith)",
  "(Dominich)",
  "(Samuel)",
  "(Conrad)",
  "(Anthony)",
  "(Justin)",
  "(Mason)",
];
const middleNamesFemale = [
  "(Daisy)",
  "(Hillary)",
  "(Rachel)",
  "(Lilly)",
  "(Nicole)",
  "(Susan)",
  "(Sharon)",
  "(Hannah)",
  "(Elizabeth)",
  "(Michelle)",
  "(Claire)",
  "(Diana)",
];
const firstNameMale = [
  "Victor",
  "Albert",
  "Brian",
  "Cedric",
  "James",
  "Shane",
  "Louis",
  "Frederic",
  "Steven",
  "Daniel",
  "Michael",
  "Richard",
  "Ivan",
  "Charles",
  "Jonathan",
  "Jared",
  "George",
  "Dennis",
  "Bernie",
  "Phillip",
  "Edward",
  "Robert",
  "Thomas",
  "Andrew",
  "Harry",
  "Alexander",
  "Patrick",
  "Kevin",
  "Mark",
  "Raphael",
  "Tony",
];
const firstNameFemale = [
  "Jennifer",
  "Ashley",
  "Lucy",
  "Katherine",
  "Emily",
  "Elena",
  "Scarlet",
  "Crystal",
  "Caroline",
  "Isabella",
  "Sandra",
  "Tiffany",
  "Margaret",
  "Helen",
  "Roxanne",
  "Linda",
  "Laura",
  "Julie",
  "Angela",
  "Janet",
  "Dorothy",
  "Jessica",
  "Cristine",
  "Sophia",
  "Charlotte",
  "Daisy",
  "Alice",
  "Vanessa",
  "Tracy",
  "Veronica",
  "Alissa",
];

// Add an event listener to the form for when it is submitted
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get the birthdate input value and extract the month, day, and year
  const date = new Date(birthdate.value);
  const month = date.getMonth();
  const day = date.getDate();
  const year = date.getYear();

  // Generate the English name using the birthdate and gender inputs
  const lastName = lastNames[year % 10];
  const middleName =
    gender.value === "male"
      ? middleNamesMale[month % 12]
      : middleNamesFemale[month % 12];
  const firstName =
    gender.value === "male"
      ? firstNameMale[day % 31]
      : firstNameFemale[day % 31];

  // Display the English name in the output element
  output.textContent = `Your English name is ${firstName} ${middleName} ${lastName}`;
});

//RANDOM ENGLISH NAME

document.addEventListener("submit", (e) => {
  e.preventDefault();
  //document.addEventListener("DOMContentLoaded", function() {
  var maleNames = [
    "James Smith",
    "John Johnson",
    "Robert Williams",
    "Michael Brown",
    "William Jones",
    "David Garcia",
    "Richard Miller",
    "Joseph Davis",
    "Charles Rodriguez",
    "Thomas Martinez",
    "Daniel Hernandez",
    "Matthew Lopez",
    "Christopher Gonzalez",
    "George Wilson",
    "Mark Anderson",
    "Donald Taylor",
    "Anthony Thomas",
    "Paul Lee",
    "Steven Gonzalez",
    "Kenneth Harris",
    "Andrew Clark",
    "Edward Lewis",
    "Brian Robinson",
    "Joshua Walker",
    "Kevin Hall",
    "Ronald Allen",
    "Timothy Young",
    "Jason King",
    "Jeffrey Wright",
    "Ryan Hill",
  ];

  var femaleNames = [
    "Mary Johnson",
    "Patricia Smith",
    "Jennifer Williams",
    "Linda Brown",
    "Elizabeth Jones",
    "Susan Garcia",
    "Jessica Miller",
    "Sarah Davis",
    "Karen Rodriguez",
    "Nancy Martinez",
    "Lisa Hernandez",
    "Michelle Lopez",
    "Ashley Gonzalez",
    "Kimberly Wilson",
    "Donna Anderson",
    "Carol Taylor",
    "Michelle Thomas",
    "Amanda Lee",
    "Melissa Gonzalez",
    "Deborah Harris",
    "Stephanie Clark",
    "Rebecca Lewis",
    "Sharon Robinson",
    "Laura Walker",
    "Cynthia Hall",
    "Angela Allen",
    "Melanie Young",
    "Emily King",
    "Rachel Wright",
    "Heather Hill",
  ];

  var gender = document.getElementById("gioitinh").value;
  var outp = document.getElementById("outp");

  var randomName;
  if (gender === "male") {
    randomName = maleNames[Math.floor(Math.random() * maleNames.length)];
  } else {
    randomName = femaleNames[Math.floor(Math.random() * femaleNames.length)];
  }

  outp.textContent = "Your Randomly English Name: " + randomName;
});

//page
function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get all navigation items
const navItems = document.querySelectorAll(".tabcontent");

// Add event listeners to each navigation item
navItems.forEach((item) => {
  // Get the dropdown list for this item
  const dropdown = item.querySelector(".dropdown");

  // Show the dropdown list when the item is hovered
  item.addEventListener("mouseover", () => {
    dropdown.style.display = "block";
  });

  // Hide the dropdown list when the mouse leaves the item or the dropdown list
  item.addEventListener("mouseleave", () => {
    dropdown.style.display = "none";
  });
  dropdown.addEventListener("mouseleave", () => {
    dropdown.style.display = "none";
  });
});

// Function to handle comment submission

// Function to handle comment submission

function submitComment() {
  // Get input values

  var name = document.getElementById("name-input").value;

  var comment = document.getElementById("comment-input").value;

  // Create new comment element

  var commentElement = document.createElement("div");

  commentElement.innerHTML = "<strong>" + name + ":</strong> " + comment;

  // Append comment to comments container

  var commentsContainer = document.getElementById("comments-container");

  commentsContainer.appendChild(commentElement);

  // Clear input fields

  document.getElementById("name-input").value = "";

  document.getElementById("comment-input").value = "";
}
