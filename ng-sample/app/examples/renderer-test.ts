import { Component, Directive, Host, ElementRef, Input } from "@angular/core";
import { Observable } from "data/observable";
import { TextValueAccessor } from "nativescript-angular/value-accessors/text-value-accessor";
import { CheckedValueAccessor } from "nativescript-angular/value-accessors/checked-value-accessor";
import { SegmentedBarItem } from "ui/segmented-bar";

@Component({
    moduleId: module.id,
    selector: "renderer-test",
    templateUrl: "./renderer-test.html"
})
export class RendererTest {
    public first: boolean = false;
    public second: boolean = false;

    toggleFirst() {
        console.log("onToggleDetails current: " + this.first);
        this.first = !this.first;
    }

    toggleSecond() {
        console.log("onToggleDetails2 current: " + this.second);
        this.second = !this.second;
    }
}
