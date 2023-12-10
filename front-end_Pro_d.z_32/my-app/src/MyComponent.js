import React from 'react';

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount() {
        try {
            if (this.myRef.current) {
                this.myRef.current.focus();
            }
        } catch (error) {
            console.error('Не вдалося встановити фокус:', error);
        }
    }

    handleClick = () => {
        try {
            if (this.myRef.current) {
                this.myRef.current.focus();
            }
        } catch (error) {
            console.error('Не вдалося встановити фокус:', error);
        }
    }

    render() {
        return (
            <div>
                <input ref={this.myRef} type="text" />
                <button onClick={this.handleClick}>Focus input</button>
            </div>
        );
    }
}

export default MyComponent;