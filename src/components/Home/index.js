import {Component} from 'react'

import './index.css'

const labTestList = [
  {
    labTestId: 1,
    typeOfCheckUp: 'Basic Full Body Checkup',
    ratingCount: 4.3,
    reviewsCount: 75,
    testCount: 53,
    initialPrice: 10000,
    offerPrice: 8490,
  },
  {
    labTestId: 2,
    typeOfCheckUp: 'Advance Full Body Checkup',
    ratingCount: 4.7,
    reviewsCount: 100,
    testCount: 70,
    initialPrice: 12000,
    offerPrice: 10000,
  },
  {
    labTestId: 3,
    typeOfCheckUp: 'Liver Function Test (LFT)',
    ratingCount: 4.3,
    reviewsCount: 43,
    testCount: 89,
    initialPrice: 13299,
    offerPrice: 11299,
  },
]

class Home extends Component {
  render() {
    return (
      <div className="home-page-container">
        <div className="nabl-certified-and-free-sample-collection-container">
          <div className="nabl-certified-container">
            <img
              src="https://i.ibb.co/dmYCHcY/NABL-lab-logo.jpg"
              alt="NABL-lab-logo"
              className="NABL-lab-logo-image"
            />
            <p className="nabl-certifed-text">NABL Accredited Labs</p>
          </div>
          <div className="free-sample-container">
            <img
              src="https://i.ibb.co/6HPg29D/lab-samples.webp"
              alt="lab-samples"
              className="lab-samples-image"
            />
            <p className="free-sample-collection-text">
              Free sample collection
            </p>
          </div>
        </div>
        <h1 className="we-keep-expanding-heading">
          We keep <span className="expanding-heading"> expanding</span>
        </h1>

        <div className="tabs-list-container">
          <div className="tab-container">
            <p className="each-tab-count">5+</p>
            <p className="each-tab-text">Labs</p>
          </div>
          <div className="tab-container">
            <p className="each-tab-count">100+</p>
            <p className="each-tab-text">Collection Centres</p>
          </div>
          <div className="tab-container">
            <p className="each-tab-count">1000+</p>
            <p className="each-tab-text">Monthly Tests</p>
          </div>
          <div className="tab-container">
            <p className="each-tab-count">2200</p>
            <p className="each-tab-text">Test Menu</p>
          </div>
          <div className="tab-container">
            <p className="each-tab-count">5+</p>
            <p className="each-tab-text">Cities Present in</p>
          </div>
        </div>

        <h1 className="top-packages-heading">
          Top <span className="packages-heading">packages</span>
        </h1>
        <p className="home-page-text">
          Explore our wide range of tests! We ensure that you dont miss out on
          any chance to keep yourself healthy.
        </p>

        <ul className="lab-test-card-list-container">
          {labTestList.map(eachTest => (
            <li key={eachTest.id} className="lab-test-card-container">
              <h1 className="lab-test-card-heading">
                {eachTest.typeOfCheckUp}
              </h1>
              <div className="rating-and-review-container">
                <div className="rating-container">
                  <p className="rating-text">{eachTest.ratingCount}</p>
                </div>
                <div className="review-container">
                  <p className="review-text">
                    ( {eachTest.reviewsCount} Reviews)
                  </p>
                </div>
              </div>
              <p className="lab-test-count">
                Number of Tests: {eachTest.testCount}{' '}
              </p>
              <p className="mrp-price-text">
                MRP:{' '}
                <span className="initial-price-text">
                  ${eachTest.initialPrice}
                </span>{' '}
                <span className="offer-price-text">${eachTest.offerPrice}</span>{' '}
              </p>
              <button type="button" className="book-now-button">
                Book Now
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
