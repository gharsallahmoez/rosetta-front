import React, { Component } from "react";
import { getCollection, createCollection } from "../../actions/collectionActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

class UpdateCollection extends Component {
    constructor() {
        super();
        this.state = {
            id: "",
            collectionName: "",
            collectionIdentifier: "",
            description: "",
            errors:{}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors){
            this.setState({errors:nextProps.errors})
        }
        const {
            id,
            collectionName,
            collectionIdentifier,
            description
        } = nextProps.collection;

        this.setState({
            id,
            collectionName: collectionName,
            collectionIdentifier: collectionIdentifier,
            description: description,
        });
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getCollection(id, this.props.history);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const updateCollection = {
            id: this.state.id,
            collectionName: this.state.collectionName,
            collectionIdentifier: this.state.collectionIdentifier,
            description: this.state.description
        };

        this.props.createCollection(updateCollection, this.props.history);
    }

    render() {
        const {errors} = this.state;
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Mettre a jour une collection</h5>
                            <hr />
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames("form-control form-control-lg ",{
                                            "is-invalid":errors.collectionName})}
                                        placeholder="Nom Collection"
                                        name="collectionName"
                                        value={this.state.collectionName}
                                        onChange={this.onChange}
                                    />
                                    {
                                        errors.collectionName && (
                                            <div className="invalid-feedback">{errors.collectionName}</div>
                                        )
                                    }
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Identifiant du Collection unique"
                                        name="collectionIdentifier"
                                        value={this.state.collectionIdentifier}
                                        onChange={this.onChange}
                                        disabled
                                    />
                                </div>
                                <div className="form-group">
                  <textarea
                      className="form-control form-control-lg"
                      placeholder="Description"
                      name="description"
                      onChange={this.onChange}
                      value={this.state.description}
                  />
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

UpdateCollection.propTypes = {
    getCollection: PropTypes.func.isRequired,
    createCollection: PropTypes.func.isRequired,
    collection: PropTypes.object.isRequired,
    errors : PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    collection: state.collection.collection,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { getCollection,  createCollection }
)(UpdateCollection);