import React from "react";
import Header from "@/app/Components/header";

const UserDetails = async ( {params} : {params :{id: string}} ) => {
    const id = await params.id; 
    const req = await fetch(
      `https://jsonplaceholder.typicode.com/Users/${id}`
    );
    const User = await req.json(); 
  
    return (
      <>
        <Header />
        <div className="flex flex-col items-center">
          <h1 className="font-semibold font-mono my-3 text-2xl">
            User #{User.id} Details
          </h1>
          <dl className="max-w-md text-gray-900 divide-y divide-gray-200">
            <div className="flex flex-col py-3">
              <dt className="mb-1 text-gray-500 md:text-lg">Name</dt>
              <dd className="text-lg font-semibold">{User.name}</dd>
            </div>
            <div className="flex flex-col py-3">
              <dt className="mb-1 text-gray-500 md:text-lg">User Name</dt>
              <dd className="text-lg font-semibold">{User.username}</dd>
            </div>
            <div className="flex flex-col py-3">
              <dt className="mb-1 text-gray-500 md:text-lg">Email</dt>
              <dd className="text-lg font-semibold">{User.email}</dd>
            </div>
            <div className="flex flex-col py-3">
              <dt className="mb-1 text-gray-500 md:text-lg">Phone Number</dt>
              <dd className="text-lg font-semibold">{User.phone}</dd>
            </div>
            <div className="flex flex-col py-3">
              <dt className="mb-1 text-gray-500 md:text-lg">Address</dt>
              <dd className="text-lg font-semibold">
                {User.address.street} {User.address.suite} {User.address.city}{" "}
                {User.address.zipcode}
              </dd>
            </div>
            <div className="flex flex-col py-3">
              <dt className="mb-1 text-gray-500 md:text-lg">Website</dt>
              <dd className="text-lg font-semibold">{User.website}</dd>
            </div>
          </dl>
        </div>
      </>
    );
  };
  
  export default UserDetails;
  