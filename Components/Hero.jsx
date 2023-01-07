import React from 'react'

export default function Hero() {
  return (
    <>
        <div className="hero h-screen bg-gray-900 text-slate-50 w-full">
        <div className="hero-content flex-col lg:flex-row-reverse h-max opacity-100">
          <img
            src="https://img.freepik.com/free-vector/clothing-donation-concept-flat-hand-drawn_52683-55267.jpg?w=900&t=st=1673093968~exp=1673094568~hmac=5bbdf20ec031df4947f04f68ee088ba0901f51f8456581dbdf674bbd9248358c"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="text-center">
            <h1 className="text-5xl font-bold">Donate Here!</h1>
            <p className="py-6 w-4/6 text-center mx-auto">
              A web-app that helps you reduce wastage by connecting you
              to several NGOs that are ready to accept your donation and 
              put it to a good cause.
            </p>
            <button className="btn btn-primary bg-gray-600">Get Started</button>
          </div>
        </div>
      </div>
    </>
  )
}

