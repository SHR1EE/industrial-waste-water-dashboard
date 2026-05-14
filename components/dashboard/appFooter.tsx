import Image from "next/image";
import Link from "next/link";
interface FooterProps {
  description: string;
  showStatusIndicators?: boolean;
  showAdminLinks?: boolean;
}
function AppFooter({ description }: FooterProps) {
  return (
    <div className="section w-full py-10 ">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo & Description */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-3">
            {/* <Image
              className="w-auto"
              src="/logo/logoWhite.png"
              width={40}
              height={40}
              alt="logo"
            /> */}
            <span className="text-sm font-semibold text-[var(--ink)] uppercase">
              Mr&MissHappiness
            </span>
          </div>
          <p className="text-xs text-[var(--warm-gray)] max-w-md leading-relaxed">
            {description}
          </p>
        </div>

        {/* Status Indicators */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-xs">
          <div className="flex items-center gap-2 text-[var(--warm-gray)]">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            <span>Secure Connection</span>
          </div>
          <div className="flex items-center gap-2 text-[var(--warm-gray)]">
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <span>Data Protected</span>
          </div>
          <div className="flex items-center gap-2 text-[var(--warm-gray)]">
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <span>Ellipsis Verified</span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 pt-6 border-t border-[var(--border-strong)]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--warm-gray)]">
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} Ellipsis of Happiness Foundation.
            Spreading happiness, one smile at a time.
          </div>
          <div className="flex flex-wrap items-center gap-6 justify-center">
            <Link
              href="/privacy-policy"
              className="hover:text-[var(--gold)] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[var(--gold)] transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/refund-policy"
              className="hover:text-[var(--gold)] transition-colors"
            >
              Refund Policy
            </Link>
            <Link
              href="/contact"
              className="hover:text-[var(--gold)] transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppFooter;
