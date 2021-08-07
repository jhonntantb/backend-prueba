export default function Review({content}){
    <div id="review">
        <div id="score">
            {content.score}
        </div>
        <div id="description">
            {content.description}
        </div>
        <div id="date">
            {content.date}
        </div>
    </div>
}