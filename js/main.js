// maw

$( document ).ready(function() {

	$('.navbar-toggle').click(function() {
		$('.nav-list').toggleClass('is-active');
	});
		
  $.ajax({
    url: 'https://reqres.in/api/unknown',
    date : '',
    type : 'GET',
    datatype : 'json'
  }).done (function (json) {
    console.log (json)
  });

  // scroll animation by Maw

  function scrollAnchor(){
    $('a[href*=\\#]:not([href=\\#])').click(function() {
      if (!$(this).hasClass("slick-arrow")) {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          
          if (target.length) {
          $('html,body').animate({
            scrollTop: parseInt(target.offset().top)
          }, 750);
          return false;
          }
        }
      }
    });

    //Click event to scroll to top
    $('.navbar-brand').click(function(){
      $('html, body').animate({scrollTop : 0},800);
      return false;
    });
  };

  scrollAnchor();
  

  // Set the modal image source to the one of the clicked image
  $('.portfolio-item').on('click', function (e) {
    let imageElement = $(e.currentTarget).find('img');
    let imageSource = imageElement.attr('src');
    $('.modal-body img').attr('src', imageSource);
  });

  // Ajax call
  $.ajax({
    url : 'https://reqres.in/api/unknown',
    data : '',
    type : 'GET',
    dataType : 'json'
  }).done(function (json) {

    if (json.data !== undefined) { // Check if the data is there
      for (let i = 0; i < json.data.length; i++) { // Iterate over the array
        let newOption = $('<option>') // Create a shadow element
            .attr('value', json.data[i].color)
            .text(json.data[i].name);

        newOption.appendTo($('#colours')); // Add the element to the select box
      }  
    }
    
    $('#colours').on('change', function () { // Handle the selection event
      $('#message').css('background-color', $('#colours').val() );
    });
  });


}); 