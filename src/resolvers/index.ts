import { IResolvers } from 'graphql-tools';
import query from './query';
import types from './types';
import mutation from './mutation';
const resolvers: IResolvers = {
  ...query,
  ...types,
  ...mutation,
};

export default resolvers;
