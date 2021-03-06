const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema");

// setup serving up reacting code with express

const PORT = process.env.PORT || 5645;
const app = express();

app.use(
  "/q",
  graphqlHTTP((req) => ({
    schema,
    context: req.session,
  }))
);

app.listen(PORT, () => {
  console.log(`Running server on port ${PORT}`);
});
