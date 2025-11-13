import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";

const AddCar = () => {
  const { user } = use(AuthContext);

  // Form
  const handleOnSubmit = (e) => {
    e.preventDefault();

    const formData = {
      carName: e.target.carName.value,
      category: e.target.category.value,
      rentPrice: e.target.rentPrice.value,
      imageUrl: e.target.imageUrl.value,
      location: e.target.location.value,
      providerId: user.uid,
      providerName: user.displayName,
      providerEmail: user.email,
      description: e.target.description.value,
      availabilityStatus: "Available",
    };
    fetch("http://localhost:3000/browseCars", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          title: "Congratulations!",
          text: "Your car added to the listing",
          icon: "success",
        });
        // console.log(data);
      })

      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="mt-30  md:max-w-10/12 w-11/12 mx-auto mb-15">
      <div>
        <h1 className="text-3xl font-semibold font-primary text-[#253241] mb-2">
          Add Your Car to The Listing
        </h1>
        <p className="font-secondary text-[#253241]">
          fill the details to list a new car for listing, including pricing,
          availability, and other specifications.
        </p>
      </div>
      <div>
        <form
          onSubmit={handleOnSubmit}
          className="flex flex-col gap-5  text-sm mt-6 max-w-xl font-secondary text-[#253241]"
        >
          {/* Car Name and category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col w-full">
              <label>Car Name</label>
              <input
                type="text"
                name="carName"
                placeholder="e.g. BMW, Mercedes, Audi..."
                required
                className="px-3 py-2 mt-1 border borderColor rounded-md outline-none"
              />
            </div>
            <div className="flex flex-col w-full">
              <label>Category</label>
              <select
                className="px-3 py-2 mt-1 border borderColor rounded-md outline-none"
                name="category"
              >
                <option value="">Select a category</option>
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Luxury">Luxury</option>
                <option value="Electric">Electric</option>
              </select>
            </div>
          </div>
          {/* Price, Photo Url*/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col w-full">
              <label>Price Per Day</label>
              <input
                type="number"
                name="rentPrice"
                placeholder="Price in Dollar"
                required
                className="px-3 py-2 mt-1 border borderColor rounded-md outline-none"
              />
            </div>
            <div className="flex flex-col w-full">
              <label>Provider's Name</label>
              <input
                type="text"
                // readOnly
                name="providerName"
                placeholder="Your/Company Name"
                readOnly
                value={user.displayName}
                className="px-3 py-2 mt-1 border borderColor rounded-md outline-none"
              />
            </div>
          </div>
          {/* location, Provider name, Provider email, Description */}
          <div className="flex flex-col w-full">
            <label>Location</label>
            <input
              type="text"
              name="location"
              placeholder="Your Location"
              required
              className="px-3 py-2 mt-1 border borderColor rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col w-full">
            <label>Photo URL</label>
            <input
              type="text"
              name="imageUrl"
              placeholder="Car's Image URL"
              required
              className="px-3 py-2 mt-1 border borderColor rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col w-full">
            <label>Provider's Email</label>
            <input
              type="text"
              name="providerEmail"
              placeholder="Your/Company Email"
              readOnly
              value={user.email}
              // readOnly
              className="px-3 py-2 mt-1 border borderColor rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col w-full">
            <label>Description</label>
            <textarea
              name="description"
              placeholder="Description about the car and the provider"
              required
              className="px-3 py-2 mt-1 border borderColor rounded-md outline-none"
            ></textarea>
          </div>
          <button className="btn border-none font-primary text-white rounded-none font-semibold mt-4 bg-[#D01818] hover:bg-[#222222]">
            ADD YOUR CAR
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCar;
