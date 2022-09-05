import app from "./server";
import { appDataSource } from "./app-data-source";

const port = Number(process.env.PORT || 3000);

appDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialised!")
    })
    .catch((err) => {
        console.error("Error during Postgres initialisation", err)
    });

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
