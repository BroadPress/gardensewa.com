"use client";
import Head from "next/head";
import { useState } from "react";

const HomePage = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    emailAddress: "",
    phoneNumber: "",
    province: "",
    city: "",
    wardNo: "",
    detailedAddress: "",
    businessType: "",
    projectDetails: "",
    confidentiality: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <>
     <Head>
      <meta name="keywords" content="gardening services Nepal, garden maintenance, landscaping Nepal, plant care, hotel landscaping, resort garden services, indoor plants Nepal, outdoor plants Nepal, garden cleanup, regular garden maintenance, Nepal gardeners, GardenSewa"/>
      <meta property="og:url" content="https://www.gardensewa.com/" />
      <meta property="og:title" content="Gardening Services in Nepal" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Gardensewa.com offers expert gardening services, plant care, landscaping, and garden maintenance to help transform your outdoor spaces into beautiful, vibrant gardens. Get professional assistance with lawn care, tree trimming, and more!" />
      <meta property="og:image" content="https://www.gardensewa.com/og/default.jpg" />
      <meta property="og:image:alt" content="Gardening Services in Nepal" />
    </Head>
      {" "}
      <div className="flex flex-col items-center justify-center h-full px-4 py-12 text-center bg-card-stroke-light ">
        {/* Breadcrumb navigation */}
        <div className="mb-4 text-sm w-full">
          <span className="text-light">
            Home &gt;
            <span className="text-primary">Become a Partner</span>
          </span>
        </div>

        {/* Section title */}
        <h1 className="mb-4 text-5xl font-bold text-primary md:text-5xl">
          Become a Partner
        </h1>
      </div>
      <Head>
        <title>Tell us about your business</title>
      </Head>
      <div className="min-h-screen bg-white font-sans p-8 my-30 flex flex-col gap-30">
        <section className="w-full flex items-center justify-center flex-col gap-14">
          <h1 className="text-5xl text-secondary font-semibold">
            We are looking for competent partners
          </h1>
          <div className="flex flex-wrap gap-6 items-center justify-center">
            <div className="h-[293px] w-[417px] bg-card rounded-4xl flex flex-col items-center justify-center gap-4 px-4 py-8">
              <div className="h-[76px] w-[76px] bg-white flex items-center justify-center rounded-full shadow-2xl">
                <img
                  src={"/partnership/gardener.png"}
                  className="w-[80px] h-[80px]"
                />
              </div>
              <h1 className="font-semibold text-title text-2xl">Gardeners</h1>
              <p className="text-center">
                Bring your skills in plant care, landscaping, and garden
                planning to help clients create thriving green environments.
              </p>
            </div>
            <div className="h-[293px] w-[417px] bg-card rounded-4xl flex flex-col items-center justify-center gap-4 px-4 py-8">
              <div className="h-[76px] w-[76px] bg-white flex items-center justify-center rounded-full shadow-2xl">
                <img
                  src={"/partnership/interior.png"}
                  className="w-[80px] h-[80px]"
                />
              </div>
              <h1 className="font-semibold text-title text-2xl">
                Interior Designers
              </h1>
              <p className="text-center">
                Collaborate with us to integrate stylish indoor plants, vertical
                gardens, and greenery into modern living and working spaces.
              </p>
            </div>
            <div className="h-[293px] w-[417px] bg-card rounded-4xl flex flex-col items-center justify-center gap-4 px-4 py-8">
              <div className="h-[76px] w-[76px] bg-white flex items-center justify-center rounded-full shadow-2xl">
                <img
                  src={"/partnership/nursery.png"}
                  className="w-[80px] h-[80px]"
                />
              </div>
              <h1 className="font-semibold text-title text-2xl">
                Nursery Owners
              </h1>
              <p className="text-center">
                Partner with us to provide diverse, healthy plants and unique
                arrangements tailored to customer needs.
              </p>
            </div>
          </div>
        </section>
        <div className="max-w-4xl mx-auto bg-[#F6F9F6] p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-700 text-center mb-10">
            Tell us about your business
          </h2>

          <form onSubmit={handleSubmit}>
            <FormSectionTitle title="Company Information" />
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-1 mb-6">
              <FormInput
                label="Company Name"
                name="companyName"
                type="text"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
              <FormInput
                label="Contact Person"
                name="contactPerson"
                type="text"
                value={formData.contactPerson}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-1 mb-6">
              <FormInput
                label="Email Address"
                name="emailAddress"
                type="email"
                value={formData.emailAddress}
                onChange={handleChange}
                required
              />
              <FormInput
                label="Phone Number"
                name="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>

            <FormSectionTitle title="Company Address" />
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 mb-6">
              <FormSelect
                label="Province"
                name="province"
                value={formData.province}
                onChange={handleChange}
                required
              >
                <option value="koshi">Koshi</option>
                <option value="madhesh">Madhesh</option>
                <option value="bagmati">Bagmati</option>
                <option value="gandaki">Gandaki</option>
                <option value="lumbini">Lumbini</option>
                <option value="karnali">Karnali</option>
                <option value="sudurpashchim">Sudurpashchim</option>
              </FormSelect>
              <FormSelect
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              >
                <option value="">Select City</option>
                <option value="kathmandu">Kathmandu</option>
                <option value="pokhara">Pokhara</option>
                <option value="lalitpur">Lalitpur</option>
                <option value="bharatpur">Bharatpur</option>
                <option value="biratnagar">Biratnagar</option>
                <option value="birgunj">Birgunj</option>
                <option value="dharan">Dharan</option>
                <option value="butwal">Butwal</option>
                <option value="hetauda">Hetauda</option>
                <option value="janakpur">Janakpur</option>
                <option value="nepalgunj">Nepalgunj</option>
                <option value="dhangadhi">Dhangadhi</option>
                <option value="other">Other</option>
              </FormSelect>
              <FormInput
                label="Ward No"
                name="wardNo"
                type="text"
                value={formData.wardNo}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <FormInput
                label="Nearest landmark"
                name="detailedAddress"
                type="text"
                value={formData.detailedAddress}
                onChange={handleChange}
              />
            </div>

            <FormSectionTitle title="Business Details" />
            <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">
              Business Type <span className="text-red-500">*</span>
            </label>
            <select
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select Business Type</option>
              <option value="gardening">Gardening</option>
              <option value="landscaping">Landscaping</option>
              <option value="nursery">Plant Nursery</option>
              <option value="gardenmaintenance">Garden Maintenance</option>
              <option value="civilengineering">Civil Engineering</option>
              <option value="gardeningtools">Gardening Tools</option>
              <option value="other">Other</option>
            </select>
          </div>
            <div className="mb-6">
              <FormTextarea
                label="Project Details"
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex items-start mb-6">
              <input
                type="checkbox"
                id="confidentiality"
                name="confidentiality"
                checked={formData.confidentiality}
                onChange={handleChange}
                className="mt-1 h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <label
                htmlFor="confidentiality"
                className="ml-2 text-sm text-gray-900"
              >
                I hereby declare that my information is <strong>fact</strong> and I want to have a partnership opportunity with GardenSewa.
              </label>
            </div>

            <div className="flex justify-center sm:justify-end">
              <button
                type="submit"
                className="flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-4xl shadow-sm text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default HomePage;

// Reusable Components
const FormSectionTitle = ({ title }: { title: string }) => (
  <div className="text-center justify-center px-60 mx-20">
    <h3 className="text-lg font-medium text-secondary border-b-2 border-border pb-2 mb-6">
      {title}
    </h3>
  </div>
);

interface FormInputProps {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const FormInput = ({
  label,
  name,
  type,
  value,
  onChange,
  required = false,
}: FormInputProps) => (
  <div>
    <label
      htmlFor={name}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      required={required}
      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
    />
  </div>
);

interface FormSelectProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
  required?: boolean;
}

const FormSelect = ({
  label,
  name,
  value,
  onChange,
  children,
  required = false,
}: FormSelectProps) => (
  <div>
    <label
      htmlFor={name}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
    >
      {children}
    </select>
  </div>
);

interface FormTextareaProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}

const FormTextarea = ({
  label,
  name,
  value,
  onChange,
  required = false,
}: FormTextareaProps) => (
  <div>
    <label
      htmlFor={name}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    <textarea
      id={name}
      name={name}
      rows={3}
      value={value}
      onChange={onChange}
      placeholder="Describe why you want to be our client."
      required={required}
      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
    />
  </div>
);
