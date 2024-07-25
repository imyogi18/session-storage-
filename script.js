function saveData() {
    let name = document.getElementById('nameInput').value;
    let email = document.getElementById('emailInput').value;
    let phone = document.getElementById('phoneInput').value;

    sessionStorage.setItem('name', name);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('phone', phone);

    alert('Data saved in session storage');
}
function loadData() {
    let name = sessionStorage.getItem('name');
    let email = sessionStorage.getItem('email');
    let phone = sessionStorage.getItem('phone');

    if (name && email && phone) {
        document.getElementById('displayName').innerText = `Saved Name: ${name}`;
        document.getElementById('displayEmail').innerText = `Saved Email: ${email}`;
        document.getElementById('displayPhone').innerText = `Saved Phone: ${phone}`;
    } else {
        document.getElementById('displayName').innerText = 'Please first fill all the data';
        document.getElementById('displayEmail').innerText = '';
        document.getElementById('displayPhone').innerText = '';
    }
}
function clearData() {
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('phone');

    document.getElementById('nameInput').value = '';
    document.getElementById('emailInput').value = '';
    document.getElementById('phoneInput').value = '';

    document.getElementById('displayName').innerText = '';
    document.getElementById('displayEmail').innerText = '';
    document.getElementById('displayPhone').innerText = '';
}
