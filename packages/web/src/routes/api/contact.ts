import mail from '@sendgrid/mail'
import type { MessageContent } from '$lib/types'

/** @type {import('@sveltejs/kit').RequestHandler} */

export async function post({ request }) {
  const body = await request.formData()
  await mail.setApiKey(process.env["SENDGRID_API_KEY"])

  const toAddress = import.meta.env.VITE_EMAIL_ADDRESS_TO.toString()
  const fromAddress = import.meta.env.VITE_EMAIL_ADDRESS_FROM.toString()

  const msg:MessageContent = {
    to: toAddress,
    from: fromAddress,
    subject: `New Contact Form Submission from ${body.get("name")} at ${body.get("email")}`,
    text: body.get("message"),
    html: `<p>New Submission from ${body.get("name")} at ${body.get("email")}</p>
          <p>Message Subject: ${body.get("reason")}</p>
          <p>${body.get("message")}</p>`,
  }

  mail
    .send(msg)
    .then(res => {
      return {
        status: 200,
        body: res,
      };
    })
    .catch((error) => {
      console.error(error)
      return {
        status: 500,
        headers: {
          Location: '/contact?status=error'
        },
        body: { error },
      }
    })

	return {
    status: 302,
    headers: {
      Location: '/contact?status=success'
    }
  };
}