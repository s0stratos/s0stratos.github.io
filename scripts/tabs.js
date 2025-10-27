function openTab(evt, tabName) {
  // Hide all tab contents
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(tc => tc.classList.remove('active'));

  // Remove active class from all buttons
  const tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(btn => btn.classList.remove('active'));

  // Show current tab and highlight button
  document.getElementById(tabName).classList.add('active');
  evt.currentTarget.classList.add('active');
}