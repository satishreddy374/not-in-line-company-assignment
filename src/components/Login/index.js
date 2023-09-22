import './index.css'

const Login = () => (
  <div className="login-page-container">
    <div className="mobile-view-login-heading">
      <h1 className="login-page-right-side-heading">
        <span className="best-in-class-heading">Best in class</span> lab tests!
      </h1>
    </div>
    <div className="mobile-view-login-checkup">
      <p className="mobile-view-checkup-text">Get a Full Body Checkup Now at</p>
      <p className="mobile-view-price-text">
        <span className="intial-price"> $5999</span> $999 70% OFF
      </p>
    </div>
    <div className="left-side-section-container">
      <div className="login-form-container">
        <p className="login-form-text">Fill in the details to get a call! </p>
        <div className="input-details-container">
          <input
            className="input-element"
            type="text"
            placeholder="Full Name"
          />
        </div>
        <div className="input-details-container">
          <input
            className="input-element"
            type="text"
            placeholder="Phone Number"
          />
        </div>
        <div className="input-details-container">
          <input className="input-element" type="text" placeholder="Location" />
        </div>
        <div className="checkbox-container">
          <input id="checkbox" className="checkbox-element" type="checkbox" />
          <label htmlFor="checkbox" className="label-text">
            By continuing, you agree to our{' '}
            <span className="special-label-text">T&C</span> and{' '}
            <span className="special-label-text">privacy policy</span>
          </label>
        </div>
        <button type="button" className="proceed-button">
          Proceed
        </button>
      </div>
      <p className="checkup-price-text">
        Get a Full Body Checkup Now at{' '}
        <span className="price-text">
          <span className="intial-price">$5999</span> $999{' '}
        </span>{' '}
        <span className="percentage-text"> 70% OFF</span>
      </p>
    </div>

    <div className="right-side-section-container">
      <h1 className="login-page-right-side-heading">
        <span className="best-in-class-heading">Best in class</span> lab tests!
      </h1>
      <img
        src="https://i.ibb.co/fv6gyQr/lab-microscope.jpg"
        alt="lab-microscope"
        className="lab-microscope-images"
      />
    </div>
  </div>
)

export default Login
