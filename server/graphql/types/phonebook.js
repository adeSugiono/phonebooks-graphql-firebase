const {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString,
    GraphQLInteger
} = require('graphql');


// Phonebook Type
exports.phonebookType = new GraphQLObjectType({
    name: 'phonebook',
    fields: function () {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            name: {
                type: GraphQLString
            },
            phone: {
                type: GraphQLString
            }
        }
    }
});