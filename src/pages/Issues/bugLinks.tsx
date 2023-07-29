import React from 'react';
import styled from 'styled-components';
import { Dialog, IconButton } from '@material-ui/core';
import { LaunchOutlined } from '@material-ui/icons';
// Styled Components
const CellElement = styled.div`
    cursor: pointer !important;
    color: blue;
    text-decoration: underline;
`;


const DialogContainer = styled.div`
    width: 30rem;
    height: 30rem;
    background-color: white;
    padding: 20px;
`;

const DialogHeader = styled.div`
    border-bottom: 1px solid #ccc;
    padding: 10px;
    font-weight: bold;
    font-size: 1rem;
`;

// BugLink Class Component which accepts 2 props: href and text
class BugLink extends React.Component<{ href: string, text: string }, { open: boolean }> {

    constructor(props: any) {
        super(props);
        this.state = {
            open: false
        }
    }

    redirectToIssue = () => {
        this.setState({ open: false }, () => window.location.href = this.props.href);
    }

    render() {
        return (
            // <a href={this.props.data.href} target="_blank" rel="noopener noreferrer">{this.props.data.text}</a>
            <React.Fragment>
                <div style={{ color: 'blue', cursor: 'pointer' }} onClick={() => this.setState({ open: true })}>
                    {this.props.text}
                </div>
                <Dialog open={this.state.open} onClose={() => this.setState({ open: false })}>
                    <DialogHeader>
                        Issue: {this.props.text}
                        {/* add open issue icon with link to href */}
                        <IconButton size="small" style={{ alignSelf: 'center', marginLeft: '1rem' }} onClick={() => this.redirectToIssue()}>
                            <LaunchOutlined style={{ width: '1rem' }} />
                        </IconButton>
                    </DialogHeader>

                    <DialogContainer>Issue Content</DialogContainer>
                </Dialog>
            </React.Fragment>
        );
    }
}

export default BugLink;