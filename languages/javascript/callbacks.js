function doAsyncTask(cb) {}

doAsyncTask((_) => console.log(message));

let message = "Callback Called";

//handling errors in the application.
const fs = require("fs");

function readFileThenDo(next) {
  fs.readFile("./blah.nofile", { encoding: "utf8" }, (err, data) => {
    if (err) {
      console.log(err);
      next(err);
    } else {
      console.log(data);
    }
    next(data);
  });
}

readFileThenDo((data) => {
  console.log(data);
});
