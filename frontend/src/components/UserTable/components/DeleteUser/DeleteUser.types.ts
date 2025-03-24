import { User } from '../../UserTable.types';

export interface DeleteUserProps {
  isOpen: boolean;
  onClose: () => void;
  user: User;
  onSuccess?: () => void;
}