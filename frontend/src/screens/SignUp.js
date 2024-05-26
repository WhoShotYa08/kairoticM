import React from "react";

export default function SignUp() {
  return (
    <div className="overflow-hidden" style={{ height: "100%" }}>
      <div className="row h-100 g-0">
        <div className="col-lg-3 h-100 border rounded-3">
          <div className="" style={{backgroundColor: 'teal', paddingTop: '77%', paddingBottom: '78%'}}></div>
        </div>
        <div className="col-lg-9 border rounded-end rounded-3">
          <div className="mx-5">
            <h2 className="my-4 text-dark">Sign In</h2>

            <form>
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
                  style={{ width: "95%", backgroundColor: 'teal' }}
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
