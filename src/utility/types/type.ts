/* eslint-disable prettier/prettier */
export type CardViewT = {
  imageStyle: any;
  cardStyle?: any;
  width: number;
  height: number;
  url: string;
  iconText?: string;
};

export type ProfileHeadT = {
  visible: any;
  closeMenu: any;
  openMenu: any;
  userData: any;
};
export type DOBManagerT = {
  isModalVisible: any;
  handleAction: any;
  dateValue: any;
  setDateValue: any;
};

export type QpModalT = {
  children: any;
  containerStyle: any;
  isModalVisible: any;
  modalStyles: any;
  onBackButtonPress: any;
  onBackdropPress: any;
  style: any;
};

export type QpButtonT = {
  children: any;
  type: any;
  style: any;
  onPress: any;
  btnIcon: any;
  disabled: boolean;
  isUpperCase: boolean;
};
