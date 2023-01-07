import React from "react";

export default function Hero() {
  return (
    <>
      <div className="hero h-screen bg-gray-900 text-slate-50 w-full">
        <div className="hero-content flex-col lg:flex-row-reverse h-max opacity-100">
          <img
            src="https://images.pexels.com/photos/3856026/pexels-photo-3856026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="text-center">
            <h1 className="text-5xl font-bold">Know Your Community!</h1>
            <p className="py-6 w-4/6 text-center mx-auto">
              The only application you need to build, access and grow your
              community.
            </p>
            <button className="btn btn-primary bg-gray-600">Get Started</button>
          </div>
        </div>
      </div>
      {/* Hero Page */}
    </>
  );
}
