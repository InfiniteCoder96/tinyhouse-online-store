import React, {Component} from 'react';
import axios from 'axios';
import TableRow from './TableRow';

class IndexComponent extends Component {

    constructor(props){
        super(props);
        this.state = {product: []};
    }

    componentDidMount(){
        axios.get('http://localhost:4000/product')
            .then(response => {
                this.setState({product: response.data});
            })
            .catch(function (error){
                console.log(error);
            })
    }

    tabRow(){
        return this.state.product.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        });
    }

    render() {
        return (
            <div className="container" style={{ marginTop: 20 }}>
                <h3 align="center">Product List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Code</th>
                            <th>Price</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.tabRow() }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default IndexComponent;