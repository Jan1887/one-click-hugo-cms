import React, { Component } from 'react'

const Image = ({imgPath}) =>
    <div>
      <img src={imgPath} alt="" className="db w4 center pv4" />
    </div>;

export class carousel extends Component {
  render() {
    const { image } = this.props;
    return <div className="ph3 bg-off-white">
      <div className="center mw6 pv3">
        <Image imgPath={image} />
      </div>
    </div>;
  }
}

export default carousel