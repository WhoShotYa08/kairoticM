import React from "react";
import { FaGooglePlus } from "react-icons/fa6";

export default function SignUp() {
  return (
    <div className="overflow-hidden" style={{ height: "100%" }}>
      <div className="row h-100 g-0">
        <div className="col-lg-3 h-100 border rounded-3" style={{}}>
          <div
            className=""
            style={{
              backgroundColor: "teal",
              //   paddingTop: "77%",
              //   paddingBottom: "78%",
            }}
          >
            <div className="">
              <h4 className="text-white fw-light invisible">
                Tailored Engineering.
              </h4>
              <h4 className="text-white fw-bold p-0 m-0">
                Tailored Engineering
              </h4>
              <h4 className="fw-bold text-white p-0 my-3"> Design Solutions.</h4>
              <p className="text-white fs-10">
                was established after identifying a need to supply our Clients
                with full turnkey solution to meet their business and project
                execution objectives.
              </p>
            </div>
            <h4 className="invisible">
              Project & Construction Management Service.
            </h4>

            <div className="invisible">
              <h4>Providing tailored Engineering Design Solutions.</h4>
              <h4>Project & Construction Management Service.</h4>
            </div>
            <div className="invisible pb-1">
              <h4>Providing tailored Engineering Design Solutions.</h4>
              <h4>Project & Construction Management Service.</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-9 border rounded-end rounded-3">
          <div className="mx-5 py-4">
            <div className="text-center">
              <h2 className="my-4 text-dark">Sign In</h2>
              <p>or login with</p>
              <button
                className="btn btn-danger text-white fw-bold"
                type="button"
              >
                <FaGooglePlus className="mx-3" size={25} />
                GOOGLE
              </button>
            </div>

            <form className="align-self-center">
              <div
                className="form-floating mb-3 rounded-2 border-end"
                style={{ width: "95%" }}
              >
                <input
                  type="email"
                  className="form-control bg-white border-bottom borders border-2 "
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div
                className="form-floating border-end "
                style={{ width: "95%" }}
              >
                <input
                  type="password"
                  className="form-control bg-white border-bottom borders border-end-0 border-2"
                  id="floatingPassword"
                  placeholder="Password"
                />

                <label htmlFor="floatingPassword">Password</label>
              </div>

              <div className="d-grid gap-2">
                <button
                  className="btn btn-primary my-5"
                  type="button"
                  style={{ width: "95%", backgroundColor: "teal" }}
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
