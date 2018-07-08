import { FormView, validations } from '../';
import { withTemplate, DelegateEvent, event } from '@viewjs/view';

@validations({
    '[name="email"]': validations.string().email(),
    '[name="name"]': validations.string().required()
})
class Main extends withTemplate(FormView) {
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
        console.log(this.model);
    }

    onChangeValue() {
        console.log('change');
    }
}

console.log('raorao')
window.onload = () => {

    const main = new Main({ el: document.body });
    main.render();
}   