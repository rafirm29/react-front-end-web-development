import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

export class Header extends Component {
  render() {
    return (
      <>
        <Navbar dark>
          <div className="container">
            <NavbarBrand href="/">Ravioli Rafioli</NavbarBrand>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Ristorante Con Fusion</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsam, vero error repellat veniam ut consectetur dolores,
                  delectus sit sequi aperiam mollitia dignissimos eius. Maiores
                  delectus dolores odit neque est excepturi.
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </>
    );
  }
}

export default Header;
