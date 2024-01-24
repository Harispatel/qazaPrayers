import { STACK } from "../components/common/stackNames";

export type profileListT = {
  id: number;
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
    id: 1,
    title: "Change Date of Birth",
    icon: "person",
    navigateTo: STACK.PERSONAL_INFO,
  },
  // {
  //   id: 2,
  //   title: "Notifications",
  //   icon: "circle-notifications",
  //   navigateTo: STACK.NOTIFICATIONS,
  // },
];
