export * from './CRUDAPI';
import graphql from 'mobx-apollo';
import gql from 'graphql-tag';
import { client } from 'app';

export const call = (methodName: string, reqData?: any) => (new Promise((y) => y()));

export const queryCall = (query) => graphql({ client, query: gql(query) });
