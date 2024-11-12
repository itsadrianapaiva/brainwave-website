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
}

