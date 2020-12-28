import React from 'react';
import ReactDOM from 'react-dom';

export default () => {
    const modal = (
        <section>
            Mobile Action Container
        </section>
    );
    return ReactDOM.createPortal(
        modal,
        document.getElementById('modal')
    );
};
