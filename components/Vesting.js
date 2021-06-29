import React from 'react';

const Vesting = ({ data }) => {
  const item = data.vesting_schedule.map(item => {
    return (
      <tbody>
        <tr>
          <td>{item.vesting_date}</td>
          <td>{item.amount}</td>
          <td>{item.cumulative_amount}</td>
        </tr>
      </tbody>
    );
  });
  return (
    <div>
      <p>{data.issue_date}</p>
      <p>{data.vesting_manager_name}</p>

      <table className="vesting">
        <thead>
          <tr>
            <th>Vesting date</th>
            <th>Shares vesting</th>
            <th>Cumulative shares vested</th>
          </tr>
        </thead>
        {item}
      </table>
    </div>
  );
};

export default Vesting;
