import API, {ProfileAPI, SettingsData, PasswordData, AvatarData} from '../api/ProfileAPI';
import store from '../utils/Store';
import router from '../utils/Router';


class ProfileController {
  private readonly api: ProfileAPI;

  constructor() {
    this.api = API;
  }

  async settings(data: SettingsData) {
    try {
      await this.api.settings(data);
    } catch (e: any) {
      console.error(e);
    }
  }

  async password(data: PasswordData) {
    try {
      await this.api.password(data);
      alert('пароль успешно сменен')
    } catch (e: any) {
      alert('Не верный пароль')
      console.error(e);
    }
  }

  async avatar(data: AvatarData) {
    try {
      await this.api.avatar(data);
      alert('аватар успешно сменен')
    } catch (e: any) {
      console.error(e);
    }
  }
}

export default new ProfileController();
