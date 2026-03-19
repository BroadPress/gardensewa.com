"use client";

import { useState } from "react";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  province: string;
  city: string;
  ward: string;
  detailedAddress: string;
  serviceType: string;
  notes: string;
  termsAccepted: boolean;
};

export default function HomePage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    province: "",
    city: "",
    ward: "",
    detailedAddress: "",
    serviceType: "",
    notes: "",
    termsAccepted: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  const validateForm = () => {
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.province ||
      !formData.city ||
      !formData.ward ||
      !formData.serviceType
    ) {
      alert("Please fill all required fields");
      return false;
    }

    if (!formData.termsAccepted) {
      alert("Please accept the terms");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Submitting form data:", formData);

    if (!validateForm()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Server response:", data);

      if (res.ok) {
        alert("Form submitted successfully");

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          province: "",
          city: "",
          ward: "",
          detailedAddress: "",
          serviceType: "",
          notes: "",
          termsAccepted: false,
        });
      } else {
        alert("Submission failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error submitting form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: "0 auto", padding: 20 }}>
      <h2>Booking Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
        />

        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />

        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
        />

        <input
          name="province"
          value={formData.province}
          onChange={handleChange}
          placeholder="Province"
        />

        <input
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City"
        />

        <input
          name="ward"
          value={formData.ward}
          onChange={handleChange}
          placeholder="Ward"
        />

        <input
          name="detailedAddress"
          value={formData.detailedAddress}
          onChange={handleChange}
          placeholder="Address"
        />

        <input
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          placeholder="Service Type"
        />

        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Notes"
        />

        <label>
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
          Accept Terms
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}