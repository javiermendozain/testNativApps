import React from 'react' 
import {BrowserRouter, Route, Switch} from 'react-router-dom' 
import Home from '../pages/components/Home/Home'
import NotFound from '../pages/components/NotFount/NotFound'

import Layout from '../global/components/layout/Layout/Layout'
import Services from '../pages/container/Services/Services';

const AppRoutes = () =>   
    <BrowserRouter> 
        <Layout>
            <Switch> 
                <Route exact path="/" component={Home} /> 
                <Route exact path="/services" component={Services}/>
                <Route exact component={NotFound}/> 
            </Switch>
        </Layout>             
    </BrowserRouter> 
     
export default AppRoutes; 