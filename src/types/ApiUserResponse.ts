import { Info } from "./Info";
import { User } from "./User";

//https://randomuser.me/documentation#howto
export type ApiUserResponse = {
  results: User[];
  info: Info;
};