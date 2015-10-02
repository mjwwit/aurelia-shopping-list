export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .globalResources('css-class/css-class');

    aurelia.start().then(a => a.setRoot());
}
