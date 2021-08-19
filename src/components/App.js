import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    render() {

        return (
            <div id="main">
                {/* Do not remove the main div */}
                <ol key="relativeList">
                    <li key="relativeListItem1">Aneesh</li>
                    <li key="relativeListItem2">Mithun</li>
                    <li key="relativeListItem3">Nirmal</li>
                </ol>
            </div>
        )
    }
}


export default App;
