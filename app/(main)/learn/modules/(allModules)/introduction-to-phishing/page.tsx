"use client";
import { Button } from "@/components/ui/button";

export default function ModulePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Introduction to Phishing</h1>

      <div className="prose max-w-none">
        <h2>What is Phishing?</h2>
        <p>
          Phishing is a type of cyber attack where attackers use deceptive
          techniques to trick individuals into revealing sensitive information,
          such as login credentials, credit card numbers, or other personal
          data. These attacks often occur through emails, websites, or text
          messages disguised as legitimate communications.
        </p>

        <h2>How Phishing Works</h2>
        <p>Phishing typically involves the following steps:</p>
        <ol>
          <li>
            <strong>Crafting a Deceptive Message:</strong> The attacker creates
            an email or message that appears to come from a trusted source, such
            as a bank, employer, or well-known service provider.
          </li>
          <li>
            <strong>Enticing the Victim to Act:</strong> The message usually
            contains a sense of urgency or an enticing offer to prompt immediate
            action, such as clicking a link or downloading an attachment.
          </li>
          <li>
            <strong>Stealing Information:</strong> Once the victim interacts
            with the phishing content, they may be redirected to a fake website
            designed to capture their sensitive data or trigger a malware
            download.
          </li>
        </ol>

        <h2>Common Characteristics of Phishing Attacks</h2>
        <ul>
          <li>
            <strong>Urgency:</strong> Messages often claim that immediate action
            is required to avoid penalties or gain rewards.
          </li>
          <li>
            <strong>Generic Greetings:</strong> Emails may begin with phrases
            like "Dear User" or "Customer" instead of using your name.
          </li>
          <li>
            <strong>Inconsistent Email Addresses:</strong> The sender's email
            may look similar to a legitimate address but include subtle
            misspellings.
          </li>
          <li>
            <strong>Links to Fake Websites:</strong> URLs in the message might
            redirect to websites designed to mimic legitimate ones.
          </li>
          <li>
            <strong>Attachments with Malware:</strong> Attached files can
            contain malicious software that infects your device when opened.
          </li>
        </ul>

        <h2>Types of Phishing Attacks</h2>
        <ul>
          <li>
            <strong>Email Phishing:</strong> The most common type, where
            attackers send deceptive emails to steal credentials or personal
            information.
          </li>
          <li>
            <strong>Spear Phishing:</strong> A targeted attack aimed at specific
            individuals or organizations using personalized messages.
          </li>
          <li>
            <strong>Smishing:</strong> Phishing via SMS text messages.
          </li>
          <li>
            <strong>Vishing:</strong> Voice phishing attacks conducted over
            phone calls.
          </li>
          <li>
            <strong>Clone Phishing:</strong> Attackers create a nearly identical
            copy of a legitimate email and modify it with malicious links or
            attachments.
          </li>
        </ul>

        <h2>How to Protect Yourself</h2>
        <ul>
          <li>
            <strong>Verify Sender Information:</strong> Always check the
            sender's email address and ensure it matches the official domain of
            the organization.
          </li>
          <li>
            <strong>Be Wary of Links:</strong> Hover over links to inspect their
            destination before clicking. Avoid clicking on links in unsolicited
            emails.
          </li>
          <li>
            <strong>Use Spam Filters:</strong> Enable your email provider's spam
            filters to automatically block suspicious messages.
          </li>
          <li>
            <strong>Keep Software Updated:</strong> Regularly update your
            browser, operating system, and security software to protect against
            vulnerabilities.
          </li>
          <li>
            <strong>Educate Yourself:</strong> Stay informed about the latest
            phishing techniques and how to recognize them.
          </li>
        </ul>

        <h2>What to Do If You Suspect Phishing</h2>
        <ul>
          <li>Do not reply to the email or provide any information.</li>
          <li>Avoid clicking on any links or downloading attachments.</li>
          <li>Report the email to your email provider or IT team.</li>
          <li>
            Delete the email and block the sender to prevent future attempts.
          </li>
        </ul>
      </div>

      <div className="mt-8">
        <Button>Mark as Complete</Button>
      </div>
    </div>
  );
}
