import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Shield, Clock, BarChart, CheckCircle2, AlertTriangle, Lock, Building2, DollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CyberInsurance = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-quantm-navy to-quantm-blue pt-32 pb-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Protect Your Business with Enterprise-Grade Cyber Insurance
            </h1>
            <p className="text-xl mb-8">
              In today's digital landscape, cyber threats are inevitable. Our comprehensive cyber insurance solution provides the protection and support your business needs to operate with confidence.
            </p>
            <Button variant="secondary" size="lg">
              Get a FREE Quote Today!
            </Button>
          </div>
        </div>
      </section>

      {/* Risk Awareness Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-quantm-navy mb-12 text-center">Why Cyber Insurance is Critical</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <AlertTriangle className="h-8 w-8 text-red-500 mb-4" />
                <CardTitle>Growing Cyber Threats</CardTitle>
                <CardDescription>
                  60% of small businesses close within 6 months of a cyber attack. Don't let your business become a statistic.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <DollarSign className="h-8 w-8 text-green-500 mb-4" />
                <CardTitle>Financial Protection</CardTitle>
                <CardDescription>
                  Average cost of a data breach is $4.35 million. Our coverage ensures your business stays financially secure.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Building2 className="h-8 w-8 text-quantm-blue mb-4" />
                <CardTitle>Business Continuity</CardTitle>
                <CardDescription>
                  Minimize downtime and maintain operations with our comprehensive incident response support.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Clock className="w-12 h-12 text-quantm-blue mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-quantm-navy">5 mins</h3>
              <p className="text-gray-600">to complete online cyber insurance process</p>
            </div>
            <div>
              <Shield className="w-12 h-12 text-quantm-blue mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-quantm-navy">40+</h3>
              <p className="text-gray-600">cyber insurance carriers in our network</p>
            </div>
            <div>
              <BarChart className="w-12 h-12 text-quantm-blue mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-quantm-navy">3,000</h3>
              <p className="text-gray-600">MSP clients protected across the country</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-quantm-navy mb-8 text-center">
            Insight 500 Coverage Details
          </h2>
          <div className="max-w-4xl mx-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-2/3">Coverage Feature</TableHead>
                  <TableHead className="w-1/3 text-center">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  "Active loss prevention",
                  "Continuous cyber risk monitoring",
                  "Signature success package",
                  "MSP instant fund access",
                  "Wire/ACH transfer losses",
                  "3X phishing or smishing payment",
                  "Cyber insurance deductible coverage",
                  "SMS / email gift card scams",
                  "Cyber insurance analysis",
                  "Ransom payment",
                  "Business interruption loss",
                  "Incident response service",
                  "Data recovery service"
                ].map((feature) => (
                  <TableRow key={feature}>
                    <TableCell>{feature}</TableCell>
                    <TableCell className="text-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 inline-block" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-quantm-navy mb-12 text-center">
            Enterprise-Grade Protection Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <Lock className="h-8 w-8 text-quantm-blue mb-4" />
                <CardTitle>Proactive Security Measures</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span>24/7 Security monitoring and threat detection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span>Regular security assessments and vulnerability scanning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span>Employee security awareness training</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-quantm-blue mb-4" />
                <CardTitle>Comprehensive Response Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span>Dedicated incident response team</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span>Legal and PR support during incidents</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span>Business continuity planning and support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-quantm-navy mb-8 text-center">
            Additional Benefits
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-quantm-blue mr-2 mt-1 flex-shrink-0" />
                <span>$500,000 Warranty exclusively to protect MSPs internally*</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-quantm-blue mr-2 mt-1 flex-shrink-0" />
                <span>Full access to the Cork Active Loss Prevention Dashboard to view compliance alerts across all clients</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-quantm-blue mr-2 mt-1 flex-shrink-0" />
                <span>Unlimited Technical Training & Onboarding Sessions</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-quantm-blue mr-2 mt-1 flex-shrink-0" />
                <span>Unlimited US-Based Support</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-quantm-blue mr-2 mt-1 flex-shrink-0" />
                <span>Co-Branded Sales & Marketing Campaigns and Training</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-quantm-blue mr-2 mt-1 flex-shrink-0" />
                <span>Instant Access to discounted Cyber Insurance quotes for all clients</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Executive Assurance Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-quantm-navy mb-12 text-center">
            Our Commitment to Your Business
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>For Business Leaders</CardTitle>
                <CardDescription>
                  Clear ROI and comprehensive protection for your business investments. Regular reports and metrics to demonstrate security posture improvements.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>For IT Leaders</CardTitle>
                <CardDescription>
                  Enhanced security capabilities, reduced workload on your team, and expert support when you need it most. Full visibility into security operations.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>For Company Owners</CardTitle>
                <CardDescription>
                  Peace of mind knowing your business is protected, compliance requirements are met, and financial risks are mitigated.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-quantm-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Protect Your Business Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that trust us with their cyber security. Get comprehensive coverage that gives you peace of mind and lets you focus on growing your business.
          </p>
          <Button variant="secondary" size="lg">
            Get Started Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CyberInsurance;
