import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CpfPipe } from "./pipes/cpf-pipe.pipe";
import { ButtonModule } from "primeng/button";
import { ReactiveFormsModule } from "@angular/forms";

const exportedModules = [
    CommonModule,
    ButtonModule,
    ReactiveFormsModule
];

const exportedPipes = [CpfPipe];

@NgModule({
    imports: [
        ButtonModule,
        CommonModule,
        ReactiveFormsModule,
    ],
    declarations: [...exportedPipes],
    providers: [],
    exports: [...exportedModules, ...exportedPipes],
})
export class SharedModule { }
