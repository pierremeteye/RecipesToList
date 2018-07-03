import React, { Component } from 'react';

import Popup from "./Popup";

class RecipeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            isHidden: false,
            ingredients: null
        };
    }
    getIngredientsPopup(dataFromPopup) {
        this.props.getIngredient(dataFromPopup)
    }
    getNumber(getNumber){
        this.props.getNumber(getNumber)
    }
    showPopup(i) {
        this.setState(prevState => ({
            value: i,
            isHidden: true
        }));
        let lis = this.props.initialIngredients[i].map((el, i)  => {
            return <li className="uppercaseFirstLetter" key={i}>{el.name}<span className="red">{el.quantity === 0 ? '' : ' / ' + Math.round(el.quantity)} {el.quantity === 0 ? '' : el.unit}</span></li>;
        });
        this.setState({ingredients: lis})
    }
    closePopup(){
        this.setState(prevState => ({
            isHidden: false
        }));
    }
    render() {
		var recipes = this.props.data.map((recipe, i) => {
			return  <div key={i} className="col-12 f-l relative m-t-10">
        				<div className="col-8 f-l">
                            <p className="col-8 f-l">{recipe.title}</p>
                            <button className="f-l pointer" onClick={this.showPopup.bind(this, i)}>Voir la recette</button>
                        </div>
                        <div className="col-4 f-l">
                            <img className="col-4 f-l" src={'images/' + recipe.image_name} alt={recipe.title}/>
                        </div>
        			</div>;
		});
        return (
            <div className="RecipeList col-12">
	            <div className="col-6 f-l">
                    <div className="p-30">
                    <h3 className="col-12 f-l p-b-10">Ingredients List</h3>
                        {recipes}
                        <div className={this.state.isHidden === true ? 'popup' : 'popup hide' }>
                            <div className="col-6 bgWhite fullCentered p-20 p-t-0">
                                <p className="pointer" onClick={this.closePopup.bind(this)}>
                                    <i className="zmdi zmdi-close fs-50 f-r p-10 p-r-0"></i>
                                </p>
                                <Popup 
                                    data={this.props.data} 
                                    ingredients={this.state.ingredients} 
                                    getValue={this.state.value} 
                                    getIngredients={this.getIngredientsPopup.bind(this)}
                                    getNumber={this.getNumber.bind(this)}
                                />
                            </div>
                        </div>
                        <div className="both"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RecipeList;