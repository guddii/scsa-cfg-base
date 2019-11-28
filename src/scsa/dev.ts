import { Application } from "./architecture/Application";
import { Orchestrator } from "./architecture/Orchestrator";
import { System } from "./architecture/System";

export const dev = new System({
    applications: new Map<string, Application>()
        .set(
            "Account",
            new Orchestrator({
                href: new URL("http://localhost:3010/"),
                text: "Account"
            })
        )
        .set(
            "Catalogue",
            new Orchestrator({
                href: new URL("http://localhost:3020/"),
                text: "Catalogue"
            })
        )
        .set(
            "Checkout",
            new Orchestrator({
                href: new URL("http://localhost:3030/"),
                text: "Checkout"
            })
        ),
    orchestrators: new Map<string, Orchestrator>()
        .set(
            "WebComponents",
            new Orchestrator({
                href: new URL("http://localhost:4010/"),
                text: "Web Components"
            })
        )
        .set(
            "iFrame",
            new Orchestrator({
                href: new URL("http://localhost:4020/"),
                text: "iFrame"
            })
        )
        .set(
            "Compoxure",
            new Orchestrator({
                href: new URL("http://localhost:4030/"),
                text: "Compoxure"
            })
        )
});
