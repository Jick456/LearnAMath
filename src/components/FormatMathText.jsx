import React from 'react';
import DOMPurify from 'dompurify';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import MathDiagram from './MathDiagrams';

// Robust parser to handle inline ($ $) and block ($$ $$) math, as well as escaped variants and diagrams
export const FormatMathText = ({ text }) => {
    if (!text) return null;

    const renderTokens = (str) => {
        if (!str.trim()) return null;
        // Split by Block Math first
        const blockRegex = /(\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|\\\\\[[\s\S]*?\\\\\])/g;
        const blocks = str.split(blockRegex);
        
        return blocks.map((block, i) => {
            if (i % 2 === 1) { // It's block math
                let mathStr = block.replace(/^(\$\$|\\\[|\\\\\[)|(\$\$|\\\]|\\\\\])$/g, '');
                // Clean up escaped slashes if any
                mathStr = mathStr.replace(/\\\\\\\\/g, '\\\\').replace(/\\\\/g, '\\');
                try {
                    return <div key={i} className="math-block"><BlockMath math={mathStr} /></div>;
                } catch (e) {
                    return <div key={i} style={{ color: 'var(--accent-error)' }}>[Math Error: {mathStr}]</div>;
                }
            }
            
            // It's text, split by inline math
            const inlineRegex = /(\$[\s\S]*?\$|\\\([\s\S]*?\\\)|\\\\\([\s\S]*?\\\\\))/g;
            const inlines = block.split(inlineRegex);
            
            return inlines.map((inline, j) => {
                if (j % 2 === 1) { // It's inline math
                    let mathStr = inline.replace(/^(\$|\\\(|\\\\\()|(\$|\\\)|\\\\\))$/g, '');
                    mathStr = mathStr.replace(/\\\\\\\\/g, '\\\\').replace(/\\\\/g, '\\');
                    try {
                        return <span key={`${i}-${j}`} className="math-span"><InlineMath math={mathStr} /></span>;
                    } catch (e) {
                        return <span key={`${i}-${j}`} style={{ color: 'var(--accent-error)' }}>[Math Error: {mathStr}]</span>;
                    }
                }
                
                // Regular text
                if (!inline) return null;
                return (
                    <span
                        key={`${i}-${j}`}
                        className="text-span"
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(inline.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'))
                        }}
                    />
                );
            });
        });
    };

    const diagramParts = text.split(/\[DIAGRAM:\s*(.*?)\]/g);

    return (
        <div className="math-text-container" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {diagramParts.map((diagramPart, diagramIdx) => {
                if (diagramPart === undefined) return null;

                // Odd indices are the captured diagram types
                if (diagramIdx % 2 !== 0) {
                    return <MathDiagram key={`diagram-${diagramIdx}`} type={diagramPart.trim()} />;
                }

                // Even indices are regular text blocks containing math
                const lines = diagramPart.split('\n');
                let currentAlertType = null;

                return lines.map((line, idx) => {
                    // Fix \frac bug where \f is incorrectly evaluated as Form Feed in JS data strings
                    let processLine = line.replace(/\x0Crac/g, '\\frac').replace(/\\rac/g, '\\frac');
                    
                    let isAlert = false;
                    
                    if (processLine.startsWith('> [!')) {
                        isAlert = true;
                        const match = processLine.match(/> \[!(\w+)\](.*)/);
                        if (match) {
                            currentAlertType = match[1].toLowerCase();
                            processLine = match[2].trim();
                        }
                    } else if (processLine.startsWith('>')) {
                        isAlert = true;
                        processLine = processLine.substring(1).trim();
                    } else {
                        currentAlertType = null; // reset if not an alert line
                    }

                    const parsed = renderTokens(processLine);
                    if (!parsed && !isAlert && !processLine.trim()) return null;
                    
                    if (isAlert) {
                        let borderColor = 'var(--celestial-blue)';
                        if (currentAlertType === 'tip') borderColor = 'var(--emerald-green)';
                        if (currentAlertType === 'warning') borderColor = 'var(--accent-warning)';
                        if (currentAlertType === 'important') borderColor = 'var(--pyro-red)';

                        return (
                            <div key={`line-${diagramIdx}-${idx}`} className="px-5 py-4 my-3 border-l-4 rounded-r-lg bg-black/20" style={{ borderColor }}>
                                {currentAlertType && processLine === '' ? (
                                    <strong style={{ display: 'block', color: borderColor, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>
                                        {currentAlertType}
                                    </strong>
                                ) : (
                                    <>
                                        {currentAlertType && idx > 0 && lines[idx-1].startsWith('> [!') && (
                                            <strong style={{ display: 'block', marginBottom: '0.5rem', color: borderColor, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>
                                                {currentAlertType}
                                            </strong>
                                        )}
                                        <div style={{ margin: 0, lineHeight: 1.6 }}>{parsed}</div>
                                    </>
                                )}
                            </div>
                        );
                    }

                    return (
                        <div key={`line-${diagramIdx}-${idx}`} style={{ 
                            margin: 0, 
                            lineHeight: 1.8, 
                            paddingBottom: processLine.trim() ? '1rem' : '0',
                            fontSize: '1.05rem',
                            letterSpacing: '0.01em',
                            color: 'rgba(255,255,255,0.95)'
                        }}>
                            {parsed}
                        </div>
                    );
                });
            })}
        </div>
    );
};

export default FormatMathText;
