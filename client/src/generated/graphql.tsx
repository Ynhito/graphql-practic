import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  getAllBooks: Array<Maybe<Book>>;
  getBook: Book;
};


export type QueryGetBookArgs = {
  id: Scalars['ID'];
};

export type Book = {
  __typename?: 'Book';
  id: Scalars['ID'];
  title: Scalars['String'];
  author?: Maybe<Author>;
  description: Scalars['String'];
};

export type Author = {
  __typename?: 'Author';
  id: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addBook: Scalars['Boolean'];
};


export type MutationAddBookArgs = {
  book: BookInput;
};

export type BookInput = {
  title: Scalars['String'];
  description: Scalars['String'];
};

export type GetAllBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllBooksQuery = (
  { __typename?: 'Query' }
  & { getAllBooks: Array<Maybe<(
    { __typename?: 'Book' }
    & Pick<Book, 'id' | 'title' | 'description'>
    & { author?: Maybe<(
      { __typename?: 'Author' }
      & Pick<Author, 'id' | 'firstName' | 'lastName'>
    )> }
  )>> }
);

export type GetBookQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetBookQuery = (
  { __typename?: 'Query' }
  & { getBook: (
    { __typename?: 'Book' }
    & Pick<Book, 'id' | 'title' | 'description'>
    & { author?: Maybe<(
      { __typename?: 'Author' }
      & Pick<Author, 'id' | 'firstName' | 'lastName'>
    )> }
  ) }
);


export const GetAllBooksDocument = gql`
    query GetAllBooks {
  getAllBooks {
    id
    title
    description
    author {
      id
      firstName
      lastName
    }
  }
}
    `;

export type GetAllBooksQueryResult = ApolloReactCommon.QueryResult<GetAllBooksQuery, GetAllBooksQueryVariables>;
export const GetBookDocument = gql`
    query GetBook($id: ID!) {
  getBook(id: $id) {
    id
    title
    description
    author {
      id
      firstName
      lastName
    }
  }
}
    `;

export type GetBookQueryResult = ApolloReactCommon.QueryResult<GetBookQuery, GetBookQueryVariables>;