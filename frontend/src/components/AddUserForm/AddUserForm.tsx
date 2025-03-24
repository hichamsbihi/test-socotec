import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AddUserFormProps, UserFormData } from "./AddUserForm.types";
import { FormContainer, FormGroup, ErrorMessage } from "./AddUserForm.styles";
import { AddUserService } from "./AddUserForm.service";

const AddUserForm: React.FC<AddUserFormProps> = ({ onSuccess }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<UserFormData>();

  // Reset form after successful submission
  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit: SubmitHandler<UserFormData> = async (data) => {
    const success = await AddUserService(data);

    if (success && onSuccess) {
      onSuccess();
    }
  };

  return (
    <FormContainer>
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            {...register("firstName", {
              required: "First name is required",
            })}
          />
          {errors.firstName && (
            <ErrorMessage>{errors.firstName.message}</ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            {...register("lastName", {
              required: "Last name is required",
            })}
          />
          {errors.lastName && (
            <ErrorMessage>{errors.lastName.message}</ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <label htmlFor="country">Country</label>
          <input
            id="country"
            {...register("country", { required: "Country is required" })}
          />
          {errors.country && (
            <ErrorMessage>{errors.country.message}</ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <label htmlFor="city">City</label>
          <input
            id="city"
            {...register("city", { required: "City is required" })}
          />
          {errors.city && <ErrorMessage>{errors.city.message}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
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
        </FormGroup>

        <FormGroup>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            id="phoneNumber"
            {...register("phoneNumber", {
              required: "Phone number is required",
              pattern: {
                value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                message: "Invalid phone number format",
              },
            })}
          />
          {errors.phoneNumber && (
            <ErrorMessage>{errors.phoneNumber.message}</ErrorMessage>
          )}
        </FormGroup>

        <button type="submit" disabled={isSubmitting}></button>
      </form>
    </FormContainer>
  );
};

export default AddUserForm;
