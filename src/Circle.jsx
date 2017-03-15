/**
 * Created by joe on 2017/3/14.
 */
import React from "react";

export default class Circle extends React.Component {
  render() {
    const {
      prefixCls, strokeWidth, trailWidth, strokeColor,
      trailColor, strokeLinecap, value, minValue, maxValue, style, className, openWidth,
      ...restProps
    } = this.props;

    const radius = (50 - strokeWidth / 2);
    const pathString = `M 50,50 m 0,${radius}
     a ${radius},${radius} 0 1 1 0,-${2 * radius}
     a ${radius},${radius} 0 1 1 0,${2 * radius}`;

    const len = Math.PI * 2 * radius;

    const trailPathStyle = {
      strokeDasharray: `${len - openWidth}px ${len}px`,
      strokeDashoffset: `-${openWidth / 2}px`,
      transition: 'stroke-dashoffset 0.3s ease 0s, stroke 0.3s ease',
    };
    const strokePathStyle = {
      strokeDasharray: `${(value - minValue) / (maxValue - minValue) * (len - openWidth)}px ${len}px`,
      strokeDashoffset: `-${openWidth / 2}px`,
      transition: 'stroke-dashoffset 0.3s ease 0s, stroke 0.3s ease',
    };

    return (
      <svg
        className={`${prefixCls}-circle ${className}`}
        viewBox="0 0 100 100"
        style={style}
        {...restProps}
      >
        <path
          className={`${prefixCls}-circle-trail`}
          d={pathString}
          stroke={trailColor}
          strokeWidth={trailWidth || strokeWidth}
          fillOpacity="0"
          style={trailPathStyle}
        />
        <path
          className={`${prefixCls}-circle-path`}
          d={pathString}
          strokeLinecap={strokeLinecap}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          fillOpacity="0"
          ref={(path) => {
            this.path = path;
          }}
          style={strokePathStyle}
        />
      </svg>
    );
  }
}
