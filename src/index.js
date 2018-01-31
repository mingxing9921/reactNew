import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  HashRouter
} from "react-router-dom";
import './index.css';
import PCApp from './PCApp';
import registerServiceWorker from './registerServiceWorker';
import MediaQuery from 'react-responsive';
import MobileApp from './mobileApp';
import PCNewsDetails from './component/pc_news_details';
import MobileNewsDetails from './component/mobile_news_details';
import PCUserCenter from './component/pc_usercenter';
import MobileUserCenter from './component/mobile_usercenter';
 class Root extends Component {
    render() {
      return (
        <div>
            <MediaQuery query='(min-device-width:1224px)'>
				<Router>
          	<div>
						<Route exact path="/" component={PCApp}></Route>
						<Route  path="/details/:uniquekey" component={PCNewsDetails}></Route>
                        <Route  path="/usercenter" component={PCUserCenter}></Route>
          	</div>
				</Router>
            </MediaQuery>
            <MediaQuery query='(max-device-width:1224px)'>
				<Router>
					<div>
						<Route exact path="/" component={MobileApp}></Route>
						<Route path="/details/:uniquekey" component={MobileNewsDetails}></Route>
                        <Route path="/usercenter" component={MobileUserCenter}></Route>
					</div>
				</Router>
            </MediaQuery>
        </div>
      );
    }
  };

ReactDOM.render(<Root/>, document.getElementById('root'));
registerServiceWorker();
// https://github.com/sundaypig/blog/issues/2