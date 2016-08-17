import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeTab, setActive } from './../actions/tabs';

class TabItem extends Component {
	constructor(props) {
		super(props);
		this.closeTab = this.closeTab.bind(this);
		this.setActive = this.setActive.bind(this);
	}
	closeTab(e) {
		e.stopPropagation();
		return this.props.dispatch(
			closeTab(
				this.props.setting.uid
			)
		);
	}
	setActive() {
		if (this.props.index === this.props.active) {
			return false;
		}

		return this.props.dispatch(
			setActive(
				this.props.index
			)
		);
	}
	render() {
		const activeClass = (this.props.active) ? 'tab-item active' : 'tab-item';
		return (
			<div className={activeClass} onClick={this.setActive}  style={{ cursor: 'pointer' }}>
				<span className="icon icon-cancel icon-close-tab" onClick={this.closeTab}></span>
				{this.props.setting.filename}
			</div>
		);
	}
}

TabItem.propTypes = {
	index: React.PropTypes.number,
	setting: React.PropTypes.object
}

export default connect(function(state) {
  return {
  	...state
  }
})(TabItem);
