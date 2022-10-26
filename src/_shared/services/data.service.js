/**
 * © 2022 Boston Consulting Group
 * Gamma D
 * Pardeep
 * Created: 2022-09-29
 */
import networkService from "./network.service";
import appConstants from "../config/app.config";

 class DataService {
   static _instance;
   // eslint-disable-next-line no-useless-constructor
   constructor() {}

   static getInstance() {
     if (!DataService._instance) {
        DataService._instance = new DataService();
     }
     return DataService._instance;
   }

   getModelOutputsList() {
      return networkService.get(`${appConstants.urls.baseUrl}forecast/get_models_output_list`)
    }

    getModelOutputData(queryParams) {
      return networkService.get(`${appConstants.urls.baseUrl}forecast/get_model_output_data`, queryParams)
    }

    getModelFilterList(forecast_id) {
      return networkService.get(`${appConstants.urls.baseUrl}forecast/get_model_output_filter_data`, {forecast_id:forecast_id})
    }
}

 export default DataService.getInstance();
