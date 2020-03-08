import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
	state = {
		counters: [
			{ id: 1, value: 4 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 }
		]
	};

	handleReset = () => {
		const counters = this.state.counters.map(c => {
			c.value = 0;
			return c;
		});

		this.setState({ counters: counters });
	};

	handleDelete = counterID => {
		console.log("Delete Event Handler called", counterID);
		const counters = this.state.counters.filter(
			counter => counter.id !== counterID
		);
		this.setState({ counters: counters });
	};

	handleIncrement = counter => {
		const counters = [...this.state.counters];
		const index    = counters.indexOf(counter);

		counters[index] = { ...counter };
		counters[index].value++;

		this.setState({ counters: counters });
	};

	render() {
		return (
			<div>
				<button
					className="btn btn-primary m-2"
					onClick={this.handleReset}
				>
					Reset
				</button>
				{this.state.counters.map(counter => {
					return (
						<Counter
							key={counter.id}
							counter={counter}
							onIncrement={this.handleIncrement}
							onDelete={this.handleDelete}
						/>
					);
				})}
			</div>
		);
	}
}

export default Counters;
