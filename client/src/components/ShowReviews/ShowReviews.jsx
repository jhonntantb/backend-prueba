import Review from "../Review/Review"

export default function ShowReviews({reviews})
{
    <div id="allReviews">
        {
            reviews.map(review => <Review content={review}/>)
        }
    </div>
}