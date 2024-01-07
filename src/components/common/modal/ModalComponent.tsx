import { type ReactNode } from "react";
import { IconClose } from "../Icons";

const ModalComponent = ({
  closeModal,
  children,
}: {
  closeModal: () => void;
  children: ReactNode;
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900/80">
      <div className="aspect-video w-11/12 sm:w-7/12 rounded-2xl bg-zinc-100 p-6 shadow-2xl">
        <button
          onClick={closeModal}
          className="flex w-full justify-end text-accent-500"
        >
          <i>
            <IconClose size={40} />
          </i>
        </button>

        {children}
      </div>
    </div>
  );
};

export default ModalComponent;
