var { GraphQLObjectType, GraphQLList } = require('graphql')
var services = require('../../services');
var userType = require('../types/user').userType;

// Query
exports.queryType = new GraphQLObjectType({
    name: 'Query',
    fields: function () {
        return {
            users: {
                type: new GraphQLList(userType),
                resolve: services.getUsers
            }
        }
    }
});