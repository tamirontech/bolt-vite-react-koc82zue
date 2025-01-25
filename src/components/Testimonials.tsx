import { Card, CardContent } from "./ui/card";

const testimonials = [
  {
    quote: "Quantm Tech transformed our security posture. Their proactive approach has kept us safe from numerous threats.",
    author: "Sarah Johnson",
    position: "CTO, TechStart Inc.",
  },
  {
    quote: "The best investment we've made in our company's security. Professional, responsive, and truly expert service.",
    author: "Michael Chen",
    position: "CEO, DataFlow Solutions",
  },
  {
    quote: "Their managed security services give us peace of mind. We can focus on our business knowing we're protected.",
    author: "Emily Rodriguez",
    position: "Operations Director, SecureGrowth",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-quantm-white to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-quantm-navy mb-4">
            Trusted by Growing Businesses
          </h2>
          <p className="text-quantm-gray text-lg max-w-2xl mx-auto">
            See what our clients say about our cybersecurity solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <svg
                    className="h-8 w-8 text-quantm-blue opacity-50"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <p className="text-quantm-gray mb-4">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold text-quantm-navy">{testimonial.author}</p>
                  <p className="text-sm text-quantm-gray">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};