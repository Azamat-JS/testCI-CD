"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const session = require("express-session");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(session({
        secret: '764d3846e4a8dd0154d34314ec0aa60698ad336e9798a6b41c6008c0ef0ddcad',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 60000,
            httpOnly: true,
            secure: false,
        }
    }));
    await app.listen(3000, () => {
        console.log('server is running on port:3000');
    });
}
bootstrap();
//# sourceMappingURL=main.js.map