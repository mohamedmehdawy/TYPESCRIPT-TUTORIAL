import { HasFormatter } from "../interfaces/HasFormatter.js";

export class ListTemplate {
    constructor(private container:HTMLUListElement){}

    render(item: HasFormatter, heading: string, pos: "start" | "end"): void {
        const li = document.createElement("li");

        const h4 = document.createElement("h4");
        h4.innerText = heading;
        li.append(h4);

        const p = document.createElement("p");
        p.innerText = item.format();
        li.append(p);


        if(pos === "start") {
            this.container.append(li);
        } else {
            this.container.prepend(li);
        }
    }
}