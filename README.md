# react-dashboard
React Dashboard is a React component which enables display half circle dashboard..

**注意：目前这个组件是基于[Ant Design Progress](https://ant.design/components/progress-cn/)和[rc-progress](https://github.com/react-component/progress)
实现的，已经提交Ant Design，希望他们能进行支持，如果Ant Design支持后，该组件将停止维护，建议直接使用Ant Design**

## install

```
npm install react-dashboard --save
```

## example

```
<Dashboard
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
    />
```

## demo

```
webpack
npm start
```

<style type="text/css">
.ant-progress-circle .ant-progress-inner {
  position: relative;
  line-height: 1;
  background-color: transparent;
}

.ant-progress-inner {
  display: inline-block;
  width: 100%;
  background-color: #f7f7f7;
  border-radius: 100px;
  vertical-align: middle;
}

.ant-progress-circle .ant-progress-inner {
  position: relative;
  line-height: 1;
  background-color: transparent;
}

.ant-progress-circle-trail {
  stroke: #f7f7f7;
}

.ant-progress-circle-path {
  stroke: #108ee9;
}


.ant-progress-circle .ant-progress-text {
  display: block;
  position: absolute;
  width: 100%;
  text-align: center;
  line-height: 1;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  left: 0;
  font-family: tahoma;
  margin: 0;
}

.ant-progress-text {
  width: 35px;
  text-align: left;
  font-size: 1em;
  margin-left: 10px;
  vertical-align: middle;
  display: inline-block;
  position: relative;
  top: -1px;
}
</style>
<div data-reactroot="" class="ant-progress ant-progress-circle ant-progress-status-normal ant-progress-show-info">
  <div class="ant-progress-inner" style="width: 132px; height: 132px; font-size: 27.12px;">
    <svg class="ant-progress-circle " viewBox="0 0 100 100">
      <path class="ant-progress-circle-trail" d="M 50,50 m 0,47
     a 47,47 0 1 1 0,-94
     a 47,47 0 1 1 0,94" stroke="#D9D9D9" stroke-width="6" fill-opacity="0"
            style="stroke-dasharray: 235.31px, 295.31px; stroke-dashoffset: -30px; transition: stroke-dashoffset 0.3s ease 0s, stroke 0.3s ease;"></path>
      <path class="ant-progress-circle-path" d="M 50,50 m 0,47
     a 47,47 0 1 1 0,-94
     a 47,47 0 1 1 0,94" stroke="#2db7f5" stroke-width="6" fill-opacity="0"
            style="stroke-dasharray: 19.6091px, 295.31px; stroke-dashoffset: -30px; transition: stroke-dashoffset 0.3s ease 0s, stroke 0.3s ease;"></path>
    </svg>
    <span class="ant-progress-text">-10°C</span>
  </div>
</div> 
     
## license

MIT
