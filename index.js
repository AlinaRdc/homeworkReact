console.log("Script running");
("use strict");

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  handleOnClick = () => {
    console.log("clicked");
    this.setState({ liked: true });
  }

  render() {
    if (this.state.liked) {
      return "You liked this.";
    }

    return (
      <button onClick={this.handleOnClick}>
        Like 
      </button>
    );
  }
}

// function Container() {
//   return (
//     <main id="main-container">
//       Container
//       <LikeButton />
//       <Hello></Hello>
//     </main>
//   );
// }

// function Hello() {
//   return <span>Hello</span>;
// }
function Header(){
  return <h2>Section with list</h2>
}

function Section(){
  return <div> 
    <Header/>
    <ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li><LikeButton></LikeButton></li>
</ul>
  </div>
  
}
function App() {
  return (
    <div>
      <h1>Hello to my website</h1>
      <LikeButton></LikeButton>
      <Section/>
      <Section/>
    </div>
  );
}



const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);