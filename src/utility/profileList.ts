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
    navigateTo: STACK.WALKTHROUGH,
  },
  {
    title: "Notifications",
    icon: "notifications-none",
    navigateTo: STACK.WALKTHROUGH,
  },
  {
    title: "Favorites",
    icon: "star-border",
    navigateTo: STACK.WALKTHROUGH,
  },
  {
    title: "All Trips",
    icon: "map",
    navigateTo: STACK.HOME,
  },
]
