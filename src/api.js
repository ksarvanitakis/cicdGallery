const getPhotosFromUnsplash = (value) => {
    const photos = fetch(`https://api.unsplash.com/search/photos?query=${value}&client_id=hraxE2dYfvMDF9u9uvl2eGW6s1zDW2JVWUMcB-83khQ`)
        .then(response => response.json())
        .then(data => loadImages(data))
}

const loadImages = (data) => {
    console.log(data)
    for (let i = 0; i < data.results.length; i++) {
        const flipCard = document.createElement('div');
        flipCard.className = 'flip-card';
        flipCard.innerHTML = `
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <div class="img" style="background-image: url(${data.results[i].urls.raw})">
                </div>
            </div>
            <div class="flip-card-back">
                <h1>${data.results[i].user.username}</h1>
                <p>${data.results[i].user.location}</p>
                <a href="https://unsplash.com/@${data.results[i].user.username}">My profile</a>
            </div>
        </div>`;
        document.querySelector(".image-container").appendChild(flipCard);
    }
}
module.exports = getPhotosFromUnsplash;