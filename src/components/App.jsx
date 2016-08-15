import React, { Component } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/java';
import 'brace/theme/monokai';
import {
	Window,
	Toolbar,
	Actionbar,
	ButtonGroup,
	Button,
	Content,
	Pane
} from 'react-photonkit';


class App extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	mode: 'java',
	  	theme: 'monokai'
	  };
	}
	render() {
		return (
			<Window>
			  <Content>
					<Pane ptSize="sm" sidebar></Pane>
					<Pane>
						<AceEditor
						    mode="java"
						    theme="monokai"
						    height="100%"
						    width="100%"
						    name="UNIQUE_ID_OF_DIV"
						    editorProps={{$blockScrolling: true}}
						  />
					</Pane>
			  </Content>
			  <Toolbar ptType="footer">
			  	
			  </Toolbar>
			</Window>
		);
	}
}

export default App;