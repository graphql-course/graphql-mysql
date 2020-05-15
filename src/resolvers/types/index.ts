import GMR from 'graphql-merge-resolvers';

import resolverTypesUsers from './user';
import resolverTypesLanguages from './language';

const resolversTypes = GMR.merge([
    resolverTypesUsers,
    resolverTypesLanguages
]);

export default resolversTypes;