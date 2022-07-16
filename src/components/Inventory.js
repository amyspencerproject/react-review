import React from 'react';
import AddFish from './AddFish';

class Inventory extends React.Component {
    render() {
        return (
            <div className="inventory">
                <p>Inventory!!!</p>
                <AddFish />
            </div>
        );
    }
}

export default Inventory;