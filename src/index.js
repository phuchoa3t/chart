
import React from 'react';
import { render } from 'react-dom';
import Chart from './Chart';
import { getData } from "./utils"

import { TypeChooser } from "react-stockcharts/lib/helper";
import { useEffect } from 'react';

class ChartComponent extends React.Component {
	componentDidMount() {
		getData().then(data => {
			console.log(data)
			this.setState({ data })
		})
		
	}
	updateChart(c, e) {
		const type = e.target.value;
		getData(type).then(data => {
			c.setState({ data })
		})
	}
	
	render() {
		if (this.state == null) {
			return <div>Loading...</div>
		}
		return (
			<div>
				<input name="type" value="5m" type="radio" onChange={(e) => this.updateChart(this, e)}/>5m
				<input name="type" value="30m" type="radio" onChange={(e) => this.updateChart(this, e)}/>30m
				<input name="type" value="1h" type="radio" onChange={(e) => this.updateChart(this, e)}/>1hour
				<Chart typeOHLC={this.state.type} data={this.state.data} />
			</div>
		)
	}
}

render(
	<ChartComponent />,
	document.getElementById("root")
);
