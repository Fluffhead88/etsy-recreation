$.when($.ready).then(function() {

  'use strict';

  var source = document.getElementById('main-template').innerHTML;
  var template = Handlebars.compile(source);

  var context = {
    people: [{
        firstName: "Yehuda",
        lastName: "Katz"
      },
      {
        firstName: "Carl",
        lastName: "Lerche"
      },
      {
        firstName: "Alan",
        lastName: "Johnson"
      }
    ]
  }
  var html = template(context);

  $('.template-data').html(html);
  console.log('html', html);

});