const doc: ClassDecorator = (
    target: Function
) => {
    console.log("---------------类装饰器---------------")
    target.prototype.name = "mouse";
    console.log(target);
    console.log("---------------类装饰器---------------")
}

@doc
class App {
    constructor() { }
}

const app: Record<string, any> = new App();
console.log("app name:" + app.name)