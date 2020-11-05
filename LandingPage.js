$(function(){
    //Get background image dependant on time of day
    var apiKey = "18981643-ee07b4d55bd89f8d3b9d18f9c";
    var imgId = getIdForTime();
    var url = "https://pixabay.com/api/?key=" + apiKey + "&id=" + imgId;
    $.get(url, function(data){
        $("#body").css({"background-image": "url(" + data.hits[0].largeImageURL + ")"});
    });
    //Call time function
    showTime();
    //Get weather
    var city = "plymouth";
    $.get("https://api.weatherapi.com/v1/current.json?key=4947a4d458c04be0811153820200511&q=" + city, function(weather){
        console.log(getWeatherIcon(weather.current.condition.code));
        $("#weatherImg").prop("src", getWeatherIcon(weather.current.condition.code));
    });
    //Get and set quote
    $.get("https://api.quotable.io/random", function(quotes){
        $("#quote").html(quotes.content + " - " + quotes.author);
    });
    //Set the greeting dependant on time of day
    var greeting = getGreeting();
    if(localStorage.name != undefined){
        $("#greeting").html(greeting + ", " + "<span id=\"name\" contentEditable=\"true\">" + localStorage.getItem("name") + "</span>");
    }
    else{
        $("#greeting").html(greeting + ", " + "<span id=\"name\" class=\"name\" contentEditable=\"true\">Enter your name</span>");
    }
    //Listen for click on name
    $("#name").click(function(){
        if($("#name").html() == "Enter your name"){
            $("#name").html(" ")
        }
    }); 
    //On unfocus either update name in key and remove class or input enter your name
    $("#name").focusout(function(){
        if($.trim($("#name").text()) != ""){
            localStorage.setItem("name", $("#name").html());
            $("#name").removeClass("name");
        }
        else if($.trim($("#name").text()) == "" && localStorage.getItem("name") != undefined){
            $("#name").html(localStorage.getItem("name"));
        }
        else if($.trim($("#name").text()) == "" && localStorage.getItem("name") == undefined){
            $("#name").html("Enter your name");
        }
    });
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
//Get and show time
function showTime(){
    var time = new Date().toLocaleTimeString();

    $("#time").html(time);

    setTimeout(showTime, 1000);
}
//Get weather icon
function getWeatherIcon(code){
    var time = new Date().getHours();
    switch(code){
        //Sunny or clear night
        case 1000:
            if(time >= 6 && time < 20){
                return "https://img.icons8.com/ios/72/sun--v1.png";
            }
            else{
                return "https://img.icons8.com/ios/72/bright-moon.png";
            }
        //Partly cloudy day or night
        case 1003:
            if(time >= 6 && time < 20){
                return "https://img.icons8.com/ios/72/partly-cloudy-day.png";
            }
            else{
                return "https://img.icons8.com/ios/72/partly-cloudy-night--v1.png";
            }
        //Cloudy
        case 1006:
        case 1009:
            return "https://img.icons8.com/ios/72/cloud.png";
        //Mist, haze or fog
        case 1030:
        case 1135:
        case 1147:
            if(time >= 6 && time < 20){
                return "https://img.icons8.com/ios/72/fog-day.png";
            }
            else{
                return "https://img.icons8.com/ios/72/fog-night.png";
            }
        //Patchy rain
        case 1063:
        case 1072:
        case 1180:
            return "https://img.icons8.com/ios/72/partly-cloudy-rain--v2.png";
        //Light rain
        case 1150:
        case 1153:
        case 1168:    
        case 1180:
        case 1183:
        case 1198:
        case 1240:
            return "https://img.icons8.com/ios/72/light-rain.png";
        //Moderate rain
        case 1171:
        case 1186:
        case 1189:
        case 1201:
        case 1243:
            return "https://img.icons8.com/ios/72/moderate-rain.png";
        //Heavy rain
        case 1192:
        case 1195:
            return "https://img.icons8.com/ios/72/heavy-rain.png";
        //Torrential rain
        case 1246:
            return "https://img.icons8.com/ios/72/torrential-rain--v1.png";
        //Light snow
        case 1066:
        case 1114:
        case 1210:
        case 1213:
        case 1216:
        case 1255:
            return "https://img.icons8.com/ios/72/light-snow.png";
        //Blizzard
            case 1117:
                return "https://img.icons8.com/ios/72/snow-storm--v1.png";
        //Heavy snow
        case 1219:
        case 1222:
        case 1225:
        case 1258:
            return "https://img.icons8.com/ios/72/snow.png";
        //Sleet
        case 1069:
        case 1204:
        case 1207:
        case 1249:
        case 1252:
            return "https://img.icons8.com/ios/72/sleet.png";
        //Stormy weather
        case 1087:
        case 1273:
        case 1279:
        case 1276:
        case 1282:
            return "https://img.icons8.com/ios/72/storm--v1.png";
        //Hail
        case 1237:
        case 1261:
        case 1264:
            return "https://img.icons8.com/ios/72/hail.png";
    }
}