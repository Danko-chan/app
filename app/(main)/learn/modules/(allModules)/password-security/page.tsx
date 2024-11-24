"use client";
import { Button } from "@/components/ui/button";

export default function ModulePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Password Security</h1>

      <div className="prose max-w-none">
        <h2>Why Password Security is Important</h2>
        <p>
          Passwords are the first line of defense against unauthorized access to
          your accounts and personal data. Weak or reused passwords are a major
          vulnerability exploited by attackers. Understanding and implementing
          strong password practices can significantly enhance your security.
        </p>

        <h2>Characteristics of a Strong Password</h2>
        <ul>
          <li>
            <strong>Length:</strong> Use at least 12-16 characters. Longer
            passwords are harder to crack.
          </li>
          <li>
            <strong>Complexity:</strong> Include a mix of uppercase and
            lowercase letters, numbers, and special characters.
          </li>
          <li>
            <strong>Uniqueness:</strong> Avoid reusing passwords across multiple
            accounts.
          </li>
          <li>
            <strong>No Personal Information:</strong> Do not include easily
            guessable information such as your name, birthday, or common words.
          </li>
        </ul>

        <h2>Tips for Managing Passwords</h2>
        <ul>
          <li>
            <strong>Use a Password Manager:</strong> A password manager helps
            you generate, store, and autofill strong, unique passwords for all
            your accounts.
          </li>
          <li>
            <strong>Enable Two-Factor Authentication (2FA):</strong> Add an
            extra layer of security by requiring a second form of verification,
            such as a code sent to your phone or email.
          </li>
          <li>
            <strong>Update Passwords Regularly:</strong> Change your passwords
            periodically, especially for sensitive accounts.
          </li>
          <li>
            <strong>Avoid Writing Passwords Down:</strong> Storing passwords in
            an insecure location, like a sticky note, increases the risk of them
            being compromised.
          </li>
        </ul>

        <h2>Common Password Mistakes to Avoid</h2>
        <ul>
          <li>
            Using common passwords such as "123456," "password," or "qwerty."
          </li>
          <li>Reusing passwords across multiple sites or accounts.</li>
          <li>
            Sharing passwords with others or over insecure communication
            channels.
          </li>
          <li>
            Ignoring alerts about password breaches and failing to update
            passwords promptly.
          </li>
        </ul>

        <h2>How Attackers Exploit Weak Passwords</h2>
        <ul>
          <li>
            <strong>Brute Force Attacks:</strong> Automated tools systematically
            guess passwords until they find the correct one.
          </li>
          <li>
            <strong>Credential Stuffing:</strong> Hackers use stolen login
            credentials from one site to try accessing accounts on other sites.
          </li>
          <li>
            <strong>Phishing:</strong> Attackers trick users into revealing
            their passwords through deceptive emails or websites.
          </li>
          <li>
            <strong>Keylogging:</strong> Malware records every keystroke to
            capture sensitive information, including passwords.
          </li>
        </ul>

        <h2>Steps to Recover from a Password Breach</h2>
        <ol>
          <li>
            <strong>Change the Password:</strong> Update the compromised account
            with a strong, unique password immediately.
          </li>
          <li>
            <strong>Enable 2FA:</strong> Add two-factor authentication to
            strengthen account security.
          </li>
          <li>
            <strong>Review Account Activity:</strong> Look for unauthorized
            activity or changes in your account.
          </li>
          <li>
            <strong>Update Other Accounts:</strong> If you reused the breached
            password, change it for all accounts where it was used.
          </li>
          <li>
            <strong>Monitor for Identity Theft:</strong> Keep an eye on your
            credit report and financial accounts for signs of misuse.
          </li>
        </ol>
      </div>

      <div className="mt-8">
        <Button>Mark as Complete</Button>
      </div>
    </div>
  );
}
