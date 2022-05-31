// Add a type specification for the module "<package name>/dist/**.js"
declare module 'web3/dist/web3.min.js' {
    export { default } from "web3"; // "Steal" the type description of the main entry
}