import * as React from "react";
import * as ReactDOM from "react-dom";
import Loadable from "react-loadable";
import { connect } from "react-redux";
import HomeWidget from "./components/widget";
import { setText } from "../../store/text-store/action";
import { IState } from "../../store/";
import { ITextState } from "../../store/text-store/state";
import { ThemeContext } from "../../services/context/theme";

interface IHomePageProps {
    altText: string;
    homePageSetText: ((text: string) => void);
}

type HomePageProps =
    IHomePageProps &
    ITextState;

class HomePage extends React.Component<HomePageProps> {
    public render() {
        console.log(this.props.text);
        return (
            <div>
                Home
                <button onClick={this.newState}>New Text State</button>
                <ThemeContext.Provider value="light">
                    <HomeWidget />
                </ThemeContext.Provider>
            </div>
        );
    }

    public componentDidMount() {
        this.props.homePageSetText("New state");
    }

    private newState = () => {
        this.props.homePageSetText("State Change");
    }
}

const mapStateToProps = (state: IState) => {
    return {
        ...state.stateText
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        homePageSetText: (text) => {
            dispatch(setText(text))
        }
    }
}

const connected = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);

export default connected;
// export default HomePage;