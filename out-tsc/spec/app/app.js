export class App {
    constructor(http) {
        this.http = http;
    }
    static init(http) {
        App.instance = new App(http);
    }
}
//# sourceMappingURL=app.js.map