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
    if (event.keyCode === 13 || event.type === 'click') {
        event.preventDefault();

        var query = document.getElementById('searchInput').value.trim();
        var activeTab = document.querySelector('.tab-content.active');

        if (!activeTab) return;

        var content = activeTab.textContent; // Use textContent to search within text only

        if (query === '') {
            activeTab.innerHTML = content; // Reset HTML content
            return;
        }

        var escapedQuery = query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        var regex = new RegExp('\\b' + escapedQuery + '\\b', 'gi');

        var highlightedContent = content.replace(regex, function(match) {
            return '<span class="highlight">' + match + '</span>';
        });

        activeTab.innerHTML = highlightedContent;

        var highlightedElements = activeTab.querySelectorAll('.highlight');
        if (highlightedElements.length === 0) {
            alert('The word is not found in the current tab.');
        }
    }
}
