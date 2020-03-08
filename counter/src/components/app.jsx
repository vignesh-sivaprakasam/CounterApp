import React, { Component } from 'react';
import NavBar from './navbar';
import Counters from './counters';

class App extends Component {
        render() { 
                return ( 
                        <React.Fragment>
                                <NavBar />
                                <main className="container">
                                        <Counters />
                                </main>
                        </React.Fragment>
                );
        }
}
 
export default App;