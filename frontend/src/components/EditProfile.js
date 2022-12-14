import React from 'react'
import Button from "react-bootstrap/Button";

const EditProfile = () => {
  return (
    <div>
        <div className="form">
        <div className="form-body">
          <div className="username">
            <label className="form__label" for="firstName">
              First Name:
            </label>
            <input
              className="form__input"
              type="text"
              id="firstName"
              placeholder="First Name"
            />
          </div>
          <div className="lastname">
            <label className="form__label" for="lastName">
              Last Name:
            </label>
            <input
              type="text"
              name=""
              id="lastName"
              className="form__input"
              placeholder="LastName"
            />
          </div>
          <div className="phone#">
            <label className="form__label" for="lastName">
              Phone number:
            </label>
            <input
              type="text"
              name=""
              id="phone#"
              className="form__input"
              placeholder="Phone #"
            />
          </div>
          <div className="email">
            <label className="form__label" for="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="form__input"
              placeholder="Email"
            />
          </div>
          <div className="password">
            <label className="form__label" for="password">
              Password:
            </label>
            <input
              className="form__input"
              type="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="confirm-password">
            <label className="form__label" for="confirmPassword">
              Confirm Password:
            </label>
            <input
              className="form__input"
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <div class="footer">
          <Button type="submit" class="btn" variant="outline-primary">
            Update Details
          </Button>
        </div>
      </div>
    </div>
  )
}

export default EditProfile