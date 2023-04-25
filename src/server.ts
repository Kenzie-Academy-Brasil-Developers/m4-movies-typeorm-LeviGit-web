import app from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("Database is connected");

    const PORT: number = 3000;
    const runningMsg = `Server running on http://localhost:${PORT}`;

    app.listen(PORT, () => {
      console.log(runningMsg);
    });
  })
  .catch((err) => {
    console.log(err);
  });
