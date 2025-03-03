/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { FcOk } from 'react-icons/fc';
import { connect } from 'react-redux';
//REDUXISM
import { fetchDeductions, addDeduction } from '../../../redux/actions/deductionAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddOvertimeModal = ({ isOpen, onClose, addDeduction, deductionData }) => {
  
  const [formData, setFormData] = useState({
    deduction_name: '',
    deduction_amount: '',
    deduction_description: '',
    deduction_status_id: '1',
  });

  useEffect(() => {
    if (isOpen) {
      fetchDeductions(); // Fetch departments when the modal is opened
    }
  }, [isOpen, fetchDeductions]);

  if (!isOpen) return null;

  //handleChange setter sa input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  //async function para mag add ug overtime data
  const handleSubmitAddDeductionData = async (e) => {
    e.preventDefault();
    try {
      await addDeduction(formData);  // Add the new overtime
      toast.success('Overtime added successfully!');
      fetchDeductions();  // Fetch the updated list of overtimes
      onClose();  // Close the modal
    } catch (error) {
      toast.error('Failed to add overtime');
      console.error('Failed to add overtime', error);
    }
  };

  return (
    <dialog open className="modal border border-black">
      <div className="modal-box w-11/12 max-w-5xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% border border-black">
        <span className="font-bold text-3xl text-black">ADD DEDUCTION DETAILS</span>
        <div className="modal-action">
          <form method="dialog" onSubmit={handleSubmitAddDeductionData}>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 glass" onClick={onClose}>✕</button>
            <div className="grid grid-cols-3 gap-8">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black text-2xl">Overtime Name</span>
                </label>
                <input
                  name="deduction_name"
                  type="text"
                  value={formData.deduction_name}
                  onChange={handleChange}
                  placeholder="Enter overtime name"
                  className="input input-bordered glass shadow-2xl text-2xl text-black border-glass shadow-slate-900/100 custom-placeholder-text-color"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black text-2xl">Overtime Hour</span>
                </label>
                <input
                  name="deduction_amount"
                  type="text"
                  value={formData.deduction_amount}
                  onChange={handleChange}
                  placeholder="Enter overtime hour"
                  className="input input-bordered shadow-3xl glass text-2xl text-black border-1 border-glass shadow-slate-900/100 custom-placeholder-text-color"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black text-2xl">Overtime Description</span>
                </label>
                <input
                  name="deduction_description"
                  type="text"
                  value={formData.deduction_description}
                  onChange={handleChange}
                  placeholder="Enter overtime description"
                  className="input input-bordered shadow-2xl glass text-2xl text-black border-1 border-glass shadow-slate-900/100 custom-placeholder-text-color"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-glass text-2xl">Overtime Status</span>
                </label>
                <select
                  name="deduction_status_id"
                  value={formData.deduction_status_id}
                  onChange={handleChange}
                  className="input input-bordered shadow-2xl glass text-2xl text-black border-1 border-glass rounded-se-3xl shadow-slate-900/100 custom-placeholder-text-color"
                >
                  <option value="1">Active</option>
                  <option value="0">Inactive</option>
                </select>
              </div>
            </div>
            <br />
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
      </div>
    </dialog>
  );
}

const mapStateToProps = (state) => {
  return {
    deductionData: state.deductionState,
    loading: state.deductionState.loading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDeductions: () => dispatch(fetchDeductions()),
    addDeduction: (AddDeductionData) => dispatch(addDeduction(AddDeductionData)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddOvertimeModal);
