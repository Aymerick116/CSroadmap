// public/scripts/header.js

// Create a function to generate the header
function createHeader() {
    // Create header element
    const header = document.createElement('header');
    header.style.textAlign = 'center';
    header.style.padding = '20px';
    header.style.backgroundColor = '#f4f4f4';
    
    // Create title element
    const title = document.createElement('h1');
    title.textContent = 'CS Roadmap to Success!';
    
    // Create a navigation menu
    const nav = document.createElement('nav');
    const navList = document.createElement('ul');
    
    // Apply styles to make the list horizontal
    navList.style.listStyleType = 'none';
    navList.style.padding = '0';
    navList.style.margin = '0';
    navList.style.display = 'flex'; // Use flexbox for horizontal alignment
    navList.style.justifyContent = 'center'; // Center the items horizontally
    
    // Example navigation items
    const navItems = ['Home', 'About', 'Resources', 'Contact'];
    navItems.forEach(item => {
      const navItem = document.createElement('li');
      const navLink = document.createElement('a');
      navLink.href = `#${item.toLowerCase()}`; // Set the href to an ID or page
      navLink.textContent = item;
      navLink.style.margin = '0 15px'; // Add some space between items
      navLink.style.textDecoration = 'none'; // Remove underline from links
      navLink.style.color = '#333'; // Set link color
      navItem.appendChild(navLink);
      navList.appendChild(navItem);
    });
    
    // Append elements to the header
    header.appendChild(title);
    nav.appendChild(navList);
    header.appendChild(nav);
    
    // Append header to the app div in the body
    const appDiv = document.getElementById('app');
    appDiv.appendChild(header);
  }
  
  // Call the function to create the header when the script loads
  createHeader();
  