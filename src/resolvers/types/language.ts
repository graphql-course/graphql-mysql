import { LANGUAGES_USERS_LIST } from './../../constants/db-operations';
import { IResolvers } from 'graphql-tools';

const resolverTypesLanguages: IResolvers = {
  Language: {
    users(parent, __, { connection }) {
      const users = new Array(0);
      var sql = LANGUAGES_USERS_LIST;
      return new Promise((resolve, reject) => {
        connection.query(sql, [parent.id], function (error: any, results: any) {
          if (error) {
            reject(users);
          }
          // Resultado correcto
          results.forEach((element: any) => {
            users.push({
              id: element.user,
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
  },
};
export default resolverTypesLanguages;
