import React, { useState, useEffect } from "react";
// import toast, { Toaster } from "react-hot-toast";

function DisplayTravels() {
  const [showModal, setShowModal] = useState(false);
  const [tripsList, setTrips] = useState(null);
  useEffect(() => {
    getTrips();
  }, []);
  const getTrips = () => {
    fetch("http://localhost:8000/api/Trips")
      .then((res) => res.json())
      .then(
        (result) => {
          setTrips(result);
        },
        (error) => {
          setTrips(null);
        }
      );
  };
  if (!tripsList) return <div>No Trip found</div>;
  return (
    <>
      <div class="rounded-md w-full overflow-hidden">
        <div class="absolute top-1/3 left-1/4 shadow rounded-lg overflow-hidden">
          <table class="w-full">
            <thead>
              <tr>
                <th class="px-5 py-3 border-b-2 bg-blue-100 text-left text-xs font-semibold text-blue-600 uppercase tracking-wider">
                  Departing_time
                </th>
                <th class="px-5 py-3 border-b-2 bg-blue-100 text-left text-xs font-semibold text-blue-600 uppercase tracking-wider">
                  Arriving_time
                </th>
                <th class="px-5 py-3 border-b-2 bg-blue-100 text-left text-xs font-semibold text-blue-600 uppercase tracking-wider">
                  Departing_Point
                </th>
                <th class="px-5 py-3 border-b-2 bg-blue-100 text-left text-xs font-semibold text-blue-600 uppercase tracking-wider">
                  Arriving_Point
                </th>
                <th class="px-5 py-3 border-b-2 bg-blue-100 text-left text-xs font-semibold text-blue-600 uppercase tracking-wider">
                  Date
                </th>
                <th class="px-5 py-3 border-b-2 bg-blue-100 text-left text-xs font-semibold text-blue-600 uppercase tracking-wider">
                  Status
                </th>
                <th class="px-5 py-3 border-b-2 bg-blue-100 text-left text-xs font-semibold text-blue-600 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {tripsList.map((emp) => (
                <tr key={emp.Id}>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div class="flex items-center">
                      <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap">
                          {emp.Departing_time}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">
                      {emp.Arriving_time}
                    </p>
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">
                      {emp.Departing_Point}
                    </p>
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">
                      {emp.Arriving_Point}
                    </p>
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">{emp.Date}</p>
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">
                      {emp.Status.toString()}
                    </p>
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span
                      aria-hidden
                      class="absolute inset-0 opacity-50 rounded"
                    ></span>
                    <button
                      type="submit"
                      onClick={() => setShowModal(true)}
                      class="relative text-green-600 text-xl"
                    >
                      <ion-icon name="create-outline"></ion-icon>
                    </button>
                    {/* <button
                          type="submit"
                                                  class="relative text-red-600 text-xl"
                        >
                          <ion-icon name="close-outline"></ion-icon>
                        </button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-1/2 my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blue-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Update Trip</h3>
                  <button
                    className="bg-transparent border-0 text-blue-800 float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-red-600 font-bold opacity-7 h-6 w-6 text-2xl block">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-blue-50 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-blue-900 text-sm font-bold mb-1">
                      Departing time
                    </label>
                    <input
                      type="text"
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-blue-900"
                    />
                    <label className="block text-blue-900 text-sm font-bold mb-1">
                      Arriving time
                    </label>
                    <input
                      type="text"
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-blue-900"
                    />
                    <label className="block text-blue-900 text-sm font-bold mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-blue-900"
                    />
                    <label className="block text-blue-900 text-sm font-bold mb-1">
                      Seats
                    </label>
                    <input
                      type="number"
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-blue-900"
                    />
                    <label className="block text-blue-900 text-sm font-bold mb-1">
                      Status
                    </label>
                    <input
                      type="text"
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-blue-900"
                    />
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-blue-900 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default DisplayTravels;
