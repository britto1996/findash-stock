import Image from "next/image";

const Testimonials = ({
  quote,
  authorName,
  authorJob,
}: {
  quote: string;
  authorName: string;
  authorJob: string;
}) => {
  return (
    <section className="auth-right-section">
      <div className="z-10 relative lg:mt-4 lg:mb-16">
        <blockquote className="auth-blockquote">
          <span className="text-blue-700">{quote.slice(0, 7)}</span>
          {quote.slice(7, quote.length)}
        </blockquote>
        <div className="flex items-center justify-between">
          <div>
            <cite className="auth-testimonial-author">- {authorName}</cite>
            <p className="max-md:text-xs text-gray-500">{authorJob}</p>
          </div>
        </div>
        <div className="flex items-center gap-0.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <Image
              src="/icons/star.svg"
              alt="star"
              key={star}
              width={20}
              height={20}
              className="w-5 h-5"
              loading="eager"
            />
          ))}
        </div>
      </div>
      <div className="flex-1 relative">
        <Image
          src={"/assets/findash-dashboard.png"}
          alt="Dashboard Preview"
          width={1440}
          height={1150}
          className="auth-dashboard-preview absolute top-0"
        />
      </div>
    </section>
  );
};

export default Testimonials;
