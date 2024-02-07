'use client'
import ListedItems from "@components/user/ListedItems";
import isAuth from "@app/utils/isAuth";
import FavItems from "@components/user/FavItems";

const Profile = () => {
	return (
		<div>
			<ListedItems />
			<FavItems />
		</div>
	)
};

export default isAuth(Profile);