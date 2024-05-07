//Filename: script.js
//Author: Anthony Nelson
// Purpose: Functions used in JS to make website more accessible and increase functionality.
// Initialize a variable to track the menu state

// This function will open the menu. 
function toggleMenu() {
  console.log("Toggle menu function called!"); // Not necessary, but good for troubleshooting. 
  var menuBar = document.getElementById('menuBar');
  menuBar.classList.toggle('show-menu');
}



// Function to switch between tabs
function openTab(tabName) {
  // Hide all tab contents
  var tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(function(tabContent) {
    tabContent.style.display = 'none';
  });
  
  // Show the selected tab content
  document.getElementById(tabName).style.display = 'block';
  window.history.pushState({}, '', '?tab=' + tabName); // changes URL to the current tab name. 
}
// Function to close the menu when clicking outside of it
function closeMenuOnClickOutside(event) {
  var menuBar = document.getElementById('menuBar');
  var menuToggle = document.querySelector('.menu-toggle'); 
  
  // Check if the clicked element is not part of the menu or menu toggle
  if (!menuBar.contains(event.target) && !menuToggle.contains(event.target)) {
    menuBar.classList.remove('show-menu');
  }
}

// Add event listener to close menu on click outside
document.addEventListener('click', closeMenuOnClickOutside);

// Function to toggleDyslexicUI for website. Keeps all tabs on this setting. 
function toggleDyslexicUI() {
  var elements = document.querySelectorAll('body, header, footer, .tab-content'); // Include .tab-content elements

  elements.forEach(function(element) {
    // Toggle the dyslexic-ui class
    element.classList.toggle('dyslexic-ui');

    // Toggle the grey background for tab contents
    if (element.classList.contains('tab-content')) {
      element.style.backgroundColor = element.classList.contains('dyslexic-ui') ? '#E0E0E0' : ''; // Set or remove grey background
    }
  });

  // Toggle dyslexic UI for all text within tab contents
  var allTextElements = document.querySelectorAll('body, header, footer, .tab-content *');
  allTextElements.forEach(function(textElement) {
    textElement.classList.toggle('dyslexic-text'); // Toggle dyslexic-text class for text elements
  });
}



  // Function to show the home tab content on page load
  function showHomeTab() {
    // Hide all tab contents
    var tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(function(tabContent) {
      tabContent.style.display = 'none';
    });

    // Show the home tab content
    document.getElementById('home').style.display = 'block';
  }

  // Call the function to show the home tab content on page load
  window.onload = showHomeTab;




