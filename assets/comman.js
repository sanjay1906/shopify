$(document).ready(function ()
{

  // slider //

  $(".lazy").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  // mega-menu 

  $(".main-menu-li").click(function (e)
  {
    let offers = $(this).children('a').text().trim()
    if ($(this).children('div').css('display') === 'none') {
      if (offers == 'OFFERS') {
        $(".mega-menu").addClass("second-level");
        $(".right-side").css('display', 'none')
        $('.single-list').addClass('offers-view')
      }
      else {
        $(".mega-menu").removeClass("second-level");
        $(".right-side").css('display', 'block')
        $('.single-list').removeClass('offers-view')
      }
      $('.mega-menu').css('display', 'none')
      $(this).children('div').css('display', 'block')
      if (offers == 'LOOKBOOK') {
        $('.mega-menu').css('display', 'none')
      }
    } else {
      $('.mega-menu').css('display', 'none')
    }
  });
});

