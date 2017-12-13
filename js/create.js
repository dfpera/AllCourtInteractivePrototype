  
// function initCustomize(menuID) {
//   // Customize (medium/large)
//   $(menuID + '-big .panel-container').click(function() {
//     var currentImg = $(this).find('.icon-container img');
//     var currentSrc = currentImg.attr('src').split('.')[0];
//     if (currentSrc.indexOf('-active') == -1) {
//       // Reset active panel
//       var allPanels = $(menuID + '-big .panel-container');
//       allPanels.removeClass('active');
//       allPanels.each(function() {
//         var img = $(this).find('.icon-container img');
//         var src = img.attr('src');
//         img.attr('src', src.replace('-active', ''));
//       });
//       // Set large toggle active
//       currentImg.attr(
//         'src',
//         currentSrc + '-active.png'
//       );
//       $(this).toggleClass('active');
//       // Set small drop down text
//       var content = $(this).children('div').text();
//       $(menuID + '.dropdown > div.capitalize').text(content);
//     }
//   });

$(function() {
//   $(menuID).click(function(event) {
//     event.stopPropagation();
//     if ($(this).attr("data-toggle") === "open") {
//       $(this).find('.dropdown-box').slideUp();
//       $(this).find('.dropdown-caret').addClass('icon-downV');
//       $(this).find('.dropdown-caret').removeClass('icon-upV');
//       $(this).attr("data-toggle", "close");
//     } else {
//       // Close other menus
//       $('.dropdown').each(function() {
//         if($(this).attr("data-toggle") === "open") {
//           $(this).find('.dropdown-box').slideUp();
//           $(this).find('.dropdown-caret').addClass('icon-downV');
//           $(this).find('.dropdown-caret').removeClass('icon-upV');
//           $(this).attr("data-toggle", "close");
//         }
//       });
//       $(this).find('.dropdown-box').slideDown();
//       $(this).find('.dropdown-caret').removeClass('icon-downV');
//       $(this).find('.dropdown-caret').addClass('icon-upV');
//       $(this).attr("data-toggle", "open");
//     }
// });

// // Menu Options
// $(menuID + ' .dropdown-box > .dropdown-content').click(function() {
//   var content = $(this).text();
//   // Set small drop down text
//   $(this).parents('.dropdown').children('div.capitalize').text(content);
//   // Set large toggle active
//   var bigMenuOptions = $(menuID + '-big .panel-container');
//   bigMenuOptions.each(function() {
//     // Reset active panel
//     var img = $(this).find('.icon-container img');
//     var src = img.attr('src');
//     img.attr('src', src.replace('-active', ''));
//     $(this).removeClass('active');
//     if ($(this).children('h5').text() === content) {
//       var currentImg = $(this).find('.icon-container img');
//       var currentSrc = currentImg.attr('src').split('.')[0];
//       currentImg.attr(
//         'src',
//         currentSrc + '-active.png'
//       );
//       $(this).toggleClass('active');
//     }
//   });
$('.indoor').hide();

  $('#outdoor').on('click', function() {
    $('.indoor').hide();
    $('.outdoor').show();

  });
  $('#indoor').on('click', function() {
    $('.outdoor').hide();
    $('.indoor').show();
    $('.carousel').carousel('destroy');
  });

});