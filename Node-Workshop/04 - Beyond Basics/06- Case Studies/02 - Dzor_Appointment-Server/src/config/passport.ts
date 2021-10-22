import _ from "lodash";
import { Request, Response, NextFunction } from "express";

/**
 * Login Required middleware.
 */
export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {

    //ToDo - req header & token validation

    // if (req.isAuthenticated()) {
    //     return next();
    // }
    // res.redirect("/login");
};

/**
 * Authorization Required middleware.
 */
export const isAuthorized = (req: Request, res: Response, next: NextFunction) => {
    //ToDo - Extract role from token and match via path & sailjs - for route - path - role mapping

    // const provider = req.path.split("/").slice(-1)[0];

    // const user = req.user as UserDocument;
    // if (_.find(user.tokens, { kind: provider })) {
    //     next();
    // } else {
    //     res.redirect(`/auth/${provider}`);
    // }
};
