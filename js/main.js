window.odometerOptions = {
  duration: 100,
  count: 'count'
};

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

var breadcrumbs = $('.breadcrumbs-dot');

var curQ = 0;
var question = [];

function getIcon(iconName) {
  return ' <div class="icon icon-' + iconName + '"></div>';
}

function getPointVal(point) {
  var result = '';
  if (point == 0) {
    result = '100';
  } else if (point == 1) {
    result = '115';
  } else if (point == 2) {
    result = '130';
  } else if (point == 3) {
    result = '140';
  }
  return result;
}

function setUpQ1() {
  var sWinner = (serving === pOne) ? snOne : snTwo;
  var fault = (serving === pOne) ? snOne : snTwo;
  var doubleFault = !(serving === pOne) ? snOne : snTwo;
  var rWinner = !(serving === pOne) ? snOne : snTwo;
  var rError = (serving === pOne) ? snOne : snTwo;
  $('.sWinner .pName').html(sWinner + getIcon('upArrow'));
  $('.fault .pName').html(fault + getIcon('loopBackArrow'));
  $('.doubleFault .pName').html(doubleFault + getIcon('upArrow'));
  $('.rWinner .pName').html(rWinner + getIcon('upArrow'));
  $('.rError .pName').html(rError + getIcon('upArrow'));
  if (serving === pOne) {
    $('.q1 .srv').removeClass('order-2');
    $('.q1 .srv').addClass('order-1');
    $('.q1 .rtn').removeClass('order-1');
    $('.q1 .rtn').addClass('order-2');
  } else {
    $('.q1 .srv').removeClass('order-1');
    $('.q1 .srv').addClass('order-2');
    $('.q1 .rtn').removeClass('order-2');
    $('.q1 .rtn').addClass('order-1');
  }
}

function updateScoreUI() {
  $('.jsScoreNumOne').html(getPointVal(point1));
  $('.jsScoreNumTwo').html(getPointVal(point2));
  $('#jsP1Set1').html(game1);
  $('#jsP2Set1').html(game2);
}

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
        $('.scoreboard_scoreGroupP1 .icon-tennisBall').hide('fade', 500);
        $('.scoreboard_scoreGroupP2 .icon-tennisBall').show('fade', 500);
      } else if (serving == pTwo) {
        serving = pOne;
        $('.scoreboard_scoreGroupP1 .icon-tennisBall').show('fade', 500);
        $('.scoreboard_scoreGroupP2 .icon-tennisBall').hide('fade', 500);
      }
      setUpQ1();
    }
  } else if (player == pTwo) {
    point2++;
    if (point2 > 3) {
      point1 = 0;
      point2 = 0;
      game2++;
      if (serving == pOne) {
        serving = pTwo;
        $('.scoreboard_scoreGroupP1 .icon-tennisBall').hide('fade', 500);
        $('.scoreboard_scoreGroupP2 .icon-tennisBall').show('fade', 500);
      } else if (serving == pTwo) {
        serving = pOne;
        $('.scoreboard_scoreGroupP1 .icon-tennisBall').show('fade', 500);
        $('.scoreboard_scoreGroupP2 .icon-tennisBall').hide('fade', 500);
      }
      setUpQ1();
    }
  }
  updateScoreUI();
}

function moveToBreadcrumb(index) {
  breadcrumbs.removeClass('active');
  breadcrumbs.eq(index).addClass('active');
}

function clearArrows() {
  $('.scoreboard_scoreGroupP1 .icon-upArrow').hide('drop', {direction: 'up'}, 500);
  $('.scoreboard_scoreGroupP1 .icon-downArrow').hide('drop', {direction: 'down'}, 500);
  $('.scoreboard_scoreGroupP2 .icon-upArrow').hide('drop', {direction: 'up'}, 500);
  $('.scoreboard_scoreGroupP2 .icon-downArrow').hide('drop', {direction: 'down'}, 500);
}

