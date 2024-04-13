import { useState } from "react";

function Card({ id, image, name, price, info ,removeTour}) {
    const [readMore, setReadMOre] = useState(false);
    function readMoreHandler() {
        setReadMOre(!readMore);
    }
    const description = readMore?info:`${info.substring(0, 200)}...`;
  return (
    <div className="card">
      <img src={image} className="image"></img>
      <div className="tour-info">
        <div className="tour-details">
            
          <h4 className="tour-price">${price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>

        <div className="description">{description}</div>
        <span className="read-more" onClick={readMoreHandler}>
          {readMore ? `Show less` : `Read more`}
        </span>
      </div>
      <button className="btn-red" onClick={()=>removeTour(id)}>Not interested</button>
    </div>
  );
}
export default Card;
