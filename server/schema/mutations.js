const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString
} = graphql;
const UserType = require('./types/user_type');
const AuthService = require('../services/auth');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { email, password }, request) {
        // Nice authentication handling
        // Delegates all processing to the outside piece of code 
        // (i.e.AuthService)
        return AuthService.signup({ email, password, req: request })
      }
    },
    logout: {
      type: UserType,
      resolve(parentValue, args, req) {
        const { user } = req;
        req.logout();
        return user;
      }
    },
    login: {
      // Here's what it returns
      type: UserType,
      // Here's what it expects to have
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      // Here's what the mutation it self does
      resolve(parentValue, { email, password }, req) {
        return AuthService.login({ email, password, req })
      }
    }
  }
});

module.exports = mutation;