$(function(){
    var imageGenre = "animal";
    let randPage = getRandomNumber(5);
    var apiKey = "18981643-ee07b4d55bd89f8d3b9d18f9c";
    var url = "https://pixabay.com/api/?key=" + apiKey + "&q=" + imageGenre + "&per_page=100" + "&page" + randPage;
    $.get(url, function(data){
        let randImg = getRandomNumber(100);
        $("#body").css({"background-image": "url(" + data.hits[randImg].largeImageURL + ")"});
    });
})

function getRandomNumber(max){
    return Math.floor(Math.random() * Math.floor(max));
}