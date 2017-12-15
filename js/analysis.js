

$(document).ready(function() {

  var animClass = 'isAnimating';
  var $firstAnim = $('.jsFirstAnim');
  var $secondAnim = $('.jsSecondAnim');

  var $onboardingButton = $('.js-analysisOnboardingExample_button');

  var $tooltips = $('.tooltip');
  var $tooltipContainers = $('.tooltipContainer');
  var $bars = $('.hBarGraph_bar');

  resetAndAnimateBars();

  $onboardingButton.on('click', function() {
    $('.noScroll').removeClass('noScroll');
    $('.analysisOnboarding').removeClass('isActive');
    resetBars();
    setTimeout(function() {
      $('.analysisOnboarding').addClass('isHidden');
      resetAndAnimateBars();
    }, 800);
  });

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

//////////////////////////////////////////////////////////
  
  // function

  function resetAndAnimateBars() {
    if($firstAnim.hasClass(animClass)) {
      animateBars();
    } else {
      resetBars();
      setTimeout(function() {
        animateBars();
      }, 800);
    }
  }

  function resetBars() {
    $firstAnim.addClass(animClass);
    $secondAnim.addClass(animClass);
  }

  function animateBars() {
    $firstAnim.removeClass(animClass);
    setTimeout(function() {
      $secondAnim.removeClass(animClass);
    }, 250);
  }

});