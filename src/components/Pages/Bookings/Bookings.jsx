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


  const handleDelete = id => {
    const proceed = confirm('Are you sure, you want to delete?');
    if (proceed) {
      fetch(`http://localhost:5000/checkout/${id}`, {
        method: "DELETE"
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert('Successfully deleted');
          const remaining = bookings.filter(booking => booking._id !== id);
          setBookings(remaining);
        }
      })
    }
  }
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
              <th>Ordered Time</th>
              <th>Price</th>
              <th>Customer Email</th>
            </tr>
          </thead>
          <tbody>
        
              {
              bookings.map((booked, idx) => (
                <Booked key={idx} booked={booked} handleDelete={handleDelete}></Booked>
              ))
              }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
