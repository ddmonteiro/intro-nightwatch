module.exports = {
    url: 'https://www.google.com/advanced_search?hl=en',
    elements: {
        mainQueryInputSelector : 'input[name="as_q"]',
        languagePickerSelector : '#lr_button',
        lastUpdateDropdownSelector : '#as_qdr_button',
        submitButtonSelector : '.jfk-button[type="submit"]',
    },
    commands: [{
        setQuery(value) {
            return this
                .setValue('@mainQueryInputSelector', value);
        },
        selectFilter(selector, value) {
            const page = this;
            page
                .click(selector)
                .click(`.goog-menuitem[value="${value}"]`);
            return this;
        },
        submitSearch() {
            return this
            .click('@submitButtonSelector');
        }

    }]
}