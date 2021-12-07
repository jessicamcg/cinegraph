import React from "react";
import Box from "@mui/material/Box";

export default function NoMatch() {
    return (
        <Box>
            <img
                src="https://cdn.discordapp.com/attachments/678404827474296847/917518206296539138/self_portrait.png"
                height="500"
                width="500"
            />
            <h3>Oh no! Wrong turn!</h3>
        </Box>
    );
}
