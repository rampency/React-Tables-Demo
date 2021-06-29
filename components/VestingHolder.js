import React from 'react';
import Vesting from './Vesting';
const VestingHolder = ({ data, current }) => {
  const tableStyle = {
    display: current.active == data.label ? '' : 'none'
  };
  return (
    <div style={tableStyle}>
      <Vesting data={data} />
    </div>
  );
};

export default VestingHolder;
