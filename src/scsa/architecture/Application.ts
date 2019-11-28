export interface IApplicationOptions {
    text: string;
    href?: URL;
}

export class Application {

    public readonly options: IApplicationOptions;

    constructor(options: IApplicationOptions) {
        this.options = options;
    }

}