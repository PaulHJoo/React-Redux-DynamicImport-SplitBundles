import * as React from "react";
import LoginModal from "./login-modal";
import DynamicImport from "../../../components/dynamic-import";

interface ILoginButtonState {
    showModal: boolean;
}

class LoginButton extends React.Component<any, ILoginButtonState> {
    private modal = (props) => (
        <DynamicImport load={this.loginModalDynamicImport}
            componentToLoad={(Component) => Component === null
                ? <p>Loading</p>
                : <Component {...props} />}>
        </DynamicImport>
    );

    public constructor(props) {
        super(props);

        this.state = {
            showModal: false
        }
    }

    public render() {
        const modal = this.state.showModal ? <this.modal /> : null;
        return (
            <div>
                <button onClick={this.handleLoginClick}>Login</button>
                {modal}
            </div>
        );
    }

    private handleLoginClick = () => {
        this.setState((prevState) => ({
            showModal: !prevState.showModal
        }));
    }

    private async loginModalDynamicImport() {
        return await import(/* webpackPrefetch: true, webpackChunkName: "async-loginModal" */ "./login-modal");
    }
}

export default LoginButton;