/**
 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
 *
 * @return {Object} If successful, the response body contains an instance of Operation.
 */
function getOperations() {
  let fetch = UrlFetchApp.fetch(`${ENDPOINT}${this.project_id}/operations`,{
    method: 'get', headers: headers_()
  });
  return JSON.parse(fetch.getContentText());
}

/**
 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
 *
 * @param {Object} query See https://cloud.google.com/datastore/docs/reference/data/rest/v1/projects.operations/list#query-parameters
 * @return {Object} See https://cloud.google.com/datastore/docs/reference/data/rest/v1/projects.operations/list#response-body
 */
function listOperations(query={}){
  const queryString = Object.keys(query).map( k => `${k}=${query[k]}`).join('&');
  let fetch = UrlFetchApp.fetch(`${ENDPOINT}${this.project_id}/operations?${queryString}`,{
    method: 'get', headers: headers_()
  });
  return JSON.parse(fetch.getContentText());
}

/**
 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this
 * method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed
 * despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1
 * corresponding to Code.CANCELLED.
 *
 * @return {void} If successful, the response body is empty.
 */
function cancelOperations(){
  let fetch = UrlFetchApp.fetch(`${ENDPOINT}${this.project_id}/operations:cancel`,{
    method: 'post', headers: headers_()
  });
  return JSON.parse(fetch.getContentText());
}

/**
 * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this
 * method, it returns google.rpc.Code.UNIMPLEMENTED.
 *
 * @return {void} If successful, the response body is empty.
 */
function deleteOperations(){
  let fetch = UrlFetchApp.fetch(`${ENDPOINT}${this.project_id}/operations`,{
    method: 'delete', headers: headers_()
  });
  return JSON.parse(fetch.getContentText());
}
