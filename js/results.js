$(function() {
  $('.resultsSet-One .resultsGame').hide();
  $('.resultsPoint').hide();

  $('.resultsSet-One').on('click', function() {
    $(this).find('.resultsGame').toggle('slide', {direction: 'up'}, 500);
    $(this).find('.resultsSet_title .icon').toggleClass('icon-downV');
    $(this).find('.resultsSet_title .icon').toggleClass('icon-upV');
  });

  $('.resultsSet-One .resultsGame').on('click', function(event) {
    event.stopPropagation();
    $(this).find('.resultsPoint').toggle('slide', {direction: 'up'}, 500);
    $(this).find('.resultsGame_title .icon').toggleClass('icon-plus');
    $(this).find('.resultsGame_title .icon').toggleClass('icon-minus');
  });
});