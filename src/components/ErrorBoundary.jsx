import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.error("ErrorBoundary caught an error:", error, errorInfo);
        this.setState({ errorInfo });
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    minHeight: '100vh', backgroundColor: 'var(--bg-color)', color: 'var(--text-color)', textAlign: 'center', padding: '2rem'
                }}>
                    <div className="glass-panel" style={{ padding: '2rem', maxWidth: '600px', width: '100%' }}>
                        <h2 className="glow-text" style={{ color: 'var(--accent-error)', marginBottom: '1rem' }}>Something went wrong.</h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>We encountered an unexpected error. The mathematical forces were too strong!</p>
                        {import.meta.env.DEV && (
                            <details style={{ whiteSpace: 'pre-wrap', textAlign: 'left', backgroundColor: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px', overflow: 'auto', maxHeight: '300px', fontSize: '14px' }}>
                                <summary style={{ cursor: 'pointer', fontWeight: 'bold', marginBottom: '0.5rem' }}>View Technical Details</summary>
                                {this.state.error && this.state.error.toString()}
                                <br />
                                {this.state.errorInfo && this.state.errorInfo.componentStack}
                            </details>
                        )}
                        <button
                            className="btn option-btn"
                            style={{ marginTop: '2rem', backgroundColor: 'var(--primary-color)' }}
                            onClick={() => window.location.reload()}
                        >
                            Reload Application
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
