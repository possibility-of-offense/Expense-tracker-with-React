import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    {
      label: "January",
      value: 0,
      id: 1,
    },
    {
      label: "February",
      value: 0,
      id: 2,
    },
    {
      label: "March",
      value: 0,
      id: 3,
    },
    {
      label: "April",
      value: 0,
      id: 4,
    },
    {
      label: "May",
      value: 0,
      id: 5,
    },
    {
      label: "June",
      value: 0,
      id: 6,
    },
    {
      label: "July",
      value: 0,
      id: 7,
    },
    {
      label: "August",
      value: 0,
      id: 8,
    },
    {
      label: "September",
      value: 0,
      id: 9,
    },
    {
      label: "October",
      value: 0,
      id: 10,
    },
    {
      label: "November",
      value: 0,
      id: 11,
    },
    {
      label: "December",
      value: 0,
      id: 12,
    },
  ];

  for (const exp of props.expenses) {
    const expenseMonth = exp.date.getMonth();
    chartDataPoints[expenseMonth].value += Number(exp.amount);
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
