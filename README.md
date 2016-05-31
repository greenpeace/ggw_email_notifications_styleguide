

    ╭─────────╮
    │╲  GGW  ╱│   Greenpeace Greenwire Emails
    │╱\_____/╲│   Email Notification templates
    ╰─────────╯



GGW Emails
================

(c) Greenpeace International

Licensed under Creative Commons Attribution-ShareAlike 3.0 Unported License.


About
================

Greenpeace Greenwire is an international platform for the greenpeace volunteer community.
Check it out: https://greenwire.greenpeace.org

This repository serves as a styleguide for the redesign of the notifications that are
send when an activity is happening on the platform. Some examples of notifications:
- Someone commented on an article you wrote
- Someone invited you to join an event
- Someone mentioned you in a shout
- Etc.

How to get started
===================

Emails require some 10 year old html and all style needs to be inline.
Thankfully this doesn't mean your code needs to be all over the place.

We use handle bar to manage templating and a little bit of grunt magic to compile the template and inline the CSS.

```
npm install --dev
grunt
```

You'll then find the email templates ready to use in /build


Credits
================

Based on an MailChimp modular template patterns for email blueprints.

https://github.com/mailchimp/email-blueprints
