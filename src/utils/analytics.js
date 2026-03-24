/**
 * Simple Analytics Wrapper for LearnAMath
 * In production, this would connect to PostHog, Google Analytics, or a custom Supabase table.
 */

const analytics = {
    trackEvent: (eventName, properties = {}) => {
        const timestamp = new Date().toISOString();
        const eventData = {
            event: eventName,
            properties: {
                ...properties,
                url: window.location.pathname, // pathname only, not full href
            },
            timestamp
        };

        // Log to console in development
        if (import.meta.env.DEV) {
            console.log(`[Analytics] ${eventName}`, properties);
        }

        // Prepare for production: Send to an endpoint
        // fetch('/api/analytics', { method: 'POST', body: JSON.stringify(eventData) });

        // For now, we'll store in localStorage to simulate a "data pool" for improvement
        try {
            const logs = JSON.parse(localStorage.getItem('mm_analytics_logs') || '[]');
            logs.push(eventData);
            // Keep only last 100 logs in local storage for local-only demo
            if (logs.length > 100) logs.shift();
            localStorage.setItem('mm_analytics_logs', JSON.stringify(logs));
        } catch (e) {
            console.error('Failed to save analytics log', e);
        }
    },

    trackQuestionResult: (topicId, questionId, difficulty, isCorrect) => {
        analytics.trackEvent('question_result', {
            topicId,
            questionId,
            difficulty,
            isCorrect
        });
    },

    trackTopicCompletion: (topicId, timeSpentSeconds, score) => {
        analytics.trackEvent('topic_completed', {
            topicId,
            timeSpentSeconds,
            score
        });
    },

    trackError: (error, componentName) => {
        // Only store message and component — never the full stack trace
        analytics.trackEvent('error', {
            message: error.message || String(error),
            component: componentName,
        });
        // Log full stack only in dev console
        if (import.meta.env.DEV) {
            console.error(`[Analytics Error - ${componentName}]`, error);
        }
    }
};

export default analytics;
