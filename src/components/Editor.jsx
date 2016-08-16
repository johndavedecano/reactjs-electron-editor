import React, { Component } from 'react';
import { connect } from 'react-redux';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/monokai';

class Editor extends Component {
	render() {
		return (
				<AceEditor
				  mode="javascript"
				  theme="monokai"
				  name="myeditor"
				  enableLiveAutocompletion={true}
				  enableBasicAutocompletion={true}
				  width="100%"
				  height="100%"
				  editorProps={{$blockScrolling: true}}
				/>
		);
	}
}

export default connect(function(state) {
  return {
  	tabs: state.tabs.items,
  	active: state.tabs.active
  }
})(Editor);
