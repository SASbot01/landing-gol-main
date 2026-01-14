import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Terms() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <div className="container mx-auto px-6 py-12 max-w-4xl">
                <Link to="/">
                    <Button variant="ghost" className="mb-8">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Button>
                </Link>

                <h1 className="font-display text-4xl md:text-5xl mb-8">Terms & Conditions</h1>

                <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
                    <p className="text-sm text-muted-foreground">Last updated: January 5, 2026</p>

                    <section>
                        <h2 className="font-display text-2xl text-white mb-4">1. Agreement to Terms</h2>
                        <p>
                            By accessing or using Game of Life ("the Service"), you agree to be bound by these Terms and Conditions.
                            If you disagree with any part of these terms, you may not access the Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl text-white mb-4">2. Early Access Reservation</h2>
                        <p>
                            The €1.00 early access reservation fee grants you:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Priority access to Game of Life v1.0 upon launch</li>
                            <li>A 40% discount on the lifetime license (approximately €58 instead of €97.99)</li>
                            <li>Immediate access to the beta version of the platform</li>
                            <li>An "Early Adopter" badge within the platform</li>
                            <li>Initial XP bonus upon account creation</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl text-white mb-4">3. Refund Policy</h2>
                        <p>
                            The €1.00 reservation fee is fully refundable within 14 days of payment.
                            To request a refund, contact us at support@gameoflife.com with your payment confirmation.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl text-white mb-4">4. Service Availability</h2>
                        <p>
                            Game of Life is currently in development. We aim to launch v1.0 in 2026, but we reserve the right
                            to modify the launch timeline. Beta access will be granted as features become available.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl text-white mb-4">5. User Data</h2>
                        <p>
                            By using Game of Life, you agree to our collection and use of your data as described in our
                            Privacy Policy. You retain ownership of all data you input into the platform.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl text-white mb-4">6. Acceptable Use</h2>
                        <p>
                            You agree not to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Use the Service for any illegal purposes</li>
                            <li>Attempt to gain unauthorized access to the Service</li>
                            <li>Interfere with or disrupt the Service</li>
                            <li>Share your account credentials with others</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl text-white mb-4">7. Intellectual Property</h2>
                        <p>
                            The Service and its original content, features, and functionality are owned by SASbot01 Corp
                            and are protected by international copyright, trademark, and other intellectual property laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl text-white mb-4">8. Limitation of Liability</h2>
                        <p>
                            In no event shall Game of Life, nor its directors, employees, partners, agents, suppliers, or affiliates,
                            be liable for any indirect, incidental, special, consequential or punitive damages, including without
                            limitation, loss of profits, data, use, goodwill, or other intangible losses.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl text-white mb-4">9. Changes to Terms</h2>
                        <p>
                            We reserve the right to modify or replace these Terms at any time. We will provide notice of
                            any significant changes by email or through the Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl text-white mb-4">10. Contact Information</h2>
                        <p>
                            For questions about these Terms, please contact us at:
                        </p>
                        <p className="mt-2">
                            Email: legal@gameoflife.com<br />
                            Address: SASbot01 Corp, [Your Address]
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
