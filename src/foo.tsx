import * as React from 'react';
import * as cx from 'classnames';
import Goto from './goto';
import { Button } from 'react-bootstrap';
import { IGoto } from './goto';

interface ActionButtonProps {
    icon: string;
    label: string;
    goto?: IGoto;
    onClick?: any;
    color: string;
};

export default class ActionButton extends React.Component<ActionButtonProps, void> {

    render() {
        let goto = this.props.goto;

        let buttonProps;

        if (goto) {
            buttonProps = {
                goto,
                componentClass: Goto
            };
        }
        else {
            buttonProps = {
                onClick: this.props.onClick
            };
        }

        return <Button {...buttonProps} bsStyle={this.props.color || 'default'}>
            <span className={cx('fa', 'fa-fw', this.props.icon || 'hidden')} />
            <span>{this.props.label}</span>
        </Button>;
    }
}
