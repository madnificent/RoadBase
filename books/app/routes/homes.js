import Route from '@ember/routing/route';

export default class HomesRoute extends Route {
  async model() {
    return this.store.findAll('home');
  }
}
