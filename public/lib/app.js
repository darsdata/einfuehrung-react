'use strict';

import { Paragraph } from './Paragraph.js';
class App extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Paragraph, {
      text: "Das ist Property 1 von aussen!"
    }), /*#__PURE__*/React.createElement(Paragraph, {
      text: "Das ist Property 2 von aussen!"
    }));
  }
}
const domTarget = document.querySelector('#react-app');
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), domTarget);

//ReactDOM.render(
//    myJSXElement,
//    document.getElementById('react-app') 
//);