import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types"
import {connect} from "react-redux";
import {deleteCollection} from "../../actions/collectionActions";

class CollectionItem extends Component {

    onDeleteClick = id => {
        this.props.deleteCollection(id);
    }
    render() {
        const { collection } = this.props;
        return (
            <div className="container">
                <div className="card card-body bg-light mb-3">
                    <div className="row">
                        <div className="col-2">
                            <span className="mx-auto">{collection.collectionIdentifier}</span>
                        </div>
                        <div className="col-lg-6 col-md-4 col-8">
                            <h3>{collection.collectionName}</h3>
                            <p>{collection.description}</p>
                        </div>
                        <div className="col-md-4 d-none d-lg-block">
                            <ul className="list-group">
                                <Link to={`/collectionBoard/${collection.collectionIdentifier}`}>
                                    <li className="list-group-item board">
                                        <i className="fa fa-flag-checkered pr-1"> Tableau des Collections </i>
                                    </li>
                                </Link>
                                <Link to={`/updateCollection/${collection.collectionIdentifier}`}>
                                    <li className="list-group-item update">
                                        <i className="fa fa-edit pr-1"> mettre a jour une collection</i>
                                    </li>
                                </Link>

                                    <li className="list-group-item delete" onClick={this.onDeleteClick.bind(this,collection.collectionIdentifier)}>
                                        <i className="fa fa-minus-circle pr-1"> Supprimer collection</i>
                                    </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

CollectionItem.propTypes = {
    deleteCollection:PropTypes.func.isRequired
}

export default connect(null,{ deleteCollection})(CollectionItem);