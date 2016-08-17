import React, { Component } from 'react';

class Languages extends Component {
	constructor(props) {
		super(props);
		this.state = {
			languages: [
				{ value: 'javascript', label: 'javascript' },
				{ value: 'java', label: 'java' },
				{ value: 'python', label: 'python' },
				{ value: 'xml', label: 'xml' },
				{ value: 'ruby', label: 'ruby' },
				{ value: 'sass', label: 'sass' },
				{ value: 'markdown', label: 'markdown' },
				{ value: 'mysql', label: 'mysql' },
				{ value: 'json', label: 'json' },
				{ value: 'html', label: 'html' },
				{ value: 'handlebars', label: 'handlebars' },
				{ value: 'golang', label: 'golang' },
				{ value: 'csharp', label: 'csharp' },
				{ value: 'coffee', label: 'coffee' },
				{ value: 'css', label: 'css' }
			]
		}
		this.onChangeMode = this.onChangeMode.bind(this);
	}
	componentDidMount() {
		console.log(this.props);
	}
	onChangeMode(e) {
		const setting = Object.assign(
			{},
			this.props.setting,
			{ mode: e.target.value }
		);

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
					value={this.props.setting.mode}>
					{this.state.languages.map((lang, key) => {
						return (
							<option value={lang.value} key={key}>{lang.label}</option>
						);
					})}
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