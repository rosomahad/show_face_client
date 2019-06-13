import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';


export default function ElevateAppBar(props: any) {
    return (
        <React.Fragment>

            <Toolbar />

            <Container>
                <Box my={2}>
                    {[...new Array(3)]
                        .map(
                            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                        )
                        .join('\n')}
                </Box>
            </Container>
        </React.Fragment>
    );
}