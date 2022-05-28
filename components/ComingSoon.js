import Link from 'next/link';

export default function ComingSoon() {
  return (
    <div className="coming-soon">
      <div className="coming-soon-text">
        <h3 className="coming-soon-title">Oops!</h3>
        <p className="coming-soon-para">
          While this section isn't ready just yet, the content and functionality
          will apprear here soon.
        </p>
        <p className="coming-soon-para">
          In the meantine, feel free to explore other cool features, like{' '}
          <Link href="/shop">
            <a className="coming-soon-link">the list of our products</a>
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
