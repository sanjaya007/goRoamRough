const config = {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Number of Visitors",
        data: [10, 20, 30, 20, 30, 20, 30, 100],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.4,
      },
    ],
  },
};

const myChart = new Chart(document.getElementById("myChart"), config);
