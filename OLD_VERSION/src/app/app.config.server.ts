//src/app/app.config.server.ts
import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

// Create a server-specific configuration with the providers array
export const serverConfig: ApplicationConfig = {
    providers: [
        provideServerRendering(),
        // other server-specific providers
    ],
};

// Wrap the appConfig in an ApplicationConfig object
export const fullAppConfig: ApplicationConfig = {
    providers: appConfig,
};

// Merge the fullAppConfig and serverConfig into a single config
export const config = mergeApplicationConfig(fullAppConfig, serverConfig);
