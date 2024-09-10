import { housesService } from "../services/HousesService.js";
import BaseController from "../utils/BaseController.js";


export class HousesController extends BaseController {
  constructor() {
    super('api/houses');
    this.router
      .get('', this.getHouses)
      .get('/:houseId', this.getHouseById)
  }

  async getHouses(request, response, next) {
    try {
      const query = request.query;
      const houses = await housesService.getHouses(query);
      response.send(houses);
    } catch (error) {
      next(error);
    }
  }

  async getHouseById(request, response, next) {
    try {
      const houseId = request.params.houseId;
      const house = await housesService.getHousesById(houseId);
      response.send(house);
    } catch (error) {
      next(error);
    }
  }
}