import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';

import {getPosts} from './actions/posts';
import memories from './images/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return(
        <div>
            <nav position="static" color="inherit">
                <h2 align="center">Memories</h2>
                <img src={memories} alt="memories" height="60" />
            </nav>
            <div>
                <div>
                    <Posts />
                </div>
                <div>
                    <Form />
                </div>
            </div>
        </div>
    );
}

export default App;