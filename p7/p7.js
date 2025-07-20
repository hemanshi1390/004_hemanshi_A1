const fetch = require('node-fetch')

async function fetchGooglePage() {
  try {
    const response = await fetch('https://www.google.com');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const html = await response.text();
    console.log('Google Homepage HTML:\n');
    console.log(html.slice(0, 500)); // Print first 500 characters
  } catch (err) {
    console.error('Failed to fetch Google page:', err.message);
  }
}

fetchGooglePage();
