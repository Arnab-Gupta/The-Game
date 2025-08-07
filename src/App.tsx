import { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

function App() {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const snapshot = await getDocs(collection(db, "messages"));
      const docs = snapshot.docs.map((doc) => doc.data().text);
      setMessages(docs);
    };
    fetchMessages();
  }, []);

  const addMessage = async () => {
    await addDoc(collection(db, "messages"), {
      text: `Message ${Date.now()}`,
    });
  };

  return (
    <div>
      <h1>Firebase + React</h1>
      <button onClick={addMessage}>Add Message</button>
      <ul>
        {messages.map((m, i) => (
          <li key={i}>{m}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
