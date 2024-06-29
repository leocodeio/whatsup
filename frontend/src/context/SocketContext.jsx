import React, { createContext, useState, useEffect, useContext } from "react";
import { AccountContext } from "./AccountDetails";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
	return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
	const { Account } = useContext(AccountContext); // Use useContext to get Account from AccountContext
	const [socket, setSocket] = useState(null); 
	const [onlineUsers, setOnlineUsers] = useState([]);

	useEffect(() => {
		let socket;
		if (Account) {
			socket = io("http://localhost:3001", { // Replace with your server URL
				query: {
					userId: Account._id,
				},
			});

			setSocket(socket);

			socket.on("getOnlineUsers", (users) => {
				setOnlineUsers(users);
			});

			return () => socket.close();
		} else {
			if (socket) {
				socket.close();
				setSocket(null);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [Account]);

	return (
		<SocketContext.Provider value={{ socket, onlineUsers }}>
			{children}
		</SocketContext.Provider>
	);
};
