import React, { Component } from "react";
import { Editor } from 'slate-react';
import { Value } from 'slate';

import "../../styles/contentpane.css";

// Create our initial value...
const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            text: 'A line of text in a paragraph.',
          },
        ],
      },
    ],
  },
});

class ContentPane extends Component {

	state = {
		value: initialValue
	};

	onChange = ({ value}) => {
		this.setState({ value });
	}

    render() {
        return (
            <div className="content-pane">
                <div className="content-title">
                    <h1>Drink Beer</h1>
                </div>
                <div className="content-body">
                    <Editor value={this.state.value} onChange={this.onChange} />
                </div>
            </div>
        );
    }
}

export default ContentPane;
