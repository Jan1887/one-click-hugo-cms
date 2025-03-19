import React, { Component } from 'react'

const CarouselEntry = ({imgPath}) =>
    <div>
      <img src={imgPath} alt="" className="db w4 center pv4" />
    </div>;

const CarouselEntries = ({data}) =>
    (data && data.length > 0
      ? <div className="flex-ns mb3">
        {// eslint-disable-next-line react/jsx-key
          data.map(({imgPath}) => <CarouselEntry imgPath={imgPath} />)}
      </div>
      : "");

export class carousel extends Component {
  render() {
    const {entry, getAsset, widgetFor} = this.props;
    const entryCarouselEntries = entry.getIn(["data", "carousel_entries"]);
    const carouselEntries = entryCarouselEntries ? entryCarouselEntries.toJS() : [];
    return <div className="ph3 bg-off-white">
      <div className="center mw6 pv3">
        { widgetFor("body") }
        <ContactEntries data={contactEntries} />
      </div>
    </div>;
  }
}

export default carousel