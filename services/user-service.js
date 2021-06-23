import { storageService } from "./async-storage.service.js";

const STORAGE_KEY = "userDB";
export const userService = {
  save,
};

function save(user) {
  console.log("user service got =", user);
  return storageService.put(STORAGE_KEY, user);
}
