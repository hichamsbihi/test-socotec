export interface AddUserFormProps {
  onSuccess?: () => void;
}

export interface UserFormData {
  firstName: string;
  lastName: string;
  country: string;
  city: string;
  email: string;
  phoneNumber: string;
}