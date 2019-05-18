import "./env";
import schema from "./schema";
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";

const PORT = process.env.PORT || 3456;

const server = new GraphQLServer({
  schema
});

server.express.use(logger("dev"));

const serverStart = () => {
  console.log(`✔️  Facebook Server running on http://localhost:${PORT}`);
};

server.start({ port: PORT }, serverStart);
