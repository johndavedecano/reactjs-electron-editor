import React, { Component } from 'react';

class Languages extends Component {
	constructor(props) {
		super(props);
		this.onChangeMode = this.onChangeMode.bind(this);
		this.state = {
			value: 'javascript'
		}
	}
	componentWillReceiveProps(nextProps) {
		this.setState({
			value: nextProps.setting.mode
		});
	}
	onChangeMode(e) {
		const setting = Object.assign(
			{},
			this.props.setting,
			{ mode: e.target.value }
		);

		this.setState({
			value: e.target.value
		});

		return this.props.onChange(setting);
	}
	render() {
		const containerStyle = {
			borderLeft: 'solid 1px #ccc',
			paddingTop: 2,
			paddingRight: 5,
			paddingLeft: 5,
			marginTop: 1
		}
		return (
			<div style={containerStyle}>
				<select onChange={this.onChangeMode}
					value={this.state.value}>
					<option value="javascript">javascript</option>
					<option value="php">php</option>
					<option value="jsx">jsx</option>
					<option value="java">java</option>
					<option value="python">python</option>
					<option value="xml">xml</option>
					<option value="ruby">ruby</option>
					<option value="sass">sass</option>
					<option value="markdown">markdown</option>
					<option value="mysql">mysql</option>
					<option value="json">json</option>
					<option value="html">html</option>
					<option value="handlebars">handlebars</option>
					<option value="golang">golang</option>
					<option value="csharp">csharp</option>
					<option value="coffee">coffee</option>
					<option value="css">css</option>
				</select>
			</div>
		);
	}
}

Languages.propTypes = {
	setting: React.PropTypes.object.isRequired,
	onChange: React.PropTypes.func.isRequired
};

export default Languages;