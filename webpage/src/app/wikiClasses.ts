export class WikiServiceMenuEntry {
  name: string;
  url: string;
  thumbnail: string;
  description: string;
  list: Array<WikiServiceMenuEntry>;
  version:number;
  constructor() {
    this.name = "";
    this.thumbnail = "";
    this.description = "";
  }
}

export class WikiServicePage extends WikiServiceMenuEntry {
  content: Array<WikiServicePageContent>;
  function: string;
  constructor() {
    super();
    this.content = [];
  }
}
export class WikiServicePageContent {
  type: string;

  constructor() {
      this.type = "";
  }
}

export class WikiServicePageContentTitle extends WikiServicePageContent {
    readonly type = "title";
    title:string;
    sources:Array<string>;
    constructor() {
        super();
    }
}

export class WikiServicePageContentText extends WikiServicePageContent {
    readonly type = "text";
    text:string;
    sources:Array<string>;
    constructor() {
        super();
    }
}

export class WikiServicePageContentImage extends WikiServicePageContent {
    readonly type = "image";
    src:string;
    link:string;
    sources:Array<string>;

    constructor() {
        super();
    }
}

export class WikiServicePageContentTeaser extends WikiServicePageContent {
    readonly type = "teaser";
    elements:Array<WikiServicePageContent>;
    constructor() {
        super();
    }
}

