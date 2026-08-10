import * as vscode from 'vscode';
import TelemetryReporter, {
    TelemetryEventMeasurements, TelemetryEventProperties
} from '@vscode/extension-telemetry';
import * as utils from './utils';

// No telemetry endpoint is configured in published builds, so nothing is ever
// sent. Set your own Application Insights key here if you build the extension
// yourself and want the events described in telemetry.json.
const instrumentationKey = "";

export let reporter: ExtensionReporter;

export function activate(context: vscode.ExtensionContext) {
    reporter = new ExtensionReporter(context);
    context.subscriptions.push(reporter);
}

export function deactivate() {
    if (!reporter) { return; }
    reporter.dispose();
}

export class ExtensionReporter extends TelemetryReporter {
    constructor(
        context: vscode.ExtensionContext,
        public verbose = false, // true for development; false for production
        public readonly enableTelemetry: boolean = getUserTelemetrySetting(),
    ) {
        const extId = utils.packageJSON.publisher + '.' + utils.packageJSON.name;
        const extVersion = utils.packageJSON.version;
        super(extId, extVersion, instrumentationKey);
    }


    public sendTelemetryEvent(
        eventName: string,
        properties?: TelemetryEventProperties | undefined,
        measurements?: TelemetryEventMeasurements | undefined,
    ) {
        if (!instrumentationKey) { return; }
        if (!this.enableTelemetry) { return; }
        if (this.verbose) {
            console.log(`Telemetry event: ${eventName}`, properties, measurements);
        }
        super.sendTelemetryEvent(eventName, properties, measurements);
    }
}

function getUserTelemetrySetting() {
    const globalTelemetryIsEnabled: (
        "all" | "error" | "crash" | "off" | undefined
    ) = vscode.workspace.getConfiguration('telemetry').get('telemetryLevel');
    if (!(globalTelemetryIsEnabled === "all" || globalTelemetryIsEnabled === undefined)) {
        // our extension only collects "Usage Data", allowed by "all" only
        return false;
    }

    const globalIsTelemetryEnabled: (
        boolean | undefined
    ) = vscode.workspace.getConfiguration('telemetry').get('isTelemetryEnabled');
    if (globalIsTelemetryEnabled === false) { return false; }

    const globalOnDidChangeTelemetryEnabled: (
        boolean | undefined
    ) = vscode.workspace.getConfiguration('telemetry').get('onDidChangeTelemetryEnabled');
    if (globalOnDidChangeTelemetryEnabled === false) { return false; }

    const extensionIsTelemetryEnabled: (
        boolean | undefined
    ) = vscode.workspace.getConfiguration('imageGrid.telemetry').get('isTelemetryEnabled');
    if (extensionIsTelemetryEnabled !== true) { return false; }

    return true;
}
