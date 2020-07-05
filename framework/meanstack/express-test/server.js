const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('content-type', 'application/json');

app.use(express.static('static'));
app.use(bodyParser.json());
const issues = [
  {
    id: 1,
    Status: 'Open',
    owner: 'Ravan',
    Created: new Date('2017-03-23'),
    effort: 5,
    completionDate: undefined,
    title: 'Error in console when clicking Add',
  },
  {
    id: 2,
    Status: 'Assigned',
    owner: 'Eddie',
    Created: new Date('2017-08-23'),
    effort: 14,
    completionDate: new Date('2016-08-30'),
    title: 'Missing bottom border on panel',
  },
];

app.get('/api/issues', (req, res) => {
  const metadata = { total_count: issues.length };
  console.log(JSON.stringify(req.body));
  res.json(JSON.stringify({ _metadata: metadata, records: issues }));
});

app.post('/api/issues', (req, res) => {
  const newIssue = req.body;
  newIssue.id = issues.length + 1;
  newIssue.Created = new Date();

  if (!newIssue.Status) newIssue.Status = 'New';
  issues.push(newIssue);

  res.json(newIssue);
});

app.listen(3000, () => {
  console.log('App started on port 3000');
});
