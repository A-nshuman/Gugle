document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('closeBtn')

    searchInput.focus()

    searchButton.addEventListener('click', function () {
        const query = searchInput.value;
        if (query) {
            const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            window.location.href = searchUrl;
        }
        else{
            popup.style.display = 'block'
        }
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = "none";
    });

    closeBtn.addEventListener('keyup', function (event) {
        if (event.key === 'Escape') {
            popup.style.display = "none";
        }
    });

    searchInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            searchButton.click();
        }
    });
});

// Dark Theme 

document.addEventListener('DOMContentLoaded', function () {

    var body = document.body
    var themeBtn = document.getElementById('Theme');
    var searchInput = document.getElementById('searchInput');
    var feeling = document.getElementById('feeling');
    var foot = document.getElementById('foot')

    themeBtn.addEventListener("click", function () {
        if (themeBtn.innerHTML === '🔆') {
            themeBtn.innerHTML = '🌙'
            body.style.backgroundColor = 'white'
            searchInput.style.backgroundColor = 'white'
            searchInput.style.color = 'black'
            feeling.style.backgroundColor = 'rgba(91, 91, 91, 0.123)'
            feeling.style.color = 'black'
            foot.style.color = 'black'
        }
        else {
            themeBtn.innerHTML = '🔆'
            body.style.backgroundColor = 'black'
            searchInput.style.backgroundColor = 'black'
            searchInput.style.color = 'white'
            feeling.style.backgroundColor = 'rgb(91, 91, 91)'
            feeling.style.color = 'white'
            foot.style.color = 'white'
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {

    var openButton = document.getElementById('feeling');

    openButton.addEventListener('click', function () {
        var urlToOpen = 'https://www.buymeacoffee.com/mranshuman';
        var newTab = window.open(urlToOpen, '_blank');

        if (newTab) {
            newTab.focus();
        }
    });
});