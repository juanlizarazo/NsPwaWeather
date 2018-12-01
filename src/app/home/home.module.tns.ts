import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { TNSFontIconModule } from 'nativescript-ngx-fonticon';
import { componentDeclarations, sharedImports} from './home.common';

@NgModule({
  declarations: [
    ...componentDeclarations
  ],
  imports: [
    NativeScriptCommonModule,
    TNSFontIconModule.forRoot({
      'fa': './assets/fontawesome.css',
      'ion': './assets/ionicons.css'
    }),
    ...sharedImports
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule { }
