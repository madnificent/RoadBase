import Model, { attr, belongsTo } from '@ember-data/model';

export default class InhabitantModel extends Model {
  @attr() name;
  @belongsTo() home;
}
