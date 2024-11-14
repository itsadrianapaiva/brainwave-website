

export interface ButtonProps {
    className?: string;
    href?: string;
    onClick?: () => void;
    children?: React.ReactNode;
    px?: string;
    white?: boolean;
  }

  export interface SectionProps {
    className?: string;
    id?: string;
    crosses?: boolean;
    crossesOffset?: boolean;
    customPaddings?: boolean;
    children?: React.ReactNode;
}