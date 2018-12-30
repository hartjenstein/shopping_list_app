import React from 'react';
import Item from './Item';

function InlineEditItem(Item) {

  return class extends React.Component {

    state = {
      editing: false
    }

    toggleEdit = (e) => {
      e.stopPropagation();
      if (this.state.editing) {
        this.cancel();
      } else {
        this.edit();
      }
    };

    edit = () => {
      this.setState({
        editing: true
      }, () => {
        this.domElement.focus();
      });
    };

    save = () => {
      this.setState({
        editing: false
      }, () => {
        if (this.props.onSave && this.isValueChanged()) {
          console.log('Value is changed', this.domElm.textContent);
        }
      });
    };

    cancel = () => {
      this.setState({
        editing: false
      });
    };

    isValueChanged = () => {
      return this.props.value !== this.domElement.textContent
    };

    handleKeyDown = (e) => {
      const { key } = e;
      switch (key) {
        case 'Enter':
        case 'Escape':
          this.save();
          break;
      }
    };

    render() {
      let editOnClick = true;
      const {editing} = this.state;
      if (this.props.editOnClick !== undefined) {
        editOnClick = this.props.editOnClick;
      }
      return (
        <Item
          className={editing ? 'editing' : ''}
          onClick={editOnClick ? this.toggleEdit : undefined}
          contentEditable={editing}
          ref={(domNode) => {
            this.domElement = domNode;
          }}
          onBlur={this.save}
          onKeyDown={this.handleKeyDown}
          {...this.props}
      >
        {this.props.value}
      </Item>
      )
    }
  }
}
export default InlineEditItem;