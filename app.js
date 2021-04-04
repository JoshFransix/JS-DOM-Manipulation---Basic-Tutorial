// locate form tag
const form = document.querySelector('form');

// First Element
// Create new label and Input div
const newInfo = document.createElement('div');

// Add class to div tag
newInfo.className = 'form-group'

// Add element content
newInfo.innerHTML = `<label for="password">Password</label>
<input type="text" name="password" id="password">`

// Append newInfo to form
form.appendChild(newInfo)

// console.log(newInfo);

// Second Element
// Create button element
const newBtn = document.createElement('button');

// Add type attribute to button
newBtn.type = 'button';

// Add class to button
newBtn.className = 'btn'

// Input text into button and append
newBtn.appendChild(document.createTextNode('Sign Up'))

// Append button to form
form.appendChild(newBtn)

// Styling Button
newBtn.display = 'block';
newBtn.style.width = '100%'
newBtn.style.marginTop = '20px'
newBtn.style.padding = '10px'
newBtn.style.border = 'none'
newBtn.style.outline = 'none'
newBtn.style.borderRadius = '5px'
newBtn.style.background = '#49c1a2'
newBtn.style.color = '#f4f4f4' 
newBtn.style.cursor = 'pointer'
newBtn.style.transition = 'all .3s'

// console.log(newBtn);