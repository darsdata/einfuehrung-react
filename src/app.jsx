'use strict';

import { Paragraph } from './Paragraph.js';

class App extends React.Component {
    render() {
        return (
            <div>
                <Paragraph text="Das ist Property 1 von aussen!"/>
                <Paragraph text="Das ist Property 2 von aussen!"/>
            </div>
        );
    }
}

const domTarget = document.querySelector('#react-app');
ReactDOM.render(<App />, domTarget);

//ReactDOM.render(
//    myJSXElement,
//    document.getElementById('react-app') 
//);