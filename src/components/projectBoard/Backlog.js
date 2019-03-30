import React, {Component} from 'react';
import Shoe from "./ProjectTasks/Shoe";

class Backlog extends Component {
    render() {
        const {shoes} = this.props;

        const tasks = shoes.map(shoe => (
            <Shoe key={shoe.id} shoe_prop = {shoe} />
    ));
        let enstockItems = [];
        let constructionItems = [];
        let livraisonItems = [];

        for(let i=0; i<tasks.length ; i++){

            if(tasks[i].props.shoe_prop.status == "EN_STOCK"){

                enstockItems.push(tasks[i]);
            };
            if(tasks[i].props.shoe_prop.status == "CONSTRUCTION"){

                constructionItems.push(tasks[i]);
            };
            if(tasks[i].props.shoe_prop.status == "LIVRAISON"){

                livraisonItems.push(tasks[i]);
            };
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-secondary text-white">
                                <h3>EN STOCK</h3>
                            </div>
                        </div>
                        {enstockItems}
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-primary text-white">
                                <h3>EN CONSTRUCTION</h3>
                            </div>
                        </div>
                        {constructionItems}
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-success text-white">
                                <h3>EN LIVRAISON</h3>
                            </div>
                        </div>
                        {livraisonItems}
                    </div>
                </div>
            </div>
        );
    }
}

export default Backlog;