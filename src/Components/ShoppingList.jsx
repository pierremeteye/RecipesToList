import React, {Component} from "react";

export default class ShoppingList extends Component {

	render(){
		if (this.props.data) {
			// console.log(this.props.list);
			let ingredients = this.props.ingredients.map((ingredient, i) => {
				return <tr key={ingredient + '-' + i}><td>{ingredient}</td></tr>;
			}),
			quantity = this.props.quantity.map((nb, i) => {
				return <tr key={nb + '-' + i}><td>{nb}</td></tr>;
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
													<th>Ingrédients</th>
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
										<ul className="col-3 f-l">
										</ul>
										<ul className="col-3 f-l">
										</ul>
										
								</div>
		                    </div>
		                </div>
		            </div>
		}
	}
}