import React from 'react';

const Calendar = () => {
  const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  const renderMonth = (month, year) => {
    const days = daysInMonth(month + 1, year);
    const startDay = new Date(year, month, 1).getDay();
    
    const weeks = [];
    let daysArray = [];

    for (let i = 0; i < startDay; i++) {
      daysArray.push(<div key={`empty-${i}`} className="border p-2"></div>);
    }

    for (let day = 1; day <= days; day++) {
      daysArray.push(
        <div key={day} className="border p-2 text-center">
          {day}
        </div>
      );
      if (daysArray.length === 7) {
        weeks.push(<div key={`week-${month}-${daysArray[0].key}`} className="flex">{daysArray}</div>);
        daysArray = [];
      }
    }

    if (daysArray.length > 0) {
      weeks.push(<div key={`week-${month}-${daysArray[0].key}`} className="flex">{daysArray}</div>);
    }

    return (
      <div className="border border-gray-300 m-2">
        <h2 className="text-center bg-gray-200">{months[month]} {year}</h2>
        {weeks}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {months.map((_, index) => renderMonth(index, 2024))}
    </div>
  );
};

const App = () => {
  return (
    <div className="text-center p-4">
      <h1 className="mb-0">c2024 Ainwik, All Rights Reserved. Designed By</h1>
      <h1>Theme Pure</h1>
      <Calendar />
    </div>
  );
};

export default App;
