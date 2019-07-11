/* exported updateResult */

// Reference Needed DOM Elements
const nameInput = document.getElementById('name');
const result = document.getElementById('result');

// Action to take on user event
// eslint-disable-next-line no-unused-vars
function updateResult() {
    result.textContent = nameInput.value;
}