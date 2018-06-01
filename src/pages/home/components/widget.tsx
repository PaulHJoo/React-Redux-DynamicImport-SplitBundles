import * as React from "react";
import InnerWidget from "./inner-widget";
import { withTheme } from "../../../services/context/theme/theme-hoc";

class HomeWidget extends React.Component {
    public render() {
        const innerWidget = withTheme(InnerWidget);
        return (
            <div>
                Widget
                {innerWidget}
            </div>
        );
    }
}

export default HomeWidget;