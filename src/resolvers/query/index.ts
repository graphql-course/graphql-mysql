import GMR from 'graphql-merge-resolvers';
import resolverQueryUsers from './user';
import resolverQueryLanguages from './language';

const resolversQueries = GMR.merge([
  resolverQueryUsers,
  resolverQueryLanguages,
]);

export default resolversQueries;
