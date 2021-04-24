import { Link } from "@reach/router";
import * as React from "react";
import {ISignupPageProps} from './index';

class Profile extends React.Component<ISignupPageProps> {
    render()
    {
        return (<div>This is the profile page! Click <Link to="/">here</Link> to go back </div>);
    }
}

export default Profile;