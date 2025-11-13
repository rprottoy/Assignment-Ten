import React, { use, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import deleteIcon from "../../Assets/delete_icon.svg";
import editIcon from "../../Assets/icons8-edit-pencil-48.png";
import Swal from "sweetalert2";

const MyListings = () => {
  const updateModalRef = useRef(null);
  const { user } = use(AuthContext);
  const [listings, setListings] = useState([]);

  const [loading, setLoading] = useState(true);
  const [isDeleted, setIsDeleted] = useState(false);

  const currency = import.meta.env.VITE_CURRENCY;

  // modal
  const handleUpdateModalOpen = () => {
    updateModalRef.current.showModal();
  };

  // Update form
  const handleUpdate = (e, id) => {
    e.preventDefault();

    const updatedForm = {
      carName: e.target.carName.value,
      category: e.target.category.value,
      imageUrl: e.target.imageUrl.value,
      rentPrice: e.target.rentPrice.value,
      location: e.target.location.value,
      description: e.target.description.value,
    };

    // sending data to server
    fetch(`http://localhost:3000/car/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedForm),
    })
      .then((res) => res.json())
      .then(() => {});
  };

  useEffect(() => {
    fetch(`http://localhost:3000/my-listings?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setListings(data);
        setLoading(false);
        setIsDeleted(false);
      });
  }, [isDeleted]);

  if (loading) {
    <span className="loading loading-ring loading-xl"></span>;
  }

  // delete
  const handleDelete = (id) => {
    setIsDeleted(false);
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/browseCars/${id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then(() => {
            setIsDeleted(true);
            Swal.fire({
              title: "Deleted!",
              text: "Your listing has been deleted.",
              icon: "success",
            });
            // console.log(data);
          })

          .catch((err) => {
            console.log(err);
          });
      }
    });
  };
  return (
    <div className="mt-30 px-6 md:px-16 lg:px-24  text-sm md:max-w-10/12 mx-auto">
      <div>
        <h1 className="text-3xl font-semibold font-primary text-[#253241] mb-2">
          My Listings
        </h1>
        <p className="font-secondary text-[#253241]">
          View and manage all your car listings
        </p>
      </div>
      <div className="max-w-3xl w-full rounded-md overflow-hidden border border-borderColor mt-6 mb-15 font-secondary">
        <table className="w-full border-collapse text-left text-sm text-[#253241]">
          <thead className="text-[#253241] ">
            <tr>
              <th className="p-3 font-medium">{listings.carName}</th>
              <th className="p-3 font-medium">Category</th>
              <th className="p-3 font-medium">Price</th>
              <th className="p-3 font-medium max-md:hidden">Availability</th>
              <th className="p-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {listings.map((listing, index) => (
              <tr key={index} className="border-t border-borderColor">
                <td className="p-3 flex items-center gap-3">
                  <img
                    className="h-12 w-12 aspect-square rounded-md object-cover"
                    src={listing.imageUrl}
                    alt=""
                  />
                  <div className="max-md:hidden">
                    <p className="font-medium">{listing.carName}</p>
                  </div>
                </td>
                <td className="p-3 max-md:hidden">{listing.category}</td>
                <td className="p-3 ">
                  {currency}
                  {listing.rentPrice} /Day
                </td>
                <td></td>
                <td className="flex items-center p-3">
                  <div>
                    {" "}
                    <img
                      onClick={() => handleDelete(listing._id)}
                      src={deleteIcon}
                      alt="Delete Icon"
                      className="cursor-pointer"
                    />
                  </div>
                  <div>
                    <img
                      onClick={() => handleUpdateModalOpen(listing._id)}
                      src={editIcon}
                      alt="Delete Icon"
                      className="cursor-pointer w-4"
                    />

                    <dialog
                      ref={updateModalRef}
                      className="modal modal-bottom sm:modal-middle"
                    >
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">
                          Update Your Car Details!
                        </h3>
                        <p className="py-4">
                          Choose something best for the customers.
                        </p>
                        {/* form */}
                        <form
                          onSubmit={(e) => handleUpdate(e, listing._id)}
                          className="flex flex-col gap-5  text-sm mt-6 max-w-xl font-secondary text-[#253241]"
                        >
                          {/* Car Name and category */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col w-full">
                              <label>Car Name</label>
                              <input
                                type="text"
                                defaultValue={listing?.carName}
                                name="carName"
                                placeholder="e.g. BMW, Mercedes, Audi..."
                                className="px-3 py-2 mt-1 border borderColor rounded-md outline-none"
                              />
                            </div>
                            <div className="flex flex-col w-full">
                              <label>Category</label>
                              <select
                                defaultValue={listing?.category}
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
                                defaultValue={listing?.rentPrice}
                                name="rentPrice"
                                placeholder="Price in Dollar"
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
                              defaultValue={listing?.location}
                              placeholder="Your Location"
                              className="px-3 py-2 mt-1 border borderColor rounded-md outline-none"
                            />
                          </div>
                          <div className="flex flex-col w-full">
                            <label>Photo URL</label>
                            <input
                              type="text"
                              name="imageUrl"
                              defaultValue={listing?.imageUrl}
                              placeholder="Car's Image URL"
                              className="px-3 py-2 mt-1 border borderColor rounded-md outline-none"
                            />
                          </div>

                          <div className="flex flex-col w-full">
                            <label>Description</label>
                            <textarea
                              name="description"
                              defaultValue={listing?.description}
                              placeholder="Description about the car and the provider"
                              className="px-3 py-2 mt-1 border borderColor rounded-md outline-none"
                            ></textarea>
                          </div>
                          <button className="btn border-none font-primary text-white rounded-none font-semibold mt-4 bg-[#D01818] hover:bg-[#222222]">
                            UPDATE YOUR DETAILS
                          </button>
                        </form>

                        <div className="modal-action">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyListings;
