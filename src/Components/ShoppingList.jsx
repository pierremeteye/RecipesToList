import React, {Component} from "react";
import { connect } from 'react-redux';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

class ShoppingList extends Component {

	render(){
			
		let list = Object.values(this.props.shopping_list).map((el, i) => {
			return  <TableRow key={el.name + '-' + i}>
						<TableCell><Checkbox/></TableCell>
						<TableCell className="uppercaseFirstLetter">{el.name}</TableCell>
						<TableCell>{el.quantity === 0 ? '-' : el.quantity + ' ' + el.unit}</TableCell>
					</TableRow>;
		});		

		return 	<div className="ShoppingList col-12">
		            <div className="col-6 f-l">
	                    <div className="p-30">
	                        <h3 className="col-12 f-l p-b-10">Ingredients List</h3>
							<div>
								<div className="both"></div>
								<Table className="col-16 f-l">
									<TableHead>
										<TableRow>
											<TableCell></TableCell>
											<TableCell>Ingredients</TableCell>
											<TableCell>Quantity</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{list}
									</TableBody>
								</Table>
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