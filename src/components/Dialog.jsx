import './Dialog.css';

// @ts-ignore
export default function Dialog({ setOpen, children }) {
    return <div className="dialog-overlay" role="dialog" aria-modal="true" aria-labelledby="settings-dialog-title" onClick={() => setOpen(false)}>
        <div className="dialog" onClick={(event) => event.stopPropagation()}>
            <div className="dialog-header">
                <h2 id="settings-dialog-title">Settings</h2>
                <button className="dialog-close" type="button" aria-label="Close settings" onClick={() => setOpen(false)}>
                    ×
                </button>
            </div>
            <div className="dialog-body">
                {children}
            </div>
            <div className="dialog-actions">
                <button type="button" onClick={() => setOpen(false)}>
                    Close
                </button>
            </div>
        </div>
    </div>
}