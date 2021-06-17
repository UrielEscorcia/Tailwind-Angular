import { Component } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import { GraphQLBuilder, GqlProps } from "@graphql/GraphQLBuilder"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  tagsQuery: GqlProps<{name: string, color: string}> = [
    "name",
    "color"
  ]

  constructor(private apollo: Apollo){

    const { QUERY } = GraphQLBuilder.query("listTags", this.tagsQuery)

    this.apollo
    .watchQuery({
      query: QUERY
    })
    .valueChanges.subscribe((result) => {
      console.log(result)
    });
  }
}
