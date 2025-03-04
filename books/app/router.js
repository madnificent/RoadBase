import EmberRouter from '@ember/routing/router';
import config from 'books/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('book');
  this.route('homes', function () {
    this.route('show', { path: '/:home_id/' });
  });
});
