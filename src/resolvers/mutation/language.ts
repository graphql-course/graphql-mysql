import {
  ADD_LANGUAGE,
  UPDATE_LANGUAGE,
  DELETE_LANGUAGE_IN_USER_LANGUAGES,
  DELETE_LANGUAGE,
} from './../../constants/db-operations';
import { IResolvers } from 'graphql-tools';

const resolverMutationLanguages: IResolvers = {
  Mutation: {
    addLanguage(_, { name }, { connection }) {
      return new Promise((resolve, reject) => {
        connection.query(ADD_LANGUAGE, [name], function (
          error: any,
          results: any
        ) {
          if (error) {
            reject(error);
          }
          // Resultado correcto
          resolve(
            `Añadido correctamente el lenguaje de programación con el ID ${results.insertId}`
          );
        });
      });
    },
    updateLanguage(_, { id, name }, { connection }) {
      return new Promise((resolve, reject) => {
        connection.query(UPDATE_LANGUAGE, [name, id], function (
          error: any,
          __: any
        ) {
          if (error) {
            reject(error);
          }
          // Resultado correcto
          resolve(
            `Modificado correctamente el lenguaje de programación con el ID ${id}`
          );
        });
      });
    },
    deleteLanguage(_, { id }, { connection }) {
      return new Promise((resolve, reject) => {
        connection.query(DELETE_LANGUAGE_IN_USER_LANGUAGES, [id], function (
          error: any,
          results: any
        ) {
          if (error) {
            reject(error);
          }
          connection.query(DELETE_LANGUAGE, [id], function (
            error: any,
            __: any
          ) {
            if (error) {
              reject(error);
            }
            // Resultado correcto
            resolve(`Eliminado correctamente el lenguaje de programación con el ID ${id}`);
          });
        });
      });
    },
  },
};

export default resolverMutationLanguages;
