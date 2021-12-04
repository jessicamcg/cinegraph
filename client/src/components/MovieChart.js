import { ScatterChart, CartesianGrid, XAxis, YAxis, ZAxis, Tooltip, Legend, Scatter} from "recharts";

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
    const graphData = movieArray.map((e) => ({x:boxOfficeCleaner(e.BoxOffice), y:ratingCleaner(e.Rating), name:e.Title}))
    console.log("graph data:", graphData);
    return (
        <ScatterChart
            width={730}
            height={250}
            margin={{ top: 20, right: 20, bottom: 10, left: 10 }}
        >
            <CartesianGrid strokeDasharray="4" />
            <XAxis dataKey="x" name="Box Office" unit="USD" />
            <YAxis dataKey="y" name="Rotten Tomatoes Score" unit="%" />
            {/* <ZAxis dataKey="z" range={[64, 144]} name="score" unit="km" /> */}
            <Tooltip cursor={{ strokeDasharray: "4" }} content="banana"/>
            <Legend />
            <Scatter name="Movies" data={graphData} fill="#8884d8" />
        </ScatterChart>
    );
}
