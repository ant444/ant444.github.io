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
        event.preventDefault(); // Prevent default form submission behavior

        var query = document.getElementById('searchInput').value.trim(); // Get the search query
        var activeTab = document.querySelector('.tab-content.active');

        if (!activeTab) return;

        var found = false;
        var textNodes = activeTab.querySelectorAll(":not(iframe)");
        textNodes.forEach(function(node) {
            if (node.nodeType === 3) { // Text nodes
                var text = node.nodeValue;
                var regex = new RegExp('\\b' + query + '\\b', 'gi');
                var replacedText = text.replace(regex, function(match) {
                    found = true;
                    return '<span class="highlight">' + match + '</span>';
                });
                if (replacedText !== text) {
                    var newNode = document.createElement("span");
                    newNode.innerHTML = replacedText;
                    node.parentNode.replaceChild(newNode, node);
                }
            }
        });

        if (!found) {
            alert('The word is not found in the current tab.');
        }
    }
}
