var point1 = 0;
var point2 = 0;
var game1 = 0;
var game2 = 0;
var serving;

var $breadcrumbs = $('.breadcrumbs-dot');

var curQ;

$(function() {
  $(".q0").show();

  $("button").on("click", function() {
    if ($(this).hasClass("prev")) {

    } else if ($(this).hasClass("pass")) {

    } else if ($(this).hasClass("sfuS")) {
      $(".q0").hide(250);
      $(".q1").show(250);
      moveToBreadcrumb(0);
      $(".score.one").addClass("serve");
      serving = "sfu";
    } else if ($(this).hasClass("ubcS")) {
      $(".q0").hide(250);
      $(".q1").show(250);
      moveToBreadcrumb(0);
      $(".score.two").addClass("serve");
      serving = "ubc";
    } else if ($(this).hasClass("sAce")) {
      $(".q1, .q2").hide(250);
      $(".q1").show(250);
      if (serving == "sfu") {
        score("sfu");
      } else if (serving == "ubc") {
        score("ubc");
      }
    } else if ($(this).hasClass("rAce")) {
      $(".q1, .q2").hide(250);
      $(".q1").show(250);
      if (serving == "sfu") {
        score("ubc");
      } else if (serving == "ubc") {
        score("sfu");
      }
    } else if ($(this).hasClass("rError")) {
      $(".q1, .q2").hide(250);
      $(".q1").show(250);
      if (serving == "sfu") {
        score("sfu");
      } else if (serving == "ubc") {
        score("ubc");
      }
    } else if ($(this).hasClass("fault")) {
      $(".q1").hide(250);
      $(".q2").show(250);
      moveToBreadcrumb(0);
    } else if ($(this).hasClass("dFault")) {
      $(".q2").hide(250);
      $(".q1").show(250);
      moveToBreadcrumb(0);
      if (serving == "sfu") {
        score("ubc");
      } else if (serving == "ubc") {
        score("sfu");
      }
    } else if ($(this).hasClass("ballin")) {
      $(".q1, .q2").hide(250);
      $(".q3").show(250);
      moveToBreadcrumb(1);
    } else if ($(this).hasClass("sfuP")) {
      $(".q3").hide(250);
      $(".q4").show(250);
      score("sfu");
      moveToBreadcrumb(2);
    } else if ($(this).hasClass("ubcP")) {
      $(".q3").hide(250);
      $(".q4").show(250);
      moveToBreadcrumb(2);
      score("ubc");
    } else if ($(this).hasClass("winner")) {
      $(".q4").hide(250);
      $(".q1").show(250);
      moveToBreadcrumb(0);
    } else if ($(this).hasClass("fError")) {
      $(".q4").hide(250);
      $(".q1").show(250);
      moveToBreadcrumb(0);
    } else if ($(this).hasClass("uError")) {
      $(".q4").hide(250);
      $(".q1").show(250);
      moveToBreadcrumb(0);
    }
  });
});

function score(player) {
  if (player == "sfu") {
    point1++;
    if (point1 > 3) {
      point1 = 0;
      point2 = 0;
      game1++;
      if (serving == "sfu") {
        serving = "ubc";
        $(".score.one").removeClass("serve");
        $(".score.two").addClass("serve");
      } else if (serving == "ubc") {
        serving = "sfu";
        $(".score.two").removeClass("serve");
        $(".score.one").addClass("serve");
      }
    }
  } else if (player == "ubc") {
    point2++;
    if (point2 > 3) {
      point1 = 0;
      point2 = 0;
      game2++;
      if (serving == "sfu") {
        serving = "ubc";
        $(".score.one").removeClass("serve");
        $(".score.two").addClass("serve");
      } else if (serving == "ubc") {
        serving = "sfu";
        $(".score.two").removeClass("serve");
        $(".score.one").addClass("serve");
      }
    }
  }
  updateScoreUI();
}

function updateScoreUI() {
  $(".score.one").html(getPointVal(point1));
  $(".score.two").html(getPointVal(point2));
  $(".game-one").html(game1);
  $(".game-two").html(game2);
}

function getPointVal(point) {
  var result = "";
  if (point == 0) {
    result = "0";
  } else if (point == 1) {
    result = "15";
  } else if (point == 2) {
    result = "30";
  } else if (point == 3) {
    result = "40";
  }
  return result;
}

function moveToBreadcrumb(index) {
  $breadcrumbs.removeClass('active');
  $breadcrumbs.eq(index).addClass('active');
}
