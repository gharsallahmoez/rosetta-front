import React, {Component} from 'react';
import CollectionItem from "./Project/CollectionItem";
import CreateCollectionButton from "./Project/CreateCollectionButton";
import {connect} from "react-redux";
import { getCollections } from "../actions/collectionActions";
import PropTypes from 'prop-types'
class Dashboard extends Component {
    componentDidMount(){
        this.props.getCollections()
    }
    render() {
        const { collections } = this.props.collection;
        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">Collections</h1>
                            <br/>
                            <CreateCollectionButton/>
                            <br />
                            <hr />
                            {collections.map(collection => (
                                <CollectionItem key={collection.id} collection={collection} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
Dashboard.propTypes = {
    collection : PropTypes.object.isRequired,
    getCollections: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    collection:state.collection
})

export default connect(mapStateToProps,{getCollections})(Dashboard);