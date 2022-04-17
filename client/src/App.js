import { Routes, Route } from 'react-router-dom';
import {
	HomePage,
	PostForm,
	NotFoundPage
} from './pages';
import {
	NavBar
} from './components'
import './App.css';
import { PostProvider } from './context/postContext';
import { Toaster } from 'react-hot-toast';

function App() {
	return (
		<div className='MainContainer'>
		<PostProvider>
			<NavBar />
			<Routes>

				<Route path="/" element={<HomePage />} />
				<Route path="/new" element={<PostForm />} />
				<Route path="*" element={<NotFoundPage />} />

			</Routes>
			<Toaster />
		</PostProvider>
		</div>
	);
}

export default App;
