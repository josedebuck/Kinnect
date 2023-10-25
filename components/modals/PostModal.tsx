import React from "react";
import { AiOutlineClose } from "react-icons/ai";

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title: string;
  body: React.ReactElement;
}

const PostModal: React.FC<PostModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
}) => {
  return (
    <>
      {isOpen ? (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800 bg-opacity-70">
          <div className="relative w-full lg:w-3/6 my-6 mx-auto lg:max-w-3xl h-full lg:h-auto">
            {/* Content */}
            <div className="h-full lg:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
              {/* Header */}
              <div className="flex items-center justify-between p-10 rounded-t">
                <h3 className="text-3xl font-semibold text-white">{title}</h3>
                <button
                  className="p-1 ml-auto border-0 text-white hover:opacity-70 transition"
                  onClick={onClose}
                >
                  <AiOutlineClose size={20} />
                </button>
              </div>
              {/* Body */}
              <div className="relative p-10 flex-auto">{body}</div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PostModal;
