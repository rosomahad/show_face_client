import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const InputArea = ({ onSubmit }: any) => (
    <Grid container style={{ marginTop: 10 }}>
    <TextField
                label="Your Message"
                style={{ flexGrow: 1 }}
            />
    <Button

        color="primary"
        style={{ margin: 12 }}
       
    >
        Send
</Button>
</Grid>
);

export default InputArea;