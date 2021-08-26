import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap'

export class DishDetail extends Component {

    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" object src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        } else return <div></div>
    }

    renderComments(comments) {
        if (comments) {
            const commentList = comments.map((comment) => {
                return (
                    <div key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author} , {comment.date}</p>
                    </div>
                )
            })

            return (
                <div>
                    <h4>Comments</h4>
                    {commentList}
                </div>
            )
        } else {
            
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-5 col-12 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-md-5 col-12 m-1">
                    {this.renderComments(this.props.comments)}
                </div>
            </div>
        )
    }
}

export default DishDetail
