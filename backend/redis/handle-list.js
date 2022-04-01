module.exports = (list) => {
  return {
    async add(key, valor, expirationDate) {
      await list.set(key, valor);
      await list.expireAt(key, expirationDate);
    },

    async searchValue(key) {
      return await list.get(key);
    },

    async hasKey(key) {
      const keyInList = await list.exists(key);
      return keyInList;
    },

    async delete(key) {
      await list.del(key);
    },

    async connect() {
      await list.connect();
    },
  };
};
