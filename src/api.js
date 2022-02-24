
const getPhotosFromUnsplash = () => {
    const photos = fetch("https://api.unsplash.com/search/photos?query=london&client_id=hraxE2dYfvMDF9u9uvl2eGW6s1zDW2JVWUMcB-83khQ")
        .then(response => response.json())
        .then(txt => console.log(txt))
}

module.exports = getPhotosFromUnsplash;