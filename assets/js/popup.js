function showPopup(text) {
    document.getElementById('popup-text').innerText = text;
    document.getElementById('popup').style.display = 'block';
}

function hidePopup() {
    document.getElementById('popup').style.display = 'none';
}