function openTab(tabId) {
  // Hide all tab contents
  var tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(function(tabContent) {
    tabContent.style.display = 'none';
  });

  // Show the selected tab content
  document.getElementById(tabId).style.display = 'block';

  // Deactivate all tab buttons
  var tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(function(tabButton) {
    tabButton.classList.remove('active');
  });

  // Activate the clicked tab button
  var clickedButton = document.querySelector('[onclick="openTab(\'' + tabId + '\')"]');
  if (clickedButton) {
    clickedButton.classList.add('active');
  }
}

//Start the search
function performSearch() {
    var query = document.getElementById('searchInput').value.toLowerCase(); // Get the search query
    
    var allContent = document.querySelectorAll('.tab-content'); // Get all content elements
    allContent.forEach(function(content) {
        var contentText = content.innerHTML.toLowerCase(); // Get HTML content of each element
        
        var replacedHTML = contentText.replace(new RegExp(query, 'gi'), function(match) {
            return '<span class="highlight">' + match + '</span>'; // Wrap matches in <span> tags for highlighting
        });

        content.innerHTML = replacedHTML; // Update content with highlighted text
        
        if (contentText.includes(query)) {
            content.style.display = 'block'; // Show the content containing the query
        } else {
            content.style.display = 'none'; // Hide content that doesn't match the query
        }
    });
}

