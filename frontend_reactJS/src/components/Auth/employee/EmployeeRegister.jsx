/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { registerEmployee } from '../../redux/actions/employeeAction';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  getAllRegions,
  getAllProvinces,
  getMunicipalitiesByProvince,
  getBarangaysByMunicipality,
} from "@aivangogh/ph-address";

const EmployeeRegister = ({ registerEmployee }) => {
  const [employee, setEmployee] = useState({
    employee_firstname: '',
    employee_lastname: '',
    employee_email: '',
    employee_contact_no: '',
    employee_password: '',
    employee_confirm_password: '',
    employee_barangay: '',
    employee_municipality: '',
    employee_province: '',
    employee_region: '',
    employee_civil_status_id: '',
    employee_position: '',
    employee_role: '',
    employee_department_id: '',
    employee_status_id: '',
    employee_image: '',
    employee_qrcode: '',
    employee_sss_no: '',
    employee_pagibig_no: '',
    employee_philhealth_no: '',
    employee_tin_no: '',
  });

  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedMunicipality, setSelectedMunicipality] = useState('');
  const [selectedBarangay, setSelectedBarangay] = useState('');
  const [regionList, setRegionList] = useState([]);
  const [provinceList, setProvinceList] = useState([]);
  const [municipalityList, setMunicipalityList] = useState([]);
  const [barangayList, setBarangayList] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const regionsList = await getAllRegions();
        setRegionList(regionsList);
      } catch (error) {
        console.error("Error fetching regions:", error);
      }
    };
    fetchRegions();
  }, []);

  useEffect(() => {
    const fetchProvinces = async () => {
      if (selectedRegion) {
        try {
          const provincesList = await getAllProvinces(selectedRegion);
          setProvinceList(provincesList);
        } catch (error) {
          console.error("Error fetching provinces:", error);
        }
      } else {
        setProvinceList([]);
      }
    };
    fetchProvinces();
  }, [selectedRegion]);

  useEffect(() => {
    const fetchMunicipalities = async () => {
      if (selectedProvince) {
        try {
          const municipalitiesList = await getMunicipalitiesByProvince(selectedProvince);
          setMunicipalityList(municipalitiesList);
        } catch (error) {
          console.error("Error fetching municipalities:", error);
        }
      } else {
        setMunicipalityList([]);
      }
    };
    fetchMunicipalities();
  }, [selectedProvince]);

  useEffect(() => {
    const fetchBarangays = async () => {
      if (selectedMunicipality) {
        try {
          const barangaysList = await getBarangaysByMunicipality(selectedMunicipality);
          setBarangayList(barangaysList);
        } catch (error) {
          console.error("Error fetching barangays:", error);
        }
      } else {
        setBarangayList([]);
      }
    };
    fetchBarangays();
  }, [selectedMunicipality]);

  const handleRegisterUserRequestAndResponse = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    if (employee.employee_password !== employee.employee_confirm_password) {
      setError("Passwords do not match!");
      setIsLoading(false);
      return;
    }

    try {
      await registerEmployee({
        ...employee,
        employee_barangay: selectedBarangay,
        employee_municipality: selectedMunicipality,
        employee_province: selectedProvince,
        employee_region: selectedRegion,
      });
      // navigate('/success');
    } catch (error) {
      console.error('Registration error:', error);
      setError(error.message || "Registration failed, please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen glass">
      <ToastContainer />
      <div className="container w-full lg:w-2/3 mx-auto p-6 md:p-10 shadow-md glass">
        <form className="p-6 space-y-6 bg-transparent rounded-lg shadow-lg" onSubmit={handleRegisterUserRequestAndResponse}>
          <h2 className="text-2xl font-semibold text-center text-gray-700">Register Employee</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {/* First Name Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                name="employee_firstname"
                className="input input-bordered w-full"
                value={employee.employee_firstname}
                onChange={handleChange}
                required
              />
            </div>

            {/* Last Name Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                name="employee_lastname"
                className="input input-bordered w-full"
                value={employee.employee_lastname}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="employee_email"
                className="input input-bordered w-full"
                value={employee.employee_email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Contact Number Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Contact Number</span>
              </label>
              <input
                type="text"
                name="employee_contact_no"
                className="input input-bordered w-full"
                value={employee.employee_contact_no}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="employee_password"
                className="input input-bordered w-full"
                value={employee.employee_password}
                onChange={handleChange}
                required
              />
            </div>

            {/* Confirm Password Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="employee_confirm_password"
                className="input input-bordered w-full"
                value={employee.employee_confirm_password}
                onChange={handleChange}
                required
              />
            </div>

            {/* Region Dropdown */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Region</span>
              </label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="input input-bordered w-full"
              >
                <option value="">Select Region</option>
                {regionList.map((region) => (
                  <option key={region.name} value={region.code}>
                    {region.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Province Dropdown */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Province</span>
              </label>
              <select
                value={selectedProvince}
                onChange={(e) => setSelectedProvince(e.target.value)}
                className="input input-bordered w-full"
              >
                <option value="">Select Province</option>
                {provinceList.map((province) => (
                  <option key={province.name} value={province.code}>
                    {province.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Municipality Dropdown */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Municipality</span>
              </label>
              <select
                value={selectedMunicipality}
                onChange={(e) => setSelectedMunicipality(e.target.value)}
                className="input input-bordered w-full"
              >
                <option value="">Select Municipality</option>
                {municipalityList.map((municipality) => (
                  <option key={municipality.name} value={municipality.code}>
                    {municipality.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Barangay Dropdown */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Barangay</span>
              </label>
              <select
                value={selectedBarangay}
                onChange={(e) => setSelectedBarangay(e.target.value)}
                className="input input-bordered w-full"
              >
                <option value="">Select Barangay</option>
                {barangayList.map((barangay) => (
                  <option key={barangay.name} value={barangay.code}>
                    {barangay.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Other fields (SSS No, Pagibig No, PhilHealth No, TIN No) */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">SSS No.</span>
              </label>
              <input
                type="text"
                name="employee_sss_no"
                className="input input-bordered w-full"
                value={employee.employee_sss_no}
                onChange={handleChange}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Pagibig No.</span>
              </label>
              <input
                type="text"
                name="employee_pagibig_no"
                className="input input-bordered w-full"
                value={employee.employee_pagibig_no}
                onChange={handleChange}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">PhilHealth No.</span>
              </label>
              <input
                type="text"
                name="employee_philhealth_no"
                className="input input-bordered w-full"
                value={employee.employee_philhealth_no}
                onChange={handleChange}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">TIN No.</span>
              </label>
              <input
                type="text"
                name="employee_tin_no"
                className="input input-bordered w-full"
                value={employee.employee_tin_no}
                onChange={handleChange}
              />
            </div>

            {/* Submit Button */}
            <div className="form-control">
              <button
                type="submit"
                className="btn drop-shadow-lg bg-gradient-to-r from-white to-sky-500 hover:from-white hover:to-violet-800 text-black text-xl sm:text-2xl"
                disabled={isLoading}
              >
                {isLoading ? 'Registering...' : 'Register'}
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <div className="form-control">
                <p className="text-red-500 text-sm">{error}</p>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  registerEmployee: (employee) => dispatch(registerEmployee(employee)),
});

export default connect(null, mapDispatchToProps)(EmployeeRegister);
