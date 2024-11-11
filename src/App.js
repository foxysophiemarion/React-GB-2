import React from 'react';
import './App.css';
import CommentsList from './component/CommentList.js';

const App = () => {
	return (
		<div className='App'>
			<h1 className='title'>Приложение с комментариями</h1>
			<CommentsList />
		</div>
	);
};

export default App;