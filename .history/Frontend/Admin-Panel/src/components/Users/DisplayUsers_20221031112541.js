import React, { useState, useEffect } from "react";
import SideBar from "../SideBar";
import toast, { Toaster } from 'react-hot-toast';

function DisplayUsers() {
  const [usersList, setUsers] = useState(null);
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = () => {
    fetch("http://localhost:8000/api/users/getUsers")
      .then((res) => res.json())
      .then(
        (result) => {
          setUsers(result);
          toast.success('Users List!')
        },
        (error) => {
          setUsers(null);
        }
      );
  };
  if (!usersList) return <div>No record found</div>;
  return (
    <div>
          <div><Toaster/></div>
      <SideBar />
      <div className="p-8 rounded-md w-1/2 absolute left-96 top-32">
        <div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 bg-blue-100 text-left text-xs font-semibold text-blue-600 uppercase tracking-wider">
                      FirstName
                    </th>
                    <th className="px-5 py-3 border-b-2 bg-blue-100 text-left text-xs font-semibold text-blue-600 uppercase tracking-wider">
                      LastName
                    </th>
                    <th className="px-5 py-3 border-b-2 bg-blue-100 text-left text-xs font-semibold text-blue-600 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-5 py-3 border-b-2 bg-blue-100 text-left text-xs font-semibold text-blue-600 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {usersList.map((emp) => (
                    <tr key={emp.Id}>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex items-center">
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {emp.FirstName}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {emp.LastName}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {emp.email}
                        </p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span
                          aria-hidden
                          class="absolute inset-0 opacity-50 rounded"
                        ></span>
                        <button
                          type="submit"
                          class="relative text-red-600 text-xl"
                        >
                          <ion-icon name="close-outline"></ion-icon>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayUsers;
