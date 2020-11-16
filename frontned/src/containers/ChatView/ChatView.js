import React from 'react'
import { Grid, Paper } from '@material-ui/core';
import Sidebar from '../../components/ChatSidebar/Sidebar'
import Chat from '../../components/Chat/Chat'
function ChatView() {
    return (
        <React.Fragment>
            <Paper variant='square'>
                <Grid container alignItems="center">
                    <Grid item xs={12} md={4}>
                        <Sidebar />
                    </Grid>
                    <Grid item xs={12} md={8}>
                          <Chat />
                    </Grid>
                </Grid>
            </Paper>
        </React.Fragment>
    )
}

export default ChatView
