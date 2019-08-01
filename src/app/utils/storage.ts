export class Storage {
  public setSorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  };

  public getStorage(key: string) {
    return JSON.parse(localStorage.getItem(key))
  };
}
