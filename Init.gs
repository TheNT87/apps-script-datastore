const ENDPOINT = 'https://datastore.googleapis.com/v1/projects/';

/**
 * Init the API
 *
 * @param {string} project_id Set the project id
 * @param {string} token Oauth token
 * @return {Object} returns this
 */
function init(project_id,token) {
  this.project_id = project_id;
  this.token = token;
  return this;
}
