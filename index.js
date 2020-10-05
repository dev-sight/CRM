window.onload = function() {

  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "Amount By Stage"
    },
    axisY: {
      title: "Sum Of Amount"
    },
    data: [{
      type: "column",
      showInLegend: true,
      legendMarkerColor: "grey",
      legendText: "Stage",
      dataPoints: [{
          y: 300878,
          label: "Qualification"

        },
        {
          y: 266455,
          label: "Need Analysis"
        },
        {
          y: 169709,
          label: "Value Proposition"
        },
        {
          y: 158400,
          label: "Identity Decision Management"
        },
        {
          y: 142503,
          label: "Price Quote"
        },
        {
          y: 101500,
          label: "Negotiation"
        },
        {
          y: 97800,
          label: "Closed Won"
        },
        {
          y: 80000,
          label: "Closed Lost"
        }
      ]
    }]
  });
  chart.render();

}
