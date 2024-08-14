"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const error_interceptor_1 = require("./interceptors/error.interceptor");
const exception_filter_1 = require("./filters/exception.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalInterceptors(new error_interceptor_1.ErrorInterceptor);
    app.useGlobalFilters(new exception_filter_1.HttpExceptionFilter);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map