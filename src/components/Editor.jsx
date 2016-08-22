import React, { Component } from 'react';
import { connect } from 'react-redux';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/php';
import 'brace/mode/jsx';
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
import { updateTab } from './../actions/tabs';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      setting: {
        mode: 'javascript',
        value: ''
      }
    }
  }
  onChange(value) {
    this.setState({
      setting: {
        ...this.state.setting,
        value: value
      }
    });
    return this.props.onChange(Object.assign({},
      this.props.setting,
      { value: value }
    ));
  }
	componentWillReceiveProps(nextProps) {
		this.setState({
			setting: nextProps.setting
		});
	}
  render() {
    return (
      <AceEditor
        ref="code"
        mode={this.state.setting.mode}
        theme="monokai"
        name="UNIQUE_ID_OF_DIV"
        width="100%"
        height="100%"
        value={this.state.setting.value}
        editorProps={{$blockScrolling: Infinity }}
        onChange={this.onChange}
        onLoad={(editor) => {
          editor.renderer.setScrollMargin(15, 50);
        }}
      />
    );
  }
}

Editor.propTypes = {
  setting: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default Editor;
