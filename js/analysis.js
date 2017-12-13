

$(document).ready(function() {

  var animClass = 'isAnimating';
  var $firstAnim = $('.jsFirstAnim');
  var $secondAnim = $('.jsSecondAnim');

  $firstAnim.removeClass(animClass);
  console.log("ready");
  window.setTimeout(function() {
    $secondAnim.removeClass(animClass);
  }, 250);


  // var canvas = document.getElementById("canvas");
  // var yPB = $('.js-yourPointBreakdown');
  // var ctx = canvas.getContext('2d');

  // var yellowGradient = ctx.createLinearGradient(0, 0, 200, 0);
  // yellowGradient.addColorStop(0.4, '#faf369');
  // yellowGradient.addColorStop(1, '#fbc517');

  // Chart.defaults.global.defaultFontFamily = 'Fira Sans';
  // var yPBChart = new Chart(yPB, {
  //   type: 'horizontalBar',
  //   barThickness: 50,
  //   data: {
  //     labels: ["Winners", "Forced Errors", "Unforced Errors"],
  //     datasets: [{
  //       // label: "out of total shots",
  //       data: [24, 25, 26],
  //       backgroundColor: yellowGradient,
  //     },
  //     {
  //       // label: "out of what shots",
  //       data: [32, 4, 15],
  //     }]
  //   },
  //   options: {
  //     legend: {
  //       display: false,
  //     },
  //     scales: {
  //       xAxes: [{
  //         gridLines: {
  //             display: false,
  //         },
  //         ticks: {
  //           display: false,
  //         },
  //       }],
  //       yAxes: [{
  //         gridLines: {
  //             display: false,
  //         },
  //       }],
        
  //     }
  //   }
  // })

});