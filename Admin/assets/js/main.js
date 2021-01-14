

let searchbar = document.querySelector('#search'),
    searchResults = document.querySelector('.search-results'),
    servicesAutoComplete = document.querySelector('#services'),
    services = ['Facial', 'Keratin Treatment', 'Hair Smooothing', 'Hair Straightening', 'Shampoo', 'Beard Trimming',
        'Hairfall Treatment', 'Hair Color', 'Pedicure', 'Waxing', 'Manicure', 'Haircolor Streak'
    ],
    loadingPage = document.querySelector('#splash-screen'),
    backButton = document.querySelector('#goback');

if (searchbar) {
    services.forEach(service => {
        servicesAutoComplete.innerHTML += `<option>${service}</option>`;
    })

    searchbar.addEventListener('keydown', e => {
        if (e.key === "Enter") {
            searchResults.innerHTML = `
            <div class="row my-4">
                <div class="col-12">
                    <div class="search-card p-4 d-flex" style="background-image: url('assets/img/facial.jpg');">
                        <div class="overlay-text text-left d-flex flex-column justify-content-end">
                            <h2>${searchbar.value}</h2>
                            <p class="h6 mb-0">₹3600 - onwards</p>
                        </div>
                     </div>
                </div>
            </div>
            `
        }
    })
}
setTimeout(() => {
    if (loadingPage) {
        window.location.href = 'landing.html';
    }
}, 3000);


backButton.addEventListener('click', () => {
    history.back(-1);
})