import { ValidationView, validations } from '../';
import { withTemplate, DelegateEvent, event, attributes } from '@viewjs/view';
import { decorators as deco } from '@viewjs/models';

@validations({
    '[name="email"]': validations.string().email(),
    '[name="name"]': validations.string().required(),
    '@name': validations.string().match('[name="name"]', 'should match name').required()

})
@attributes({
    _ui: {
        'name': '[name="nameagain"]'
    }
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
         <div>
            <label>Name again</label>
            <input type="text" name="nameagain" />
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
        // console.log('raprapr', this);
    }

    @deco.model.change()
    onChangeValue(el: HTMLElement, value: string, valid: boolean) {
        console.log('change', el, value, valid);
    }

    onValid(valid: boolean) {
        console.log('valid', valid);
    }
}


window.onload = () => {

    const main = new Main({ el: document.body });
    main.render();
    console.log(main)
}   