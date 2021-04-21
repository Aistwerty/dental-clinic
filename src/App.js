import React from 'react';
import {Route,BrowserRouter} from 'react-router-dom';
import {PageHeader} from "./components/PageHeader";
import {PageFooter} from "./components/Footer";
import {MainPage} from "./pagescomponents/MainPage";
import {ContactsPage} from "./pagescomponents/ContactsPage";
import {AboutUsPage} from "./pagescomponents/AboutUsPage";
import {DentalServicesPage} from "./pagescomponents/DentalServicesPage";
import {OpenTimePage} from "./pagescomponents/OpenTimePage";
import {ElseServicesPage} from "./pagescomponents/ElseServicesPage";
import {FeedBackPage} from "./pagescomponents/FeedBackPage";

class App extends React.Component{
  render() {
    return (
        <div>
          <BrowserRouter>
            <PageHeader/>
            <Route exact path="/" render={()=><MainPage/>} />
            <Route exact path="/opentime" render={()=><OpenTimePage/>} />
            <Route exact path="/contacts" render={()=><ContactsPage/>} />
            <Route exact path="/aboutus" render={()=><AboutUsPage/>} />
            <Route exact path="/dentalservice" render={()=><DentalServicesPage/>} />
            <Route exact path="/elseservice" render={()=><ElseServicesPage/>} />
            <Route exact path="/clientfeedback" render={()=><FeedBackPage/>} />
             <div className="container py-5"></div>
            <PageFooter/>
          </BrowserRouter>
        </div>
    )
  }
}

export default App;