/* eslint-disable no-extra-semi */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUserEdit, FaSave, FaLongArrowAltLeft, } from "react-icons/fa";
import { FcFolder, FcOpenedFolder, FcSupport, FcPlus, FcAcceptDatabase, FcKey, FcUnlock, FcSalesPerformance, FcSearch, FcPrevious, FcViewDetails, FcEmptyTrash, FcNext } from "react-icons/fc";
import { MdEditSquare } from "react-icons/md";
//redux-actions
import { fetchUsers, updateUser, uploadAndUpdateImageUser, userChangePassword } from '../../../redux/actions/userAction';
import { fetchEmployees } from '../../../redux/actions/employeeAction';
import { FaUpload } from "react-icons/fa6";
import { fetchImages } from '../../../redux/actions/imageAction';
//modal 

const UserDetails = (props) => {
  console.log("DATA SA UserDetails", props);
  //FOR AUTHENTICATION-PURPOSES
  const [localStorageHasUserIdData, setLocalStorageHasUserId] = useState('');
  const [sessionStorageHasUserIdData, setSessionStorageHasUserId] = useState('');
  const [isEditing, setIsEditing] = useState(false); // e enable niya or disabled
  //maghandle sa data sa forms-input
  const [userData, setUserData] = useState({
    user_password: '',
    confirm_password: '',
  });

  //naga hold ug sa formData
  const handleChangePasswordInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleChangePasswordUser = async () => {
    try {
      // Check if userData has any changes 
      const hasChanges = Object.values(userData).some(value => value !== '');

      if (hasChanges) {
        const userResReq = await props.userChangePassword(localStorageHasUserIdData, userData); // Pass updated userData
        setIsEditing(!isEditing); // Toggle editing mode

        if(userResReq[0].success === true){
            toast.success('Updated successfully!🤭😇🤗', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                style: {
                    background: 'white',
                    color: 'green',
                    fontSize: '15px'
                }
            });
        }
        
      } else {
        // No changes detected, toggle editing mode without updating user data
        setIsEditing(!isEditing);
      }
    } catch (error) {
      console.error('Error updating user:', error);
      toast.error('Failed to update user. Please try again later.');
    }
  };

  const usersCollection = props?.users;
  console.log("DATA SA usersCollection", usersCollection);

  function getUserAuthenticated(usersCollection) {
    let item = [];
  
    if (usersCollection && usersCollection.length) {
      for (let ez = 0; ez < usersCollection.length; ez++) {
   
        if (usersCollection[ez].id == sessionStorageHasUserIdData && usersCollection[ez].id == localStorageHasUserIdData) {
          console.log("Match Found:", usersCollection[ez]); // Log the matched user
          item.push(usersCollection[ez]);
        }
      }
    }
    return item;
  }

  const isAuthenticatedUser = getUserAuthenticated(usersCollection);
  console.log("DATA SA isAuthenticatedUser", isAuthenticatedUser);

  useEffect(() => {
    //kuhaon ang data sa localStorage/Session Storage/Cookie
    const localStorageHasUserId = localStorage.getItem('DTRMS_BY_M4RKBELLO_USER_ID');
    const sessionStorageHasUserId = sessionStorage.getItem('DTRMS_BY_M4RKBELLO_USER_ID');

    setLocalStorageHasUserId(localStorageHasUserId);
    setSessionStorageHasUserId(sessionStorageHasUserId);

    props.fetchUsers();
    props.fetchEmployees();
    props.fetchImages();

  }, []);

  //para sa loading request if loading ang redux-reducer niya is is user_request
  if (props.loading) {
    return (
      <div className="flex flex-col gap-4 w-52">
    <div className="flex gap-4 items-center">
      <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
      <div className="flex flex-col gap-4">
        <div className="skeleton h-4 w-20"></div>
        <div className="skeleton h-4 w-28"></div>
      </div>
    </div>
    <div className="skeleton h-32 w-full"></div>
  </div>
    )
  };

  return (
    <div className="h-full max-h-full w-full max-w-full glass mx-auto p-0 shadow-slate-900/100 rounded-lg flex items-center justify-center">
    <div className="flex flex-wrap justify-center items-center">
    <ToastContainer />

        <div className="flex flex-col bg-transparent mb-10 shadow-slate-900/100">
          <div className="flex text-sm breadcrumbs">
            <ul className="flex space-x-2">
              <li>
                <Link to="/" className='flex hover:text-white'>
                  <FcPrevious style={{ height: "2rem", width: "2rem" }} />
                  <span className="ml-2">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/admin/users" className='flex hover:text-white'>
                  <FcFolder style={{ height: "2rem", width: "2rem" }} />
                  <span className="ml-2">Users</span>
                </Link>
              </li>
              <li>
                <Link to="" className='flex hover:text-white'>
                  <FcOpenedFolder style={{ height: "2rem", width: "2rem" }} />
                  <span className="ml-2">Data</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

      <div className="hero-content flex flex-col items-center">
        {isAuthenticatedUser && isAuthenticatedUser.map((user, index) => (
          <img
            key={index}
            className="mask mask-circle shadow-inner"
            src={user.user_image}
            alt="No Upload User Profile"
            type="file"
            style={{ backgroundColor: 'black', width: '30%', height: '30%' }}
          />
        ))}

        <div className="hero-content flex-col lg:flex-row">
          <div className="flex-1 pr-10 pl-10">
            <div className="grid grid-cols-2 gap-10">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-3xl">Password</span>
                </label>
                {isAuthenticatedUser && isAuthenticatedUser.map((user, index) => (
                  <input
                    key={index}
                    type="text"
                    placeholder="text"
                    name="user_password"
                    className={`input input-bordered shadow-2xl text-2xl glass text-black ${isEditing ? '' : 'pointer-events-none'}`}
                    defaultValue={user.user_password}
                    onChange={handleChangePasswordInputChange}
                    disabled={!isEditing} // Disable input when not editing
                  />
                ))}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-3xl">Confirm Password</span>
                </label>
                {isAuthenticatedUser && isAuthenticatedUser.map((user, index) => (
                  <input
                    key={index}
                    type="text"
                    placeholder="text"
                    name="confirm_password"
                    className={`input input-bordered shadow-2xl text-2xl glass text-black ${isEditing ? '' : 'pointer-events-none'}`}
                    defaultValue={user.user_password}
                    onChange={handleChangePasswordInputChange}
                    disabled={!isEditing} // Disable input when not editing
                  />
                ))}
              </div>
            </div>
            <br />
            <button onClick={handleChangePasswordUser} className="btn bg-black mr-3">
              {isEditing ?
                <FaSave style={{ backgroundColor: 'transparent', color: '#4B0082', border: 'none', width: '25px', height: '25px' }} /> :
                <MdEditSquare style={{ backgroundColor: 'transparent', color: '#4B0082', border: 'none', width: '25px', height: '25px' }} />
              }
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.userState.users.data,
  employees: state.employees,
  attendances: state.attendances,
  images: state.imageState,
  localStorageHasUserIdData: localStorage.getItem('DTRMS_BY_M4RKBELLO_USER_ID'),
  loading: state.userState.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchEmployees: () => dispatch(fetchEmployees()),
  fetchImages: () => dispatch(fetchImages()),
  uploadAndUpdateImageUser: (formData, userId) => dispatch(uploadAndUpdateImageUser(formData, userId)),
  updateUser: (userId, updatedUserData) => dispatch(updateUser(userId, updatedUserData)),
  userChangePassword: (userId, changePasswordUserData) => dispatch(userChangePassword(userId, changePasswordUserData))

});

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
