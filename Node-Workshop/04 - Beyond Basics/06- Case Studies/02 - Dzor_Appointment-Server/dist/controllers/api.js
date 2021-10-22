"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { UserDocument } from "../models/User";
/**
 * List of API examples.
 * @route GET /api
 */
exports.getApi = (req, res) => {
    res.json({
        title: "API Examples"
    });
};
/**
 * Facebook API example.
 * @route GET /api/facebook
 */
exports.getFacebook = (req, res, next) => {
};
//# sourceMappingURL=api.js.map