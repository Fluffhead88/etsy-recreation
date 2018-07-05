(function() {
  'use strict';

  $.ajax({
    url: 'https://api.etsy.com/v2/listings/active.js?api_key=l1d8vqh6foq3xp6p2770bp3i&keywords=yarn&includes=Images,Shop&limit=25',
    type: 'GET',
    dataType: 'jsonp',
    success: function(res) {
      console.log(res);
    }
  });

})();