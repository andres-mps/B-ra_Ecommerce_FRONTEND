import "./YourProfile.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function YourProfile() {
  const navigate = useNavigate();
  const [checkProfile, setCheckProfile] = useState(true);
  const [checkAccount, setCheckAccount] = useState(false);
  const [checkSecurity, setCheckSecurity] = useState(false);

  function handleCheck(checkWord) {
    setCheckProfile(false);
    setCheckAccount(false);
    setCheckSecurity(false);
    if (checkWord === "Profile") {
      setCheckProfile(true);
    }
    if (checkWord === "Account") {
      setCheckAccount(true);
    }
    if (checkWord === "Security") {
      setCheckSecurity(true);
    }
  }
  const userData = useSelector((state) => state.user.userData);
  const [firstname, setFirstname] = useState(userData.firstname);
  const [lastname, setLastname] = useState(userData.lastname);
  const [email, setEmail] = useState(userData.email);
  const [address, setAddress] = useState(userData.address);
  const [phone, setPhone] = useState(userData.phone);

  const [err, setErr] = useState(null);
  async function handleProfileSubmit(event) {
    event.preventDefault();
    const response = await axios({
      method: "patch",
      url: `http://localhost:3000/users/${userData.id}`,
      data: {
        firstname,
        lastname,
        email,
        address,
        phone,
      },
    });
    if (response.data.err === "err") {
      return setErr(response.data.message);
    }
    setErr(null);
    return navigate("/your-profile");
  }

  return (
    <>
      <div className="container">
        <nav aria-label="breadcrumb" className="main-breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <NavLink href="index.html">Home</NavLink>
            </li>

            <li className="breadcrumb-item active" aria-current="page">
              your profile
            </li>
          </ol>
        </nav>

        <div className="row gutters-sm">
          <div className="col-md-4 d-none d-md-block">
            <div className="card p-2 your-profile-background-color">
              <div className="card-body">
                <nav className="nav flex-column nav-pills nav-gap-y-1">
                  <NavLink
                    onClick={() => handleCheck("Profile")}
                    className="your-profile-category-titles"
                    style={
                      checkProfile
                        ? { backgroundColor: "#121212", color: "rgb(255, 255, 255)" }
                        : null
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-user mr-2"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    Profile Information
                  </NavLink>
                  <NavLink
                    onClick={() => handleCheck("Account")}
                    className="your-profile-category-titles"
                    style={
                      checkAccount
                        ? { backgroundColor: "#121212", color: "rgb(255, 255, 255)" }
                        : null
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-settings mr-2"
                    >
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>
                    Account Settings
                  </NavLink>
                  <NavLink
                    onClick={() => handleCheck("Security")}
                    className="your-profile-category-titles"
                    style={
                      checkSecurity
                        ? { backgroundColor: "#121212", color: "rgb(255, 255, 255)" }
                        : null
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-shield mr-2"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                    Security
                  </NavLink>
                  <NavLink className="your-profile-category-titles">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-bell mr-2"
                    >
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    </svg>
                    Notification
                  </NavLink>
                  <NavLink className="your-profile-category-titles">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-credit-card mr-2"
                    >
                      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                      <line x1="1" y1="10" x2="23" y2="10"></line>
                    </svg>
                    Billing
                  </NavLink>
                </nav>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card mb-5 your-profile-background-color">
              <div className="card-body your-profile-regular-font">
                <div style={checkProfile ? { display: "block" } : { display: "none" }} id="profile">
                  <h6 className="your-profile-bold-font">YOUR PROFILE INFORMATION</h6>
                  <hr />
                  <form onSubmit={handleProfileSubmit}>
                    <div className="form-group mb-2">
                      <label htmlFor="firstname">First name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstname"
                        aria-describedby="fullNameHelp"
                        required
                        value={firstname}
                        onChange={(event) => {
                          setFirstname(event.target.value);
                        }}
                      />
                      <small id="fullNameHelp" className="form-text text-muted">
                        Your first name may appear around here where you are mentioned. You can
                        change or remove it at any time.
                      </small>
                    </div>
                    <div className="form-group mb-2">
                      <label htmlFor="lastname">Last name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastname"
                        aria-describedby="fullNameHelp"
                        required
                        value={lastname}
                        onChange={(event) => {
                          setLastname(event.target.value);
                        }}
                      />
                      <small id="fullNameHelp" className="form-text text-muted">
                        Your last name may appear around here where you are mentioned. You can
                        change or remove it at any time.
                      </small>
                    </div>
                    <div className="form-group mb-2">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="fullNameHelp"
                        required
                        value={email}
                        onChange={(event) => {
                          setEmail(event.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group mb-2">
                      <label htmlFor="address">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        aria-describedby="fullNameHelp"
                        placeholder={!address && "update your address"}
                        value={address}
                        onChange={(event) => {
                          setAddress(event.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="fullName">Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        aria-describedby="fullNameHelp"
                        placeholder={!phone && "update your phone"}
                        value={phone}
                        onChange={(event) => {
                          setPhone(event.target.value);
                        }}
                      />
                    </div>

                    <button type="submit" className="btn btn-primary me-3">
                      Update Profile
                    </button>
                  </form>
                  {err && (
                    <div class="text-danger mt-2 login-alert" role="alert">
                      {err}
                    </div>
                  )}
                </div>
                <div style={checkAccount ? { display: "block" } : { display: "none" }} id="account">
                  <h6>ACCOUNT SETTINGS</h6>
                  <hr />
                  <form>
                    <div className="form-group">
                      <label htmlFor="username">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        aria-describedby="usernameHelp"
                        placeholder="Enter your username"
                        value="kennethvaldez"
                      />
                      <small id="usernameHelp" className="form-text text-muted">
                        After changing your username, your old username becomes available htmlFor
                        anyone else to claim.
                      </small>
                    </div>
                    <hr />
                    <div className="form-group">
                      <label className="d-block text-danger">Delete Account</label>
                      <p className="text-muted font-size-sm">
                        Once you delete your account, there is no going back. Please be certain.
                      </p>
                    </div>
                    <button className="btn btn-danger" type="button">
                      Delete Account
                    </button>
                  </form>
                </div>
                <div
                  style={checkSecurity ? { display: "block" } : { display: "none" }}
                  id="security"
                >
                  <h6 className="your-profile-bold-font">SECURITY SETTINGS</h6>
                  <hr />
                  <form>
                    <div className="form-group">
                      <label className="d-block">Change Password</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your old password"
                      />
                      <input type="text" className="form-control mt-1" placeholder="New password" />
                      <input
                        type="text"
                        className="form-control mt-1"
                        placeholder="Confirm new password"
                      />
                    </div>
                  </form>
                  <hr />
                  <form>
                    <div className="form-group">
                      <label className="d-block">Two Factor Authentication</label>
                      <button className="btn btn-info" type="button">
                        Enable two-factor authentication
                      </button>
                      <p className="small text-muted mt-2">
                        Two-factor authentication adds an additional layer of security to your
                        account by requiring more than just NavLink password to log in.
                      </p>
                    </div>
                  </form>
                  <hr />
                  <form>
                    <div className="form-group mb-0">
                      <label className="d-block">Sessions</label>
                      <p className="font-size-sm text-secondary">
                        This is NavLink list of devices that have logged into your account. Revoke
                        any sessions that you do not recognize.
                      </p>
                      <ul className="list-group list-group-sm">
                        <li className="list-group-item has-icon">
                          <div>
                            <h6 className="mb-0">San Francisco City 190.24.335.55</h6>
                            <small className="text-muted">
                              Your current session seen in United States
                            </small>
                          </div>
                          <button className="btn btn-light btn-sm ml-auto" type="button">
                            More info
                          </button>
                        </li>
                      </ul>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default YourProfile;
