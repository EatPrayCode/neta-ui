const packageJson = require('../../../../package.json');

export const environment = {
  appName: 'NetaConnect',
  envName: 'PROD',
  production: true,
  test: false,
  i18nPrefix: '',
  versions: {
    app: packageJson.version,
    angular: packageJson.dependencies['@angular/core'],
    ngrx: packageJson.dependencies['@ngrx/store'],
    material: packageJson.dependencies['@angular/material'],
    bootstrap: packageJson.dependencies.bootstrap,
    rxjs: packageJson.dependencies.rxjs,
    ngxtranslate: packageJson.dependencies['@ngx-translate/core'],
    fontAwesome:
      packageJson.dependencies['@fortawesome/fontawesome-free-webfonts'],
    angularCli: packageJson.devDependencies['@angular/cli'],
    typescript: packageJson.devDependencies['typescript'],
    cypress: packageJson.devDependencies['cypress']
  },
  auth: {
    clientID: 'QVFvgf7IRxwuZDqWpm7U5te8Xhz4nZDg',
    domain: 'dev-4wy2-wyo.auth0.com', // e.g., you.auth0.com
    redirect: 'https://www.netaconnect.com/callback',
    scope: 'openid profile email'
  }
};
