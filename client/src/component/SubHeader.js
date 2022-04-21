import React, { Component } from "react";

class SubHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sub-tab-header">
          <div className="sub-tab-header-text"> o / Business Insight / Report / Member / <span className="hint">Member</span> </div>
      </div>
    );
  }
}

export default SubHeader;
