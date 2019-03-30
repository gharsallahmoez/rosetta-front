import React, {Component} from 'react';
import {connect} from "react-redux";
import classnames from "classnames"
import {getShoe ,updateShoe} from "../../../actions/backlogActions";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

class UpdateShoe extends Component {
    constructor() {
        super();

        this.state = {
            id: "",
            collectionSequence: "",
            shoeName: "",
            shoeDescription: "",
            status: "",
            categorie: "",
            date: "",
            collectionIdentifier: "",
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        const { backlog_id, pt_id } = this.props.match.params;
        this.props.getShoe(backlog_id, pt_id, this.props.history);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }

        const {
            id,
            collectionSequence,
            shoeName,
            shoeDescription,
            status,
            categorie,
            date,
            collectionIdentifier,
            cree_a: create_At
        } = nextProps.shoe;

        this.setState({
            id,
            collectionSequence: collectionSequence,
            shoeName: shoeName,
            shoeDescription: shoeDescription,
            status: status,
            categorie: categorie,
            date: date,
            collectionIdentifier: collectionIdentifier,
            create_At:create_At
        });
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const UpdateShoe = {
            id: this.state.id,
            collectionSequence: this.state.collectionSequence,
            shoeName: this.state.shoeName,
            shoeDescription: this.state.shoeDescription,
            status: this.state.status,
            categorie: this.state.categorie,
            date: this.state.date,
            collectionIdentifier: this.state.collectionIdentifier,
            create_At: this.state.create_At
        };


        this.props.updateShoe(
            this.state.collectionIdentifier,
            this.state.collectionSequence,
            UpdateShoe,
            this.props.history
        );
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="add-PBI">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link
                                to={`/atelierBoard/${this.state.collectionIdentifier}`}
                                className="btn btn-light"
                            >
                                retour vers Atelier Board
                            </Link>
                            <h4 className="display-4 text-center">Mettre a jour chaussure</h4>
                            <p className="lead text-center">
                                Nom Chaussure: {this.state.collectionIdentifier} | ID Chaussure :{" "}
                                {this.state.collectionSequence}{" "}
                            </p>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.shoeName
                                        })}
                                        name="shoeName"
                                        placeholder="Nom Du Chaussure"
                                        value={this.state.shoeName}
                                        onChange={this.onChange}
                                    />
                                    {errors.shoeName && (
                                        <div className="invalid-feedback">{errors.shoeName}</div>
                                    )}
                                </div>
                                <div className="form-group">
                  <textarea
                      className="form-control form-control-lg"
                      placeholder="Description"
                      name="shoeDescription"
                      value={this.state.shoeDescription}
                      onChange={this.onChange}
                  />
                                </div>
                                <h6>Date</h6>
                                <div className="form-group">
                                    <input
                                        type="date"
                                        className="form-control form-control-lg"
                                        name="date"
                                        value={this.state.date}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <select
                                        className="form-control form-control-lg"
                                        name="categorie"
                                        value={this.state.categorie}
                                        onChange={this.onChange}
                                    >
                                        <option value={0}>Select Categorie</option>
                                        <option value={1}>Homme</option>
                                        <option value={2}>Femme</option>
                                        <option value={3}>Enfant</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <select
                                        className="form-control form-control-lg"
                                        name="status"
                                        value={this.state.status}
                                        onChange={this.onChange}
                                    >
                                        <option value="">Select Status</option>
                                        <option value="EN_STOCK">EN STOCK</option>
                                        <option value="CONSTRUCTION">EN CONSTRUCTION</option>
                                        <option value="LIVRAISON">EN LIVRAISON</option>
                                    </select>
                                </div>

                                <input
                                    type="submit"
                                    className="btn btn-primary btn-block mt-4"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

UpdateShoe.propTypes = {
    getShoe: PropTypes.func.isRequired,
    shoe: PropTypes.object.isRequired,
    updateShoe: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    shoe: state.backlog.shoe,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    {  getShoe,  updateShoe }
)(UpdateShoe);