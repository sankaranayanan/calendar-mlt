import * as React from "react";
import * as ReactDOM from "react-dom";

import {
	ScheduleComponent,
	Day,
	Week,
	WorkWeek,
	Month,
	Agenda,
	Inject,
} from "@syncfusion/ej2-react-schedule";
class App extends React.Component {
	constructor() {
		super(...arguments);
		this.scheduleData = [
			{
				Id: 3,
				Subject: "Paris",
				StartTime: new Date(2018, 1, 15, 9, 0),
				EndTime: new Date(2018, 1, 15, 10, 0),
			},
		];
	}
	render() {
		return (
			<ScheduleComponent
				currentView="Month"
				width="100%"
				height="550px"
				selectedDate={new Date()}
				eventSettings={{ dataSource: this.scheduleData }}
			>
				<Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
			</ScheduleComponent>
		);
	}
}
ReactDOM.render(<App />, document.getElementById("schedule"));
