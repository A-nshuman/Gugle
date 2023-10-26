document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    searchButton.addEventListener('click', function () {
        const query = searchInput.value;
        if (query) {
            const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            window.location.href = searchUrl;
        }
    });

    searchInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            searchButton.click();
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {

    var themeBtn = document.getElementById('Theme');
    var body = document.body

    themeBtn.addEventListener("click", function () {

        body.classList.toggle('light-theme');
        body.classList.toggle('dark-theme');

        if (themeBtn.innerHTML === '🌙') {
            themeBtn.innerHTML = '🔆'
            body.style.backgroundColor = 'black'
            document.getElementById('searchInput').style.backgroundColor = 'black'
            document.getElementById('searchInput').style.color = 'white'
        }
        else {
            themeBtn.innerHTML = '🌙'
            body.style.backgroundColor = 'white'
            document.getElementById('searchInput').style.backgroundColor = 'white'
            document.getElementById('searchInput').style.color = 'black'
        }
    });
});