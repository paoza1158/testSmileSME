import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="tab-header">
        <div className="row">
          <div className="text-header">
            <span className="text-header-l">SmileSME</span>
          </div>
          <div className="text-header-lr">
            <div>
              <span className="text-top">MR.ADMIN</span>
            </div>
            <div>
              <span className="text-boot">Head Quarter</span>
            </div>
          </div>
        </div>
          <span className="text-right">MENU</span>
      </div>
    );
  }
}

export default Header;
