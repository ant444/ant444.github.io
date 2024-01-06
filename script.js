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
    var query = document.getElementById('searchInput').value; // Get the search query without converting to lowercase
    var tabs = document.querySelectorAll('.tab-content');

    if (query.trim() === '') {
        tabs.forEach(function(tab) {
            tab.innerHTML = tab.textContent; // Remove any previous highlighting if the query is empty
            tab.style.display = 'block'; // Show all tabs when search query is empty
        });
        return;
    }

    var found = false;
    var regex = new RegExp(query, 'g'); // Create a regular expression with the query

    tabs.forEach(function(tab) {
        var contentText = tab.textContent; // Get text content of each tab

        var replacedHTML = contentText.replace(regex, function(match) {
            return '<span class="highlight">' + match + '</span>'; // Wrap matches in <span> tags for highlighting
        });

        tab.innerHTML = replacedHTML; // Update content with highlighted text

        if (regex.test(contentText)) {
            tab.style.display = 'block'; // Show the tab if query is found
            found = true;
        } else {
            tab.style.display = 'none'; // Hide the tab if query is not found
        }
    });

    if (!found) {
        alert('The word is not found in any tab.'); // Show alert if the word is not found in any tab
    }
}


