import React from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from './bll/store';
import {decValueAC, incValueAC} from './bll/counter-reducer';

function App() {

    const value = useSelector<AppStateType, number>(state => state.counter.value)
    const dispatch = useDispatch()


    const incHandler = () => {
        dispatch(incValueAC())
    }
    const decHandler = () => {
        dispatch(decValueAC())
    }

    return (
        <div className="app">
            <div className="app__container">
                <div className="app__box">
                    <span className="app__border"></span>
                    <div className="app__content">
                        <h1 className="app__title">{value}</h1>
                        <div className="app__button-container">
                            <a  className="app__incButton" onClick={incHandler}><span>Increment</span><i></i></a>
                            <a className="app__decButton" onClick={decHandler}><span>Decrement</span><i></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
