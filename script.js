// CostLens Legal — Landing Page Script
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('signupForm');
  const submitBtn = document.getElementById('submitBtn');
  const successMsg = document.getElementById('successMessage');

  // Google Apps Script Web App URL
  // To set up: Deploy a Google Apps Script that writes to a Sheet
  // Instructions at: https://github.com/yourusername/costlens-landing
  const GOOGLE_SHEET_URL = ''; // ← PASTE YOUR GOOGLE APPS SCRIPT URL HERE

  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const firm = document.getElementById('firm').value.trim();
    const size = document.getElementById('size').value;

    // Validate
    if (!name || !email || !firm || !size) {
      alert('Please fill in all fields.');
      return;
    }

    // Disable button during submission
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';

    const data = {
      name: name,
      email: email,
      firm: firm,
      size: size,
      timestamp: new Date().toISOString(),
      source: 'CostLens Landing Page'
    };

    // Try sending to Google Sheet first
    let googleSheetSuccess = false;
    if (GOOGLE_SHEET_URL) {
      try {
        const response = await fetch(GOOGLE_SHEET_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        googleSheetSuccess = true;
      } catch (err) {
        console.warn('Google Sheet submission failed, saving locally:', err);
      }
    }

    // Always save locally as backup
    saveToLocal(data);

    // Show success
    form.style.display = 'none';
    successMsg.style.display = 'block';

    // Track conversion
    if (typeof gtag !== 'undefined') {
      gtag('event', 'conversion', {
        'send_to': 'AW-XXXXXXXXX',
        'value': 1.0,
        'currency': 'USD'
      });
    }
  });

  // Save to localStorage as backup (CRM-ready)
  function saveToLocal(data) {
    let leads = JSON.parse(localStorage.getItem('costlens_leads') || '[]');
    leads.push(data);
    localStorage.setItem('costlens_leads', JSON.stringify(leads));
    console.log('Lead saved locally:', data.email);
  }

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    });
  });
});