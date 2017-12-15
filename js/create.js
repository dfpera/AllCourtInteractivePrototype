function getCaret(direction) {
  if(direction === 'up') {
    return '&nbsp;<div class="icon icon-upV"></div>';
  } else if (direction === 'down') {
    return '&nbsp;<div class="icon icon-downV"></div>';
  }
}

$(function() {
  $('.dropdown').on('click', function(event) {
    event.stopPropagation();
    if ($(this).attr('data-toggle') === 'open') {
      $(this).find('.dropdown-box').hide('slide', {direction: 'up'}, 300);
      $(this).find('.icon').addClass('icon-downV');
      $(this).find('.icon').removeClass('icon-upV');
      $(this).attr('data-toggle', 'close');
    } else {
      // Close other menus
      $('.dropdown').each(function() {
        if($(this).attr('data-toggle') === 'open') {
          $(this).find('.dropdown-box').hide('slide', {direction: 'up'}, 300);
          $(this).find('.icon').addClass('icon-downV');
          $(this).find('.icon').removeClass('icon-upV');
          $(this).attr('data-toggle', 'close');
        }
      });
      $(this).find('.dropdown-box').show('slide', {direction: 'up'}, 300);
      $(this).find('.icon').removeClass('icon-downV');
      $(this).find('.icon').addClass('icon-upV');
      $(this).attr('data-toggle', 'open');
    }
  });

  $('.dropdown .dropdown-content').on('click', function(event) {
    event.stopPropagation();
    var content = $(this).text();
    $(this).parents('.dropdown').children('.selected').html(content + getCaret('down'));
    $(this).parents('.dropdown').attr('data-toggle', 'close');
    $(this).parents('.dropdown-box').hide('slide', {direction: 'up'}, 300);
  });

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

  $('.create_tooltip').hide();
  $('#fidelity').change(function() {
    $('.create_tooltip').animate({
      height: 'toggle',
      opacity: 'toggle',
    });
  });

});