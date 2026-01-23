import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Privacy() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <div className="container mx-auto px-6 py-12 max-w-4xl">
                <Link to="/">
                    <Button variant="ghost" className="mb-8">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Button>
                </Link>

                <h1 className="font-display text-4xl md:text-5xl mb-8">Privacy Policy</h1>

                <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
                    <p className="text-sm text-muted-foreground">Last updated: January 5, 2026</p>

                    <section>
                        <h2 className="font-display text-2xl text-white mb-4">1. Information We Collect</h2>
                        <p>
                            We collect information that you provide directly to us, including:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Account Information:</strong> Email address, name, and password</li>
                            <li><strong>Profile Data:</strong> Personal statistics, goals, and preferences</li>
                            <li><strong>Usage Data:</strong> Habits, tasks, projects, and financial data you input</li>
                            <li><strong>Payment Information:</strong> Processed securely through Stripe (we do not store card details)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl text-white mb-4">2. How We Use Your Information</h2>
                        <p>
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Provide, maintain, and improve the Game of Life service</li>
                            <li>Process transactions and send related information</li>
                            <li>Send you technical notices, updates, and support messages</li>
                            <li>Respond to your comments and questions</li>
                            <li>Analyze usage patterns to improve user experience</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl text-white mb-4">3. Data Storage and Security</h2>
                        <p>
                            Your data is stored securely using industry-standard encryption:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>All data is encrypted in transit using TLS/SSL</li>
                            <li>Passwords are hashed using bcrypt</li>
                            <li>Database hosted on secure Supabase infrastructure</li>
                            <li>Regular security audits and updates</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl text-white mb-4">4. Data Sharing and Disclosure</h2>
                        <p>
                            We do not sell, trade, or rent your personal information to third parties. We may share your
                            information only in the following circumstances:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Service Providers:</strong> With trusted partners who assist in operating our service (e.g., Stripe for payments)</li>
                            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl text-white mb-4">5. Your Rights (GDPR Compliance)</h2>
                        <p>
                            If you are in the European Economic Area (EEA), you have the following rights:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Access:</strong> Request a copy of your personal data</li>
                            <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                            <li><strong>Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
                            <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
                            <li><strong>Objection:</strong> Object to processing of your data</li>
                        </ul>
                        <p className="mt-4">
                            To exercise these rights, contact us at privacy@gameoflife.com
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl text-white mb-4">6. Cookies and Tracking</h2>
                        <p>
                            We use cookies and similar tracking technologies to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Maintain your session and keep you logged in</li>
                            <li>Remember your preferences and settings</li>
                            <li>Analyze site traffic and usage patterns</li>
                        </ul>
                        <p className="mt-4">
                            You can control cookies through your browser settings, but disabling them may affect functionality.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl text-white mb-4">7. Third-Party Services</h2>
                        <p>
                            Game of Life integrates with third-party services:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Stripe:</strong> Payment processing (see Stripe's Privacy Policy)</li>
                            <li><strong>Supabase:</strong> Database and authentication (see Supabase's Privacy Policy)</li>
                            <li><strong>Google Calendar:</strong> Optional calendar integration (requires your consent)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl text-white mb-4">8. Data Retention</h2>
                        <p>
                            We retain your personal information for as long as your account is active or as needed to provide
                            you services. You may request deletion of your account and data at any time.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl text-white mb-4">9. Children's Privacy</h2>
                        <p>
                            Game of Life is not intended for users under the age of 13. We do not knowingly collect personal
                            information from children under 13.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl text-white mb-4">10. Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. We will notify you of any changes by
                            posting the new policy on this page and updating the "Last updated" date.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl text-white mb-4">11. Contact Us</h2>
                        <p>
                            If you have questions about this Privacy Policy, please contact us at:
                        </p>
                        <p className="mt-2">
                            Email: privacy@gameoflife.com<br />
                            Data Protection Officer: dpo@gameoflife.com<br />
                            Address: SASbot01 Corp, [Your Address]
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
