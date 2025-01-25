import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Shield, Clock, Users, Target, CheckCircle, BarChart, Lock, Laptop, Clock3, FileCheck, LineChart, ClipboardList } from "lucide-react";

const WhyQuantm = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-quantm-navy to-quantm-blue text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Beyond Traditional Security
            </h1>
            <p className="text-xl mb-8">
              We provide comprehensive cybersecurity solutions, from proactive defense to advanced threat response.
            </p>
            <Button variant="secondary" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* What's in it for You Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-quantm-navy mb-4">What's in it for You?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              At Quantm, we understand that everyone needs different things from a security partner. Whether you're managing the big picture or handling daily operations, here's how we support you:
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* CISO Card */}
            <div className="space-y-6">
              <Card className="p-6">
                <CardHeader>
                  <BarChart className="w-12 h-12 text-quantm-blue mb-4" />
                  <CardTitle className="text-2xl mb-2">CISO</CardTitle>
                  <CardDescription className="text-xl font-semibold text-quantm-navy">
                    Clarity, Confidence, and Board-Level Impact
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-lg text-quantm-navy mb-2">Top-Notch Security Program</h4>
                      <p className="text-gray-600">
                        Experience more than just protection—gain complete peace of mind with our best-in-class, proactive security strategy designed to handle any challenge.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-quantm-navy mb-2">Complete Transparency</h4>
                      <p className="text-gray-600">
                        Get clear visibility into your security investments with comprehensive reports and dashboards that demonstrate value to your CEO and Board.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-quantm-navy mb-2">Dedicated Security Team</h4>
                      <p className="text-gray-600">
                        Access our expert team for everything from technical support to strategic planning, ensuring you have the guidance you need, when you need it.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-quantm-navy mb-2">Demonstrate Leadership</h4>
                      <p className="text-gray-600">
                        Show executive leadership that your security program is proactive, efficient, and cost-effective, proving your strategic value to the organization.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* IT Security Ops Card */}
            <div className="space-y-6">
              <Card className="p-6">
                <CardHeader>
                  <Laptop className="w-12 h-12 text-quantm-blue mb-4" />
                  <CardTitle className="text-2xl mb-2">IT Security Ops</CardTitle>
                  <CardDescription className="text-xl font-semibold text-quantm-navy">
                    Control, Backup, and Strategic Focus
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-lg text-quantm-navy mb-2">Maintain Control</h4>
                      <p className="text-gray-600">
                        Unlike "black box" solutions, we provide full visibility and access, ensuring you always know what's happening in your security environment.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-quantm-navy mb-2">Extended Team Support</h4>
                      <p className="text-gray-600">
                        We act as your security partners, enhancing your capabilities and helping you achieve better outcomes without adding to your workload.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-quantm-navy mb-2">Focus on Innovation</h4>
                      <p className="text-gray-600">
                        By handling routine tasks, we free up your time for strategic projects that drive value and advance your career.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-quantm-navy mb-2">Career Advancement</h4>
                      <p className="text-gray-600">
                        With more time for strategic initiatives, you'll be perfectly positioned to demonstrate your leadership potential and advance your career.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Value Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Clock3 className="w-12 h-12 text-quantm-blue mb-4" />
                <CardTitle className="text-xl text-quantm-navy">Day-to-Day Optimization for Everyday Opportunities</CardTitle>
                <CardDescription className="text-gray-600 mt-4">
                  We're not just here when things go wrong. Quantm is all about helping you level up every day, optimizing your security so it's always in top shape—because why wait for a crisis to improve?
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <FileCheck className="w-12 h-12 text-quantm-blue mb-4" />
                <CardTitle className="text-xl text-quantm-navy">A Strategic Partner, Not a Box-Checker</CardTitle>
                <CardDescription className="text-gray-600 mt-4">
                  We're your security co-pilot, not just a vendor ticking boxes like EDR or vulnerability management. Quantm works with you to build a comprehensive, ongoing security program that tackles real challenges and maximizes opportunities.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Shield className="w-12 h-12 text-quantm-blue mb-4" />
                <CardTitle className="text-xl text-quantm-navy">Expert Guidance to Strengthen Your Security Posture</CardTitle>
                <CardDescription className="text-gray-600 mt-4">
                  Forget the fire drills—our experts help you enhance your security posture even when things are running smoothly, so you're ready for whatever's next (good or bad).
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <LineChart className="w-12 h-12 text-quantm-blue mb-4" />
                <CardTitle className="text-xl text-quantm-navy">Value All Year, Not Just During Challenges</CardTitle>
                <CardDescription className="text-gray-600 mt-4">
                  Why only get value when things go sideways? Quantm brings ongoing support and improvements every day, ensuring you're always getting the most out of your investment—whether there's a challenge or an opportunity.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <BarChart className="w-12 h-12 text-quantm-blue mb-4" />
                <CardTitle className="text-xl text-quantm-navy">Reports Your Execs Will Love (And Actually Understand)</CardTitle>
                <CardDescription className="text-gray-600 mt-4">
                  We deliver easy-to-digest, actionable reports that make you look great to senior management. Whether it's for a board meeting or just peace of mind, we've got the numbers that matter.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <ClipboardList className="w-12 h-12 text-quantm-blue mb-4" />
                <CardTitle className="text-xl text-quantm-navy">We Handle the Tedious Stuff, You Focus on the Fun Stuff</CardTitle>
                <CardDescription className="text-gray-600 mt-4">
                  You didn't get into security to fill out forms. Let us take care of the paperwork—like security questionnaires and compliance tasks—so you can focus on the projects that actually excite you.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-12 flex justify-center gap-6">
            <Button className="bg-gradient-to-r from-quantm-blue to-quantm-navy text-white px-8 py-3">
              View Pricing
            </Button>
            <Button variant="outline" className="border-quantm-blue text-quantm-blue hover:bg-quantm-blue hover:text-white px-8 py-3">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyQuantm;
