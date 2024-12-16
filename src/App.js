import './App.css';
import CountUp from './Components/CountUp/CountUp';
import Employee from './Components/Employee/Employee';
import React from 'react';
import ModifiedComponent from './Components/Event/MouseEnter';
import LifeCycle from './Components/Lifecycle/LifeCycle';
import Nav from './Components/Navigation/Nav';
import Hooks from './Components/Incrementer/Hook';
// import MouseEnter from './Components/Event/MouseEnter';
import UnControlledForm from './Components/Forms/UnControlledForm';
import ControlledForm from './Components/Forms/ControlledForm';

// ---> Without JSX
function App() {
  console.log("App.js ");
  
  return React.createElement('div', null,
    React.createElement(ControlledForm,null),
    React.createElement(UnControlledForm,null),
    // React.createElement(LifeCycle,null),
    // React.createElement(Hooks,null),
    // React.createElement(MouseEnter,null),
    // React.createElement(Nav,null),
    // React.createElement(ModifiedComponent,null),
    // React.createElement(CountUp,null),
    // React.createElement(Employee, null),
  );
}

// ----> With JSX
// (
//   <div>
//      <Employee></Employee>
//   </div>
// )

export default App;
