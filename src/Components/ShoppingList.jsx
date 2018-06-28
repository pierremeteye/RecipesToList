import React, {Component} from "react";

export default class ShoppingList extends Component {

	render(){
		if (this.props.data) {
			// console.log(this.props.list);
			var shoppingList = this.props.list.map((items, i) => {
									console.log(items);
				return  <div key={i}>
							<ul className="col-12 f-l noListStyle p-b-10">
								{items}
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