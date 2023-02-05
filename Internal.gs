/**
 * Get endpoint with project id
 *
 * @return {string} Endpoint to fetch
 */
const endpoint_ = (method) => {
  if( !this.project_id ){ throw 'Please init your project'};
  return ENDPOINT.concat(this.project_id).concat(`:${method}`);
}

/**
 * Standard headers
 *
 * @return {Object} Headers with token and accept
 */
const headers_ = () => {
  if( !this.token ){ throw 'Please initialize this API with your Oauth token'; }
  return {
    Authorization: 'Bearer: '.concat(this.token),
    Accept: 'application/json'
  }
}

/**
 * Fetch the api
 *
 * @param {string} url URL to fetch
 * @param {Object} payload Payload to send
 * @return {Object} Parsed response
 */
const fetch_ = (url,payload) => {
  if( !this.token ){ throw 'Please init this API with your Oauth token'; }
  let fetch = UrlFetchApp.fetch(url,{
    method: 'post', contentType: 'application/json', headers: headers_(), payload
  });
  return JSON.parse(fetch.getContentText());
}
