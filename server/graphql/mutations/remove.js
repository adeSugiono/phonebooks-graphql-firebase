var { GraphQLNonNull, GraphQLString } = require('graphql')
var User = require('../types/user');
var services = require('../../services');

exports.remove = {
  type: User.userType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root, params) {
    return services.deleteUser(params);
  }
}