import React from 'react';
import ExtensibleTodoApp from '@charbugs/extensible-todo-app';

class EditorToggler extends React.Component {

  constructor(props) {
    super(props);
    this.state = { show: true }
  }

  handleClick(ev) {
    this.setState((state, props) => ({ show: !state.show }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>Toggle (Plugin)</button>
          { this.state.show &&
            <this.props.TargetComponent {...this.props} />
          }
      </div>
    );
  }
}

const plugin = {
  target: 'TodoEditor',
  modus: 'wrap',
  component: EditorToggler,
}

export default plugin;
