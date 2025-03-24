
import { UserFormData } from "./AddUserForm.types";
const API_URL = import.meta.env.VITE_API_URL;

export const AddUserService = async (
  userData: UserFormData,
): Promise<boolean> => {
  try {
    const response = await fetch(`${API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      console.error("Failed to add user");
      return false;
    }

  
    return true;
  } catch (error) {
    console.error("Error adding user:", error);
    return false;
  }
};

export default { AddUserService };