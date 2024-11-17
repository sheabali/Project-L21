"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
// parsers 
app.use(express_1.default.json());
app.use(express_1.default.text());
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
app.use('/api/v1/user', userRouter);
app.use('/api/v1/courses', courseRouter);
userRouter.get('/create-user', (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "User is Created sucessfully",
        data: user
    });
});
courseRouter.post('/create-course', (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: "course created successfully",
        data: course,
    });
});
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
app.get('/', logger, (req, res) => {
    res.send('Hello developer!!!');
});
// how to get params id 
// app.post('/:userId', (req: Request, res: Response) => {
//   console.log(req.params)
//   res.send({
//     message: "successfully received data"
//   })
// })
// how to find query 
app.post('/', logger, (req, res) => {
    console.log(req.query);
    res.send({
        message: "successfully received data"
    });
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
exports.default = app;
