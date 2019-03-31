import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import classnames from "classnames";
import {addShoe} from "../../../actions/backlogActions"
import PropTypes from "prop-types";

class AddShoe extends Component {
   constructor(props){
       super(props)
       const {id} = this.props.match.params;
       this.state = {
           "shoeName" : "",
           "shoeDescription": "" ,
           "status":"",
           "categorie":0,
           "date":"",
           "collectionIdentifier":id,
           errors : {}
       };
       this.onChange = this.onChange.bind(this);
       this.onSubmit = this.onSubmit.bind(this);

   }
   componentWillReceiveProps(nextProps) {
       if(nextProps.errors){
           this.setState({
               errors : nextProps.errors
           })
       }
   }


    onChange(e){
       this.setState({[e.target.name]:e.target.value}
       )
    }


    onSubmit(e){
       e.preventDefault();
       const newTask={
           "shoeName" : this.state.shoeName,
           "shoeDescription":  this.state.shoeDescription ,
           "status":this.state.status,
           "categorie":this.state.categorie,
           "date":this.state.date,
       };
    this.props.addShoe(this.state.collectionIdentifier,newTask, this.props.history);
    }

    render() {
        const {id} = this.props.match.params;
        const {errors} = this.state;

        return (
            <div className="add-PBI">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to={`/collectionBoard/${id}`} className="btn btn-light">
                               Retour vers liste des Collection
                            </Link>
                            <h4 className="display-4 text-center"> Ajout d'un chaussure </h4>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text" className={classnames("form-control form-control-lg",{
                                        "is-invalid": errors.shoeName})} name="shoeName"
                                           placeholder="Nom Du Chaussure"
                                           value={this.state.shoeName}
                                           onChange={this.onChange}/>
                                    {errors.shoeName && (<div className="invalid-feedback">{errors.shoeName}</div> )}
                                </div>
                                <div className="form-group">
                                    <textarea type="text" className="form-control form-control-lg" placeholder="Description"
                                              name="shoeDescription"
                                              value={this.state.shoeDescription}
                                              onChange={this.onChange}></textarea>
                                </div>
                                <h6>Date</h6>
                                <div className="form-group">
                                    <input type="date" className="form-control form-control-lg" name="date"
                                           value={this.state.date}
                                           onChange={this.onChange}/>
                                </div>
                                <div className="form-group">
                                    <select className="form-control form-control-lg" name="categorie"
                                            value={this.state.categorie}
                                            onChange={this.onChange}>
                                        <option value={0}>Select Categorie</option>
                                        <option value={1}>Homme</option>
                                        <option value={2}>Femme</option>
                                        <option value={3}>Enfant</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <select className="form-control form-control-lg" name="status"
                                            value={this.state.status}
                                            onChange={this.onChange}>
                                        <option value="">Select Status</option>
                                        <option value="EN_STOCK">EN STOCK</option>
                                        <option value="CONSTRUCTION">EN CONSTRUCTION</option>
                                        <option value="LIVRAISON">EN LIVRAISON</option>
                                    </select>
                                </div>

                                <input type="submit" className="btn btn-primary btn-block mt-4"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
const mapStateToProps = state => ({
    errors : state.errors
})
AddShoe.propTypes = {
    addShoe :PropTypes.func.isRequired,
    errors : PropTypes.object.isRequired
}

export default connect(mapStateToProps,{ addShoe})(AddShoe);