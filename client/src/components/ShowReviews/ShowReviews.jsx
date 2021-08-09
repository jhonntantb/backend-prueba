import Review from "../Review/Review"

export default function ShowReviews({reviews})
{
    console.log(reviews)
    return (
    
    <div id="allReviews" className='reviews'>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        {
            reviews.map(review => <Review content={review}/>)
        }
    </div>
    )
}