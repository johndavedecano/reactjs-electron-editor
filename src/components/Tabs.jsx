import React, { Component } from 'react';
import Editor from './Editor';
import { connect } from 'react-redux';
import TabItem from './TabItem';

class Tabs extends Component {
	constructor(props) {
		super(props);
		this.createTab = this.createTab.bind(this);
	}
	createTab() {
		console.log("Creating some new tabs...");
	}
	render() {
		return (
			<div className="tab-group">
				{this.props.tabs.map((tab, key) => {
					return (
						<TabItem setting={tab} key={key} active={(this.props.active == key)}/>
					);
				})}
			  <div className="tab-item tab-item-fixed"  onClick={this.createTab} style={{ cursor: 'pointer' }}>
			    <span className="icon icon-plus"></span>
			  </div>
			</div>
		);
	}
}

export default connect(function(state) {
  return {
  	tabs: state.tabs.items,
  	active: state.tabs.active
  }
})(Tabs);