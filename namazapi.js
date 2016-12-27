$('document').ready(function() {
  $('form').submit(function(e) {
    e.preventDefault();
    var $city = $('.city').val();
    var $country = $('.country').val();
    namazTimings($city, $country);
  });


 function namazTimings(city, country) {
    debugger
    $.ajax({
      method: 'GET',
      url: "http://api.aladhan.com/timingsByCity?city="+city+"&country="+country+"&method=2",
      success: function(data) {
        callBack(data);
      },
      error: function(data) {
        console.log(data);
      }
    });
 }

  function callBack(data) {
      $.each(Object.keys(data.data.timings), function(i,v) {
        $('.timing-panel').append("<ul><li><p>"+v+":"+ data.data.timings[v]+"</p></li></ul>");
      })
  }
})