import * as React from 'react';
import * as cx from 'classnames';

export default class FooComponent extends React.Component<any, void> {

    render() {
        // with this line, it'll include the 'classnames' lib
        // let buttonProps: object;

        // with this line, it will not
        let buttonProps; // any

        buttonProps = {
            onClick: () => undefined
        };

        return <button {...buttonProps}>
            <span className={cx('class1', { class2: true })} />
        </button>;
    }
}
