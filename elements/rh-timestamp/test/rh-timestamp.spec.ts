import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { RhTimestamp } from '@rhds/elements/rh-timestamp/rh-timestamp.js';

describe('<rh-timestamp>', function() {
  it('imperatively instantiates', function() {
    expect(document.createElement('rh-timestamp')).to.be.an.instanceof(RhTimestamp);
  });

  it('should upgrade', async function() {
    const element = await createFixture<RhTimestamp>(html`<rh-timestamp></rh-timestamp>`);
    expect(element, 'the <rh-timestamp> should be an instance of RhTimestamp')
        .to.be.an.instanceof(customElements.get('rh-timestamp'))
        .and
        .to.be.an.instanceof(RhTimestamp);
  });

  it('should show the current date by default with default formatting', async function() {
    const element = await createFixture<RhTimestamp>(html`
      <rh-timestamp></rh-timestamp>
    `);

    const expected = new Date().toLocaleString();

    expect(element.time).to.equal(expected);
  });

  it('should set the correct ISO date on the datetime attribute in the time element', async function() {
    const date = new Date('Sat Jan 01 2022 00:00:00');
    const dateString = date.toString();
    const expected = date.toISOString();
    const element = await createFixture<RhTimestamp>(html`
      <rh-timestamp date="${dateString}"></rh-timestamp>
    `);

    expect(element.isoString).to.equal(expected);
  });

  it('should show a passed in date with default formatting', async function() {
    const dateString = 'Sat Jan 01 2022 00:00:00';
    const element = await createFixture<RhTimestamp>(html`
      <rh-timestamp date="${dateString}"></rh-timestamp>
    `);

    expect(element.time).to.equal(new Date(dateString).toLocaleString());
  });

  it('should show custom formatting when date-format and time-format are passed in', async function() {
    const dateString = 'Sat Jan 01 2022 00:00:00';
    const expected = new Date(dateString).toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' });
    const element = await createFixture<RhTimestamp>(html`
      <rh-timestamp date="${dateString}" date-format="full" time-format="short"></rh-timestamp>
    `);

    expect(element.time).to.equal(expected);
  });

  it('should show only a date when date-format is passed in', async function() {
    const dateString = 'Sat Jan 01 2022 00:00:00';
    const expected = new Date(dateString).toLocaleString('en-US', { dateStyle: 'full' });
    const element = await createFixture<RhTimestamp>(html`
      <rh-timestamp date="${dateString}" date-format="full"></rh-timestamp>
    `);

    expect(element.time).to.equal(expected);
  });

  it('should show only time when time-format is passed in', async function() {
    const dateString = 'Sat Jan 01 2022 00:00:00';
    const expected = new Date(dateString).toLocaleString('en-US', { timeStyle: 'short' });
    const element = await createFixture<RhTimestamp>(html`
      <rh-timestamp date="${dateString}" time-format="short"></rh-timestamp>
    `);

    expect(element.time).to.equal(expected);
  });

  it('should show custom formatting when customFormat is passed in', async function() {
    const dateString = 'Sat Jan 01 2022 00:00:00';
    const options: Intl.DateTimeFormatOptions = {
      year: '2-digit',
      month: 'short',
      weekday: 'short',
      day: 'numeric',
      hour: 'numeric',
    };
    const expected = new Date(dateString).toLocaleString('en-US', options);
    const element = await createFixture<RhTimestamp>(html`
      <rh-timestamp date="Sat Jan 01 2022 00:00:00" .customFormat=${options}></rh-timestamp>
    `);
    expect(element.time).to.equal(expected);
  });

  it('should show a custom suffix when display-suffix is passed in', async function() {
    const dateString = 'Sat Jan 01 2022 00:00:00';
    const suffix = 'US Eastern';
    const expected = `${new Date(dateString).toLocaleString('en-US')} ${suffix}`;
    const element = await createFixture<RhTimestamp>(html`
      <rh-timestamp date="${dateString}" display-suffix="${suffix}"></rh-timestamp>
    `);

    expect(element.time).to.equal(expected);
  });

  it('should show a 12 hour time', async function() {
    const dateString = 'Sat Jan 01 2022 13:00:00';
    const expected = new Date(dateString).toLocaleString('en-US');
    const element = await createFixture<RhTimestamp>(html`
      <rh-timestamp date="${dateString}"></rh-timestamp>
    `);

    expect(element.time).to.equal(expected);
  });

  it('should show a 24 hour time when hour-12 is set to false', async function() {
    const dateString = 'Sat Jan 01 2022 13:00:00';
    const expected = new Date(dateString).toLocaleString('en-US', { hour12: false });
    const element = await createFixture<RhTimestamp>(html`
      <rh-timestamp date="${dateString}" hour-12="false"></rh-timestamp>
    `);

    expect(element.time).to.equal(expected);
  });

  it('should show with locale passed in', async function() {
    const date = new Date(2022, 1, 1).toString();
    const expected = new Date(date).toLocaleString('en-GB');
    const element = await createFixture<RhTimestamp>(html`
      <rh-timestamp date="${date}" locale="en-GB"></rh-timestamp>
    `);

    expect(element.time).to.equal(expected);
  });

  it('should show a 12 hour time by default for US locale', async function() {
    const date = new Date(2022, 1, 1, 13, 0).toString();
    const expected = new Date(date).toLocaleString('en-US');
    const element = await createFixture<RhTimestamp>(html`
      <rh-timestamp date="${date}" locale="en-US"></rh-timestamp>
    `);

    expect(element.time).to.equal(expected);
  });

  it('should show a 24 hour time for US locale when hour-12 is false', async function() {
    const date = new Date(2022, 1, 1, 13, 0).toString();
    const expected = new Date(date).toLocaleString('en-US', { hour12: false });
    const element = await createFixture<RhTimestamp>(html`
      <rh-timestamp date="${date}" locale="en-US" hour-12="false"></rh-timestamp>
    `);

    expect(element.time).to.equal(expected);
  });

  it('should show a 12 hour time for a 24 hour locale when hour-12 is passed', async function() {
    const date = new Date(2022, 1, 1, 13, 0).toString();
    const expected = new Date(date).toLocaleString('en-GB', { hour12: true });
    const element = await createFixture<RhTimestamp>(html`
      <rh-timestamp date="${date}" locale="en-GB" hour-12></rh-timestamp>
    `);

    expect(element.time).to.equal(expected);
  });

  it('should show relative time of the moment', async function() {
    const date = new Date();
    const element = await createFixture<RhTimestamp>(html`
      <rh-timestamp date="${date.toString()}" relative></rh-timestamp>
    `);

    expect(element.time).to.match(/just now/);
  });

  it('should show relative time in the past', async function() {
    const date = new Date(2015, 7, 9, 14, 57, 0);
    const element = await createFixture<RhTimestamp>(html`
      <rh-timestamp date="${date.toString()}" relative></rh-timestamp>
    `);

    expect(element.time).to.match(/\d+ years ago/);
  });

  it('should show relative time in the future', async function() {
    const date = new Date(2099, 7, 9, 14, 57, 0);
    const element = await createFixture<RhTimestamp>(html`
      <rh-timestamp date="${date.toString()}" relative></rh-timestamp>
    `);

    expect(element.time).to.match(/in \d+ years/);
  });
});
