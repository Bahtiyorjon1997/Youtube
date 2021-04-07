import './App.css';
import Header from "./components/Header"
import Content from "./components/Content"
import SideBar from './components/SideBar';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* Header */}
      <ContentWrapper>
        <SideBar />
        <Content />
      </ContentWrapper>

      {/* RecommendedVideos */}
    </div >
  );
}

export default App;

const ContentWrapper = styled.div`
  display: flex;
`