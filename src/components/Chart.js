import React, {Component} from "react";
import {Doughnut} from "react-chartjs-2";

export default class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData: props.chartData
    }
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right"
  }

  render(){
    return(
      <div className="chrt">
        <Doughnut data={this.state.chartData} height={"90%"} options={{
          maintainAspectRatio:true,
          title: {
            display: this.props.displayTitle,
            text: "Population of NYC by Borough",
            fontSize: 25
          },
          legend: {
            display:this.props.displayLegend,
            position: this.props.legendPosition
          },
        }}/>
      </div>
    )
  }
}
