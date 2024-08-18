/* eslint-disable no-undef */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
//ICONS
import { FcFolder, FcOpenedFolder, FcPlus, FcSalesPerformance, FcSearch, FcPrevious, FcOk, FcViewDetails, FcEmptyTrash, FcNext } from "react-icons/fc";
//REDUXISM
import { fetchRates, addRate, updateRate, deactivateRate, searchRates } from '../../../redux/actions/rateAction';
import { fetchDepartments } from '../../../redux/actions/departmentAction';

const EditRates = ({ fetchRates, updateRate, ratesData, departmentData, fetchDepartments, loading }) => {
  const { rateId } = useParams();  // Retrieve the rateId from the URL
  console.log("RATE ID GIKAN SA USE PARAMS!", rateId);
  console.log("DATA SA rates", ratesData);
  console.log("DATA SA DEPARTMENT", departmentData);

  useEffect(() => {
    fetchRates();
    fetchDepartments();
  }, [fetchRates, fetchDepartments]);

  // Filter the rate data based on the rateId from the URL
  const initialRateData = ratesData.rates?.find(rate => rate.id === parseInt(rateId, 10)) || {
    rate_name: '',
    rate_amount_per_day: '',
    rate_details: '',
    rate_description: '',
    rate_department_id: '',
    rate_status_id: '1'
  };

  const [formDataUpdateRate, setFormDataUpdateRate] = useState(initialRateData);

  const handleChange = (e) => {
    setFormDataUpdateRate({
      ...formDataUpdateRate,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitUpdateRate = (e) => {

  };

  //e-update ang rate
  const handleSubmitAddRateData = async (e) => {
    e.preventDefault();
    try {
      e.preventDefault();
      await updateRate(rateId, formDataUpdateRate);
      toast.success('Rate added successfully!');
      onClose();
    } catch (error) {
      toast.error('Failed to add rate');
      console.error('Failed to add rate', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!formDataUpdateRate.rate_name) {
    return <p>No rate found for the provided ID.</p>;
  }

  const departmentsCollection = departmentData?.departments?.data?.details || [];
  console.log("DATA SA departments test101", departmentsCollection);

  return (
    <div className='h-full max-h-full w-full max-w-full glass mx-auto p-4 shadow-slate-900/100 rounded-t-lg rounded-b-lg rounded-l-lg rounded-r-lg'>
      <div className="flex flex-col bg-transparent mb-10 shadow-slate-900/100" >
        <div className="flex items-center text-sm breadcrumbs">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className='flex items-center hover:text-white'>
                <FcPrevious style={{ height: "2rem", width: "2rem" }} />
                <span className="ml-2">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/employee/dashboard" className='flex items-center hover:text-white'>
                <FcFolder style={{ height: "2rem", width: "2rem" }} />
                <span className="ml-2">Rates</span>
              </Link>
            </li>
            <li>
              <Link to="" className='flex items-center hover:text-white'>
                <FcOpenedFolder style={{ height: "2rem", width: "2rem" }} />
                <span className="ml-2">Data</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex ...">
        <div className="flex-1 ...">01</div>
        <div className="contents">
          <div className="flex-1 ...">02</div>
          <div className="flex-1 ...">03</div>
        </div>
        <div className="flex-1 ...">04</div>
      </div>

      <form onSubmit={handleSubmitAddRateData}>
      <div className="grid grid-cols-3 gap-6">

        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-2xl">Rate Name</span>
          </label>
          <input
            type="text"
            placeholder="text"
            className="input input-bordered shadow-2xl text-2xl bg-black text-glass"
            style={{ backgroundColor: 'transparent', color: "black", border: "none" }}
            name="rate_name"
            value={formDataUpdateRate.rate_name}
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-2xl">Rate Amount</span>
          </label>

          <input
            type="text"
            placeholder="text"
            className="input input-bordered shadow-2xl text-2xl bg-black text-glass"
            name="rate_amount_per_day"
            value={formDataUpdateRate.rate_amount_per_day}
            onChange={handleChange}
            style={{ backgroundColor: 'transparent', color: "black", border: "none" }}
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-2xl">Rate  Details</span>
          </label>
          <input
            type="text"
            placeholder="text"
            className="input input-bordered shadow-2xl text-2xl bg-black text-glass"
            name="rate_details"
            value={formDataUpdateRate.rate_details}
            onChange={handleChange}
            style={{ backgroundColor: 'transparent', color: "black", border: "none" }}
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-2xl">Rate Description</span>
          </label>

          <input
            type="text"
            placeholder="text"
            className="input input-bordered shadow-2xl text-2xl bg-black text-glass"
            name="rate_description"
            value={formDataUpdateRate.rate_description}
            onChange={handleChange}
            style={{ backgroundColor: 'transparent', color: "black", border: "none" }}
          />
        </div>

      <div className="form-control">
      <label className="label">
        <span className="label-text text-black text-2xl">Rate Department</span>
      </label>
      <select
        name="rate_department_id"
        value={formDataUpdateRate.rate_department_id}  // Corrected here
        onChange={handleChange}
        className="input input-bordered shadow-2xl glass text-2xl text-black border-1 border-glass rounded-se-3xl shadow-slate-900/100 custom-placeholder-text-color"
      >
        <option value="">Select Department</option>
        {departmentsCollection.map((department) => (
          <option key={department.id} value={department.id}>
            {department.department_name}
          </option>
        ))}
      </select>
    </div>


        <div className="form-control">
        <label className="label">
          <span className="label-text text-glass text-2xl">Rate Status</span>
        </label>
        <select
          name="rate_status_id"
          value={formDataUpdateRate.rate_status_id}
          onChange={handleChange}
          className="input input-bordered shadow-2xl glass text-2xl text-black border-1 border-glass rounded-se-3xl shadow-slate-900/100 custom-placeholder-text-color"
        >
          <option value="1">Active</option>
          <option value="0">Inactive</option>
        </select>
      </div>
        
        </div>

        <div className="flex">
        <div>
          <button
            type="submit"
            className="btn glass hover:text-white hover:bg-indigo-400"
            style={{ fontSize: "40px", color: "transparent", border: "none", backgroundColor: "transparent" }}
          >
            <FcOk type="submit" style={{ fontSize: "40px", color: "transparent" }} className='text-black hover:text-black' />
          </button>
        </div>
      </div>
        </form>
      
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ratesData: state.rateState,
    loading: state.rateState.loading,
    departmentData: state.departmentState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRates: () => dispatch(fetchRates()),
    addRate: (AddRateData) => dispatch(addRate(AddRateData)),
    updateRate: (rateId, UpdateRateData) => dispatch(updateRate(rateId, UpdateRateData)),  // Pass both rateId and UpdateRateData
    deactivateRate: (RateId) => dispatch(deactivateRate(RateId)),
    fetchDepartments: () => dispatch(fetchDepartments()),
    searchRates: (query) => dispatch(searchRates(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditRates);
