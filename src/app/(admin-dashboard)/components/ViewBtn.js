"use client";
import React, { useState } from "react";
import { Modal } from "flowbite-react";
import { SlEye } from "react-icons/sl";
import styles from "./../css/styles.module.css";

export default function ViewBtn({ data }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button onClick={() => setOpenModal(true)}>
        <SlEye className="hover:text-gray-900 dark:hover:text-gray-50" />
      </button>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
        position="center"
        style={{height: "auto"}}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <div
              className={
                "bg-gray-100 dark:bg-gray-900 overflow-x-auto p-4 h-full max-h-[calc(100vh-136px)] " +
                styles.customScrollbar
              }
            >
              <SyntaxHighlighter data={data} />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

const SyntaxHighlighter = ({ data }) => {
  const jsonString = JSON.stringify(data, null, 2);

  const syntaxHighlight = (json) => {
    json = json
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    return json.replace(
      /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
      function (match) {
        var cls = "";
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = "text-blue-500";
          } else {
            cls = "text-green-500";
          }
        } else if (/true|false/.test(match)) {
          cls = "text-yellow-500";
        } else if (/null/.test(match)) {
          cls = "text-purple-500";
        } else if (!isNaN(match)) {
          cls = "text-red-500";
        }
        return '<span class="' + cls + '">' + match + "</span>";
      }
    );
  };

  return (
    <pre dangerouslySetInnerHTML={{ __html: syntaxHighlight(jsonString) }} />
  );
};
