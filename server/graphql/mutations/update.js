var { GraphQLNonNull, GraphQLString } = require('graphql');
var Phonebook = require('../types/phonebook');
var services = require('../../services');

exports.update = {
  type: Phonebook.phonebookType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    phone: {
      type: new GraphQLNonNull(GraphQLString),
    }
  },
  resolve(root, params) {
    return services.updatePhonebooks(params)
  }
}