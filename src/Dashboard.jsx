/**
 * Created by joe on 16/9/2.
 */
import React from "react";
import Circle from "./Circle.jsx";

export default class Dashboard extends React.Component {
  render() {
    const {
      prefixCls, className, value = 0, minValue = 100, maxValue = 100,
      status, format, trailColor, strokeColor, openWidth,
      type, strokeWidth, width, showInfo, ...restProps,
    } = this.props;

    const circleSize = this.props.width || 132;
    const circleStyle = {
      width: circleSize,
      height: circleSize,
      fontSize: circleSize * 0.16 + 6,
    };

    const circleWidth = strokeWidth || 6;

    // prefixCls = 'dashboard';
    const textFormatter = format || ((value, minValue, maxValue) => `${(value - minValue) / (maxValue - minValue)}%`);

    let progressInfo;

    if (showInfo) {
      progressInfo = <span className={`${prefixCls}-text`}>{textFormatter(value, minValue, maxValue)}</span>;
    }

    return (
      <div className={`${prefixCls} ${prefixCls}-circle ${prefixCls}-status-normal ${prefixCls}-show-info`}>
        <div className={`${prefixCls}-inner`} style={circleStyle}>
          <Circle
            value={value}
            minValue={minValue}
            maxValue={maxValue}
            strokeWidth={circleWidth}
            trailWidth={circleWidth}
            strokeColor={strokeColor}
            trailColor={trailColor}
            prefixCls={prefixCls}
            openWidth={openWidth}
            className={className}
          />
          {progressInfo}
        </div>
      </div>
    )
  }
}
