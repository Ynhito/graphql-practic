import * as React from 'react'
import { useQuery } from '@apollo/react-hooks';
import GetBook from './graphql/GetBook.graphql';
import { QueryGetBookArgs, Book, GetBookQuery } from './src/generated/graphql';

const Book = ({ id }: {id: string}) => {
	const { data, loading } = useQuery<GetBookQuery, QueryGetBookArgs>(GetBook, {
		variables: {
			id: id
		}
	});

	const book = data ? data.getBook : null;
	console.log(book)

	return book ? (
		<div>
			<h1>{book.title}</h1>
		</div>
	) : (
		<div>Loading...</div>
	);
};

export default Book;