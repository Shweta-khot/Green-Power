/**
 * © 2022 Boston Consulting Group
 * Gamma D
 * Pardeep
 * Created: 2022-09-29
 */

import axios from 'axios';


const options = {};

class NetworkService {
  static instance;

  static getInstance() {
    if (!NetworkService.instance) {
      NetworkService.instance = new NetworkService();
    }
    return NetworkService.instance;
  }

  get(url, params = null, config = {}) {
    const axiosConfig = NetworkService.prepareRequest(url, config);
    axiosConfig.method = 'GET';
    if (params !== null) {
      axiosConfig.params = params;
    }
    return this.getResponse(axiosConfig);
  }

  post(url, data, config = options) {
    const axiosConfig = this.prepareRequest(url, config);
    axiosConfig.method = 'POST';
    axiosConfig.data = data;
    return this.getResponse(axiosConfig);
  }

  put(url, data, config = {}) {
    const axiosConfig = this.prepareRequest(url, config);
    axiosConfig.method = 'PUT';
    axiosConfig.data = data;
    return this.getResponse(axiosConfig);
  }

  delete(url, params = null, config = {}) {
    const axiosConfig = this.prepareRequest(url, config);
    axiosConfig.method = 'DELETE';
    if (params !== null) {
      axiosConfig.params = params;
    }
    return this.getResponse(axiosConfig);
  }

  static prepareRequest(url, config) {
    const axiosConfig = {
      url,
      headers: {},
      ...config,
    };
    return axiosConfig;
  }

  getResponse(config) {
    return axios(config)
      .then((response) => {
        return response.data;
      })
      .catch((axiosError) => {
        // handle the response error
        const error = this.parseError(axiosError);
        let errorMessage = error.message;
        if (errorMessage.message) {
          errorMessage = errorMessage.message;
        }
        return Promise.reject(error);
      });
  }

  static parseError(error) {
    let response = {
      status: null,
      message: error.message,
    };

    if (error.response) {
      /*
       * The request was made and the server responded with a
       * status code that falls out of the range of 2xx
       */
      response = {
        status: error.response.status,
        message: error.response.data.error ? error.response.data.error : error.message,
      };
    } else if (error.request) {
      /*
       * The request was made but no response was received, `error.request`
       * is an instance of XMLHttpRequest in the browser and an instance
       */
      response = {
        status: null,
        message: error.message,
      };
    }
    return response;
  }
}

export default NetworkService.getInstance();
