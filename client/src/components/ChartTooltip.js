import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export default function ChartTooltip({ active, payload, label }) {
    console.log("active:", active,"payload:", payload,"label:", label)
    return payload[0] ? (
        <Card>
            <Typography>{payload[0].payload.name}</Typography>
            <Typography>Box Office: {payload[0].payload.x} </Typography>
            <Typography>Rotten Tomatoes Rating: {payload[0].payload.y} %</Typography>
        </Card>
    ) : null
}
