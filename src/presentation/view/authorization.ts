export class Authorization {
  getHeaders(): object {
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.getAccessToken()}`
    };
  }

  getUserId(): string {
    return PropertiesService.getScriptProperties().getProperty("USER_ID");
  }

  private getAccessToken(): string {
    return PropertiesService.getScriptProperties().getProperty("ACCESS_TOKEN");
  }
}
