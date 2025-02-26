import Modal from "../common/Modal";

const DeleteProductModal = ({
  onClose,
  onDelete,
  isVisible,
  deleteModalID,
}: {
  onClose: any;
  onDelete: any;
  isVisible: boolean;
  deleteModalID: any;
}) => {
  return (
    <Modal
      onClose={onClose}
      removePadding={true}
      isVisible={isVisible}
      width="w-[90%] lg:w-[464px]"
      showCloseButton={false}
    >
      <div className="relative flex flex-col justify-center items-center p-6 min-h-40">
        {/* Modal Content */}
        <h2 className="text-2xl mt-2 font-semibold text-center">
          Are you sure you want to delete this product?
          <br />
          <span className="text-lg font-light text-gray-500">
            Disclaimer: This action cannot be undone.
          </span>
        </h2>

        {/* Buttons */}
        <div className="flex gap-4 mt-2">
          <button
            onClick={() => onDelete(deleteModalID)}
            className="px-4 py-1 bg-primary/80 text-white font-semibold hover:bg-primary transition"
          >
            Delete
          </button>
          <button
            onClick={onClose}
            className="px-4 py-1 bg-red-500 text-white font-semibold hover:bg-red-600 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteProductModal;
