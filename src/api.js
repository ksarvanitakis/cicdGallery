
const getPhotosFromUnsplash = (value) => {
    const photos = fetch(`https://api.unsplash.com/search/photos?query=${value}&client_id=hraxE2dYfvMDF9u9uvl2eGW6s1zDW2JVWUMcB-83khQ`)
        .then(response => response.json())
        .then(data => loadImages(data))

}
const loadImages = (data) => {
    for(let i = 0;i < data.results.length;i++){
      let image = document.createElement("div");
      image.className = "img";
      image.style.backgroundImage = "url("+data.results[i].urls.raw + "&w=1366&h=768" +")";
      document.querySelector(".image-container").appendChild(image);
    }
  }
module.exports = getPhotosFromUnsplash;