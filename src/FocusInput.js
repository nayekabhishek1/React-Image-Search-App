import React, { Component } from 'react';
import RefsDemo from './components/RefsDemo';

class FocusInput extends Component {

    constructor(props) {
        super(props);
        this.componentRef = React.createRef()
    }

    clickHandler = () => {
        this.componentRef.current.focusInput()
    }

    render() {
        return (
            <div>
                <RefsDemo ref={this.componentRef}></RefsDemo>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        );
    }
}

export default FocusInput;