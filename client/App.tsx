import * as React from 'react'
import AllBooks from './AllBooks';
import Book from './Book';

const App = () => {
	const [selectedBookId, setSelectedBookId] = React.useState<string | undefined>(undefined);

	return (
		<div>
			<div>
				<AllBooks onSelect={book => setSelectedBookId(book.id)} />
			</div>

			{selectedBookId && (
				<div>
					<Book id={selectedBookId} />
				</div>
			)}
		</div>
	);
};

export default App;