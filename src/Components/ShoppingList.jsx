import React, {Component} from "react";

export default class ShoppingList extends Component {

	render(){
		if (this.props.data) {
			var shoppingList = this.props.shoppinglist.map((items, i) => {
				return  <div key={i}>
							<ul className="col-12 f-l noListStyle p-b-10">
								{
									items.ingredients.map((el, i)  => {
										return <li className="uppercaseFirstLetter" key={i}>{el.name}<span className="red">{el.quantity == 0 ? '' : ' / ' + el.quantity} {el.quantity == 0 ? '' : el.unit}</span></li>;
									})
								}
							</ul>
						</div>
			})
			;

			return 	<div className="ShoppingList col-12">
			            <div className="col-6 f-l">
		                    <div className="p-30">
		                        <h3 className="col-12 f-l p-b-10">Ingredients List</h3>
								{shoppingList}
		                    </div>
		                </div>
		            </div>
		}
	}
}