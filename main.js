(function() {
  'use strict';
  // ajax call to etsy API to retrieve info for items
  $.ajax({
    url: 'https://api.etsy.com/v2/listings/active.js?api_key=l1d8vqh6foq3xp6p2770bp3i&keywords=guitarstrap&includes=Images,Shop&limit=25',
    type: 'GET',
    dataType: 'jsonp',
    success: getResults
  });
  // creates function to be called on successful ajax call
  function getResults(res) {
    console.log(res);
    // creats template for handlebars to insert into html
    var source = document.getElementById('main-template').innerHTML;
    var template = Handlebars.compile(source);

    var context = res;
    var html = template(context);
    // names info template-data to be linked in html
    $('.template-data').html(html);
  }

})();