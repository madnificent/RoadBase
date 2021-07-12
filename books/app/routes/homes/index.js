import Route from '@ember/routing/route';

export default class HomesIndexRoute extends Route {
  async model() {
    return this.store.findAll('home');
  }
}
