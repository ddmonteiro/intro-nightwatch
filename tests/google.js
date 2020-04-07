module.exports = {
    '@tags': [ 'google' ],
    'Google advanced search: COVID-19'(browser) {
        
        const mainQueryValue = 'COVID-19';

        const mainQueryInputSelector = 'input[name="as_q"]';
        const languagePickerSelector = '#lr_button';
        const languagePickerValueSelector = '.goog-menuitem[value="lang_pt"]';
        const lastUpdateDropdownSelector = '#as_qdr_button';
        const lastUpdateDropdownValueSelector = '.goog-menuitem[value="d"]';
        const submitButtonSelector = '.jfk-button[type="submit"]';

        const resultsPageQuerySelector = `input[name="q"][type="text"][value="${mainQueryValue}"]`;

        const resultsPageLanguageSelector = '[aria-label="Search Portuguese pages"]';
        const resultsLasteUpdatedSelector = '[aria-label="Past 24 hours"]';

        browser
            .url('https://www.google.com/advanced_search?')
            .setValue(mainQueryInputSelector, 'COVID-19')
            .click(languagePickerSelector)
            .click(languagePickerValueSelector)
            .click(lastUpdateDropdownSelector)
            .click(lastUpdateDropdownValueSelector)
            .click(submitButtonSelector)
            .assert.urlContains('as_q=COVID-19')
            .assert.urlContains('lr=lang_pt')
            .assert.urlContains('as_qdr=d')
            .saveScreenshot('tests_output/google.png');

        browser.assert.visible(resultsPageQuerySelector, `Search input is visible with query ${mainQueryValue}`);

        browser.assert.containsText(resultsPageLanguageSelector, 'Search Portuguese pages');
        browser.assert.containsText(resultsLasteUpdatedSelector, 'Past 24 hours')
                    .saveScreenshot('tests_output/google_result.png');
    } 
}