import React from 'react';

class AddFish extends React.Component {

    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    newFish = event => {
        // Stop form from submitting
        event.preventDefault();

        // make an object from the input values
        const fish = {
            name: this.nameRef.current.value,
            price: this.priceRef.current.value,
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value
        }
        
        console.log(fish);
    };
    render() {
        return (
            <form className='fish-edit' onSubmit={ this.newFish } >
                <input name="name" ref={this.nameRef} type="text"  placeholder='Name' />
                <input name="price" ref={this.priceRef} type="text"  placeholder='Price' />
                <select name="status" ref={this.statusRef} >
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" ref={this.descRef} type="text"  placeholder='Desc'></textarea>
                <input name="image" ref={this.imageRef} type="text" placeholder='Image' />
                <button type="submit" >+ Add Fish</button>
            </form>
        );
    }
}

export default AddFish;