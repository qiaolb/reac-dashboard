# react-half-circle-dashboard
React Dashboard is a React component which enables display half circle dashboard..

**注意：目前这个组件是基于[Ant Design Progress](https://ant.design/components/progress-cn/)和[rc-progress](https://github.com/react-component/progress)
实现的，已经提交Ant Design，希望他们能进行支持，如果Ant Design支持后，该组件将停止维护，建议直接使用Ant Design**

## install

```
npm install react-half-circle-dashboard --save
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


## license

MIT
