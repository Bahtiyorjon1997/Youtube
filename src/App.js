import './App.css';
import Header from "./components/Header"
import Content from "./components/Content"
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* Header */}
      <SideBar />
      <Content></Content>
      {/* RecommendedVideos */}
    </div >
  );
}

export default App;
