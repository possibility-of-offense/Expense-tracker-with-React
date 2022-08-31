import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  let max = Math.max(...props.dataPoints.map((el) => el.value));

  return (
    <div className="chart">
      {props.dataPoints.length > 0 ? (
        props.dataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.id}
            value={dataPoint.value}
            maxValue={max}
            label={dataPoint.label}
          />
        ))
      ) : (
        <p>No chart table in here</p>
      )}
    </div>
  );
}

export default Chart;