$(function() {
  // Initialize names and screens
  $('.scoreboard_playerName.one').text(pOne);
  $('.scoreboard_playerName.two').text(pTwo);
  $('.pOneS, .q2 .pOne').prepend(lnOne);
  $('.pTwoS, .q2 .pTwo').prepend(lnTwo);
  clearArrows();
  $('.q0').show();
  $('.scoreboard_scoreGroupP1 .icon-tennisBall').hide('fade', 500);
  $('.scoreboard_scoreGroupP2 .icon-tennisBall').hide('fade', 500);

  // Fault Flip
  $('.faultButton').flip({axis: 'x'});

  $('button').on('click', function() {
    if ($(this).hasClass('prev')) {

    } else if ($(this).hasClass('pass')) {

    // If pOne serve button
    } else if ($(this).hasClass('pOneS')) {
      // Set server
      serving = pOne;

      // Set up question 1
      setUpQ1();

      // Animate question
      $('.q0').hide('drop', {direction: 'left'}, 250);
      $('.q1').show('drop', {direction: 'right'}, 250);
      moveToBreadcrumb(0);

      // Animate server ball
      $('.scoreboard_scoreGroupP1 .icon-tennisBall').show('fade', 500);

    // If pTwo server button
    } else if ($(this).hasClass('pTwoS')) {
      // Set server
      serving = pTwo;

      // Set up question 1
      setUpQ1();

      // Animate question
      $('.q0').hide('drop', {direction: 'left'}, 250);
      $('.q1').show('drop', {direction: 'right'}, 250);
      moveToBreadcrumb(0);

      // Animate server ball
      $('.scoreboard_scoreGroupP2 .icon-tennisBall').show('fade', 500);

    // If service winner button
    } else if ($(this).hasClass('sWinner')) {
      // Animate question
      $('.q1').hide('drop', {direction: 'left'}, 125);
      // TODO: Set fault button to default
      $('.q1').show('drop', {direction: 'right'}, 250);

      // Set score
      if (serving === pOne) {
        score(pOne);
      } else if (serving === pTwo) {
        score(pTwo);
      }

    // If return winner button
    } else if ($(this).hasClass('rWinner')) {
      // Animate question
      $('.q1').hide('drop', {direction: 'left'}, 125);
      // TODO: Set fault button to default
      $('.q1').show('drop', {direction: 'right'}, 250);

      // Set score
      if (serving === pOne) {
        score(pTwo);
      } else if (serving === pTwo) {
        score(pOne);
      }

    // If return error button
    } else if ($(this).hasClass('rError')) {
      // Animate question
      $('.q1').hide('drop', {direction: 'left'}, 125);
      // TODO: Set fault button to default
      $('.q1').show('drop', {direction: 'right'}, 250);

      // Set score
      if (serving === pOne) {
        score(pOne);
      } else if (serving === pTwo) {
        score(pTwo);
      }

    // If fault button
    } else if ($(this).hasClass('fault')) {
      // Animate question
      $('.faultButton').flip('toggle');
      moveToBreadcrumb(0);

    // If double fault button
    } else if ($(this).hasClass('doubleFault')) {
      // Animate question
      $('.q1').hide('drop', {direction: 'left'}, 125);
      $('.faultButton').flip('toggle');
      $('.q1').show('drop', {direction: 'right'}, 250);
      moveToBreadcrumb(0);

      // Set score
      if (serving === pOne) {
        score(pTwo);
      } else if (serving === pTwo) {
        score(pOne);
      }

    // If ball-in button
    } else if ($(this).hasClass('ballin')) {
      // Animate question
      $('.q1').hide('drop', {direction: 'left'}, 250);
      $('.faultButton').flip(false);
      $('.q2').show('drop', {direction: 'right'}, 250);
      // TODO: Set fault button to default
      moveToBreadcrumb(1);

    // If pOne score button
    } else if ($(this).hasClass('pOne')) {
      // Update question text
      $('.question-text .q3 .pName').text(pOne);
      $('.winner .pName').text(pOne + "'s ");
      $('.fError .pName').text(pTwo + "'s ");
      $('.uError .pName').text(pTwo + "'s ");
      $('.q3 .win').removeClass('order-2');
      $('.q3 .win').addClass('order-1');
      $('.q3 .err').removeClass('order-1');
      $('.q3 .err').addClass('order-2');

      // Animate question
      $('.q2').hide('drop', {direction: 'left'}, 250);
      $('.q3').show('drop', {direction: 'right'}, 250);
      moveToBreadcrumb(2);

      // Add arrows
      $('.scoreboard_scoreGroupP1 .icon-upArrow').show('drop', {direction: 'down'}, 500);

    // If pTwo score button
    } else if ($(this).hasClass('pTwo')) {
      // Update question text
      $('.question-text .q3 .pName').text(pTwo);
      $('.winner .pName').text(pTwo + "'s ");
      $('.fError .pName').text(pOne + "'s ");
      $('.uError .pName').text(pOne + "'s ");
      $('.q3 .win').removeClass('order-1');
      $('.q3 .win').addClass('order-2');
      $('.q3 .err').removeClass('order-2');
      $('.q3 .err').addClass('order-1');

      // Animate question
      $('.q2').hide('drop', {direction: 'left'}, 250);
      $('.q3').show('drop', {direction: 'right'}, 250);
      moveToBreadcrumb(2);

      // Add arrows
      $('.scoreboard_scoreGroupP2 .icon-upArrow').show('drop', {direction: 'down'}, 500);

    // If winner button
    } else if ($(this).hasClass('winner')) {
      // Animate question
      $('.q3').hide('drop', {direction: 'left'}, 250);
      $('.q1').show('drop', {direction: 'right'}, 250);
      moveToBreadcrumb(0);
      score($('.question-text .q3 .pName').text());
      clearArrows();

    // If forced error button
    } else if ($(this).hasClass('fError')) {
      // Animate question
      $('.q3').hide('drop', {direction: 'left'}, 250);
      $('.q1').show('drop', {direction: 'right'}, 250);
      moveToBreadcrumb(0);
      score($('.question-text .q3 .pName').text());
      clearArrows();

    // If unforced error button
    } else if ($(this).hasClass('uError')) {
      // Animate question
      $('.q3').hide('drop', {direction: 'left'}, 250);
      $('.q1').show('drop', {direction: 'right'}, 250);
      moveToBreadcrumb(0);
      score($('.question-text .q3 .pName').text());
      clearArrows();
    }
  });
});