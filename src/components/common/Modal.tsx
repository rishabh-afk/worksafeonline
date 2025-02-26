import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";

interface ModalProps {
  width?: string;
  isVisible: boolean;
  minHeight?: string;
  onClose: () => void;
  showCloseButton?: boolean;
  children: React.ReactNode;
  removePadding?: boolean | string;
}

const Modal: React.FC<ModalProps> = ({
  onClose,
  children,
  isVisible,
  minHeight,
  removePadding,
  width = "w-[95vw] md:w-4/5",
  showCloseButton = true,
}) => {
  if (!isVisible) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center overflow-hidden justify-center z-[100]">
      <motion.div
        className="fixed inset-0 bg-white backdrop-blur-lg bg-opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      ></motion.div>
      <motion.div
        className={`bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg z-10 rounded-xl relative ${width}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className={`bg-white overflow-scroll no-scrollbar max-h-[95vh] rounded-xl ${
            minHeight && minHeight
          }`}
        >
          {showCloseButton && (
            <p className="w-full flex justify-end items-center p-4 pb-0">
              <RxCross1
                size={24}
                className="cursor-pointer text-black"
                onClick={onClose}
              />
            </p>
          )}
          <div className={`${removePadding ? removePadding : "p-4"}`}>
            {children}
          </div>
        </div>
      </motion.div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;
