import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect } from "react-redux";
import LoginButton from "./components/login-button";
import { setAltText } from "../../store/alt-text-store/action";
import { IState } from "../../store";
import { IAltTextState } from "../../store/alt-text-store/state";

interface IAboutPageProps {
    text: string;
    aboutPageSetAltText: ((text: string) => void);
}

type AboutPageProps = 
    IAboutPageProps &
    IAltTextState;

class AboutPage extends React.Component<AboutPageProps> {
    public render() {
        // console.log(this.props.altText);
        return (
            <div>
                About
                <LoginButton />
            </div>
        );
    }

    public componentDidMount() {
        this.props.aboutPageSetAltText("New Alt State");
    }
}

const mapStateToProps = (state: IState) => {
    return {
        ...state.stateAltText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        aboutPageSetAltText: (text) => {
            dispatch(setAltText(text))
        }
    }
}

const connected = connect(
    mapStateToProps,
    mapDispatchToProps
)(AboutPage);

export default connected;
