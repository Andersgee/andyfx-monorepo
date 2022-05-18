import { Request, Response, NextFunction } from "express";

export default async function consoleLogRequest(req: Request, res: Response, next: NextFunction) {
  console.log(req.method, req.path, req.body);
  //console.log("req.headers:", req.headers);
  //console.log("req.cookies:", req.cookies);
  console.log("req.signedCookies:", req.signedCookies);
  next();
}
