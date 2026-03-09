import React from 'react';
import Button from './Button';

const LegalModal = ({ show, onClose, type }) => {
    if (!show) return null;

    const content = type === 'terms' ? {
        title: 'Terms of Service',
        text: `
# Terms of Service for MathMastery SG

*Last Updated: March 6, 2026*

## 1. Acceptance of Terms
By accessing or using MathMastery SG ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.

## 2. Description of Service
MathMastery SG is a gamified educational platform designed to help students master the Singapore MOE math syllabus.

## 3. User Accounts
- Users are responsible for maintaining the confidentiality of their login credentials.
- Users must provide accurate information when setting up an account.
- Parent/Guardian consent is required for users under the age of 13.

## 4. Intellectual Property
- All content on MathMastery SG, including text, graphics, logos, and code, is the property of MathMastery SG or its content suppliers.
- Math content is based on the Singapore MOE syllabus but is our original expression/presentation of that syllabus.

## 5. Prohibited Conduct
Users agree not to:
- Use the Service for any illegal purpose.
- Attempt to gain unauthorized access to our systems.
- Use automated systems (bots) to scrape content or farm XP.

## 6. Limitation of Liability
MathMastery SG is provided "as is" without warranties of any kind. We are not liable for any indirect, incidental, or consequential damages.

## 7. Changes to Terms
We reserve the right to modify these terms at any time. Continued use of the Service after changes constitutes acceptance of the new terms.
    `
    } : {
        title: 'Privacy Policy',
        text: `
# Privacy Policy for MathMastery SG

*Last Updated: March 6, 2026*

## 1. Information We Collect
We collect information to provide a better learning experience:
- **Personal Information:** Name, email address (via Google Login).
- **Usage Data:** XP earned, levels reached, topics completed, and missed questions.
- **Technical Data:** IP address, browser type, and device information.

## 2. How We Use Your Information
- To personalize your learning journey.
- To improve our content (e.g., identifying which math problems are too difficult).
- To maintain and secure our service.
- To communicate with you regarding your progress or technical issues.

## 3. Data Storage and Security
We use industry-standard security measures to protect your data. Data is stored on secure servers (e.g., Supabase/AWS).

## 4. Data Sharing
We do not sell your personal data. We may share anonymized, aggregated data with educational partners or for research purposes.

## 5. Your Rights (PDPA/GDPR)
Depending on your location, you have the right to:
- Access the personal data we hold about you.
- Request correction of inaccurate data.
- Request deletion of your data ("Right to be Forgotten").

## 6. Children's Privacy
We comply with Singapore's PDPA and international standards like COPPA. For users under 13, we encourage parental supervision and require guardian consent for account creation.

## 7. Contact Us
If you have questions about this policy, please contact us at [Your Email Address].
    `
    };

    return (
        <div className="modal-overlay" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            backdropFilter: 'blur(10px)',
            padding: '20px'
        }}>
            <div className="glass-panel" style={{
                maxWidth: '700px',
                width: '100%',
                maxHeight: '80vh',
                overflowY: 'auto',
                padding: 'var(--space-8)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-6)',
                position: 'relative',
                border: '1px solid var(--primary-color)'
            }}>
                <h2 className="gradient-text">{content.title}</h2>
                <div style={{
                    textAlign: 'left',
                    fontSize: '0.95rem',
                    color: 'var(--text-color)',
                    lineHeight: '1.6',
                    whiteSpace: 'pre-wrap'
                }}>
                    {content.text}
                </div>
                <Button onClick={onClose}>Close</Button>
            </div>
        </div>
    );
};

export default LegalModal;
