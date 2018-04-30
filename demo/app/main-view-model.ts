import { Observable } from 'tns-core-modules/data/observable';
import { WonderpushNativescriptSdk } from 'nativescript-wonderpush-nativescript-sdk';

export class HelloWorldModel extends Observable {
  public message: string;
  private wonderpushNativescriptSdk: WonderpushNativescriptSdk;

  constructor() {
    super();

    this.wonderpushNativescriptSdk = new WonderpushNativescriptSdk();
    this.message = this.wonderpushNativescriptSdk.message;
  }
}
