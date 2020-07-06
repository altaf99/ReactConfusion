import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg width="100%" top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(comments){
        if (comments!= null)
            return(
               <div>
                    <h4>Comments</h4>
                    {comments}
               </div>
            );
                        
        else
            return(
                <div></div>
            );
    }

    render() {

            const dish = this.props.dishdetail;
            var comments = null;
            if(dish){
                comments = dish.comments.map((comment) => {
                    return(
                      
                            <ul key={comment.id} className="list-unstyled">
                            <li>{comment.comment}</li>
                                <li>--{comment.author}, {comment.date}</li>
                            </ul>
                       
                    );
                 });
            }
            
    

        return(
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dishdetail)}
                </div>
                <div  className="col-12 col-md-5 text-left m-1">
                    {this.renderComments(comments)}
                </div>
            </div>
        );
       
    }
}


export default DishDetail;