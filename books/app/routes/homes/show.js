import Route from '@ember/routing/route';

export default class HomesShowRoute extends Route {
  async model({ home_id: id }) {
    return await this.store.findRecord('home', id);
  }
}
