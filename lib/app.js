const myElement = React.createElement('p', {}, 'Bla Bla');
const myJSXElement = /*#__PURE__*/React.createElement("p", {
  id: "my-id"
}, "Das ist meine erste JSX Komponente");
ReactDOM.render(myJSXElement, document.getElementById('react-app'));