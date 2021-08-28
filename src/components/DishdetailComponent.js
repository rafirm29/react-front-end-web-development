import React from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap'


function RenderDish({ dish } ) {
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

function RenderComments({ comments }) {
    if (comments != null) {
        const commentList = comments.map((comment) => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                </li>
            )
        })

        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {commentList}
                </ul>
            </div>
        )
    } else {
        return <div></div>
    }
}

const DishDetail = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5 col-12 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-md-5 col-12 m-1">
                    <RenderComments comments={props.dish.comments} />
                </div>
            </div>
        </div>
    )
}


export default DishDetail
