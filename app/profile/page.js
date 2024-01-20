'use client'
import ListedItems from "@components/user/ListedItems"
import isAuth from "@app/utils/isAuth"

const Profile = () => {
  return (
    <div>
      <ListedItems />
    </div>
  )
}

export default isAuth(Profile)