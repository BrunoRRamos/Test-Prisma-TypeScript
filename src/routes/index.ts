import express, { response } from "express";
import { Request, Response } from "express";
import { request } from "http";

const routes = (app: any) => {
    app.route('/').get((req: Request, res: Response) => {
        res.status(200).send({ title: "Batata" })
    });


    app.use(
        express.json(),
    )

}

export default routes;