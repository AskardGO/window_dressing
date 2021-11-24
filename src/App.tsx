import React, {useState} from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import {Notification} from "./components/ToastrMessages/Notification";
import { NotificationContext } from './components/ToastrMessages/NotificationContext';


function App() {

    const [messages, setMessages] = useState<any>([])

    return (
        <div className="App">
            <NotificationContext.Provider value={{messages, setMessages}}>
                <Navigation/>
                <Notification/>
            </NotificationContext.Provider>
        </div>
    );
}

export default App;
