import { useState } from 'react';
import React from 'react';
import VestingHolder from './VestingHolder';
import * as api from './MockAPI.js';

function EquityAwards() {
  const [mockData, setMockData] = useState(api.MOCK_API_RESPONSE);
  const [current, setCurrent] = useState({ active: mockData[0].label });

  const onDelete = content => {
    setCurrent({ active: content });
  };
  const messageInfo = {
    color: 'black',
    cursor: 'pointer'
  };
  const tab = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    fontFamily: 'Arial, Helvetica, sans-serif',
    border: ' 1px solid #ddd',
    paddingBottom: '12px'
  };
  return (
    <div className="container">
      <div style={tab}>
        {mockData.map((data, index) => {
          return (
            <h2
              style={messageInfo}
              onClick={() => setCurrent({ active: data.label })}
            >
              {data.label}
            </h2>
          );
        })}
      </div>
      {mockData.map((data, index) => {
        return (
          <VestingHolder
            className={data.label}
            key={index}
            data={data}
            current={current}
          />
        );
      })}
    </div>
  );
}
export default EquityAwards;
