import React from 'react';
import Header from './Header';
import Inventory from './Inventory'
import Order from './Order'

class App extends React.Component {
    
    state = {
        fishes: {},
        order: {} 
    };
    
    addFish = (fish) => {
        // Take a copy of the existing state
        const fishes = { ...this.state.fishes };
        // Add new fish to copied fishes variable
        fishes[`fish${Date.now()}`]=fish;
        //set the new fishes ojbect to State
        this.setState({
            fishes: fishes
        });
    };
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                </div>
                <Order />
                <Inventory addFish={this.addFish}/>
            </div>
        );
    }
}


export default App;