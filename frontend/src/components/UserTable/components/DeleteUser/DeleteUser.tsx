import React from "react";
import { DeleteUserProps } from "./DeleteUser.types";
import { Modal, ConfirmationContainer, ButtonGroup } from "./DeleteUser.styles";
import { deleteUserService } from "./DeleteUser.service"; // Import du service

const DeleteUser: React.FC<DeleteUserProps> = ({
  isOpen,
  onClose,
  user,
  onSuccess,
}) => {
  const handleDeleteClick = async () => {
    const success = await deleteUserService(user._id);

    if (success) {
      if (onSuccess) onSuccess();
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <Modal>
      <ConfirmationContainer>
        <h2>Confirm Deletion</h2>
        <p>
          Are you sure you want to delete the user{" "}
          <strong>
            {user.firstName} {user.lastName}
          </strong>
        </p>

        <ButtonGroup>
          <button onClick={handleDeleteClick}>Delete</button>
          <button onClick={onClose}>Cancel</button>
        </ButtonGroup>
      </ConfirmationContainer>
    </Modal>
  );
};

export default DeleteUser;
