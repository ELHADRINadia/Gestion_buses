import React, { useState } from "react";

function AddTravel() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
        <button
          type="button"
          onClick={() => setShowModal(true)}
          // className="inline-block px-6 py-2.5 bg-gray-200 text-gray-700 rounded  p-2 relative top-20 left-80 "
          className="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out w-1 h-10"
        >
         New Trip
        </button>
  {/* <div>
    <button type="button"
     onClick={() => setShowModal(true)}
     className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
     >
      New Trip
      </button>
    
</div> */}
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-1/2 my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gris outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t ">
                  <button
                    className="bg-transparent border-0 text-blue-800 float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-blue-600 font-bold opacity-7 h-6 w-6 text-2xl block">
                      x
                    </span>
                  </button>
                </div>
	<form novalidate="" class="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-900 ng-untouched ng-pristine ng-valid">
		<div>
			<label for="date_depart" class="block mb-1 ml-1">date depart</label>
			<input id="date_depart" type="text" placeholder="Your date_depart" required="" class="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-900 dark:bg-gray-800"/>
		</div>
		<div>
			<label for="date_arriver" class="block mb-1 ml-1">date arriver</label>
			<input id="date_arriver" type="date_arriver" placeholder="Your date_arriver" required="" class="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-900 dark:bg-gray-800"/>
		</div>
    <div>
			<label for="places" class="block mb-1 ml-1">Places </label>
			<input id="places" type="nomber" placeholder="Your places" required="" class="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-900 dark:bg-gray-800"/>
		</div>
    <div>
			<label for="date" class="block mb-1 ml-1">Date</label>
			<input id="date" type="date" placeholder="Your date" required="" class="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-900 dark:bg-gray-800"/>
		</div>
    <div>
			<label for="status" class="block mb-1 ml-1">Status</label>
			<input id="status" type="text" placeholder="Your status" required="" class="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-900 dark:bg-gray-800"/>
		</div>
		<div>
			<button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-900 focus:ring-violet-900 hover:ring-violet-900 dark:text-gray-100"
      onClick={() => setShowModal(false)}
      >Send</button>
		</div>
	</form>
              </div>
            </div>
          </div>
        </>
      ) : null
      }
    </>
  );
}

export default AddTravel;
