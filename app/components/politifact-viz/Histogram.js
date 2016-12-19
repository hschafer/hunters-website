import * as d3 from "d3";

export default class Histogram extends React.Component {
  render() {
    return (
        <div className="chart-container">
          {this.props.data &&
            <h2>
              {this.props.name + " (" + this.totalRatings() + " reviews)"}
            </h2>
          }
        </div>
    );
  }

  totalRatings() {
    if (this.props.data) {
      return this.props.data.reduce(function(acc, ruling) {
        return acc + ruling.count;
      }, 0);
    } else {
      return 0;
    }
  }

  componentDidUpdate() {
    console.log("Calling did update: ", this.props);
    if (this.props.data) {
      var data = this.props.data;
      console.log(" And I have state to draw too!");
      var margin = {top: 20, right: 20, bottom: 30, left: 40},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

      // Create axises
      var xAxis = d3.scaleBand()
        .domain(data.map(function(d) { return d.ruling; }))
        .range([0, width])
        .padding(0.1);
      var yAxis = d3.scaleLinear()
        .domain([0, d3.max(data.map(function(d) { return d.count; }))])
        .range([height, 0]);

      var chart = this.createChart(width, height, margin);
      this.drawHistogram(chart, xAxis, yAxis, height);

      // Draw x-axis labels
      chart.append("g")
        .attr("transform", "translate(0, " + height + ")")
        .call(d3.axisBottom(xAxis));

      // Draw y-axis labels
      chart.append("g")
        .call(d3.axisLeft(yAxis));
    }
  }

  createChart(width, height, margin) {
    d3.select("div.chart-container")
      .select("svg")
      .remove();
    return d3.select("div.chart-container")
      .append("svg")
      .attr("class", "chart")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  }

  drawHistogram(chart, xAxis, yAxis, height) {
    chart.selectAll(".bar")
      .data(this.props.data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return xAxis(d.ruling); })
      .attr("width", xAxis.bandwidth())
      .attr("y", function(d) { return yAxis(d.count); })
      .attr("height", function(d) { return height - yAxis(d.count); });
  }
}
