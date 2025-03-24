export interface User {
    _id: string;
    firstName: string;
    lastName: string;
    country: string;
    city: string;
    email: string;
    phoneNumber: string;
}


export interface UserTableProps {
  onEditSuccess?: () => void;
}
