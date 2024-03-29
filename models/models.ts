/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AuthDTO {
  username?: string | null;
  password?: string | null;
}

export interface Home {
  /** @format int32 */
  id?: number;
  uniqueId?: string | null;
  name?: string | null;
  notes?: string | null;
}

export interface HomeDTO {
  /** @format int32 */
  id?: number;
  uniqueId?: string | null;
  name?: string | null;
  notes?: string | null;
  rooms?: RoomDTO[] | null;
  members?: UserHomeDTO[] | null;
}

export interface Role {
  /** @format int32 */
  id?: number;
  name?: string | null;
}

export interface RoomDTO {
  /** @format int32 */
  id?: number;
  name?: string | null;
  /** @format int32 */
  homeId?: number;
  home?: Home;
}

export interface User {
  /** @format int32 */
  id?: number;
  firstName?: string | null;
  lastName?: string | null;
  username?: string | null;
  password?: string | null;
}

export interface UserDTO {
  /** @format int32 */
  id?: number;
  firstName?: string | null;
  lastName?: string | null;
  username?: string | null;
  password?: string | null;
}

export interface UserHomeDTO {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  userId?: number;
  user?: User;
  /** @format int32 */
  homeId?: number;
  home?: Home;
  /** @format int32 */
  roleId?: number;
  role?: Role;
}
