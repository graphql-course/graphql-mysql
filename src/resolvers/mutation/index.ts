import GMR from 'graphql-merge-resolvers';
import resolverMutationUsers from './user';
import resolverMutationLanguages from './language';

const resolversMutations = GMR.merge([
  resolverMutationUsers,
  resolverMutationLanguages,
]);

export default resolversMutations;
