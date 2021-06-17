import { gql } from "apollo-angular";
import { query, mutation} from "gql-query-builder";

type Nested<T> = {[K in keyof T]?: any[]}
export type GqlProps<T> = Array<keyof T | Nested<T>>
export class GraphQLBuilder {

    static query<T>(operation: string, fields: GqlProps<T>, variables?: any){
        const q = query({
            operation,
            fields: fields as Array<any>,
            variables
        })

        return { QUERY: gql(q.query), VARIABLES: q.variables }
    }

    static mutate<T>(operation: string, fields: GqlProps<T>, variables?: any){
        const q = mutation({
            operation,
            fields: fields as Array<any>,
            variables
        })

        return { QUERY: gql(q.query), VARIABLES: q.variables }
    }

}
