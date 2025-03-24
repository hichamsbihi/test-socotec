import { EditUserFormData } from "./EditUser.types";

export const EditeUserService= async (
  userId: string,
  userData: EditUserFormData
): Promise<boolean> => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/users/${userId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );

    if (response.ok) {
      return true;
    } else {
      console.error("Failed to update user");
      return false;
    }
  } catch (error) {
    console.error("Error updating user:", error);
    return false;
  }
};

export default { EditeUserService };