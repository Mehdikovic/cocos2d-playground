import { _decorator, Component, Node, Vec3, random, randomRange, Sprite, Color, math } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('RandomMovement')
export class RandomMovement extends Component {
    private time = 0;
    private colorOne;
    private colorSecond;
    start() {
        this.colorOne = this.getComponent<Sprite>(Sprite).color.clone()
        this.colorSecond = new Color("#37E400")
    }

    update(deltaTime: number) {
        this.time += deltaTime
        this.node.position = this.node.position.add(new Vec3(randomRange(-10, 10) * deltaTime, randomRange(-10, 10) * deltaTime));
        if (random() < 0.5) {
            this.getComponent<Sprite>(Sprite).color = this.colorSecond
        } else {
            this.getComponent<Sprite>(Sprite).color = this.colorOne
        }
    }
}