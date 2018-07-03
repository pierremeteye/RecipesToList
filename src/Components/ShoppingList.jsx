import React, {Component} from "react";

export default class ShoppingList extends Component {

	render(){
        if (this.props.data) {
			let arrQuantity = Object.values(this.props.list),
				arrIngredients = Object.keys(this.props.list),
                ingredients = arrIngredients.map((ingredient, i) => {
                    return <tr key={ingredient + '-' + i}><td>{ingredient}</td></tr>;
                }),
                quantity = arrQuantity.map((quantity, i) => {
                    return <tr key={quantity + '-' + i}><td>{quantity}</td></tr>;
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
											</tr>
											{ingredients}
										</tbody>
									</table>
									<table className="f-l">
										<tbody>
											<tr>
												<th>Quantity</th>
											</tr>
											{quantity}
										</tbody>
									</table>
								</div>
		                    </div>
		                </div>
		            </div>
		}
	}
}