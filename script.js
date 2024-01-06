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
    if (event.keyCode === 13 || event.which === 13) {
        event.preventDefault();
        var query = document.getElementById('searchInput').value.trim();
        var activeTab = document.querySelector('.tab-content.active');

        if (!activeTab) return;

        var tabs = document.querySelectorAll('.tab-content');

        if (query === '') {
            tabs.forEach(function(tab) {
                tab.querySelectorAll('.highlight').forEach(function(element) {
                    element.replaceWith(element.textContent); // Remove previous highlights
                });
                tab.style.display = 'block';
            });
            return;
        }

        var found = false;
        var regex = new RegExp(query, 'gi');

        tabs.forEach(function(tab) {
            if (tab === activeTab) {
                var content = tab.innerHTML; // Get the original HTML content of the tab
                var highlightedContent = content.replace(regex, function(match) {
                    found = true;
                    return '<span class="highlight">' + match + '</span>';
                });
                tab.innerHTML = highlightedContent; // Update tab's HTML content
                tab.style.display = regex.test(content) ? 'block' : 'none'; // Show or hide tab based on search results
            } else {
                var contentText = tab.textContent;
                tab.style.display = regex.test(contentText) ? 'block' : 'none'; // Show or hide tab based on search results
            }
        });

        if (!found) {
            alert('The word is not found in the current tab or any other tab.');
        }
    }
}
