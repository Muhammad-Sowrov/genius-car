import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({ ser }) => {
  const {_id, title, img, price } = ser;
  return (
    <div>
       <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-tl-full" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-xl text-orange-500">Price: ${price}</p>
                <div className="card-actions">
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-primary rounded-tl-full">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Card;
