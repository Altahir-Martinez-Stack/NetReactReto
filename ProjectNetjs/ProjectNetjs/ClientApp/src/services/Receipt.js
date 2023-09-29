/**
 * service ReceiptService
 *
 **/

import Coin from "./Coin";
import DocumentType from "./DocumentType";

class Receipt {
  #apis;
  #documentType;
  #coin;
  constructor() {
    this.#documentType = new DocumentType();
    this.#coin = new Coin();
    this.#apis = {
      getall: "api/receipt/List",
      created: "api/receipt/Save",
      updated: "api/receipt/Update",
      deleted: "api/receipt/Delete/",
    };
  }

  async getAll() {
    try {
      const response = await fetch(this.#apis.getall);
      if (response.ok) {
        const data = await response.json();
        const convert = data.map(async (res) => {
          const idCoins = await this.#coin.getById(res.idCoins);
          const idDocumentType = await this.#documentType.getById(
            res.idDocumentType
          );

          return {
            ...res,
            idCoinsText: idCoins,
            idDocumentTypeText: idDocumentType,
          };
        });
        const result = await Promise.all(convert);
        return result;
      } else {
        console.error("Error getReceipt");
      }
    } catch (error) {
      return error.message;
    }
  }

  async created(receipt) {
    try {
      if (
        receipt.idCoins !== null ||
        receipt.amount !== null ||
        receipt.idDocumentType !== null ||
        receipt.idCoins !== null
      ) {
        const response = await fetch(this.#apis.created, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(receipt),
        });
        if (response.ok) return response;
      }
    } catch (error) {
      return error.message;
    }
  }

  async updated(receipt, callback) {
    try {
      const response = await fetch(this.#apis.updated, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(receipt),
      });
      if (response.ok) {
        callback();
      } else {
        console.error("Error updateReceipt");
      }
    } catch (error) {
      return error.message;
    }
  }

  async deleted(id, callback) {
    try {
      const response = await fetch(this.#apis.deleted + id, {
        method: "DELETE",
      });
      if (response.ok) {
        callback();
      } else {
        console.log("Error deleteReceipt");
      }
    } catch (error) {
      return error.message;
    }
  }
}

export default Receipt;
