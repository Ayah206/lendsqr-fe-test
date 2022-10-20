export interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
  }
export interface Props {
    color : string,
    text : string,
    disabled: boolean
    action ?: any
}