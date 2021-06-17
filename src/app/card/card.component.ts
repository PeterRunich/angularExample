import { Component, Input } from "@angular/core"

import { Project } from "./project"

@Component({
	selector: "app-card",
	templateUrl: "./card.component.html",
	styleUrls: ["./card.component.sass"]
})

export class CardComponent {
	@Input() project?: Project

	constructor() {}
}