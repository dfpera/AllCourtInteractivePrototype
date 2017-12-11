var snOne = 'Pachnev';
var snTwo = 'Verma';
var lnOne = 'Sam<br>Pachnev';
var lnTwo = 'Julie<br>Verma';
var pOne = 'S. Pachnev';
var pTwo = 'J. Verma';
var point1 = 0;
var point2 = 0;
var game1 = 0;
var game2 = 0;
var serving;

var $breadcrumbs = $('.breadcrumbs-dot');

var curQ;

$(function() {
  // Initialize names and screens
  $('.scoreboard_playerName.one').text(pOne);
  $('.scoreboard_playerName.two').text(pTwo);
  $('.pOneS').text(pOne);
  $('.pTwoS').text(pTwo);
  $('.q0').show();

  $('button').on('click', function() {
    if ($(this).hasClass('prev')) {

    } else if ($(this).hasClass('pass')) {

    // If pOne serve button
    } else if ($(this).hasClass('pOneS')) {
      // Set server
      $('.score.one').addClass('serve');
      serving = pOne;

      // Set up question 1
      $('.sWinner .pName').prepend((serving === pOne) ? snOne : snTwo);
      $('.sWinner .pName > .icon').addClass('icon-upArrow');
      $('.fault .pName').prepend((serving === pOne) ? snOne : snTwo);
      $('.fault .pName > .icon').addClass('icon-loopBackArrow');
      $('.rWinner .pName').prepend(!(serving === pOne) ? snOne : snTwo);
      $('.rWinner .pName > .icon').addClass('icon-upArrow');
      $('.rError .pName').prepend((serving === pOne) ? snOne : snTwo);
      $('.rError .pName > .icon').addClass('icon-upArrow');

      // Animate question
      $('.q0').hide('slide', {direction: 'left'}, 250);
      $('.q1').show('slide', {direction: 'right'}, 250);
      moveToBreadcrumb(0);

    // If pTwo server button
    } else if ($(this).hasClass('pTwoS')) {
      // Set server
      $('.score.two').addClass('serve');
      serving = pTwo;

      // Set up question 1
      $('.sWinner .pName').prepend((serving === pOne) ? snOne : snTwo);
      $('.sWinner .pName > .icon').addClass('icon-upArrow');
      $('.fault .pName').prepend((serving === pOne) ? snOne : snTwo);
      $('.fault .pName > .icon').addClass('icon-loopBackArrow');
      $('.rWinner .pName').prepend(!(serving === pOne) ? snOne : snTwo);
      $('.rWinner .pName > .icon').addClass('icon-upArrow');
      $('.rError .pName').prepend((serving === pOne) ? snOne : snTwo);
      $('.rError .pName > .icon').addClass('icon-upArrow');

      // Animate question
      $('.q0').hide('slide', {direction: 'left'}, 250);
      $('.q1').show('slide', {direction: 'right'}, 250);
      moveToBreadcrumb(0);

    // If service winner button
    } else if ($(this).hasClass('sWinner')) {
      // Animate question
      $('.q1').hide('slide', {direction: 'left'}, 125);
      // TODO: Set fault button to default
      $('.q1').show('slide', {direction: 'right'}, 250);

      // Set score
      if (serving == pOne) {
        score(pOne);
      } else if (serving == pTwo) {
        score(pTwo);
      }

    // If return winner button
    } else if ($(this).hasClass('rWinner')) {
      // Animate question
      $('.q1').hide('slide', {direction: 'left'}, 125);
      // TODO: Set fault button to default
      $('.q1').show('slide', {direction: 'right'}, 250);

      // Set score
      if (serving == pOne) {
        score(pTwo);
      } else if (serving == pTwo) {
        score(pOne);
      }

    // If return error button
    } else if ($(this).hasClass('rError')) {
      // Animate question
      $('.q1').hide('slide', {direction: 'left'}, 125);
      // TODO: Set fault button to default
      $('.q1').show('slide', {direction: 'right'}, 250);

      // Set score
      if (serving == pOne) {
        score(pOne);
      } else if (serving == pTwo) {
        score(pTwo);
      }

    // If fault button
    } else if ($(this).hasClass('fault')) {
      // Animate question
      // TODO: Add animation for fault
      moveToBreadcrumb(0);

    // If double fault button
    } else if ($(this).hasClass('doubleFault')) {
      // Animate question
      $('.q1').hide('slide', {direction: 'left'}, 125);
      // TODO: Animate the fault button back to default
      $('.q1').show('slide', {direction: 'right'}, 250);
      moveToBreadcrumb(0);

      // Set score
      if (serving == pOne) {
        score(pTwo);
      } else if (serving == pTwo) {
        score(pOne);
      }

    // If ball-in button
    } else if ($(this).hasClass('ballin')) {
      // Animate question
      $('.q1').hide('slide', {direction: 'left'}, 250);
      $('.q2').show('slide', {direction: 'right'}, 250);
      // TODO: Set fault button to default
      moveToBreadcrumb(1);

    // If pOne score button
    } else if ($(this).hasClass('pOne')) {
      // Animate question
      $('.q2').hide('slide', {direction: 'left'}, 250);
      $('.q3').show('slide', {direction: 'right'}, 250);
      score(pOne);
      moveToBreadcrumb(2);

    // If pTwo score button
    } else if ($(this).hasClass('pTwo')) {
      // Animate question
      $('.q2').hide('slide', {direction: 'left'}, 250);
      $('.q3').show('slide', {direction: 'right'}, 250);
      moveToBreadcrumb(2);
      score(pTwo);

    // If winner button
    } else if ($(this).hasClass('winner')) {
      // Animate question
      $('.q3').hide('slide', {direction: 'left'}, 250);
      $('.q1').show('slide', {direction: 'right'}, 250);
      moveToBreadcrumb(0);

    // If forced error button
    } else if ($(this).hasClass('fError')) {
      // Animate question
      $('.q3').hide('slide', {direction: 'left'}, 250);
      $('.q1').show('slide', {direction: 'right'}, 250);
      moveToBreadcrumb(0);

    // If unforced error button
    } else if ($(this).hasClass('uError')) {
      // Animate question
      $('.q3').hide('slide', {direction: 'left'}, 250);
      $('.q1').show('slide', {direction: 'right'}, 250);
      moveToBreadcrumb(0);
    }
  });
});

