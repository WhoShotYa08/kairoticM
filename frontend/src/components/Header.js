import { Navbar, Nav, Container, Badge, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import { PopupMenu } from "react-simple-widgets";
import { IoPersonCircle } from "react-icons/io5";

export default function Header() {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="app" data-bs-auto-close="true">
      {userInfo ? (
        <div className="text-end">
          <PopupMenu>
            <button type="button" className="btn btn-link"  >
              <IoPersonCircle size={20} color="grey" />
            </button>

            <div className="card text-start">
              <div className="card-body px-4 py-4">
                <div id="circle-avatar" className="text-center mx-auto mb-4">
                  <span>{userInfo.name[0]}</span>
                </div>

                <h5 className="text-center mb-0">{userInfo.name}</h5>
                <p className="text-center mb-0">{userInfo.email}</p>

                <hr />

                <p
                  className="mb-0"
                  style={{
                    color: "#bebebe",
                    fontWeight: "bold",
                    fontSize: 12,
                  }}
                >
                  ROLES
                </p>
                <p style={{ fontSize: 12 }}>
                  {["Submitter", "Project manager"].join(", ")}
                </p>

                <hr className="mb-0" style={{ margin: "0 -24px 0" }} />

                <div
                  className="list-group list-group-flush"
                  style={{ margin: "0 -24px 0" }}
                >
                  <button className="list-group-item list-group-item-action px-4">
                    <small>Other Requests</small>
                  </button>
                </div>

                <hr style={{ margin: "0 -24px 24px" }} />

                <div className="d-grid">
                  <button className="btn btn-secondary" onClick={logoutHandler}>
                    <small>Logout</small>
                  </button>
                </div>
              </div>
            </div>
          </PopupMenu>
        </div>
      ) : (
        <PopupMenu>
          <button className="btn btn-primary">
            <small>Profile</small>
          </button>

          <div className="card text-start">
            <div className="card-body px-4 py-4">
              <div id="circle-avatar" className="text-center mx-auto mb-4">
                <span>K</span>
              </div>

              <h5 className="text-center mb-0">Name</h5>
              <p className="text-center mb-2">Surname</p>

              <hr />

              <p
                className="mb-0"
                style={{
                  color: "#bebebe",
                  fontWeight: "bold",
                  fontSize: 12,
                }}
              >
                ROLES
              </p>
              <p style={{ fontSize: 12 }}>
                {["Submitter", "Project manager", "Change control board"].join(
                  ", "
                )}
              </p>

              <hr className="mb-0" style={{ margin: "0 -24px 0" }} />

              <div
                className="list-group list-group-flush"
                style={{ margin: "0 -24px 0" }}
              ></div>

              <hr style={{ margin: "0 -24px 24px" }} />

              <div className="d-grid">
                <button className="btn btn-secondary" onClick={logoutHandler}>
                  <small>Logout</small>
                </button>
              </div>
            </div>
          </div>
        </PopupMenu>
      )}
    </div>
  );
}
