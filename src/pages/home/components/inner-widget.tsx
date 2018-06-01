import * as React from "react";
import { ThemeContext } from "../../../services/context/theme";

interface IInnerWidgetProps {
    theme: string;
}

class InnerWidget extends React.Component<IInnerWidgetProps> {
    public render() {
        return (
            <div>
                Inner Widget
                {this.props.theme}
            </div>
        );
    }
}

export default InnerWidget;