import { dbContext } from "../db/DbContext.js";

class HousesService {


  async getHouses(query) {
    const sortBy = query.sort;
    delete query.sort;

    const houses = await dbContext.Houses.find(query).sort(sortBy + ' createdAt');
    return houses;
  }

  async getHousesById(houseId) {
    const house = await dbContext.Houses.findById(houseId)
    return house;
  }
}

export const housesService = new HousesService();