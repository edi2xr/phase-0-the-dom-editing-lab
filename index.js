// Select DOM elements
const heading = document.querySelector('h1');
const paragraph = document.querySelector('p');
const table = document.querySelector('table');

// Change the heading text on page load
heading.textContent = 'My Updated HTML Adventure!';

// Log the paragraph content to the console
console.log('Paragraph says:', paragraph.textContent);

// Create a button and add it below the heading
const button = document.createElement('button');
button.textContent = 'Click me to change the title';
document.body.insertBefore(button, paragraph);

// Add a click event to change the heading
button.addEventListener('click', () => {
  heading.textContent = 'You clicked the button!';
});

// Add interactivity to the table: highlight it on click
table.addEventListener('click', () => {
  table.style.backgroundColor = 'lightyellow';
  alert('You clicked the table!');
});
