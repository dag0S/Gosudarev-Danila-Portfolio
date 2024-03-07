import { IconsID } from "../../components/Socials/IconsSVG";

export interface menuListProps {
  id: number;
  name: string;
  url: string;
  withIcon?: boolean;
}

export interface socialsListProps {
  id: number;
  iconId: IconsID;
  url: string;
}

export interface IIcons {
  id: number;
  icon: string;
  name: string;
} 