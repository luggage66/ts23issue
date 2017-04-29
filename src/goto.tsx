import * as React from 'react';
// import app from '../app';

export interface IGoto {
    viewModel?: string;
    dialog?: string;
    report?: string;
    args?: any;
    url?: string;
}

export interface GotoProps {
    goto: IGoto;
    title?: string;
    target?: string;
    className?: string;
}

export default class Goto extends React.Component<GotoProps, {}> {

    constructor(props) {
        super(props);

        [
            'handleClick'
        ].forEach(fnName => this[fnName] = this[fnName].bind(this));
    }

    handleClick(event) {
        let { viewModel, dialog, args } = this.props.goto;

        if (dialog) {
            event.preventDefault();
            let fnArgs = [dialog].concat(args);
            // app.openDialog.apply(app, fnArgs);
        }
        else if (viewModel) {
            event.preventDefault();
            // app.goto(viewModel, args);
        }
    }

    render() {

        let { goto, ...otherProps } = this.props;

        let linkProps;

        if (goto.report) {
            linkProps = {
                href: null // app.getReportUrl(goto.report, goto.args)
            };
        }
        else if (goto.dialog) {
            linkProps = {
                href: '#'
            };
        }
        else if (goto.url) {
            linkProps = {
                href: goto.url,
                target: '_blank'
            };
        }
        else {
            linkProps = {
                href: null // app.getUrl(goto)
            };
        }

        return <a onClick={this.handleClick} {...otherProps} {...linkProps} />;
    }
}
