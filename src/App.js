import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <Navbar dark color="primary">
//         <div className="container">
//           <NavbarBrand href="/">
//             Ravioli Rafioli
//           </NavbarBrand>
//         </div>
//       </Navbar>
//       <Menu />
//     </div>
//   );
// }

// export default App;
