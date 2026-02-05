const Card = ({
  title,
  text,
}) => (
    <div className="cards__item">
        <div className="cards__item--picture"></div>
        <h3 className="cards__item--title">{title}</h3>
        <p className="cards__item--text">{text}</p>
    </div>
)

export default Card;
