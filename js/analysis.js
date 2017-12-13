

$(document).ready(function() {

  var animClass = 'isAnimating';
  var $firstAnim = $('.jsFirstAnim');
  var $secondAnim = $('.jsSecondAnim');

  $firstAnim.removeClass(animClass);
  console.log("ready");
  window.setTimeout(function() {
    $secondAnim.removeClass(animClass);
  }, 250);

  var $tooltips = $('.tooltip');
  var $tooltipContainers = $('.tooltipContainer');
  var $bars = $('.hBarGraph_bar');

  $bars.on('click', function() {
    $thisTooltip = $(this).find($tooltips);
    $thisTooltipContainer = $(this).find($tooltipContainers);

    if ($(this).hasClass('isTooltipActive')) {
      $thisTooltip.removeClass('isActive');
      $(this).removeClass('isTooltipActive');

      setTimeout(function() {
        $thisTooltipContainer.removeClass('isActive');
      }, 500);
    }
    else {
      $thisTooltip.addClass('isActive');
      $(this).addClass('isTooltipActive');
      $thisTooltipContainer.addClass('isActive');
    }
  });

});