import React from "react";

class Toggle extends React.Component {
	constructor(props) {
		super(props);
		this.state = { selectedIndex: -1 };

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		console.log(event);
		this.setState({ value: event.target.value });
	}

	setTogglePos(togglePos) {
		const { handleToggle, lockAnswer } = this.props;

		if (!lockAnswer) {
			this.setState({ selectedIndex: togglePos });
			handleToggle(togglePos);
		}
	}

	render() {
		const {
			answerOptions: { options },
			lockAnswer,
		} = this.props;
		const { selectedIndex } = this.state;
		return (
			<div className='answerOptions'>
				{options.map((option, togglePos) => (
					<span
						className={`answerOption ${
							selectedIndex === togglePos ? "selected" : ""
						}`}
						key={`option-${togglePos}`}
						onClick={() => this.setTogglePos(togglePos)}>
						{option.answer}
					</span>
				))}
			</div>
		);
	}
}

export default Toggle;