// TODO: Maybe add ad scoring
function score(player) {
  if (player == pOne) {
    point1++;
    if (point1 > 3) {
      point1 = 0;
      point2 = 0;
      game1++;
      if (serving == pOne) {
        serving = pTwo;
        $('.score.one').removeClass('serve');
        $('.score.two').addClass('serve');
      } else if (serving == pTwo) {
        serving = pOne;
        $('.score.two').removeClass('serve');
        $('.score.one').addClass('serve');
      }
    }
  } else if (player == pTwo) {
    point2++;
    if (point2 > 3) {
      point1 = 0;
      point2 = 0;
      game2++;
      if (serving == pOne) {
        serving = pTwo;
        $('.score.one').removeClass('serve');
        $('.score.two').addClass('serve');
      } else if (serving == pTwo) {
        serving = pOne;
        $('.score.two').removeClass('serve');
        $('.score.one').addClass('serve');
      }
    }
  }
  updateScoreUI();
}

function updateScoreUI() {
  $('.score.one').html(getPointVal(point1));
  $('.score.two').html(getPointVal(point2));
  $('.game-one').html(game1);
  $('.game-two').html(game2);
}

function getPointVal(point) {
  var result = '';
  if (point == 0) {
    result = '0';
  } else if (point == 1) {
    result = '15';
  } else if (point == 2) {
    result = '30';
  } else if (point == 3) {
    result = '40';
  }
  return result;
}

function moveToBreadcrumb(index) {
  $breadcrumbs.removeClass('active');
  $breadcrumbs.eq(index).addClass('active');
}
