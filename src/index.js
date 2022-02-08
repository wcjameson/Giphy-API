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
});