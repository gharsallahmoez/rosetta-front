import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {deleteShoe} from "../../../actions/backlogActions";
import PropTypes from "prop-types"
import {connect} from "react-redux";

class Shoe extends Component {
    onDeleteClick(backlog_id,pt_id){
        this.props.deleteShoe(backlog_id,pt_id);
    }
    render() {
        const {shoe_prop} = this.props;
        let categoryString ;
        let categoryClass ;
        if(shoe_prop.categorie===1){
            categoryClass = "bg-danger text-light";
            categoryString = "Homme"
        }
        if(shoe_prop.categorie===2){
            categoryClass = "bg-warning text-light";
            categoryString = "Femme"
        }
        if(shoe_prop.categorie===3){
            categoryClass = "bg-info text-light";
            categoryString = "Enfant"
        }
        return (
            <div className="card mb-1 bg-light">
                <div className={`card-header text-primary ${categoryClass}`}>
                    ID: {shoe_prop.collectionSequence} -- Categorie: {categoryString}
                </div>
                <div className="card-body bg-light">
                    <h5 className="card-title">{shoe_prop.shoeName}</h5>
                    <p className="card-text text-truncate ">
                        {shoe_prop.shoeDescription}
                    </p>
                    <Link to={`/updateShoe/${shoe_prop.collectionIdentifier}/${shoe_prop.collectionSequence}`} className="btn btn-primary">
                        Voir/Mise a jour
                    </Link>

                    <button className="btn btn-danger ml-4" onClick={this.onDeleteClick.bind(this,shoe_prop.collectionIdentifier,shoe_prop.collectionSequence)}>
                        Delete
                    </button>
                </div>
            </div>
        );
    }
}

Shoe.propTypes = {
    deleteShoe: PropTypes.func.isRequired
}

export default connect(null,{deleteShoe})(Shoe);