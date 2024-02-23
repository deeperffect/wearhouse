'use client'
import ListedItems from "@components/user/ListedItems";
import isAuth from "@app/utils/isAuth";
import FavItems from "@components/user/FavItems";
import Section from "@components/Section";
import PostedBlogs from "@components/user/PostedBlogs";

const Profile = () => {
	return (
		<>
			<Section>
				<div className="flex flex-col">
					<div className="bg-white/50 p-4">
						<Section>
							<h2 className="text-3xl py-4 font-bold">Listed items</h2>
							<ListedItems />
						</Section>
					</div>
					<div className="bg-slate-200/50 p-4">
						<Section>
							<h2 className="text-3xl py-4 font-bold">Favorite items</h2>
							<FavItems />
						</Section>
					</div>
					<div className="bg-white/50 p-4">
						<Section>
							<h2 className="text-3xl py-4 font-bold">Blogs posted</h2>
							<PostedBlogs />
						</Section>
					</div>
				</div>
			</Section>
		</>
	)
};

export default isAuth(Profile);