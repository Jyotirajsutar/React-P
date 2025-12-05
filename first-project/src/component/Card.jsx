import "./Card.css";

function Card(props) {
    console.log(props);
    return (
        <>
            <div className="Card">
                <img src={props.img} />
                <h2>{props.user}</h2>
                <p>I am a student of MCA in NIIS INSTITUTION OF BUSINESS ADMINSTRATION</p>
                <button>View Profile</button>
            </div>
        </>
    );
}
export default Card;