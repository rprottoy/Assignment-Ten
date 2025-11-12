import React from "react";
import testimonial1 from "../../Assets/testimonial_image_1.png";
import testimonial2 from "../../Assets/testimonial_image_2.png";

const Testimonial = () => {
  return (
    <section className="flex flex-col items-start md:my-15 my-8 px-6 text-sm md:max-w-10/12 mx-auto">
      <h1 className="text-5xl font-medium bg-gradient-to-r from-[#253241] to-[#D01818] text-transparent bg-clip-text mt-4 font-primary">
        Don't just take our words
      </h1>
      <p className="text-[#253241] mt-4 max-w-2xl font-secondary">
        Hear what our users say about us. We're always looking for ways to
        improve. If you have a positive experience with us, leave a review.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mt-10">
        <div className="border border-slate-200 p-6 rounded-lg hover:-translate-y-1 hover:shadow-xl hover:border-transparent transition duration-500">
          <p className="text-base text-slate-500 font-secondary">
            Smooth booking, clean cars, and excellent customer service!
          </p>
          <div className="flex items-center gap-3 mt-8">
            <img
              className="size-12 rounded-full"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
              alt="user image"
            />
            <div>
              <h2 className="flex items-center gap-2 text-base font-medium font-primary text-[#253241]">
                Richard Nelson
              </h2>
              <p className="text-gray-500 font-secondary">Happy customer</p>
            </div>
          </div>
        </div>

        <div className="border border-slate-200 p-6 rounded-lg hover:-translate-y-1 hover:shadow-xl hover:border-transparent transition duration-500">
          <p className="text-base text-slate-500 font-secondary">
            Affordable rates and super easy pickup process. Loved it!
          </p>
          <div className="flex items-center gap-3 mt-8">
            <img className="size-12 rounded-full" src={testimonial1} />
            <div>
              <h2 className="flex items-center gap-2 text-base text-[#253241] font-medium font-primary">
                Ava Johnson
              </h2>
              <p className="text-gray-500 font-secondary">Happy Customer</p>
            </div>
          </div>
        </div>

        <div className="border border-slate-200 p-6 rounded-lg hover:-translate-y-1 hover:shadow-xl hover:border-transparent transition duration-500">
          <p className="text-base text-slate-500 font-secondary">
            Reliable cars, friendly staff, and hassle-free experience!
          </p>
          <div className="flex items-center gap-3 mt-8">
            <img
              className="size-12 rounded-full"
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60"
              alt="user image"
            />
            <div>
              <h2 className="flex items-center gap-2 text-base text-[#253241] font-medium font-primary">
                Liam Carter
              </h2>
              <p className="text-gray-500 font-secondary">Happy Customer</p>
            </div>
          </div>
        </div>

        <div className="border border-slate-200 p-6 rounded-lg hover:-translate-y-1 hover:shadow-xl hover:border-transparent transition duration-500">
          <p className="text-base text-slate-500 font-secondary">
            Best rental service ever—quick, convenient, and trustworthy!
          </p>
          <div className="flex items-center gap-3 mt-8">
            <img className="size-12 rounded-full" src={testimonial2} />
            <div>
              <h2 className="flex items-center gap-2 text-base text-[#253241] font-primary font-medium">
                Sophia Lee
              </h2>
              <p className="text-gray-500 font-secondary">Happy Customer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
