import './App.css';
import CountUp from './Components/CountUp/CountUp';
import Employee from './Components/Employee/Employee';
import React from 'react';
import ModifiedComponent from './Components/Event/MouseEnter';
import LifeCycle from './Components/Lifecycle/LifeCycle';
import Nav from './Components/Navigation/Nav';
// import MouseEnter from './Components/Event/MouseEnter';

// ---> Without JSX
function App() {
  return React.createElement('div', null,
    // React.createElement(MouseEnter,null),
    React.createElement(Nav,null),
    // React.createElement(ModifiedComponent,null),
    // React.createElement(CountUp,null),
    React.createElement(Employee, null),
  );
}

// ----> With JSX
// (
//   <div>
//      <Employee></Employee>
//   </div>
// )

export default App;
