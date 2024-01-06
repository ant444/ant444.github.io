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
    var activeTab = document.querySelector('.tab-content.active'); // Get the active tab's content

    if (!activeTab) return; // If no active tab, exit the function

    var contentText = activeTab.textContent.toLowerCase(); // Get text content of active tab
    
    var replacedHTML = contentText.replace(new RegExp(query, 'gi'), function(match) {
        return '<span class="highlight">' + match + '</span>'; // Wrap matches in <span> tags for highlighting
    });

    activeTab.innerHTML = replacedHTML; // Update content with highlighted text
    
    if (query === '') {
        // If search query is empty, show all content
        var allContent = document.querySelectorAll('.tab-content');
        allContent.forEach(function(content) {
            content.style.display = 'block';
        });
    } else {
        // Hide content that doesn't match the query
        var regex = new RegExp(query, 'gi');
        if (!contentText.match(regex)) {
            activeTab.style.display = 'none';
        }
    }
}


