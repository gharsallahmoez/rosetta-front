import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Backlog from "./Backlog";
import {connect} from "react-redux"
import PropTypes from "prop-types"
import {getBacklog} from "../../actions/backlogActions";

class CollectionBoard extends Component {

    constructor() {
        super()
        this.state = {
            errors : {}
        };
    }
    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.getBacklog(id);
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.errors){
            this.setState({errors:nextProps.errors});
        }
    }
    render() {
        const { id } = this.props.match.params;
        const {  shoes } = this.props.backlog;
        const { errors } = this.state;

        let BoardContent;

        const boardAlgorithm = (errors, shoes) => {
            if (shoes.length < 1) {
                if (errors.collectionNotFound) {
                    return (
                        <div className="alert alert-danger text-center" role="alert">
                            {errors.collectionNotFound}
                        </div>
                    );
                } else {
                    return (
                        <div className="alert alert-info text-center" role="alert">
                            pas de chaussure
                        </div>
                    );
                }
            } else {
                return <Backlog shoes={shoes} />;
            }
        };

        BoardContent = boardAlgorithm(errors, shoes);

        return (
            <div className="container">
                <Link to={`/addShoe/${id}`} className="btn btn-primary mb-3">
                    <i className="fas fa-plus-circle"> Ajouter une Nouvelle Chaussure </i>
                </Link>
                <br />
                <hr />
                {BoardContent}
            </div>
        );
    }

}
CollectionBoard.propTypes= {
    backlog : PropTypes.object.isRequired,
    getBacklog : PropTypes.func.isRequired,
    errors : PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    backlog:state.backlog,
    errors : state.errors
})
export default connect(mapStateToProps,{getBacklog})(CollectionBoard);