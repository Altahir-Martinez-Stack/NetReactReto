class Coin {
  #api;
  constructor() {
    this.#api = {
      getAll: "api/coins/List",
      getById: "api/coins/ListById/",
      created: "",
      updated: "",
    };
  }
  async getAll() {
    try {
      const response = await fetch(this.#api.getAll);
      if (response.ok) {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      return error.message;
    }
  }

  async getById(id) {
    try {
      const response = await fetch(`${this.#api.getById}${id}`);
      if (response.ok) {
        const data = await response.json();
        return `${data.name} - ${data.code}`;
      }

      return id;
    } catch (error) {
      return error.message;
    }
  }
}

export default Coin;
