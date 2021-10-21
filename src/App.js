import Channelbar from './channelbar';
import ContentContainer from './ContentContain';
import SideBar from './bar';

function App() {
  return (
    <div className="flex">
      <SideBar />
      <Channelbar />
      <ContentContainer />
    </div>
  );
}

export default App;