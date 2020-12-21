var { GraphQLObjectType, GraphQLList } = require('graphql');
var services = require('../../services');
var phonebookType = require('../types/phonebook').phonebookType;

// Query
exports.queryType = new GraphQLObjectType({
    name: 'Query',
    fields: function () {
        return {
            phonebooks: {
                type: new GraphQLList(phonebookType),
                resolve: services.getPhonebooks
            }
        }
    }
});