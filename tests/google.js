module.exports = {
    '@tags': [ 'google' ],
    'Google advanced search: COVID-19'(browser) {
        
        const mainQueryValue = 'COVID-19';
        
        const page = browser.page.googleAdvancedSearch();

        const resultsPageQuerySelector = `input[name="q"][type="text"][value="${mainQueryValue}"]`;

        const resultsPageLanguageSelector = '[aria-label="Search Portuguese pages"]';
        const resultsLasteUpdatedSelector = '[aria-label="Past 24 hours"]';

        page
            .navigate()
            .setQuery(mainQueryValue)
            .selectFilter('@languagePickerSelector', 'lang_pt')
            .selectFilter('@lastUpdateDropdownSelector', 'd')
            .submitSearch()
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