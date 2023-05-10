import API, { ChatsAPI } from '../api/ChatsAPI';
import store from '../utils/Store';
import MessagesController from './MessagesController';
import Router from '../utils/Router';
import {HomePage} from '../pages/Home';

class ChatsController {
  private readonly api: ChatsAPI;

  constructor() {
    this.api = API;
  }

  async create(title: string) {
    await this.api.create(title);
    await this.fetchChats();
    location.reload();
  }

  async fetchChats() {
    const chats = await this.api.read();

    chats.map(async (chat) => {
      const token = await this.getToken(chat.id);

      await MessagesController.connect(chat.id, token);
    });

    await store.set('chats', chats);
  }

  addUserToChat(id: number, userId: number) {
    this.api.addUsers(id, [userId]);
  }

  deleteUserToChat(id: number, userId: number) {
    this.api.deleteUser(id, [userId]);
  }

  async delete(id: number) {
    await this.api.delete(id);
    await this.fetchChats();
    Router.go('/messenger')
  }

  getToken(id: number) {
    return this.api.getToken(id);
  }

  selectChat(id: number) {
    store.set('selectedChat', id);
  }
}

const controller = new ChatsController();

// @ts-ignore
window.chatsController = controller;

export default controller;
