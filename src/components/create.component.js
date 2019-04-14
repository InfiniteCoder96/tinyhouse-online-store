import React, {Component} from 'react';
import axios from 'axios';

class CreateComponent extends Component {

    constructor(props){
        super(props);
        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeProductCode = this.onChangeProductCode.bind(this);
        this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            product_name: '',
            product_code: '',
            product_price: ''
        }
    }

    onChangeProductName(e) {
        this.setState({
            product_name:e.target.value
        });
    }

    onChangeProductCode(e) {
        this.setState({
            product_code:e.target.value
        });
    }

    onChangeProductPrice(e) {
        this.setState({
            product_price:e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const product_obj = {
            product_name: this.state.product_name,
            product_code: this.state.product_code,
            product_price: this.state.product_price
        };

        axios.post('http://localhost:4000/product/addProduct', product_obj)
            .then(res => console.log(res.data));


        this.setState({
            product_name: '',
            product_code: '',
            product_price: ''
        })
    }

    render() {
        return (
            <div className="container" style={{marginTop: 10}}>
                <h3>Add New Product</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Product Name:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.product_name}
                            onChange={this.onChangeProductName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Product Code: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.product_code}
                            onChange={this.onChangeProductCode}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Price: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.product_price}
                            onChange={this.onChangeProductPrice}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Product" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateComponent;