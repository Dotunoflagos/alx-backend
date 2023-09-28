#!/usr/bin/yarn dev
import { createQueue } from 'kue';

const qu = createQueue();

function sendNotification(phoneNumber, message){
  console.log(
    `Sending notification to ${phoneNumber},`,
    'with message:',
    message,
  );
};

qu.process('push_notification_code', (job, done) => {
  sendNotification(job.data.phoneNumber, job.data.message);
  done();
});
