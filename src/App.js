import React from 'react';
import {Route,BrowserRouter} from 'react-router-dom';
import {PageHeader} from "./components/PageHeader";
import {PageFooter} from "./components/Footer";
import {BannerArea} from "./components/BannerArea";
import {OpenTime} from "./components/OpenTime";

class App extends React.Component{
  render() {
    return (
        <div>
          <BrowserRouter>
            <PageHeader/>
            <BannerArea/>
            <Route path="/opentime" render={()=><OpenTime/>} />
            <PageFooter/>
          </BrowserRouter>
        </div>
    )
  }
}

export default App;