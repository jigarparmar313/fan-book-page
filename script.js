document.getElementById('fanForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const entry = document.getElementById('entry').value;
  
  const entryDiv = document.createElement('div');
  entryDiv.classList.add('entry');
  entryDiv.innerHTML = `<h4>${name}</h4><p>${entry}</p>`;
  
  document.getElementById('entries').appendChild(entryDiv);
  
  // Clear the form
  document.getElementById('name').value = '';
  document.getElementById('entry').value = '';
});
