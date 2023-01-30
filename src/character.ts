export class Character {
  private isLive: boolean;
  constructor(public name: string, public family: string, public age: number) {
    this.isLive = true;
  }

  greetings() {
    return `Hello, I am ${this.name}`;
  }

  die() {
    this.isLive = false;
  }
}
