import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Controller from '@ember/controller';

export default class HomesController extends Controller {
  @tracked
  address = ""

  @action
  async submitCreateHome(event) {
    event.preventDefault();
    const address = this.address;
    // this is overly protective, but example so ¯\_(ツ)_/¯
    try {
      const home =this.store.createRecord('home', {
        address: this.address
      });
      await home.save();
      alert(`Created a home with name ${this.address}`);
    } catch (e) {
      alert("Failed to create home");
    } finally {
      this.name = "";
    }
  }

  @action
  async destroyHome(home) {
    await home.destroyRecord();
  }
}
