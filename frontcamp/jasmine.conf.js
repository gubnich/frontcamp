
// setup Jasmine
const Jasmine = require('jasmine');
const jasmine = new Jasmine();
var ReportportalAgent = require('agent-js-jasmine');

var agent = new ReportportalAgent({
    // client settings
    token: "b80ff2df-3096-438f-967b-a4801741741f",
    endpoint: "https://rp.epam.com/api/v1",
    launch: "alexey_gubanich_TEST_EXAMPLE",
    project: "alexey_gubanich_personal",
    // agent settings
    attachPicturesToLogs: true,
    attributes: [
        {
            "key": "YourKey",
            "value": "YourValue"
        },
        {
            "value": "YourValue"
        },
    ]
});

jasmine.addReporter(agent.getJasmineReporter());
jasmine.execute();

agent.getExitPromise().then(() => {
  console.log('finish work');
})
