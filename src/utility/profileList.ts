import { STACK } from "../components/common/stackNames";

export type profileListT = {
  title: string;
  icon: string;
  navigateTo: string;
};

export type benefitListT = {
  title: string;
  icon: string;
  navigateTo: string;
};

export type supportListT = {
  title: string;
  icon: string;
  navigateTo: string;
};

export type preferencesListT = {
  title: string;
  icon: string;
  navigateTo: string;
};

export const profileList: profileListT[] = [
  {
    title: "Personal Information",
    icon: "person",
    navigateTo: STACK.PERSONAL_INFO,
  },
  {
    title: "Notifications",
    icon: "circle-notifications",
    navigateTo: STACK.NOTIFICATIONS,
  },
];

export const benefitList: benefitListT[] = [
  {
    title: "Rewards",
    icon: "shopping-basket",
    navigateTo: STACK.WALKTHROUGH,
  },
];

export const supportList: supportListT[] = [
  {
    title: "Rate This App",
    icon: "star-border",
    navigateTo: STACK.WALKTHROUGH,
  },
  {
    title: "Become a Vendor",
    icon: "person-add-alt-1",
    navigateTo: STACK.WALKTHROUGH,
  },
];

export const preferencesList: preferencesListT[] = [
  {
    title: "City Selection",
    icon: "location-on",
    navigateTo: STACK.WALKTHROUGH,
  },
];
