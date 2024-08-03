import React, { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { FaBell } from 'react-icons/fa';

const DropdownMenu = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      from: 'Yin',
      message: 'Hello there, check this new items in from the your may interested from the motion school.',
      time: '10 minutes ago',
      image: 'https://readymadeui.com/profile_2.webp'
    },
    {
      id: 2,
      from: 'Haper',
      message: 'Hello there, check this new items in from the your may interested from the motion school.',
      time: '2 hours ago',
      image: 'https://readymadeui.com/team-2.webp'
    },
    {
      id: 3,
      from: 'San',
      message: 'Hello there, check this new items in from the your may interested from the motion school.',
      time: '1 day ago',
      image: 'https://readymadeui.com/team-3.webp'
    },
    {
      id: 4,
      from: 'Seeba',
      message: 'Hello there, check this new items in from the your may interested from the motion school.',
      time: '30 minutes ago',
      image: 'https://readymadeui.com/team-4.webp'
    }
  ]);

  return (
    <DropdownButton
      id="dropdown-basic-button"
      title={<FaBell style={{ fontSize: '24px', color: '#fff' }} />}
      variant="primary"
      alignRight
    >
      <div className="dropdown-menu p-4" style={{ maxHeight: '500px', overflowY: 'auto', width: '400px' }}>
        <div className="d-flex justify-content-between mb-2">
          <span className="text-primary cursor-pointer">Clear all</span>
          <span className="text-primary cursor-pointer">Mark as read</span>
        </div>
        <ul className="list-unstyled">
        <div class="messages-box">
          <div className="list-group rounded-0">
            <a className="list-group-item list-group-item-action active text-white rounded-0">
              <div className="media"><img src="https://bootstrapious.com/i/snippets/sn-chat/avatar.svg" alt="user" width="50" className="rounded-circle" />
                <div className="media-body ml-4">
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">25 Dec</small>
                  </div>
                  <p className="font-italic mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
              </div>
            </a>

            <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
              <div className="media"><img src="https://bootstrapious.com/i/snippets/sn-chat/avatar.svg" alt="user" width="50" className="rounded-circle" />
                <div className="media-body ml-4">
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">14 Dec</small>
                  </div>
                  <p className="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur. incididunt ut labore.</p>
                </div>
              </div>
            </a>

            <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
              <div className="media"><img src="https://bootstrapious.com/i/snippets/sn-chat/avatar.svg" alt="user" width="50" className="rounded-circle" />
                <div className="media-body ml-4">
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">9 Nov</small>
                  </div>
                  <p className="font-italic text-muted mb-0 text-small">consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
              </div>
            </a>

            <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
              <div className="media"><img src="https://bootstrapious.com/i/snippets/sn-chat/avatar.svg" alt="user" width="50" className="rounded-circle" />
                <div className="media-body ml-4">
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">18 Oct</small>
                  </div>
                  <p className="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
              </div>
            </a>

            <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
              <div className="media"><img src="https://bootstrapious.com/i/snippets/sn-chat/avatar.svg" alt="user" width="50" className="rounded-circle" />
                <div className="media-body ml-4">
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">17 Oct</small>
                  </div>
                  <p className="font-italic text-muted mb-0 text-small">consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
              </div>
            </a>

            <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
              <div className="media"><img src="https://bootstrapious.com/i/snippets/sn-chat/avatar.svg" alt="user" width="50" className="rounded-circle" />
                <div className="media-body ml-4">
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">2 Sep</small>
                  </div>
                  <p className="font-italic text-muted mb-0 text-small">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>
            </a>

            <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
              <div className="media"><img src="https://bootstrapious.com/i/snippets/sn-chat/avatar.svg" alt="user" width="50" className="rounded-circle" />
                <div className="media-body ml-4">
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">30 Aug</small>
                  </div>
                  <p className="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
              </div>
            </a>

            <a href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
              <div className="media"><img src="https://bootstrapious.com/i/snippets/sn-chat/avatar.svg" alt="user" width="50" className="rounded-circle" />
                <div className="media-body ml-4">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">21 Aug</small>
                  </div>
                  <p className="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
              </div>
            </a>

          </div>
        </div>
        </ul>
        <div className="text-center mt-3">
          <span className="text-primary cursor-pointer">View all Notifications</span>
        </div>
      </div>
    </DropdownButton>
  );
};

export default DropdownMenu;
