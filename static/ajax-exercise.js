"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    $.get('/fortune', fortuneText);
}

function fortuneText(result) {
    // get text returned by the /fortune route
    $('#fortune-text').html(result);
}

$('#get-fortune-button').on('click', showFortune);

showFortune();

// PART 2: SHOW WEATHER

function weatherInfo(result) {
    console.log(result);
    $('#weather-info').html(result[0]);
}

function showWeather(evt) {
    evt.preventDefault();

    var url = "/weather?zipcode=" + $("#zipcode-field").val();
    console.log(url);

    // TODO: request weather with that URL and show the forecast in #weather-info
    $.post('/weather.json',
           url,
           weatherInfo);
}

$("#weather-form").on('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


