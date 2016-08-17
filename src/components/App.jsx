import React, { Component } from 'react';
import {
	Window,
	Toolbar,
	Content,
	Pane
} from 'react-photonkit';
import Tabs from './Tabs';
import Editor from './Editor';
import Files from './Files';
import Languages from './Languages';
import { connect } from 'react-redux';
import { updateTab } from './../actions/tabs';

class App extends Component {
	constructor(props) {
	  super(props);
	  this.onChangeMode = this.onChangeMode.bind(this);
	}
	onChangeMode(setting) {
		return this.props.dispatch(
			updateTab(setting)
		);
	}
	render() {
		const editorWrapper = {
			width: '100%',
			height: '96.8%',
			overflow: 'hidden'
		}
		const paneStyles = {
			overflow: 'hidden',
			paddingRight: 0
		}
		const activeTab = this.props.tabs[this.props.active];
		return (
			<Window>
			  <Content>
					<Pane ptSize="sm" sidebar>
						<Files />
					</Pane>
					<div className="pane" style={paneStyles}>
						<Tabs />
						<div style={{ clear: 'both'}}></div>
						<div style={editorWrapper}>
							<Editor setting={activeTab}/>
						</div>
					</div>
			  </Content>
				<footer className="toolbar toolbar-footer">
				  <div className="toolbar-actions">
				    <button className="btn btn-default">
				      Cancel
				    </button>
				    <div className="pull-right">
				      	<Languages setting={activeTab} onChange={this.onChangeMode} />
				    </div>
				  </div>
				</footer>
			</Window>
		);
	}
}

export default connect(function(state) {
  return {
    tabs: state.tabs.items,
    active: state.tabs.active
  }
})(App);
