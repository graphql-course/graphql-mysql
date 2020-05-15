import {
  USERS_LIST,
  USERS_SELECT_DETAILS,
} from './../../constants/db-operations';
import { IResolvers } from 'graphql-tools';

const resolverQueryUsers: IResolvers = {
  Query: {
    users(_, __, { connection }) {
      const users = new Array(0);
      var sql = USERS_LIST;
      return new Promise((resolve, reject) => {
        connection.query(sql, function (error: any, results: any) {
          if (error) {
            reject('');
          }
          // Resultado correcto
          results.forEach((element: any) => {
            users.push({
              id: element.id,
              name: element.name,
              instructor: element.instructor,
              twitter: element.twitter,
              web: element.web,
            });
          });
          resolve(users);
        });
      });
    },
    user(_, { id }, { connection }) {
      var sql = USERS_SELECT_DETAILS;
      return new Promise((resolve, reject) => {
        connection.query(sql, [id], function (error: any, results: any) {
          if (error) {
            reject(null);
          }
          // Resultado correcto
          const element = results[0];
          let user;
          if (element === undefined || element === null) {
            user = null;
          } else {
            user = {
              id: element.id,
              name: element.name,
              instructor: element.instructor,
              twitter: element.twitter,
              web: element.web,
            };
          }
          resolve(user);
        });
      });
    },
  },
};

export default resolverQueryUsers;
