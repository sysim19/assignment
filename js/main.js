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


}); // d


// Ajak call



//end of code


// $(document).ready(function() {
  
//   var scrollLink = $('.scroll');
  
//   // Smooth scrolling
//   scrollLink.click(function(e) {
//     e.preventDefault();
//     $('body,html').animate({
//       scrollTop: $(this.hash).offset().top
//     }, 1000 );
//   });
  
//   // Active link switching
//   $(window).scroll(function() {
//     var scrollbarLocation = $(this).scrollTop();
    
//     scrollLink.each(function() {
      
//       var sectionOffset = $(this.hash).offset().top - 20;
      
//       if ( sectionOffset <= scrollbarLocation ) {
//         $(this).parent().addClass('active');
//         $(this).parent().siblings().removeClass('active');
//       }
//     })
    
//   })
  
// })