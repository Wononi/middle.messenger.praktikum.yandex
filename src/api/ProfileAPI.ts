import BaseAPI from './BaseAPI';

export interface SettingsData {
  first_name: string,
  second_name: string,
  display_name: string,
  login: string,
  email: string,
  phone: string
}

export interface PasswordData {
  oldPassword: string,
  newPassword: string
}


export class ProfileAPI extends BaseAPI {
  constructor() {
    super('/user');
  }

  settings(data: SettingsData) {
    return this.http.put('/profile', data)
  }

  password(data: PasswordData) {
    return this.http.put('/password', data)
  }

  avatar(data: any) {
    return this.http.put('/profile/avatar', data)
  }

  create = undefined;
  update = undefined;
  delete = undefined;
  read = undefined;
}

export default new ProfileAPI()
