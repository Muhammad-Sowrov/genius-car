/* eslint-disable react/prop-types */
const Booked = ({ booked, handleDelete, handleUpdate }) => {
  const {_id, customer, image, date, service, price, email, status } = booked;

  
  return (
    <tr>
      <th>
        <label>
          <button onClick={()=> handleDelete(_id)} className="btn btn-circle btn-sm btn-outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{service}</div>
            <div className="text-sm opacity-50">{customer}</div>
          </div>
        </div>
      </td>
      <td>{date}</td>
      <td>{price}</td>
      <th>
        { status === 'confirm'? <span className="text-xl font-bold">Confirmed</span> :
          <button onClick={()=> handleUpdate(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>}
      </th>
    </tr>
  );
};

export default Booked;
