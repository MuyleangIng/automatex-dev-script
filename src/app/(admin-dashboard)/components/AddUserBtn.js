"use client";
import { useState } from "react";
import { Button, Modal } from "flowbite-react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function AddUserBtn({ role }) {
  const [openModal, setOpenModal] = useState(false);

  const showToastWraingMessage = () => {
    setOpenModal(false);
    toast.warning("This feature is comming soon.", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <>
      <button
        type="button"
        className="px-5 py-2.5 text-sm font-medium text-white bg-[#ffa500] hover:bg-[#e69500] rounded-lg text-center"
        onClick={() => setOpenModal(true)}
      >
        Add {role === "ADMIN" ? "Admin" : "Developer"}
      </button>
      <Modal
        show={openModal}
        size="md"
        popup
        onClose={() => setOpenModal(false)}
        position="center"
        style={{ height: "auto" }}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-medium text-gray-500 dark:text-gray-400">
                Add {role === "ADMIN" ? "Admin" : "Developer"}
              </h3>
            </div>
            <div>
              <div className="mb-5">
                <label
                  for="username"
                  className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FFA500] focus:border-[#FFA500] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FFA500] dark:focus:border-[#FFA500]"
                  placeholder="username"
                  required
                />
              </div>
            </div>
            <div>
              <div className="mb-5">
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FFA500] focus:border-[#FFA500] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FFA500] dark:focus:border-[#FFA500]"
                  placeholder="name@company.com"
                  required
                />
              </div>
            </div>
            <div className="mb-5">
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FFA500] focus:border-[#FFA500] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FFA500] dark:focus:border-[#FFA500]"
                required
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="flex justify-end w-full">
            <Button onClick={showToastWraingMessage}>
              <span className="px-4">Add</span>
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  );
}
