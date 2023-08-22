import { CheckboxProps } from "expo-checkbox";

export interface PropsTaskCard  extends CheckboxProps{
  title: string;
  isChecked: boolean;
}