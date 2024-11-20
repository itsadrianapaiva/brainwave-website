declare module 'src/constants/index.js' {
  
  const navigation: ({
    id: string;
    title: string;
    url: string;
    onlyMobile?: undefined;
} | {
    id: string;
    title: string;
    url: string;
    onlyMobile: boolean;
})[];


const benefits: ({
  id: string;
  title: string;
  text: string;
  backgroundUrl: React.FC<React.SVGProps<SVGSVGElement>>;
  iconUrl: string;
  imageUrl: string;
  light?: undefined;
} | {
  id: string;
  title: string;
  text: string;
  backgroundUrl: React.FC<React.SVGProps<SVGSVGElement>>;
  iconUrl: string;
  imageUrl: string;
  light: boolean;
})[];


const collabText: string;

const collabContent: ({
  id: string;
  title: string;
  text: string;
} | {
  id: string;
  title: string;
  text?: undefined;
})[];


const collabApps: {
  id: string;
  title: string;
  icon: string;
  width: number;
  height: number;
}[];

}

