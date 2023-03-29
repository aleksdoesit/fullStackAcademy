const checkbox = document.getElementById('tc');
const submitButton = document.getElementById('submit');
checkbox.onchange = function() {
    submitButton.disabled = !this.checked;
};