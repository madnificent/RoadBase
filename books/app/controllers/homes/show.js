import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Controller from '@ember/controller';

export default class HomesShowController extends Controller {
  @tracked name = "";

  @service router;

  @action
  async addInhabitant(event) {
    event.preventDefault();
    try {
      const home = this.model;
      const inhabitant =
            this.store.createRecord('inhabitant', {
              name: this.name,
              home
            });
      await inhabitant.save();

      // With hasMany and belongsTo, you may notice the relationship is
      // not updated when you save an item on the wrong side.  If you
      // encounter that, save it on the other side.  It's configurable
      // but you probably don't care for a PoC.

      // Code to save on the other end would look like:
      //
      //     const inhabitants = await home.inhabitants;
      //     inhabitants.pushObject(inhabitant);
      //     await home.save();
      //

      alert("Created new inhabitant");
    } catch(e) {
      alert("Could not create new inhabitant");
    } finally {
      this.name = "";
    }
  }

  @action
  async removeInhabitant(inhabitant) {
    await inhabitant.destroyRecord();
  }
}
