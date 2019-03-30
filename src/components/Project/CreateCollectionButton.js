import React from 'react'
import {Link} from "react-router-dom";

const CreateCollectionButton =  () => {
    return (
        <React.Fragment>
        <Link to="/addCollection"
        className="btn btn-lg btn-info">
         Ajouter une nouvelle collection
        </Link>
        </React.Fragment>
    )
}
export default CreateCollectionButton;
