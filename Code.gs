/**
 * Allocates IDs for the given keys, which is useful for referencing an entity before it is inserted.
 *
 * @param {Object[]} keys Required. A list of keys with incomplete key paths for which to allocate IDs. No key may be reserved/read-only.
 * @return {Object[]} The keys specified in the request (in the same order), each with its key path completed with a newly allocated ID.
 */
function allocateIds(keys){
  const resp = fetch_(endpoint_('allocateIds',{keys}));
  return resp.keys;
}

/**
 * Begins a new transaction.
 *
 * @param {Object} transactionOptions Options for a new transaction.
 * @return {string} The transaction identifier (always present). A base64-encoded string.
 */
function beginTransaction(transactionOptions){
  const resp = fetch_(endpoint_('beginTransaction',{transactionOptions}));
  return resp.transaction;
}

/**
 * Commits a transaction, optionally creating, deleting or modifying some entities.
 *
 * @param {Object} req See https://cloud.google.com/datastore/docs/reference/data/rest/v1/projects/commit#request-body
 * @return {Object} See https://cloud.google.com/datastore/docs/reference/data/rest/v1/projects/commit#response-body
 */
function commit(req){ return fetch_(endpoint_('commit'),req); }

/**
 * Looks up entities by key.
 *
 * @param {Object} req See https://cloud.google.com/datastore/docs/reference/data/rest/v1/projects/lookup#request-body
 * @return {Object} See https://cloud.google.com/datastore/docs/reference/data/rest/v1/projects/lookup#response-body
 */
function lookup(req){ return fetch_(endpoint_('lookup'),req); }

/**
 * Prevents the supplied keys' IDs from being auto-allocated by Cloud Datastore.
 *
 * @param {Object} req See https://cloud.google.com/datastore/docs/reference/data/rest/v1/projects/reserveIds#request-body
 * @return {void} If successful, the response body is empty.
 */
function reserveIds(req){ return fetch_(endpoint_('reserveIds'),req); }

/**
 * Rolls back a transaction.
 *
 * @param {string} transaction Required. The transaction identifier, returned by a call to Datastore.BeginTransaction. A base64-encoded string.
 * @return {void} If successful, the response body is empty.
 */
function rollback(transaction){ return fetch_(endpoint_('rollback'),{transaction}); }

/**
 * Queries for entities.
 *
 * @param {Object} req See https://cloud.google.com/datastore/docs/reference/data/rest/v1/projects/runQuery#request-body
 * @return {Object} See https://cloud.google.com/datastore/docs/reference/data/rest/v1/projects/runQuery#response-body
 */
function runQuery(req){ return fetch_(endpoint_('runQuery'),req); }
