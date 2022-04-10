import { Routes, Route } from 'react-router-dom';
import {
	HomePage,
	PostForm,
	NotFoundPage
} from './pages';
import './App.css';
import { PostProvider } from './context/postContext';

function App() {
	return (
		<div className='MainContainer'>
		<PostProvider>
			<Routes>

				<Route path="/" element={<HomePage />} />
				<Route path="/new" element={<PostForm />} />
				<Route path="*" element={<NotFoundPage />} />

			</Routes>
		</PostProvider>
		</div>
	);
}

export default App;
