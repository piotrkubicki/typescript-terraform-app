import express from "express";
import { Request, Response } from "express";
import { appDataSource } from "./app-data-source";
import { Member } from "./entities/member";

const app = express();
app.use(express.json());

app.use("/members", async (req: Request, res: Response) => {
    const members = await appDataSource.getRepository(Member).find();
    res.json(members);
});

app.post("/member", async (req: Request, res: Response) => {
    const member = await appDataSource.getRepository(Member).create({
        firstName: "Pan",
        lastName: "Jan"
    });
    const result = await appDataSource.getRepository(Member).save(member);
    return res.send(result);
});

export default app;
