$(function(){
    var apiKey = "18981643-ee07b4d55bd89f8d3b9d18f9c";
    var imgId = getIdForTime();
    var url = "https://pixabay.com/api/?key=" + apiKey + "&id=" + imgId;
    $.get(url, function(data){
        $("#body").css({"background-image": "url(" + data.hits[0].largeImageURL + ")"});
    });
})

function getIdForTime(){
    var id;
    switch(new Date().getHours()){
        case 2:
        case 3:
        case 4:
            id = 2111811;
            break;
        case 5:
        case 6:
        case 7:
            id = 3358870;
            break;
        case 8:
        case 9:
        case 10:
            id = 2836301;
            break;
        case 11:
        case 12:
        case 13:
            id = 3601004;
            break;
        case 14:
        case 15:
        case 16:
            id = 3082832;
            break;
        case 17:
        case 18:
        case 19:
            id = 1589616;
            break;
        case 20:
        case 21:
        case 22:
            id = 1979546;
            break;
        case 23:
        case 24:
        case 1:
            id = 3194001;
            break;
    }
    return id;
}