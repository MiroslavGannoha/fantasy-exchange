import graphql from 'mobx-apollo';
import gql from 'graphql-tag';
import { client } from 'app';
import { OperationVariables, MutationOptions } from 'apollo-client';
import { FetchResult } from 'apollo-link';

// @ts-ignore

export const queryCall = (query: string) => graphql({ client, query: gql(query) });

export const mutateCall = (mutation: string, input, refetchQueries?: any[]): Promise<FetchResult<any>> => {
    const options: any = {
        mutation: gql(mutation),
        variables: { input },
    };

    if (refetchQueries) {
        options.refetchQueries = refetchQueries.map((q) => ({ query: gql(q) }));
    }

    return client.mutate(options);
};

export function mutateConfiguredCall<T, TVariables = OperationVariables>(options: MutationOptions<T, TVariables>)
: Promise<FetchResult<T>> {
    return client.mutate(options);
}
