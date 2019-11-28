import { Application } from "./Application";
import { Orchestrator } from "./Orchestrator";

export interface ISCSAConfigurationOptions {
    applications: Map<string, Application>;
    orchestrators: Map<string, Orchestrator>;
}

export class System {
    public readonly options: ISCSAConfigurationOptions;

    constructor(options: ISCSAConfigurationOptions) {
        this.options = options;
    }
}
