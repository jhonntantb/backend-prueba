import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap"

export default function Review({content}){
    const checked = {
        color: "orange"
    }

    const starsCreation = (score) => {
        let stars = []
        let complete = 5 - score
        
        for(let i = 0; i < score; i++) stars.push(<span class="fa fa-star" style={checked}></span>)

        if(complete != 0)
            for(let i = 0; i < complete; i++) stars.push(<span class="fa fa-star"></span>)

        return stars
    }
    
    return (
    <div id="review">
        <Card fluid>
            <CardBody >
            {starsCreation(content.score)}
            <CardTitle></CardTitle>
            <CardSubtitle>{content.date}</CardSubtitle>
            <CardText>{content.description}</CardText>
            </CardBody>
        </Card>
    </div>
    )
}