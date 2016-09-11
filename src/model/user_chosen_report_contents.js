function UserChosenReportContents(input, output, date) {
  if (input < 1) {
    throw Error('input has to be more than zero');
  }
  if (date > new Date()) {
    throw Error('chosen time cannot lie in the future');
  }
  this.input = input;
  this.output = output;
  this.date = date;
}

module.exports = UserChosenReportContents;