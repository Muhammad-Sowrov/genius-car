import { useEffect, useState } from "react";
import Card from "./Card";

const Services = () => {
    const [service, setService] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setService(data)
        })
    },[])
    // console.log(setService);
    return (
        <div className="my-6 ">
            <h1 className="text-center text-4xl font-bold">Our Service</h1>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                service.map(ser => <Card key={ser._id} ser={ser}></Card>)
            }
            </div>
        </div>
    );
};

export default Services;