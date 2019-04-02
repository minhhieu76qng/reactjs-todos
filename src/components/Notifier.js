import React, { Component } from 'react';
import { Alert } from 'react-bs-notifier';

class Notifier extends Component {
    dismissAlert = () => {
        this.props.getAlert(null);
    }
    render() {
        let { type, headline, message } = this.props.alert;
        return (
            <Alert type={type} headline={headline} onDismiss={() => this.dismissAlert()} timeout={2000}>
                {message}
            </Alert>
        );
    }
}

export default Notifier;