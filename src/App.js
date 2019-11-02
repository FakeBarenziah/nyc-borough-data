import React from 'react';
import './App.css';
import Chart from "./components/Chart"

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      chartData: {}
    }
  };

  getChartData(){
    this.setState({
      chartData:{
        labels: ["Bronx", "Brooklyn", "Manhattan", "Queens", "Staten Island"],
        datasets: [{
          label: "Population",
          data: [
            1432132,
            2582830,
            1628701,
            2278906,
            476179
          ],
          backgroundColor: ["#f44", "#44f", "#ff4", "#4f4", "#94f"],
          borderWidth: 1,
          borderColor: "#222",
          hoverBorderWidth: 3,
          hoverBorderColor: "#000"
        },
      {
        label: "ZIP Codes",
        data: [
          25, 37, 43, 61, 12
        ],
        backgroundColor: ["#f99", "#99f", "#ff9", "#9f9", "#a9f"],
        borderWidth: 1,
        borderColor: "#222",
        hoverBorderWidth: 3,
        hoverBorderColor: "#000"
      }]
      }
    })
  }

  componentWillMount(){
    this.getChartData()
  }

  render(){
    return (
      <div className="App">
          <Chart chartData={this.state.chartData}/>
      </div>
    );
  }
}

export default App;
