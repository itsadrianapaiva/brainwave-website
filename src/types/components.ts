

export interface ButtonProps {
    className?: string;
    href?: string;
    onClick?: () => void;
    children?: string;
    px?: string;
    white?: boolean;
  }

  export interface SectionProps {
    className?: string;
    id?: string;
    crosses?: boolean;
    crossesOffset?: string;
    customPaddings?: boolean;
    children: React.ReactNode;
}