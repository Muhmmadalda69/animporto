document.addEventListener('DOMContentLoaded', function () {
    textElement = document.getElementById('typing-text');
    textContent = 'Hello...';

    setTextWithLoopingEffect(textElement, textContent, 600); // 2000 milidetik (2 detik) jeda waktu
});

function setTextWithLoopingEffect(element, text, delay) {
    index = 0;

    function type() {
        element.textContent = text.slice(0, index++);
        if (index > text.length) {
            index = 0;
        }
        setTimeout(type, delay); // Menetapkan jeda waktu sebelum memanggil fungsi type lagi
    }

    type();
}

// showw pop up
function showImage(imageSrc) {
    var popup = document.getElementById('image-popup');
    var popupImage = document.getElementById('popup-image');

    popupImage.src = imageSrc;
    popup.style.display = 'block';
}

function closeImagePopup() {
    var popup = document.getElementById('image-popup');
    popup.style.display = 'none';
}

function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}

// pop up sosmed
document.addEventListener('DOMContentLoaded', function () {
    var socialLink = document.getElementById('social-link');
    var popup = document.getElementById('popup');

    socialLink.addEventListener('click', function () {
        popup.style.display = (popup.style.display === 'block') ? 'none' : 'block';
    });

    document.addEventListener('click', function (event) {
        if (!popup.contains(event.target) && !socialLink.contains(event.target)) {
            popup.style.display = 'none';
        }
    });
});