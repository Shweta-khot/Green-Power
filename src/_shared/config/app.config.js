/**
 * © 2022 Boston Consulting Group
 * Gamma D
 * Pardeep
 * Created: 2022-09-29
 */

const AppStorageTypes = {
  local: 'localStorage',
  session: 'sessionStorage',
};

const AppKeys = {
  token: 'accessToken',
  storageType: AppStorageTypes.local,
};

const AppUrls = {
  protocol: '',
  baseUrl: `https://carbon-aware-api.azurewebsites.net/emissions/`,
};

/**
 * Application constants
 */
class AppConstants {
  static instance;

  keys = AppKeys;

  urls = AppUrls;

  storageTypes = AppStorageTypes;

  static getInstance() {
    if (!AppConstants.instance) {
      AppConstants.instance = new AppConstants();
    }

    return AppConstants.instance;
  }
}

export default AppConstants.getInstance();
