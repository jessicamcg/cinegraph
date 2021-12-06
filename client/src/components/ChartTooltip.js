import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export default function ChartTooltip({ active, payload, label }) {

    const numberCleaner = (number) => {
        const currencyOption = {style:'currency', currency:'USD'}
        const numberFormat = new Intl.NumberFormat('en-US', currencyOption)
        return numberFormat.format(number)
    }
    return payload[0] ? (
        <Card>
            <Typography>{payload[0].payload.name}</Typography>
            <Typography>Box Office: {numberCleaner(payload[0].payload.x)} </Typography>
            <Typography>Rating: {payload[0].payload.y} %</Typography>
        </Card>
    ) : null
}
