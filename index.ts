import {StyleMap, Plugin, OptionsMap} from 'visua';

export default class extends Plugin {

    static get options(): OptionsMap {
        // These are the options your users can provide when calling your plugin.
        // See https://visua.io/guide/writing-plugins to know more about options initialization.
        // Remove this method override if your plugin doesn't need any option.
        return {};
    }

    run(styleMap: StyleMap, options: {[key: string]: any}) {
        // This method is the entry point of your plugin
        // called by the CLI `run` command.
        // Use visua's StyleMap API to get variables (https://visua.io/reference/stylemap).
        // If your plugin exports assets and therefore needs to write files
        // see https://nodejs.org/docs/latest/api/fs.html for guidance on the Node.js FileSystem API
    }

}