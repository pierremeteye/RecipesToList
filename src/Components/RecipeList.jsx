import React, { Component } from 'react';

import Popup from "./Popup";

class RecipeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        };
        this.togglePopup = this.togglePopup;
    }
    togglePopup(i) {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));

        document.querySelector('.popup-'+i+'').classList.toggle('hide')
    }
    render() {
    	if (this.props.data) {
    		var recipes = this.props.data.map((recipe, i) => {
    			return  <div key={i} className="col-12 f-l relative m-t-10">
            				<div className="col-8 f-l">
                                <p className="col-8 f-l">{recipe.title}</p>
                                <button className="f-l pointer" onClick={this.togglePopup.bind(this, i)}>Voir la recette</button>
                            </div>
                            <div className="col-4 f-l">
                                <img className="col-4 f-l" src={'images/' + recipe.image_name} alt={recipe.title}/>
                            </div>
            			</div>;
    		})
    	;

    	}
        return (
            <div className="RecipeList col-12">
	            <div className="col-6 f-l">
                    <div className="p-30">
                    <h3 className="col-12 f-l p-b-10">Ingredients List</h3>
                        {recipes}
                        <Popup data={this.props.data} shoppinglist={this.props.shoppinglist}/>
                        <div className="both"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RecipeList;