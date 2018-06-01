import * as React from "react";

interface IDynamicImportProps {
    load: any;
    componentToLoad: any;
}

interface IDynamicImportState {
    component: any;
}

class DynamicImport extends React.Component<IDynamicImportProps, IDynamicImportState> {
    public constructor(props: IDynamicImportProps) {
        super(props);

        this.state = {
            component: null
        }
    }

    public componentDidMount() {
        this.props.load()
            .then((component) => {
                this.setState({
                    component: component.default ? component.default : component
                });
            });
    }

    public render() {
        return this.props.componentToLoad(this.state.component);
    }
}

export default DynamicImport;