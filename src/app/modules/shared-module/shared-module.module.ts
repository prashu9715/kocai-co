import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCloseDirective } from './directives/autoclose.directive';

@NgModule({
  declarations: [AutoCloseDirective],
  imports: [CommonModule],
  exports: [AutoCloseDirective],
})
export class SharedModuleModule {}
