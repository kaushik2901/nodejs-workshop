"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Login Required middleware.
 */
exports.isAuthenticated = (req, res, next) => {
    //ToDo - req header & token validation
    // if (req.isAuthenticated()) {
    //     return next();
    // }
    // res.redirect("/login");
};
/**
 * Authorization Required middleware.
 */
exports.isAuthorized = (req, res, next) => {
    //ToDo - Extract role from token and match via path & sailjs - for route - path - role mapping
    // const provider = req.path.split("/").slice(-1)[0];
    // const user = req.user as UserDocument;
    // if (_.find(user.tokens, { kind: provider })) {
    //     next();
    // } else {
    //     res.redirect(`/auth/${provider}`);
    // }
};
//# sourceMappingURL=passport.js.map