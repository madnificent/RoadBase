import Model, { attr, hasMany } from '@ember-data/model';

export default class HomeModel extends Model {
  @attr() address;
  @hasMany() inhabitants;
}
