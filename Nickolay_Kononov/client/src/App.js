import React, {Component} from 'react';
import {Route, BrowserRouter} from 'react-router-dom'
import Home from './components/layouts/Home';
import Contacts from './components/layouts/Contacts';
import Layout from './components/layouts/Layout';
import store from './store/store';
import { Provider } from 'react-redux';
import ServiceDescription from "./components/containers/ServiceDescription";
import ServiceSubmit from './components/containers/ServiceSubmit';
import Authentication from './components/containers/Authentication';
import ProfileDetails from "./components/containers/ProfileDetails";


class App extends Component {
    render() {
        return (
            <div className="container">
            <Provider store={store}>
                <BrowserRouter>
                    <Layout>
                        <Route exact path="/" component={Home} />
                        <Route path="/contacts" component={Contacts} />
                        <Route path='/services/:id' component={ServiceDescription}/>
                        <Route path={'/submit'} component={ServiceSubmit}/>
                        <Route path={'/login'} component={Authentication}/>
                        <Route path={'/user/profile'} component={ProfileDetails} />
                    </Layout>
                </BrowserRouter>
            </Provider>
            </div>
        );
    }
}

export default App;