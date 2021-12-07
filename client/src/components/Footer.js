import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Footer() {
    const [value, setValue] = React.useState(0);

    return (
        <Box className="footer">
            <Typography variant="caption" align="center">
                Questions? Comments? Concerns? Kudos? Visit our{" "}
                <Link
                    href="https://github.com/jessicamcg/project-3"
                    target="_blank"
                >
                    GitHub
                </Link>{" "}
                to let us know!
            </Typography>
        </Box>
    );
}
