import { Link } from "gatsby";
import * as React from "react";
import {ISignupPageProps} from './index';

class Auth extends React.Component<ISignupPageProps> {
    render()
    {
        return (<div>This is the auth page! Click <Link to="/">here</Link> to go back </div>);
    }
}

export default Auth;