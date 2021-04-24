import * as React from "react";
import TopBar from "./topbar";
import {ISignupPageProps} from './index';


class Home extends React.Component<ISignupPageProps> {
    render()
    {
        return (<TopBar/>);
    }
}

export default Home;