(function() {
  'use strict';

  $.ajax({
    url: 'https://api.etsy.com/v2/listings/active.js?api_key=l1d8vqh6foq3xp6p2770bp3i&keywords=guitarstrap&includes=Images,Shop&limit=25',
    type: 'GET',
    dataType: 'jsonp',
    success: getResults
  });

  function getResults(res) {
    console.log(res);

    var source = document.getElementById('main-template').innerHTML;
    var template = Handlebars.compile(source);

    var context = res;
    var html = template(context);

    $('.template-data').html(html);
  }

})();