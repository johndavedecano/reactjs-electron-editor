import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeTab } from './../actions/tabs';

class TabItem extends Component {
	constructor(props) {
		super(props);
		this.closeTab = this.closeTab.bind(this);
	}
	closeTab() {
		return this.props.dispatch(
			closeTab(
				this.props.setting.uid
			)
		);
	}
	render() {
		const activeClass = (this.props.active) ? 'tab-item active' : 'tab-item';
		return (
			<div className={activeClass}>
				<span className="icon icon-cancel icon-close-tab" onClick={this.closeTab}></span>
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
