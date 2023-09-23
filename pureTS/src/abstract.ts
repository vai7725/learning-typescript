abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}
  abstract getSepia(): void
  getReelTime(): number {
    return 8
  }
}

class Insta extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter)
  }
  getSepia(): void {
    console.log('Hello sepia')
  }
}

const vai = new Insta('vai', 'vai', 38947) // no vars can be created directly by abstract classes
