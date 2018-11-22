import { NgModule } from '@angular/core';
import { MarketsComponent } from './markets/markets';
import { BuilderComponent } from './builder/builder';
import { BetslipComponent } from './betslip/betslip';
@NgModule({
	declarations: [MarketsComponent,
    BuilderComponent,
    BetslipComponent],
	imports: [],
	exports: [MarketsComponent,
    BuilderComponent,
    BetslipComponent]
})
export class ComponentsModule {}
