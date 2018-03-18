// name of resolver is identical to the name of the field on Query type (req for graphql-js and graphql-tools)
/**
 * Resolver for feed 
 * @param {*} parent - Contains an initial value for resolver chain 
 * @param {object} args - Contains input arguments for the query
 * @param {object} context - Holds custom data thats passed through the resolver chain
 * @param {*} info - AST of the query and info about where we are in the resolver chain
 */
function feed(parent, args, context, info) {
  // destructure input arguments
  const { filter, first, skip } = args
  const where = filter
    ? { OR: [{ url_contains: filter }, { description_contains: filter }] }
    : {}

  return context.db.query.links({ first, skip, where }, info)
}

module.exports = {
  feed,
}
