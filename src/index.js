import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';
import {Router, Route, hashHistory} from 'react-router';
import Home from './components/home';
import Movie from './components/movie';
import Login from './components/login';
import Movies from './components/movies';
import Series from './components/series';
import Serie from './components/serie';
import Category_Movie from './components/category';
import Category_Serie from './components/category';
import About from './components/about'

const store = createStore(allReducers);

ReactDOM.render(
    <Provider store = {store}>
        <Router history={hashHistory}>
            <Route path="/" component={Home} />
            <Route path="/category_mov" component={Category_Movie} />
            <Route path="/movie" component={Movie} />
            <Route path="/login" component={Login} />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series}/>
            <Route path="/serie" component={Serie}/>
            <Route path="/category_ser" component={Category_Serie}/>
            <Route path="/about" component={About}/>

        </Router>
    </Provider>
    , document.getElementById('root'));
