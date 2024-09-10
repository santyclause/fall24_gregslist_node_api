import { dbContext } from "../db/DbContext.js";

class PetsService {


  async getPets(query) {
    const sortBy = query.sort;
    delete query.sort;

    const searchBy = query.search;
    delete query.search;

    if (searchBy) {
      query.likes = { $regex: new RegExp(searchBy, 'ig') }
    }

    const pets = await dbContext.Pets.find(query).sort(sortBy + ' createdAt').populate('creator');
    return pets;
  }

  async getPetById(petId) {
    const pet = (await dbContext.Pets.findById(petId)).populate('creator');
    return pet;
  }
}

export const petsService = new PetsService()