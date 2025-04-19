import React, { useState, forwardRef, useEffect } from "react";
import "./styles.scss";

const Contact = forwardRef((props, ref) => {
  const [status, setStatus] = useState(null); // 'SUCCESS' | 'ERROR' | null
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  // 從 localStorage 加載保存的表單數據
  useEffect(() => {
    const savedFormData = localStorage.getItem("contactFormData");
    if (savedFormData) {
      try {
        setFormData(JSON.parse(savedFormData));
      } catch (e) {
        console.error("Error loading saved form data:", e);
      }
    }
  }, []);

  // 保存表單數據到 localStorage
  useEffect(() => {
    localStorage.setItem("contactFormData", JSON.stringify(formData));
  }, [formData]);

  const validateForm = () => {
    const newErrors = {};

    // 名稱驗證
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // 電子郵件驗證
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // 電話驗證
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9+\-\s()]{8,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // 主題驗證
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    // 消息驗證
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // 清除該字段的錯誤
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setErrors({});
    setStatus(null);
    localStorage.removeItem("contactFormData");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 驗證表單
    if (!validateForm()) {
      setStatus("ERROR");
      setErrorMessage("Please correct the errors in the form");
      return;
    }

    const form = e.target;
    const data = new FormData(form);

    setLoading(true);
    setStatus(null);
    setErrorMessage("");

    try {
      const response = await fetch("https://formspree.io/f/xvgkllol", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      setLoading(false);

      if (response.ok) {
        form.reset();
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        localStorage.removeItem("contactFormData");
        setStatus("SUCCESS");
      } else {
        const errorData = await response.json();
        setStatus("ERROR");
        setErrorMessage(
          errorData.error || "Failed to send message. Please try again later."
        );
      }
    } catch (error) {
      setLoading(false);
      setStatus("ERROR");
      setErrorMessage(
        "Network error. Please check your connection and try again."
      );
    }
  };

  return (
    <section ref={ref} id="contact" className="contact">
      <div className="contact_ctn">
        <div className="contact_ctn_title">
          <span>Get In Touch</span>
        </div>
        <form className="contact_ctn_form" onSubmit={handleSubmit}>
          <div className="contact_ctn_form_sender">
            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className={`${formData.name ? "has-content" : ""} ${
                  errors.name ? "error" : ""
                }`}
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "name-error" : ""}
              />
              {errors.name && (
                <span id="name-error" className="error-message">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className={`${formData.email ? "has-content" : ""} ${
                  errors.email ? "error" : ""
                }`}
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : ""}
              />
              {errors.email && (
                <span id="email-error" className="error-message">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="input-group">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className={`${formData.phone ? "has-content" : ""} ${
                  errors.phone ? "error" : ""
                }`}
                aria-invalid={errors.phone ? "true" : "false"}
                aria-describedby={errors.phone ? "phone-error" : ""}
              />
              {errors.phone && (
                <span id="phone-error" className="error-message">
                  {errors.phone}
                </span>
              )}
            </div>

            <div className="input-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                value={formData.subject}
                onChange={handleInputChange}
                className={`${formData.subject ? "has-content" : ""} ${
                  errors.subject ? "error" : ""
                }`}
                aria-invalid={errors.subject ? "true" : "false"}
                aria-describedby={errors.subject ? "subject-error" : ""}
              />
              {errors.subject && (
                <span id="subject-error" className="error-message">
                  {errors.subject}
                </span>
              )}
            </div>
          </div>

          <div className="contact_ctn_form_msg">
            <div className="input-group">
              <textarea
                className={`contact_ctn_form_msg_textarea ${
                  formData.message ? "has-content" : ""
                } ${errors.message ? "error" : ""}`}
                name="message"
                rows={5}
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={handleInputChange}
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={errors.message ? "message-error" : ""}
              ></textarea>
              {errors.message && (
                <span id="message-error" className="error-message">
                  {errors.message}
                </span>
              )}
            </div>

            <div className="button-group">
              <button
                className="contact_ctn_form_msg_btn reset-btn"
                type="button"
                onClick={handleReset}
                disabled={loading}
              >
                Reset
              </button>

              <button
                className="contact_ctn_form_msg_btn submit-btn"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <span className="spinner"></span>
                ) : (
                  <span>Send Message</span>
                )}
              </button>
            </div>
          </div>
        </form>

        {status === "SUCCESS" && (
          <div className="toast success">
            <div className="toast-content">
              <span className="toast-icon">✓</span>
              <span className="toast-message">Message sent successfully!</span>
            </div>
          </div>
        )}

        {status === "ERROR" && (
          <div className="toast error">
            <div className="toast-content">
              <span className="toast-icon">✕</span>
              <span className="toast-message">
                {errorMessage || "Oops! Something went wrong."}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
});

export default Contact;
