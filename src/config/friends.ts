// friends
export const friendsHeadLine = "我的朋友"
export const friendsIntro = "一些有趣的人。"


// friends
export type FriendItemType = {
  name: string
  description?: string
  link: { href: string, label?: string }
  logo?: string
}

export const friends: Array<FriendItemType> = []
