import React, { createRef } from 'react';
import Router from './Router';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    myInput = React.createRef();

    goToStore = (event) => {
        // Stop the form from submitting
        event.preventDefault();
        // get the store name text from the input
        // console.log(this.myInput.current.value);
        const storeName = this.myInput.current.value;
        // put store name as :storeId in Router component by using push b/c StorePicker is a child of Router
        this.props.history.push(`/store/${storeName}`)
    };
    render() {
        // console.log(this);
        return (
            <form className="store-selector" onSubmit={ this.goToStore }>
                <h2>Please enter a store</h2>
                <input type="text" 
                    required placeholder='Store Name' 
                    defaultValue={ getFunName()}
                    ref={this.myInput}
                />
                <button type='submit'>Visit Store → </button>
            </form>
        )
    }
}

export default StorePicker;