import { EditUserFormData } from "./EditUser.types";
const API_URL = import.meta.env.VITE_API_URL;

export const EditeUserService= async (
  userId: string,
  userData: EditUserFormData
): Promise<boolean> => {
  try {
    // edit service call
    const response = await fetch(
      `${API_URL}/${userId}`,
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