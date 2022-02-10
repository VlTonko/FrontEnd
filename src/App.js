import React, {useContext} from 'react';
import './App.css';
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import Main from "./components/Main/Main";

const App = () => {
        return (
            <>
                <Routes>
                    <Route path='/news' element={<Main />}/>
                    <Route path="/news/:id" element={<MoviePage />}/>
                    <Route path='/' element={<SingIn />}/>
                    <Route path='*' element={<NotPage />}/>
                </Routes>


                {/*{ login && <Notification message={notification.message} type={notification.type} />}*/}
                <div className="wrapper">
                    <Form />
                </div>

            </>
        );
}

export default App;
