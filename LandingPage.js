$(function(){
    //Get background image dependant on time of day
    var apiKey = "18981643-ee07b4d55bd89f8d3b9d18f9c";
    var imgId = getIdForTime();
    var url = "https://pixabay.com/api/?key=" + apiKey + "&id=" + imgId;
    $.get(url, function(data){
        $("#body").css({"background-image": "url(" + data.hits[0].largeImageURL + ")"});
    });
    //Get and set quote
    $.get("https://api.quotable.io/random", function(quotes){
        $("#quote").html(quotes.content + " - " + quotes.author);
    });
    //Set the greeting dependant on time of day
    var greeting = getGreeting();
    $("#greeting").html(greeting);
})
//Get image ID dependant on the time of day
function getIdForTime(){
    switch(new Date().getHours()){
        case 2:
        case 3:
        case 4:
            return 2111811;
        case 5:
        case 6:
        case 7:
            return 3358870;
        case 8:
        case 9:
        case 10:
            return 2836301;
        case 11:
        case 12:
        case 13:
            return 3601004;
        case 14:
        case 15:
        case 16:
            return 3082832;
        case 17:
        case 18:
        case 19:
            return 1589616;
        case 20:
        case 21:
        case 22:
            return 1979546;
        case 23:
        case 24:
        case 1:
            return 3194001;
    }
}
//Get the greeting dependant on the time of day
function getGreeting(){
    let time = new Date().getHours();

    if(time >= 5 && time < 12){
        return "Good Morning";
    }
    else if(time >= 12 && time < 17){
        return "Good afternoon";
    }
    else if(time >= 17 && time < 20){
        return "Good evening";
    }
    else{
        return "Good Night";
    }
}

