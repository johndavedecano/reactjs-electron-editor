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
import { updateTab, createTab } from './../actions/tabs';
import mimes from './../common/mimes';
import uuid from 'node-uuid';

const { 
	ipcRenderer 
} = window.require('electron');

class App extends Component {
	constructor(props) {
	  super(props);
		this.mountListeners = this.mountListeners.bind(this);
	  this.onChangeSetting = this.onChangeSetting.bind(this);
		this.onFileOpen = this.onFileOpen.bind(this);
		this.mountListeners();
		this.state = {
			updated: 0
		}
	}
	onChangeSetting(setting) {
		this.setState({ updated:  1 });
		this.props.dispatch(
			updateTab(setting)
		);
		this.setState({ updated:  0 });
	}
	mountListeners() {
		this.onFileOpen();
	}
	onFileOpen() {
		ipcRenderer.on('fileOpened', (event, file) => {
			let activeTab = this.props.tabs[this.props.active];
			if (this.isFileAlreadyOpened(file.name)) return false;
			this.setState({ updated:  1 });
			if (activeTab.value == '') {
				this.props.dispatch(updateTab({
					value: file.contents,
					filename: file.name,
					mode: (!mimes[file.extension]) ?'json' : mimes[file.extension]
				}));
			} else {
				this.props.dispatch(createTab({
					uid: uuid.v1(),
					value: file.contents,
					filename: file.name,
					mode: (!mimes[file.extension]) ? 'json' : mimes[file.extension]
				}));
			}
			this.setState({ updated:  0 });
		});
	}
	isFileAlreadyOpened(filename) {
		let ret = false;
		this.props.tabs.forEach((tab) => {
			if (tab.filename === filename) {
				ret = true;
			}
		});
		return ret;
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
						<Tabs updated={this.state.updated} />
						<div style={{ clear: 'both'}}></div>
						<div style={editorWrapper}>
							<Editor updated={this.state.status} setting={activeTab} onChange={this.onChangeSetting}/>
						</div>
					</div>
			  </Content>
				<footer className="toolbar toolbar-footer">
				  <div className="toolbar-actions">
				    <div className="pull-right">
				      	<Languages status={this.state.status} setting={activeTab} onChange={this.onChangeSetting} />
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
