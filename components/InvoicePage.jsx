import React from "react";

const InvoicePage = () => {
  return (
    // <>
    //   <div className="container box-border h-full w-full py-4">
    //     <div className="row ">
    //       <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
    //         <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blue-100 border-0">
    //           <div className="rounded-t bg-white mb-0 px-6 py-6">
    //             <div className="text-center flex justify-between">
    //               <h6 className="text-blue-700 text-xl font-bold capitalize">
    //                 My account
    //               </h6>
    //               <button className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">
    //                 Print
    //               </button>
    //             </div>
    //           </div>

    //           <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
    //             <form action="">
    //               {/* <h6 className="text-blue-400 text-sm mt-3 mb-6 font-bold uppercase">
    //                 User information
    //               </h6> */}
    //               <div className="mt-6" >
    //                 <hr className="w-full mb-6 border-b-2 border-b-gray-800"/>
    //                 <div className="flex flex-wrap">
    //                   <div className="w-full lg:w-6/12 px-4">
    //                     <div className="relative w-full mb-3">
    //                       <label
    //                         htmlFor=""
    //                         className="inline uppercase text-blue-600 text-xs font-bold mb-2"
    //                       >
    //                         Username
    //                       </label>
    //                       <input
    //                         type="text"
    //                         className="border-0 px-3 py-3 placeholder-blue-300  bg-white rounded text-sm shadow focus:ring w-full ease-linear transition-all duration-150"
    //                       />
    //                     </div>
    //                   </div>
    //                   <div className="w-full lg:w-6/12 px-4">
    //                     <div className="relative w-full mb-3">
    //                       <label
    //                         htmlFor=""
    //                         className="block uppercase text-blue-600 text-xs font-bold mb-2"
    //                       >
    //                         Email address
    //                       </label>
    //                       <input
    //                         type="text"
    //                         className="border-0 px-3 py-3 placeholder-blue-300  bg-white rounded text-sm shadow focus:ring w-full ease-linear transition-all duration-150"
    //                       />
    //                     </div>
    //                   </div>
    //                   <div className="w-full lg:w-6/12 px-4">
    //                     <div className="relative w-full mb-3">
    //                       <label
    //                         htmlFor=""
    //                         className="block uppercase text-blue-600 text-xs font-bold mb-2"
    //                       >
    //                         First Name
    //                       </label>
    //                       <input
    //                         type="text"
    //                         className="border-0 px-3 py-3 placeholder-blue-300  bg-white rounded text-sm shadow focus:ring w-full ease-linear transition-all duration-150"
    //                       />
    //                     </div>
    //                   </div>

    //                   <div className="w-full lg:w-6/12 px-4">
    //                     <div className="relative w-full mb-3">
    //                       <label
    //                         htmlFor=""
    //                         className="block uppercase text-blue-600 text-xs font-bold mb-2"
    //                       >
    //                         Last Name
    //                       </label>
    //                       <input
    //                         type="text"
    //                         className="border-0 px-3 py-3 placeholder-blue-300  bg-white rounded text-sm shadow focus:ring w-full ease-linear transition-all duration-150"
    //                       />
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>

    //               <hr className="mt-6 border-b-2 border-blue-300" />

    //               <h6 className="text-blue-400 text-sm mt-3 mb-6 font-bold uppercase">
    //                 Contact Information
    //               </h6>
    //               <div className="flex flex-wrap">
    //                 <div className="w-full lg:w-3/3 px-4">
    //                   <div className="relative w-full mb-3">
    //                     <label
    //                       htmlFor=""
    //                       className="block uppercase text-blue-600 text-xs font-bold mb-2"
    //                     >
    //                       Address
    //                     </label>
    //                     <input
    //                       type="text"
    //                       className="border-0 px-3 placeholder-gray-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 "
    //                     />
    //                   </div>
    //                 </div>
    //                 <div className="w-full lg:w-1/3 px-4">
    //                   <div className="relative w-full mb-3">
    //                     <label
    //                       htmlFor=""
    //                       className="block uppercase text-blue-600 text-xs font-bold mb-2"
    //                     >
    //                       City
    //                     </label>
    //                     <input
    //                       type="text"
    //                       className="border-0 px-3 placeholder-gray-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 "
    //                     />
    //                   </div>
    //                 </div>
    //                 <div className="w-full lg:w-1/3 px-4">
    //                   <div className="relative w-full mb-3">
    //                     <label
    //                       htmlFor=""
    //                       className="block uppercase text-blue-600 text-xs font-bold mb-2"
    //                     >
    //                       Country
    //                     </label>
    //                     <input
    //                       type="text"
    //                       className="border-0 px-3 placeholder-gray-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 "
    //                     />
    //                   </div>
    //                 </div>
    //                 <div className="w-full lg:w-1/3 px-4">
    //                   <div className="relative w-full mb-3">
    //                     <label
    //                       htmlFor=""
    //                       className="block uppercase text-blue-600 text-xs font-bold mb-2"
    //                     >
    //                       Postal Code
    //                     </label>
    //                     <input
    //                       type="text"
    //                       className="border-0 px-3 placeholder-gray-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 "
    //                     />
    //                   </div>
    //                 </div>
    //               </div>
    //               <hr className="mt-6 border-b-2 border-blue-300" />

    //               <h6 className="text-blue-400 text-sm mt-3 mb-6 font-bold uppercase">
    //                 About me
    //               </h6>
    //               <div className="flex flex-wrap">
    //                 <div className="w-full lg:w-full px-4">
    //                   <div className="relative w-full mb-3">
    //                     <label
    //                       htmlFor=""
    //                       className="block uppercase text-blue-600 text-xs font-bold mb-2"
    //                     >
    //                       About me
    //                     </label>
    //                     <textarea
    //                       className="border-0 px-3 py-3 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 "
    //                       rows="4"
    //                       placeholder="A beautiful UI Kit and Admin for Javascript &amp;
    //                       Tailwind CSS. It is Free and Open Source."
    //                     ></textarea>
    //                   </div>
    //                 </div>
    //               </div>
    //             </form>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>

    <>
      <div className="text-gray-600 body-font bg-gray-100">
        <div className="container mx-auto flex flex-wrap p-5 flex-col justify-between md:flex-row items-center bg-green-400">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl"> My account</span>
          </a>

          <button className="inline-flex items-center bg-red-300 border-0 py-1 px-3 focus:outline-none hover:bg-red-400 rounded text-base mt-4 md:mt-0">
            Print
          </button>
        </div>
        {/* <hr className="w-full mb-6 border-b-2 border-b-gray-800" /> */}

        <div className="container m-2 flex-auto px-4 lg:px-10 py-10 pt-0">
          <form action="">
            <h6 className="text-blue-400 text-sm mt-3 mb-6 font-bold uppercase">
              User information
            </h6>
            <div className="mt-6">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      htmlFor=""
                      className="inline uppercase text-blue-600 text-xs font-bold mb-2"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blue-300  bg-white rounded text-sm shadow focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      htmlFor=""
                      className="block uppercase text-blue-600 text-xs font-bold mb-2"
                    >
                      Email address
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blue-300  bg-white rounded text-sm shadow focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      htmlFor=""
                      className="block uppercase text-blue-600 text-xs font-bold mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blue-300  bg-white rounded text-sm shadow focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>

                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      htmlFor=""
                      className="block uppercase text-blue-600 text-xs font-bold mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blue-300  bg-white rounded text-sm shadow focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-2 border-blue-300" />

            <h6 className="text-blue-400 text-sm mt-3 mb-6 font-bold uppercase">
              Contact Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-3/3 px-4">
                <div className="relative w-full mb-3">
                  <label
                    htmlFor=""
                    className="block uppercase text-blue-600 text-xs font-bold mb-2"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 placeholder-gray-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 "
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/3 px-4">
                <div className="relative w-full mb-3">
                  <label
                    htmlFor=""
                    className="block uppercase text-blue-600 text-xs font-bold mb-2"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 placeholder-gray-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 "
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/3 px-4">
                <div className="relative w-full mb-3">
                  <label
                    htmlFor=""
                    className="block uppercase text-blue-600 text-xs font-bold mb-2"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 placeholder-gray-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 "
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/3 px-4">
                <div className="relative w-full mb-3">
                  <label
                    htmlFor=""
                    className="block uppercase text-blue-600 text-xs font-bold mb-2"
                  >
                    Postal Code
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 placeholder-gray-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 "
                  />
                </div>
              </div>
            </div>
            <hr className="mt-6 border-b-2 border-blue-300" />

            <h6 className="text-blue-400 text-sm mt-3 mb-6 font-bold uppercase">
              About me
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-full px-4">
                <div className="relative w-full mb-3">
                  <label
                    htmlFor=""
                    className="block uppercase text-blue-600 text-xs font-bold mb-2"
                  >
                    About me
                  </label>
                  <textarea
                    className="border-0 px-3 py-3 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 "
                    rows="4"
                    placeholder="A beautiful UI Kit and Admin for Javascript &amp;
                          Tailwind CSS. It is Free and Open Source."
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default InvoicePage;
