import { ValidationView, validations } from '../';
import { withTemplate, DelegateEvent, event } from '@viewjs/view';

@validations({
    '[name="email"]': validations.string().email(),
    '[name="name"]': validations.string().required()
})
class Main extends withTemplate(ValidationView) {
    template = () => `
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
    `

    @event.click('button[type="submit"]')
    onSubmitClick(e: DelegateEvent) {
        e.preventDefault();
        this.isValid();
        console.log(this.model);
    }

    @event.keyup('input')
    onKeyDown() {
        console.log('raprapr', this)
    }


    onChangeValue(el: HTMLElement, value: string, valid: boolean) {
        console.log('change', el, value, valid);
    }
}


window.onload = () => {

    const main = new Main({ el: document.body });
    main.render();
}   