import React, { Component } from 'react';

class ToDoChecklist extends Component {
  render() {
    return (
         <form className="row">
            <div className="col">
                <label className="toDo"><input type="checkbox" />
                    Go hiking
                </label>
                <label className="toDo"><input type="checkbox" />
                    Go hiking
                </label>
            </div>
        </form>

    );
  }
}

export default ToDoChecklist;
