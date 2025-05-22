import  express  from "express";
import router from "./routes/routes";
import cors from "cors";

const server = express();


server.use(cors());

server.use(express.json());

server.use(express.urlencoded({extended: true}));

server.use(router);

server.listen(4000, () => {
    console.log("servidor rodando na porta 4000");
});