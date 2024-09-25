// public/scripts/item.js

const renderItem = async () => {
    // Parse the ID from the URL
    console.log("render item called")
    const requestedID = parseInt(window.location.href.split('/').pop());
  
    // Fetch the item data from the server
    const response = await fetch('/items');
    const data = await response.json();
    console.log(data)
  
    // Get the content element where the item details will be displayed
    const itemContent = document.getElementById('item-content');
  
    // Initialize a variable to hold the item
    let item;
  
    // Check if data is not null and find the item with the requested ID
    if (data) {
      item = data.find(item => item.id === requestedID);
    }
  
    // Conditional rendering based on whether the item was found
    if (item) {
      // Set the item details in the appropriate HTML elements
      document.getElementById('item-image').src = item.image; // Assuming there's an img with id="item-image"
      document.getElementById('item-name').textContent = item.name; // Assuming there's an element with id="item-name"
      document.getElementById('submittedBy').textContent = item.submittedBy; // Assuming there's an element with id="submittedBy"
      document.getElementById('pricePoint').textContent = item.pricePoint; // Assuming there's an element with id="pricePoint"
      document.getElementById('audience').textContent = item.audience; // Assuming there's an element with id="audience"
      document.getElementById('item-description').textContent = item.description; // Assuming there's an element with id="item-description"
  
      // Set the title of the page
      document.title = item.name; // Sets the page title to the item's name
    } else {
      // If the item is not found, display a message
      const noItemMessage = document.createElement('h2');
      noItemMessage.textContent = 'No Items Available 😞';
      itemContent.appendChild(noItemMessage);
    }
  };
  
  // Call the renderItem function
  renderItem();
  