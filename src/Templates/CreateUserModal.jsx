import React, { useState, useRef, useEffect } from "react";
import { X, Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import "../Templates/CreateUserModal.css";

const CreateUserModal = ({ isOpen, onClose, onSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const modalRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const password = watch("password");

  const handleFormSubmit = (data) => {
    onSubmit(data);
    reset();
  };

  const handleCancel = () => {
    onClose();
    reset();
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Just render the modal container (no overlay div wrapping it)
  return (
    <div ref={modalRef} className="create-user-modal">
     
      <form onSubmit={handleSubmit(handleFormSubmit)} className="create-user-form-container">
         <div className="modal-header">
        <h2 className="modal-title">Create New User Login</h2>
        <button onClick={handleCancel} className="create-user-close-button">
          <X />
        </button>
      </div>
        <div className="input-group">
          <input
            type="text"
            {...register("name", {
              required: "Name is required",
              minLength: { value: 2, message: "Name must be at least 2 characters" },
            })}
            className={`create-user-form-input ${errors.name ? "error" : ""}`}
            autoComplete="off"
          />
          <label className={`input-label ${watch("name") && watch("name").length > 0 ? "hidden" : ""}`}>
            Name
          </label>
          {errors.name && <p className="error-message">{errors.name.message}</p>}
        </div>

        <div className="input-group">
          <input
            type="text"
            {...register("userId", {
              required: "User Id is required",
              minLength: { value: 2, message: "User ID must be at least 2 characters" },
            })}
            className={`create-user-form-input ${errors.userId ? "error" : ""}`}
            autoComplete="off"
          />
          <label className={`input-label ${watch("userId") && watch("userId").length > 0 ? "hidden" : ""}`}>
            User ID
          </label>
          {errors.userId && <p className="error-message">{errors.userId.message}</p>}
        </div>

        <div className="input-group">
          <input
            type="tel"
            {...register("phoneNumber", {
              required: "Phone number is required",
              pattern: {
                value: /^\+?[\d\s-()]+$/,
                message: "Please enter a valid phone number",
              },
            })}
            className={`create-user-form-input ${errors.phoneNumber ? "error" : ""}`}
            autoComplete="off"
          />
          <label className={`input-label ${watch("phoneNumber") && watch("phoneNumber").length > 0 ? "hidden" : ""}`}>
            Phone Number
          </label>
          {errors.phoneNumber && <p className="error-message">{errors.phoneNumber.message}</p>}
        </div>

        <div className="input-group">
          <input
            type={showPassword ? "text" : "password"}
            {...register("password", {
              required: "Password is required",
              minLength: { value: 8, message: "Password must be at least 8 characters" },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                message: "Must contain uppercase, lowercase and a number",
              },
            })}
            className={`create-user-form-input ${errors.password ? "error" : ""}`}
            autoComplete="off"
          />
          <label className={`input-label ${watch("password") && watch("password").length > 0 ? "hidden" : ""}`}>
            Password
          </label>
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="password-toggle"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
          {errors.password && <p className="error-message">{errors.password.message}</p>}
        </div>

        <div className="input-group">
          <input
            type={showConfirmPassword ? "text" : "password"}
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) => value === password || "Passwords do not match",
            })}
            className={`create-user-form-input ${errors.confirmPassword ? "error" : ""}`}
            autoComplete="off"
          />
          <label className={`input-label ${watch("confirmPassword") && watch("confirmPassword").length > 0 ? "hidden" : ""}`}>
            Confirm Password
          </label>
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="password-toggle"
            tabIndex={-1}
          >
            {showConfirmPassword ? <EyeOff /> : <Eye />}
          </button>
          {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}
        </div>

        <div className="form-buttons">
          <button type="button" onClick={handleCancel} className="create-user-cancel-button">
            Cancel
          </button>
          <button type="submit" className="create-user-submit-button">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUserModal;
