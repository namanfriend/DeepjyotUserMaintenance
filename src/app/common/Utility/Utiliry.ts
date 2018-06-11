
export class Utility {
  public static getPropertyValue(data: any, dataRef: string) {
      if (!data || !dataRef) {
        return;
      }
    const keys: string[] = dataRef.split('.');
    let retValue: any = data;
    for (const key of keys){
      retValue = retValue[key];
      if (!retValue) {
        return retValue;
      }
    }
    return retValue;
  }
  public static isEmpty(str: string) {
    if (str) {
      if (str.length >= 1) {
        return false;
      }
    }
    return true;
  }
}
