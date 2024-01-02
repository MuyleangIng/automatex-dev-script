"use client";
import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";
import { CiTrash } from "react-icons/ci";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useRemoveAppMutation } from "@/store/features/admin/app/appApiSlice";
import { useRemoveUserMutation } from "@/store/features/admin/user/userApiSlice";
import { useRemoveDatabaseMutation } from "@/store/features/admin/database/databaseApiSlice";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function DeleteBtn({name, uuid, removeType, data, setData}) {
  const [openModal, setOpenModal] = useState(false);
  const [removeApp, { isLoading: isRemovingApp }] = useRemoveAppMutation();
  const [removeUser, { isLoading: isRemovingUser }] = useRemoveUserMutation();
  const [removeDatabase, { isLoading: isRemovingDatabase }] = useRemoveDatabaseMutation();
  
  const showToastErrorMessage = (message) => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const showToastSuccessMessage = (message) => {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleRemoveAppClick = async () => {
    setOpenModal(false);
    try {
      let response;
      if(removeType === "user") {
        response = await removeUser(uuid);
      } else if (removeType === "database") {
        response = await removeDatabase(uuid);
      }
      else {
        response = await removeApp(uuid);
      }
      if(response.error) {
        showToastErrorMessage("Server Error!");
      } else {
        setData(data.filter(item => item.uuid !== uuid));
        showToastSuccessMessage(name + " has been removed.");
      }
    } catch (error) {
      showToastErrorMessage("Unexpected Error!");
    }
  };

  if (isRemovingApp || isRemovingUser || isRemovingDatabase) {
    return (
      <div role="status" className="flex items-center">
        <svg
          aria-hidden="true"
          className="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-[#FFA500]"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <>
      <button onClick={() => setOpenModal(true)}>
        <CiTrash size={18} className="hover:text-gray-900 dark:hover:text-gray-50" />
      </button>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
        position="center"
        style={{ height: "auto" }}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete <b>{name}</b>?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="warning" onClick={() => handleRemoveAppClick(uuid)}>
                Yes, I&apos;m sure
              </Button>
              <Button color="gray" className="focus:outline-none focus:ring-0" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <ToastContainer />
    </>
  );
}
