import palette from "../../../../themes/palette"

export const data = {
  labels: [
    "16 May",
    "17 May",
    "18 May",
    "19 May",
    "20 May",
    "21 May",
    "22 May",
  ],
  datasets: [
    {
      label: "Score",
      backgroundColor: palette.primary.main,
      data: [15.55, 9.27, 13.73, 2, 13.68, 6.45, 0.73],
      data1: [
        "Peking Duck",
        "Pizza",
        "Hamburger",
        "Frozen Yogurt",
        "Prime Rib",
        "Pho",
        "Greek Salad",
      ],
    },
    {
      label: "Car Miles",
      backgroundColor: palette.secondary.main,
      data: [36.08, 21.51, 31.85, 4.64, 31.74, 14.96, 1.69],
    },
  ],
}

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  legend: { display: true },
  cornerRadius: 20,
  tooltips: {
    callbacks: {
      title: function(tooltipItem, data) {
        return data.datasets[0].data1[tooltipItem[0].index]
      },
    },
    enabled: true,
    mode: "label",
    intersect: false,
    borderWidth: 1,
    borderColor: palette.divider,
    backgroundColor: palette.white,
    titleFontColor: palette.text.primary,
    bodyFontColor: palette.text.secondary,
    footerFontColor: palette.text.secondary,
  },
  layout: { padding: 0 },
  scales: {
    xAxes: [
      {
        barThickness: 12,
        maxBarThickness: 10,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
        ticks: {
          fontColor: palette.text.secondary,
        },
        gridLines: {
          display: false,
          drawBorder: false,
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          fontColor: palette.text.secondary,
          beginAtZero: true,
          min: 0,
        },
        gridLines: {
          borderDash: [2],
          borderDashOffset: [2],
          color: palette.divider,
          drawBorder: false,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
          zeroLineColor: palette.divider,
        },
      },
    ],
  },
}
