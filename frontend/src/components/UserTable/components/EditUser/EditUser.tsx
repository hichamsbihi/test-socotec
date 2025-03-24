import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { EditUserProps, EditUserFormData } from "./EditUser.types";
import { Modal, FormContainer, ErrorMessage } from "./EditUser.styles";
import { EditeUserService } from "./EditUser.service"; // Import du service

const EditUser: React.FC<EditUserProps> = ({
  isOpen,
  onClose,
  user,
  onSuccess,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<EditUserFormData>({
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      country: user.country,
      city: user.city,
      email: user.email,
      phoneNumber: user.phoneNumber,
    },
  });

  // Reset form when user changes
  React.useEffect(() => {
    reset({
      firstName: user.firstName,
      lastName: user.lastName,
      country: user.country,
      city: user.city,
      email: user.email,
      phoneNumber: user.phoneNumber,
    });
  }, [user, reset]);

  const onSubmit: SubmitHandler<EditUserFormData> = async (data) => {
    console.log(data);
    console.log(user);

    // Utilisation du service pour mettre à jour l'utilisateur
    const success = await EditeUserService(user._id, data);

    if (success) {
      if (onSuccess) onSuccess();
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <Modal>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            {...register("firstName", { required: "First name is required" })}
          />
          {errors.firstName && (
            <ErrorMessage>{errors.firstName.message}</ErrorMessage>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            {...register("lastName", { required: "Last name is required" })}
          />
          {errors.lastName && (
            <ErrorMessage>{errors.lastName.message}</ErrorMessage>
          )}
        </div>

        <div>
          <label htmlFor="country">Country</label>
          <input
            id="country"
            {...register("country", { required: "Country is required" })}
          />
          {errors.country && (
            <ErrorMessage>{errors.country.message}</ErrorMessage>
          )}
        </div>

        <div>
          <label htmlFor="city">City</label>
          <input
            id="city"
            {...register("city", { required: "City is required" })}
          />
          {errors.city && <ErrorMessage>{errors.city.message}</ErrorMessage>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </div>

        <div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            id="phoneNumber"
            {...register("phoneNumber", {
              required: "Phone number is required",
            })}
          />
          {errors.phoneNumber && (
            <ErrorMessage>{errors.phoneNumber.message}</ErrorMessage>
          )}
        </div>

        <div className="button-group">
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Saving..." : "Save Changes"}
          </button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </FormContainer>
    </Modal>
  );
};

export default EditUser;
