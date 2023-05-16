declare module '*.jpg';
declare module '*.png';
declare module '*.svg' {
    const value: string;
    const ReactComponent: any;

    export default value;
    export { ReactComponent }
}
