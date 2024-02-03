import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageEnum } from 'src/app/models/enums/local-storage.enum';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  defaultLanguage: string = 'en';
  isLangFromLocal: string = '';

  constructor(
    public translateService: TranslateService,
    private localStorageService: LocalStorageService,
  ) {}

  ngOnInit(): void {
    this.translateService.addLangs(['en', 'km']);
    this.isLangFromLocal = this.localStorageService.get(LocalStorageEnum.lang);
    if (
      this.isLangFromLocal === null ||
      this.isLangFromLocal === undefined ||
      this.isLangFromLocal === ''
    ) {
      const language: any = this.defaultLanguage;
      this.translateService.use(language);
      this.translateService.setDefaultLang(language);
      this.localStorageService.set(LocalStorageEnum.lang, language);
    } else {
      this.translateService.use(this.isLangFromLocal);
      this.translateService.setDefaultLang(this.isLangFromLocal);
    }
  }

  async changeLanguagePreference(lang: string) {
    const currentLanguage = this.translateService.currentLang;
    if (currentLanguage !== lang) {
      this.translateService.use(lang);
      this.translateService.setDefaultLang(lang);
      this.localStorageService.set(LocalStorageEnum.lang, lang);
    }
  }
}
