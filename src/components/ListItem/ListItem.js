import { useState, memo } from "react";

import Logo from "../../assets/DeSmart-logo-black-500px.png";
import "./ListItem.css";

const ListItem = memo(({ data, selected, onClick }) => {
  //fallback for a 404 on an image
  const [imgSrc, setImgSrc] = useState(data.url);
  const imgErrorHandler = () => setImgSrc(Logo);

  return (
    <>
      <div className={selected ? "list-item-wrapper active" : "list-item-wrapper"} onClick={() => onClick(data.id)}>
        <div className="list-item-image">
          <img
            src={imgSrc}
            alt=""
            onError={imgErrorHandler}
            className="list-item-image-content"
            style={imgSrc === Logo ? { objectFit: "contain", padding: "0 0.5rem" } : null}
          />
        </div>
        <div className="list-item-title">
          <p>{data.title}</p>
        </div>
      </div>
    </>
  );
});

export default ListItem;
