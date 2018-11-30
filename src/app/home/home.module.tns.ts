import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { componentDeclarations, sharedImports} from './home.common';

@NgModule({
  declarations: [
    ...componentDeclarations
  ],
  imports: [
    NativeScriptCommonModule,
    ...sharedImports
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule { }
