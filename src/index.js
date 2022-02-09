import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ReturnGif from './return-gif';

$(document).ready(function() {
  $('#GIF-button').click(function() {
    let theme= $("#GIF").val();
    $('#GIF').val("");
    $('.show-GIF').text("");
    let promise= ReturnGif.getGif(theme);
    promise.then(function(response){
      let body=JSON.parse(response);
      let gifUrl=body.data[0].images.original.url;
      $('.show-GIF').append(`<img src='${gifUrl}'>`);
    },function(error){
      $('.showErrors').text(`There was an error processing your request: ${error}`);

    });

  });

  
  $('#GIF-Trend').click(function() {
    //let theme= $("#GIF").val();
    // $('#GIF').val("");
    $('.show-GIF-Trend').text("");
    let promiseTrend= ReturnGif.getGifTrend();
    promiseTrend.then(function(response){
      let bodyTrend=JSON.parse(response);
      let gifUrlTrend=bodyTrend.data[0].images.original.url;
      $('.show-GIF-Trend').append(`<img src='${gifUrlTrend}'>`);
    },function(error){
      $('.showErrors').text(`There was an error processing your request: ${error}`);

    });

  });

  // $('#GIF-Random').click(function() {
  //   //let theme= $("#GIF").val();
  //   // $('#GIF').val("");
  //   //$('.show-GIF-Random').text("");
  //   let promiseRandom= ReturnGif.getGifRandom();
  //   promiseRandom.then(function(response){
  //     let bodyRandom=JSON.parse(response);
  //     let gifUrlRandom=bodyRandom.data.images.original.url;
  //     $('.show-GIF-Random').append(`<img src='${gifUrlRandom}'>`);
  //   },function(error){
  //     $('.showErrors').text(`There was an error processing your request: ${error}`);

  //   });

  // });


});