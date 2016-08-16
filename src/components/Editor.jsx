import React, { Component } from 'react';
import { connect } from 'react-redux';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/mode/java';
import 'brace/mode/python';
import 'brace/mode/xml';
import 'brace/mode/ruby';
import 'brace/mode/sass';
import 'brace/mode/markdown';
import 'brace/mode/mysql';
import 'brace/mode/json';
import 'brace/mode/html';
import 'brace/mode/handlebars';
import 'brace/mode/golang';
import 'brace/mode/csharp';
import 'brace/mode/coffee';
import 'brace/mode/css';

import 'brace/theme/monokai';

class Editor extends Component {
	render() {
		const tabSetting = this.props.tabs[this.props.active];

		return (
				<AceEditor
				  mode={tabSetting.mode}
				  theme="monokai"
				  name="UNIQUE_ID_OF_DIV"
				  enableLiveAutocompletion={true}
				  enableBasicAutocompletion={true}
				  width="100%"
				  height="100%"
				  editorProps={{$blockScrolling: true}}
					value={tabSetting.value}
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
