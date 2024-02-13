'use client'
import ListedItems from "@components/user/ListedItems";
import isAuth from "@app/utils/isAuth";
import FavItems from "@components/user/FavItems";
import Section from "@components/Section";

const Profile = () => {
	return (
		<>
			<Section>
				<h2 className="text-xl">Listed items</h2>
				<ListedItems />
			</Section>
			<Section>
				<h2 className="text-xl">Favorite items</h2>
				<FavItems />
			</Section>
		</>
	)
};

export default isAuth(Profile);