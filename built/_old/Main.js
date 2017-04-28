import * as express from 'express';
let app = express();
app.on('start', function () {
    console.log('Application ready to serve requests.');
    console.log('Environment: %s', app.get('env:env'));
});
export default app;
//# sourceMappingURL=Main.js.map