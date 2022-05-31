
import { _decorator, Component, Node, Button, Label } from 'cc';
const { ccclass, property } = _decorator;
import Web3 from 'web3/dist/web3.min.js';

declare global {
    interface Window { ethereum: any; }
}

window.ethereum = window.ethereum || {};

@ccclass('HelloWorld')
export class HelloWorld extends Component {
    private web3: Web3;

    @property({type: Button})
    public btn: Button | null = null;

    @property({type: Label})
    public lbl: Label | null = null;

    start() {
        this.btn.node.on(Button.EventType.CLICK, this.connect, this);
        this.lbl.string = '';
    }

    public async connect() {
        this.web3 = new Web3();
        if (window.ethereum) {
            try {
                let accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
                this.lbl.string = accounts[0];
                this.web3.setProvider(window.ethereum);
            } catch (error) {
                this.lbl.string = "";
                console.log(error);
            }
        }
    }
}