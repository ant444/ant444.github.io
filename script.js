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
function performSearch(event) {
    if (event.keyCode === 13 || event.which === 13 || event.type === 'click') {
        event.preventDefault(); // Prevent default form submission behavior

        var query = document.getElementById('searchInput').value.trim(); // Get the search query
        var activeTab = document.querySelector('.tab-content.active');

        if (!activeTab) return;

        var found = false;
        var content = activeTab.innerHTML; // Get the original HTML content of the tab

        if (query === '') {
            activeTab.innerHTML = content; // Reset HTML content
            return;
        }

        var escapedQuery = query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); // Escape special regex characters
        var regex = new RegExp('\\b' + escapedQuery + '\\b', 'gi'); // Word boundary search with 'gi' flag for global and case-insensitive search

        var highlightedContent = content.replace(regex, function(match) {
            found = true;
            return '<span class="highlight">' + match + '</span>';
        });

        activeTab.innerHTML = highlightedContent; // Update tab's HTML content

        if (!found) {
            alert('The word is not found in the current tab.');
        }
    }
}
