document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('closeBtn')

    searchInput.focus()

    searchButton.addEventListener('click', function () {
        const query = searchInput.value;
        if (query.trim() === '') {
            popup.style.display = 'block'
        }
        else if (isValidFullURL(query)) {
            window.location.href = query;
        }
        else {
            const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            window.location.href = searchUrl;
        }
    });

    function isValidFullURL(str) {
        const pattern = new RegExp('^(https?:\\/\\/)' +
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
            '((\\d{1,3}\\.){3}\\d{1,3}))' +
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
            '(\\?[;&a-z\\d%_.~+=-]*)?' +
            '(\\#[-a-z\\d_]*)?$', 'i');
        return pattern.test(str);
    }

    closeBtn.addEventListener('click', () => {
        popup.style.display = "none";
    });

    searchInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            searchButton.click();
        }
        else if (event.key === 'Escape') {
            popup.style.display = "none";
        }
    });
});


// Dark Theme 

document.addEventListener('DOMContentLoaded', function () {

    var body = document.body
    var themeBtn = document.getElementById('Theme');
    var searchInput = document.getElementById('searchInput');
    var feeling = document.getElementById('feeling');
    var foot = document.getElementById('foot');
    var sug = document.getElementById('sug');
    var sugBtns = {
        git: document.getElementById('git'),
        ttr: document.getElementById('ttr'),
        igm: document.getElementById('igm'),
        web: document.getElementById('web')
    };
    var sugest = {
        gitBtn: document.getElementById('gitBtn'),
        ttrBtn: document.getElementById('ttrBtn'),
        igmBtn: document.getElementById('igmBtn'),
        webBtn: document.getElementById('webBtn')
    };

    themeBtn.addEventListener("click", function () {
        if (themeBtn.innerHTML === '🔆') {
            themeBtn.innerHTML = '🌙'
            body.style.backgroundColor = 'white'
            searchInput.style.backgroundColor = 'white'
            searchInput.style.color = 'black'
            feeling.style.backgroundColor = 'rgba(91, 91, 91, 0.123)'
            feeling.style.color = 'black'
            foot.style.color = 'black'
            sug.style.color = 'black'
            for (var key in sugBtns) {
                sugBtns[key].style.color = 'white';
            }
        }
        else {
            themeBtn.innerHTML = '🔆'
            body.style.backgroundColor = 'black'
            searchInput.style.backgroundColor = 'black'
            searchInput.style.color = 'white'
            feeling.style.backgroundColor = 'rgb(91, 91, 91)'
            feeling.style.color = 'white'
            foot.style.color = 'white'
            sug.style.color = 'white'
        }
    });

    sugest.gitBtn.addEventListener('click', () => {
        searchInput.value = 'https://github.com/A-nshuman'
        searchInput.focus()
    });
    sugest.ttrBtn.addEventListener('click', () => {
        searchInput.value = 'https://twitter.com/A_nshuman'
        searchInput.focus()
    });
    sugest.igmBtn.addEventListener('click', () => {
        searchInput.value = 'https://www.instagram.com/anshu_man_man/'
        searchInput.focus()
    });
    sugest.webBtn.addEventListener('click', () => {
        searchInput.value = 'https://anshumans-portfolio.netlify.app/'
        searchInput.focus()
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

// Placeholder dateTime

document.addEventListener('DOMContentLoaded', function () {

    function updatePlaceholder() {
        const inputField = document.getElementById("searchInput");
        const currentTime = new Date();
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes().toString().padStart(2, '0');
        const seconds = currentTime.getSeconds().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const twelveHour = hours % 12 || 12;
        const day = currentTime.toLocaleString('en-US', { weekday: 'short' });
        const date = currentTime.toLocaleDateString('en-IN', { day: '2-digit', month: '2-digit', year: '2-digit' });

        inputField.setAttribute("placeholder", `${twelveHour}:${minutes}:${seconds} ${ampm} | ${day}, ${date}`);
    }

    setInterval(updatePlaceholder, 1000);

    updatePlaceholder();
});