import React, { useContext } from "react";
import { Link } from "react-router-dom";
import authContext from "../../helpers/authContext";
import history from "../../helpers/history";
export default function HeaderProfileImg() {
  const { setAuth, auth } = useContext(authContext);
  let userStatus = "patient";

  const profileImage = null;
  // user?.image.url !== "None" ? profileImageURL + user?.image.url : "";

  // signOut fun
  const signOut = () => {
    setAuth(null);
    localStorage.removeItem("authToken");
    history.push("/");
  };
  return (
    <div className="headerProfile" style={{ minHeight: "fit-content" }}>
      <img
        src={profileImage || "/images/userIcon.png"}
        className="icon profileImg img pointer"
        style={{ height: "20px", width: "20px" }}
        alt="noit"
      ></img>

      <div className="dropDown" style={{ maxHeight: "auto !important" }}>
        <Link to="/">
          <div className="item">Home</div>
        </Link>
        <Link
          to={
            userStatus === "patient"
              ? "/dashboard/my-profile"
              : "/dashboard/my-profile"
          }
        >
          <div className="item">Profile</div>
        </Link>

        <div className="divider"></div>
        <div onClick={signOut} className="item basicTitleSemiBold">
          Log out
        </div>
      </div>
    </div>
  );
}
