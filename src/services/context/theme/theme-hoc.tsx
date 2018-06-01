import * as React from "react";
import { ThemeContext } from "./index";

export function withTheme(Component) {
    return (
        <ThemeContext.Consumer>
            {theme =>
                <Component theme={theme} />
            }
        </ThemeContext.Consumer>
    );
}