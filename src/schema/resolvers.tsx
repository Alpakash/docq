import { UserList } from "./FakeData";

export const resolvers = {
	Query: {
		users() {
			return UserList;
		},
	}
}
