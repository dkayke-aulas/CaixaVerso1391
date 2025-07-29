import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  
  setItem(key: string, value: string | number | boolean) {
    localStorage.setItem(key, value.toString())
  }
  
  getItem(key: string) {
    return localStorage.getItem(key)
  }
  
  removeItem(key: string) {
    localStorage.removeItem(key)
  }
  
  item(key: string, value?: string | number | boolean) {
    if(value) {
      this.setItem(key, value)
    }
    else {
      this.getItem(key)
    }
  }
}
