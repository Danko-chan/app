"use client";
import { Button } from "@/components/ui/button";

export default function ModulePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Safe Browsing Practices</h1>

      <div className="prose max-w-none">
        <h2>Why Safe Browsing Matters</h2>
        <p>
          Browsing the internet is an essential part of modern life, but it also
          exposes users to various risks, including phishing, malware, and data
          theft. Adopting safe browsing practices can help protect your personal
          information and devices.
        </p>

        <h2>Key Safe Browsing Practices</h2>
        <ul>
          <li>
            <strong>Use HTTPS:</strong> Always check for "https://" in the URL
            and a padlock icon in the address bar before entering sensitive
            information. This indicates the site uses encryption to protect your
            data.
          </li>
          <li>
            <strong>Be Cautious with Links:</strong> Avoid clicking on
            suspicious or unfamiliar links, especially those sent via email,
            social media, or pop-ups.
          </li>
          <li>
            <strong>Verify Website Authenticity:</strong> Double-check the
            website's domain name to ensure it matches the official site of the
            organization or service.
          </li>
          <li>
            <strong>Avoid Public Wi-Fi for Sensitive Transactions:</strong>{" "}
            Public networks are often insecure. Use a virtual private network
            (VPN) for secure browsing when on public Wi-Fi.
          </li>
          <li>
            <strong>Update Your Browser Regularly:</strong> Ensure your web
            browser is updated to the latest version to protect against known
            vulnerabilities.
          </li>
          <li>
            <strong>Beware of Pop-Ups:</strong> Use a browser with a built-in
            pop-up blocker and avoid interacting with unexpected pop-up ads or
            warnings.
          </li>
        </ul>

        <h2>Recognizing and Avoiding Malicious Websites</h2>
        <p>
          Malicious websites are designed to steal your information or infect
          your device with malware. Watch out for:
        </p>
        <ul>
          <li>
            <strong>Fake URLs:</strong> Look for subtle misspellings or extra
            characters in the domain name (e.g., "g00gle.com" instead of
            "google.com").
          </li>
          <li>
            <strong>Scare Tactics:</strong> Sites that use alarming language
            like "Your computer is infected!" to prompt immediate action.
          </li>
          <li>
            <strong>Unsecured Forms:</strong> Be cautious when submitting
            information on sites without HTTPS encryption.
          </li>
        </ul>

        <h2>Best Practices for Downloading Files</h2>
        <ul>
          <li>
            <strong>Download Only from Trusted Sources:</strong> Use official
            websites or reputable app stores to download software or files.
          </li>
          <li>
            <strong>Scan Downloads for Malware:</strong> Use antivirus software
            to scan downloaded files before opening them.
          </li>
          <li>
            <strong>Avoid Executable Files:</strong> Be wary of downloading
            .exe, .bat, or other executable files unless absolutely necessary.
          </li>
        </ul>

        <h2>Using Browser Extensions for Added Security</h2>
        <ul>
          <li>
            <strong>Ad Blockers:</strong> Prevent malicious ads and pop-ups that
            could lead to harmful sites.
          </li>
          <li>
            <strong>Anti-Phishing Extensions:</strong> Use extensions that
            identify and block phishing websites.
          </li>
          <li>
            <strong>Password Managers:</strong> Securely store and autofill your
            login credentials to avoid phishing attempts.
          </li>
        </ul>

        <h2>What to Do if You Encounter a Suspicious Website</h2>
        <ul>
          <li>
            Close the browser tab immediately without interacting with the site.
          </li>
          <li>
            Clear your browser cache and cookies to remove any tracking data.
          </li>
          <li>
            Report the website to your browser or security software provider.
          </li>
          <li>
            Monitor your accounts and devices for any signs of compromise.
          </li>
        </ul>

        <h2>Additional Resources for Safe Browsing</h2>
        <ul>
          <li>
            Use online tools like Google Safe Browsing to check if a site is
            secure.
          </li>
          <li>
            Stay informed about the latest online threats by reading security
            blogs or updates from trusted organizations.
          </li>
        </ul>
      </div>

      <div className="mt-8">
        <Button>Mark as Complete</Button>
      </div>
    </div>
  );
}
