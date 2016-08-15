import React, { Component } from 'react';
import { connect } from 'react-redux';

class TabItem extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const activeClass = (this.props.active) ? 'tab-item active' : 'tab-item';
		return (
			<div className={activeClass}>
				<span className="icon icon-cancel icon-close-tab"></span>
				{this.props.setting.filename}
			</div>
		);
	}
}

export default connect(function(state) {
  return {
  	...state
  }
})(TabItem);