window.onload = function () {

    var chart = new CanvasJS.Chart("barChartContainer", {
      animationEnabled: true,
      title: {
        text: "Tax Distribution"
      },
      data: [{
        type: "bar",
        dataPoints: [
          { y: 2, label: "Staking Rewards", color: "green" },
          { y: 4, label: "Marketing", color: "red" },
          { y: 3, label: "Development", color: "blue" },
          { y: 1, label: "Liquidity Pool", color: "purple" }
        ]
      }]
    });
    chart.render();
  
  }
  