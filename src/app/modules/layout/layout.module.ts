import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout.component";
import { LayoutRoutingModule } from "./layout-routing.module";
import { SharedModule } from "../../core/shared/shared.module";
import { PageNotFoundModule } from "../../components/page-not-found/page-not-found.module";

@NgModule({
    imports: [
        LayoutRoutingModule,
        SharedModule,
    ],
    exports: [],
    declarations: [LayoutComponent],
    providers: [],
})
export class LayoutModule {}
