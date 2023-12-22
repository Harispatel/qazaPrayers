import { STACK } from "../components/common/stackNames"

export type profileListT = {
  title: string
  icon: string
  navigateTo: string
}

export const profileList: profileListT[] = [
  {
    title: "My Profile",
    icon: "perm-identity",
    navigateTo: STACK.WALKTHROUGH1,
  },
  {
    title: "Notifications",
    icon: "notifications-none",
    navigateTo: STACK.WALKTHROUGH2,
  },
  {
    title: "Favorites",
    icon: "star-border",
    navigateTo: STACK.WALKTHROUGH3,
  },
  {
    title: "All Trips",
    icon: "map",
    navigateTo: STACK.HOME,
  },
]
