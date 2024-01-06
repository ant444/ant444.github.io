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
        var query = document.getElementById('searchInput').value;
        var activeTab = document.querySelector('.tab-content.active');

        if (!activeTab) return;

        var tabs = document.querySelectorAll('.tab-content');

        if (query.trim() === '') {
            tabs.forEach(function(tab) {
                tab.innerHTML = tab.textContent;
                tab.style.display = 'block';
            });
            return;
        }

        var found = false;
        var regex = new RegExp(query, 'g');

        tabs.forEach(function(tab) {
            if (tab === activeTab) {
                var contentText = tab.textContent;

                var replacedHTML = contentText.replace(regex, function(match) {
                    found = true;
                    return '<span class="highlight">' + match + '</span>';
                });

                tab.innerHTML = replacedHTML;

                if (regex.test(contentText)) {
                    tab.style.display = 'block';
                } else {
                    tab.style.display = 'none';
                }
            } else {
                var contentText = tab.textContent;

                if (regex.test(contentText)) {
                    tab.style.display = 'block';
                    alert('The word is found in another tab.');
                    found = true;
                } else {
                    tab.style.display = 'none';
                }
            }
        });

        if (!found) {
            alert('The word is not found in the current tab or any other tab.');
        }
    }
}

