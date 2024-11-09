import Advice from './components/Advice';
import Steps from './components/Steps';
 const messages = [
  "Hello there😃 I'm glad to meet you",
  '👉This is my counter component',
  '🌟🌜Night Work may be good for some peopel!',
];

const App = () => {
  return (
    <div>

      <Steps  items={messages}/>
      </div>
  );
};

export default App;
