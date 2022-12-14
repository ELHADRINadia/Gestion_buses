import React, { useState } from "react";
import FormBus from "../../components/FormBus";
function AddBus() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="inline-block px-6 py-2.5 bg-[#31087B] text-[#100720] font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#31087B] hover:shadow-lg focus:bg-[#31087B]  active:bg-[#31087B]  w-15 h-10 absolute  right-5 "
        >
         New Bus 
        </button>
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
                    <span className="text-[#31087B]  font-bold opacity-7 h-6 w-6 text-2xl block">
                      x
                    </span>
                  </button>
                </div>
                <div >
                <FormBus setShowModal={setShowModal} />
                </div>
	{/* <form 
   onSubmit={(e) => {AddBus(e)}}
  novalidate="" class="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-900 ng-untouched ng-pristine ng-valid">
		<div>
			<label for="date_depart" class="block mb-1 ml-1">date depart</label>
			<input id="date_depart" type="date" placeholder="Your date_depart" required="" class="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-900 dark:bg-gray-800" value={date_depart}/>
		</div>
		<div>
			<label for="date_arriver" class="block mb-1 ml-1">date arriver</label>
			<input id="date_arriver" type="date" placeholder="Your date_arriver" required="" class="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-900 dark:bg-gray-800" value={date_arriver}/>
		</div>
    <div>
			<label for="ville_depart" class="block mb-1 ml-1">ville depart</label>
			<input id="ville_depart" type="text" placeholder="Your ville_depart" required="" class="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-900 dark:bg-gray-800" value={ville_depart}/>
		</div>
		<div>
			<label for="ville_arriver" class="block mb-1 ml-1">ville arriver</label>
			<input id="ville_arriver" type="text" placeholder="Your ville_arriver" required="" class="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-900 dark:bg-gray-800" value={ville_arriver}/>
		</div>
    <div>
			<label for="places" class="block mb-1 ml-1">Places </label>
			<input 
      value={place}
      id="places" type="nomber" placeholder="Your places" required="" class="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-900 dark:bg-gray-800" />
		</div>
    <div>
			<label for="status" class="block mb-1 ml-1">Status</label>
			<input id="status" type="text" placeholder="Your status" required="" class="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-900 dark:bg-gray-800"/>
		</div>
		<div>
			<button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-900 focus:ring-violet-900 hover:ring-violet-900 dark:text-gray-100"
     
      >Send</button>
		</div>
	</form> */}
              </div>
            </div>
          </div>
        </>
      ) : null
      }
    </>
  );
}

export default AddBus;
