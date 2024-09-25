// public/scripts/items.js

const renderItems = async () => {
    const response = await fetch('/items'); // Fetch items data from the /items endpoint
    const data = await response.json(); // Parse the response as JSON
    //console.log(data)
  
    const mainContent = document.getElementById('main-content'); // Get the main content element
  
    // Conditional rendering based on whether data is available
    if (data && data.length > 0) {
      // If data is available, map over it to create cards
      data.map(item => {
        const card = document.createElement('div');
        card.className = 'card'; // Set class name for card
  
        const topContainer = document.createElement('div');
        topContainer.className = 'top-container'; // Set class name for top container
        topContainer.style.backgroundImage = `url(${item.image})`; // Set background image
  
        const bottomContainer = document.createElement('div');
        bottomContainer.className = 'bottom-container'; // Set class name for bottom container
  
        const nameElement = document.createElement('h3');
        nameElement.textContent = item.name; // Set item name
        bottomContainer.appendChild(nameElement); // Append to bottom container
  
        const priceElement = document.createElement('p');
        priceElement.textContent = `Price: ${item.pricePoint}`; // Set item price
        bottomContainer.appendChild(priceElement); // Append to bottom container
  
        const audienceElement = document.createElement('p');
        audienceElement.textContent = `Audience: ${item.audience}`; // Set item audience
        bottomContainer.appendChild(audienceElement); // Append to bottom container
  
        const linkElement = document.createElement('a');
        linkElement.textContent = 'Read More >'; // Set link text
        linkElement.href = `/items/${item.id}`; // Set href to item detail page
        linkElement.setAttribute('role', 'button'); // Set role as button
        bottomContainer.appendChild(linkElement); // Append to bottom container
  
        // Append the top and bottom containers to the card
        card.appendChild(topContainer);
        card.appendChild(bottomContainer);
  
        // Append the card to mainContent
        mainContent.appendChild(card);
      });
    } else {
      // If no data is available, display a message
      const noItemsMessage = document.createElement('h2');
      noItemsMessage.textContent = 'No Items Available 😞';
      mainContent.appendChild(noItemsMessage);
    }
  };
  
  const requestedUrl = window.location.href.split('/').pop()
  // Call the renderItems function to load data when the script runs
  

  if (requestedUrl) {
    window.location.href = '../404.html'
  }
  else {
    renderItems();
  }
  


  