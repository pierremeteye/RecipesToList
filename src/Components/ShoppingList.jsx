import React, {Component} from "react";
import { connect } from 'react-redux';

class ShoppingList extends Component {

	render(){
			
			let ingredients = Object.values(this.props.shopping_list).map((el, i) => {
                    return <tr key={el.name + '-' + i}><td>{el.name}</td></tr>;
                }),
				test = Object.values(this.props.shopping_list).map((el, i) => {
                    return <tr key={el.name + '-' + i}>
                    			<td>{el.name}</td>
                    			<td>{el.quantity === 0 ? '' : el.quantity + ' ' + el.unit}</td>
                    		</tr>;
                }),
            	quantity = Object.values(this.props.shopping_list).map((el, i) => {
                    return <tr key={el.el + el.unit + '-' + i}><td>{el.quantity === 0 ? '' : el.quantity + ' ' + el.unit}</td></tr>;
                })
            ;		

			return 	<div className="ShoppingList col-12">
			            <div className="col-6 f-l">
		                    <div className="p-30">
		                        <h3 className="col-12 f-l p-b-10">Ingredients List</h3>
								<div>
									<div className="both"></div>
									<table className="f-l">
										<tbody>
											<tr>
												<th>Ingredients</th>
												<th>Quantity</th>
											</tr>
											{test}
										</tbody>
									</table>
								</div>
		                    </div>
		                </div>
		            </div>
	}
}

const mapStateToProps = state => ({
    shopping_list: state.shopping_list
})

export default connect(mapStateToProps)(ShoppingList)