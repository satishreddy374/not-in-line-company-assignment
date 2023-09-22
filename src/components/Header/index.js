import {Component} from 'react'

import PathItem from '../PathItem'

import './index.css'

const pathLists = [
  {
    pathId: 1,
    value: 'HOME',
    pathText: 'Home',
  },
  {
    pathId: 2,
    value: 'HEALTH_CONDITIONS',
    pathText: 'Health Conditions',
  },
  {
    pathId: 3,
    value: 'LAB_TESTS',
    pathText: 'Lab Tests',
  },
  {
    pathId: 4,
    value: 'MEDICINES',
    pathText: 'Medicines',
  },
]

class Header extends Component {
  state = {activePathId: pathLists[0].pathId, isMobileViewVisible: false}

  onChangePath = pathId => {
    this.setState({activePathId: pathId})
  }

  onClickBurgerMenu = () => {
    this.setState(prevState => ({
      isMobileViewVisible: !prevState.isMobileViewVisible,
    }))
  }

  render() {
    const {activePathId, isMobileViewVisible} = this.state
    return (
      <div className="header-container">
        <div className="desktop-view-container">
          <div className="logo-container">
            <h1 className="logo-title">
              Not<span className="in-text">In</span>Line
            </h1>
          </div>

          <ul className="paths-items-container">
            {pathLists.map(eachPath => (
              <PathItem
                isActive={activePathId === eachPath.pathId}
                onChangePath={this.onChangePath}
                pathDetails={eachPath}
                key={eachPath.pathId}
              />
            ))}
          </ul>

          <div className="buttons-container">
            <button type="button" className="btn">
              For Patients
            </button>
            <button type="button" className="btn">
              For Hospitals
            </button>
          </div>

          <div className="playstore-button-container">
            <button type="button" className="playstore-button">
              Play Store
            </button>
          </div>
        </div>

        <div className="mobile-view-container">
          <div className="logo-and-burger-menu-container">
            <div className="logo-container">
              <h1 className="logo-title">
                Not<span className="in-text">In</span>Line
              </h1>
            </div>
            <button
              type="button"
              onClick={this.onClickBurgerMenu}
              className="burger-menu-button"
            >
              Menu
            </button>
          </div>

          {isMobileViewVisible && (
            <div className="paths-items-and-buttons-container-mobile-view">
              <ul className="paths-items-container">
                {pathLists.map(eachPath => (
                  <PathItem
                    isActive={activePathId === eachPath.pathId}
                    onChangePath={this.onChangePath}
                    pathDetails={eachPath}
                    key={eachPath.pathId}
                  />
                ))}
              </ul>

              <div className="buttons-container">
                <button type="button" className="btn">
                  For Patients
                </button>
                <button type="button" className="btn">
                  For Hospitals
                </button>
              </div>

              <div className="playstore-button-container">
                <button type="button" className="playstore-button">
                  Play Store
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Header
