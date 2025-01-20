/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useState } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../../../components/redux/actions/userAction';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserRegister = ({ registerUser }) => {
    const [localFirstName, setLocalFirstName] = useState("");
    const [localLastName, setLocalLastName] = useState("");
    const [localEmail, setLocalEmail] = useState("");
    const [localContactNo, setLocalContactNo] = useState("");
    const [localPassword, setLocalPassword] = useState("");
    const [localConfirmPassword, setLocalConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(""); // State for error message

    const navigate = useNavigate();

    const handleRegisterUserRequestAndResponse = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setError(""); // Reset error message

        if (localPassword !== localConfirmPassword) {
            setError("Passwords do not match!"); // Set error message
            setIsLoading(false);
            return;
        }

        try {
            await registerUser({
                user_firstname: localFirstName,
                user_lastname: localLastName,
                user_email: localEmail,
                user_contact_no: localContactNo,
                user_password: localPassword,
                password_confirmation: localConfirmPassword
            });

            setTimeout(() => {
                window.location.reload();
                navigate("/admin/login");
            }, 5000)

        } catch (error) {
            console.error('Registration error:', error);
            // navigate("/admin/register");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen rounded-full drop-shadow-xl">
            <ToastContainer />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 glass drop-shadow-xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 glass drop-shadow-xl">

                <div className="artboard phone-3 flex flex-col items-start justify-start w-full mx-4 p-4">

                <div className="card shrink-0 w-full max-w-sm h-full shadow-md bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% border-t-4 border-b-4 border-black overflow-hidden overflow-y-auto">
                    <form 
                        className="p-6 space-y-6 bg-gradient-to-r from-emerald-500 via-sky-500 to-violet-700 border-t-8 border-b-8 border-white rounded-lg shadow-lg"
                        onSubmit={handleRegisterUserRequestAndResponse}
                    >
                        <h2 className="text-3xl font-semibold text-center text-white">Admin Register</h2>
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-2 drop-shadow-xl">
                            {/* First Name Field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-black">Firstname</span>
                                </label>
                                <input 
                                    type="text" 
                                    value={localFirstName} 
                                    onChange={(e) => setLocalFirstName(e.target.value)} 
                                    placeholder="Enter Firstname" 
                                    className="input input-bordered grow glass text-black placeholder-black" 
                                    required 
                                />
                            </div>
                            {/* Last Name Field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-black">Lastname</span>
                                </label>
                                <input 
                                    type="text" 
                                    value={localLastName} 
                                    onChange={(e) => setLocalLastName(e.target.value)} 
                                    placeholder="Enter Lastname" 
                                    className="input input-bordered grow glass text-black placeholder-black" 
                                    required 
                                />
                            </div>
                            {/* Email Field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-black">Email</span>
                                </label>
                                <input 
                                    type="email" 
                                    value={localEmail} 
                                    onChange={(e) => setLocalEmail(e.target.value)} 
                                    placeholder="Enter Email" 
                                    className="input input-bordered grow glass text-black placeholder-black" 
                                    required 
                                />
                            </div>
                            {/* Contact No. Field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-black">Contact No.</span>
                                </label>
                                <input 
                                    type="text" 
                                    value={localContactNo} 
                                    onChange={(e) => setLocalContactNo(e.target.value)} 
                                    placeholder="Enter Contact No." 
                                    className="input input-bordered grow glass text-black placeholder-black" 
                                    required 
                                />
                            </div>
                            {/* Password Field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-black">Password</span>
                                </label>
                                <input 
                                    type="password" 
                                    value={localPassword} 
                                    onChange={(e) => setLocalPassword(e.target.value)} 
                                    placeholder="Enter Password" 
                                    className="input input-bordered grow glass text-black placeholder-black" 
                                    required 
                                />
                            </div>
                            {/* Confirm Password Field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-black">Confirm Password</span>
                                </label>
                                <input 
                                    type="password" 
                                    value={localConfirmPassword} 
                                    onChange={(e) => setLocalConfirmPassword(e.target.value)} 
                                    placeholder="Enter Confirm Password" 
                                    className="input input-bordered grow glass text-black placeholder-black" 
                                    required 
                                />
                                {error && <p className="text-red-500 text-sm">{error}</p>} {/* Display error message */}
                                <label className="label">
                                    <Link to="/resetpassword" className="label-text text-xl text-black-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button 
                                    type="submit" 
                                    className="btn drop-shadow-2xl bg-gradient-to-r from-zinc-100 to-black-100 hover:from-black hover:to-zinc-400 text-black hover:text-black text-2xl"
                                >
                                    Register
                                </button>
                            </div>
                            <center>
                                <span 
                                    id="loading-infinity" 
                                    className={`loading loading-infinity loading-lg ${isLoading ? 'block' : 'hidden'} spinner-blue`}
                                ></span>
                            </center>
                        </div>
                    </form>
                </div>
            </div>
            
            
                </div>
            </div>
        </div>
    )
}

export default connect(null, { registerUser })(UserRegister);
