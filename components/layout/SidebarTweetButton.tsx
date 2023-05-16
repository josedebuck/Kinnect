import { useCallback } from "react";
import { GrConnectivity } from "react-icons/gr";
import { useRouter } from "next/router";

import useLoginModal from "@/hooks/useLoginModal";
import useCurrentUser from "@/hooks/useCurrentUser";

const SidebarTweetButton = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const { data: currentUser } = useCurrentUser();

  const onClick = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    router.push('/');
  }, [loginModal, router, currentUser]);

  return (
    <div className="flex flex-row items-center">
      <div className="
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
      ">
        <GrConnectivity size={24} color="white"/>
      </div>

    </div>
  );
};

export default SidebarTweetButton;
