import React from 'react'

const InvoicePage = () => {
  return (
    < >
        <div className="container h-screen bg-green-900">
            <div className="row ">
                <form action="">
                <div className="bg-gray-100 md:w-64 p-1 md:p-2 flex items-center mb-3">
                  {/* <FaRegEnvelope className="text-gray-400 m-2" /> */}
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-gray-100 outline-none text-sm flex-1"
                    // onChange={updateData}
                    required
                  />
                </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default InvoicePage