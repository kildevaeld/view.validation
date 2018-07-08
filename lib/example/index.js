"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../");
const view_1 = require("@viewjs/view");
let Main = class Main extends view_1.withTemplate(__1.FormView) {
    constructor() {
        super(...arguments);
        this.template = () => `
    <form>
        <div>
            <label>Email</label>
            <input type="text" name="email" />
        </div>
        <div>
            <label>Name</label>
            <input type="text" name="name" required />
        </div>
        <button type="submit">Submit</button>
    </form>
    `;
    }
    onSubmitClick(e) {
        e.preventDefault();
        console.log(this.model);
    }
    onChangeValue() {
        console.log('change');
    }
};
__decorate([
    view_1.event.click('button[type="submit"]'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Main.prototype, "onSubmitClick", null);
Main = __decorate([
    __1.validations({
        '[name="email"]': __1.validations.string().email(),
        '[name="name"]': __1.validations.string().required()
    })
], Main);
console.log('raorao');
window.onload = () => {
    const main = new Main({ el: document.body });
    main.render();
};
