import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../firebase/AuthProvider";
import Booked from "./Booked";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/checkout?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, [url]);
  return (
    <div>
      <h2 className="container mx-auto text-3xl">
        Booked List: {bookings?.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
        
              {
              bookings.map((booked, idx) => (
                <Booked key={idx} booked={booked}></Booked>
              ))
              }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
