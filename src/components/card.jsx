/* eslint-disable react/prop-types */
import "../styles/card.css";

const reservationPopup = (table_id) => {
  /**
   * Fetch table data
   * Show the dates and the hours available
   */
  console.log(table_id);
  return <></>;
};

const Card = ({ table_id, img, title }) => {
  return (
    <div className="card" onClick={() => reservationPopup(table_id)}>
      <div className="image">
        <img src={img} />
      </div>
      <span className="title">{title}</span>
    </div>
  );
};
export default Card;
