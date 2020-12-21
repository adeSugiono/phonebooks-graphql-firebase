var { GraphQLNonNull, GraphQLString, GraphQLID } = require('graphql')
var Phonebook = require('../types/phonebook');
var services = require('../../services');

exports.remove = {
  type: Phonebook.phonebookType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params) {
    return services.deletePhonebooks(params);
  }
}