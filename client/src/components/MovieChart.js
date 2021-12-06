import { ScatterChart, CartesianGrid, XAxis, YAxis, ZAxis, Tooltip, Legend, Scatter, Label } from "recharts";

export default function RenderScatterChart(props) {
    const ratingCleaner = (rating) => {
        let cleanedRating
        if (rating.endsWith("%")) {
            cleanedRating = rating.replace("%", "")
        } else {
            let splitRating = rating.split("/")
            cleanedRating = splitRating[0]
        }
        return parseInt(cleanedRating)
    }
    const boxOfficeCleaner = (boxOffice) => {
        let cleanedBoxOffice
        cleanedBoxOffice = boxOffice.replace("$", "")
        cleanedBoxOffice = cleanedBoxOffice.replaceAll(",", "")
        return parseInt(cleanedBoxOffice)
    }

    const movieArray = props.database.savedMovies
    const graphData = movieArray.map((e) => ({ x: boxOfficeCleaner(e.BoxOffice), y: ratingCleaner(e.Rating), name: e.Title }))

    console.log("graph data:", graphData);
    return (
        <ScatterChart
            width={730}
            height={250}
            margin={{ top: 20, right: 20, bottom: 10, left: 10 }}
        >
            <CartesianGrid strokeDasharray="4" />
            <XAxis dataKey="x" name="Box Office" unit="USD">
                <Label value="Pages of my website" offset={-4} position="insideBottom" />
            </XAxis>
            <YAxis dataKey="y" name="Rotten Tomatoes Score" unit="%">
                <Label value="Ratings" offset={-4} angle={-90} position="insideLeft" />
            </YAxis>
            {/* <ZAxis dataKey="z" range={[64, 144]} name="score" unit="km" /> */}
            <Tooltip cursor={{ strokeDasharray: "4" }} content="banana" />
            <Legend verticalAlign="top" height={36}/>
            <Scatter name="Movies" data={graphData} fill="#8884d8" />
        </ScatterChart>
    );
}
