import { useCallback, useState } from "react";
import { GrConnectivity } from "react-icons/gr";
import { useRouter } from "next/router";
import Modal from "../Modal";

import useLoginModal from "@/hooks/useLoginModal";
import useCurrentUser from "@/hooks/useCurrentUser";
import Form from "../Form";

const SidebarTweetButton = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const { data: currentUser } = useCurrentUser();
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar la apertura del modal

  const openModal = useCallback(() => {
    if (!currentUser) {
      // Muestra el modal de inicio de sesión si el usuario no está autenticado
      // Reemplaza esto con tu lógica de inicio de sesión
      console.log("Show login modal");
    } else {
      setIsModalOpen(true); // Abre el modal de posteo
    }
  }, [currentUser]);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handlePostSubmit = useCallback(() => {
    // Realiza la acción de enviar el post
    console.log("Posting...");
    setIsModalOpen(false); // Cierra el modal después de enviar el post
  }, []);


  return (
    <div className="flex flex-row items-center">
      <div
        className="
          relative
          rounded-full
          h-14
          w-14
          flex
          items-center
          justify-center
          p-4
          bg-orange-500
          hover:bg-opacity-80
          transition
          cursor-pointer
        "
        onClick={openModal}
      >
        <GrConnectivity size={24} color="white" />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handlePostSubmit}
        title="Create a Post"
        body={<Form placeholder="What are you Kinnecting?" />}
        actionLabel="Post"
      />
    </div>
  );
};

export default SidebarTweetButton;
