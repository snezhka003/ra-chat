import MessageHistory from './Components/MessageHistory';
import messages from './data/messages';
import './App.css';

export default function App() {
  return (
    <div className="clearfix container">
      <div className="chat">
        <div className="chat-history">
          <MessageHistory list={messages} />
        </div>
      </div>  
    </div>
  )
}