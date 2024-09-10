import { petsService } from "../services/PetsService.js";
import BaseController from "../utils/BaseController.js";


export class PetsController extends BaseController {
  constructor() {
    super('api/pets');
    this.router
      .get('', this.getPets)
      .get('/:petId', this.getPetById)
  }

  async getPets(request, response, next) {
    try {
      const query = request.query;
      const pets = await petsService.getPets(query);
      response.send(pets);
    } catch (error) {
      next(error);
    }
  }

  async getPetById(request, response, next) {
    try {
      const petId = request.params.petId;
      const pet = await petsService.getPetById(petId);
      response.send(pet);
    } catch (error) {
      next(error);
    }
  }
}