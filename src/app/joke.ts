export class Joke {
  setup: string;
  punchline: string;
  hidden: boolean;

  constructor(setup: string, punchline: string){
    this.setup = setup;
    this.punchline = punchline;
    this.hidden = true;
  }

  toggle(){
    this.hidden = !this.hidden;
  }
}
