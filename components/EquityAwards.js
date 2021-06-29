import { useState } from 'react';
import React from 'react';
import VestingHolder from './VestingHolder';
import * as api from './MockAPI.js';

function EquityAwards() {
  const [mockData, setMockData] = useState(api.MOCK_API_RESPONSE);
  const [current, setCurrent] = useState({ active: mockData[0].label });

  return (
    <div className="container">
      <div className="tab">
        {mockData.map((data, index) => {
          return (
            <h2
              className="tabContent"
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
