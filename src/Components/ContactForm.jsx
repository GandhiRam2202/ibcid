import React, { useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ContactForm = () => {
  const toastCooldown = useRef(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Toast handler
  const showMailToast = (type = "success", msg = "") => {
    if (toastCooldown.current) return;
    toastCooldown.current = true;

    type === "success"
      ? toast.success(msg || "Mail Sent Successfully", { autoClose: 1000 })
      : toast.error(msg || "Failed to send mail", { autoClose: 1000 });

    setTimeout(() => {
      toastCooldown.current = false;
    }, 1200);
  };

  // Validation
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Input handler
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const data = {
      ...formData,
      message: formData.message.replace(/\n/g, " "),
    };

    try {
      const res = await axios.post(
        "https://ibcidmail.onrender.com/api/send-mail",
        data,
      );

      if (res.data?.success) {
        showMailToast("success", "Mail Sent Successfully");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        showMailToast("error", "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      showMailToast("error", "Server Error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container p-0">
      <form className="border m-2 p-2 shadow" onSubmit={handleSubmit}>
        <h3 className="mb-3 fw-bold text-center">Send Us E-Mail</h3>

        {/* Name */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label fw-bold">
            Name <span className="text-danger">*</span>
          </label>
          <input
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            autoComplete="name"
          />
          {errors.name && <small className="text-danger">{errors.name}</small>}
        </div>

        {/* Phone */}
        <div className="mb-3">
          <label htmlFor="phone" className="form-label fw-bold">
            Phone Number <span className="text-danger">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            className="form-control"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter Your Phone Number"
            autoComplete="phone"
          />
          {errors.phone && <small className="text-danger">{errors.phone}</small>}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-bold">
            Email <span className="text-danger">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            autoComplete="email"
          />
          {errors.email && <small className="text-danger">{errors.email}</small>}
        </div>

        {/* Message */}
        <div className="mb-3">
          <label htmlFor="message" className="form-label fw-bold">Message</label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            rows="3"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="fw-bold fnt bg btn w-100"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
