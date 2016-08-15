import React, { Component } from 'react';
import {
	Window,
	Toolbar,
	Content,
	Pane
} from 'react-photonkit';
import Tabs from './Tabs';
import Editor from './Editor';

class App extends Component {
	constructor(props) {
	  super(props);
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
		return (
			<Window>
			  <Content>
					<Pane ptSize="sm" sidebar></Pane>
					<div className="pane" style={paneStyles}>
						<Tabs />
						<div style={{ clear: 'both'}}></div>
						<div style={editorWrapper}>
							<Editor />
						</div>
					</div>
			  </Content>
			  <Toolbar ptType="footer">
			  	
			  </Toolbar>
			</Window>
		);
	}
}

export default App;