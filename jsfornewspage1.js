function openTab(evt, tabId) {
  const buttons = document.querySelectorAll('.tab-button');
  const contents = document.querySelectorAll('.tab-content');

  buttons.forEach(btn => btn.classList.remove('active'));
  contents.forEach(content => content.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  evt.currentTarget.classList.add('active');
}
