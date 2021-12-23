import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema/typeDefs";
import { resolvers } from "./schema/resolvers"

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}) => {
	console.log("YOUR API IS RUNNIN! @ " + url);
})

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();