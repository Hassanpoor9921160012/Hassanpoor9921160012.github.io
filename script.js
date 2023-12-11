
console.log(document.domain);
var titleElement = document.getElementById('title-page');
// titleElement.textContent = 'سایت آموزشی';
var resourceLink = document.querySelector('#resource-link');
resourceLink.style.fontSize = '20px';

var isDarkMode = false;
document.getElementById('darkModeBtn').addEventListener('click', function() {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        document.body.style.backgroundColor = '#1a1a1a';
        document.body.style.color = '#ffffff';
        this.textContent = 'حالت روشن';
        var elementsToChangeColor = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, th, td, li');
            for (var i = 0; i < elementsToChangeColor.length; i++) {
                elementsToChangeColor[i].style.color = '#ffffff'; }
    } else {
            document.body.style.backgroundColor = '#ffffff';
            document.body.style.color = '#000000';
            this.textContent = 'حالت تیره';
            var elementsToChangeColor = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, th, td,li');
            for (var i = 0; i < elementsToChangeColor.length; i++) {
                elementsToChangeColor[i].style.color = '#000000'; }
            }
        });

document.getElementById('addCustomBtn').addEventListener('click', function() {
  var customFormContainer = document.getElementById('customFormContainer');
  var form = document.createElement('form');
  form.innerHTML = `
    <label for="keyInput">مزایا:</label>
    <input type="text" id="keyInput" required>
    <label for="valueInput">معایب:</label>
    <input type="text" id="valueInput" required>
    <button type="button" id="submitBtn">ثبت</button>
  `        
            
  customFormContainer.innerHTML = ''; 
  customFormContainer.appendChild(form);

  document.getElementById('submitBtn').addEventListener('click', function() {
    var key = document.getElementById('keyInput').value;
    var value = document.getElementById('valueInput').value;
    var newRow = document.getElementById('table-ads').insertRow(-1);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    cell1.textContent = key;
    cell2.textContent = value;
    document.body.removeChild(form);
            });
        });