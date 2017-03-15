/**
 * Created by joe on 16/9/7.
 */

import React from 'react';
import {render} from 'react-dom';
import Dashboard from '../lib/Dashboard';

class Main extends React.Component {
  render () {
    const value = -10;
    const circleWidth = 1;
    const openWidth = 60;
    const statusColor = '#2db7f5';
    const trailColor = '#D9D9D9';
    const prefixCls = 'ant-progress';
    const className = '';

    return <Dashboard
      value={value}
      minValue={-20}
      maxValue={100}
      strokeColor={statusColor}
      trailColor={trailColor}
      prefixCls={prefixCls}
      openWidth={openWidth}
      className={className}
      showInfo
      format={(value, minValue, maxValue)=>value}
    />;
  }
}

render(<Main/>, document.getElementById('app'));
