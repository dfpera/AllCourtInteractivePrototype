$(function() {
  $('.resultsSet_content').hide();
  $('.resultsGame_content').hide();

  $('.resultsSet').on('click', function() {
    $(this).find('.resultsSet_content').toggle('slide', {direction: 'up'}, 500);
    $(this).find('.resultsSet_title .icon').toggleClass('icon-downV');
    $(this).find('.resultsSet_title .icon').toggleClass('icon-upV');
  });

  $('.resultsSet .resultsGame').on('click', function(event) {
    event.stopPropagation();
    $(this).find('.resultsGame_content').toggle('slide', {direction: 'up'}, 500);
    $(this).find('.resultsGame_title .icon').toggleClass('icon-downV');
    $(this).find('.resultsGame_title .icon').toggleClass('icon-upV');
  });

  $('.resultsSet .resultsGame .resultsPoint').on('click', function(event) {
    event.stopPropagation();
  });
});