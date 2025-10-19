import { Link } from 'wouter';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="space-y-4">
            <Logo className="h-12" variant="white" />
            <p className="text-sm opacity-90">
              Navigating the AI Future of Thurston County. Together.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">
                  <a className="opacity-90 hover:opacity-100 transition-opacity">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="opacity-90 hover:opacity-100 transition-opacity">
                    About the Council
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/summit">
                  <a className="opacity-90 hover:opacity-100 transition-opacity">
                    The Inaugural Summit
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/get-involved">
                  <a className="opacity-90 hover:opacity-100 transition-opacity">
                    Get Involved
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy">
                  <a className="opacity-90 hover:opacity-100 transition-opacity">
                    Privacy Policy
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <a className="opacity-90 hover:opacity-100 transition-opacity">
                    Terms of Use
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/refund">
                  <a className="opacity-90 hover:opacity-100 transition-opacity">
                    Refund Policy
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal/Copyright */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold">Initiative Partner</h3>
            <p className="text-sm opacity-90">
              The Thurston AI Business Council is an initiative powered by the American Marketing Alliance SPC.
            </p>
            <a 
              href="https://amaspc.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm underline hover:opacity-100 transition-opacity inline-block"
            >
              Visit AMA SPC Website →
            </a>
            <p className="text-xs opacity-75 pt-4 border-t border-white/20">
              © 2025 | Thurston AI Business Council
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}