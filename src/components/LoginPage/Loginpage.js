import React from "react";
import "./loginpage.css";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { he } from "date-fns/locale";

function Loginpage() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row align-items-center min-vh-100">
          <div className="col-md-5 h-100  d-flex align-items-center justify-content-center">
            <div>
              <img className="logo-login" src="/images/logojeans.svg" alt="" />{" "}
            </div>
          </div>
          <div className="col-md-1 d-none min-vh-100  d-md-flex justify-content-md-center align-items-center">
            <div
              className="line-login"
              style={{ borderLeft: "1px solid black", height: "30rem" }}
            ></div>
          </div>

          <div
            className="col-md-5 h-100  d-flex   align-items-center justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <h1
              style={{
                textAlign: "center",
                fontSize: "48px",
                color: "#01676B",
                fontFamily: "SF Pro Display",
                fontStyle: "normal",
                fontWeight: "900",
                marginBottom: "3rem",
              }}
            >
              Admin Panel
            </h1>
            <div style={{ width: "100%", textAlign: "center" }}>
              <form action="">
                <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                  <div
                    className="d-flex justify-content-between"
                    style={{
                      width: "80%",
                      borderBottom: "solid 2px #ABABAB",
                      margin: "1.5rem 0 1.5rem 0 ",
                      textAlign: "start",
                    }}
                  >
                    <input
                      style={{
                        width: "85%",
                        height: "2rem",
                        border: "none",
                      }}
                      placeholder="Email"
                      type="text"
                    />
                    <FaEnvelope
                      style={{ fontSize: "1.5rem", color: "#01676B" }}
                    />
                  </div>
                  <div
                    className="d-flex justify-content-between"
                    style={{
                      width: "80%",
                      borderBottom: "solid 2px #ABABAB",
                      margin: "1.5rem 0 1.5rem 0rem",
                      textAlign: "start",
                    }}
                  >
                    <input
                      style={{
                        width: "85%",

                        height: "2rem",
                        border: "none",
                      }}
                      type="password"
                      placeholder="Password"
                    />
                    <FaLock style={{ fontSize: "1.5rem", color: "#01676B" }} />
                  </div>
                </div>
                <button
                  className="btn btn-primary"
                  style={{
                    width: "280px",
                    height: "51px",
                    backgroundColor: "#00028C",
                    marginTop: "4rem",
                    borderRadius: "2rem",
                  }}
                >
                  {" "}
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
