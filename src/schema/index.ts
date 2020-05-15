import { GraphQLSchema } from 'graphql';
import 'graphql-import-node';
import resolvers from '../resolvers';
import { makeExecutableSchema } from 'graphql-tools';
import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
const typeDefs = mergeTypes(fileLoader(`${__dirname}/**/*.graphql`), { all: true });
const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;