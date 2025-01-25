import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Settings, Bell, LineChart, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const FirewallManagement = () => {
  return (
    <div className="min-h-screen bg-quantm-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-quantm-navy mb-6">Firewall Management</h1>
        <p className="text-lg text-gray-600 mb-12">
          Protect your network with our comprehensive firewall management services.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Shield className="h-12 w-12 text-quantm-blue mb-4" />
              <CardTitle>24/7 Monitoring</CardTitle>
              <CardDescription>
                Our team monitors your firewall around the clock to ensure maximum security.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Lock className="h-12 w-12 text-quantm-blue mb-4" />
              <CardTitle>Advanced Threat Protection</CardTitle>
              <CardDescription>
                Protect against sophisticated cyber threats with our advanced firewall solutions.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Settings className="h-12 w-12 text-quantm-blue mb-4" />
              <CardTitle>Custom Configuration</CardTitle>
              <CardDescription>
                Tailor your firewall settings to meet the specific needs of your business.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Bell className="h-12 w-12 text-quantm-blue mb-4" />
              <CardTitle>Real-Time Alerts</CardTitle>
              <CardDescription>
                Receive immediate notifications for any suspicious activity detected by your firewall.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <LineChart className="h-12 w-12 text-quantm-blue mb-4" />
              <CardTitle>Performance Analytics</CardTitle>
              <CardDescription>
                Gain insights into your firewall's performance and security posture with our analytics tools.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="h-12 w-12 text-quantm-blue mb-4" />
              <CardTitle>Expert Support</CardTitle>
              <CardDescription>
                Our cybersecurity experts are here to assist you with any firewall-related inquiries.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="bg-quantm-blue hover:bg-quantm-navy text-white">
            Get Started with Firewall Management
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FirewallManagement;
