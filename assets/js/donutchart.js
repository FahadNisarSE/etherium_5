window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title: {
      text: "Tokenomics",
    },
    data: [
      {
        type: "doughnut",
        startAngle: 60,
        innerRadius: 60,
        indexLabelFontSize: 17,
        indexLabel: "{label} - #percent%",
        toolTipContent: "<b>{label}:</b> {y} (#percent%)",
        dataPoints: [
          { y: 70, label: "Holders", color: "green" },
          { y: 10, label: "Staking Rewards", color: "red" },
          { y: 20, label: "Liquidity Pool", color: "blue" },
        ],
      },
    ],
  });
  chart.render();
};
