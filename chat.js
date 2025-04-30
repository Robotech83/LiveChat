const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');

// Add an event listener for form submission
chatForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the page from refreshing

  // Get the user's message
  const message = chatInput.value.trim();
  if (!message) return;

  // Add the user's message to the chat
  addMessage('user', message);

  // Simulate receiving a response
  setTimeout(() => {
    addMessage('other', 'This is an automated response.');
  }, 1000);

  // Clear the input field
  chatInput.value = '';
});

// Function to add a message to the chat window
function addMessage(sender, text) {
  const messageItem = document.createElement('li');
  messageItem.classList.add(sender); // Add class based on the sender
  messageItem.textContent = text;
  chatMessages.appendChild(messageItem);

  // Scroll to the bottom of the chat
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
// Select the dark mode toggle button
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Check and apply the saved dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('dark-mode'); // Apply dark mode on load
}

// Add click event listener to the toggle button
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode'); // Toggle the dark mode class

  // Save the user's preference in localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled'); // Save dark mode state
  } else {
    localStorage.setItem('darkMode', 'disabled'); // Save light mode state
  }
});

