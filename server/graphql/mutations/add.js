var { GraphQLNonNull, GraphQLString, GraphQLID } = require('graphql');
var Phonebook = require('../types/phonebook');
var services = require('../../services');

exports.add = {
    type: Phonebook.phonebookType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        phone: {
            type: new GraphQLNonNull(GraphQLString),
        }
    },
    resolve(root, params) {
        return services.createPhonebooks(params);
    }
}