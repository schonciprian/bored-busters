import React, { Component } from "react";
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import { SliderRail, Handle, Track, Tick } from "./SlideBarComponents";

const sliderStyle = {
  position: "relative",
  width: "65%",
};

const defaultValues = [0, 5000];

class SearchByCost extends Component {
  state = {
    domain: [0, 10000],
    values: defaultValues.slice(),
    update: defaultValues.slice(),
    reversed: false,
  };

  onChange = (values) => {
    this.setState({ values });
    console.log(values);
  };

  setDomain = (domain) => {
    this.setState({ domain });
  };

  toggleReverse = () => {
    this.setState((prev) => ({ reversed: !prev.reversed }));
  };

  render() {
    const {
      state: { domain, values, reversed },
    } = this;

    return (
      <div style={{ height: 150, width: "100%" }}>
        <Slider
          mode={2}
          step={1000}
          domain={domain}
          reversed={reversed}
          rootStyle={sliderStyle}
          onChange={this.onChange}
          values={values}
        >
          <Rail>
            {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
          </Rail>
          <Handles>
            {({ handles, getHandleProps }) => (
              <div className="slider-handles">
                {handles.map((handle) => (
                  <Handle
                    key={handle.id}
                    handle={handle}
                    domain={domain}
                    getHandleProps={getHandleProps}
                  />
                ))}
              </div>
            )}
          </Handles>
          <Tracks left={false} right={false}>
            {({ tracks, getTrackProps }) => (
              <div className="slider-tracks">
                {tracks.map(({ id, source, target }) => (
                  <Track
                    key={id}
                    source={source}
                    target={target}
                    getTrackProps={getTrackProps}
                  />
                ))}
              </div>
            )}
          </Tracks>
          <Ticks count={10}>
            {({ ticks }) => (
              <div className="slider-ticks">
                {ticks.map((tick) => (
                  <Tick key={tick.id} tick={tick} count={ticks.length} />
                ))}
              </div>
            )}
          </Ticks>
        </Slider>
      </div>
    );
  }
}

export default SearchByCost;
