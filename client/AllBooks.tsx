import * as React from 'react'
import { useQuery } from '@apollo/react-hooks';
import GetAllBooks from './graphql/GetAllBooks.graphql';
import { Book } from './src/generated/graphql';
import {GetAllBooksQuery, GetAllBooksQueryVariables} from './src/generated/graphql';

export default ({ onSelect }: {onSelect: (id: Book) => void}) => {
	const { data, loading } = useQuery<GetAllBooksQuery, GetAllBooksQueryVariables>(GetAllBooks);

	return (
		<div>
			<h1>All books</h1>

			{loading && <div>Loading...</div>}

			{!loading && data.getAllBooks && (
				<ul>
					{data.getAllBooks.map(book => (
						<li key={book.title}>
							{book.id}: {book.title} ({book.author.firstName} {book.author.lastName}){' '}
							<button onClick={() => onSelect(book)}>select</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
