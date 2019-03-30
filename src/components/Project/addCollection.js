import React, {Component} from 'react';
import PropTypes from "prop-types"
import {connect} from "react-redux";
import {createCollection} from "../../actions/collectionActions";
import classnames from 'classnames';

class AddCollection extends Component {
    constructor(){
        super()
        this.state = {
            collectionName:"",
            collectionIdentifier:"",
            description:"",
            errors:{}
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
}

    //life cycle hooks
    componentWillReceiveProps(nextProps) {
        if(nextProps.errors){
            this.setState({errors:nextProps.errors});
        }
    }


    onChange(e){
        this.setState({[e.target.name]:e.target.value})
}
onSubmit(e){
        e.preventDefault();
        const newAtelier ={
            collectionName:this.state.collectionName,
            collectionIdentifier:this.state.collectionIdentifier,
            description:this.state.description
        }
       this.props.createAtelier(newAtelier,this.props.history)
}
    render() {
        const {errors} = this.state;
        return (
            <div>

            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Crée une nouvelle collection</h5>
                            <hr/>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text" className={classnames("form-control form-control-lg",{
                                    "is-invalid": errors.collectionName})}

                                           placeholder="Nom Collection"
                                           name="collectionName"
                                           value={this.state.collectionName}
                                           onChange={this.onChange}

                                    />
                                    {errors.collectionName && (<div className="invalid-feedback">{errors.collectionName}</div> )}
                                </div>
                                <div className="form-group">
                                    <input type="text" className={classnames("form-control form-control-lg",{
                                        "is-invalid": errors.collectionIdentifier})}
                                           placeholder="Identifiant unique du Collection " name="collectionIdentifier"
                                           value={this.state.collectionIdentifier}
                                           onChange={this.onChange}
                                           />
                                    {errors.collectionIdentifier && (<div className="invalid-feedback">{errors.collectionIdentifier}</div> )}


                                </div>
                                <div className="form-group">
                                    <textarea className={classnames("form-control form-control-lg",{
                                        "is-invalid": errors.description})}
                                              placeholder="Description" name="description"
                                              value={this.state.description}
                                              onChange={this.onChange}
                                    >

                                    </textarea>
                                    {errors.description && (<div className="invalid-feedback">{errors.description}</div> )}


                                </div>

                                <input type="submit" className="btn btn-primary btn-block mt-4"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
AddCollection.propTypes = {
    createAtelier: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
    errors : state.errors

})
export default connect(mapStateToProps,{createAtelier: createCollection}) (AddCollection);